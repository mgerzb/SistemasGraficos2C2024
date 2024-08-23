import * as THREE from 'three';

let torus, cube, cone;

export class SceneManager {

	constructor(scene) {
		this.baseScene = scene
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(1, 5, 1);
		scene.add(light);

		cone = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 126, 100), new THREE.MeshPhongMaterial({ color: 0x00ffff }));
		cone.position.set(3, 1, 0);
		scene.add(cone);

		this.addAxesHelper();
		this.buildCastle();
	}

	buildCastle()
	{
		// Suelo
		const planeGeometry = new THREE.PlaneGeometry(50,50);
		const planeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, side: THREE.SingleSide});
		const plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.position.set(0,0,0);
		plane.rotation.x = -Math.PI/2;
		this.baseScene.add(plane);

		// Castle - main
		cube = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 5), new THREE.MeshPhongMaterial({ color: 0xffffbb }));
		cube.position.set(0, 1, -5);
		this.baseScene.add(cube);

		// Castle - Towers



		//Three

	}

	addGridHelper()
	{
		const grid = new THREE.GridHelper(10, 10);
		this.baseScene.add(grid);
	}

	addAxesHelper()
	{
		const axes = new THREE.AxesHelper(3);
		this.baseScene.add(axes);
	}

	animate() {
	}
}
