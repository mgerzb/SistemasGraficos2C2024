import * as THREE from 'three';

let torus, cube, cone;

export class SceneManager {

	constructor(scene) {
		this.baseScene = scene
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(1, 5, 1);
		scene.add(light);

		this.addAxesHelper();
		this.buildCastle();
	}

	buildCastle()
	{
		// Soil
		const planeGeometry = new THREE.PlaneGeometry(50,50);
		const planeMaterial = new THREE.MeshBasicMaterial({color: 0x005500, side: THREE.SingleSide});
		const plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.position.set(0,0,0);
		plane.rotation.x = -Math.PI/2;
		this.baseScene.add(plane);

		// Castle - main
		const castleMaterial = new THREE.MeshPhongMaterial({ color: 0xffffbb });
		cube = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 5), castleMaterial);
		cube.position.set(0, 1, -5);
		this.baseScene.add(cube);

		// Castle - Towers
		const towerGeometry = new THREE.CylinderGeometry(0.9,0.9,2.4,32);
		const towerA = new THREE.Mesh(towerGeometry, castleMaterial);
		const towerB = new THREE.Mesh(towerGeometry, castleMaterial);
		const towerC = new THREE.Mesh(towerGeometry, castleMaterial);
		const towerD = new THREE.Mesh(towerGeometry, castleMaterial);
		
		
		towerA.position.set(2.5, 1.2, -2.5);
		towerB.position.set(-2.5, 1.2, -2.5);
		towerC.position.set(-2.5, 1.2, -7.5);
		towerD.position.set(2.5, 1.2, -7.5);

		this.baseScene.add(towerA);
		this.baseScene.add(towerB);
		this.baseScene.add(towerC);
		this.baseScene.add(towerD);
		
		// Castle -- Towers Roof
		
		const towerRoofGeometry = new THREE.ConeGeometry(1.2, 2.3, 126, 100);
		const towerRoofMaterial = new THREE.MeshPhongMaterial({ color: 0x003377 });
		
		const towerRoofA = new THREE.Mesh(towerRoofGeometry, towerRoofMaterial);
		const towerRoofB = new THREE.Mesh(towerRoofGeometry, towerRoofMaterial);
		const towerRoofC= new THREE.Mesh(towerRoofGeometry, towerRoofMaterial);
		const towerRoofD = new THREE.Mesh(towerRoofGeometry, towerRoofMaterial);
		
		towerRoofA.position.set(2.5, 3.55, -2.5);
		towerRoofB.position.set(-2.5, 3.55, -2.5);
		towerRoofC.position.set(-2.5, 3.55, -7.5);
		towerRoofD.position.set(2.5, 3.55, -7.5);
		
		this.baseScene.add(towerRoofA);
		this.baseScene.add(towerRoofB);
		this.baseScene.add(towerRoofC);
		this.baseScene.add(towerRoofD);
		
		// Castle -- Door
		
		const doorMaterial = new THREE.MeshPhongMaterial({ color: 0xaf6955 });
		const Door = new THREE.Mesh(new THREE.BoxGeometry(0.75, 1, 0.05), doorMaterial);
		Door.position.set(0, 0.5, -2.5);
		this.baseScene.add(Door);
		
		// Lake
		
		const lakeGeometry = new THREE.CircleGeometry( 1, 32 ); 
		const lakeMaterial = new THREE.MeshBasicMaterial( { color: 0x007775 } ); 
		const lakeA = new THREE.Mesh( lakeGeometry, lakeMaterial );
		const lakeB = new THREE.Mesh( lakeGeometry, lakeMaterial );
		
		lakeA.rotation.x = -Math.PI/2;
		lakeA.position.set(0, 0.001, 3);
		
		lakeB.rotation.x = -Math.PI/2;
		lakeB.position.set(0, 0.001, 1.5);
		
		this.baseScene.add(lakeA);
		this.baseScene.add(lakeB);
		
		//Tree
		const trunkGeometry = new THREE.CylinderGeometry(0.08,0.13,0.5,32);
		const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x4d2600});

		const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
		trunk.position.set(-2, 0.25, 2);
		this.baseScene.add(trunk);

		// tree leafs
		const leafGeometry = new THREE.SphereGeometry( 0.35, 32, 16 );
		const leafMaterial = new THREE.MeshBasicMaterial( { color: 0x006600 } );
		const leafA = new THREE.Mesh( leafGeometry, leafMaterial );
		const leafB = new THREE.Mesh( leafGeometry, leafMaterial );
		const leafC = new THREE.Mesh( leafGeometry, leafMaterial );

		leafA.position.set(-2, 0.75, 2);
		leafB.position.set(-2.15, 0.95, 2);
		leafC.position.set(-1.85, 1.15, 1.9);

		this.baseScene.add( leafA );
		this.baseScene.add( leafB );
		this.baseScene.add( leafC );
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
