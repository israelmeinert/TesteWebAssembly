// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Configuração básica do Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Luzes
    const light = new THREE.AmbientLight(0x404040); // luz suave
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Criar robôs
    const robots = [];
    const robotGeometry = new THREE.BoxGeometry(1, 2, 1);
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];

    for (let i = 0; i < 500000; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const robotMaterial = new THREE.MeshPhongMaterial({ color: color });
        const robot = new THREE.Mesh(robotGeometry, robotMaterial);

        // Posicionar robôs aleatoriamente na tela
        robot.position.set(
            Math.random() * 40 - 20, // x: entre -20 e 20
            1,                      // y: altura fixa
            Math.random() * 40 - 20 // z: entre -20 e 20
        );
        scene.add(robot);
        robots.push({ mesh: robot, speed: Math.random() * 0.05 + 0.01 });
    }

    // Configurar a câmera
    camera.position.z = 50;

    // Função de animação
    function animate() {
        requestAnimationFrame(animate);

        // Atualizar posição dos robôs
        robots.forEach(robot => {
            robot.mesh.position.x += robot.speed;
            if (robot.mesh.position.x > 20) {
                robot.mesh.position.x = -20;
            }
        });

        renderer.render(scene, camera);
    }

    animate();
});
