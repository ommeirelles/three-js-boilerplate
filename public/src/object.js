import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class Object {
    constructor(src, { scene, verbose }) {
        this.scene = scene
        this.src = src

        new GLTFLoader().load(
            src,
            (obj) => {
                scene.add(obj.scene)
                obj.scene.position.set(0, 0, 0)
            },
            verbose ? console.info : null,
            (err) => {
                console.error(err)
            }
        )
    }

    // onTick(delta) {}
}
