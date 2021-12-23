export class Camera {
    config;
    camera;

    constructor(config) {
        this.config = config;
        this.camera = new THREE.PerspectiveCamera(
            75,
            config.screenSize.width / config.screenSize.height,
            0.1,
            1000
        )
        camera.position.z = 5

    }

    update(delta) {

    }

    resized() {
        // Update renderer
        renderer.setSize(config.screenSize.width, config.screenSize.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
}