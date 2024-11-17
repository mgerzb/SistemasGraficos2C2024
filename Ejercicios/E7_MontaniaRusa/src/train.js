import * as THREE from 'three';
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from "three/examples/jsm/geometries/ParametricGeometries.js";

export class Train extends THREE.Object3D {
    
    constructor() {
        super();
        
        const slices = 32;
        const dist = 0.4;
        const radius = 0.25;
        const length = 0.5;
        const width = 0.25;
        const escale = 0.5;
        
        const ParamFunc = this.getPartsDrawingFunction(slices, dist, radius, length, width, escale, escale);
        
        const TopGeometry = new ParametricGeometry( ParamFunc, slices, 1);
        const TopMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF11, flatShading: false, wireframe: false, side: THREE.DoubleSide});
        const Top = new THREE.Mesh( TopGeometry, TopMaterial );
        
        let End = Top.clone();
        
        End.position.z = -dist * 2;
        End.rotation.y = Math.PI;
        
        const BodyFunc = this.getPartsDrawingFunction(slices, 0.8, radius, width, length,0,0, false);
        
        const BodyGeo = new ParametricGeometry( BodyFunc, slices, 1);
        const BodyMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF11, flatShading: false, wireframe: false, side: THREE.DoubleSide});
        const Body = new THREE.Mesh( BodyGeo, BodyMaterial );
        
        Body.position.z = -dist*2;
        Body.rotation.z = Math.PI/2;
        
        const CapGeometry = this.getCap(radius/2, length/2, width/2, 32);
        const CapMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF11, flatShading: false, wireframe: false, side: THREE.DoubleSide});
        const FrontCap = new THREE.Mesh( CapGeometry, CapMaterial);
        const BackCap = new THREE.Mesh( CapGeometry, CapMaterial);
        
        FrontCap.position.z = dist;
        FrontCap.rotation.x = Math.PI/2;
        
        BackCap.position.z = -dist*3;
        BackCap.rotation.x = -Math.PI/2;
        
        this.add(Top);
        this.add(End);
        this.add(Body);
        this.add(FrontCap);
        this.add(BackCap);
    }
    
    getPartsDrawingFunction(slices, dist, radius, length, width, escalex, escaley, closed=true)
    {
        const slicesPerCorner = (slices - 4) / 4;
        const slicesDelta = 1 / slices;
        
        const EscaleMatrix = new THREE.Matrix3();
        
        let ParamFunc = function (u, v, target) {

            if (u != 0 && (u % 0.25) == 0)
            {
                if (u == 0.25)
                {
                    target.x = radius * Math.cos(Math.PI/2) + length/2;
                    target.y = radius * Math.sin(Math.PI/2) + width/2;
                } else if ( u == 0.5 )
                {
                    target.x = radius * Math.cos(Math.PI) + length/2;
                    target.y = radius * Math.sin(Math.PI) + width/2;
                } else if ( u == 0.75 )
                {
                    target.x = radius * Math.cos(3*Math.PI/2) + length/2;
                    target.y = radius * Math.sin(3*Math.PI/2) + width/2;
                } else if ( u == 1 )
                {
                    target.x = closed ? radius + length/2: length/2 + radius;
                    target.y = closed ? width/2 : -width/2;
                }
            } else {
                if (u <= slicesPerCorner*slicesDelta) // Casos para la primera curva
                {
                    target.x = radius * Math.cos(Math.PI/2 * u/(slicesPerCorner*slicesDelta)) + length/2;
                    target.y = radius * Math.sin(Math.PI/2 * u/(slicesPerCorner*slicesDelta)) + width/2;
                } else if (u < 0.25 && u > slicesPerCorner*slicesDelta) // Filtro para normales
                {
                    target.x = radius * Math.cos(Math.PI/2 * u/0.25) + length/2;
                    target.y = radius * Math.sin(Math.PI/2 * u/0.25) + width/2;
                } else if ( u > 0.25 && u <= (0.25 + slicesPerCorner*slicesDelta)) // Segunda curva
                {
                    target.x = radius * Math.cos(Math.PI/2 + Math.PI/2 * (u-0.25)/(slicesPerCorner*slicesDelta)) + length/2;
                    target.y = radius * Math.sin(Math.PI/2 + Math.PI/2 * (u-0.25)/(slicesPerCorner*slicesDelta)) + width/2;
                } else if (u < 0.5 && u > (0.25 + slicesPerCorner*slicesDelta)) // normales
                {
                    target.x = radius * Math.cos(Math.PI * u/0.5) + length/2;
                    target.y = radius * Math.sin(Math.PI * u/0.5) + width/2;
                } else if ( u > 0.5 && u <= (0.5 + slicesPerCorner*slicesDelta)) // Tercera
                {
                    target.x = radius * Math.cos(Math.PI + Math.PI/2 * (u-0.5)/(slicesPerCorner*slicesDelta)) + length/2;
                    target.y = radius * Math.sin(Math.PI + Math.PI/2 * (u-0.5)/(slicesPerCorner*slicesDelta)) + width/2;
                } else if (u < 0.75 && u > (0.5 + slicesPerCorner*slicesDelta)) // normales
                {
                    target.x = radius * Math.cos(1.5*Math.PI * u/0.75) + length/2;
                    target.y = radius * Math.sin(1.5*Math.PI * u/0.75) + width/2;
                } else if ( u > 0.75 && u <= (0.75 + slicesPerCorner*slicesDelta)) // Cuarta
                {
                    target.x = radius * Math.cos(1.5 * Math.PI + Math.PI/2 * (u-0.75)/(slicesPerCorner*slicesDelta)) + length/2;
                    target.y = radius * Math.sin(1.5 * Math.PI + Math.PI/2 * (u-0.75)/(slicesPerCorner*slicesDelta)) + width/2;
                } else
                {
                    target.x = radius * Math.cos(2*Math.PI * u) + length/2;
                    target.y = radius * Math.sin(2*Math.PI * u) + width/2;
                }
                
            }


            target.z = dist*v;
            EscaleMatrix.makeScale(1-escalex*v, 1-escaley*v);
            
            if (u >= 0.25 && u < 0.5)
            {
                target.x -= length;
            } else if (u >= 0.5 && u < 0.75)
            {
                target.x -= length;
                target.y -= width;
            } else if (u >= 0.75 && u < 1)
            {
                target.y -= width;
            } 
            
            if (v > 0)
                target.applyMatrix3(EscaleMatrix);
        }
        
        return ParamFunc;
    }
    
    // Create the top or bottom cap of the cylinder
    buildCap(buffers, radius, z, length, width, isTopCap = false) {
        const flatSegments = 4;
        const angleStep = (2 * Math.PI) / (buffers.segments - flatSegments);
        const slicesPerCorner = (buffers.segments - flatSegments) / 4;
        
        let positions = buffers.positions;
        let indices = buffers.indices;
        let normals = buffers.normals;
        let uvs = buffers.uvs;
        
        const centerIndex = 0;
        positions.push(0, z, 0);
        normals.push(0, 1, 0);
        uvs.push(1, 1);
        
        let lenOffset = length/2;
        let widOffset = width/2;
        let indexCorrection = 0;
        let cornerSlicesCount = 0;
        
        // Create the vertices of the cap
        for (let i = 0; i <= buffers.segments + 2; i++) {
            // The angle of the vertex
            if (cornerSlicesCount == slicesPerCorner + 1)
            {
                if (i / (slicesPerCorner +1) == 1)
                {
                    lenOffset -= length;
                }
                
                if (i / (slicesPerCorner +1) == 2)
                {
                    widOffset -= width;
                }
                
                if (i / (slicesPerCorner +1) == 3)
                {
                    lenOffset += length;
                }
                
                if (i / (slicesPerCorner +1) == 4)
                {
                    widOffset += width;
                }
                
                indexCorrection++;
                cornerSlicesCount = 0;
            }
            
            
            const angle = (i - indexCorrection) * angleStep;
            //	The position of the vertex
            const x = radius * Math.cos(angle) + lenOffset;
            const y = radius * Math.sin(angle) + widOffset;
            
            // The position of the cap vertex
            positions.push(x, z, y);
            // The normal of the cap points in the direction of the z axis
            normals.push(x, 1, y);
            uvs.push(0, 0);
            
            if (i <= buffers.segments + 2) {
                const a = centerIndex;
                const b = centerIndex + i + 1 - indexCorrection;
                const c = centerIndex + i + 2 - indexCorrection;
                // The order of the vertices is reversed for the top cap
                indices.push(a, c, b);

            }
            
            cornerSlicesCount++;
            
        }
        
        const a = centerIndex;
        const b = centerIndex + buffers.segments;
        const c = 1;
        // The order of the vertices is reversed for the top cap
        if (!isTopCap) {
            // The indices of the triangle
            indices.push(a, c, b);
        } else {
            // The indices of the triangle
            indices.push(a, b, c);
        }
    }
    
    getCap(radius, length, width, segments)
    {
        let geometry = new THREE.BufferGeometry();
        
        const positions = [];
        const indices = [];
        const normals = [];
        const uvs = [];
        
        //	The top and bottom caps of the cylinder
        this.buildCap({ positions, indices, normals, uvs, segments }, radius, 0, length, width, false);
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        geometry.setIndex(indices);
        
        return geometry;
    }
    
}
