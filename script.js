const totalPages = 10;
const gallery = document.getElementById("gallery");

for (let i = 1; i <= totalPages; i++) {
  const img = document.createElement("img");
  img.src = `pages/page${i}.jpg`;
  img.alt = `page ${i}`;
  gallery.appendChild(img);
}
