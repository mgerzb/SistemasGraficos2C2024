import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, container, font, text;

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x777777);
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 3, 6);
	camera.lookAt(0, 0, 0);

	const controls = new OrbitControls(camera, renderer.domElement);

	window.addEventListener('resize', onResize);
	onResize();
}

function loadFont() {
	const loader = new FontLoader();
	console.log(import.meta.env.VITE_FONTS_PATH);
	console.log(import.meta.env.MOD);
	loader.load(import.meta.env.VITE_FONTS_PATH, function (response) {
		font = response;
		buildScene();
	});
}

function buildScene() {
	const gridHelper = new THREE.GridHelper(10, 10);
	scene.add(gridHelper);

	const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0000ff, 1);
	scene.add(hemisphereLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight.position.set(1, 1, 1);
	scene.add(directionalLight);

	const coneGeometry = new THREE.ConeGeometry(0.25, 1);
	const coneMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
	const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
	coneMesh.position.set(-2, 0.5, -2);
	scene.add(coneMesh);

	let coneMesh2 = coneMesh.clone();
	coneMesh2.material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
	coneMesh2.position.set(2, 0.5, -2);
	scene.add(coneMesh2);

	const parameters = {
		font: font,

		size: 0.6,
		height: 0.1,
		curveSegments: 2,

		bevelThickness: 0.1,
		bevelSize: 0,
		bevelEnabled: false,
	};

	let geo = new TextGeometry('3D', parameters);
	let mat = new THREE.MeshPhongMaterial({ color: 0xffff00 });
	text = new THREE.Mesh(geo, mat);
	text.matrixAutoUpdate = false;
	window.text = text;

	const axesHelper = new THREE.AxesHelper(1);
	scene.add(axesHelper);

	const axesHelper2 = new THREE.AxesHelper(0.5);
	text.add(axesHelper2);
	scene.add(text);

	const loader = new GLTFLoader();
	loader.load(import.meta.env.VITE_TARGETS, function (gltf) {
		const targets = gltf.scene;
		scene.add(targets);
	});

	// *************************************************************************************
	//	Ejercicio:
	//	definir la matriz de transformación para cada uno de los 4 modelos en violeta
	//  y clonar el texto para cada uno de ellos
	//  Ayuda: las totaciones son multiplos de Math.PI/4 (radianes)
	//        las escalas son multiplos de 0.25
	// *************************************************************************************

	let copy1 = text.clone();
	let matrix = new THREE.Matrix4();
	const mT = new THREE.Matrix4();
	const mR = new THREE.Matrix4();
	const mE = new THREE.Matrix4();
	let axisRot = new THREE.Vector3(0,1,0);
	
	// Object 1

	mT.makeTranslation(-1,0,1);
	mR.makeRotationAxis(axisRot, Math.PI/2),
	mE.makeScale(0.5, 1, 4);
	matrix.multiply(mT);
	matrix.multiply(mR);
	matrix.multiply(mE);

	copy1.matrix.copy(matrix);
	copy1.matrix.AutoUpdate=false;
	scene.add(copy1);

	// Object 2
	
	copy1 = text.clone();
	matrix = new THREE.Matrix4();
	axisRot = (new THREE.Vector3(0,1,0)).normalize()
	let axisRot2 = (new THREE.Vector3(1,0,0)).normalize()
	
	mT.makeTranslation(2,0,0);
	mR.makeRotationAxis(axisRot, Math.PI),
	mE.makeScale(1, 0.5, -1);
	matrix.multiply(mT);
	matrix.multiply(mR);
	mR.makeRotationAxis(axisRot2, Math.PI/4),
	matrix.multiply(mR);
	matrix.multiply(mE);

	copy1.matrix.copy(matrix);
	scene.add(copy1);
	
	// Object 3
	
	copy1 = text.clone();
	matrix = new THREE.Matrix4();
	axisRot = (new THREE.Vector3(0,0,1)).normalize()
	
	mT.makeTranslation(-2,0,0);
	mR.makeRotationAxis(axisRot, Math.PI/4),
	mE.makeScale(2, 1, 1);
	matrix.multiply(mT);
	matrix.multiply(mR);
	matrix.multiply(mE);

	copy1.matrix.copy(matrix);
	scene.add(copy1);
	
	// Object 4
	
	copy1 = text.clone();
	matrix = new THREE.Matrix4();
	axisRot = (new THREE.Vector3(0,1,0)).normalize()
	
	mT.makeTranslation(0,0,-1);
	mR.makeRotationAxis(axisRot, Math.PI/4),
	mE.makeScale(1, 2, 1);
	matrix.multiply(mT);
	matrix.multiply(mR);
	matrix.multiply(mE);

	copy1.matrix.copy(matrix);
	scene.add(copy1);
	// *************************************************************************************
}

function onResize() {
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

setupThreeJs();
loadFont();
animate();
