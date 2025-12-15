import { ScrollTrigger } from "./animation-core.js";

export function initNav() {
  // Sticky nav subtle shrink (moved from script.js)
  const nav = document.querySelector("[data-sticky-nav]");
  if (nav) {
    ScrollTrigger.create({
      start: 10,
      onUpdate: (self) => {
        const s = Math.min(1, self.progress * 2);
        nav.style.backdropFilter = `blur(${18 + 4 * s}px)`;
      }
    });
  }

  // Scroll to anchors with native smooth scroll (replaces gsap scrollTo)
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.scrollTo);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    });
  });
}

