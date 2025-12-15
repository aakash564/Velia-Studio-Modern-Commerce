export function initHero() {
  // Smooth hero background micro zoom (moved from script.js)
  const bg = document.querySelector(".hero__bg-layer--image");
  if (!bg) return;
  bg.animate(
    [
      { transform: "scale(1.08)" },
      { transform: "scale(1.12)" },
      { transform: "scale(1.08)" }
    ],
    {
      duration: 26000,
      iterations: Infinity
    }
  );
}

