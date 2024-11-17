import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";
import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';
import { Chair} from './chair.js';

const ChairName = 'chair';

export class FlyingChairs extends THREE.Object3D {

    constructor()
    {
        super();
        
        this.properties = 
        {
            segmentCount: 25,
            baseBigRadius: 0.18,
            baseMidRadius: 0.13,
            baseLowRadius: 0.08,
            baseLength: 0.5,
            
            topWidth: 1,
            topLength: 0.3,
            axisRadius: 0.08,
            axisLength: 1,
            
            chainRad: 0.008,
            chainLen: 0.9,
            
            chairLen: 0.12,
            chairWid: 0.25,
            
            baseColor: 0x36b2fa,
            axisColor: 0xAAAAAA,
            topColor: 0xf58b00,
            chainColor: 0x151515
        }
        
        this.chairRotPosition = 0;
        
        this.base = this.createBase();
        this.axis = this.createAxis();
        this.top = this.createTop();
        
        this.chairs = [];
        
        // Estructura del juego
        this.add(this.base);
        this.add(this.axis);
        this.add(this.top);
        
        const chairCount = 10;
        
        for (let i = 0; i < chairCount; i++)
        {
            let chair = this.createChainChair();
            this.chairs.push(chair);
            
            // Posicionamiento alrededor del techo
            chair.position.x = (this.properties.topWidth - 0.1) * Math.cos(2* Math.PI * (1 - i/chairCount));
            chair.position.z = -(this.properties.topWidth - 0.1) * Math.sin(2* Math.PI * (1 - i/chairCount));
            
            // Alineación (Solo la silla! la cadena queda como está)
            chair.getObjectByName(ChairName).rotation.y = Math.PI/2;
            
            chair.position.y += this.properties.chairLen;

            chair.rotation.y = 2 * Math.PI * (1-i/chairCount);
            
            this.top.add(chair);
        }
        
    }
    
    createBase()
    {
        let properties = this.properties;
        let shape = function(u, v, target, properties)
        {
            const bigToMid = properties.baseBigRadius - properties.baseMidRadius;
            // El 70% de la estructura es la base con mayor radio
            if (v <= 0.6)
            {
                target.x = properties.baseBigRadius * Math.cos(2*Math.PI * (1-u));
                target.z = properties.baseBigRadius * Math.sin(2*Math.PI * (1-u));
            } else if (v <= 0.8)
            {
                target.x = (properties.baseBigRadius - (bigToMid) * ((v - 0.6)/0.2)) * Math.cos(2*Math.PI * (1-u));
                target.z = (properties.baseBigRadius - (bigToMid) * ((v - 0.6)/0.2)) * Math.sin(2*Math.PI * (1-u));
            }
            else if (v <= 0.95)
            {
                target.x = properties.baseMidRadius * Math.cos(2*Math.PI * (1-u));
                target.z = properties.baseMidRadius * Math.sin(2*Math.PI * (1-u));
            } else
            {
                target.x = properties.baseLowRadius * Math.cos(2*Math.PI * (1-u)) * (0.1/(v - 0.9));
                target.z = properties.baseLowRadius * Math.sin(2*Math.PI * (1-u)) * (0.1/(v - 0.9));
            }
            
            target.y = properties.baseLength * v;
        };
        
        const geometry = new ParametricGeometry( (u,v,target) => {shape(u, v, target, properties);}, this.properties.segmentCount, 20 );
        const material = new THREE.MeshPhongMaterial( { color: this.properties.baseColor } );
        const base = new THREE.Mesh( geometry, material );

        return base;
    }
    
    // Eje central de las sillas voladoras
    createAxis()
    {
        const geometry = new THREE.CylinderGeometry( this.properties.axisRadius, this.properties.axisRadius, this.properties.axisLength, this.properties.segmentCount, 3, true); 
        const material = new THREE.MeshPhongMaterial( {color: this.properties.axisColor} ); 
        const cylinder = new THREE.Mesh( geometry, material );
        
        cylinder.position.y = this.properties.baseLength * 2;
        
        return cylinder;
    }
    
    // Techo de la estructura de las silla voladoras
    createTop()
    {
        let shape = function(u, v, target, properties)
        {
            const baseToTop = properties.topWidth - properties.baseLowRadius;
            if (v == 0)
            {
                target.x = properties.baseLowRadius * Math.cos(2*Math.PI * (1-u));
                target.z = properties.baseLowRadius * Math.sin(2*Math.PI * (1-u));
                target.y = 0;
            } else if (v <= 0.2)
            {
                target.x = (properties.baseLowRadius + (baseToTop) * (v/0.2)) * Math.cos(2*Math.PI * (1-u));
                target.z = (properties.baseLowRadius + (baseToTop) * (v/0.2)) * Math.sin(2*Math.PI * (1-u));
                
                target.y = properties.topLength * (0.1 + v);
            } else if (v <= 0.8)
            {
                target.x = properties.topWidth * Math.cos(2*Math.PI * (1-u));
                target.z = properties.topWidth * Math.sin(2*Math.PI * (1-u));
                target.y = properties.topLength * (0.1 + v);
            } else
            {
                target.x = 0;
                target.z = 0;
                target.y = properties.topLength * 1.5;
            }
        }
        
        const geometry = new ParametricGeometry( (u,v,target) => {shape(u, v, target, this.properties);}, this.properties.segmentCount, 10 );
        geometry.computeVertexNormals();
        const material = new THREE.MeshPhongMaterial( { color: this.properties.topColor, wireframe: false} );
        const top = new THREE.Mesh( geometry, material );
        
        top.position.y = this.properties.axisLength + this.properties.baseLength;
        
        return top;
    }
    
    createChainChair()
    {
        const chainGeometry = new THREE.CylinderGeometry( this.properties.chainRad, this.properties.chainRad, this.properties.chainLen, 32 );
        chainGeometry.translate(0,-this.properties.chainLen/2, 0);
        const chainMaterial = new THREE.MeshPhongMaterial( {color: this.properties.chainColor} ); 
        const chain = new THREE.Mesh( chainGeometry, chainMaterial );;
        
        let chair = new Chair(this.properties.chairLen, this.properties.chairWid , new THREE.Vector3(this.properties.chainRad, - (this.properties.chainLen + this.properties.chairLen), - this.properties.chairWid/2));
        chair.name = ChairName;
        
        chain.add(chair);
        
        return chain;
    }
    
    animate()
    {
        this.chairRotPosition += 0.01;
        
        this.top.rotation.y = this.chairRotPosition;
        this.chairs.map(function(chair) {chair.rotation.z = Math.PI/6;});
        
    }
    
}
