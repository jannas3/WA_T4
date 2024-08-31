// Configuração do canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Função para gerar números aleatórios
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar uma cor RGB com intensidade
function colorWithIntensity(intensity) {
    return `rgb(${intensity}, ${intensity}, ${intensity})`;
}

// Construtor para a Partícula
function Particle(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

// Desenha a partícula
// Desenha a partícula como um quadrado
Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
  ctx.fill();
};


// Atualiza a posição da partícula
Particle.prototype.update = function() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    if (this.y + this.size >= height || this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
};

// Detecção de colisão
Particle.prototype.collisionDetect = function() {
    for (let j = 0; j < particles.length; j++) {
        if (!(this === particles[j])) {
            const dx = this.x - particles[j].x;
            const dy = this.y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + particles[j].size) {
                particles[j].color = this.color = colorWithIntensity(random(0, 255));
            }
        }
    }
};

// Criar partículas
let particles = [];
while (particles.length < 25) {
    let size = random(10, 20);
    let particle = new Particle(
        random(size, width - size),
        random(size, height - size),
        random(-7, 7),
        random(-7, 7),
        colorWithIntensity(random(0, 255)),
        size
    );
    particles.push(particle);
}

// Função de animação
function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
        particles[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
