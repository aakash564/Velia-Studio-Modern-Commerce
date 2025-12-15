import { gsap } from "./animation-core.js";
import { PRODUCTS } from "./products.js";

export function initQuickView(cart) {
  // Quick view modal (moved from script.js)
  const modal = document.querySelector("[data-modal]");
  if (!modal) return;

  const dialog = modal.querySelector("[data-modal-dialog]");
  const mainMedia = modal.querySelector("[data-modal-main-media]");
  const thumbs = modal.querySelector("[data-modal-thumbs]");
  const details = modal.querySelector("[data-modal-details]");

  let activeId = null;

  const open = (productId) => {
    const product = PRODUCTS[productId];
    if (!product) return;
    activeId = productId;

    const data = product.quickView;

    modal.classList.add("modal--open");

    mainMedia.innerHTML = `<img src="${data.gallery[0]}" alt="${product.name}" />`;
    thumbs.innerHTML = "";

    data.gallery.forEach((src, idx) => {
      const thumb = document.createElement("button");
      thumb.className = "modal__thumb" + (idx === 0 ? " modal__thumb--active" : "");
      thumb.innerHTML = `<img src="${src}" alt="${product.name} ${idx + 1}" />`;
      thumb.addEventListener("click", () => {
        mainMedia.innerHTML = `<img src="${src}" alt="${product.name}" />`;
        thumbs.querySelectorAll(".modal__thumb").forEach((t) =>
          t.classList.remove("modal__thumb--active")
        );
        thumb.classList.add("modal__thumb--active");
      });
      thumbs.appendChild(thumb);
    });

    details.innerHTML = `
      <h3>${product.name}</h3>
      <div class="modal__meta-row">
        <span class="price">$${product.price}</span>
        <span class="modal__meta-pill">In stock</span>
        <span class="modal__meta-pill">Free shipping</span>
      </div>
      <p>${data.description}</p>
      <div class="story__pills">
        ${data.badges.map((b) => `<span class="pill">${b}</span>`).join("")}
      </div>
      <div class="modal__controls">
        <button class="btn btn--primary" data-modal-add>Add to cart</button>
        <button class="btn btn--ghost" data-close-modal>Close</button>
      </div>
    `;

    const addBtn = details.querySelector("[data-modal-add]");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        if (activeId) cart.add(activeId);
        gsap.fromTo(
          addBtn,
          { scale: 0.96 },
          { scale: 1.04, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
        );
      });
    }

    gsap.fromTo(
      dialog,
      { y: 24, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }
    );
  };

  const close = () => {
    if (!modal.classList.contains("modal--open")) return;
    gsap.to(dialog, {
      y: 16,
      opacity: 0,
      scale: 0.97,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => modal.classList.remove("modal--open")
    });
  };

  modal.querySelectorAll("[data-close-modal]").forEach((el) =>
    el.addEventListener("click", close)
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Bind quick view buttons (moved from script.js)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-quick-view]");
    if (!btn) return;
    const card = btn.closest("[data-product-id]");
    if (!card) return;
    const id = card.dataset.productId;
    open(id);
  });
}

