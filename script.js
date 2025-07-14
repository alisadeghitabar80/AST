const gallery = document.querySelector('.gallery');
const magnifier = document.getElementById('magnifier');
const zoomImg = document.getElementById('zoom-img');

for (let i = 1; i <= 93; i++) {
  const img = document.createElement('img');
  img.src = `pages/page${i}.jpg`;
  img.alt = `Page ${i}`;

  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    zoomImg.src = img.src;
    zoomImg.style.left = `-${x}px`;
    zoomImg.style.top = `-${y}px`;

    magnifier.style.left = `${e.pageX - 75}px`;
    magnifier.style.top = `${e.pageY - 75}px`;
    magnifier.style.display = 'block';
  });

  img.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
  });

  gallery.appendChild(img);
}
