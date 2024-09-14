import * as THREE from 'three';

export function createSphere(radius, radialSegments, heightSegments) {
    let geometry = new THREE.BufferGeometry();

	const positions = [];
	const indices = [];
	const normals = [];
	const uvs = [];

    const radialStep = (2 * Math.PI) / radialSegments; // 0 - 360 roation
    const heightStep = Math.PI / heightSegments; // 0 -180 rotation

    let x = 0;
    let z = 0;
    let y = radius;

    positions.push(x, y, z);
    let normal = new THREE.Vector3(x, y, z).normalize()
    normals.push(normal.x, normal.y, normal.z);
    uvs.push(1, 1);

	// height segmentes
	for (let i = 1; i <= heightSegments; i++) {
		y = radius * Math.cos(i * heightStep);
		const v = 1;

		// radial segments
		for (let j = 0; j <= radialSegments; j++) {
			 x = radius * Math.sin(i * heightStep) * Math.cos(j * radialStep);
             z = radius * Math.sin(i * heightStep) * Math.sin(j * radialStep);
			// const x = radius * Math.cos(angle);
			// const z = radius * Math.sin(angle);
			 const u = 1;
   //
			positions.push(x, y, z);
            let normal = new THREE.Vector3(x, y, z).normalize();
			normals.push(normal);
			uvs.push(u, v);
   //
			//We stop before the last row and last column
			if (i < heightSegments && j < radialSegments) {
				// The indices of the vertices
				const a = i * (radialSegments + 1) + j;
				const b = a + radialSegments + 1;
				const c = a + radialSegments + 2;
				const d = a + 1;

				indices.push(a, d, b);
				indices.push(b, d, c);
			}
		}
	}

	// indices.push(0, 2, 1);
 //    indices.push(0, 3, 2);
 //    indices.push(0, 4, 3);
 //    indices.push(0,1,4);

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
	geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
	geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
	geometry.setIndex(indices);

	return geometry;
}
