varying vec2 vUv;
varying vec3 vNormal;

void main() {
    float intensity = 0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    vec3 color = vec3(0.3, 0.6, 1.0) * pow(intensity, 2.0);

    float s = smoothstep(0.0, 1.0, sin((vUv.x - 0.5) * 2.0 * 3.1415));
    // vec3 t = mix(vec3(0.0, 0.0, 0, 0), color, s);

    gl_FragColor = vec4(color, s);
}