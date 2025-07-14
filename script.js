
const lens = document.getElementById('lens');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('mousemove', e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    lens.style.display = 'block';
    lens.style.left = `${e.pageX - 75}px`;
    lens.style.top = `${e.pageY - 75}px`;

    lens.style.backgroundImage = `url(${img.src})`;
    lens.style.backgroundPosition = `-${x * 2 - 200}px -${y * 2 - 200}px`;
  });

  img.addEventListener('mouseleave', () => {
    lens.style.display = 'none';
  });
});
