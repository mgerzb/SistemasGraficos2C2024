import * as THREE from 'three';

export function createPlane(width, height, widthSegments, heightSegments) {
    let geometry = new THREE.BufferGeometry();
    
    const widthStep = width/ widthSegments;
	const heightStep = height / heightSegments;

	const positions = [];
	const indices = [];
	const normals = [];
	const uvs = [];
    

	// vertical segments
	for (let i = 0; i <= heightSegments; i++) {
		const y = 0;
        const x = i * heightStep;
		const v = 1;//i / heightSegments;

		// widthSegments segments
		for (let j = 0; j <= widthSegments; j++) {
			const z = j * widthStep;
			const u = 0//j / radialSegments;

			positions.push(x, y, z);
			normals.push(0, 1, 0);
			uvs.push(u, v);

			//We stop before the last row and last column
			if ( i < heightSegments && j < widthSegments ) {
				// The indices of the vertices
				const a = i * (widthSegments + 1) + j;
				const b = a + 1;
				const c = a + (widthSegments + 1);
				const d = a + (widthSegments + 2) ;

				indices.push(a, b, d);
				indices.push(a, d, c);
			}
		}
	}
	

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
	geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
	geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
	geometry.setIndex(indices);

	return geometry;
    
}
