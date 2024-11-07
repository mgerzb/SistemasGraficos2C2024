import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

import * as dat from 'dat.gui';

import { RollerCoaster } from './rollerCoaster.js';

let torus, cube, cone;
const POINTS = 300;

export class SceneManager {
	
	constructor(scene) {
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(0, 5, 0);
		scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x666666);
		scene.add(ambientLight);

		const grid = new THREE.GridHelper(10, 10);
		scene.add(grid);

		const axes = new THREE.AxesHelper(3);
		scene.add(axes);
		
		this.rollerCoaster = new RollerCoaster();
		scene.add(this.rollerCoaster);
		
		
		this.properties =
		{
			showRLNormals: false,
			showRLTangents: false,
			showRLBinormals: false,
			showRLWireframe: false,
			showRLFlatShading: false
		}
		
		this.setupUI(this);
		
		this.scene = scene;
	}
	
	RLHelpers()
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
	
	setupUI(Manager)
	{
		let gui = new dat.GUI();
		let f1 = gui.addFolder('Helpers');
		let f2 = f1.addFolder('RLC');
	
		f2.add(this.properties, 'showRLNormals')
			.name('Normals')
			.onChange((value) => {this.RLHelpers()});
		f2.add(this.properties, 'showRLTangents')
			.name('Tangents')
			.onChange((value) => {this.RLHelpers()});
		f2.add(this.properties, 'showRLBinormals')
			.name('Binormals')
			.onChange((value) => {this.RLHelpers()});
			
		f2.add(this.properties, 'showRLWireframe')
			.name('Wireframe')
			.onChange((value) => {this.rollerCoaster.wireframe(value)});
		
		f2.add(this.properties, 'showRLFlatShading')
			.name('FlatShading')
			.onChange((value) => {this.rollerCoaster.flatShading(value)});
	}

	animate() {
	}
}
