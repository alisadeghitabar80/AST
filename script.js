document.querySelectorAll(".img-container").forEach(container => {
  const img = container.querySelector("img.zoomable");
  const lens = container.querySelector(".lens");

  const zoom = 2; // میزان زوم

  lens.style.backgroundImage = `url('${img.src}')`;
  lens.style.backgroundRepeat = "no-repeat";
  lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

  container.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensSize = lens.offsetWidth / 2;

    // جلوگیری از خروج لنز از تصویر
    let lensX = Math.max(0, Math.min(x - lensSize, img.width - lens.offsetWidth));
    let lensY = Math.max(0, Math.min(y - lensSize, img.height - lens.offsetHeight));

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;
    lens.style.display = "block";

    const bgX = x * zoom - lensSize;
    const bgY = y * zoom - lensSize;

    lens.style.backgroundPosition = `-${bgX}px -${bgY}px`;
  });

  container.addEventListener("mouseleave", () => {
    lens.style.display = "none";
  });
});
