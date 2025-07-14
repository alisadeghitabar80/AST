document.querySelectorAll('.magnifier-container').forEach(container => {
  const img = container.querySelector('img');
  const magnifierGlass = container.querySelector('.magnifier-glass');

  const zoom = 2.5; // میزان بزرگنمایی

  container.addEventListener('mousemove', function(e) {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    magnifierGlass.style.display = 'block';
    magnifierGlass.style.left = `${x - magnifierGlass.offsetWidth / 2}px`;
    magnifierGlass.style.top = `${y - magnifierGlass.offsetHeight / 2}px`;
    magnifierGlass.style.backgroundImage = `url('${img.src}')`;
    magnifierGlass.style.backgroundRepeat = 'no-repeat';
    magnifierGlass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
    magnifierGlass.style.backgroundPosition = `-${x * zoom - magnifierGlass.offsetWidth / 2}px -${y * zoom - magnifierGlass.offsetHeight / 2}px`;
  });

  container.addEventListener('mouseleave', () => {
    magnifierGlass.style.display = 'none';
  });
});
