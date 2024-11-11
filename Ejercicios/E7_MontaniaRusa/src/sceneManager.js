import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

import * as dat from 'dat.gui';

import { RollerCoaster } from './rollerCoaster.js';
import { Train } from './train.js';

const POINTS = 300;

export class SceneManager {
	
	constructor(scene) {
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(0, 5, 0);
		scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x666666);
		scene.add(ambientLight);

		this.grid = new THREE.GridHelper(10, 10);

		this.axes = new THREE.AxesHelper(3);
		//scene.add(axes);
		
		this.rollerCoaster = new RollerCoaster();
		scene.add(this.rollerCoaster);
		
		this.train = new Train();
		this.train.scale.x = 0.125;
		this.train.scale.y = 0.125;
		this.train.scale.z = 0.125;
		
		this.rollerCoaster.addTrain(this.train);
		
		this.properties =
		{
			showGrid: true,
			showAxes: true,
			showRLNormals: false,
			showRLTangents: false,
			showRLBinormals: false,
			showRLWireframe: false,
			showRLFlatShading: false
		}
		
		this.scene = scene;
		
		this.setupUI(this);
		this.rLHelpersUpdate();
		this.worldHelpersUpdate();
		
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
	
	setupUI(Manager)
	{
		let gui = new dat.GUI();
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
	
	addTrainCameras(c1, c2)
	{
		this.train.add(c1);
		this.train.add(c2);
		
		const helper = new THREE.CameraHelper( c2 );
		this.scene.add(helper);
	}

	animate() {
		this.rollerCoaster.animate();
	}
}
