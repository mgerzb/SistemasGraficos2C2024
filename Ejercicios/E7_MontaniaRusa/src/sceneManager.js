import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

import * as dat from 'dat.gui';
import { CamerasId } from  './constants.js';

import { RollerCoaster } from './rollerCoaster.js';
import { Train } from './train.js';
import { FlyingChairs } from './flyingChairs.js';

import { Sky } from 'three/addons/objects/Sky.js';

const POINTS = 300;

export class SceneManager {
	
	constructor(scene) {
		const light = new THREE.DirectionalLight(0xffffff, 1.1);

		light.position.set(2, 5, 0);
		light.lookAt(0,0,0);
		scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x666666);
		scene.add(ambientLight);

		this.grid = new THREE.GridHelper(10, 10);

		this.axes = new THREE.AxesHelper(3);
		//scene.add(axes);
		
		this.rollerCoaster = new RollerCoaster();
		scene.add(this.rollerCoaster);
		
		this.train = new Train();
		
		this.rollerCoaster.addTrain(this.train);
		
		this.flyingChairs = new FlyingChairs();
		this.flyingChairs.position.z = -3.3;
		this.flyingChairs.position.x = -3;
		scene.add(this.flyingChairs);
		
		const groundGeometry = new THREE.PlaneGeometry( 1000, 1000 );
		const groundMaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
		const ground = new THREE.Mesh( groundGeometry, groundMaterial );

		ground.rotation.x = -Math.PI/2;
		
		scene.add(ground);
		
		this.properties =
		{
			showGrid: true,
			showAxes: true,
			showRLNormals: false,
			showRLTangents: false,
			showRLBinormals: false,
			showRLWireframe: false,
			showRLFlatShading: false,
			
			cameras: "t1"
		}
		
		
		// TODO Make fog color dynamic with sky
		scene.fog = new THREE.Fog( 0x7c503f, 20, 80);
		
		this.scene = scene;
		
		this.initSky()
		
		this.rLHelpersUpdate();
		this.worldHelpersUpdate();
		
	}
	
	initSky() {
			
		this.effectController = {
			turbidity: 1.8,
			rayleigh: 0.755,
			mieCoefficient: 0,
			mieDirectionalG: 0.287,
			elevation: 50,
			azimuth: 250,
			exposure: 0.28
		};
		// Add Sky
		this.sky = new Sky();
		this.sky.scale.setScalar( 4500 );
		this.scene.add( this.sky );
		
		this.sun = new THREE.Vector3();
		
		this.skyChanged();
	}
	
	skyChanged() {
		const effectController = this.effectController;
		const uniforms = this.sky.material.uniforms;
		uniforms[ 'turbidity' ].value = effectController.turbidity;
		uniforms[ 'rayleigh' ].value = effectController.rayleigh;
		uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
		uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;
		
		const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
		const theta = THREE.MathUtils.degToRad( effectController.azimuth );
		
		this.sun.setFromSphericalCoords( 1, phi, theta );
		
		uniforms[ 'sunPosition' ].value.copy( this.sun );
		
		const clamp = (val, min, max) => Math.min(Math.max(val, min), max)
		
		let vSunfade = 1.0 - clamp( 1.0 - Math.exp( ( this.sun.y / 450000.0 ) ), 0.0, 1.0 );
		let vBetaR = new THREE.Vector3(1.8399918514433978e14, 2.7798023919660528e14, 4.0790479543861094e14 );
		let vBetaM =  effectController.mieCoefficient * 0.434 * (( 0.2 * effectController.turbidity ) * 10e-18) * new THREE.Vector3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );
		let rayleighCoefficient = effectController.rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );
		
		const color = new THREE.Color();
		if (effectController.elevation < 0)
		{
			color.setHex(0x44393f); // "Black"
		}
		else {
			const factor = Math.sin(phi)**253;//Math.abs((90 - effectController.elevation))/90;
			color.lerpColors(new THREE.Color(0xffffff), new THREE.Color(0x8e805c), factor) ;
		}
		
		this.scene.fog.color = color;
		
	}
	
	rLHelpersUpdate()
	{
		if (this.properties.showRLNormals)
		{
			this.rollerCoaster.drawNormals(this.scene);
		} else
		{
			this.rollerCoaster.hideNormals(this.scene);
		}
		
		if (this.properties.showRLTangents)
		{
			this.rollerCoaster.drawTangents(this.scene);
		} else
		{
			this.rollerCoaster.hideTangents(this.scene);
		}
		
		if (this.properties.showRLBinormals)
		{
			this.rollerCoaster.drawBinormals(this.scene);
		} else
		{
			this.rollerCoaster.hideBinormals(this.scene);
		}
		
	}
	
	worldHelpersUpdate()
	{
		this.properties.showGrid ? this.scene.add(this.grid):this.scene.remove(this.grid);
		
		this.properties.showAxes ? this.scene.add(this.axes):this.scene.remove(this.axes);
	}
	
	setupUI(gui)
	{
		let f1 = gui.addFolder('Helpers');
		
		this.setupWorldHelpers(f1);
		this.setupRLHelpers(f1);
		
	}
	
	setupWorldHelpers(f1)
	{
		let f2 = f1.addFolder('General');
		
		f2.add(this.properties, 'showGrid')
			.name('Grid')
			.onChange((value) => {this.properties.showGrid = value; this.worldHelpersUpdate();});
		
		f2.add(this.properties, 'showAxes')
			.name('Axes')
			.onChange((value) => {this.properties.showAxes = value; this.worldHelpersUpdate();});
			
		f2.add(this.effectController, 'elevation', -180, 180).name('SunElevation').onChange((value) => {this.skyChanged();});
	}
	
	setupRLHelpers(f1)
	{
		let f2 = f1.addFolder('RLC');
	
		f2.add(this.properties, 'showRLNormals')
			.name('Normals')
			.onChange((value) => {this.rLHelpersUpdate()});
		f2.add(this.properties, 'showRLTangents')
			.name('Tangents')
			.onChange((value) => {this.rLHelpersUpdate()});
		f2.add(this.properties, 'showRLBinormals')
			.name('Binormals')
			.onChange((value) => {this.rLHelpersUpdate()});
			
		f2.add(this.properties, 'showRLWireframe')
			.name('Wireframe')
			.onChange((value) => {this.rollerCoaster.wireframe(value)});
		
		f2.add(this.properties, 'showRLFlatShading')
			.name('FlatShading')
			.onChange((value) => {this.rollerCoaster.flatShading(value)});
	}
	
	addTrainCameras(front, back, side)
	{
		front.name = CamerasId.TrainFront;
		back.name = CamerasId.TrainBack;
		side.name = CamerasId.TrainSide;
		
		this.rollerCoaster.add(front);
		this.rollerCoaster.add(back);
		this.rollerCoaster.add(side);
	}
	
	addFlyingChairCamera(Camera)
	{
		this.flyingChairs.chairs[0].add(Camera);
	}

	animate() {
		this.rollerCoaster.animate();
		this.flyingChairs.animate();
	}
}
