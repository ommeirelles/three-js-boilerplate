import * as  THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Camera } from './camera'
import { Renderer } from './renderer'

const clock = new THREE.Clock()
const config = {
	screenSize: {
		width: window.innerWidth,
		height: window.innerHeight
	},
	maxPixelRatio: 2,
	scene: new THREE.Scene(),
	camera: undefined,
	renderer: undefined
}

config.camera = new Camera(config)
config.renderer = Renderer(config)


const cube = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube.material.wireframe = true;
scene.add(cube)

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true

let windowResized = false;
window.addEventListener('resize', () => {
	config.screenSize.width = window.innerWidth
	config.screenSize.height = window.innerHeight
	windowResized = true;
})

let delta = 0;
const loop = function () {
	delta = clock.getDelta();

	requestAnimationFrame(loop)
	controls.update();
	config.renderer.update();

	if (windowResized) {
		config.camera.resized();
		config.renderer.resized();
	}
	windowResized = false;


	((d) => {
		cube.rotation.x += 1 * d
		cube.rotation.y += 1 * d
		cube.rotation.z += 1 * d
	})(delta)
}

document.body.appendChild(renderer.domElement)
animate()
