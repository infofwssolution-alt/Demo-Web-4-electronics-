/**
 * Nexora Home & Tech - Client Application Logic
 * Pure vanilla JavaScript with full offline support, zero dependencies.
 */

// Application State
const state = {
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  cart: [],
  modalProduct: null,
  modalQuantity: 1
};

// DOM Element References
const elements = {
  productsGrid: document.getElementById("productsGrid"),
  productsCountText: document.getElementById("productsCountText"),
  searchInput: document.getElementById("searchInput"),
  searchClearBtn: document.getElementById("searchClearBtn"),
  sortSelect: document.getElementById("sortSelect"),
  filterChips: document.querySelectorAll(".chip-btn"),
  categoryTiles: document.querySelectorAll(".category-tile"),
  navLinks: document.querySelectorAll("[data-filter-nav]"),

  // Cart Drawer
  openCartBtn: document.getElementById("openCartBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartOverlay: document.getElementById("cartOverlay"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartCountBadge: document.getElementById("cartCountBadge"),
  cartItemsCountText: document.getElementById("cartItemsCountText"),
  cartItemsList: document.getElementById("cartItemsList"),
  cartSubtotalText: document.getElementById("cartSubtotalText"),
  cartShippingText: document.getElementById("cartShippingText"),
  cartTotalText: document.getElementById("cartTotalText"),
  freeDeliveryStatus: document.getElementById("freeDeliveryStatus"),
  freeDeliveryProgress: document.getElementById("freeDeliveryProgress"),
  checkoutBtn: document.getElementById("checkoutBtn"),

  // Product Modal
  productModal: document.getElementById("productModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalIllustrationWrap: document.getElementById("modalIllustrationWrap"),
  modalWarrantyText: document.getElementById("modalWarrantyText"),
  modalProductCat: document.getElementById("modalProductCat"),
  modalProductName: document.getElementById("modalProductName"),
  modalStars: document.getElementById("modalStars"),
  modalPrice: document.getElementById("modalPrice"),
  modalOriginalPrice: document.getElementById("modalOriginalPrice"),
  modalDesc: document.getElementById("modalDesc"),
  modalSpecsTable: document.getElementById("modalSpecsTable"),
  modalInTheBoxList: document.getElementById("modalInTheBoxList"),
  modalBestSuited: document.getElementById("modalBestSuited"),
  modalQtyMinus: document.getElementById("modalQtyMinus"),
  modalQtyPlus: document.getElementById("modalQtyPlus"),
  modalQtyDisplay: document.getElementById("modalQtyDisplay"),
  modalAddToCartBtn: document.getElementById("modalAddToCartBtn"),

  // Demo Checkout Modal
  demoCheckoutModal: document.getElementById("demoCheckoutModal"),
  closeDemoNoticeBtn: document.getElementById("closeDemoNoticeBtn"),

  // FAQ
  faqAccordion: document.getElementById("faqAccordion"),

  // Toast Container
  toastContainer: document.getElementById("toastContainer")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  loadSavedCart();
  setupEventListeners();
  renderProducts();
  updateCartUI();
});

// Load cart from localStorage if present
function loadSavedCart() {
  try {
    const saved = localStorage.getItem("nexora_cart");
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("nexora_cart", JSON.stringify(state.cart));
  } catch (e) {}
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Live Search
  elements.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    elements.searchClearBtn.classList.toggle("visible", state.searchQuery.length > 0);
    renderProducts();
  });

  elements.searchClearBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    elements.searchClearBtn.classList.remove("visible");
    elements.searchInput.focus();
    renderProducts();
  });

  // Sort Select
  elements.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Filter Chips
  elements.filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      elements.filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeCategory = chip.dataset.filter;
      syncCategoryTilesActive();
      renderProducts();
    });
  });

  // Category Tiles
  elements.categoryTiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const cat = tile.dataset.catFilter;
      setCategoryFilter(cat);
      scrollToCatalog();
    });

    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tile.click();
      }
    });
  });

  // Nav Links with Category Filter
  elements.navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const cat = link.dataset.filterNav;
      if (cat) {
        setCategoryFilter(cat);
      }
    });
  });

  // Cart Drawer Open / Close
  elements.openCartBtn.addEventListener("click", openCart);
  elements.closeCartBtn.addEventListener("click", closeCart);
  elements.cartOverlay.addEventListener("click", closeCart);

  // Product Modal Open / Close
  elements.closeModalBtn.addEventListener("click", closeProductModal);
  elements.productModal.addEventListener("click", (e) => {
    if (e.target === elements.productModal) {
      closeProductModal();
    }
  });

  // Modal Quantity
  elements.modalQtyMinus.addEventListener("click", () => {
    if (state.modalQuantity > 1) {
      state.modalQuantity--;
      elements.modalQtyDisplay.textContent = state.modalQuantity;
    }
  });

  elements.modalQtyPlus.addEventListener("click", () => {
    if (state.modalQuantity < 99) {
      state.modalQuantity++;
      elements.modalQtyDisplay.textContent = state.modalQuantity;
    }
  });

  elements.modalAddToCartBtn.addEventListener("click", () => {
    if (state.modalProduct) {
      addToCart(state.modalProduct.id, state.modalQuantity);
      closeProductModal();
    }
  });

  // Checkout Button
  elements.checkoutBtn.addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast("Your cart is empty. Add a product to explore checkout!", "orange");
      return;
    }
    elements.demoCheckoutModal.classList.add("open");
  });

  elements.closeDemoNoticeBtn.addEventListener("click", () => {
    elements.demoCheckoutModal.classList.remove("open");
  });

  elements.demoCheckoutModal.addEventListener("click", (e) => {
    if (e.target === elements.demoCheckoutModal) {
      elements.demoCheckoutModal.classList.remove("open");
    }
  });

  // Global Keyboard Navigation (Esc to close modals/drawer)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCart();
      elements.demoCheckoutModal.classList.remove("open");
    }
  });

  // FAQ Accordion
  if (elements.faqAccordion) {
    const faqButtons = elements.faqAccordion.querySelectorAll(".faq-question-btn");
    faqButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains("active");

        // Close other items
        elements.faqAccordion.querySelectorAll(".faq-item").forEach((it) => {
          it.classList.remove("active");
          it.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
        });

        // Toggle clicked
        if (!isOpen) {
          item.classList.add("active");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }
}

function setCategoryFilter(category) {
  state.activeCategory = category;

  // Update chips
  elements.filterChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === category);
  });

  syncCategoryTilesActive();
  renderProducts();
}

function syncCategoryTilesActive() {
  elements.categoryTiles.forEach((tile) => {
    tile.classList.toggle("active", tile.dataset.catFilter === state.activeCategory);
  });
}

function scrollToCatalog() {
  const catalog = document.getElementById("catalog");
  if (catalog) {
    catalog.scrollIntoView({ behavior: "smooth" });
  }
}

// --- PRODUCT FILTERING & RENDERING ---
function getFilteredProducts() {
  let list = PRODUCTS.slice();

  // Category Filter
  if (state.activeCategory === "sale") {
    list = list.filter((p) => p.onSale);
  } else if (state.activeCategory !== "all") {
    list = list.filter((p) => p.category === state.activeCategory);
  }

  // Keyword Search
  if (state.searchQuery) {
    const query = state.searchQuery;
    list = list.filter((p) => {
      const matchName = p.name.toLowerCase().includes(query);
      const matchDesc = p.shortDescription.toLowerCase().includes(query);
      const matchCat = p.categoryName.toLowerCase().includes(query);
      const matchSpecs = Object.entries(p.specs).some(
        ([k, v]) => k.toLowerCase().includes(query) || v.toLowerCase().includes(query)
      );
      return matchName || matchDesc || matchCat || matchSpecs;
    });
  }

  // Sorting
  switch (state.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "name-asc":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Featured / original catalog order
      break;
  }

  return list;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  elements.productsCountText.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;

  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="no-products-msg">
        <h3>No matching products found</h3>
        <p>Try searching for other terms like "air fryer", "vacuum", "audio", or clear your filter.</p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  elements.productsGrid.innerHTML = filtered.map((product) => createProductCardMarkup(product)).join("");
}

function resetFilters() {
  state.activeCategory = "all";
  state.searchQuery = "";
  elements.searchInput.value = "";
  elements.searchClearBtn.classList.remove("visible");
  elements.sortSelect.value = "featured";
  state.sortBy = "featured";

  elements.filterChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === "all");
  });
  syncCategoryTilesActive();
  renderProducts();
}

function createProductCardMarkup(product) {
  const badgeHtml = product.badge
    ? `<span class="product-badge badge-${product.badge.toLowerCase().replace(/\s+/g, '-')}">${product.badge}</span>`
    : `<span></span>`;

  const originalPriceHtml = product.originalPrice
    ? `<span class="product-original-price">$${product.originalPrice}</span>`
    : "";

  const starString = "★".repeat(Math.floor(product.rating)) + (product.rating % 1 !== 0 ? "½" : "");

  return `
    <article class="product-card" id="card-${product.id}">
      <div class="product-card-top-badges">
        ${badgeHtml}
        <span class="warranty-chip">${product.warranty}</span>
      </div>

      <div class="product-thumb-wrap" onclick="openProductModal('${product.id}')" title="Click to view ${product.name} specs">
        ${getProductSvg(product.svgType, "product-illustration")}
      </div>

      <div class="product-meta-row">
        <span class="product-category-label">${product.categoryName}</span>
        <span class="stock-status-pill">● In stock</span>
      </div>

      <h3 class="product-title" onclick="openProductModal('${product.id}')">${product.name}</h3>

      <div class="product-rating-row">
        <span class="stars" aria-label="${product.rating} out of 5 stars">${starString}</span>
        <span class="rating-score">${product.rating}</span>
        <span class="reviews-count">(${product.reviewsCount})</span>
      </div>

      <p class="product-short-desc">${product.shortDescription}</p>

      <div class="product-pricing-wrap">
        <span class="product-price">$${product.price}</span>
        ${originalPriceHtml}
      </div>

      <div class="card-action-btns">
        <button class="btn-quick-view" onclick="openProductModal('${product.id}')">Quick View</button>
        <button class="btn-add-to-cart" onclick="addToCart('${product.id}', 1)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <span>Add</span>
        </button>
      </div>
    </article>
  `;
}

// --- PRODUCT DETAIL MODAL ---
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  state.modalProduct = product;
  state.modalQuantity = 1;

  elements.modalIllustrationWrap.innerHTML = getProductSvg(product.svgType, "modal-illustration-svg");
  elements.modalWarrantyText.textContent = product.warranty;
  elements.modalProductCat.textContent = product.categoryName;
  elements.modalProductName.textContent = product.name;
  elements.modalStars.textContent = "★".repeat(Math.floor(product.rating)) + ` ${product.rating} (${product.reviewsCount} verified reviews)`;
  elements.modalPrice.textContent = `$${product.price}`;
  elements.modalOriginalPrice.textContent = product.originalPrice ? `$${product.originalPrice}` : "";
  elements.modalDesc.textContent = product.shortDescription;

  // Specs Table
  elements.modalSpecsTable.innerHTML = Object.entries(product.specs)
    .map(([key, val]) => `
      <tr>
        <td class="spec-key">${key}</td>
        <td class="spec-val">${val}</td>
      </tr>
    `).join("");

  // In the Box
  elements.modalInTheBoxList.innerHTML = product.inTheBox
    .map((item) => `<li>${item}</li>`)
    .join("");

  // Best Suited For
  elements.modalBestSuited.innerHTML = `<strong>Best Suited For:</strong> <span>${product.bestSuitedFor}</span>`;

  // Quantity
  elements.modalQtyDisplay.textContent = state.modalQuantity;

  elements.productModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  elements.productModal.classList.remove("open");
  state.modalProduct = null;
  document.body.style.overflow = "";
}

// --- CART LOGIC ---
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      svgType: product.svgType,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${quantity}x "${product.name}" to your cart!`, "green");
}

function updateCartItemQuantity(productId, delta) {
  const item = state.cart.find((i) => i.productId === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((i) => i.productId !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  const item = state.cart.find((i) => i.productId === productId);
  state.cart = state.cart.filter((i) => i.productId !== productId);
  saveCart();
  updateCartUI();
  if (item) {
    showToast(`Removed "${item.name}" from your cart.`, "orange");
  }
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Badge count
  elements.cartCountBadge.textContent = totalCount;
  elements.cartItemsCountText.textContent = `(${totalCount} item${totalCount === 1 ? "" : "s"})`;

  // Free delivery calculation ($75 threshold)
  const threshold = 75;
  const isFreeDelivery = subtotal >= threshold;
  const shippingFee = state.cart.length === 0 ? 0 : (isFreeDelivery ? 0 : 5.99);
  const total = subtotal + shippingFee;

  if (isFreeDelivery) {
    elements.freeDeliveryStatus.innerHTML = `<span>🎉 <strong>You've unlocked Free Standard Delivery!</strong></span>`;
    elements.freeDeliveryProgress.style.width = "100%";
    elements.freeDeliveryProgress.style.background = "#10B981";
  } else {
    const diff = (threshold - subtotal).toFixed(2);
    const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
    elements.freeDeliveryStatus.innerHTML = `<span>Add <strong>$${diff}</strong> more to get Free Delivery</span>`;
    elements.freeDeliveryProgress.style.width = `${pct}%`;
    elements.freeDeliveryProgress.style.background = "linear-gradient(90deg, #2F6BFF 0%, #10B981 100%)";
  }

  // Summary row text
  elements.cartSubtotalText.textContent = `$${subtotal.toFixed(2)}`;
  elements.cartShippingText.textContent = shippingFee === 0 ? (state.cart.length === 0 ? "$0.00" : "FREE") : `$${shippingFee.toFixed(2)}`;
  elements.cartTotalText.textContent = `$${total.toFixed(2)}`;

  // Cart item markup
  if (state.cart.length === 0) {
    elements.cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <p>Your cart is empty.</p>
      </div>
    `;
    return;
  }

  elements.cartItemsList.innerHTML = state.cart.map((item) => `
    <div class="cart-item" id="cart-item-${item.productId}">
      <div class="cart-item-thumb">
        ${getProductSvg(item.svgType, "cart-item-svg")}
      </div>
      <div class="cart-item-info">
        <span class="cart-item-title">${item.name}</span>
        <span class="cart-item-price">$${item.price} each</span>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateCartItemQuantity('${item.productId}', -1)" aria-label="Decrease quantity">-</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartItemQuantity('${item.productId}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item-remove-btn" onclick="removeCartItem('${item.productId}')" aria-label="Remove item" title="Remove">✕</button>
    </div>
  `).join("");
}

function openCart() {
  elements.cartDrawer.classList.add("open");
  elements.cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  elements.cartDrawer.classList.remove("open");
  elements.cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// --- TOAST NOTIFICATIONS (Top Right: keeps bottom-right clear for chatbot widget!) ---
function showToast(message, type = "blue") {
  const toast = document.createElement("div");
  toast.className = `toast ${type === "orange" ? "toast-orange" : (type === "green" ? "toast-green" : "")}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(30px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 3000);
}

// --- NEWSLETTER SIGNUP (Visual only) ---
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (input && input.value) {
    showToast(`Thanks for subscribing! Updates will be sent to ${input.value}.`, "green");
    input.value = "";
  }
}
