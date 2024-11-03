import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

let torus, cube, cone;
const POINTS = 150;

export class SceneManager {
	
	drawComponents(values, points, scene, color, curve, removeY = false)
	{
		for (let pos = 0; pos < values.length; pos++)
		{
			let Matrix = new THREE.Matrix3();
			if (removeY)
				Matrix.set(1,0,0, 0,0,0, 0,0,1);
			
			const normpos = new THREE.Vector3(values[pos].x, values[pos].y, values[pos].z);
			normpos.applyMatrix3(Matrix);
			normpos.add(curve.getPointAt(pos/POINTS));
			
			const normal = new THREE.LineCurve3(curve.getPointAt(pos/(POINTS+1)), normpos);
			
			const pp = normal.getPoints(2);
			const geometry = new THREE.BufferGeometry().setFromPoints( pp );
		
			const material = new THREE.LineBasicMaterial( { color: color } );
			const curveObject = new THREE.Line( geometry, material );
			scene.add(curveObject);
		}
	}
	
	drawTangents(curve, points, scene, color)
	{
		for (let pos = 0; pos < points.length-1; pos++)
		{
 			let tangent = curve.getTangent(pos/POINTS);
			//let tangent = points[pos].clone();
			//tangent.sub(points[pos+1]);
			tangent.normalize();
// 			tangent.add(points[pos]);
// 			const normal = new THREE.LineCurve3(points[pos], tangent);
// 			const pp = normal.getPoints(2);
// 			const geometry = new THREE.BufferGeometry().setFromPoints( pp );
// 		
// 			const material = new THREE.LineBasicMaterial( { color: color } );
// 			const curveObject = new THREE.Line( geometry, material );
// 			scene.add(curveObject);
			
			// Añadir flechas para mostrar las normales
			const arrowHelperLength = 1;  // Longitud de las flechas
			const arrowHelperColor = 0x00ff00;  // Color de las flechas (normales)
			// Crear la flecha de normal
			const arrowHelper = new THREE.ArrowHelper(tangent, points[pos], arrowHelperLength, color);
			scene.add(arrowHelper)

		}
	}
	
	// Genera el contorno de las vias de la montaña
	getTrackShape(scene)
	{
		const textureLoader = new THREE.TextureLoader();
		const texture = textureLoader.load('Img/Shape.png'); // Asegúrate de que la ruta sea correcta

		// Material con el contorno a dibujar (ayuda temporal)
		const material = new THREE.MeshBasicMaterial({ map: texture });
		

		// Plano para seguimiento de contorno
		const geometry = new THREE.PlaneGeometry(0.5, 0.5);
		const plane = new THREE.Mesh(geometry, material);
		
		
		scene.add(plane);
		
		// Rectangle for the Parametric geometry
		let rectangle = new THREE.CurvePath();
		const XLen = 0.20;
		const XStart = -0.178;
		const YLen = 0.2;
		const YStart = 0.16;
		const ZStart = 0.0001;
		
		// rectangle.add(
		// 	new THREE.QuadraticBezierCurve3(
		// 		new THREE.Vector3(- XStart - 0.172, YStart - 0.335, ZStart),
		// 		new THREE.Vector3(- XStart - 0.16, YStart - 0.335, ZStart),
		// 		new THREE.Vector3(- XStart - 0.135, YStart - 0.318, ZStart)
		// 		));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3(- XStart - 0.135, YStart - 0.318, ZStart ),
				new THREE.Vector3(- XStart - 0.027, YStart - 0.188, ZStart )
				));
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(- XStart - 0.027, YStart - 0.188, ZStart ),
				new THREE.Vector3(- XStart - 0.018, YStart - 0.18, ZStart ),
				new THREE.Vector3(- XStart - 0.006, YStart - 0.173, ZStart )
				));
		
		rectangle.add(new THREE.LineCurve3(
				new THREE.Vector3(- XStart - 0.006, YStart - 0.173, ZStart ),
				new THREE.Vector3(- XStart + 0.017, YStart - 0.168, ZStart )
				));
		
		rectangle.add(
			new THREE.CubicBezierCurve3(
				new THREE.Vector3(- XStart  + 0.017, YStart - 0.168, ZStart ),
				new THREE.Vector3(- XStart  + 0.028, YStart - 0.160, ZStart ),
				new THREE.Vector3(- XStart  + 0.028, YStart - 0.150, ZStart ),
				new THREE.Vector3(- XStart  + 0.028, YStart - 0.145, ZStart )
		));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3(- XStart  + 0.028, YStart - 0.145, ZStart ),
				new THREE.Vector3(- XStart  + 0.028, YStart - 0.03, ZStart ) 
				)
		);
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
			new THREE.Vector3(- XStart + 0.028, YStart - 0.03, ZStart ),
			new THREE.Vector3(- XStart + 0.028, YStart, ZStart ),
			new THREE.Vector3(- XStart + 0.01, YStart, ZStart )
			
		));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3( -XStart + 0.01, YStart, ZStart ),
				new THREE.Vector3( -XStart - 0.008, YStart, ZStart )
				));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3( -XStart -0.008, YStart, ZStart ),
				new THREE.Vector3( -XStart -0.008, YStart - 0.08, ZStart )
				 ));
		
		rectangle.add(
			new THREE.CubicBezierCurve3(
				new THREE.Vector3(-XStart -0.008, YStart - 0.08, ZStart ),
				new THREE.Vector3(-(XStart + 0.08), YStart - 0.08, ZStart ),
				new THREE.Vector3(-(XStart + 0.11), YStart - 0.148, ZStart ),
				new THREE.Vector3(-(XStart + 0.184) , YStart - 0.148, ZStart ),
		));
		
		rectangle.add(
			new THREE.CubicBezierCurve3(
				new THREE.Vector3(XStart + 0.184 , YStart - 0.148, ZStart ),
				new THREE.Vector3(XStart + 0.11, YStart - 0.148, ZStart ),
				new THREE.Vector3(XStart + 0.08, YStart - 0.08, ZStart ),
				new THREE.Vector3(XStart, YStart - 0.08, ZStart )
		));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3( XStart, YStart - 0.08, ZStart ),
				new THREE.Vector3( XStart, YStart, ZStart ) ));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3( XStart, YStart, ZStart ), 
				new THREE.Vector3( XStart - 0.02, YStart, ZStart )));
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(XStart - 0.02, YStart, ZStart ),
				new THREE.Vector3(XStart -0.034, YStart, ZStart ),
				new THREE.Vector3(XStart  - 0.034, YStart - 0.03, ZStart )
				));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3(XStart  - 0.034, YStart - 0.03, ZStart ), 
				new THREE.Vector3(XStart  - 0.034, YStart - 0.145, ZStart ))
		);
		
		rectangle.add(
			new THREE.CubicBezierCurve3(
				new THREE.Vector3(XStart  - 0.034, YStart - 0.145, ZStart ),
				new THREE.Vector3(XStart  - 0.034, YStart - 0.150, ZStart ),
				new THREE.Vector3(XStart  - 0.034, YStart - 0.160, ZStart ),
				new THREE.Vector3(XStart  - 0.020, YStart - 0.168, ZStart )
		));
		
		rectangle.add(new THREE.LineCurve3(
				new THREE.Vector3(XStart  - 0.020, YStart - 0.168, ZStart ), 
				new THREE.Vector3(XStart + 0.005, YStart - 0.173, ZStart )));

		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(XStart + 0.005, YStart - 0.173, ZStart ) ,
				new THREE.Vector3(XStart + 0.018, YStart - 0.18, ZStart ),
				new THREE.Vector3(XStart +0.024, YStart - 0.188, ZStart )
				));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3(XStart +0.024, YStart - 0.188, ZStart ), 
				new THREE.Vector3(XStart +0.142, YStart - 0.318, ZStart )));
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(XStart +0.142, YStart - 0.318, ZStart),
				new THREE.Vector3(XStart +0.16, YStart - 0.335, ZStart),
				new THREE.Vector3(XStart +0.184, YStart - 0.335, ZStart)
				));
		
		//rectangle.closePath();
		
		const recpoints = rectangle.getPoints( 50 );
		const recgeometry = new THREE.BufferGeometry().setFromPoints( recpoints );
		const recmaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		const rec = new THREE.Line( recgeometry, recmaterial );
		
		scene.add( rec );
		
		return rectangle;
	}
	
	drawRails(curve, frames, scene)
	{		
		// Rectangle for the Parametric geometry
		let rectangle = new THREE.CurvePath();
		const reclen = 0.2;
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -reclen, -reclen, 0 ), new THREE.Vector3( -reclen, -reclen/2, 0 ))); //ˉ
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -reclen, -reclen/2, 0 ), new THREE.Vector3( -reclen/2, -reclen/2, 0 ))); //ˉ|
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -reclen/2, -reclen/2, 0 ), new THREE.Vector3( -reclen/2, reclen/2, 0 ))); //ˉ|_
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -reclen/2, reclen/2, 0 ), new THREE.Vector3( -reclen, reclen/2, 0 ))); //ˉ|_|
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -reclen, reclen/2, 0 ), new THREE.Vector3( -reclen, reclen, 0 ))); //ˉ|_|ˉ
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( -reclen, reclen, 0 ), new THREE.Vector3( reclen/2, reclen, 0  )));
		rectangle.add(new THREE.LineCurve3(new THREE.Vector3( reclen/2, reclen, 0 ), new THREE.Vector3( reclen/2, -reclen, 0 )));
		
		rectangle.closePath();
		
		rectangle = this.getTrackShape(scene);
		
		const recpoints = rectangle.getPoints( 100);
		const recgeometry = new THREE.BufferGeometry().setFromPoints( recpoints );
		const recmaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		const rec = new THREE.Line( recgeometry, recmaterial );
		scene.add( rec );

		
		let ParamFunc = function (u, v, target) {
			let Matrix = new THREE.Matrix3();
			Matrix.set(1,0,0, 0,0,0, 0,0,1);
			
			const m = new THREE.Matrix4();

			// Escalado y rotación para la forma
			const scale = new THREE.Matrix4();
			const rotation = new THREE.Matrix4();
			
			scale.makeScale(0.5,0.5,0.5);
			rotation.makeRotationZ(Math.PI);
			
			
			target.copy(rectangle.getPointAt(u));
			let position = curve.getPointAt(v);
			let tangent = curve.getTangentAt(v);
			
			const frpos = Math.floor(POINTS * v);
			
			target.applyMatrix4(scale);
			target.applyMatrix4(rotation);
		
			frames.normals[frpos].applyMatrix3(Matrix);
			
			frames.binormals[frpos].crossVectors(frames.tangents[frpos], frames.normals[frpos]);
			
			m.set(  frames.normals[frpos].x,frames.binormals[frpos].x, frames.tangents[frpos].x, position.x, 
				    frames.normals[frpos].y,frames.binormals[frpos].y, frames.tangents[frpos].y, position.y,
				    frames.normals[frpos].z,frames.binormals[frpos].z, frames.tangents[frpos].z, position.z, 
				  0, 0, 0, 1 );
			
			target.applyMatrix4(m);
			//target.applyMatrix4(scale);
		}
		
		const geometry = new ParametricGeometry( ParamFunc, 50, 300 );
		const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: true });
		const mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );
		
	}
	
	constructor(scene) {
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(0, 10, 0);
		scene.add(light);

		const ambientLight = new THREE.AmbientLight(0x666666);
		scene.add(ambientLight);

		const grid = new THREE.GridHelper(10, 10);
		scene.add(grid);

		const axes = new THREE.AxesHelper(3);
		scene.add(axes);

		// CarmullRom con la forma de una montaña rusa
		// Incluye: 
		//		Una curva descendente
		//		Una zona baja para "subir y bajar"
		//		Una subida y bajada
		//		Un Loop
		
/*		const curve = new THREE.CurvePath();
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(- XStart - 0.172, YStart - 0.335, ZStart),
				new THREE.Vector3(- XStart - 0.16, YStart - 0.335, ZStart),
				new THREE.Vector3(- XStart - 0.135, YStart - 0.318, ZStart)
				));
		
		rectangle.add(
			new THREE.LineCurve3(
				new THREE.Vector3(- XStart - 0.135, YStart - 0.318, ZStart ),
				new THREE.Vector3(- XStart - 0.027, YStart - 0.188, ZStart )
				));
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(- XStart - 0.027, YStart - 0.188, ZStart ),
				new THREE.Vector3(- XStart - 0.018, YStart - 0.18, ZStart ),
				new THREE.Vector3(- XStart - 0.006, YStart - 0.173, ZStart )
				)); */
		
		
		
		
		const curve = new THREE.CatmullRomCurve3( [
			new THREE.Vector3( -2, 0, -1 ),
												  new THREE.Vector3( -2, 1, 2 ),
												  new THREE.Vector3( -2, 2, 2.5 ),
												  new THREE.Vector3( -2, 3, 3 ),
												  new THREE.Vector3( -2, 4, 4 ),
												  new THREE.Vector3( -2, 3, 6 ),
												  new THREE.Vector3( -1.5, 2.8, 7 ),
												  new THREE.Vector3( -0.75, 2.5, 7.5 ),
												  new THREE.Vector3( -0.25, 2.4, 7.4 ),
												  new THREE.Vector3( 0.25, 2.2, 7.2 ),
												  new THREE.Vector3( 0.5, 2.1, 6.5 ),
												  new THREE.Vector3( 0.5, 1.3, 5 ),
												  new THREE.Vector3( 0.5, 1.0, 4.5 ),
												  new THREE.Vector3( 0.6, 1.9, 3 ),
												  new THREE.Vector3( 0.7, 2.3, 2.5 ),
												  new THREE.Vector3( 0.75, 2.7, 2.2 ),
												  new THREE.Vector3( 0.8, 3, 2.1 ),
												  new THREE.Vector3( 0.85, 3.4, 2.2 ),
												  new THREE.Vector3( 0.9, 3.5, 2.4 ),
												  new THREE.Vector3( 0.95, 3.5, 2.6 ),
												  new THREE.Vector3( 1, 3.4, 2.8 ),
												  new THREE.Vector3( 1.05, 3.3, 3 ),
												  new THREE.Vector3( 1.1, 3.1, 3.2 ),
												  new THREE.Vector3( 1.15, 2.9, 3.3 ),
												  new THREE.Vector3( 1.2, 2.6, 3.35 ),
												  new THREE.Vector3( 1.25, 2.2, 3.2 ),
												  new THREE.Vector3( 1.3, 1.8, 2.8 ),
												  new THREE.Vector3( 1.3, 1.3, 2.4 ),
												  new THREE.Vector3( 1.3, 1, 1.9 ),
												  new THREE.Vector3( 1.3, 0.5, 0.5 ),
												  new THREE.Vector3( 1.3, 0.3, -1 ),
												  new THREE.Vector3( 1, 0.2, -2 ),
												  new THREE.Vector3( 0, 0.1, -2.7 ),
												  new THREE.Vector3( -1, 0, -2.8 ),
  
												  new THREE.Vector3( -2, 0, -1.6 ),
												  new THREE.Vector3( -2, 0, -1.4 ),
		], true );
		
		const points = curve.getPoints( POINTS );
		let ff = curve.computeFrenetFrames(POINTS, true);
		
		this.drawComponents(ff.normals, points, scene, 0x00ff00, curve, true);
		this.drawComponents(ff.binormals, points, scene, 0x0000ff, curve);
		this.drawComponents(ff.tangents, points, scene, 0xff0000, curve);
		//this.drawTangents(curve, points, scene, 0x00ffff);
		
		this.drawRails(curve, ff, scene);
		
		this.getTrackShape(scene);
		
// 		for (let pos = 0; pos < ff.normals.length; pos++)
// 		{
// 			const normpos = new THREE.Vector3(ff.normals[pos].x, ff.normals[pos].y, ff.normals[pos].z);
// 			normpos.add(points[pos]);
// 			const normal = new THREE.LineCurve3(points[pos], normpos);
// 			const pp = normal.getPoints(2);
// 			const geometry = new THREE.BufferGeometry().setFromPoints( pp );
// 		
// 			const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
// 			const curveObject = new THREE.Line( geometry, material );
// 			scene.add(curveObject);
// 		}
		
		
		const geometry = new THREE.BufferGeometry().setFromPoints( points );
		
		const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		
		// Create the final object to add to the scene
		const curveObject = new THREE.Line( geometry, material );
		scene.add(curveObject);
	}

	animate() {
	}
}
