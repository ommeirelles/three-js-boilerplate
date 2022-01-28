varying vec2 vUv;
varying vec3 vNormal;
uniform sampler2D earthTexture;
uniform sampler2D earthNightTexture;

void main() {
    float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    vec3 color = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

    vec3 ta = texture2D(earthTexture, vUv).rgb;
    vec3 tb = texture2D(earthNightTexture, vUv).rgb;
    float s = smoothstep(0.0, 1.0, sin((vUv.x - 0.5) * 2.0 * 3.1415));
    vec3 t = mix(tb, ta, s);
    vec3 final = mix(t, color, s * 0.4);

    gl_FragColor = vec4(final, 1.0);
}