
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  for (let i = 1; i <= 93; i++) {
    const container = document.createElement("div");
    container.className = "page";

    const img = document.createElement("img");
    img.src = `pages/page${i}.jpg`;
    img.alt = `Page ${i}`;

    const lens = document.createElement("div");
    lens.className = "lens";

    container.appendChild(img);
    container.appendChild(lens);
    gallery.appendChild(container);

    container.addEventListener("mousemove", function (e) {
      lens.style.display = "block";
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      lens.style.left = `${x - 75}px`;
      lens.style.top = `${y - 75}px`;
      lens.style.backgroundImage = `url(${img.src})`;
      lens.style.backgroundRepeat = "no-repeat";
      lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;
      lens.style.backgroundPosition = `-${x}px -${y}px`;
    });

    container.addEventListener("mouseleave", function () {
      lens.style.display = "none";
    });
  }
});
