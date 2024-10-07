import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

import { SceneManager } from './sceneManager.js';
let scene, camera, renderer, container, sceneManager;

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 6, 6);
	camera.lookAt(0, 0, 0);

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
	renderer.render(scene, camera);
}

function setupUI(Manager)
{
	let gui = new dat.GUI();
	let f1 = gui.addFolder('Helpers');
	
	f1.add(Manager, 'toggleGridHelper').name('Grid');
	f1.add(Manager, 'toggleAxesHelper').name('Axis');
}

setupThreeJs();
sceneManager = new SceneManager(scene);
setupUI(sceneManager);
animate();
