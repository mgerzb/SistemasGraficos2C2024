import * as THREE from 'three';


export class SceneManager {

	constructor(scene) {
		this.baseScene = scene
		const light = new THREE.DirectionalLight(0xffffff, 1);

		light.position.set(1, 5, 1);
		scene.add(light);
		
		this.showAxis = false;
		this.showGrid = false;

		this.buildCastle();
	}

	buildCastle()
	{
		// Soil
		const planeGeometry = new THREE.PlaneGeometry(50,50);
		const planeMaterial = new THREE.MeshPhongMaterial({color: 0x005500, side: THREE.SingleSide});
		const plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.position.set(0,0,0);
		plane.rotation.x = -Math.PI/2;
		this.baseScene.add(plane);

		// Castle - main
		const castle = new THREE.Group();
		
		const castleMaterial = new THREE.MeshPhongMaterial({ color: 0xffffbb });
		let cube = new THREE.Mesh(new THREE.BoxGeometry(5, 2, 5), castleMaterial);
		cube.position.set(0, 1, -5);
		
		castle.add(cube);

		// Castle - Towers
		const towerGeometry = new THREE.CylinderGeometry(0.9,0.9,2.4,32);
		const towers = [new THREE.Mesh(towerGeometry, castleMaterial),
		new THREE.Mesh(towerGeometry, castleMaterial),
		new THREE.Mesh(towerGeometry, castleMaterial),
		new THREE.Mesh(towerGeometry, castleMaterial)];
		
		let towerAnglePosition = Math.PI / 4; // 45°
		const cubeHyp = Math.sqrt((cube.geometry.parameters.depth/2) ** 2 + (cube.geometry.parameters.width/2) ** 2);
		for (let tower of towers)
		{
			const x = Math.sin(towerAnglePosition) * cubeHyp + cube.position.x;
			const z = Math.cos(towerAnglePosition) * cubeHyp + cube.position.z;
			tower.position.set(x, 1.2, z);
			towerAnglePosition += Math.PI / 2
			
			castle.add(tower);
		}
		
		// Castle -- Towers Roof
		
		const towerRoofGeometry = new THREE.ConeGeometry(1.2, 2.3, 126, 100);
		const towerRoofMaterial = new THREE.MeshPhongMaterial({ color: 0x003377 });
		
		const towerRoofs = [new THREE.Mesh(towerRoofGeometry, towerRoofMaterial),
			new THREE.Mesh(towerRoofGeometry, towerRoofMaterial),
			new THREE.Mesh(towerRoofGeometry, towerRoofMaterial),
			new THREE.Mesh(towerRoofGeometry, towerRoofMaterial)
		];
		
		for (let roof of towerRoofs)
		{
			const x = Math.sin(towerAnglePosition) * cubeHyp + cube.position.x;
			const z = Math.cos(towerAnglePosition) * cubeHyp + cube.position.z;
			roof.position.set(x, 3.55, z);
			towerAnglePosition += Math.PI / 2
			
			castle.add(roof);
		}
		
		this.baseScene.add(castle);
		
		// Castle -- Door
		
		const doorMaterial = new THREE.MeshPhongMaterial({ color: 0xaf6955 });
		const Door = new THREE.Mesh(new THREE.BoxGeometry(0.75, 1, 0.05), doorMaterial);
		Door.position.set(0, 0.5, -2.5);
		castle.add(Door);
		
		// Lake
		
		const lakeGeometry = new THREE.CircleGeometry( 1, 32 ); 
		const lakeMaterial = new THREE.MeshPhongMaterial( { color: 0x007775 } ); 
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
		const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x4d2600});

		const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
		trunk.position.set(-2, 0.25, 2);
		this.baseScene.add(trunk);

		// tree leafs
		const leafGeometry = new THREE.SphereGeometry( 0.35, 32, 16 );
		const leafMaterial = new THREE.MeshPhongMaterial( { color: 0x006600 } );
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
	
	removeHelper(helper)
	{
		const toRemove = this.baseScene.getObjectByName(helper);
		this.baseScene.remove(toRemove);
	}

	toggleGridHelper()
	{
		if (!this.showGrid)
		{
			const grid = new THREE.GridHelper(100, 100);
			grid.name = "GridHelper";
			this.baseScene.add(grid);
			
			this.showGrid = true;
		} else {
			this.removeHelper('GridHelper');
			this.showGrid = false;
		}
	}

	toggleAxesHelper()
	{
		if (!this.showAxis)
		{
			const axes = new THREE.AxesHelper(3);
			axes.name = 'AxesHelper';
			this.baseScene.add(axes);
			
			this.showAxis = true;
		} else {
			this.removeHelper('AxesHelper');
			this.showAxis = false;
		}
	}

	animate() {
	}
}
