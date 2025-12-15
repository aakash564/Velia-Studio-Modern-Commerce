import { gsap } from "./animation-core.js";

export function initCheckout() {
  // Checkout stepper (moved from script.js)
  const container = document.querySelector("[data-checkout-steps]");
  if (!container) return;
  const steps = Array.from(container.querySelectorAll("[data-step]"));
  const nextBtn = document.querySelector("[data-next-step]");
  const prevBtn = document.querySelector("[data-prev-step]");
  const fill = document.querySelector("[data-stepper-fill]");
  const dots = document.querySelectorAll("[data-step-dot]");

  let current = 1;

  const update = () => {
    steps.forEach((step) =>
      step.classList.toggle("checkout-step--active", Number(step.dataset.step) === current)
    );
    dots.forEach((dot) => {
      const idx = Number(dot.dataset.stepDot);
      dot.classList.toggle("dot--active", idx === current);
    });
    if (fill) {
      const progress = current / steps.length;
      gsap.to(fill, {
        scaleX: progress,
        transformOrigin: "left center",
        duration: 0.35,
        ease: "power3.out"
      });
    }
    if (prevBtn) prevBtn.disabled = current === 1;
    if (nextBtn) nextBtn.textContent = current === steps.length ? "Place order" : "Continue";
  };

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (current < steps.length) {
        current += 1;
        update();
      } else {
        gsap.to(nextBtn, {
          backgroundColor: "#2ac77d",
          duration: 0.28,
          yoyo: true,
          repeat: 1
        });
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (current > 1) {
        current -= 1;
        update();
      }
    });
  }

  update();
}

