/**
 * Ponno / Nexora - Application Logic
 * Interactive tabs, live countdown timers, wishlist toggle, modal & cart drawer.
 */

// Application State
const appState = {
  cart: [],
  active4ColTab: "new",
  activeCompactTab: "featured",
  modalProduct: null,
  hotDealSeconds: 1723 * 86400 + 8 * 3600 + 59 * 60 + 50,
  tileTimerSeconds: 14 * 86400 + 12 * 3600 + 30 * 60 + 45
};

// DOM References
const dom = {
  // Navigation & Cart
  openCartBtn: document.getElementById("openCartBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartBackdrop: document.getElementById("cartBackdrop"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartCountBadge: document.getElementById("cartCountBadge"),
  cartPanelItems: document.getElementById("cartPanelItems"),
  cartSubtotalVal: document.getElementById("cartSubtotalVal"),

  // 4-Column Grid
  products4ColGrid: document.getElementById("products4ColGrid"),
  tabButtons: document.querySelectorAll(".tab-btn"),

  // Compact 3x3 Grid
  compact3x3Grid: document.getElementById("compact3x3Grid"),
  compactSubtabs: document.querySelectorAll(".compact-tab-link"),

  // Modal
  productModal: document.getElementById("productModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalImg: document.getElementById("modalImg"),
  modalCategory: document.getElementById("modalCategory"),
  modalTitle: document.getElementById("modalTitle"),
  modalPrice: document.getElementById("modalPrice"),
  modalOriginal: document.getElementById("modalOriginal"),
  modalDesc: document.getElementById("modalDesc"),
  modalSpecs: document.getElementById("modalSpecs"),
  modalAddCartBtn: document.getElementById("modalAddCartBtn"),

  // Countdowns
  cdDays: document.getElementById("cdDays"),
  cdHours: document.getElementById("cdHours"),
  cdMins: document.getElementById("cdMins"),
  cdSecs: document.getElementById("cdSecs"),
  p1Days: document.getElementById("p1Days"),
  p1Hours: document.getElementById("p1Hours"),
  p1Mins: document.getElementById("p1Mins"),
  p1Secs: document.getElementById("p1Secs"),
  p3Days: document.getElementById("p3Days"),
  p3Hours: document.getElementById("p3Hours"),
  p3Mins: document.getElementById("p3Mins"),
  p3Secs: document.getElementById("p3Secs"),

  // Back to Top & Toast
  backToTopBtn: document.getElementById("backToTopBtn"),
  toastStack: document.getElementById("toastStack")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initCart();
  startCountdownTimers();
  bindEvents();
});

// --- CART STATE ---
function initCart() {
  try {
    const saved = localStorage.getItem("ponno_cart");
    if (saved) {
      appState.cart = JSON.parse(saved);
    }
  } catch (e) {
    appState.cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("ponno_cart", JSON.stringify(appState.cart));
  } catch (e) {}
}

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS.find((p) => p.id === productId);
  if (!prod) return;

  const existing = appState.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    appState.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      quantity: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${prod.name}" to cart!`, "blue");
}

function updateCartQty(productId, delta) {
  const item = appState.cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    appState.cart = appState.cart.filter((i) => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(productId) {
  appState.cart = appState.cart.filter((i) => i.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const totalQty = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = appState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (dom.cartCountBadge) {
    dom.cartCountBadge.textContent = totalQty;
  }

  if (dom.cartSubtotalVal) {
    dom.cartSubtotalVal.textContent = `$${subtotal.toFixed(2)}`;
  }

  if (dom.cartPanelItems) {
    if (appState.cart.length === 0) {
      dom.cartPanelItems.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: #9CA3AF;">
          <p>Your cart is empty.</p>
        </div>
      `;
    } else {
      dom.cartPanelItems.innerHTML = appState.cart.map((item) => `
        <div class="cart-item-row">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span class="cart-item-price">$${item.price.toFixed(2)}</span>
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
              <span style="font-size: 0.8rem; font-weight: 700; min-width: 16px; text-align: center;">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem('${item.id}')" title="Remove">&times;</button>
        </div>
      `).join("");
    }
  }
}

function openCart() {
  dom.cartDrawer.classList.add("open");
  dom.cartBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  dom.cartDrawer.classList.remove("open");
  dom.cartBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// --- PRODUCT MODAL ---
function openProductModal(productId) {
  const prod = PRODUCTS.find((p) => p.id === productId);
  if (!prod) return;

  appState.modalProduct = prod;

  dom.modalImg.src = prod.image;
  dom.modalImg.alt = prod.name;
  dom.modalCategory.textContent = prod.categoryName;
  dom.modalTitle.textContent = prod.name;
  dom.modalPrice.textContent = `$${prod.price.toFixed(2)}`;
  dom.modalOriginal.textContent = prod.originalPrice ? `$${prod.originalPrice.toFixed(2)}` : "";
  dom.modalDesc.textContent = prod.shortDescription;

  // Specs Table
  if (prod.specs) {
    dom.modalSpecs.innerHTML = Object.entries(prod.specs)
      .map(([k, v]) => `
        <tr>
          <td class="key">${k}</td>
          <td class="val">${v}</td>
        </tr>
      `).join("");
  }

  dom.modalAddCartBtn.onclick = () => {
    addToCart(prod.id, 1);
    closeProductModal();
  };

  dom.productModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  dom.productModal.classList.remove("open");
  appState.modalProduct = null;
  document.body.style.overflow = "";
}

// --- COUNTDOWN TIMERS ---
function startCountdownTimers() {
  function formatPad(num) {
    return num.toString().padStart(2, "0");
  }

  setInterval(() => {
    // Hot deal
    if (appState.hotDealSeconds > 0) {
      appState.hotDealSeconds--;
      const d = Math.floor(appState.hotDealSeconds / 86400);
      const h = Math.floor((appState.hotDealSeconds % 86400) / 3600);
      const m = Math.floor((appState.hotDealSeconds % 3600) / 60);
      const s = appState.hotDealSeconds % 60;

      if (dom.cdDays) dom.cdDays.textContent = d;
      if (dom.cdHours) dom.cdHours.textContent = formatPad(h);
      if (dom.cdMins) dom.cdMins.textContent = formatPad(m);
      if (dom.cdSecs) dom.cdSecs.textContent = formatPad(s);
    }

    // Product tiles countdown
    if (appState.tileTimerSeconds > 0) {
      appState.tileTimerSeconds--;
      const td = Math.floor(appState.tileTimerSeconds / 86400);
      const th = Math.floor((appState.tileTimerSeconds % 86400) / 3600);
      const tm = Math.floor((appState.tileTimerSeconds % 3600) / 60);
      const ts = appState.tileTimerSeconds % 60;

      const p1d = formatPad(td);
      const p1h = formatPad(th);
      const p1m = formatPad(tm);
      const p1s = formatPad(ts);

      if (dom.p1Days) dom.p1Days.textContent = p1d;
      if (dom.p1Hours) dom.p1Hours.textContent = p1h;
      if (dom.p1Mins) dom.p1Mins.textContent = p1m;
      if (dom.p1Secs) dom.p1Secs.textContent = p1s;

      if (dom.p3Days) dom.p3Days.textContent = p1d;
      if (dom.p3Hours) dom.p3Hours.textContent = p1h;
      if (dom.p3Mins) dom.p3Mins.textContent = p1m;
      if (dom.p3Secs) dom.p3Secs.textContent = p1s;
    }
  }, 1000);
}

// --- WISHLIST TOGGLE ---
function toggleWishlist(btn) {
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    btn.style.color = "#EF4444";
    showToast("Added item to your Wishlist!", "blue");
  } else {
    btn.style.color = "#9CA3AF";
    showToast("Removed item from your Wishlist.", "blue");
  }
}

// --- EVENT BINDINGS ---
function bindEvents() {
  // Cart Drawer
  if (dom.openCartBtn) dom.openCartBtn.addEventListener("click", openCart);
  if (dom.closeCartBtn) dom.closeCartBtn.addEventListener("click", closeCart);
  if (dom.cartBackdrop) dom.cartBackdrop.addEventListener("click", closeCart);

  // Modal
  if (dom.closeModalBtn) dom.closeModalBtn.addEventListener("click", closeProductModal);
  if (dom.productModal) {
    dom.productModal.addEventListener("click", (e) => {
      if (e.target === dom.productModal) closeProductModal();
    });
  }

  // Keyboard Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCart();
    }
  });

  // 4-Column Grid Tabs
  dom.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      dom.tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      appState.active4ColTab = btn.dataset.tab;
      render4ColGrid(appState.active4ColTab);
    });
  });

  // Compact 3x3 Tabs
  dom.compactSubtabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      dom.compactSubtabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      appState.activeCompactTab = tab.dataset.subtab;
      showToast(`Filtered: ${tab.textContent}`, "blue");
    });
  });

  // Back to Top
  if (dom.backToTopBtn) {
    dom.backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Filter 4-Column Grid dynamically
function render4ColGrid(tag) {
  let filtered = PRODUCTS.filter((p) => p.tags && p.tags.includes(tag));
  if (filtered.length < 4) {
    filtered = PRODUCTS.slice(3, 7);
  } else {
    filtered = filtered.slice(0, 4);
  }

  dom.products4ColGrid.style.opacity = "0.5";
  dom.products4ColGrid.style.transform = "translateY(6px)";
  dom.products4ColGrid.style.transition = "all 0.25s ease";

  setTimeout(() => {
    dom.products4ColGrid.innerHTML = filtered.map((prod, idx) => {
      const countdownHtml = (idx === 0 || idx === 2) ? `
        <div class="tile-countdown-box">
          <span class="tile-timer-unit">00</span><span class="tile-timer-lbl">Days</span>
          <span class="tile-timer-unit">00</span><span class="tile-timer-lbl">Hrs</span>
          <span class="tile-timer-unit">00</span><span class="tile-timer-lbl">Min</span>
          <span class="tile-timer-unit">00</span><span class="tile-timer-lbl">Secs</span>
        </div>
      ` : "";

      const strikePriceHtml = prod.originalPrice ? `<span class="tile-strike-price">$${prod.originalPrice.toFixed(2)}</span>` : "";

      return `
        <article class="product-tile-card">
          <button class="wishlist-heart-btn" aria-label="Add to wishlist" onclick="toggleWishlist(this)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          ${countdownHtml}
          <div class="tile-thumb-wrap" onclick="openProductModal('${prod.id}')">
            <img src="${prod.image}" alt="${prod.name}">
          </div>
          <h3 class="tile-title" onclick="openProductModal('${prod.id}')">${prod.name}</h3>
          <div class="tile-price-row">
            <span class="tile-current-price">$${prod.price.toFixed(2)}</span>
            ${strikePriceHtml}
          </div>
          <div class="star-rating-row">
            <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
          </div>
          <div class="tile-quick-actions">
            <button class="btn-tile-cart" onclick="addToCart('${prod.id}', 1)">Add to Cart</button>
            <button class="btn-tile-view" onclick="openProductModal('${prod.id}')">View</button>
          </div>
        </article>
      `;
    }).join("");

    dom.products4ColGrid.style.opacity = "1";
    dom.products4ColGrid.style.transform = "translateY(0)";
  }, 200);
}

// Toast System (Top-right positioned to keep bottom-right clear for chatbot widget!)
function showToast(message, type = "blue") {
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;
  dom.toastStack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

function handleFooterNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById("footerNewsletterEmail");
  if (emailInput && emailInput.value) {
    showToast(`Thank you! Subscription confirmed for ${emailInput.value}.`, "blue");
    emailInput.value = "";
  }
}
