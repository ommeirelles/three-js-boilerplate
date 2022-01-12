import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Camera } from './camera'
import { Helmet } from './helmet'
import { Renderer } from './renderer'

const clock = new THREE.Clock()
const config = {
    screenSize: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    maxPixelRatio: 2,
    scene: new THREE.Scene(),
    camera: undefined,
    renderer: undefined,
}

config.camera = new Camera(config)
config.renderer = new Renderer(config)

const controls = new OrbitControls(
    config.camera.camera,
    config.renderer.renderer.domElement
)
controls.enableDamping = true

let windowResized = false
window.addEventListener('resize', () => {
    config.screenSize.width = window.innerWidth
    config.screenSize.height = window.innerHeight
    windowResized = true
})

new Helmet(config.scene)
const light = new THREE.AmbientLight(0x404040) // soft white light
config.scene.add(light)

let delta = 0
const loop = function () {
    delta = clock.getDelta()

    requestAnimationFrame(loop)
    controls.update()
    config.renderer.update()

    if (windowResized) {
        config.camera.resized()
        config.renderer.resized()
    }
    windowResized = false
}

document.body.appendChild(config.renderer.renderer.domElement)
loop()
