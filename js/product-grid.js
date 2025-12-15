import { PRODUCTS } from "./products.js";

export function initProductGrid() {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  // dynamic products grid from PRODUCTS (moved from script.js)
  Object.values(PRODUCTS).forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.productId = product.id;

    const media = document.createElement("div");
    media.className = "product-card__media";
    media.setAttribute("data-360-viewer", "");
    media.dataset.frames = JSON.stringify(product.grid.frames);

    const mainImg = document.createElement("img");
    mainImg.src = product.grid.frames[0];
    mainImg.alt = product.name;
    media.appendChild(mainImg);

    const hoverLayer = document.createElement("div");
    hoverLayer.className = "product-card__hover-layer";
    (product.grid.chips || []).forEach((chipLabel) => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.textContent = chipLabel;
      hoverLayer.appendChild(chip);
    });
    media.appendChild(hoverLayer);

    const body = document.createElement("div");
    body.className = "product-card__body";

    const header = document.createElement("div");
    header.className = "product-card__header";
    header.innerHTML = `
      <h3>${product.name}</h3>
      <span class="price">$${product.price}</span>
    `;

    const desc = document.createElement("p");
    desc.className = "product-card__desc";
    desc.textContent = product.grid.description;

    const options = document.createElement("div");
    options.className = "product-card__options";

    if (product.grid.swatches) {
      const swatchGroup = document.createElement("div");
      swatchGroup.className = "swatch-group";
      product.grid.swatches.forEach((swatchName, idx) => {
        const swatch = document.createElement("button");
        swatch.className = "swatch";
        if (swatchName === "sand") swatch.classList.add("swatch--sand");
        if (swatchName === "olive") swatch.classList.add("swatch--olive");
        if (idx === 0) swatch.classList.add("swatch--active");
        swatch.ariaLabel = swatchName.charAt(0).toUpperCase() + swatchName.slice(1);
        swatchGroup.appendChild(swatch);
      });
      options.appendChild(swatchGroup);
    } else if (product.grid.sizes) {
      const sizeSelector = document.createElement("div");
      sizeSelector.className = "size-selector";
      sizeSelector.setAttribute("data-size-selector", "");
      product.grid.sizes.forEach((size, idx) => {
        const pill = document.createElement("button");
        pill.className = "size-pill";
        if (idx === 0) pill.classList.add("size-pill--active");
        pill.textContent = size;
        sizeSelector.appendChild(pill);
      });
      options.appendChild(sizeSelector);
    }

    const quickViewBtn = document.createElement("button");
    quickViewBtn.className = "link-btn";
    quickViewBtn.setAttribute("data-quick-view", "");
    quickViewBtn.textContent = "Quick view";
    options.appendChild(quickViewBtn);

    const actions = document.createElement("div");
    actions.className = "product-card__actions";
    actions.innerHTML = `
      <button class="btn btn--secondary" data-add-to-cart>Add to cart</button>
      <div class="product-card__icon-actions">
        <button class="icon-toggle" aria-label="Wishlist" data-toggle-wishlist>
          <span class="icon-heart"></span>
        </button>
        <button class="icon-toggle" aria-label="Compare">
          <span class="icon-compare"></span>
        </button>
      </div>
    `;

    body.appendChild(header);
    body.appendChild(desc);
    body.appendChild(options);
    body.appendChild(actions);

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

