
const containers = document.querySelectorAll(".image-container");

containers.forEach(container => {
  const img = container.querySelector(".zoom-img");
  const magnifier = container.querySelector(".magnifier");

  container.addEventListener("mousemove", e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const zoomLevel = 2;
    magnifier.style.backgroundImage = `url('${img.src}')`;
    magnifier.style.backgroundSize = `${img.width * zoomLevel}px ${img.height * zoomLevel}px`;
    magnifier.style.backgroundPosition = `-${x * zoomLevel - 170}px -${y * zoomLevel - 170}px`;
    magnifier.style.left = `${x - 170}px`;
    magnifier.style.top = `${y - 170}px`;
    magnifier.style.display = "block";
  });

  container.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
  });
});
