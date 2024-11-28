export const vertexShader = `    
    precision highp float;

    // Atributos de los vértices
    attribute vec3 position; 	// Posición del vértice
    attribute vec2 uv;		 	// Coordenadas de textura

    // Uniforms
    uniform mat4 modelMatrix;		// Matriz de transformación del objeto
    uniform mat4 viewMatrix;		// Matriz de transformación de la cámara
    uniform mat4 projectionMatrix;	//	Matriz de proyección de la cámara

    // Varying
    varying vec2 vUv;	// Coordenadas de textura que se pasan al fragment shader

    void main() {
        
        // Lee la posición del vértice desde los atributos

        vec3 pos = position;	

        // Se calcula la posición final del vértice
        // Se aplica la transformación del objeto, la de la cámara y la de proyección

        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);

        // Se pasan las coordenadas de textura al fragment shader
        vUv = uv;
    }
`;

export const fragmentShaderVars = `
    //precision mediump float;
    varying vec2 vUv;

    uniform float scale1;
    uniform float tailMaskScale;

    uniform float tailPosX;
    uniform float tailPosY;

    uniform sampler2D tierraSampler;
    uniform sampler2D rocaSampler;
    uniform sampler2D pastoSampler;
    uniform sampler2D senderoSampler;

    `;

export const fragmentShader = `
        vec2 uv2=vUv*scale1;
        vec2 uv3=(vUv*tailMaskScale);
        uv3.x = uv3.x - tailPosX;
        uv3.y = uv3.y - tailPosY;

        // muestreo el pasto a diferentes escalas
        vec3 pasto1=texture2D(pastoSampler,uv2*1.0).xyz;
        vec3 pasto2=texture2D(pastoSampler,uv2*3.13).xyz;
        vec3 pasto3=texture2D(pastoSampler,uv2*2.37).xyz;
        
        // combino los 3 muestreos del pasto con la funcion de mezcla
        //vec3 colorPasto=pasto1;
        vec3 colorPasto=mix(mix(pasto1,pasto2,0.5),pasto3,0.3);

        // muestreo la tierra a diferentes escalas
        vec3 tierra1=texture2D(tierraSampler,uv2*3.77).xyz;
        vec3 tierra2=texture2D(tierraSampler,uv2*1.58).xyz;        
        vec3 colorTierra=mix(tierra1,tierra2,0.5);

        // muestreo la roca a diferentes escalas

        vec3 roca1=texture2D(rocaSampler,uv2*2.0).xyz;
        vec3 roca2=texture2D(rocaSampler,uv2*2.38).xyz;
        vec3 colorRoca=mix(roca1,roca2,0.5);        
        
        // mascara de sendero
        float senderoMask=texture2D(senderoSampler, uv3.yx/20.0).r;
        
        // Determinar pesos basados en el valor de la máscara
        float weightA = smoothstep(0.0, 0.4, 1.0 - senderoMask); // Más peso para negros
        float weightB = smoothstep(0.3, 0.8, senderoMask) - smoothstep(0.8, 0.9, senderoMask);  // Peso para valores grises
        float weightC = smoothstep(0.7, 1.0, senderoMask);       // Más peso para blancos
        
        // Normalizar los pesos para evitar valores mayores a 1
        float totalWeight = weightA + weightB + weightC;
        weightA /= totalWeight;
        weightB /= totalWeight;
        weightC /= totalWeight;

        // combino tierra y roca usando la mascara 1
        //vec3 colorTierraRoca=mix(colorTierra,colorRoca,mask1);
        
        // combino colorPasto (tierra y rocas) con color2 a partir de la mascara2
        //vec3 color=mix(colorPasto,colorTierraRoca,mask2);   

        diffuseColor = vec4(colorPasto * weightA + colorTierra * weightB + roca1 * weightC , 1.0);

    `;
