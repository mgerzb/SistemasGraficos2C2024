import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sky } from 'three/addons/objects/Sky.js';

import { SceneManager } from './sceneManager.js';
let scene, camera, renderer, trainBackRenderer, trainFrontRenderer, trainBackContainer, trainFronContainer, container, sceneManager;
let trainCameraBack, trainCameraFront, trainCameraSide;
let sun, sky;

function setupThreeJs() {
	container = document.getElementById('container3D');
	trainBackContainer = document.getElementById('container3DC1');
	trainFronContainer = document.getElementById('container3DC2');

	renderer = new THREE.WebGLRenderer();
	trainBackRenderer = new THREE.WebGLRenderer();
	trainFrontRenderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);
	trainBackContainer.appendChild(trainBackRenderer.domElement);
	trainFronContainer.appendChild(trainFrontRenderer.domElement);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight *0.5), 0.1, 100);
	camera.position.set(5, 4, 1);
	camera.lookAt(0, 0, 0);
	//camera.scale.set(0.1,0.1,0.1);
	
	trainCameraBack = new THREE.PerspectiveCamera(45, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	trainCameraFront = new THREE.PerspectiveCamera(45, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	trainCameraSide= new THREE.PerspectiveCamera(45, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	
	sceneManager = new SceneManager(scene);
	sceneManager.addTrainCameras(trainCameraBack, trainCameraFront, trainCameraSide);

	const controls = new OrbitControls(camera, renderer.domElement);

	window.addEventListener('resize', onResize);
	onResize();
	
	initSky();

	scene.fog = new THREE.Fog( 0x7c503f, 35, 80);
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
	
	//renderer.toneMappingExposure = effectController.exposure;
	renderer.render( scene, camera );
	
}

function onResize() {
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();
	
	trainCameraSide.aspect = trainBackContainer.offsetWidth / trainBackContainer.offsetHeight;
	trainCameraSide.updateProjectionMatrix();
	
	trainCameraFront.aspect = trainFronContainer.offsetWidth / trainFronContainer.offsetHeight;
	trainCameraFront.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
	trainBackRenderer.setSize(trainBackContainer.offsetWidth, trainBackContainer.offsetHeight);
	trainFrontRenderer.setSize(trainFronContainer.offsetWidth, trainFronContainer.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);
	sceneManager.animate();
	renderer.render(scene, camera);
	trainBackRenderer.render(scene, trainCameraSide);
	trainFrontRenderer.render(scene, trainCameraFront);
}

setupThreeJs();
animate();
