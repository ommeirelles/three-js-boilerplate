import * as THREE from 'three'

export class Camera {
    config
    camera

    constructor(config) {
        this.config = config
        this.camera = new THREE.PerspectiveCamera(
            75,
            config.screenSize.width / config.screenSize.height,
            0.001,
            100
        )
        window.camera = this.camera

        // this.camera = new THREE.OrthographicCamera(
        //     config.screenSize.width / -2,
        //     config.screenSize.width / 2,
        //     config.screenSize.height / 2,
        //     config.screenSize.height / -2,
        //     1,
        //     1000
        // )
        this.camera.position.copy(
            new THREE.Vector3(
                0.7266475284012641,
                0.6130783324157733,
                2.7207482839996118
            )
        )
    }

    resized() {
        // Update camera
        this.camera.aspect = this.config.screenSize.width / this.config.screenSize.height
        this.camera.updateProjectionMatrix()
    }
}
