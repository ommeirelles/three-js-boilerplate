import * as  THREE from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { PixelShader } from 'three/examples/jsm/shaders/PixelShader'

export class Renderer {
    renderer = new THREE.WebGLRenderer()
    composer

    constructor(config) {
        this.config = config;
        this.renderer.setSize(config.screenSize.width, config.screenSize.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, config.maxPixelRatio))
        // this.composer = new EffectComposer(this.renderer)

        // this.composer.addPass(new RenderPass(config.scene, config.camera.camera));

        // const pixelPass = new ShaderPass(PixelShader);
        // pixelPass.uniforms["resolution"].value = new THREE.Vector2(window.innerWidth, window.innerHeight);
        // pixelPass.uniforms["resolution"].value.multiplyScalar(window.devicePixelRatio);
        // pixelPass.uniforms[ "pixelSize" ].value = 6;
        // this.composer.addPass(pixelPass);
    }

    update(tick) {
        this.renderer.render(this.config.scene, this.config.camera.camera)
        // this.composer.render();
    }


    resized() {
        // Update renderer
        this.renderer.setSize(this.config.screenSize.width, this.config.screenSize.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.config.maxPixelRatio))
    }
}