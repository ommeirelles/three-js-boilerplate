import * as  THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const screenSize = {
	width: window.innerWidth,
	height: window.innerHeight
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	screenSize.width / screenSize.height,
	0.1,
	1000
)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(screenSize.width, screenSize.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
material.wireframe = true
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true

const clock = new THREE.Clock();

window.addEventListener('resize', () => {
	// Update sizes
	screenSize.width = window.innerWidth
	screenSize.height = window.innerHeight

	// Update camera
	camera.aspect = screenSize.width / screenSize.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(screenSize.width, screenSize.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const animate = function () {
	requestAnimationFrame(animate)

	const delta = clock.getDelta()
	controls.update();

	((d) => {
		cube.rotation.x += 1 * d
		cube.rotation.y += 1 * d
		cube.rotation.z += 1 * d
	})(delta)


	renderer.render(scene, camera)
}

document.body.appendChild(renderer.domElement)
animate()
