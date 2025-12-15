 // removed monolithic PRODUCTS + behavior setup (see js/*.js modules)

import { initNav } from "./js/nav.js";
import { initHero } from "./js/hero.js";
import { initHeroCarousel } from "./js/hero-carousel.js";
import { init360Viewers } from "./js/viewers360.js";
import { initAnimations } from "./js/animations.js";
import { initProductGrid } from "./js/product-grid.js";
import { initCart, initAddToCart, initCartDrawer } from "./js/cart.js";
import { initQuickView } from "./js/quickview.js";
import { initSizeSelector, initWishlistToggle } from "./js/interactions.js";
import { initCheckout } from "./js/checkout.js";
// products config is now shared from js/products.js

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHero();
  initHeroCarousel();
  initProductGrid();
  init360Viewers();
  initAnimations();

  const cart = initCart();
  initAddToCart(cart);
  initCartDrawer(cart);
  initQuickView(cart);

  initSizeSelector();
  initWishlistToggle();
  initCheckout();
});

