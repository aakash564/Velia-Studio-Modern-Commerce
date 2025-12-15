import { gsap } from "./animation-core.js";
import { PRODUCTS } from "./products.js";

export function initCart() {
  // Cart system (moved from script.js)
  const state = { items: [] };

  const cartCountEl = document.querySelector("[data-cart-count]");
  const cartSubtotalEl = document.querySelector("[data-cart-subtotal]");
  const cartItemsEl = document.querySelector("[data-cart-items]");

  const render = () => {
    const totalQty = state.items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0);

    if (cartCountEl) cartCountEl.textContent = totalQty;
    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal}`;

    if (!cartItemsEl) return;
    cartItemsEl.innerHTML = "";

    if (!state.items.length) {
      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = "Your cart is empty. Start with an editor’s pick.";
      cartItemsEl.appendChild(p);
      return;
    }

    state.items.forEach((item) => {
      const node = document.createElement("div");
      node.className = "cart-item";
      node.innerHTML = `
        <div class="cart-item__thumb">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item__body">
          <p>${item.name}</p>
          <span class="cart-item__meta">${item.meta}</span>
        </div>
        <div class="cart-item__qty">
          <div>$${item.price}</div>
          <div class="muted">× ${item.qty}</div>
          <button class="cart-item__remove" aria-label="Remove" data-remove="${item.id}">×</button>
        </div>
      `;
      cartItemsEl.appendChild(node);
    });

    cartItemsEl.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-remove");
        remove(id);
      });
    });
  };

  const add = (productId) => {
    const product = PRODUCTS[productId];
    if (!product) return;
    const existing = state.items.find((i) => i.id === productId);
    if (existing) existing.qty += 1;
    else {
      state.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.cart.image,
        meta: product.cart.meta,
        qty: 1
      });
    }
    render();
  };

  const remove = (productId) => {
    const idx = state.items.findIndex((i) => i.id === productId);
    if (idx >= 0) {
      state.items.splice(idx, 1);
      render();
    }
  };

  return { add, remove };
}

export function initAddToCart(cart) {
  // Add to cart interactions (moved from script.js)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add-to-cart]");
    if (!btn) return;
    const card = btn.closest("[data-product-id]");
    if (!card) return;
    const productId = card.dataset.productId;
    cart.add(productId);

    gsap.fromTo(
      btn,
      { scale: 0.96 },
      { scale: 1.03, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
    );

    const navCart = document.querySelector("[data-toggle-cart]");
    if (navCart) {
      gsap.fromTo(
        navCart,
        { y: 0, scale: 1 },
        { y: -3, scale: 1.04, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
      );
    }
  });
}

export function initCartDrawer() {
  // Cart drawer toggle (moved from script.js)
  const drawer = document.querySelector("[data-cart-drawer]");
  if (!drawer) return;

  const toggleButtons = document.querySelectorAll("[data-toggle-cart]");

  const toggle = () => {
    const isOpen = drawer.classList.toggle("cart-drawer--open");
    if (isOpen) {
      gsap.fromTo(
        drawer,
        { xPercent: 8, opacity: 0.9 },
        { xPercent: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  };

  toggleButtons.forEach((btn) => btn.addEventListener("click", toggle));
}

