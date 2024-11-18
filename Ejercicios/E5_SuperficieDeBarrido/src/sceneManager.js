import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

export class SceneManager {

	constructor(scene) {
		this.baseScene = scene
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(1, 5, 1);
		scene.add(light);
		
		const ambientlight = new THREE.AmbientLight( 0x404040 ); // soft white light
		scene.add( ambientlight );
		
		this.showAxis = false;
		this.showGrid = false;

		this.buildTwistedRectangle();
		this.buildTwistedRectangleWithCurves();
		this.buildEscaledCircle();
	}

	buildTwistedRectangle()
	{
		let ParamFunc = function (u, v, target) {
			const lengthFactor = 10;
			const sizeFactor = 4;
			
			const Rot = new THREE.Matrix4();
			Rot.makeRotationZ(6 * v);
			
			if (u <= 0.25)
			{
				target.set(-sizeFactor/8 + sizeFactor*u, -sizeFactor/8, lengthFactor*v);
				target.applyMatrix4(Rot);
				return;
			}

			if (u <= 0.5)
			{
				target.set(sizeFactor/8, -sizeFactor/8 + sizeFactor*(u - 0.25), lengthFactor*v);
				target.applyMatrix4(Rot);
				return;
			}

			if (u <= 0.75)
			{
				target.set(sizeFactor/8 + (0.5 - u) * sizeFactor, sizeFactor/8, lengthFactor*v);
				target.applyMatrix4(Rot);
				return;
			}

			target.set(-sizeFactor/8, sizeFactor/8 + (0.75 - u) * sizeFactor , lengthFactor*v);
			target.applyMatrix4(Rot);

		}
		
		//const geometry = new ParametricGeometry( ParametricGeometries.klein, 25, 25 );
		const geometry = new ParametricGeometry( ParamFunc, 4, 200 );
		const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: false });
		const mesh = new THREE.Mesh( geometry, material );
		mesh.rotation.x = -Math.PI/2;
		mesh.position.x = -2;
		this.baseScene.add( mesh );
	}
	
	drawLine(lineData)
	{
		const points = lineData.getPoints( 50 );
		const linegeometry = new THREE.BufferGeometry().setFromPoints( points );
		const linematerial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		
		// Create the final object to add to the scene
		const splineObject = new THREE.Line( linegeometry, linematerial );
		this.baseScene.add(splineObject);
		
		return splineObject;
	}
	
	buildTwistedRectangleWithCurves()
	{
		// Rectangle for the Parametric geometry
		let rectangle = new THREE.CurvePath();
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -1/2, 0, -1 ), new THREE.Vector3( -1/2, 0, 1 )));
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -1/2, 0, 1 ), new THREE.Vector3( 1/2, 0, 1 )));
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( 1/2, 0, 1 ), new THREE.Vector3( 1/2, 0, -1 )));
		
		let line = new THREE.CurvePath();
		line.add(new THREE.LineCurve3(new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 10, 0 )));
		
		rectangle.closePath();
		const Rot = new THREE.Matrix4();
		
		let ParamFunc = function (u, v, target) {
			target.copy(rectangle.getPointAt(u));
			let position = line.getPointAt(v);
			
			target.y = position.y;
			
			Rot.makeRotationY(6 * v);
			target.applyMatrix4(Rot);
		}
		
		const geometry = new ParametricGeometry( ParamFunc, 6, 25 );
		const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: false });
		const mesh = new THREE.Mesh( geometry, material );
		this.baseScene.add( mesh );
	
		this.drawLine(rectangle);
		this.drawLine(line);
		
		// Covers
		let shape = new THREE.Shape();
		shape.moveTo(-0.5, -1);
		shape.lineTo(-0.5, 1);
		shape.lineTo(0.5, 1);
		shape.lineTo(0.5,-1);
		shape.lineTo(-0.5,-1);
		
		const covergeo = new THREE.ShapeGeometry( shape );
		const covermat = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
		
		const bottomCover = new THREE.Mesh( covergeo, covermat ) ;
		const topCover = new THREE.Mesh( covergeo, covermat ) ;
		topCover.position.y = 10;
		
		this.baseScene.add( bottomCover );
		this.baseScene.add( topCover);
		
		topCover.rotation.reorder('YZX');
		topCover.rotation.x = -Math.PI/2;
		topCover.rotation.y = 6;
		bottomCover.rotation.x = Math.PI/2;
	}
	
	buildEscaledCircle()
	{
		// First we create the circle
		const curve = new THREE.EllipseCurve(
			0,  0,            // ax, aY
			0.7, 0.7,           // xRadius, yRadius
			0,  2 * Math.PI,  // aStartAngle, aEndAngle
			true,            // aClockwise
			0,                 // aRotation
		);
		
		const Scale = new THREE.Matrix4();
		
		// Direction path
		let line = new THREE.CurvePath();
		line.add(new THREE.LineCurve3(new THREE.Vector3( 3, 0, 0 ), new THREE.Vector3( 3, 6, 0 )));
		
		let ParamFunc = function (u, v, target) {
			target.copy(curve.getPointAt(u)); // This cure returns a 2D vector
			let position = line.getPointAt(v);
			
			target.z = target.y;  // We set Y at Z, as we use Y as th path to follow
			target.y = position.y;
			
			let ScaleIdx =0.5 * Math.abs(Math.cos(5*Math.PI*v)) + 1;
			Scale.makeScale(ScaleIdx, 1, ScaleIdx);
			target.applyMatrix4(Scale);
		}
		
		const geometry = new ParametricGeometry( ParamFunc, 16, 25 );
		const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: false, side: THREE.DoubleSide});
		const mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = 3;
		this.baseScene.add( mesh );
		
		// Helpers
		let ellipse = this.drawLine(curve);
		let guide = this.drawLine(line);

		ellipse.position.x = 3;
		ellipse.rotation.x = Math.PI/2;
		
		const covergeo = new THREE.ShapeGeometry();
		covergeo.setFromPoints( curve.getPoints(20));
		const covermat = new THREE.MeshPhongMaterial( { color: 0xff00ff } );
		
		const bottomCover = new THREE.Mesh( covergeo, covermat ) ;
		const topCover = new THREE.Mesh( covergeo, covermat ) ;
		
		bottomCover.position.x = 3;
		bottomCover.position.y = 3;
		
		this.baseScene.add( bottomCover );
		this.baseScene.add( topCover);
		
	
	}
	
	removeHelper(helper)
	{
		const toRemove = this.baseScene.getObjectByName(helper);
		this.baseScene.remove(toRemove);
	}

	toggleGridHelper()
	{
		if (!this.showGrid)
		{
			const grid = new THREE.GridHelper(100, 100);
			grid.name = "GridHelper";
			this.baseScene.add(grid);
			
			this.showGrid = true;
		} else {
			this.removeHelper('GridHelper');
			this.showGrid = false;
		}
	}

	toggleAxesHelper()
	{
		if (!this.showAxis)
		{
			const axes = new THREE.AxesHelper(3);
			axes.name = 'AxesHelper';
			this.baseScene.add(axes);
			
			this.showAxis = true;
		} else {
			this.removeHelper('AxesHelper');
			this.showAxis = false;
		}
	}

	animate() {
	}
}
