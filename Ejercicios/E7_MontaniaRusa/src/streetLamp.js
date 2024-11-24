import * as THREE from 'three';

export class StreetLamp extends THREE.Object3D
{
    constructor(height)
    {
        super();
        
        this.height = height;
        this.lampColor = 0xaaffff;
        this.postColor = 0x222222;
        
        let postGeometry = new THREE.CylinderGeometry(0.02, 0.02, height, 12);
        
        postGeometry.translate(0, height / 2, 0);
        let postMaterial = new THREE.MeshPhongMaterial({
            color: this.postColor,
            shininess: 64,
            name: "post",
        })
        
        let post = new THREE.Mesh(postGeometry, postMaterial);
        
        let lampGeometry = new THREE.SphereGeometry(0.05, 32, 16);
        let lightMaterial = new THREE.MeshPhongMaterial({ emissive: this.lampColor, name: "light" });
        let lamp = new THREE.Mesh(lampGeometry, lightMaterial);
        lamp.position.set(0, height, 0);
        
        this.add(post);
        this.add(lamp);
        
        this.traverse((obj) => {obj.castShadow = true;});
    }
}
