import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { SceneManager } from './sceneManager.js';
let scene, camera, renderer, container, sceneManager;

let trainCamera1, trainCamera2;

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(5, 4, 1);
	camera.lookAt(0, 0, 0);
	
	trainCamera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
	trainCamera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
	
	trainCamera1.position.set(0, 0.42, 0);
	trainCamera1.lookAt(0, 0.42, 1000);
	trainCamera2.position.set(0, 0.42, -0.8);
	trainCamera2.lookAt(0, 0.42, -1000);
	sceneManager = new SceneManager(scene);
	sceneManager.addTrainCameras(trainCamera1, trainCamera2);

	const controls = new OrbitControls(camera, renderer.domElement);

	window.addEventListener('resize', onResize);
	onResize();
}

function onResize() {
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);
	sceneManager.animate();
	renderer.render(scene, trainCamera2);
}

setupThreeJs();
animate();
