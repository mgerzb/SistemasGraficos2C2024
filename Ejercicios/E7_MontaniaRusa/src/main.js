import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { Sky } from 'three/addons/objects/Sky.js';

import { SceneManager } from './sceneManager.js';

let scene, renderer, trainBackRenderer, trainFrontRenderer, trainBackContainer, trainFronContainer, container, sceneManager;
let fpvControls, orbitControls;
let LastUpdateTime;
let orbitCamera, fpvCamera;
let trainCameraFront, trainCameraBack, trainCameraSide;
let sun, sky;

let cameras = [orbitCamera, fpvCamera, trainCameraBack, trainCameraFront, trainCameraSide];
// Camera por defecto
let currentCamera = 0;

// Altura de la camara FPV
const FPVHeight = 0.2;

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
	trainBackRenderer = new THREE.WebGLRenderer();
	trainFrontRenderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	orbitCamera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 0.1, 100);
	orbitCamera.position.set(3, 2, 1);
	orbitCamera.lookAt(0,0,0);
	
	fpvCamera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight), 0.1, 100);
	fpvCamera.position.set(0, FPVHeight, 0);
	
	trainCameraFront = new THREE.PerspectiveCamera(45, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	trainCameraBack = new THREE.PerspectiveCamera(45, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	trainCameraSide= new THREE.PerspectiveCamera(45, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	
	sceneManager = new SceneManager(scene);
	sceneManager.addTrainCameras(trainCameraFront, trainCameraBack, trainCameraSide);

	orbitControls = new OrbitControls(orbitCamera, renderer.domElement);
	
	fpvControls = new FixedFPVControls(fpvCamera, renderer.domElement);
	fpvControls.lookSpeed = 0.03;
	fpvControls.movementSpeed = 0.5;
	fpvControls.enabled = false;
	
	cameras = [orbitCamera, fpvCamera, trainCameraBack, trainCameraFront, trainCameraSide];

	window.addEventListener('resize', onResize);
	document.addEventListener('keydown', onKeyPress);
	
	onResize();
	
	initSky();

	scene.fog = new THREE.Fog( 0x7c503f, 35, 80);
	
	LastUpdateTime = Date.now();
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
	currentCamera += 1;
	currentCamera = currentCamera % cameras.length;
	
	ConfigureControls();
}

function ConfigureControls()
{
	fpvControls.enabled = currentCamera == 1;
	orbitControls.enabled = currentCamera == 0;
}

const effectController = {
	turbidity: 10,
	rayleigh: 2,
	mieCoefficient: 0,
	mieDirectionalG: 0.8,
	elevation: 50,
	azimuth: 250,
	exposure: 0.1
};

function initSky() {
	
	// Add Sky
	sky = new Sky();
	sky.scale.setScalar( 450 );
	scene.add( sky );
	
	sun = new THREE.Vector3();
	
	guiChanged();
}

function guiChanged() {
	
	const uniforms = sky.material.uniforms;
	uniforms[ 'turbidity' ].value = effectController.turbidity;
	uniforms[ 'rayleigh' ].value = effectController.rayleigh;
	uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
	uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;
	
	const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
	const theta = THREE.MathUtils.degToRad( effectController.azimuth );
	
	sun.setFromSphericalCoords( 1, phi, theta );
	
	uniforms[ 'sunPosition' ].value.copy( sun );
	
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
	requestAnimationFrame(animate);
	// TimeElapse since last animate call
	const Delta = Date.now() - LastUpdateTime;

	LastUpdateTime = Date.now();
	fpvControls.extendedUpdate(0.08);
	
	sceneManager.animate();
	renderer.render(scene, cameras[currentCamera]);
}

setupThreeJs();
animate();
