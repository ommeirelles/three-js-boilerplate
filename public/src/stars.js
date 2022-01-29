import * as THREE from 'three'

export default ({ scene, screenSize }) => {
    const size = 20000

    let geometry = new THREE.BufferGeometry()
    const positions = [],
        colors = [],
        c = new THREE.Color()

    for (let i = 0; i < size; i++) {
        const x = Math.random() * 100 - 50,
            y = Math.random() * 100 - 50,
            z = Math.random() * 100 - 50,
            b = Math.random(),
            rg = Math.random()

        positions.push(x, y, z)
        c.setRGB(rg, rg, b * 0.5)
        colors.push(c.r, c.g, c.b)
    }

    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    let material = new THREE.PointsMaterial({
        size: 0.01,
        side: THREE.DoubleSide,
        sizeAttenuation: true,
        vertexColors: true,
    })

    const mesh = new THREE.Points(geometry, material)
    scene.add(mesh)

    const speed = 0.01
    return (delta) => {
        mesh.rotation.y += speed * delta
    }
}
