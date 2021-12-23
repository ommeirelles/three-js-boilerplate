export class Renderer {
    renderer = new THREE.WebGLRenderer()

    constructor(config) {
        this.config = config;
        this.renderer.setSize(config.screenSize.width, config.screenSize.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, config.maxPixelRatio))
    }

    update(tick) {
        renderer.render(this.config.scene, this.config.camera)
    }


    resized() {
        // Update camera
        camera.aspect = config.screenSize.width / config.screenSize.height
        camera.updateProjectionMatrix()
    }
}