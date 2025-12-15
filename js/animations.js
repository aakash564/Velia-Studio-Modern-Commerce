import { ScrollTrigger } from "./animation-core.js";

export function initAnimations() {
  // Animate-in on scroll (moved from script.js)
  const singles = document.querySelectorAll("[data-animate-in]");
  singles.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => el.classList.add("is-visible")
    });
  });

  const staggers = document.querySelectorAll("[data-animate-stagger]");
  staggers.forEach((el) => {
    const children = Array.from(el.children);
    children.forEach((child, idx) => {
      child.style.setProperty("--stagger-delay", `${idx * 80}ms`);
    });
    ScrollTrigger.create({
      trigger: el,
      start: "top 78%",
      once: true,
      onEnter: () => el.classList.add("is-visible")
    });
  });
}

