//This file is automatically rebuilt by the Cesium build process.
export default "in vec3 v_positionEC;\n\
in vec3 v_normalEC;\n\
\n\
void main()\n\
{\n\
    vec3 positionToEyeEC = -v_positionEC;\n\
\n\
    vec3 normalEC = normalize(v_normalEC);\n\
#ifdef FACE_FORWARD\n\
    normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);\n\
#endif\n\
\n\
    czm_materialInput materialInput;\n\
    materialInput.normalEC = normalEC;\n\
    materialInput.positionToEyeEC = positionToEyeEC;\n\
    czm_material material = czm_getMaterial(materialInput);\n\
\n\
#ifdef FLAT\n\
    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);\n\
#else\n\
    out_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);\n\
#endif\n\
}\n\
";
