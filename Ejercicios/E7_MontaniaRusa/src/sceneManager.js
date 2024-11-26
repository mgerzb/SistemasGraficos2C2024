import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

import * as dat from 'dat.gui';
import { CamerasId } from  './constants.js';

import { RollerCoaster } from './rollerCoaster.js';
import { Train } from './train.js';
import { FlyingChairs } from './flyingChairs.js';
import { LightManager} from './lightManager.js';
import { StreetLamp } from './streetLamp.js';
import { vertexShader, fragmentShaderVars, fragmentShader } from './shaders/shadersGround.js';

const textures = {
	tierra: { url: 'tierra.jpg', object: null },
	roca: { url: 'ripio.jpg', object: null },
	pasto: { url: 'pasto.jpg', object: null },
	sendero: { url: 'trail.jpg', object: null }
};

export class SceneManager {
	
	constructor(scene) {
		
		this.scene = scene;
		this.sceneLights = new LightManager(scene);
		
		// Helpers
		this.grid = new THREE.GridHelper(10, 10);
		this.axes = new THREE.AxesHelper(3);
		
		// Scene Elements
		this.rollerCoaster = new RollerCoaster();
		scene.add(this.rollerCoaster);
		
		this.train = new Train();
		
		this.rollerCoaster.addTrain(this.train);
		
		this.flyingChairs = new FlyingChairs();
		this.flyingChairs.position.z = -3.3;
		this.flyingChairs.position.x = -3;
		scene.add(this.flyingChairs);
		
		this.addStreetLamps();
		
		const groundGeometry = new THREE.PlaneGeometry( 1000, 1000 );
		const groundMaterial = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
		this.ground = new THREE.Mesh( groundGeometry, groundMaterial );
		
		this.ground.rotation.x = -Math.PI/2;
		this.ground.receiveShadow = true;
		
		scene.add(this.ground);
		
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
		
		this.rLHelpersUpdate();
		this.worldHelpersUpdate();
		
		let uniforms = {
			
			tierraSampler: { type: 't', value: textures.tierra.object },
			rocaSampler: { type: 't', value: textures.roca.object },
			pastoSampler: { type: 't', value: textures.pasto.object },
			trailSampler: { type: 't', value: textures.sendero.object },
			scale1: { type: 'f', value: 10 },
			
			mask1low: { type: 'f', value: -0.1 },
			mask1high: { type: 'f', value: 0.1 },
			
			mask2low: { type: 'f', value: -0.3 },
			mask2high: { type: 'f', value: 0.2 },
		};
		
		
		this.loadTextures(() => {
			this.ground.material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
			this.ground.material.onBeforeCompile = function ( shader )
			{
				shader.uniforms.tierraSampler =  { type: 't', value: textures.tierra.object };
				shader.uniforms.rocaSampler = { type: 't', value: textures.roca.object };
				shader.uniforms.pastoSampler = { type: 't', value: textures.pasto.object };
				shader.uniforms.senderoSampler = { type: 't', value: textures.sendero.object };
				shader.uniforms.scale1 = { type: 'f', value: 1000.0 };
				shader.uniforms.mask1low = { type: 'f', value: 0.78 };
				shader.uniforms.mask1high = { type: 'f', value: 0.1 };
				shader.uniforms.mask2low = { type: 'f', value: 0.8};
				shader.uniforms.mask2high = { type: 'f', value: 1 };
				
				shader.fragmentShader = fragmentShaderVars  + shader.fragmentShader;
				shader.fragmentShader = shader.fragmentShader.replace(
					'#include <map_fragment>',
					[fragmentShader].join( '\n' )
				);
				
				shader.vertexShader = shader.vertexShader.replace( '#define PHONG', `#define PHONG\n// Varying \n
				varying vec2 vUv;	// Coordenadas de textura que se pasan al fragment shader\n`);
				shader.vertexShader = shader.vertexShader.replace('#include <fog_vertex>', `#include <fog_vertex>\n// Se pasan las coordenadas de textura al fragment \n
				vUv = uv;`);
			};
		
			this.ground.receiveShadow = true;
			this.ground.needsUpdate = true;

		}		);
	}
	
	loadTextures(callback) {
		
		const loadingManager = new THREE.LoadingManager();
		
		loadingManager.onLoad = () => {
			console.log('All textures loaded');
			callback();
		};
		
		for (const key in textures) {
			const loader = new THREE.TextureLoader(loadingManager);
			const texture = textures[key];
			texture.object = loader.load('resources/' + texture.url, 
										 this.onTextureLoaded.bind(this, key),
										 null, (error) => {
				console.error(error);
			});
		}
	}
	
	onTextureLoaded(key, texture) {
		if (key != "sendero") // Para el sendero dejamos se repita el ultimo pixel
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		textures[key].object = texture;
		console.log(`Texture ${key} loaded`);
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
			
		f2.add(this.sceneLights.properties, 'sunLightHelper')
			.name('Sun')
			.onChange((value) => {this.sceneLights.showSunHelper(value);});
			
		f2.add(this.sceneLights.properties, 'shadowCamHelper')
			.name('Shadows')
			.onChange((value) => {this.sceneLights.showShadowHelper(value);});
			
		f2.add(this.sceneLights.effectController, 'elevation', -180, 180, 0.1).name('SunElevation').onChange((value) => {this.sceneLights.skyChanged();});
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
	
	addStreetLamps()
	{
		const lampsPositions = new THREE.CatmullRomCurve3( [
			new THREE.Vector3( -3, 0, -5 ),
														   new THREE.Vector3( -0.5, 0, -3 ),
														   new THREE.Vector3( -0.75, 0, 0 ),
														   new THREE.Vector3( 2, 0, 2.5 ),
														   new THREE.Vector3( 2.5, 0, 5 ),
														   new THREE.Vector3( 2, 0, 9 ),
														   new THREE.Vector3( -0.5, 0, 11.5 ),
														   new THREE.Vector3( -6, 0, 8 ),
														   new THREE.Vector3( -6, 0, 3 ),
														   new THREE.Vector3( -6.5, 0, 0 ),
														   new THREE.Vector3( -6, 0, -2 ),
														   new THREE.Vector3( -4, 0, -4.5 )
		] );
		
		const lampCount = 15;
		const lampHeight = 0.3;
		for (let i=0; i < lampCount; i++)
		{
			let position = lampsPositions.getPointAt(i/lampCount);
			let lamp = new StreetLamp(lampHeight);
			
			lamp.position.copy(position);
			
			this.scene.add(lamp);
			this.sceneLights.addLamp(lamp);
		}
	}

	animate() {
		this.rollerCoaster.animate();
		this.flyingChairs.animate();
	}
}
