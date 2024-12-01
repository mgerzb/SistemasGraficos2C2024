import * as THREE from 'three';

export class Pool extends THREE.Object3D
{
    constructor(width, length)
    {
        super();
        const height = 0.1;
        const bordersSize = 0.1;
        const borderColor = 0x777777;
        
        
        const waterGeo = new THREE.PlaneGeometry( width - bordersSize, length - bordersSize );
        waterGeo.translate(0, 0, height/2); // Elevamos el auto para evitar clipping con el suelo
        const waterMat = new THREE.MeshPhongMaterial( {color: 0x0000DD, side: THREE.SingleSide} );
        this.water = new THREE.Mesh( waterGeo, waterMat );
        this.water.rotation.x = - Math.PI / 2;
        
        this.borders = new THREE.Object3D();
        
        const geoA = new THREE.BoxGeometry( bordersSize, height, length );
        geoA.translate(width/2 - bordersSize/2 , height/2, 0);
        const matA = new THREE.MeshBasicMaterial( {color: borderColor} );
        const borderA = new THREE.Mesh(geoA, matA);
        
        const geoB = new THREE.BoxGeometry( width, height, bordersSize );
        geoB.translate(0, height/2, length/2)
        const matB = new THREE.MeshBasicMaterial( {color: borderColor} );
        const borderB = new THREE.Mesh(geoB, matB);
        
        const geoC = new THREE.BoxGeometry( bordersSize, height, length );
        geoC.translate(-width/2 + bordersSize/2 , height/2, 0);
        const matC = new THREE.MeshBasicMaterial( {color: borderColor} );
        const borderC = new THREE.Mesh(geoC, matC);
        
        const geoD = new THREE.BoxGeometry( width, height, bordersSize );
        geoD.translate(0, height/2, -length/2)
        const matD = new THREE.MeshBasicMaterial( {color: borderColor} );
        const borderD = new THREE.Mesh(geoD, matD);
        
        this.borders.add(borderA);
        this.borders.add(borderB);
        this.borders.add(borderC);
        this.borders.add(borderD);
        
        this.add(this.borders);
        this.add(this.water);
    }
    
    animate()
    {
        if (this.water.material.normalMap)
        {
            this.water.material.normalMap.offset.x = (this.water.material.normalMap.offset.x + 0.001) % 1;
            this.water.material.normalMap.offset.y = (this.water.material.normalMap.offset.y + 0.0005) % 1;
        }

    }
};
