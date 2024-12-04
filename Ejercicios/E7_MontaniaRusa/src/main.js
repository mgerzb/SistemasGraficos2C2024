import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { PMREMGenerator } from "three/src/extras/PMREMGenerator.js";

import { SceneManager } from './sceneManager.js';

import * as dat from 'dat.gui';
import Stats from 'stats.js'

let scene, renderer, trainBackContainer, trainFronContainer, container, sceneManager;
let fpvControls, orbitControls;
let lastUpdateTime;
let orbitCamera, fpvCamera;
let trainCameraFront, trainCameraBack, trainCameraSide, flyingChairCamera;

let cameras;
// Camera por defecto
const options =
{
	currentCamera: 0,
	currentCameraStr: "Orbital"
}

const CameraOptions = ["Orbital", "FPV", "Vagon Frente", "Vagon Trasero", "Vagon", "Silla Voladora", "Montaña Orbital", "Sillas Orbital"];
const CamerasOptionsMap = 
{
	"Orbital": 0,
	"FPV": 1,
	"Vagon Frente": 2,
	"Vagon Trasero": 3,
	"Vagon": 4,
	"Silla Voladora": 5,
	"Montaña Orbital": 6,
	"Sillas Orbital": 7
}

let cameraOptionsController;

// Altura de la camara FPV
const FPVHeight = 0.2;

let orbitCameraAngle = new THREE.Vector3(3,2,1);

// Indices para selección de posición para la camara orbital
const sceneCenteredIdx = 0;
const rollerCoasterIdx = 6;
const flyingChairIdx = 7;

// El modelo de la Montaña Rusa no está centrada, por lo que usamos este valor hardcodeado para posicionar la camara orbital
let centeredPosition = new THREE.Vector3(0,0,0);
let rollerCoasterPosition = new THREE.Vector3(-3, 0, 5);

// FPS counter
const stats = new Stats()

// Fija el movimiento de la camara FP al suelo
class FixedFPVControls extends FirstPersonControls
{
	constructor(camera, dom)
	{
		super(camera, dom);
	}
	
	extendedUpdate(delta)
	{ 
		this.update(delta);
		fpvCamera.position.y = FPVHeight;
	}
}

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	orbitCamera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 0.1, 100);
	orbitCamera.position.copy(orbitCameraAngle);
	orbitCamera.lookAt(centeredPosition.x, centeredPosition.y, centeredPosition.z);
	
	fpvCamera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 0.1, 100);
	fpvCamera.position.set(0, FPVHeight, 0);
	
	// Camaras para el vagon
	trainCameraFront = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
	trainCameraBack = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
	trainCameraSide = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
	
	flyingChairCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
	flyingChairCamera.position.set(0, -0.93, 0);
	
	sceneManager = new SceneManager(scene);
	sceneManager.addTrainCameras(trainCameraFront, trainCameraBack, trainCameraSide);
	sceneManager.addFlyingChairCamera(flyingChairCamera);
	
	sceneManager.remGenerator = new PMREMGenerator(renderer);
	
	// Posiciones para la camara orbital de cada atracción
	orbitControls = new OrbitControls(orbitCamera, renderer.domElement);
	orbitControls.enablePan = false;
	
	fpvControls = new FixedFPVControls(fpvCamera, renderer.domElement);
	fpvControls.lookSpeed = 0.03;
	fpvControls.movementSpeed = 0.5;
	fpvControls.enabled = false;
	
	cameras = [orbitCamera, fpvCamera, trainCameraFront, trainCameraBack, trainCameraSide, flyingChairCamera, orbitCamera, orbitCamera];

	window.addEventListener('resize', onResize);
	document.addEventListener('keydown', onKeyPress);
	
	onResize();
	
	let gui = new dat.GUI();
	cameraOptionsController = setupCameraOptions(gui);
	sceneManager.setupUI(gui);
	
	lastUpdateTime = Date.now();
	
	stats.showPanel(0) 
	document.body.appendChild(stats.dom)
}

function setupCameraOptions(gui)
{
	return gui.add(options, "currentCameraStr", CameraOptions).name("Camaras").onChange((value) => {options.currentCamera = CamerasOptionsMap[value]; configureControls()});
}

function onKeyPress(event)
{
	switch (event.key)
	{
		case 'c':
			SwitchCamera();
			break;
	}
}

function SwitchCamera()
{
	options.currentCamera += 1;
	options.currentCamera = options.currentCamera % cameras.length;
	
	options.currentCameraStr = CameraOptions[options.currentCamera];
	
	configureControls();
	
	// Actualiza la dat.ui para mostrar la nueva opción
	cameraOptionsController.updateDisplay();
}

function configureControls()
{
	fpvControls.enabled = options.currentCamera == 1;
	orbitControls.enabled = options.currentCamera == sceneCenteredIdx || options.currentCamera == rollerCoasterIdx || options.currentCamera == flyingChairIdx;
	
	if (options.currentCamera == sceneCenteredIdx)
	{
		//orbitCamera.lookAt(centeredPosition.x, centeredPosition.y, centeredPosition.z);
		orbitControls.target.copy(centeredPosition);
		orbitControls.target0.copy(centeredPosition);
		orbitControls.reset(); // Necesario para que se vuelva a alinear la camara
	}
	
	if (options.currentCamera == rollerCoasterIdx)
	{
		//orbitCamera.lookAt(rollerCoasterPosition.x, rollerCoasterPosition.y, rollerCoasterPosition.z);
		orbitControls.target.copy(rollerCoasterPosition);
		orbitControls.target0.copy(rollerCoasterPosition);
		orbitControls.reset();
	}
	
	if (options.currentCamera == flyingChairIdx)
	{
		//orbitCamera.lookAt(sceneManager.flyingChairs.position.x, sceneManager.flyingChairs.position.y, sceneManager.flyingChairs.position.z);
		orbitControls.target.copy(sceneManager.flyingChairs.position);
		orbitControls.target0.copy(sceneManager.flyingChairs.position);
		orbitControls.reset();
	}
}

function onResize() {
	for (let i = 0; i < cameras.length; i++)
	{
		cameras[i].aspect = container.offsetWidth / container.offsetHeight;
		cameras[i].updateProjectionMatrix();
	}

	renderer.setSize(container.offsetWidth, container.offsetHeight);
	fpvControls.handleResize();
}

function animate() {
	stats.begin();
	// TimeElapse since last animate call
	const Delta = Date.now() - lastUpdateTime;

	lastUpdateTime = Date.now();
	fpvControls.extendedUpdate(0.08);
	
	sceneManager.animate();
	renderer.render(scene, cameras[options.currentCamera]);
	stats.end();
	requestAnimationFrame(animate);
}

setupThreeJs();
animate();
