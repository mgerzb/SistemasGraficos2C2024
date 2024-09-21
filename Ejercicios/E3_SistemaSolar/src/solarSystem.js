import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Trail } from './trails';

/* 
*********************************************************************************
            
Consigna
--------

1) Definir en setupSceneGraph() el arbol de escena de tal modo que las transformaciones de Tierra, 
la Luna, la Estacion Espacial (ISS) y la nave Apollo, repoduzcan los movimientos reales 
de cada cuerpo.

2) Actualizar las transformaciones de los objetos en el metodo update(), tienen ahi la variable time


Condiciones a cumplir:
---------------------

- La tierra rota alrededor del sol sobre el plano XZ (ciclo anual)
- La tierra tiene su eje inclinado de 23 grados (ver explicacion en carpeta images/tierra*.jpg). 
- El eje de la tierra no cambia su orientación respecto del sistema de coordenadas global (ver opcion showHelpers)
- La tierra rota sobre su eje (ciclo del día)            
- Rotación de la luna alrededor de la tierra (una vuelta cada 30 días y siempre expone la misma cara hacia la tierra)
- La nave Apolo debe estar ubicada sobre la cara oculta de la luna
- La ISS debe orbital alrededor de la tierra pasando por encima y por debajo de la misma y 
  orientando sus paneles en un plano perpendicular al vector normal de la superficie de la tierra.            

*********************************************************************************
*/
export class SolarSystem {
	models = {};
	cameras = {
		earth: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000),
		moon: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000),
		iss: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000),
		apollo: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000),
	};
	currentCamera = 'apollo';
	envMapTexture = null;
	isReady = false;

	camerasPosition = {
		earth: new THREE.Vector3(-80, 0, 80),
		moon: new THREE.Vector3(0, 0, 50),
		iss: new THREE.Vector3(0, 30, 30),
		apollo: new THREE.Vector3(30, 20, 50),
	};
	constructor(scene) {
		this.scene = scene;
		// Load the solar system model

		const textureLoader = new THREE.TextureLoader();
		this.envMapTexture = textureLoader.load(import.meta.env.VITE_MAPS_PATH + '/envMap1.jpg', (texture) => {
			texture.mapping = THREE.EquirectangularReflectionMapping;
			this.loadModels();
		});
	}

	loadModels() {
		const loader = new GLTFLoader();
		loader.load(import.meta.env.VITE_MODELS_PATH + '/solarSystem.glb', (gltf) => {
			// Callback function when the model is loaded
			this.onLoadComplete(gltf);
		});
	}

	buildHelpers() {
		this.helpers = new THREE.Group();
		this.trails = new THREE.Group();
		const ORBIT_RADIUS = 300;
		const EARTH_TILT = 23;
		let points = [];
		for (let i = 0; i <= 360; i += 10) {
			const x = ORBIT_RADIUS * Math.cos((i * Math.PI) / 180);
			const y = 0;
			const z = ORBIT_RADIUS * Math.sin((i * Math.PI) / 180);
			points.push(new THREE.Vector3(x, y, z));
		}

		const geometry = new THREE.BufferGeometry().setFromPoints(points);

		const material = new THREE.LineBasicMaterial({ color: 0x2222ff, transparent: true, opacity: 0.5 });
		const circle = new THREE.Line(geometry, material);
		this.helpers.add(circle);

		points = [];
		for (let i = 0; i <= 360; i += 45) {
			const x = ORBIT_RADIUS * Math.cos((i * Math.PI) / 180);
			const z = ORBIT_RADIUS * Math.sin((i * Math.PI) / 180);

			const dx = Math.sin((EARTH_TILT * Math.PI) / 180) * 20;
			const dy = Math.cos((EARTH_TILT * Math.PI) / 180) * 20;
			points.push(new THREE.Vector3(x, dy, z + dx));
			points.push(new THREE.Vector3(x, -dy, z - dx));
		}
		const geo2 = new THREE.BufferGeometry().setFromPoints(points);
		const sticks = new THREE.LineSegments(geo2, material);
		this.helpers.add(sticks);
		this.helpers.visible = false;
		this.trails.visible = false;
		this.scene.add(this.helpers);
		this.scene.add(this.trails);

		this.earthTrail = new Trail(this.trails, 2000, new THREE.Vector3(0, 0, 0), 0.9);
		this.moonTrail = new Trail(this.trails, 2000, new THREE.Vector3(0, 0, 0), 100.7);
		this.issTrail = new Trail(this.trails, 2000, new THREE.Vector3(0, 0, 0), 0.5);
	}

	onLoadComplete(gltf) {
		// Code to handle the loaded model
		// ...
		gltf.scene.traverse((child) => {
			this.models[child.name] = child;
			console.log(child.name);
		});

		this.scene.add(this.models['sun']);
		this.scene.add(this.models['moon']);
		this.scene.add(this.models['earth']);
		this.scene.add(this.models['iss']);
		this.scene.add(this.models['apollo']);
		Object.values(this.models).forEach((model) => {
			model.castShadow = true;
			model.receiveShadow = true;
		});

		this.models['earth'].position.set(300, 0, 0);
		this.models['moon'].position.set(400, 0, 0);
		this.models['iss'].position.set(350, 0, 0);
		this.models['apollo'].position.set(450, 0, 0);

		this.models['apollo'].material.envMap = this.envMapTexture;
		this.models['iss'].material.envMap = this.envMapTexture;

		Object.entries(this.cameras).forEach(([name, camera]) => {
			this.models[name].add(camera);
			camera.position.copy(this.camerasPosition[name]);
			camera.lookAt(this.models[name].localToWorld(new THREE.Vector3(0, 0, 0)));
		});

		this.setupSceneGraph();
		this.buildHelpers();
		this.isReady = true;
	}

	setupSceneGraph() {
		let sun = this.models['sun'];
		let earth = this.models['earth'];
		let moon = this.models['moon'];
		let iss = this.models['iss'];
		let apollo = this.models['apollo'];

		// definir aqui el grafo de escena ...
		
		this.earthRot = new THREE.Group();
		this.earthRot.add(moon);
		this.earthRot.add(earth);
		this.earthRot.add(iss);
		moon.add(apollo);
		
		
		
		// this.moonRot = new THREE.Group();
		// //this.moonRot.translate(earth.position.x, earth.position.y, earth.position.z);
		// this.moonRot.add(this.earthRot);
		// this.moonRot.add(moon);
		
		
		this.earthSolarSystem = new THREE.Group();
		this.earthSolarSystem.add(sun);
		this.earthSolarSystem.add(this.earthRot);
		
		this.scene.add(this.earthSolarSystem);
		


		// *****************************************
	}
	
	setupISSOrbit(iss, time)
	{
		let issOrbitMatrix = new THREE.Matrix4();
		const mTa = new THREE.Matrix4();
		const mROrbit = new THREE.Matrix4();
		const mTb = new THREE.Matrix4();
		const mRAxis = new THREE.Matrix4();
		const mRAxis2 = new THREE.Matrix4();
		
		mTa.makeTranslation(50,0,0);
		mTb.makeTranslation(300,0,0);
		
		//Orbita
		mROrbit.makeRotationZ(-Math.PI*time*0.5);
		
		// Alineacion de paneles
		mRAxis.makeRotationY(-Math.PI*0.5);
		mRAxis2.makeRotationX(-Math.PI*0.6);
		
		issOrbitMatrix.multiply(mTb);
		issOrbitMatrix.multiply(mROrbit);
		issOrbitMatrix.multiply(mTa);
		issOrbitMatrix.multiply(mRAxis);
		issOrbitMatrix.multiply(mRAxis2);
		
		
		iss.matrixAutoUpdate=false;
		iss.matrix.copy(issOrbitMatrix);

	}
	
	setupMoonOrbit(moon, time, apollo)
	{
		let moonOrbitMatrix = new THREE.Matrix4();
		const mTa = new THREE.Matrix4();
		const mROrbit = new THREE.Matrix4();
		const mTb = new THREE.Matrix4();
		const mRAxis = new THREE.Matrix4();
		
		apollo.position.x = 10;
		apollo.rotation.z = -Math.PI/2;
		
		// First we traslate the moon to a equivalent distance to earth but with the origin
		mTa.makeTranslation(100,0,0);
		// Moon orbit step
		mROrbit.makeRotationY(2*Math.PI*time*0.5);
		// Moon rotation (same agular speed as orbit)c
		mRAxis.makeRotationY(2*Math.PI*time*0.000375);
		// Move the moon near earth again
		mTb.makeTranslation(300,0,0);
		
		moonOrbitMatrix.multiply(mTb);
		moonOrbitMatrix.multiply(mROrbit);
		moonOrbitMatrix.multiply(mTa);
		moonOrbitMatrix.multiply(mRAxis);
		
		moon.matrixAutoUpdate=false;
		moon.matrix.copy(moonOrbitMatrix);
	}
	
	setupEarthOrbit(time, earth)
	{
		this.earthSolarSystem.rotation.y = -2*Math.PI*time*0.05;
		
		const mRRot = new THREE.Matrix4();
		const mRAxis = new THREE.Matrix4();
		const mRAxis2 = new THREE.Matrix4();
		const mT = new THREE.Matrix4();
		
		let earthRotMatrix = new THREE.Matrix4();
		
		mT.makeTranslation(300,0,0);
		mRAxis.makeRotationY(2*Math.PI*time*0.3);
		mRAxis2.makeRotationX(Math.PI*23/180);
		
		// Invertimos la rotación para devolver la inclinación al plano original
		mRRot.makeRotationY(-2*Math.PI*time*0.05);
		mRRot.invert();
		
		earthRotMatrix.multiply(mT);
		earthRotMatrix.multiply(mRRot);
		earthRotMatrix.multiply(mRAxis2);
		earthRotMatrix.multiply(mRAxis);
		
		earth.matrixAutoUpdate=false;
		earth.matrix.copy(earthRotMatrix);

	}

	update(time) {
		if (!this.isReady) return;
		//console.log('time:', time);

		let sun = this.models['sun'];
		let earth = this.models['earth'];
		let moon = this.models['moon'];
		let iss = this.models['iss'];
		let apollo = this.models['apollo'];

		// Actualizar aqui las transformaciones ...
		
		sun.rotation.y = 2*Math.PI*time*0.05;
		this.setupEarthOrbit(time, earth)

		
		// ISS orbit
		this.setupISSOrbit(iss, time);
		
		// moon orbit on earth
		this.setupMoonOrbit(moon, time, apollo);

		
		//moon.rotation.y = 2*Math.PI*time*0.5;

		// *****************************************

		this.earthTrail.pushPosition(earth.localToWorld(new THREE.Vector3(0, 0, 0)));
		this.moonTrail.pushPosition(moon.localToWorld(new THREE.Vector3(0, 0, 0)));
		this.issTrail.pushPosition(iss.localToWorld(new THREE.Vector3(0, 0, 0)));
	}

	onResize(aspect) {
		Object.values(this.cameras).forEach((camera) => {
			camera.aspect = aspect;
			camera.updateProjectionMatrix();
		});
	}
	setCurrentCamera(name) {
		if (this.cameras[name]) {
			console.log('camera', name);
			this.currentCamera = name;
		}
	}
	getCurrentCamera() {
		return this.cameras[this.currentCamera];
	}

	showHelpers(value) {
		this.helpers.visible = value;
		
		if (this.helpers.visible)
		{
			let axesHelper = new THREE.AxesHelper(20);
			axesHelper.name = "isshelper";
			this.models['iss'].add(axesHelper.clone());
			axesHelper.name = "moonhelper";
			this.models['moon'].add(axesHelper);
			let earthHelper = new THREE.AxesHelper(50);
			earthHelper.name = "earthelper";
			this.models['earth'].add(earthHelper);
		} else {
			this.models['iss'].remove(this.models['iss'].getObjectByName("isshelper"));
			this.models['moon'].remove(this.models['moon'].getObjectByName("moonhelper"));
			this.models['earth'].remove(this.models['earth'].getObjectByName("earthelper"));
		}
	}

	showTrails(value) {
		this.trails.visible = value;
	}
}
