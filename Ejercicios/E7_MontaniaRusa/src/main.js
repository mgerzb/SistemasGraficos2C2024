import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { SceneManager } from './sceneManager.js';
let scene, camera, renderer, c1renderer, c2renderer, c1container, c2container, container, sceneManager;

let trainCamera1, trainCamera2;

function setupThreeJs() {
	container = document.getElementById('container3D');
	c1container = document.getElementById('container3DC1');
	c2container = document.getElementById('container3DC2');

	renderer = new THREE.WebGLRenderer();
	c1renderer = new THREE.WebGLRenderer();
	c2renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);
	c1container.appendChild(c1renderer.domElement);
	c2container.appendChild(c2renderer.domElement);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight *0.6), 0.1, 1000);
	camera.position.set(5, 4, 1);
	camera.lookAt(0, 0, 0);
	
	trainCamera1 = new THREE.PerspectiveCamera(75, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	trainCamera2 = new THREE.PerspectiveCamera(75, (window.innerWidth*0.5) / (window.innerHeight*0.25), 0.1, 100);
	
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
	
	trainCamera1.aspect = c1container.offsetWidth / c1container.offsetHeight;
	trainCamera1.updateProjectionMatrix();
	
	trainCamera2.aspect = c2container.offsetWidth / c2container.offsetHeight;
	trainCamera2.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
	c1renderer.setSize(c1container.offsetWidth, c1container.offsetHeight);
	c2renderer.setSize(c2container.offsetWidth, c2container.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);
	sceneManager.animate();
	renderer.render(scene, camera);
	c1renderer.render(scene, trainCamera1);
	c2renderer.render(scene, trainCamera2);
}

setupThreeJs();
animate();
