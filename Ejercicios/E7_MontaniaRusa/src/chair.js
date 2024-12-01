import * as THREE from 'three';

import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

const VertexCount = 12; // La mínima cantidad de vertices es 6, pero usamos 12 por si necesitamos flexibilidad con los v-shaders
const SlicesCount = 10; // Se puede reducir hasta 4 unidades ya que es el minimo valor que toleran las tapas

export class Chair extends THREE.Object3D {
    
    constructor(length, width, translate = new THREE.Vector3(0,0,0), color=0xf58b00)
    {
        super();
        
        this.len = length;
        this.width = width;
        
        const backWidth = 0.20; // Percetage
        const seatWidth = 0.2;
        
        // Puntos con la forma de L
        let points = {
            topA: new THREE.Vector3(0, this.len, 0),
            topB: new THREE.Vector3(this.len * backWidth, this.len, 0),
            midB: new THREE.Vector3(this.len * backWidth, this.len * seatWidth, 0),
            midC: new THREE.Vector3(this.len, this.len * seatWidth, 0),
            botC: new THREE.Vector3(this.len, 0, 0),
            botA: new THREE.Vector3(0, 0, 0)
        }
        
        // La forma son 6 puntos en cada vertice de la "L" que forma el asiento proyectados en el eje z
        let shape = function(u, v, target, _this)
        {
            if (u <= 1/6)
            {
                target.lerpVectors(points.topA, points.topB, u * 6);
                
                target.z = v * _this.width;
            } else if (u <= 1/3)
            {
                target.lerpVectors(points.topB, points.midB, (u - 1/6) / (1/3 - 1/6));
                
                target.z = v * _this.width;
            } else if (u <= 1/2)
            {
                target.lerpVectors(points.midB, points.midC, (u - 1/3) / (1/2 - 1/3));
                
                target.z = v * _this.width;
            } else if (u <= 2/3)
            {
                target.lerpVectors(points.midC, points.botC, (u - 1/2) / (2/3 - 1/2));
                
                target.z = v * _this.width;
            } else if (u <= 5/6){
                target.lerpVectors(points.botC, points.botA, (u - 2/3) / ( 5/6 - 2/3) );
                
                target.z = v * _this.width;
            } else {
                target.lerpVectors(points.botA, points.topA, (u - 5/6) / (1 - 5/6));
                
                target.z = v * _this.width;
            }
            
            return target;
        }
        
        const chairGeometry = new ParametricGeometry( (u,v,target) => {shape(u, v, target, this);}, 12, 10 );
        chairGeometry.computeVertexNormals();
        chairGeometry.translate(translate);
        
        const chairMaterial = new THREE.MeshPhongMaterial( { color: color, wireframe: false, side: THREE.DoubleSide, specular: 0xffffff, shininess: 30} );
        this.chair = new THREE.Mesh( chairGeometry, chairMaterial );
        
        let bottonCapTranslate = translate.clone();
        this.cap = this.buildCap(points, THREE.FrontSide, translate, color);
        this.bottomCap = this.buildCap(points, THREE.BackSide, translate, color);
        
        this.bottomCap.position.z = this.width;
        
        this.chair.add(this.cap);
        this.chair.add(this.bottomCap);
        
        this.add(this.chair);
    }
    
    // Tapa del extremo del asiento
    buildCap(points, side, translate, color)
    {
        let startVector = new THREE.Vector3();
        let endVector = new THREE.Vector3();
        
        // Usamos los mismos puntos pero recorriendolos por cada frontera de la L (los puntos mas a la izquierda/debajo y los puntos mas a la derecha/arriba)
        // los steps se usan ahora para ir conectado cada avance
        let shape = function(u, v, target, _this)
        {
            if (v < 0.5)
            {                
                startVector.lerpVectors(points.topA, points.botA, v * 2);
                endVector.lerpVectors(points.topB, points.midB, v * 2);
                
                target.lerpVectors(startVector, endVector, u);
            } else
            {
                startVector.lerpVectors(points.botA, points.botC, (v - 0.5) * 2);
                endVector.lerpVectors(points.midB, points.midC, (v - 0.5) * 2);
                
                target.lerpVectors(startVector, endVector, u);
            }
            
            return target;
        }
        
        const capGeometry = new ParametricGeometry( (u,v,target) => {shape(u, v, target, this);}, 12, 10 );
        capGeometry.computeVertexNormals();
        capGeometry.translate(translate);
        const capMaterial = new THREE.MeshPhongMaterial( { color: color, wireframe: false, side: side, specular: 0xffffff, shininess: 30} );
        const cap = new THREE.Mesh( capGeometry, capMaterial );
        
        return cap;
    }
}
