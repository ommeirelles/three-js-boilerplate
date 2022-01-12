import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

/**
 *
 * @param {Scene} scene
 */
export function Helmet(scene) {
    new GLTFLoader().load(
        'objaa.glb',
        (obj) => {
            scene.add(obj.scene)
            obj.scene.position.set(0, 0, 0)
            console.log('Helmet adicionado')
        },
        console.info,
        (err) => {
            console.error('Errrrrooouuuuuuuuu')
            console.error(err)
        }
    )
}
