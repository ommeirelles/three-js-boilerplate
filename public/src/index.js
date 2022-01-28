import * as THREE from 'three'
import { Color } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import GUI from 'lil-gui'

import { Camera } from './camera'
import { Renderer } from './renderer'
import planet from './planet'
import stars from './stars'

/**--- CONFIG ----*/
// const gui = new GUI()

const clock = new THREE.Clock()
const config = {
    verbose: false,
    screenSize: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    maxPixelRatio: 2,
    scene: new THREE.Scene(),
    camera: undefined,
    renderer: undefined,
    antialias: true,
}

config.camera = new Camera(config)
config.renderer = new Renderer(config)
const { renderer: customRender, scene } = config
customRender.configure((renderer) => {
    renderer.toneMapping = THREE.ReinhardToneMapping
    renderer.toneMappingExposure = 1
})

const controls = new OrbitControls(
    config.camera.camera,
    customRender.renderer.domElement
)
controls.enableDamping = true

let windowResized = false
window.addEventListener('resize', () => {
    config.screenSize.width = window.innerWidth
    config.screenSize.height = window.innerHeight
    windowResized = true
})

/**--- OBJECT ----*/
const animatePlanet = planet(config)
const animateStars = stars(config)

/**--- MAIN ----*/
;(function main() {
    let delta = 0
    const loop = function () {
        delta = clock.getDelta()

        animatePlanet(delta)
        animateStars(delta)

        requestAnimationFrame(loop)
        controls.update()
        customRender.update()

        if (windowResized) {
            config.camera.resized()
            customRender.resized()
        }
        windowResized = false
    }

    document.body.appendChild(customRender.renderer.domElement)
    loop()
})()
