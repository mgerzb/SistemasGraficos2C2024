import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { vertexShader, fragmentShader } from './shadersComposicion.js';

import * as dat from 'dat.gui';

let scene, camera, renderer, container, material;

let params = {};

const textures = {
	caballo: { url: 'horse.jpg', object: null },
};

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xcccccc);
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
	camera.position.set(3, 0, 0);
	camera.lookAt(0, 0, 0);

	const controls = new OrbitControls(camera, renderer.domElement);

	const light = new THREE.DirectionalLight(0xffffff, 5);

	light.position.set(1, 1, 1);
	scene.add(light);

	const ambientLight = new THREE.AmbientLight(0x666666);
	scene.add(ambientLight);

	const grid = new THREE.GridHelper(10, 10);
	scene.add(grid);

	window.addEventListener('resize', onResize);
	onResize();
}

function onResize() {
	let aspect = container.offsetWidth / container.offsetHeight;

	camera.aspect = aspect;

	camera.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function buildScene() {
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const mat = new THREE.MeshPhongMaterial({ color: 0xffffff, map: textures['caballo'].object });

	const plane = new THREE.Mesh(geometry, mat);
	scene.add(plane);
}

function loadTextures(callback) {
	const loadingManager = new THREE.LoadingManager();

	loadingManager.onLoad = () => {
		console.log('All textures loaded');
		callback();
	};

	for (const key in textures) {
		const loader = new THREE.TextureLoader(loadingManager);
		const texture = textures[key];
		texture.object = loader.load('maps/' + texture.url, onTextureLoaded.bind(this, key), null, (error) => {
			console.error(error);
		});
	}
}

function onTextureLoaded(key, texture) {
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	textures[key].object = texture;
	console.log(`Texture ${key} loaded`);
}

let clock = new THREE.Clock();
let offset = 0;
let frame = 0;

function animate() {
	requestAnimationFrame(animate);
	/*
     Actualizar los parametros de la textura para animar la secuencia

    */

	let tex = textures['caballo'].object;

	let time = clock.getElapsedTime() % 1;

	if (time < 0.25)
	{
		if (offset == 3)
		{
			frame += 1;
			frame = frame % 4;
		}
		offset = 0;
	}
	else if (time < 0.5)
		offset = 1;
	else if (time < 0.75)
		offset = 2;
	else
		offset = 3;

	tex.repeat.set(0.25,0.25);
	tex.offset.set(1 + offset*0.25,1.75 - frame* 0.25);

	//tex.offset;
	//tex.repeat;

	renderer.render(scene, camera);
}

function start() {
	setupThreeJs();
	animate();
	buildScene();
}

loadTextures(start);
