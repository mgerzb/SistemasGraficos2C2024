import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';

const SunIntensity = 1.1;
const AmbientIntensity = 1;

export class LightManager {
    
    constructor(scene) {
        
        this.properties = { 
            sunLightHelper: false,
            shadowCamHelper: false,
            
            shadowMapSize: {
                left: -12, 
                right: 12, 
                top: -10, 
                bottom: 10},
                
            shadowMapResolution:
            {
                w: 1024,
                h: 1024
            },
            
            shadowNear: 0.5,
            shadowFar: 80
        };
        
        this.scene = scene;
        
        this.sunLight = new THREE.DirectionalLight(0xffffff, SunIntensity);
        this.sunLight.castShadow = true;
        
        this.sunLight.position.set(2, 10, 0);
        this.sunLight.lookAt(0,0,0);
        
        //Set up shadow properties for the light
        this.sunLight.shadow.mapSize.width = this.properties.shadowMapResolution.w; // default
        this.sunLight.shadow.mapSize.height = this.properties.shadowMapResolution.h; // default
        this.sunLight.shadow.camera.near = this.properties.shadowNear; // default
        this.sunLight.shadow.camera.far = this.properties.shadowFar; // default
        
        this.sunLight.shadow.camera.left = this.properties.shadowMapSize.left;
        this.sunLight.shadow.camera.right = this.properties.shadowMapSize.right;
        this.sunLight.shadow.camera.top = this.properties.shadowMapSize.top;
        this.sunLight.shadow.camera.bottom = this.properties.shadowMapSize.bottom;
        
        this.nightLight = new THREE.HemisphereLight(0x8888dd, 0x080866, 0.1);
        scene.add(this.nightLight);
        
        scene.add(this.sunLight);
        
        this.ambientLight = new THREE.AmbientLight(0x666666);
        scene.add(this.ambientLight);
        
        scene.fog = new THREE.Fog( 0x7c503f, 20, 80);
        
        this.lampLights = [];
        
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
    
    showShadowHelper(show)
    {
        const HelperName = "ShadowHelper";
        if (show)
        {
            const helper = new THREE.CameraHelper( this.sunLight.shadow.camera );
            helper.name = HelperName;
            this.scene.add(helper);
        } else
        {
            let helper = this.scene.getObjectByName(HelperName);
            this.scene.remove(helper);
        }

    }
    
    // Crea la luz para una lampara pasada como argumento
    addLamp(lamp)
    {
        const intensity = this.effectController.elevation < 5 || this.effectController.elevation > 175 ? 0.8:0;
        let light = new THREE.PointLight(lamp.lampColor, intensity, 10, 1);
        this.lampLights.push(light);
        light.position.set(0, lamp.height, 0);
        
        lamp.add(light);
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
        this.sunLight.position.setFromSphericalCoords( 20, phi, theta);
        
        uniforms[ 'sunPosition' ].value.copy( this.sun );
        
        const clamp = (val, min, max) => Math.min(Math.max(val, min), max)
        
        // Calculo de color de neblina para mimetizarlo con el color del horizonte
        const color = new THREE.Color();
        if (effectController.elevation < -2)
        {
            color.setHex(0x44393f); // "Black"
            this.sunLight.intensity = 0;
            this.ambientLight.intensity = 0;
            this.nightLight.intensity = 3/14;
            this.lampLights.map((lamp) => lamp.intensity = 0.8);
        }
        else {
            const factor = Math.abs(Math.sin(phi)**90);//Math.abs((90 - effectController.elevation))/90;
            color.lerpColors(new THREE.Color(0xffffff), new THREE.Color(0x8e805c), factor) ;
            
            this.lampLights.map((lamp) => lamp.intensity = 0);
            this.ambientLight.intensity = AmbientIntensity;
            this.sunLight.intensity = SunIntensity;
            
            if (effectController.elevation < 5 || effectController.elevation > 175)
            {
                this.lampLights.map((lamp) => lamp.intensity = 0.8);
                
                let elevationValue = effectController.elevation;
                if (elevationValue > 175)
                    elevationValue = 180 - elevationValue;

                this.sunLight.intensity = (elevationValue + 3) / 7;
                this.nightLight.intensity = 0.5 - (elevationValue + 3) / 14;
            }
        }
        
        this.scene.fog.color = color;
        
    }
    
    setSunElevation(elevation)
    {
        this.effectController.elevation = elevation;
    }
    
}
