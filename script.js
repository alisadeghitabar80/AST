document.querySelectorAll('.zoomable').forEach(img => {
  const glass = img.parentElement.querySelector('.magnifier-glass');

  img.addEventListener('mousemove', function(e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glass.style.display = 'block';
    glass.style.left = (x - glass.offsetWidth / 2) + 'px';
    glass.style.top = (y - glass.offsetHeight / 2) + 'px';
    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = (img.width * 2) + 'px ' + (img.height * 2) + 'px';
    glass.style.backgroundPosition = `-${x * 2 - 50}px -${y * 2 - 50}px`;
  });

  img.addEventListener('mouseleave', () => {
    glass.style.display = 'none';
  });
});
