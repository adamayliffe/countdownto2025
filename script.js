// Countdown Timer
const countdown = document.getElementById('countdown');
const newYear = new Date('Jan 1, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "Happy New Year!";
    }
}

const interval = setInterval(updateCountdown, 1000);

// Shooting Stars Animation
const canvas = document.getElementById('shooting-stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

function createStar() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 4;
    const speed = Math.random() * 5 + 1;
    stars.push({ x, y, size, speed });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach((star, index) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 4, Math.PI * 7);
        ctx.fill();
        star.x -= star.speed;
        star.y += star.speed;
        if (star.x < 0 || star.y > canvas.height) {
            stars.splice(index, 1);
            createStar();
        }
    });
}

function animate() {
    drawStars();
    requestAnimationFrame(animate);
}

for (let i = 0; i < 100; i++) {
    createStar();
}

animate();