import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/frag.glsl'

import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmospherefragmentShader from './shaders/atmosphereFrag.glsl'

import * as THREE from 'three'
import { BackSide } from 'three'
import { Vector3 } from 'three'

export default ({ scene }) => {
    // new THREE.TextureLoader().load('h_map.jpg'),
    // new THREE.TextureLoader().load('h_map.jpg'),
    const position = new Vector3(1.5, 0, 2)
    const earthTexture = new THREE.TextureLoader().load('earth.jpg')
    earthTexture.magFilter = THREE.NearestFilter

    const earthNightTexture = new THREE.TextureLoader().load('earth_night.jpg')
    earthNightTexture.magFilter = THREE.NearestFilter

    const planet = new THREE.Mesh(
        new THREE.SphereGeometry(1, 124, 124),
        new THREE.ShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms: {
                earthTexture: {
                    value: earthTexture,
                },
                earthNightTexture: {
                    value: earthNightTexture,
                },
            },
        })
    )

    planet.rotateX((Math.PI / 180) * 20)

    const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 124, 124),
        new THREE.ShaderMaterial({
            fragmentShader: atmospherefragmentShader,
            vertexShader: atmosphereVertexShader,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true,
        })
    )
    atmosphere.scale.set(1.2, 1.2, 1.2)

    atmosphere.position.copy(position)
    planet.position.copy(position)

    scene.add(atmosphere)
    scene.add(planet)
    window.planet = planet

    const speedRotation = 0.2
    return (delta) => {
        planet.rotation.y += speedRotation * delta
        atmosphere.rotation.y += speedRotation * delta
    }
}
