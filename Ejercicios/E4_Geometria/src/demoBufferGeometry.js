import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { createCylinder, createClosedCylinder } from './cylinder.js';
import { createSphere } from './sphere.js';
import { createPlane } from './plane.js';

import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';

let scene, camera, renderer, container, sceneManager;

function setupThreeJs() {
	container = document.getElementById('container3D');

	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	container.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(4, 4, 4);
	camera.lookAt(0, 0, 0);

	const controls = new OrbitControls(camera, renderer.domElement);

	const directionalLight = new THREE.DirectionalLight(0xffffff);
	directionalLight.position.set(1, 1, 1);
	scene.add(directionalLight);
	let directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);
	scene.add(directionalLightHelper);
	directionalLight.position.set(0, 0, 2);

	const pointLight = new THREE.PointLight(0xffffff, 10);
	pointLight.position.set(3, 5, 0);
	scene.add(pointLight);
	let pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
	scene.add(pointLightHelper);
	
	const pointLight2 = new THREE.PointLight(0xffffff, 10);
	pointLight2.position.set(-2, 2, -2);
	let pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 0.2);
	scene.add(pointLightHelper2);

	const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.25);
	//scene.add(hemisphereLight);

	const gridHelper = new THREE.GridHelper(5, 5);
	scene.add(gridHelper);

	window.addEventListener('resize', onResize);
	onResize();
}

function onResize() {
	camera.aspect = container.offsetWidth / container.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function buildScene() {
	const geo = createCylinder(1, 3, 16, 3);
	//const geo = createClosedCylinder(1, 3, 12, 3);
	const defaultMaterial = new THREE.MeshPhongMaterial({
		color: 0xff9900,
		side: THREE.DoubleSide,
		wireframe: false,
		shininess: 100,
		flatShading: false,
	});
	const normalMaterial = new THREE.MeshNormalMaterial();

	const material = defaultMaterial; // normalMaterial, defaultMaterial;
	const cylinder = new THREE.Mesh(geo, material);

	let normalMeshHelper = new VertexNormalsHelper(cylinder, 0.2, 0x00ff00, 1);
	//scene.add(normalMeshHelper);

	scene.add(cylinder);
	
	let geoplane = createPlane(1, 1, 20, 40);
	
	const plane = new THREE.Mesh(geoplane, material);
	plane.position.x = -2;
	plane.position.z = -2;
	scene.add(plane);

	const sphereGeometry = createSphere(2,4,4); //new THREE.SphereGeometry(1, 16, 16);
	const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: true });
	const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

	let sphereNormalHelper = new VertexNormalsHelper(sphere, 0.2, 0x00ff00, 1);
	
	//scene.add(sphereNormalHelper);

	scene.add(sphere);


}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

setupThreeJs();
buildScene();
animate();
