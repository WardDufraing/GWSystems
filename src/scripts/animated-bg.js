/* let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

const bg = document.querySelector('.animated-bg');

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX / window.innerWidth;
  targetY = e.clientY / window.innerHeight;
});

function animate() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  const offsetX1 = 30 + (currentX - 0.5) * 10;
  const offsetY1 = 30 + (currentY - 0.5) * 10;
  const offsetX2 = 70 + (currentX - 0.5) * 10;
  const offsetY2 = 70 + (currentY - 0.5) * 10;

  bg.style.setProperty('--x1', `${offsetX1}%`);
  bg.style.setProperty('--y1', `${offsetY1}%`);
  bg.style.setProperty('--x2', `${offsetX2}%`);
  bg.style.setProperty('--y2', `${offsetY2}%`);

  requestAnimationFrame(animate);
}

animate(); */

if (typeof window !== 'undefined') {
    const bg = document.querySelector('.animated-bg');
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // small parallax movement (10% range)
      const offsetX1 = 30 + (x - 0.5) * 10;
      const offsetY1 = 30 + (y - 0.5) * 10;
      const offsetX2 = 30 + (x - 0.5) * 10;
      const offsetY2 = 80 + (y - 0.5) * 10;
      const offsetX3 = 90 + (x - 0.5) * 10;
      const offsetY3 = 90 + (y - 0.5) * 10;

      bg.style.setProperty('--x1', `${offsetX1}%`);
      bg.style.setProperty('--y1', `${offsetY1}%`);
      bg.style.setProperty('--x2', `${offsetX2}%`);
      bg.style.setProperty('--y2', `${offsetY2}%`);
      bg.style.setProperty('--x3', `${offsetX3}%`);
      bg.style.setProperty('--y3', `${offsetY3}%`);
    });
  }