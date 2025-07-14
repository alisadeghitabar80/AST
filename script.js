const gallery = document.querySelector('.gallery');
for (let i = 1; i <= 93; i++) {
  const img = document.createElement('img');
  img.src = `pages/page${i}.jpg`;
  img.alt = `Page ${i}`;
  gallery.appendChild(img);
}
