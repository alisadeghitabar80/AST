document.addEventListener("DOMContentLoaded", function () {
  const totalPages = 93; // تعداد صفحات
  const flipbook = document.getElementById("flipbook");

  for (let i = 1; i <= totalPages; i++) {
    const page = document.createElement("div");
    const img = document.createElement("img");
    img.src = `pages/page${i}.jpg`;
    img.alt = `Page ${i}`;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    page.appendChild(img);
    flipbook.appendChild(page);
  }

  $("#flipbook").turn({
    width: 1280,
    height: 720,
    autoCenter: true,
    display: 'double',
    direction: "ltr",
    elevation: 50,
    gradients: true,
    duration: 1000
  });
});
