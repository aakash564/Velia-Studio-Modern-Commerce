import { PRODUCTS } from "./products.js";

export function initHeroCarousel() {
  const carousel = document.querySelector("[data-hero-carousel]");
  const track = document.querySelector("[data-hero-track]");
  if (!carousel || !track) return;

  // dynamic hero carousel markup from PRODUCTS (moved from script.js)
  Object.values(PRODUCTS).forEach((product) => {
    const card = document.createElement("article");
    card.className = "hero-carousel__card";
    card.dataset.productId = product.id;

    const media = document.createElement("div");
    media.className = "hero-carousel__media";
    media.setAttribute("data-360-viewer", "");
    media.dataset.frames = JSON.stringify(product.hero.frames);

    const mainImg = document.createElement("img");
    mainImg.src = product.hero.frames[0];
    mainImg.alt = product.name;
    media.appendChild(mainImg);

    const hoverAlt = document.createElement("div");
    hoverAlt.className = "hero-carousel__hover-alt";
    const altImg = document.createElement("img");
    altImg.src = product.hero.altFrame;
    altImg.alt = `${product.name} alt`;
    hoverAlt.appendChild(altImg);
    media.appendChild(hoverAlt);

    const info = document.createElement("div");
    info.className = "hero-carousel__info";
    info.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.hero.blurb}</p>
      <div class="hero-carousel__price-row">
        <span class="price">$${product.price}</span>
        <button class="link-btn" data-quick-view>Quick view</button>
      </div>
    `;

    card.appendChild(media);
    card.appendChild(info);
    track.appendChild(card);
  });

  const cards = Array.from(track.children);
  if (!cards.length) return;

  // Hero carousel auto-scroll (moved from script.js)
  cards.forEach((card) => {
    track.appendChild(card.cloneNode(true));
  });

  let offset = 0;
  const speed = 0.4;
  let isHover = false;

  carousel.addEventListener("pointerenter", () => (isHover = true));
  carousel.addEventListener("pointerleave", () => (isHover = false));

  function animate() {
    if (!isHover) {
      offset -= speed;
      const cardWidth = cards[0].offsetWidth + 14;
      if (Math.abs(offset) > cardWidth * cards.length) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();
}

