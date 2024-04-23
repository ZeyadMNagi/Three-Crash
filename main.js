import * as Three from "three";

const scene = new Three.Scene();

const geometry = new Three.SphereGeometry(3, 10, 10);
const material = new Three.MeshStandardMaterial({ color: "red" });
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

// Camera setup with corrected parameters
const camera = new Three.PerspectiveCamera(75, 800 / 600, 0.1, 1000); // aspect ratio = width / height

// Renderer setup
const canvas = document.querySelector("canvas");
const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(800, 600);

// Set camera position
camera.position.z = 5;

// Render the scene
renderer.render(scene, camera);
