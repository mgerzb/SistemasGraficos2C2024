import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

const POINTS = 300;

export class RollerCoaster extends THREE.Object3D {

    constructor() {
        super();
        
        const curve = new THREE.CurvePath();
		
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 0.3, 2),
				new THREE.Vector3(-2, 0.3, 2.5),
				new THREE.Vector3(-2, 0.4, 3)
				));
		
		// Subida desde inicio \
		//						\
		//						 \
		//						  --
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 0.4, 3),
				new THREE.Vector3(-2, 1, 5),
				new THREE.Vector3( -2, 5, 6 )
				));
		// Cuspide A
		//				_
		//				 \
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 5, 6),
				new THREE.Vector3(-2, 6, 6.2),
				new THREE.Vector3( -2, 6, 7 )
				));
		
		// Cuspide B
		//				 _
		//				/
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 6, 7),
				new THREE.Vector3(-2, 6, 7.5),
				new THREE.Vector3( -2, 5, 8 )
				));
		
		// Bajada
		//			/
		//		   /
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 5, 8),
				new THREE.Vector3(-2, 3.75, 8.625),
				new THREE.Vector3(-2, 2.5, 9.25)
				));
		
		// Fin Bajada
		//				/
		//			  ──
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 2.5, 9.25),
				new THREE.Vector3(-2, 2.1, 9.5),
				new THREE.Vector3(-2, 2.1, 9.8 )
				));
		
		// Caida en curva
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-2, 2.1, 9.8 ),
				new THREE.Vector3(-2.1, 2.1, 10.3),
				new THREE.Vector3(-1.7, 2.08, 10.5 )
				));
		
		//Caida en curva
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-1.7, 2.08, 10.5 ),
				new THREE.Vector3(-0.6, 2.05, 11.2),
				new THREE.Vector3(-0.4, 2, 9.8 )
				));
		
		//Caida en curva
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-0.4, 2, 9.8 ),
				new THREE.Vector3(-0.3, 1.9, 8.9),
				new THREE.Vector3(-1, 1.7, 8.7 )
				));
		
		//Caida en curva
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-1, 1.7, 8.7 ),
				new THREE.Vector3(-1.8, 1.5, 8.6),
				new THREE.Vector3(-1.5, 1.6, 9.7)
				));
				
		// Caida curva
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-1.5, 1.6, 9.7),
				new THREE.Vector3(-0.95, 1.6, 11.4),
				new THREE.Vector3( 0, 1.4, 9.9 )
				));
		
		// Salida de caida
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3( 0, 1.4, 9.9 ),
				new THREE.Vector3(0.5, 1.3, 9.2),
				new THREE.Vector3( 0.3, 1.2, 8 )
				));
		
		// Sig-sag bajo subida
		curve.add(
			new THREE.CubicBezierCurve3(
				new THREE.Vector3( 0.3, 1.2, 8 ),
				new THREE.Vector3(-0.2, 1.1, 6.3),
				new THREE.Vector3( -2.3, 1.1, 8.2 ),
				new THREE.Vector3( -4.2, 1.0, 6.5 )
				));
		// Bajada a loop
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-4.2, 1.0, 6.5 ),
				new THREE.Vector3(-4.9, 0.9, 5.8),
				new THREE.Vector3(-4.8, 0.6, 4.8 )
				));
		
		// Inicio Loop
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-4.8, 0.6, 4.8 ),
				new THREE.Vector3(-4.7, 0.25, 3.1),
				new THREE.Vector3(-4.8, 1.8, 2.7)
				));
		
		// Mitad A Loop
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-4.8, 1.8, 2.7),
				new THREE.Vector3(-4.9, 3.2, 2.4),
				new THREE.Vector3(-5, 3.3, 3.6 ) 
				));
		
		// Mitad B Loop
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-5, 3.3, 3.6 ) ,
				new THREE.Vector3(-5.1, 3.35, 4.6),
				new THREE.Vector3(-5.3, 2.3, 4.9 )
				));
		
		// Bajada Loop
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-5.3, 2.3, 4.9 ),
				new THREE.Vector3(-5.5, 1.25, 5.2),
				new THREE.Vector3(-5.3, 0.8, 4.1 )
				));
		
		// Salida Loop
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-5.3, 0.8, 4.1 ),
				new THREE.Vector3(-5.2, 0.5, 3.5),
				new THREE.Vector3(-5.1, 0.5, 3 )
				));
		
		// Recta Final
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-5.1, 0.5, 3 ),
				new THREE.Vector3(-4.9, 0.45, 2),
				new THREE.Vector3(-4.8, 0.4, 1 )
				));
		
		// Curva Final A
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-4.8, 0.4, 1 ),
				new THREE.Vector3(-4.3, 0.35, -2.2),
				new THREE.Vector3(-3.3, 0.3, -2 )
				));
		
		// Curva Final B
		curve.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(-3.3, 0.3, -2 ),
				new THREE.Vector3(-2, 0.27, -1.5),
				new THREE.Vector3(-2, 0.3, 2)
				));
		
		curve.closePath();
		
		const points = curve.getPoints( POINTS );
		let ff = curve.computeFrenetFrames(POINTS, true);
        
        this.railCurve = curve;
        this.frenetFrames = ff;
		
		let mesh = this.createRailsMesh(curve, ff);
		
		const geometry = new THREE.BufferGeometry().setFromPoints( points );
		
		const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
		
		// Create the final object to add to the scene
		const curveObject = new THREE.Line( geometry, material );
        
		this.add(mesh);
        
        this.helpers = {
            normals: [],
            tangents: [],
            binormals: []
        };
    }
    
    drawComponents(values, scene, color, curve, storage, removeY = false)
	{
		for (let pos = 0; pos < values.length; pos++)
		{
            let Matrix = new THREE.Matrix3();
			if (removeY)
				Matrix.set(1,0,0, 0,0,0, 0,0,1);
            
            const normpos = new THREE.Vector3(values[pos].x, values[pos].y, values[pos].z);
			normpos.applyMatrix3(Matrix);
            normpos.normalize();
            
            // Añadir flechas para mostrar las normales
			const arrowHelperLength = 1.0;  // Longitud de las flechas
			// Crear la flecha de normal
			const arrowHelper = new THREE.ArrowHelper(normpos, this.railCurve.getPointAt(pos/(POINTS+1)), arrowHelperLength, color);
            storage.push(arrowHelper);
			scene.add(arrowHelper);
		}
	}
	
		
	hideComponents(storage, scene)
	{
        for (let pos = 0; pos < storage.length; pos++)
		{
			scene.remove(storage[pos]);
		}
		
		storage.length = 0;
	}
	
	drawNormals(scene)
	{
        if (this.helpers.normals.length == 0)
            this.drawComponents(this.frenetFrames.normals, scene, 0x00ff00, this.railCurve, this.helpers.normals, true);
	}
	
	hideNormals(scene)
    {
        this.hideComponents(this.helpers.normals, scene);
    }
	
	drawTangents(scene)
	{
        if (this.helpers.tangents.length == 0)
            this.drawComponents(this.frenetFrames.tangents, scene, 0xff0000, this.railCurve, this.helpers.tangents);
	}
	
    hideTangents(scene)
    {
        this.hideComponents(this.helpers.tangents, scene);
    }
	
	drawBinormals(scene)
    {
        if (this.helpers.binormals.length == 0)
            this.drawComponents(this.frenetFrames.binormals, scene, 0x0000ff, this.railCurve, this.helpers.binormals);
    }
    
    hideBinormals(scene)
    {
        this.hideComponents(this.helpers.binormals, scene);
    }
	
    // Genera el contorno de las vias de la montaña
	getTrackShape(scene)
	{
		// Rectangle for the Parametric geometry
		let rectangle = new THREE.CurvePath();
		rectangle.autoClose =false;
		const XLen = 0.20;
		const XStart = -0.178;
		const YLen = 0.2;
		const YStart = 0.16;
		const ZStart = 0.0001;
		
		rectangle.add(
			new THREE.QuadraticBezierCurve3(
				new THREE.Vector3(- XStart - 0.178, YStart - 0.335, ZStart),
				new THREE.Vector3(- XStart - 0.158, YStart - 0.34, ZStart),
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
				new THREE.Vector3(-(XStart + 0.174) , YStart - 0.148, ZStart ),
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
				new THREE.Vector3(XStart +0.178, YStart - 0.335, ZStart)
				));
		
		//rectangle.closePath();
		
// 		const recpoints = rectangle.getPoints( 50 );
// 		const recgeometry = new THREE.BufferGeometry().setFromPoints( recpoints );
// 		const recmaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
// 		const rec = new THREE.Line( recgeometry, recmaterial );
// 		
// 		scene.add( rec );
// 		
		return rectangle;
	}
	
    createRailsMesh(curve, frames)
	{		
		// Track shape for the Parametric geometry
		let rectangle = this.getTrackShape();
		
		let ParamFunc = function (u, v, target) {
			let Matrix = new THREE.Matrix3();
			Matrix.set(1,0,0, 0,0,0, 0,0,1);
			
			const m = new THREE.Matrix4();

			// Escalado y rotación para la forma
			const scale = new THREE.Matrix4();
			const rotation = new THREE.Matrix4();
			
			scale.makeScale(0.5,0.75,0.75);
			rotation.makeRotationZ(Math.PI);
			target.copy(rectangle.getPointAt(u));
			
			let position = curve.getPointAt(v);
			//let tangent = curve.getTangentAt(v);
			
			let frpos = Math.floor((POINTS) * v);
			
			// Cuando estamos en el último punto de la curva forzamos
			// que el valor de la tangente y normal sean los que se usaron al inicio de la curva
			if (v == POINTS)
				frpos = 0;
			
			target.applyMatrix4(scale);
			target.applyMatrix4(rotation);
		
			frames.normals[frpos].applyMatrix3(Matrix);
			frames.normals[frpos].normalize();
			frames.binormals[frpos].crossVectors(frames.tangents[frpos], frames.normals[frpos]);
			frames.binormals[frpos].normalize();
			
			m.set(  frames.normals[frpos].x,frames.binormals[frpos].x, frames.tangents[frpos].x, position.x, 
				    frames.normals[frpos].y,frames.binormals[frpos].y, frames.tangents[frpos].y, position.y,
				    frames.normals[frpos].z,frames.binormals[frpos].z, frames.tangents[frpos].z, position.z, 
				  0, 0, 0, 1 );
			
			target.applyMatrix4(m);
			//target.applyMatrix4(scale);
		}
		
		const geometry = new ParametricGeometry( ParamFunc, 20, POINTS -1);
		const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: false, wireframe: false});
		const mesh = new THREE.Mesh( geometry, material );
		
        return mesh;
	}
}
