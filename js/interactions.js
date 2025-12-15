import { gsap } from "./animation-core.js";

export function initSizeSelector() {
  // Size selector micro-interactions (moved from script.js)
  document.addEventListener("click", (e) => {
    const group = e.target.closest("[data-size-selector]");
    if (!group) return;
    const pill = e.target.closest(".size-pill");
    if (!pill) return;
    group.querySelectorAll(".size-pill").forEach((p) => p.classList.remove("size-pill--active"));
    pill.classList.add("size-pill--active");
  });
}

export function initWishlistToggle() {
  // Wishlist toggle micro-interactions (moved from script.js)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle-wishlist]");
    if (!btn) return;
    btn.classList.toggle("icon-toggle--active");
    const icon = btn.querySelector(".icon-heart");
    if (!icon) return;
    gsap.fromTo(
      icon,
      { scale: 0.8 },
      { scale: 1.15, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
    );
  });
}

