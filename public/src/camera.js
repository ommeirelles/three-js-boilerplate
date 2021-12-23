import * as  THREE from 'three'

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
        this.camera.position.z = 5

    }

    resized() {
        // Update camera
        this.camera.aspect = config.screenSize.width / config.screenSize.height
        this.camera.updateProjectionMatrix()
    }
}