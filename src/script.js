import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

/**
 * Model
 */
// Add the model loader
const modelLoader = new GLTFLoader();

/**
 * 4 Dragons Casino
 */
// Add the casino glb model
modelLoader.load("/models/The_Strip_GTA_SA_Bat.glb", (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(0, 0.01, 0);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    scene.add(gltf.scene);
});

// Add the casino lights for the first palm tree
const casinoLights = new THREE.PointLight("#ffff80", 5, 30);
casinoLights.position.set(-8.15, 1.8, 3.3);
casinoLights.castShadow = true;
scene.add(casinoLights);

// Add the casino lights for the second palm tree
const casinoLights1 = new THREE.PointLight("#ffff80", 5, 30);
casinoLights1.position.set(0.15, 1.8, 3.3);
casinoLights1.castShadow = true;
scene.add(casinoLights1);

// Add a second casino
modelLoader.load("/models/The_Strip_GTA_SA_Bat.glb", (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(-35, 0.01, 1);
    // Rotate the casino
    gltf.scene.rotation.y = Math.PI;
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    scene.add(gltf.scene);
});

// Add the casino lights for the first palm tree
const casinoLights2 = new THREE.PointLight("#ffff80", 5, 30);
casinoLights2.position.set(-35.25, 1.8, -2.2);
casinoLights2.castShadow = true;
scene.add(casinoLights2);

// Add the casino lights for the second palm tree
const casinoLights3 = new THREE.PointLight("#ffff80", 5, 30);
casinoLights3.position.set(-26.85, 1.8, -2.2);
casinoLights3.castShadow = true;
scene.add(casinoLights3);

/**
 * Road
 */
// Add the road glb model
modelLoader.load("/models/The_Strip_GTA_SA_Road.glb", (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(0, 0, 0);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    scene.add(gltf.scene);
});

// Add a second road
modelLoader.load("/models/The_Strip_GTA_SA_Road.glb", (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(-15.925, 0, 0);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    scene.add(gltf.scene);
});

// Add a third road
modelLoader.load("/models/The_Strip_GTA_SA_Road.glb", (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(-31.85, 0, 0);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    scene.add(gltf.scene);
});

// Add a fourth road before the casino
modelLoader.load("/models/The_Strip_GTA_SA_Road.glb", (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(15.925, 0, 0);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    scene.add(gltf.scene);
});

/**
 * Cars
 */
const car = new THREE.Group();
scene.add(car);
modelLoader.load("/models/greenwood_gta_sa.glb", (gltf) => {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.rotation.y = Math.PI * 0.5;
    gltf.scene.position.set(15, 0.21, 0);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    car.add(gltf.scene);
});

// Add the car lights
const carLights = new THREE.SpotLight("#ffe7a6");
carLights.position.set(-0.85 + 15, 0.25, 0.2);
carLights.target.position.x = -5;
carLights.castShadow = true;
car.add(carLights);

const carLights1 = new THREE.PointLight("#ffe7a6", 1, 10);
carLights1.position.set(-0.85 + 15, 0.25, 0.2);
carLights1.castShadow = true;
car.add(carLights1);

// Car lights 2
const carLights2 = new THREE.SpotLight("#ffe7a6");
carLights2.position.set(-0.85 + 15, 0.25, -0.2);
carLights2.target.position.x = -5;
carLights2.castShadow = true;
car.add(carLights2);

const carLights3 = new THREE.PointLight("#ffe7a6", 1, 10);
carLights3.position.set(-0.85 + 15, 0.25, -0.2);
carLights3.castShadow = true;
car.add(carLights3);

// Add the rear lights
const rearLights = new THREE.PointLight("#ff0000", 0.8, 8);
rearLights.position.set(0.85 + 15, 0.25, 0.25);
rearLights.castShadow = true;
car.add(rearLights);

const rearLights1 = new THREE.PointLight("#ff0000", 0.8, 8);
rearLights1.position.set(0.85 + 15, 0.25, -0.25);
rearLights1.castShadow = true;
car.add(rearLights1);

// Add a second car

const car2 = new THREE.Group();
scene.add(car2);
modelLoader.load("/models/greenwood_gta_sa.glb", (gltf) => {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.rotation.y = -(Math.PI * 0.5);
    gltf.scene.position.set(-45, 0.21, 1.8);
    gltf.castShadow = true;
    gltf.receiveShadow = true;
    car2.add(gltf.scene);
});

// Add the car lights
const car2Lights = new THREE.SpotLight("#ffe7a6");
car2Lights.position.set(0.85 - 45, 0.25, 2);
car2Lights.target.position.x = -5;
car2Lights.castShadow = true;
car2.add(car2Lights);

const car2Lights1 = new THREE.PointLight("#ffe7a6", 1, 10);
car2Lights1.position.set(0.85 - 45, 0.25, 2);
car2Lights1.castShadow = true;
car2.add(car2Lights1);

// Car lights 2
const car2Lights2 = new THREE.SpotLight("#ffe7a6");
car2Lights2.position.set(0.85 - 45, 0.25, 1.6);
car2Lights2.target.position.x = -5;
car2Lights2.castShadow = true;
car2.add(car2Lights2);

const car2Lights3 = new THREE.PointLight("#ffe7a6", 1, 10);
car2Lights3.position.set(0.85 - 45, 0.25, 1.6);
car2Lights3.castShadow = true;
car2.add(car2Lights3);

// Add the rear lights
const car2RearLights = new THREE.PointLight("#ff0000", 0.8, 8);
car2RearLights.position.set(-0.85 - 45, 0.25, 1.95);
car2RearLights.castShadow = true;
car2.add(car2RearLights);

const car2RearLights1 = new THREE.PointLight("#ff0000", 0.8, 8);
car2RearLights1.position.set(-0.85 - 45, 0.25, 1.55);
car2RearLights1.castShadow = true;
car2.add(car2RearLights1);

/**
 * Sky
 */

const skyTexture = textureLoader.load("/textures/sky.jpg");
skyTexture.colorSpace = THREE.SRGBColorSpace;

const skyGeometry = new THREE.SphereGeometry(500, 60, 40);
skyGeometry.scale(-1, 1, 1);

const skyMaterial = new THREE.MeshBasicMaterial({ map: skyTexture });

const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#ffffff", 0.2);
gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
scene.add(ambientLight);

// Directional light
const moonLight = new THREE.DirectionalLight("#ffffff", 0.8);
moonLight.position.set(4, 5, -2);
gui.add(moonLight, "intensity").min(0).max(1).step(0.001);
gui.add(moonLight.position, "x").min(-5).max(5).step(0.001);
gui.add(moonLight.position, "y").min(-5).max(5).step(0.001);
gui.add(moonLight.position, "z").min(-5).max(5).step(0.001);
scene.add(moonLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
);
camera.position.x = -4;
camera.position.y = 1;
camera.position.z = 6;
scene.add(camera);

// Casino 2 camera

const casinoCamera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
);
casinoCamera.position.x = -31;
casinoCamera.position.y = 1;
casinoCamera.position.z = -4;
casinoCamera.rotation.y = Math.PI;
scene.add(casinoCamera);

// Car camera

const carCamera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
);
carCamera.position.x = 17;
carCamera.position.y = 0.8;
carCamera.position.z = 0;
carCamera.rotation.y = Math.PI * 0.5;
car.add(carCamera);

// Car camera 2

const carCamera2 = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
);
carCamera2.position.x = -47;
carCamera2.position.y = 0.8;
carCamera2.position.z = 1.8;
carCamera2.rotation.y = -(Math.PI * 0.5);
car2.add(carCamera2);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

controls.target.z = -45;
controls.target.y = 1;
controls.target.x = -3.5;

const cameras = [
    { name: "Base Camera", camera: camera },
    { name: "Casino Camera", camera: casinoCamera },
    { name: "First Car Camera", camera: carCamera },
    { name: "Second Car Camera", camera: carCamera2 },
];
let currentCameraIndex = 0;

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            // Switch to the next camera
            currentCameraIndex = (currentCameraIndex + 1) % cameras.length;
            document.querySelector("#camera-info").textContent =
                "Current Camera: " + cameras[currentCameraIndex].name;
            break;
        case "ArrowLeft":
            // Switch to the previous camera
            currentCameraIndex =
                (currentCameraIndex - 1 + cameras.length) % cameras.length;
            document.querySelector("#camera-info").textContent =
                "Current Camera: " + cameras[currentCameraIndex].name;
            break;
    }
});

/**
 * Audio
 */

const listener = new THREE.AudioListener();
camera.add(listener);

// Create a global audio source
const sound = new THREE.Audio(listener);

document.querySelector("#play-button").addEventListener("click", function () {
    // Loading the music
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("/sounds/track.mp3", function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });
    document.querySelector("#current-play").textContent = "Playing GTA SA Theme";
});

document.querySelector("#pause-button").addEventListener("click", function () {
    sound.pause();
    document.querySelector("#current-play").textContent = "Paused";
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Add the shadow
renderer.shadowMap.enabled = true;

// Ajust the gamma
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update the car position
    car.position.x -= 0.08;

    // If the car is not on a road, reset its position
    if (car.position.x < -47) {
        car.position.x = 0;
    }

    // // Update the car camera position
    // carCamera.position.x -= 0.08

    // // If the car camera is not on a road, reset its position
    // if (carCamera.position.x < -40) {
    //     carCamera.position.x = 17
    // }

    // Update the second car position
    car2.position.x += 0.1;

    // If the second car is not on a road, reset its position
    if (car2.position.x > 60) {
        car2.position.x = 0;
    }

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, cameras[currentCameraIndex].camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
};

tick();
