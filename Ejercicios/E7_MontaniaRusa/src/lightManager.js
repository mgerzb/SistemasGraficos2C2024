import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';

export class LightManager {
    
    constructor(scene) {
        
        this.properties = { 
            sunLightHelper: false
        };
        
        this.scene = scene;
        
        this.sunLight = new THREE.DirectionalLight(0xffffff, 1.1);
        
        this.sunLight.position.set(2, 5, 0);
        this.sunLight.lookAt(0,0,0);
        scene.add(this.sunLight);
        
        this.ambientLight = new THREE.AmbientLight(0x666666);
        scene.add(this.ambientLight);
        
        scene.fog = new THREE.Fog( 0x7c503f, 20, 80);
        
        this.initSky();
    }
    
    showSunHelper(show)
    {
        const HelperName = "SunHelper";
        if (show)
        {
            const helper = new THREE.DirectionalLightHelper(this.sunLight, 5 );
            helper.name = HelperName;
            this.scene.add( helper );
        } else
        {
            let helper = this.scene.getObjectByName(HelperName);
            this.scene.remove(helper);
        }
    }
    
    // Crea la luz para una lampara pasada como argumento
    addLamp(lamp)
    {
        // TODO
    }
    
    initSky() {
        // Parameteros fijos por ahora. Solo permitimos modificar la elevación del sol a fin de manejar
        // los ciclos de día y noche.
        this.effectController = {
            turbidity: 1.8,
            rayleigh: 0.755,
            mieCoefficient: 0,
            mieDirectionalG: 0.287,
            elevation: 50,
            azimuth: 250,
            exposure: 0.28
        };
        // Add Sky
        this.sky = new Sky();
        this.sky.scale.setScalar( 45000 );
        this.scene.add( this.sky );
        
        this.sun = new THREE.Vector3();
        
        this.skyChanged();
    }
    
    skyChanged() {
        const effectController = this.effectController;
        const uniforms = this.sky.material.uniforms;
        uniforms[ 'turbidity' ].value = effectController.turbidity;
        uniforms[ 'rayleigh' ].value = effectController.rayleigh;
        uniforms[ 'mieCoefficient' ].value = effectController.mieCoefficient;
        uniforms[ 'mieDirectionalG' ].value = effectController.mieDirectionalG;
        
        const phi = THREE.MathUtils.degToRad( 90 - effectController.elevation );
        const theta = THREE.MathUtils.degToRad( effectController.azimuth );
        
        this.sun.setFromSphericalCoords( 1, phi, theta );
        
        uniforms[ 'sunPosition' ].value.copy( this.sun );
        
        const clamp = (val, min, max) => Math.min(Math.max(val, min), max)
        
        let vSunfade = 1.0 - clamp( 1.0 - Math.exp( ( this.sun.y / 450000.0 ) ), 0.0, 1.0 );
        let vBetaR = new THREE.Vector3(1.8399918514433978e14, 2.7798023919660528e14, 4.0790479543861094e14 );
        let vBetaM =  effectController.mieCoefficient * 0.434 * (( 0.2 * effectController.turbidity ) * 10e-18) * new THREE.Vector3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );
        let rayleighCoefficient = effectController.rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );
        
        const color = new THREE.Color();
        if (effectController.elevation < 0)
        {
            color.setHex(0x44393f); // "Black"
        }
        else {
            const factor = Math.sin(phi)**253;//Math.abs((90 - effectController.elevation))/90;
            color.lerpColors(new THREE.Color(0xffffff), new THREE.Color(0x8e805c), factor) ;
        }
        
        this.scene.fog.color = color;
        
    }
    
    setSunElevation(elevation)
    {
        this.effectController.elevation = elevation;
    }
    
}
