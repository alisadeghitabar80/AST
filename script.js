
const zoomImgs = document.querySelectorAll('.zoom-img');

zoomImgs.forEach(img => {
  const lens = document.createElement('div');
  lens.className = 'lens';
  const zoomed = document.createElement('img');
  zoomed.src = img.src;
  lens.appendChild(zoomed);
  img.parentElement.appendChild(lens);

  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lens.style.left = `${x - 75}px`;
    lens.style.top = `${y - 75}px`;
    lens.style.display = 'block';

    zoomed.style.left = `-${x * 2.5 - 75}px`;
    zoomed.style.top = `-${y * 2.5 - 75}px`;
  });

  img.addEventListener('mouseleave', () => {
    lens.style.display = 'none';
  });
});
