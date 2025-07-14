
document.querySelectorAll(".img-container").forEach(container => {
  const img = container.querySelector("img.zoomable");
  const lens = container.querySelector(".lens");

  const zoom = 2;

  img.addEventListener("load", () => {
    lens.style.backgroundImage = `url('${img.src}')`;
    lens.style.backgroundRepeat = "no-repeat";
    lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
  });

  container.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensSize = lens.offsetWidth / 2;
    const lensX = x - lensSize;
    const lensY = y - lensSize;

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;
    lens.style.display = "block";

    const bgX = x * zoom - lensSize;
    const bgY = y * zoom - lensSize;

    lens.style.backgroundPosition = `-${bgX}px -${bgY}px`;
    lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
  });

  container.addEventListener("mouseleave", () => {
    lens.style.display = "none";
  });
});
