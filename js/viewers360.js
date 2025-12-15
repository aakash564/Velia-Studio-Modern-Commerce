export function init360Viewers() {
  // 360-degree viewers (drag/touch) (moved from script.js)
  const setupViewer = (el) => {
    const frames = JSON.parse(el.dataset.frames || "[]");
    if (!frames.length) return;

    let frameIndex = 0;
    let isDragging = false;
    let startX = 0;
    const img = el.querySelector("img");

    const setFrame = (idx) => {
      frameIndex = (idx + frames.length) % frames.length;
      img.src = frames[frameIndex];
    };

    const onDown = (e) => {
      isDragging = true;
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      el.style.cursor = "grabbing";
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const delta = x - startX;
      const sensitivity = 12;
      if (Math.abs(delta) > sensitivity) {
        const steps = Math.floor(delta / sensitivity);
        setFrame(frameIndex - steps);
        startX = x;
      }
    };

    const onUp = () => {
      isDragging = false;
      el.style.cursor = "grab";
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
  };

  document.querySelectorAll("[data-360-viewer]").forEach(setupViewer);
}

