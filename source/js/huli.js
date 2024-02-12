const img = document.getElementById('follow-img');
let mouseX = 0, mouseY = 0;
let imgX = 0, imgY = 0;
let speed = 0.5;
let rotateDeg = 0;

function animate() {
    let dx = mouseX - imgX;
    let dy = mouseY - imgY;
    let angle = Math.atan2(dy, dx);
    rotateDeg = angle * (180 / Math.PI) + 90;

    imgX += dx * speed;
    imgY += dy * speed;

    img.style.left = `${imgX - img.width / 2}px`;
    img.style.top = `${imgY - img.height / 2}px`;
    img.style.transform = `rotate(${rotateDeg}deg)`;

    requestAnimationFrame(animate);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

animate();