// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// --- Three.js: Rotating Wireframe + Minimal Starfield ---
let scene, camera, renderer, wireframeModel, particles;
const clock = new THREE.Clock();

function initThreeJS() {
  const container = document.getElementById('three-canvas-container');
  if (!container) {
    console.error("Three.js container not found");
    return;
  }

  // Scene setup
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.12);

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 6;

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // --- Wireframe Polyhedron (Icosahedron) ---
  const icosaGeo = new THREE.IcosahedronGeometry(2, 1);
  const wireframeGeo = new THREE.WireframeGeometry(icosaGeo);
  const wireframeMat = new THREE.LineBasicMaterial({
    color: 0x00ffff,
    linewidth: 2,
    transparent: true,
    opacity: 0.8
  });
  wireframeModel = new THREE.LineSegments(wireframeGeo, wireframeMat);
  scene.add(wireframeModel);

  // --- Minimal Starfield ---
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const particleGeometry = new THREE.BufferGeometry();
  const baseColor = new THREE.Color(0x00ffff);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 4 + Math.random() * 4;
    const phi = Math.acos(-1 + (2 * Math.random()));
    const theta = Math.sqrt(particleCount * Math.PI) * phi;

    positions[i3] = radius * Math.cos(theta) * Math.sin(phi);
    positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i3 + 2] = radius * Math.cos(phi);

    const colorVariance = (Math.random() - 0.5) * 0.3;
    const particleColor = baseColor.clone().offsetHSL(0, 0, colorVariance);
    colors[i3] = particleColor.r;
    colors[i3 + 1] = particleColor.g;
    colors[i3 + 2] = particleColor.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleTexture = new THREE.TextureLoader().load(
    'https://threejs.org/examples/textures/sprites/disc.png'
  );
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.05,
    map: particleTexture,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true
  });
  particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
  scene.add(ambientLight);
  const pointLight1 = new THREE.PointLight(0x00ffff, 1.5, 20);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);
  const pointLight2 = new THREE.PointLight(0xffffff, 1.0, 20);
  pointLight2.position.set(-5, -5, -5);
  scene.add(pointLight2);

  window.addEventListener('resize', onWindowResize, false);
  animateThreeJS();
}

function onWindowResize() {
  const container = document.getElementById('three-canvas-container');
  if (!container || !renderer) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function animateThreeJS() {
  requestAnimationFrame(animateThreeJS);
  const delta = clock.getDelta();

  // Rotate the wireframe
  if (wireframeModel) {
    wireframeModel.rotation.x += delta * 0.2;
    wireframeModel.rotation.y += delta * 0.3;
    wireframeModel.rotation.z += delta * 0.1;
  }
  // Slightly rotate starfield
  if (particles) {
    particles.rotation.y += delta * 0.05;
  }
  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', initThreeJS);

// Simple Form Validation Script
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert("Thank you for your message!");
    this.reset();
  } else {
    alert("Please fill in all required fields correctly.");
  }
});