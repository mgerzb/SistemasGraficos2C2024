import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";
import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';

import { CamerasId } from './constants.js';

const POINTS = 400;

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
        //                        \
        //                         \
        //                          --
        curve.add(
            new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(-2, 0.4, 3),
                new THREE.Vector3(-2, 1, 5),
                new THREE.Vector3( -2, 5, 6 )
                ));
        // Cuspide A
        //                _
        //                 \
        curve.add(
            new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(-2, 5, 6),
                new THREE.Vector3(-2, 6, 6.2),
                new THREE.Vector3( -2, 6, 7 )
                ));
        
        // Cuspide B
        //                 _
        //                /
        curve.add(
            new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(-2, 6, 7),
                new THREE.Vector3(-2, 6, 7.5),
                new THREE.Vector3( -2, 5, 8 )
                ));
        
        // Bajada
        //            /
        //           /
        curve.add(
            new THREE.QuadraticBezierCurve3(
                new THREE.Vector3(-2, 5, 8),
                new THREE.Vector3(-2, 3.75, 8.625),
                new THREE.Vector3(-2, 2.5, 9.25)
                ));
        
        // Fin Bajada
        //                /
        //              ──
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
        curve.arcLengthDivisions = 800;
        curve.updateArcLengths();
        
        let ff = curve.computeFrenetFrames(POINTS, true);
        
        this.railCurve = curve;
        this.frenetFrames = ff;
        
        this.rcMesh = this.createRailsMesh(curve, ff);
        
        // Dibuja las columnas y crea una nueva cada X distancia (de ser posible)
        this.createColumns(this.railCurve, 1, ff);
        
        this.add(this.rcMesh);
        
        this.helpers = {
            normals: [],
            tangents: [],
            binormals: []
        };
    }
    
    addTrain(train)
    {
        this.train = train;
        this.train.matrixAutoUpdate = false;
        this.trainPosition = 0;
        this.add(train);
        
        train.rotation.x = Math.PI;  
        train.position.y += -0.09;
        
        this.trainSpeed = 1;
        
        this.animate();
    }
    
    animate()
    {
        this.trainPosition += this.trainSpeed;
        
        let curvePoints = this.railCurve.getSpacedPoints(8*POINTS);
        
        if (this.trainPosition >8*POINTS)
            this.trainPosition = 0;
        
        const frames = this.frenetFrames;
        const position = curvePoints[this.trainPosition];//this.railCurve.getPointAt(currentCurvePosition);
        
        const ffposition = this.trainPosition / 8;//currentCurvePosition; * (this.frenetFrames.normals.length - 1)
        // Promedio de la normal
        let frameNormals = frames.normals[Math.floor(ffposition)].clone();
        let frameBinormals = frames.binormals[Math.floor(ffposition)].clone();
        let frameTangents = frames.tangents[Math.floor(ffposition)].clone();
        
        frameNormals.lerp(frames.normals[Math.ceil(ffposition)], ffposition - Math.floor(ffposition));
        frameBinormals.lerp(frames.binormals[Math.ceil(ffposition)], ffposition - Math.floor(ffposition));
        frameTangents.lerp(frames.tangents[Math.ceil(ffposition)], ffposition - Math.floor(ffposition));
        
        let rotation = new THREE.Matrix4();
        rotation.makeRotationX(Math.PI);
        let scale = new THREE.Matrix4();
        scale.makeScale(0.1, 0.1, 0.1);
        let m = new THREE.Matrix4();
        m.set(  frameNormals.x,frameBinormals.x, frameTangents.x, position.x + 0.1 * -frameBinormals.x,
                frameNormals.y,frameBinormals.y, frameTangents.y, position.y + 0.1 * -frameBinormals.y,
                frameNormals.z,frameBinormals.z, frameTangents.z, position.z + 0.1 * -frameBinormals.z,
                0, 0, 0, 1);
        
        let FrontCamera = this.getObjectByName(CamerasId.TrainFront);
        let BackCamera = this.getObjectByName(CamerasId.TrainBack);
        let SideCamera = this.getObjectByName(CamerasId.TrainSide);
        
        if (FrontCamera && BackCamera && SideCamera)
        {
            this.animateCameras(FrontCamera, BackCamera, SideCamera, frameNormals, frameBinormals, frameTangents, position);
        }

        
        rotation.multiply(scale);
        m.multiply(rotation);
        
        this.train.matrix = m;
    }
    
    animateCameras(FrontCamera, BackCamera, SideCamera, frameNormals, frameBinormals, frameTangents, position)
    {
        FrontCamera.matrixAutoUpdate = false;
        BackCamera.matrixAutoUpdate = false;
        SideCamera.matrixAutoUpdate = false;
        
        let FrontRotation = new THREE.Matrix4();
        FrontRotation.makeRotationX(Math.PI);
        
        let FrontPosition = new THREE.Matrix4();
        let BackRotation = FrontPosition.clone();
        let SideRotation = FrontPosition.clone();
        
        FrontPosition.makeTranslation(0, 0.01, -0.01); 
        BackRotation.makeRotationZ(Math.PI);
        SideRotation.makeRotationFromEuler(new THREE.Euler(-0.65, Math.PI/2, Math.PI, 'ZYX'));
        
        let FrontMatrix = new THREE.Matrix4();
        FrontMatrix.set(  frameNormals.x,frameBinormals.x, frameTangents.x, position.x + 0.15 * -frameBinormals.x,
                          frameNormals.y,frameBinormals.y, frameTangents.y, position.y + 0.15 * -frameBinormals.y,
                          frameNormals.z,frameBinormals.z, frameTangents.z, position.z + 0.15 * -frameBinormals.z,
                          0, 0, 0, 1);
        
        let BackMatrix = FrontMatrix.clone();
        let SideMatrix = FrontMatrix.clone();
        
        FrontMatrix.multiply(FrontRotation);
        FrontMatrix.multiply(FrontPosition);
        
        let BackPosition = new THREE.Matrix4();
        let SidePosition = BackPosition.clone();
        
        BackPosition.makeTranslation(0, 0.025, -0.08); 
        SidePosition.makeTranslation(-0.04, 0.005, 0.25); 
        
        BackMatrix.multiply(BackRotation);
        BackMatrix.multiply(BackPosition);
        
        SideMatrix.multiply(SideRotation);
        SideMatrix.multiply(SidePosition);
        
        FrontCamera.matrix = FrontMatrix;
        BackCamera.matrix = BackMatrix;
        SideCamera.matrix = SideMatrix;
    }
    
    wireframe(enable)
    {
        this.rcMesh.material.wireframe = enable;
        this.rcMesh.material.needsUpdate = true;
    }
    
    flatShading(enable)
    {
        this.rcMesh.material.flatShading = enable;
        this.rcMesh.material.needsUpdate = true;
    }
    
    // Dibuja los helpers para la curva
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
    
    // Oculta los helpers de la curva (si estuvieran agregados)
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
        
        return rectangle;
    }
    
    createRailsMesh(curve, frames)
    {        
        // Obtenemos la forma de las vias
        let rectangle = this.getTrackShape();
        
        // Funcion que va a crear el mapeo de la forma de la via a 3D
        let ParamFunc = function (u, v, target) {
            // Matriz para proyectar la normal sobre el plano xz
            let normalProjectionMatrix= new THREE.Matrix3();
            normalProjectionMatrix.set(1,0,0, 0,0,0, 0,0,1);
            
            const m = new THREE.Matrix4();

            // Escalado y rotación para la forma
            const scale = new THREE.Matrix4();
            const rotation = new THREE.Matrix4();
            
            scale.makeScale(0.5,0.75,0.75);
            rotation.makeRotationZ(Math.PI);
            target.copy(rectangle.getPointAt(u));
            
            let position = curve.getPointAt(v);
            
            let frpos = Math.floor((POINTS) * v);
            
            // Cuando estamos en el último punto de la curva forzamos
            // que el valor de la tangente y normal sean los que se usaron al inicio de la curva
            // FIXME Esto no esta funcionando como corresponde, probablemente necesitamos promediar con lerp
            if (v == POINTS)
                frpos = 0;
            
            target.applyMatrix4(scale);
            target.applyMatrix4(rotation);
        
            frames.normals[frpos].applyMatrix3(normalProjectionMatrix);
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
        //geometry.computeVertexNormals();
        const material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: false, wireframe: false});
        const mesh = new THREE.Mesh( geometry, material );
        
        return mesh;
    }
    
    // Elimina de la lista de resultados del raycast cualquier resultado que esté por encima de cierto valor de y
    removeInvalidRayIntersections(intersects, filter)
    {
        let validIntersections = [];
        
        for (let intersection = 0; intersection < intersects.length; intersection++)
            if (intersects[intersection].distance < filter)
                validIntersections.push(intersects[intersection]);
        
        return validIntersections;
    }

    createColumns(curve, step, frames )
    {       
        
        const columnRadius = 0.05;
        const columnForm = new THREE.EllipseCurve(0, 0, columnRadius, columnRadius, 0, 2* Math.PI, false);
        
        // Primero obtenemos un proyeccion de la curva en el plano xz
        // (nos va a permitir calcular correctamente una equidistancia entre columnas)
        const points = curve.getSpacedPoints( POINTS );
        let proyectedPoints = points.map(function(point) {
            let newPoint = point.clone();
            newPoint.y = 0;
            return newPoint;
        });
        
        let arclen = 0; // Actual distancia recorrida
        let arclenCurve = 0;
        
        for (let position = 1; position < proyectedPoints.length; position++)
        {
            arclen += proyectedPoints[position-1].distanceTo(proyectedPoints[position]);
            arclenCurve += points[position-1].distanceTo(points[position]);
            
            if (arclen >= step)
            {
                // Computamos que tan lejos del punto final está la distancia objetivo
                let LenVecFinal = arclen - step;
                let LenVecCurve = arclenCurve - step;
                    
                // Obtenemos la proyección lineal para el punto que buscamos y el punto en la curva de las vias
                let columnPos = proyectedPoints[position-1].lerp(proyectedPoints[position], LenVecFinal);
                let columnHeight = points[position-1].lerp(points[position], LenVecCurve);
                
                // Promedio de frenet frames a usar
                let topFrameNormals = frames.normals[position-1].lerp(frames.normals[position], LenVecCurve);
                let topFrameTangents = frames.tangents[position-1].lerp(frames.tangents[position], LenVecCurve);
                let topFrameBinormals = frames.binormals[position-1].lerp(frames.binormals[position], LenVecCurve);
                
                const raycaster = new THREE.Raycaster()
                raycaster.set(columnPos, new THREE.Vector3(0, 1, 0));
                const intersects = raycaster.intersectObject(this.rcMesh);
                
                // Solo vamos a contar las intersecciones que esten por debajo de la distancia
                // de la columna a la pista (remueve los falsos positivos en el loop)
                const validIntersections = this.removeInvalidRayIntersections(intersects, columnHeight.y);

                // Si hay mas de una interseccion con la montaña rusa o si la normal n0 apunta para arriba, no queremos agregar una columna
                if (validIntersections.length <= 1 && topFrameBinormals.y < 0)
                {

                    // Matriz para proyectar la normal sobre el plano xz
                    let normalProjectionMatrix= new THREE.Matrix3();
                    normalProjectionMatrix.set(1,0,0, 0,0,0, 0,0,1);
                    topFrameNormals.applyMatrix3(normalProjectionMatrix);
                    topFrameNormals.normalize();
                    
                    // Usamos un quaternion para modificar la inclinación de la punta
                    const quaternion = new THREE.Quaternion();
                    quaternion.setFromAxisAngle(topFrameNormals, Math.PI/2 * topFrameTangents.y);
                    
                    const topPositionMatrix = new THREE.Matrix4();
                    topPositionMatrix.set(  1 - (topFrameBinormals.x * topFrameBinormals.x), -topFrameBinormals.x*topFrameBinormals.y, -topFrameBinormals.x*topFrameBinormals.z, 0, 
                    -topFrameBinormals.x*topFrameBinormals.y, 1-(topFrameBinormals.y * topFrameBinormals.y), -topFrameBinormals.y*topFrameBinormals.z, 0,
                    -topFrameBinormals.x*topFrameBinormals.z, -topFrameBinormals.y*topFrameBinormals.z , 1 - (topFrameBinormals.z * topFrameBinormals.z), 0, 
                    0, 0, 0, 1 );
                    
                    const positionMatrix = new THREE.Matrix4();
                    positionMatrix.set(1, 0, 0, columnPos.x, 0, 1, 0, columnHeight.y, 0, 0, 1, columnPos.z, 0,0,0,1);
                    
                    // Vamos a buscar la altura mínima en la curva (necesario para adaptar la forma de la columna a las vias)
                    // Esta altura minima despues va a utilizars para modificar la posición de top de las columnas con mayor inclinación en su punta (las mas problemáticas
                    // a la hora de evitar que queden atravezando)
                    let topMinHeight = columnHeight.y;
                    for (let i=0; i<8; i++)
                    {
                        let currentPos = new THREE.Vector3(columnPos.x + Math.cos(Math.PI/4 * i) * columnRadius, 0, columnPos.y + Math.sin(Math.PI/4 * i));
                        raycaster.set(currentPos, new THREE.Vector3(0, 1, 0));
                        const validIntersections = this.removeInvalidRayIntersections(intersects, columnHeight.y);
                        
                        if (topMinHeight > validIntersections[0].distance)
                            topMinHeight = validIntersections[0].distance;
                    }
                    
                    let ParamFunc = function (u, v, target) {
                        let output = new THREE.Vector3(columnForm.getPointAt(u).x, 0, columnForm.getPointAt(u).y);
                        target.set(output.x, output.y, output.z);
                        
                        //Al top 10% le aplicamos la matriz de posicionamiento de borde (i.e. inclina la cara siguiendo la dirección de la superficie)
                        if (v < 0.1 && (topFrameTangents.y < -0.55 || topFrameTangents.y > 0.55))
                        {
                            let heightCorrection = target.clone(); // Usamos este vector para obtener la corrección de altura de la punta
                            heightCorrection.applyQuaternion(quaternion);
                            target.y += topMinHeight + heightCorrection.y + 0.1; // FIXME Tuve que agregar un valor constante para evitar qudar corto en la altura
                        } else {
                            target.y += columnHeight.y * (1-v);
                        }
                    
                        
                        return target;
                    }
                    
                    const columnGeometry = new ParametricGeometry( ParamFunc, 32, 3);
                    const columnMaterial = new THREE.MeshPhongMaterial({ color: 0xD3D3D3, flatShading: false, wireframe: false});
                    
                    const column = new THREE.Mesh( columnGeometry, columnMaterial );
        
                    column.position.set(columnPos.x, 0, columnPos.z);
            
                    this.add(column);

                }
                
                arclen = 0;
                arclenCurve = 0;
            }
        }
        
    }
}
