import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * Model
 */
// Add the model loader
const modelLoader = new GLTFLoader()

/**
 * 4 Dragons Casino
 */
// Add the casino glb model
modelLoader.load(
    '/models/The_Strip_GTA_SA_Bat.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.1, 0.1, 0.1)
        gltf.scene.position.set(0, 0.01, 0)
        gltf.castShadow = true
        gltf.receiveShadow = true
        scene.add(gltf.scene)
    }
)

// Add the casino lights
const casinoLights = new THREE.PointLight('#ffff80', 1, 20)
casinoLights.position.set(-8.15, 1.7, 3.3)
casinoLights.castShadow = true
scene.add(casinoLights)

// add the helper
const casinoLightsHelper = new THREE.PointLightHelper(casinoLights, 1)
scene.add(casinoLightsHelper)

/**
 * Road
 */
// Add the road glb model
modelLoader.load(
    '/models/The_Strip_GTA_SA_Road.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.1, 0.1, 0.1)
        gltf.scene.position.set(0, 0, 0)
        gltf.castShadow = true
        gltf.receiveShadow = true
        scene.add(gltf.scene)
    }
)

// Add a second road
modelLoader.load(
    '/models/The_Strip_GTA_SA_Road.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.1, 0.1, 0.1)
        gltf.scene.position.set(-15.925, 0, 0)
        gltf.castShadow = true
        gltf.receiveShadow = true
        scene.add(gltf.scene)
    }
)

// Add a third road
modelLoader.load(
    '/models/The_Strip_GTA_SA_Road.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.1, 0.1, 0.1)
        gltf.scene.position.set(-31.85, 0, 0)
        gltf.castShadow = true
        gltf.receiveShadow = true
        scene.add(gltf.scene)
    }
)

// Add a fourth road before the casino
modelLoader.load(
    '/models/The_Strip_GTA_SA_Road.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.1, 0.1, 0.1)
        gltf.scene.position.set(15.925, 0, 0)
        gltf.castShadow = true
        gltf.receiveShadow = true
        scene.add(gltf.scene)
    }
)

/**
 * Cars
 */
const car = new THREE.Group()
scene.add(car)
modelLoader.load(
    '/models/greenwood_gta_sa.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.3, 0.3, 0.3)
        gltf.scene.rotation.y = Math.PI * 0.5
        gltf.scene.position.set(15, 0.21, 0)
        gltf.castShadow = true
        gltf.receiveShadow = true
        car.add(gltf.scene)
    }
)

// Add the car lights
const carLights = new THREE.SpotLight('#ffe7a6')
carLights.position.set(-0.85 + 15, 0.25, 0.2)
carLights.target.position.x = -5
carLights.castShadow = true
car.add(carLights)

const carLights1 = new THREE.PointLight('#ffe7a6', 1, 10)
carLights1.position.set(-0.85 + 15, 0.25, 0.2)
carLights1.castShadow = true
car.add(carLights1)

// Car lights 2
const carLights2 = new THREE.SpotLight('#ffe7a6')
carLights2.position.set(-0.85 + 15, 0.25, -0.2)
carLights2.target.position.x = -5
carLights2.castShadow = true
car.add(carLights2)

const carLights3 = new THREE.PointLight('#ffe7a6', 1, 10)
carLights3.position.set(-0.85 + 15, 0.25, -0.2)
carLights3.castShadow = true
car.add(carLights3)

// Add the rear lights
const rearLights = new THREE.PointLight('#ff0000', 0.8, 8)
rearLights.position.set(0.85 + 15, 0.25, 0.25)
rearLights.castShadow = true
car.add(rearLights)

const rearLights1 = new THREE.PointLight('#ff0000', 0.8, 8)
rearLights1.position.set(0.85 + 15, 0.25, -0.25)
rearLights1.castShadow = true
car.add(rearLights1)

// Add a second car

const car2 = new THREE.Group()
scene.add(car2)

modelLoader.load(
    '/models/zr350_gta_sa.glb',
    (gltf) =>
    {
        gltf.scene.scale.set(0.3, 0.3, 0.3)
        gltf.scene.rotation.y = Math.PI * 0.5
        gltf.scene.position.set(-45, 0.17, 1.7)
        gltf.castShadow = true
        gltf.receiveShadow = true
        car2.add(gltf.scene)
    }
)

// Add the car lights
const car2Lights = new THREE.SpotLight('#ffe7a6')
car2Lights.position.set(0.53 - 45, 0.21, 1.52)
car2Lights.target.position.x = -40
car2Lights.castShadow = true
car2.add(car2Lights)

const car2Lights1 = new THREE.PointLight('#ffe7a6', 1, 10)
car2Lights1.position.set(0.54 - 45, 0.21, 1.52)
car2Lights1.castShadow = true
car2.add(car2Lights1)

// Car lights 2

const car2Lights2 = new THREE.SpotLight('#ffe7a6')
car2Lights2.position.set(0.53 - 45, 0.21, 1.89)
car2Lights2.target.position.x = -40
car2Lights2.castShadow = true
car2.add(car2Lights2)

const car2Lights3 = new THREE.PointLight('#ffe7a6', 1, 10)
car2Lights3.position.set(0.54 - 45, 0.21, 1.89)
car2Lights3.castShadow = true
car2.add(car2Lights3)

// Add the rear lights
const rearLights2 = new THREE.PointLight('#ff0000', 0.8, 8)
rearLights2.position.set(-0.75 - 45, 0.21, 1.52);
rearLights2.castShadow = true;
car2.add(rearLights2);

const rearLights3 = new THREE.PointLight('#ff0000', 0.8, 8);
rearLights3.position.set(-0.75 - 45, 0.21, 1.89);
rearLights3.castShadow = true;
car2.add(rearLights3);

/**
 * Sky
 */

const skyTexture = textureLoader.load('/textures/sky.jpg');
skyTexture.encoding = THREE.sRGBEncoding;

const skyGeometry = new THREE.SphereGeometry(500, 60, 40);
skyGeometry.scale(-1, 1, 1);

const skyMaterial = new THREE.MeshBasicMaterial({ map: skyTexture });

const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.2);
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);
scene.add(ambientLight);

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.8);
moonLight.position.set(4, 5, - 2);
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001);
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001);
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001);
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001);
scene.add(moonLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = 20
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

controls.target.x = -45

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Add the shadow
renderer.shadowMap.enabled = true

// Ajust the gamma
renderer.gammaOutput = true
renderer.gammaFactor = 2.2

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the car position
    car.position.x -= 0.08

    // If the car is not on a road, reset its position
    if (car.position.x < -47) {
        car.position.x = 0
    }

    // Update the second car position
    car2.position.x += 0.2

    // If the second car is not on a road, reset its position
    if (car2.position.x > 60) {
        car2.position.x = 0
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()