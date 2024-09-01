import * as THREE from 'three';
import { loadModels } from './loader.js';
//import { armarSolucion } from './solucion.ignore.js';

const modelPaths = [
	'/models/antebrazo.dae',
	'/models/brazo.dae',
	'/models/cabina.dae',
	'/models/chasis.dae',
	'/models/cubierta.dae',
	'/models/eje.dae',
	'/models/llanta.dae',
	'/models/pala.dae',
	'/models/tuerca.dae',
];

const ADD_HELPERS = true;

export class SceneManager {
	path;
	vehiculo;

	camaraVehiculo;
	camaraConductor;

	ready = false;
	delta = 0.0005;

	constructor(scene) {
		this.scene = scene;
		const light = new THREE.DirectionalLight(0xffffff, 2);

		light.position.set(1, 1, 1);
		scene.add(light);

		const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
		scene.add(hemiLight);

		const grid = new THREE.GridHelper(2000, 20);
		scene.add(grid);

		const axes = new THREE.AxesHelper(100);
		scene.add(axes);
		this.buildPath();
		this.prepareScene();

		loadModels(modelPaths, (models) => {
			models.forEach((model, i) => {
				if (ADD_HELPERS) {
					model.add(new THREE.AxesHelper(20)); // Debugging helpers
				}
				// model.rotation.set(0, 0, 0); // Arreglamos la rotación de los modelos
				model.position.setZ(i * 100 - (models.length * 100) / 2); // Distribuimos las piezas en el eje X para una linda presentación (?)
				model.rotation.set(0, 0, 0);
				scene.add(model);
			});

			this.cabina = this.scene.getObjectByName('cabina');
			this.brazo = this.scene.getObjectByName('brazo');
			this.antebrazo = this.scene.getObjectByName('antebrazo');
			this.pala = this.scene.getObjectByName('pala');
			this.chasis = this.scene.getObjectByName('chasis');
			this.eje = this.scene.getObjectByName('eje');
			this.llanta = this.scene.getObjectByName('llanta');
			this.cubierta = this.scene.getObjectByName('cubierta');
			this.tuerca = this.scene.getObjectByName('tuerca');

			this.eje.geometry.rotateZ(Math.PI / 2);
			this.eje.geometry.rotateY(Math.PI / 2);
			this.llanta.geometry.rotateZ(Math.PI / 2);
			this.llanta.geometry.rotateY(Math.PI / 2);
			this.cubierta.geometry.rotateZ(Math.PI / 2);
			this.cubierta.geometry.rotateY(Math.PI / 2);

			this.tuerca.geometry.rotateZ(Math.PI / 2);
			this.tuerca.geometry.rotateY(Math.PI / 2);

			//this.pala.geometry.rotateY(Math.PI);

			this.camaraConductor.position.set(50, 40, -40);

			this.camaraConductor.lookAt(0, 40, 0);
			this.cabina.add(this.camaraConductor);
			this.construirVehiculo();
			this.ready = true;
		});
	}

	prepareScene() {
		this.vehiculo = new THREE.Group();
		let axesHelper = new THREE.AxesHelper(20);
		this.vehiculo.add(axesHelper);
		this.scene.add(this.vehiculo);
		this.camaraVehiculo = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
		this.camaraVehiculo.position.set(-200, 100, 200);
		this.camaraVehiculo.lookAt(0, 0, 0);
		this.vehiculo.add(this.camaraVehiculo);

		this.camaraConductor = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	}

	buildPath() {
		this.path = new THREE.CatmullRomCurve3([
			new THREE.Vector3(100, 0, 0),
			new THREE.Vector3(700, 0, 0),
			new THREE.Vector3(600, 0, 600),
			new THREE.Vector3(0, 0, 700),
			new THREE.Vector3(-600, 0, 600),
			new THREE.Vector3(-700, 0, 0),
			new THREE.Vector3(-600, 0, -600),
			new THREE.Vector3(0, 0, -700),
			new THREE.Vector3(600, 0, -600),
			new THREE.Vector3(700, 0, 0),
			new THREE.Vector3(100, 0, 0),
		]);

		this.path.arcLengthDivisions = 500;

		const points = this.path.getPoints(100);
		const geometry = new THREE.BufferGeometry().setFromPoints(points);
		const material = new THREE.LineBasicMaterial({ color: 0x990000 });
		const line = new THREE.Line(geometry, material);

		this.scene.add(line);
	}

	onResize(aspect) {
		this.camaraVehiculo.aspect = aspect;
		this.camaraVehiculo.updateProjectionMatrix();
		this.camaraConductor.aspect = aspect;
		this.camaraConductor.updateProjectionMatrix();
	}

	construirRueda() {
		let origen = new THREE.Vector3(0,0,0);
		this.cubierta.position.copy(origen);
		this.llanta.position.copy(origen);

		let rueda = new THREE.Group();
		rueda.add(this.llanta);
		rueda.add(this.cubierta);
		this.cubierta.geometry.computeBoundingSphere();

		this.llanta.geometry.computeBoundingSphere();
		let rad = this.llanta.geometry.boundingSphere.radius/2;
		for(let i = 0.5; i < Math.PI*2 + 0.5; i+=Math.PI/4)
		{
				let nuevaT = this.tuerca.clone();
				nuevaT.position.y = Math.cos(i) * rad;
				nuevaT.position.x = Math.sin(i) * rad;
				nuevaT.position.z = 3;
				rueda.add(nuevaT);
		};

		return rueda;
	}

	construirEjes()
	{
		this.eje.geometry.computeBoundingBox();
		let radEje = this.eje.geometry.boundingBox.max.z;

		this.rueda.position.z = radEje;
		this.eje.add(this.rueda);

		let otraRueda = this.rueda.clone();
		otraRueda.position.z = - radEje;
		otraRueda.rotation.y = Math.PI;

		this.eje.add(otraRueda);

		this.trenDelantero = new THREE.Group();
		this.trenTrasero = new THREE.Group();

		this.trenDelantero.add(this.eje);
		this.trenTrasero.add(this.eje.clone());

		this.trenDelantero.position.x = 20;
		this.trenDelantero.position.y = -5;
		this.trenTrasero.position.x = -20;
		this.trenTrasero.position.y = -5;

		this.scene.add(this.trenDelantero);
		this.scene.add(this.trenTrasero);
	}

	construirChasis()
	{
		let origen = new THREE.Vector3(0,0,0);
		this.chasis.position.copy(origen);
		this.chasis.add(this.trenTrasero);
		this.chasis.add(this.trenDelantero);

		this.cabina.position.x = 0;
		this.cabina.position.y = 25;
		this.cabina.position.z = 0;

		this.vehiculo.add (this.cabina);
		this.vehiculo.add(this.chasis);

		this.brazo.position.x = 20;
		this.brazo.position.z = -10;
		this.brazo.position.y = 20;

		this.cabina.add(this.brazo);

		this.antebrazo.position.x = -102;
		this.antebrazo.position.y = 0;
		this.antebrazo.position.z = 0;

		this.brazo.add(this.antebrazo);

		this.pala.position.x = -60;
		this.pala.position.y = 0;
		this.pala.position.z = 0;

		this.antebrazo.add(this.pala);

	}

	construirVehiculo() {
		this.cabina;
		this.brazo;
		this.antebrazo;
		this.pala;
		this.chasis;
		this.eje;
		this.llanta;
		this.cubierta;
		this.tuerca;


		let origen = new THREE.Vector3(0,0,0);
		this.eje.position.copy(origen);

		this.rueda = this.construirRueda();
		this.scene.add(this.rueda);

		this.construirEjes();
		this.construirChasis();

		this.scene.add(this.vehiculo);


		// **************************************************************
		// Ejercicio: ensamblar la excavadora
		// **************************************************************
		//
		// Desplazamientos relativos entre piezas:
		//
		// vehiculo     >>      cabina        0,25,0
		// cabina       >>      brazo         20, 20, -10
		// brazo        >>      antebrazo     -102,0,0
		// antebrazo    >>      pala          -60,0,0
		// vehiculo     >>      eje            20,5,0
		// eje          >>      rueda          0,+-27,0
		// rueda        >>      cubierta       0,0,0
		// rueda        >>      llanta         0,0,0
		// rueda        >>      tuerca         *,*,3  (xz depende de la ubicacion de la tuerca)
		//
		// ***************************************************************

		// IMPORTANTE: no olvidar se setear position y rotation de cada pieza
		// ya que por defecto tienen un valor no nulo
		// completar a partir de aca ...

		// ... hasta aca

		//this._solve();
	}

	_solve() {
		armarSolucion({
			chasis: this.chasis,
			cabina: this.cabina,
			brazo: this.brazo,
			antebrazo: this.antebrazo,
			pala: this.pala,
			eje: this.eje,
			llanta: this.llanta,
			cubierta: this.cubierta,
			tuerca: this.tuerca,
			vehiculo: this.vehiculo,
		});
	}

	animate(params) {
		if (!this.ready) return;
		/*
		 params contiene:
			posicionSobreRecorrido
			anguloCabina
			anguloBrazo
			anguloAntebrazo
			anguloPala
		
		*/
		// actualizar angulos
		this.cabina.rotation.y = (params.anguloCabina * Math.PI) / 180;
		this.brazo.rotation.z = -Math.PI / 2 + (params.anguloBrazo * Math.PI) / 180;
		this.antebrazo.rotation.z = (params.anguloAntebrazo * Math.PI) / 180;
		this.pala.rotation.z = -Math.PI / 2 + (params.anguloPala * Math.PI) / 180;
		this.eje.rotation.z = params.posicionSobreRecorrido * 0.01;

		params.posicionSobreRecorrido += this.delta;

		if (params.posicionSobreRecorrido > 1)
		{
			this.delta = -0.0005;
			params.posicionSobreRecorrido = 1;
		}

		if (params.posicionSobreRecorrido < 0)
		{
			this.delta = 0.0005;
			params.posicionSobreRecorrido = 0;
		}


		// ubicar vehiculo en el recorrido
		this._ubicarVehiculo(params.posicionSobreRecorrido);
	}

	_ubicarVehiculo(u) {
		let pos = this.path.getPointAt(u);
		pos.y += 10;
		this.vehiculo.position.set(pos.x, pos.y, pos.z);

		// Giro de las ruedas
		let giros = (this.path.getLength()*u)/(2 * Math.PI * 25);
		let giroActual = giros % 1;

		giroActual *= 2*Math.PI;

		this.trenDelantero.rotation.z = giroActual;
		this.trenTrasero.rotation.z = giroActual;


		let target2 = 0;
		if (u < 0.99)
		{
		let target = this.path.getPointAt((u + 0.01) % 1);

		target.y += 10;
		let tangente = new THREE.Vector3();
		tangente.subVectors(target, pos).normalize();
		let yAxis = new THREE.Vector3(0, 1, 0);

		let normal = new THREE.Vector3();
		normal.crossVectors(yAxis, tangente).normalize();
		target2 = new THREE.Vector3();
		target2.addVectors(pos, normal);
		} else
		{
			target2 = new THREE.Vector3(0,0,10000);
		}
		this.vehiculo.lookAt(target2);
	}
}
