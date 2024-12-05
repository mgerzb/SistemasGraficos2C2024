import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";
import { PMREMGenerator } from "three/src/extras/PMREMGenerator.js";

import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';

import * as dat from 'dat.gui';
import { CamerasId } from  './constants.js';

import { RollerCoaster } from './rollerCoaster.js';
import { Train } from './train.js';
import { FlyingChairs } from './flyingChairs.js';
import { LightManager} from './lightManager.js';
import { StreetLamp } from './streetLamp.js';
import { Pool } from './pool.js';

import { vertexShader, fragmentShaderVars, fragmentShader } from '@shaders/shadersGround.js';

const textures = {
	tierra: { url: 'tierra.jpg', object: null },
	roca: { url: 'ripio.jpg', object: null },
	pasto: { url: 'pasto.jpg', object: null },
	sendero: { url: 'trail.jpg', object: null },
	rust: { url: 'column_base.jpg', object: null },
	rust_norm: { url: 'column_normals.jpg', object: null },
	rust_rough: { url: 'column_rough.jpg', object: null },
	rust_metal: { url: 'column_metal.jpg', object: null },
	rust_ao: { url: 'column_ao.jpg', object: null },
	twist_tunnel: { url: 'tunnelA_base.png', object: null },
	twist_tunnel_alpha: { url: 'tunnelA_alpha.png', object: null },
	twist_tunnel_norm: { url: 'tunnelA_normals.png', object: null },
	rail:  { url: 'rail_base.jpg', object: null },
	rail_ao:  { url: 'rail_ao.jpg', object: null },
	rail_norm:  { url: 'rail_normal.jpg', object: null },
	chtop: { url: 'chairsTop_base.png', object: null },
	chcol: { url: 'chairsCol_base.png', object: null },
	chbase: { url: 'chairsBase_base.jpg', object: null },
	chbase_norm: { url: 'chairsBase_norm.jpg', object: null },
	scaled_tunnel: { url: 'tunnelB_base.jpg', object: null },
	scaled_tunnel_alpha: { url: 'tunnelB_alpha.jpg', object: null },
	water_norm: { url: 'water_norm.jpg', object: null},
	conc_norm: { url: 'concrete_norm.jpg', object: null},
	conc_base: { url: 'concrete_base.jpg', object: null},
	poolfloor_norm: { url: 'poolfloor_norm.jpg', object: null},
	poolfloor_base: { url: 'poolfloor_base.jpg', object: null}
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
		
		this.pool = new Pool(1.25, 2.2);
		this.pool.position.set(-3, 0, 2.3);
		
		this.scene.add(this.pool);
		
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
			showGrid: false,
			showAxes: false,
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
				shader.uniforms.tailMaskScale = { type: 'f', value: 930.0 };
				shader.uniforms.tailPosX = { type: 'f', value: 449.5 };
				shader.uniforms.tailPosY = { type: 'f', value: 451.0 };
				
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
			
			let reflection = this.remGenerator.fromScene( this.sceneLights.sky ).texture;
		
			this.ground.receiveShadow = true;
			this.ground.needsUpdate = true;
			
			textures.rust.object.repeat = textures.rust_norm.object.repeat = textures.rust_ao.object.repeat = new THREE.Vector2(2,4);
			
			let columns = this.rollerCoaster.getAllColumns();
			columns.map((column)=>{
				column.material = new THREE.MeshPhongMaterial( {color: 0xffffff, specular: 0x990000, shininess: 30} ); //  Si no redefino el material, algunas columnas no cargan su textura
				column.material.map = textures.rust.object;
				column.material.normalMap = textures.rust_norm.object;
				column.material.needsUpdate = true;
				
			});
			
			textures.twist_tunnel_alpha.object.repeat = textures.twist_tunnel.object.repeat = textures.twist_tunnel_norm.object.repeat = new THREE.Vector2(4,4);
			
			this.rollerCoaster.twistedTunnel.material.color = 0x000000;
			this.rollerCoaster.twistedTunnel.material.alphaTest = 0.3;
			this.rollerCoaster.twistedTunnel.material.transparent = false;
			this.rollerCoaster.twistedTunnel.material.alphaMap = textures.twist_tunnel_alpha.object;
			this.rollerCoaster.twistedTunnel.material.map = textures.twist_tunnel.object;
			this.rollerCoaster.twistedTunnel.material.normalMap = textures.twist_tunnel_norm.object;
			
			
			// Rotamos la textura para que se alinee al con los u,v
			textures.scaled_tunnel.object.rotation = Math.PI/2;
			textures.scaled_tunnel.object.repeat = new THREE.Vector2(2.5,1);
			textures.scaled_tunnel.object.offset.x = 0.25;
			this.rollerCoaster.scaledTunnel.material.map = textures.scaled_tunnel.object;
			this.rollerCoaster.scaledTunnel.material.needsUpdate = true;
			
			textures.scaled_tunnel_alpha.object.rotation = Math.PI/2;
			textures.scaled_tunnel_alpha.object.flipY = false;
			textures.scaled_tunnel_alpha.object.offset.y = 0.3;
			this.rollerCoaster.scaledTunnel.material.alphaMap = textures.scaled_tunnel_alpha.object;
			this.rollerCoaster.scaledTunnel.material.alphaTest = 0.3;
			
			textures.rail.object.repeat = textures.rail_ao.object.repeat = textures.rail_norm.object.repeat = new THREE.Vector2(8,128);
			
			this.rollerCoaster.rcMesh.material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
			this.rollerCoaster.rcMesh.material.roughness = 0.1;
			this.rollerCoaster.rcMesh.material.metalness = 1.0;
			
			this.rollerCoaster.rcMesh.material.envMap = reflection;
			this.rollerCoaster.rcMesh.material.envMapIntensity = 0.1;
			this.rollerCoaster.rcMesh.material.map = textures.rail.object;
			this.rollerCoaster.rcMesh.material.aoMap = textures.rail_ao.object;
			this.rollerCoaster.rcMesh.material.normalMap = textures.rail_norm.object;
			
			// Rotamos la textura para que se alinee al con los u,v
			textures.chtop.object.center = new THREE.Vector2(0.5,0.5);
			textures.chtop.object.rotation = Math.PI/2;
			
			textures.chcol.object.repeat = new THREE.Vector2(3, 1);
			this.flyingChairs.top.material = new THREE.MeshPhongMaterial( {color: 0xffffff, wireframe: false} );
			this.flyingChairs.top.material.map = textures.chtop.object;
			
			this.flyingChairs.axis.material.map = textures.chcol.object;
			this.flyingChairs.axis.material.needsUpdate = true;
			
			this.flyingChairs.base.material.map = textures.chbase.object;
			this.flyingChairs.base.material.normalMap = textures.chbase_norm.object;
			this.flyingChairs.base.material.needsUpdate = true;
			
			let cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 256 );
			cubeRenderTarget.texture.type = THREE.HalfFloatType;

			let cubeCamera = new THREE.CubeCamera( 1, 1000, cubeRenderTarget );
			cubeCamera.position.set(-1, 0.5, 3);
			textures.conc_base.object.repeat = textures.conc_norm.object.repeat = new THREE.Vector2(1,1);
			 
			
			this.pool.water.material = new THREE.MeshStandardMaterial( {
				color: 0x000088, 
				normalMap: textures.water_norm.object, 
				envMap: reflection, 
				roughness: 0.35, metalness: 0.0, transparent: true, opacity: 0.4});
			
			textures.conc_base.object.repeat = new THREE.Vector2(8,1);
			textures.conc_norm.object.repeat = new THREE.Vector2(8,1);
			
			textures.poolfloor_base.object.repeat = new THREE.Vector2(4,6);
			textures.poolfloor_norm.object.repeat = new THREE.Vector2(4,6);
			this.pool.base.material = new THREE.MeshPhongMaterial( {
				color: 0xffffff,
				map: textures.poolfloor_base.object,
				normalMap: textures.poolfloor_norm.object, 
				roughness: 0.8, metalness: 0.0});
			
		});
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
			texture.object = loader.load(import.meta.env.VITE_TEXTURE_PATH + '/' + texture.url, 
										 this.onTextureLoaded.bind(this, key),
										 null, (error) => {
				console.error(error);
			});
		}
	}
	
	onTextureLoaded(key, texture) {
		if (key != "sendero" && key != "chtop") // Para el sendero dejamos se repita el ultimo pixel
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
		
		let f2 = gui.addFolder('Sun');
		f2.add(this.sceneLights.effectController, 'elevation', -180, 180, 0.1).name('SunElevation').onChange((value) => {this.sceneLights.skyChanged();});
		
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
			new THREE.Vector3( -3, 0, -4.8 ),
														   new THREE.Vector3( 2.0, 0, -3.3 ),
														   new THREE.Vector3( 2.9, 0, 0 ),
														   new THREE.Vector3( 1.5, 0, 2.5 ),
														   new THREE.Vector3( 1.8, 0, 5.0 ),
														   new THREE.Vector3( 3.0, 0, 9 ),
														   new THREE.Vector3( -0.3, 0, 12.7 ),
														   new THREE.Vector3( -6, 0, 11 ),
														   new THREE.Vector3( -4.5, 0, 3 ),
														   new THREE.Vector3( -4.1, 0, 0 ),
														   new THREE.Vector3( -5, 0, -2 ),
														   new THREE.Vector3( -4, 0, -4.5 )
		] );

		
		const lampCount = 15;
		const lampHeight = 0.5;
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
		this.pool.animate();
	}
}
