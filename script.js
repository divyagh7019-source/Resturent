/* ============================================================================
   SmartBite — Main application
   ============================================================================ */

/* ---------- 1. DATA ---------- */
const CATEGORIES = [
  { id: "indian",    label: "Indian",    emoji: "🍛" },
  { id: "pizza",     label: "Pizza",     emoji: "🍕" },
  { id: "burgers",   label: "Burgers",   emoji: "🍔" },
  { id: "chinese",   label: "Chinese",   emoji: "🥡" },
  { id: "desserts",  label: "Desserts",  emoji: "🍰" },
  { id: "beverages", label: "Beverages", emoji: "🥤" },
];

const IMG = (id) => `https://images.unsplash.com/${id}?w=600&q=70&auto=format&fit=crop`;

const PRODUCTS = [
  // INDIAN
  { id:"in-001", name:"Butter Chicken", category:"indian", price:349, rating:4.8, prepTime:25, isVeg:false, isBestseller:true, popularity:95, image:IMG("photo-1603894584373-5ac82b2ae398"), description:"Tandoori chicken simmered in a silky tomato-butter gravy.", tags:["creamy"], customizable:true, options:{ spice:["Mild","Medium","Hot"], addons:[{id:"naan",name:"Butter Naan",price:60},{id:"rice",name:"Jeera Rice",price:80}] } },
  { id:"in-002", name:"Paneer Tikka Masala", category:"indian", price:299, rating:4.7, prepTime:22, isVeg:true, isBestseller:true, popularity:90, image:IMG("photo-1631452180519-c014fe946bc7"), description:"Chargrilled paneer in a rich, spiced tomato masala.", tags:["spicy"], customizable:true, options:{ spice:["Mild","Medium","Hot"], addons:[{id:"naan",name:"Butter Naan",price:60},{id:"raita",name:"Raita",price:50}] } },
  { id:"in-003", name:"Hyderabadi Biryani", category:"indian", price:329, rating:4.9, prepTime:30, isVeg:false, isBestseller:true, popularity:98, image:IMG("photo-1563379091339-03b21ab4a4f8"), description:"Fragrant basmati layered with spiced chicken and saffron.", tags:["aromatic"], customizable:true, options:{ spice:["Medium","Hot"], addons:[{id:"raita",name:"Raita",price:50},{id:"salad",name:"Onion Salad",price:40}] } },
  { id:"in-004", name:"Masala Dosa", category:"indian", price:179, rating:4.6, prepTime:15, isVeg:true, isBestseller:false, popularity:80, image:IMG("photo-1630383249896-424e482df921"), description:"Crispy rice crepe with spiced potato filling and chutneys.", tags:["crispy"], customizable:true, options:{ addons:[{id:"sambar",name:"Extra Sambar",price:30},{id:"coconut",name:"Coconut Chutney",price:25}] } },
  { id:"in-005", name:"Chole Bhature", category:"indian", price:199, rating:4.5, prepTime:18, isVeg:true, isBestseller:false, popularity:75, image:IMG("photo-1626074353765-517a681e40be"), description:"Spiced chickpea curry served with fluffy fried bread.", tags:["comfort"], customizable:false },
  { id:"in-006", name:"Dal Makhani", category:"indian", price:249, rating:4.7, prepTime:20, isVeg:true, isBestseller:false, popularity:82, image:IMG("photo-1546833999-b9f581a1996d"), description:"Slow-cooked black lentils finished with cream and butter.", tags:["creamy"], customizable:true, options:{ spice:["Mild","Medium"], addons:[{id:"naan",name:"Butter Naan",price:60}] } },

  // PIZZA
  { id:"pz-001", name:"Margherita Pizza", category:"pizza", price:279, rating:4.6, prepTime:20, isVeg:true, isBestseller:true, popularity:88, image:IMG("photo-1604068549290-dea0e4a305ca"), description:"Classic tomato, mozzarella, and fresh basil on a thin crust.", tags:["classic"], customizable:true, options:{ size:[{id:"reg",name:"Regular",priceDelta:0},{id:"med",name:"Medium",priceDelta:80},{id:"lg",name:"Large",priceDelta:160}], crust:["Classic","Thin","Cheese Burst"], addons:[{id:"cheese",name:"Extra Cheese",price:60},{id:"olives",name:"Olives",price:40}] } },
  { id:"pz-002", name:"Pepperoni Pizza", category:"pizza", price:399, rating:4.8, prepTime:22, isVeg:false, isBestseller:true, popularity:94, image:IMG("photo-1628840042765-356cda07504e"), description:"Loaded with spicy pepperoni and molten mozzarella.", tags:["spicy"], customizable:true, options:{ size:[{id:"reg",name:"Regular",priceDelta:0},{id:"med",name:"Medium",priceDelta:80},{id:"lg",name:"Large",priceDelta:160}], crust:["Classic","Thin","Cheese Burst"], addons:[{id:"cheese",name:"Extra Cheese",price:60}] } },
  { id:"pz-003", name:"Farmhouse Pizza", category:"pizza", price:329, rating:4.5, prepTime:20, isVeg:true, isBestseller:false, popularity:78, image:IMG("photo-1565299624946-b28f40a0ae38"), description:"Bell peppers, onion, tomato, and mushroom on a cheesy base.", tags:["veggie"], customizable:true, options:{ size:[{id:"reg",name:"Regular",priceDelta:0},{id:"med",name:"Medium",priceDelta:80}], crust:["Classic","Thin"], addons:[{id:"cheese",name:"Extra Cheese",price:60}] } },
  { id:"pz-004", name:"BBQ Chicken Pizza", category:"pizza", price:429, rating:4.7, prepTime:24, isVeg:false, isBestseller:false, popularity:85, image:IMG("photo-1565299507177-b0ac66763828"), description:"Smoky BBQ sauce, grilled chicken, and red onions.", tags:["smoky"], customizable:true, options:{ size:[{id:"reg",name:"Regular",priceDelta:0},{id:"med",name:"Medium",priceDelta:80},{id:"lg",name:"Large",priceDelta:160}], crust:["Classic","Thin","Cheese Burst"], addons:[{id:"cheese",name:"Extra Cheese",price:60}] } },
  { id:"pz-005", name:"Cheese Burst Pizza", category:"pizza", price:359, rating:4.6, prepTime:22, isVeg:true, isBestseller:true, popularity:89, image:IMG("photo-1513104890138-7c749659a591"), description:"A molten cheese-stuffed crust with a classic topping blend.", tags:["cheesy"], customizable:true, options:{ size:[{id:"med",name:"Medium",priceDelta:0},{id:"lg",name:"Large",priceDelta:120}], crust:["Cheese Burst"], addons:[{id:"cheese",name:"Extra Cheese",price:60}] } },
  { id:"pz-006", name:"Veggie Supreme Pizza", category:"pizza", price:349, rating:4.4, prepTime:20, isVeg:true, isBestseller:false, popularity:72, image:IMG("photo-1571407970349-bc81e7e96d47"), description:"Loaded with the freshest garden vegetables.", tags:["veggie"], customizable:true, options:{ size:[{id:"reg",name:"Regular",priceDelta:0},{id:"med",name:"Medium",priceDelta:80}], crust:["Classic","Thin"], addons:[{id:"cheese",name:"Extra Cheese",price:60}] } },

  // BURGERS
  { id:"bg-001", name:"Classic Cheeseburger", category:"burgers", price:229, rating:4.7, prepTime:15, isVeg:false, isBestseller:true, popularity:92, image:IMG("photo-1568901346375-23c9450c58cd"), description:"Juicy beef patty, cheddar, lettuce, tomato, and house sauce.", tags:["classic"], customizable:true, options:{ size:[{id:"single",name:"Single",priceDelta:0},{id:"double",name:"Double",priceDelta:100}], addons:[{id:"fries",name:"Fries",price:80},{id:"bacon",name:"Bacon",price:70}] } },
  { id:"bg-002", name:"Paneer Burger", category:"burgers", price:199, rating:4.5, prepTime:14, isVeg:true, isBestseller:false, popularity:76, image:IMG("photo-1571091718767-18b5b1457add"), description:"Crispy paneer patty with mint mayo and fresh veggies.", tags:["veg"], customizable:true, options:{ size:[{id:"single",name:"Single",priceDelta:0},{id:"double",name:"Double",priceDelta:80}], addons:[{id:"fries",name:"Fries",price:80}] } },
  { id:"bg-003", name:"BBQ Bacon Burger", category:"burgers", price:299, rating:4.8, prepTime:16, isVeg:false, isBestseller:true, popularity:90, image:IMG("photo-1550547660-d9450f859349"), description:"Smoky BBQ, crispy bacon, and melted cheese on a toasted bun.", tags:["smoky"], customizable:true, options:{ size:[{id:"single",name:"Single",priceDelta:0},{id:"double",name:"Double",priceDelta:100}], addons:[{id:"fries",name:"Fries",price:80},{id:"onion",name:"Onion Rings",price:90}] } },
  { id:"bg-004", name:"Chicken Zinger", category:"burgers", price:249, rating:4.6, prepTime:15, isVeg:false, isBestseller:false, popularity:83, image:IMG("photo-1606755962773-d324e0a13086"), description:"Spicy crispy chicken fillet with lettuce and mayo.", tags:["spicy"], customizable:true, options:{ size:[{id:"single",name:"Single",priceDelta:0},{id:"double",name:"Double",priceDelta:100}], addons:[{id:"fries",name:"Fries",price:80}] } },
  { id:"bg-005", name:"Mushroom Swiss Burger", category:"burgers", price:269, rating:4.5, prepTime:16, isVeg:true, isBestseller:false, popularity:70, image:IMG("photo-1553979459-d2229ba7433a"), description:"Sautéed mushrooms and Swiss cheese on a juicy patty.", tags:["umami"], customizable:true, options:{ size:[{id:"single",name:"Single",priceDelta:0},{id:"double",name:"Double",priceDelta:80}], addons:[{id:"fries",name:"Fries",price:80}] } },

  // CHINESE
  { id:"ch-001", name:"Veg Hakka Noodles", category:"chinese", price:189, rating:4.5, prepTime:14, isVeg:true, isBestseller:false, popularity:80, image:IMG("photo-1585032226651-759b368d7246"), description:"Stir-fried noodles with crunchy vegetables and soy.", tags:["wok"], customizable:true, options:{ spice:["Mild","Medium","Hot"], addons:[{id:"manchurian",name:"Veg Manchurian",price:90}] } },
  { id:"ch-002", name:"Chicken Manchurian", category:"chinese", price:249, rating:4.7, prepTime:18, isVeg:false, isBestseller:true, popularity:88, image:IMG("photo-1626804475297-41608ea09aeb"), description:"Crispy chicken tossed in a tangy Manchurian sauce.", tags:["tangy"], customizable:true, options:{ spice:["Mild","Medium","Hot"], addons:[{id:"rice",name:"Fried Rice",price:100}] } },
  { id:"ch-003", name:"Veg Fried Rice", category:"chinese", price:179, rating:4.4, prepTime:13, isVeg:true, isBestseller:false, popularity:74, image:IMG("photo-1603133872878-684f208fb84b"), description:"Wok-tossed rice with fresh vegetables and scallions.", tags:["wok"], customizable:true, options:{ spice:["Mild","Medium"], addons:[{id:"manchurian",name:"Veg Manchurian",price:90}] } },
  { id:"ch-004", name:"Chilli Paneer", category:"chinese", price:229, rating:4.6, prepTime:16, isVeg:true, isBestseller:true, popularity:84, image:IMG("photo-1633945274405-b6c8069047b0"), description:"Cubes of paneer in a spicy chilli-garlic sauce.", tags:["spicy"], customizable:true, options:{ spice:["Medium","Hot"], addons:[{id:"rice",name:"Fried Rice",price:100}] } },
  { id:"ch-005", name:"Honey Chilli Potato", category:"chinese", price:169, rating:4.5, prepTime:14, isVeg:true, isBestseller:false, popularity:78, image:IMG("photo-1607330289024-1535c6b4e1c1"), description:"Crispy potato fingers glazed in sweet-and-spicy honey chilli.", tags:["sweet"], customizable:false },

  // DESSERTS
  { id:"ds-001", name:"Chocolate Lava Cake", category:"desserts", price:149, rating:4.9, prepTime:10, isVeg:true, isBestseller:true, popularity:96, image:IMG("photo-1606313564200-e75d5e30476c"), description:"Warm chocolate cake with a molten center.", tags:["chocolate"], customizable:true, options:{ addons:[{id:"icecream",name:"Vanilla Ice Cream",price:60}] } },
  { id:"ds-002", name:"Gulab Jamun (2 pcs)", category:"desserts", price:99, rating:4.6, prepTime:8, isVeg:true, isBestseller:false, popularity:80, image:IMG("photo-1601303516534-bf0c9d5e57c1"), description:"Soft milk dumplings in warm rose-cardamom syrup.", tags:["indian"], customizable:false },
  { id:"ds-003", name:"Tiramisu", category:"desserts", price:199, rating:4.8, prepTime:10, isVeg:true, isBestseller:true, popularity:91, image:IMG("photo-1571877227200-a0d98ea607e9"), description:"Espresso-soaked ladyfingers layered with mascarpone cream.", tags:["coffee"], customizable:false },
  { id:"ds-004", name:"Red Velvet Slice", category:"desserts", price:179, rating:4.7, prepTime:8, isVeg:true, isBestseller:false, popularity:82, image:IMG("photo-1586985289906-406988974504"), description:"Classic red velvet with cream cheese frosting.", tags:["cake"], customizable:false },

  // BEVERAGES
  { id:"bv-001", name:"Masala Chai", category:"beverages", price:69, rating:4.7, prepTime:6, isVeg:true, isBestseller:true, popularity:90, image:IMG("photo-1597318181409-cf64d0b5d8a2"), description:"Aromatic spiced Indian tea brewed with milk.", tags:["hot"], customizable:true, options:{ addons:[{id:"extra",name:"Extra Shot",price:20}] } },
  { id:"bv-002", name:"Cold Coffee", category:"beverages", price:129, rating:4.6, prepTime:7, isVeg:true, isBestseller:false, popularity:84, image:IMG("photo-1461023058943-07fcbe16d735"), description:"Chilled coffee blended with milk and a hint of chocolate.", tags:["cold"], customizable:true, options:{ size:[{id:"reg",name:"Regular",priceDelta:0},{id:"lg",name:"Large",priceDelta:40}], addons:[{id:"icecream",name:"Ice Cream Scoop",price:50}] } },
  { id:"bv-003", name:"Fresh Lime Soda", category:"beverages", price:89, rating:4.4, prepTime:5, isVeg:true, isBestseller:false, popularity:72, image:IMG("photo-1621263764928-df1444c5e859"), description:"Refreshing lime with soda — sweet or salted.", tags:["refreshing"], customizable:true, options:{ spice:["Sweet","Salted","Mixed"] } },
  { id:"bv-004", name:"Mango Lassi", category:"beverages", price:119, rating:4.7, prepTime:6, isVeg:true, isBestseller:true, popularity:86, image:IMG("photo-1571091718767-18b5b1457add"), description:"Creamy yogurt smoothie with sweet alphonso mango.", tags:["yogurt"], customizable:false },
];

const COUPONS = {
  WELCOME10: { type: "percent", value: 10, minSubtotal: 199, maxDiscount: 150, label: "10% off (max ₹150)" },
  SAVE50:    { type: "flat",    value: 50, minSubtotal: 499, label: "₹50 off on ₹499+" },
  FREESHIP:  { type: "shipping", value: 0, minSubtotal: 0, label: "Free delivery" },
};

const TAX_RATE = 0.05;
const DELIVERY_FEE = 49;
const FREE_DELIVERY_THRESHOLD = 499;

/* ---------- 2. UTILITIES ---------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const formatINR = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Math.round(n));

const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[c]));

const safeRead = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch { return fallback; }
};
const safeWrite = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* quota */ }
};

const bus = (() => {
  const listeners = new Map();
  return {
    on(event, fn) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(fn);
      return () => listeners.get(event).delete(fn);
    },
    emit(event, payload) {
      listeners.get(event)?.forEach((fn) => fn(payload));
    },
  };
})();

/* ---------- 3. STORE ---------- */
const STORAGE_KEYS = {
  cart: "smartbite:v1:cart",
  favorites: "smartbite:v1:favorites",
  coupon: "smartbite:v1:coupon",
  theme: "smartbite:v1:theme",
  orders: "smartbite:v1:orders",
  products: "smartbite:v1:products",
};

const store = {
  state: {
    cart: safeRead(STORAGE_KEYS.cart, []),
    favorites: safeRead(STORAGE_KEYS.favorites, []),
    coupon: safeRead(STORAGE_KEYS.coupon, null),
    theme: safeRead(STORAGE_KEYS.theme, null),
    products: safeRead(STORAGE_KEYS.products, null),
  },
  getProducts() { return this.state.products || PRODUCTS; },
  setCart(items) {
    this.state.cart = items;
    safeWrite(STORAGE_KEYS.cart, items);
    bus.emit("cart:changed", items);
  },
  setFavorites(ids) {
    this.state.favorites = ids;
    safeWrite(STORAGE_KEYS.favorites, ids);
    bus.emit("favorites:changed", ids);
  },
  setCoupon(code) {
    this.state.coupon = code;
    safeWrite(STORAGE_KEYS.coupon, code);
    bus.emit("coupon:changed", code);
  },
  setProducts(list) {
    this.state.products = list;
    safeWrite(STORAGE_KEYS.products, list);
    bus.emit("products:changed", list);
  },
  setTheme(theme) {
    this.state.theme = theme;
    safeWrite(STORAGE_KEYS.theme, theme);
    bus.emit("theme:changed", theme);
  },
};

/* ---------- 4. CART / COUPONS / FAVORITES ---------- */
function makeLineId(productId, options, instructions) {
  const sig = JSON.stringify(options || {}) + "|" + (instructions || "").trim().toLowerCase();
  let hash = 0;
  for (let i = 0; i < sig.length; i++) hash = (hash * 31 + sig.charCodeAt(i)) | 0;
  return `${productId}:${hash}`;
}

function unitPriceFor(product, options) {
  let price = product.price;
  if (!options) return price;
  if (options.size && product.options?.size) {
    const s = product.options.size.find((x) => x.id === options.size);
    if (s) price += s.priceDelta;
  }
  if (Array.isArray(options.addons)) {
    options.addons.forEach((aid) => {
      const a = product.options?.addons?.find((x) => x.id === aid);
      if (a) price += a.price;
    });
  }
  return price;
}

const cart = {
  add(product, { options = null, instructions = "", qty = 1 } = {}) {
    const lineId = makeLineId(product.id, options, instructions);
    const items = [...store.state.cart];
    const existing = items.find((l) => l.lineId === lineId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        lineId,
        productId: product.id,
        name: product.name,
        image: product.image,
        unitPrice: unitPriceFor(product, options),
        qty,
        options,
        instructions,
      });
    }
    store.setCart(items);
  },
  remove(lineId) {
    store.setCart(store.state.cart.filter((l) => l.lineId !== lineId));
  },
  setQty(lineId, qty) {
    if (qty <= 0) return this.remove(lineId);
    store.setCart(store.state.cart.map((l) => l.lineId === lineId ? { ...l, qty } : l));
  },
  subtotal() {
    return store.state.cart.reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
  },
  count() {
    return store.state.cart.reduce((sum, l) => sum + l.qty, 0);
  },
  clear() { store.setCart([]); store.setCoupon(null); },
};

const coupons = {
  validate(code, subtotal) {
    const key = String(code || "").trim().toUpperCase();
    if (!key) return { ok: false, reason: "Enter a coupon code." };
    const def = COUPONS[key];
    if (!def) return { ok: false, reason: "That coupon code isn't valid." };
    if (subtotal < def.minSubtotal) {
      return { ok: false, reason: `Minimum order of ${formatINR(def.minSubtotal)} required for ${key}.` };
    }
    return { ok: true, code: key, def };
  },
  discount(code, subtotal) {
    const v = this.validate(code, subtotal);
    if (!v.ok) return 0;
    const { def } = v;
    if (def.type === "percent") {
      return Math.min(Math.round(subtotal * def.value / 100), def.maxDiscount);
    }
    if (def.type === "flat") return Math.min(def.value, subtotal);
    return 0;
  },
  isFreeShipping(code) {
    const v = this.validate(code, Infinity);
    return v.ok && v.def.type === "shipping";
  },
};

function computeTotals() {
  const subtotal = cart.subtotal();
  const code = store.state.coupon;
  const discount = code ? coupons.discount(code, subtotal) : 0;
  const taxableBase = Math.max(subtotal - discount, 0);
  const tax = Math.round(taxableBase * TAX_RATE);
  const freeShip = code && coupons.isFreeShipping(code);
  const delivery = (subtotal >= FREE_DELIVERY_THRESHOLD || freeShip || subtotal === 0) ? 0 : DELIVERY_FEE;
  const grandTotal = Math.max(taxableBase + tax + delivery, 0);
  return { subtotal, discount, tax, delivery, grandTotal, coupon: code };
}

const favorites = {
  has(id) { return store.state.favorites.includes(id); },
  toggle(id) {
    const next = this.has(id)
      ? store.state.favorites.filter((x) => x !== id)
      : [...store.state.favorites, id];
    store.setFavorites(next);
    return this.has(id);
  },
};

/* ---------- 5. TOAST ---------- */
function toast(message, type = "info") {
  const container = $("#toastContainer");
  const el = document.createElement("div");
  el.className = "toast";
  el.dataset.type = type;
  el.setAttribute("role", type === "error" ? "alert" : "status");
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity 200ms, transform 200ms";
    el.style.opacity = "0";
    el.style.transform = "translateX(120%)";
    setTimeout(() => el.remove(), 220);
  }, 2600);
}

/* ---------- 6. RENDERERS ---------- */
function starRating(rating) {
  return `<span class="rating" aria-label="Rated ${rating} out of 5">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ${rating.toFixed(1)}
  </span>`;
}

function vegBadge(isVeg) {
  return `<span class="badge-tag ${isVeg ? "badge-veg" : "badge-nonveg"}">
    <span class="veg-dot"></span>${isVeg ? "Veg" : "Non-veg"}
  </span>`;
}

function productCard(p) {
  const fav = favorites.has(p.id);
  const canCustomize = p.customizable && p.options;
  return `
    <article class="card" data-product-id="${escapeHtml(p.id)}">
      <div class="card-media">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" width="600" height="450"
             onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 4 3&quot;><rect width=&quot;4&quot; height=&quot;3&quot; fill=&quot;%23f5eee4&quot;/><text x=&quot;50%&quot; y=&quot;52%&quot; text-anchor=&quot;middle&quot; font-family=&quot;sans-serif&quot; font-size=&quot;0.3&quot; fill=&quot;%236b6259&quot;>SmartBite</text></svg>')}'" />
        <button class="fav-btn" data-action="favorite" data-id="${escapeHtml(p.id)}" aria-pressed="${fav}" aria-label="${fav ? "Remove from" : "Add to"} favorites">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${fav ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="card-body">
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${p.isBestseller ? '<span class="badge-tag badge-best">★ Bestseller</span>' : ""}
          ${vegBadge(p.isVeg)}
        </div>
        <h3 class="card-title">${escapeHtml(p.name)}</h3>
        <p class="card-desc">${escapeHtml(p.description)}</p>
        <div class="card-meta">
          ${starRating(p.rating)}
          <span>• ${p.prepTime} min</span>
        </div>
        <div class="card-footer">
          <span class="price">${formatINR(p.price)}</span>
          <button class="btn btn-primary btn-sm" data-action="add" data-id="${escapeHtml(p.id)}">
            ${canCustomize ? "Customize" : "Add"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProductsGrid(container, list, emptyMessage = "No dishes match your filters.") {
  if (!list.length) {
    container.innerHTML = `
      <div class="empty" style="grid-column:1/-1;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3>Nothing here yet</h3>
        <p>${escapeHtml(emptyMessage)}</p>
        <button class="btn btn-primary" data-nav="menu">Browse the menu</button>
      </div>
    `;
    return;
  }
  container.innerHTML = list.map(productCard).join("");
}

function renderHome() {
  const catGrid = $("#categoryGrid");
  catGrid.innerHTML = CATEGORIES.map((c) => `
    <button class="category-card" data-category="${c.id}">
      <span class="emoji" aria-hidden="true">${c.emoji}</span>
      <span>${c.label}</span>
    </button>
  `).join("");

  const featured = store.getProducts().filter((p) => p.isBestseller).slice(0, 4);
  renderProductsGrid($("#featuredGrid"), featured);
}

const menuState = {
  search: "",
  category: "all",
  vegOnly: false,
  maxPrice: 1000,
  minRating: 0,
  sort: "popular",
};

function getFilteredProducts() {
  const q = menuState.search.trim().toLowerCase();
  let list = store.getProducts().filter((p) => {
    if (q && !p.name.toLowerCase().includes(q)) return false;
    if (menuState.category !== "all" && p.category !== menuState.category) return false;
    if (menuState.vegOnly && !p.isVeg) return false;
    if (p.price > menuState.maxPrice) return false;
    if (p.rating < menuState.minRating) return false;
    return true;
  });
  const sorters = {
    "popular":    (a, b) => b.popularity - a.popularity,
    "price-asc":  (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    "rating":     (a, b) => b.rating - a.rating,
  };
  list.sort(sorters[menuState.sort] || sorters.popular);
  return list;
}

function renderCategoryChips() {
  const wrap = $("#categoryChips");
  const all = [{ id: "all", label: "All", emoji: "🍽️" }, ...CATEGORIES];
  wrap.innerHTML = all.map((c) => `
    <button class="chip" data-category-chip="${c.id}" aria-pressed="${menuState.category === c.id}">
      ${c.emoji} ${c.label}
    </button>
  `).join("");
}

function renderMenu() {
  const list = getFilteredProducts();
  $("#resultCount").textContent = `${list.length} ${list.length === 1 ? "dish" : "dishes"} found`;
  renderProductsGrid($("#menuGrid"), list, "Try adjusting your filters or search term.");
}

function renderCart() {
  const root = $("#cartRoot");
  const items = store.state.cart;
  const totals = computeTotals();

  if (!items.length) {
    root.innerHTML = `
      <div class="empty">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3>Your cart is empty</h3>
        <p>Add a few dishes to get started — we think you'll like the Butter Chicken.</p>
        <button class="btn btn-primary" data-nav="menu">Browse the menu</button>
      </div>
    `;
    return;
  }

  const couponBlock = totals.coupon
    ? `<div class="coupon-applied">
         <span>✓ ${escapeHtml(totals.coupon)} applied — ${COUPONS[totals.coupon]?.label || ""}</span>
         <button type="button" data-action="remove-coupon">Remove</button>
       </div>`
    : "";

  root.innerHTML = `
    <div class="cart-layout">
      <div class="cart-list">
        ${items.map((l) => `
          <div class="cart-line" data-line-id="${escapeHtml(l.lineId)}">
            <img src="${escapeHtml(l.image)}" alt="" width="72" height="72" loading="lazy" />
            <div class="cart-line-info">
              <h4>${escapeHtml(l.name)}</h4>
              <small>${escapeHtml(describeOptions(l.options))}${l.instructions ? ` • "${escapeHtml(l.instructions)}"` : ""}</small>
              <div class="cart-line-actions">
                <div class="qty" role="group" aria-label="Quantity">
                  <button data-action="qty-dec" data-line-id="${escapeHtml(l.lineId)}" aria-label="Decrease quantity">−</button>
                  <span aria-live="polite">${l.qty}</span>
                  <button data-action="qty-inc" data-line-id="${escapeHtml(l.lineId)}" aria-label="Increase quantity">+</button>
                </div>
                <button class="btn btn-ghost btn-sm" data-action="remove-line" data-line-id="${escapeHtml(l.lineId)}">Remove</button>
              </div>
            </div>
            <div class="cart-line-price">${formatINR(l.unitPrice * l.qty)}</div>
          </div>
        `).join("")}
      </div>

      <aside class="summary" aria-label="Order summary">
        <h3>Order summary</h3>
        ${couponBlock}
        <div class="coupon-row">
          <input id="couponInput" class="input" type="text" placeholder="Coupon code" aria-label="Coupon code" value="${totals.coupon || ""}" />
          <button class="btn btn-secondary btn-sm" data-action="apply-coupon">Apply</button>
        </div>
        <div class="summary-row"><span>Subtotal</span><strong>${formatINR(totals.subtotal)}</strong></div>
        ${totals.discount ? `<div class="summary-row"><span>Discount</span><strong style="color:var(--color-success);">−${formatINR(totals.discount)}</strong></div>` : ""}
        <div class="summary-row"><span>Tax (5% GST)</span><strong>${formatINR(totals.tax)}</strong></div>
        <div class="summary-row"><span>Delivery</span><strong>${totals.delivery === 0 ? "FREE" : formatINR(totals.delivery)}</strong></div>
        <div class="summary-divider"></div>
        <div class="summary-total"><span>Total</span><span>${formatINR(totals.grandTotal)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:var(--space-4);" data-nav="checkout">Proceed to checkout →</button>
        <button class="btn btn-ghost btn-block" style="margin-top:var(--space-2);" data-nav="menu">Continue shopping</button>
      </aside>
    </div>
  `;
}

function describeOptions(options) {
  if (!options) return "Standard";
  const parts = [];
  if (options.size && options.sizeLabel) parts.push(options.sizeLabel);
  if (options.crust) parts.push(options.crust);
  if (options.spice) parts.push(options.spice);
  if (Array.isArray(options.addons) && options.addons.length) parts.push(`+${options.addons.length} add-on(s)`);
  return parts.length ? parts.join(" • ") : "Standard";
}

function renderFavorites() {
  const list = store.getProducts().filter((p) => favorites.has(p.id));
  renderProductsGrid($("#favoritesGrid"), list, "You haven't saved any dishes yet. Tap the heart on a dish to add it here.");
}

let checkoutSubmitting = false;

function renderCheckout() {
  const root = $("#checkoutRoot");
  const items = store.state.cart;
  if (!items.length) {
    root.innerHTML = `
      <div class="empty">
        <h3>Your cart is empty</h3>
        <p>Add items to your cart before checking out.</p>
        <button class="btn btn-primary" data-nav="menu">Browse menu</button>
      </div>`;
    return;
  }
  const totals = computeTotals();

  root.innerHTML = `
    <div class="cart-layout">
      <form class="card" id="checkoutForm" novalidate style="padding:var(--space-5);">
        <h3 style="margin-bottom:var(--space-4);">Delivery details</h3>
        <div class="form-grid">
          <div class="field full">
            <label for="coName">Full name</label>
            <input class="input" id="coName" name="name" autocomplete="name" required />
            <span class="field-error" data-error-for="coName"></span>
          </div>
          <div class="field">
            <label for="coPhone">Phone (10-digit Indian)</label>
            <input class="input" id="coPhone" name="phone" inputmode="numeric" autocomplete="tel" required />
            <span class="field-error" data-error-for="coPhone"></span>
          </div>
          <div class="field">
            <label for="coEmail">Email</label>
            <input class="input" id="coEmail" name="email" type="email" autocomplete="email" required />
            <span class="field-error" data-error-for="coEmail"></span>
          </div>
          <div class="field full">
            <label for="coAddress">Delivery address</label>
            <textarea class="input" id="coAddress" name="address" rows="3" required></textarea>
            <span class="field-error" data-error-for="coAddress"></span>
          </div>
          <div class="field full">
            <label for="coNotes">Delivery instructions (optional)</label>
            <input class="input" id="coNotes" name="notes" />
          </div>
        </div>
        <p style="font-size:var(--fs-xs);color:var(--color-text-muted);margin-top:var(--space-4);">
          ⚠️ This is a simulated demo checkout. No real payment is processed and no card information is collected.
        </p>
      </form>

      <aside class="summary" aria-label="Order summary">
        <h3>Order summary</h3>
        ${items.map((l) => `
          <div class="summary-row"><span>${l.qty} × ${escapeHtml(l.name)}</span><strong>${formatINR(l.unitPrice * l.qty)}</strong></div>
        `).join("")}
        <div class="summary-divider"></div>
        <div class="summary-row"><span>Subtotal</span><strong>${formatINR(totals.subtotal)}</strong></div>
        ${totals.discount ? `<div class="summary-row"><span>Discount</span><strong style="color:var(--color-success);">−${formatINR(totals.discount)}</strong></div>` : ""}
        <div class="summary-row"><span>Tax</span><strong>${formatINR(totals.tax)}</strong></div>
        <div class="summary-row"><span>Delivery</span><strong>${totals.delivery === 0 ? "FREE" : formatINR(totals.delivery)}</strong></div>
        <div class="summary-divider"></div>
        <div class="summary-total"><span>Total</span><span>${formatINR(totals.grandTotal)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:var(--space-4);" id="placeOrderBtn" form="checkoutForm" type="submit">Place order</button>
        <button class="btn btn-ghost btn-block" style="margin-top:var(--space-2);" data-nav="cart">Back to cart</button>
      </aside>
    </div>
  `;
}

function renderOrder(order) {
  const root = $("#orderRoot");
  if (!order) {
    root.innerHTML = `<div class="empty"><h3>No recent order</h3><p>Place an order to see its tracking here.</p><button class="btn btn-primary" data-nav="menu">Browse menu</button></div>`;
    return;
  }
  const steps = ["Order Confirmed", "Preparing", "Ready for Pickup", "Delivered"];
  const etaMin = order.prepTimeMinutes || 25;

  root.innerHTML = `
    <div class="card" style="padding:var(--space-6);">
      <div style="text-align:center;margin-bottom:var(--space-5);">
        <div style="font-size:48px;">✅</div>
        <h2 style="margin-top:var(--space-3);">Order confirmed</h2>
        <p style="color:var(--color-text-muted);">Thank you, ${escapeHtml(order.customer.name)}. Your demo order <strong>${escapeHtml(order.id)}</strong> has been placed.</p>
      </div>

      <div class="timeline" id="timeline">
        ${steps.map((s, i) => `
          <div class="tl-step" data-state="${i === 0 ? "active" : "pending"}" data-step="${i}">
            <div class="tl-dot">${i + 1}</div>
            <div>
              <h4>${s}</h4>
              <p>${i === 0 ? "We've received your order." : i === 1 ? "Our chefs are on it." : i === 2 ? "Almost ready." : "Enjoy your meal!"}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <p style="text-align:center;color:var(--color-text-muted);font-size:var(--fs-sm);margin-block:var(--space-4);">
        Estimated preparation time: <strong>${etaMin} minutes</strong>. This is a simulated demo — no real order was placed.
      </p>

      <div class="summary-divider"></div>
      <h3 style="margin-top:var(--space-4);">Bill summary</h3>
      ${order.items.map((l) => `
        <div class="summary-row"><span>${l.qty} × ${escapeHtml(l.name)}</span><strong>${formatINR(l.unitPrice * l.qty)}</strong></div>
      `).join("")}
      <div class="summary-divider"></div>
      <div class="summary-row"><span>Subtotal</span><strong>${formatINR(order.totals.subtotal)}</strong></div>
      ${order.totals.discount ? `<div class="summary-row"><span>Discount</span><strong>−${formatINR(order.totals.discount)}</strong></div>` : ""}
      <div class="summary-row"><span>Tax</span><strong>${formatINR(order.totals.tax)}</strong></div>
      <div class="summary-row"><span>Delivery</span><strong>${order.totals.delivery === 0 ? "FREE" : formatINR(order.totals.delivery)}</strong></div>
      <div class="summary-total"><span>Total paid (demo)</span><span>${formatINR(order.totals.grandTotal)}</span></div>

      <div style="display:flex;gap:var(--space-3);justify-content:center;margin-top:var(--space-6);flex-wrap:wrap;">
        <button class="btn btn-primary" data-nav="menu">Order again</button>
        <button class="btn btn-secondary" data-nav="home">Back to home</button>
      </div>
    </div>
  `;

  let step = 0;
  const advance = () => {
    if (step >= steps.length - 1) return;
    step++;
    const stepsEls = $$("#timeline .tl-step");
    stepsEls.forEach((el, i) => {
      el.dataset.state = i < step ? "done" : i === step ? "active" : "pending";
    });
    if (step < steps.length - 1) setTimeout(advance, 4000);
  };
  setTimeout(advance, 4000);
}

/* ---------- 7. CUSTOMIZATION MODAL ---------- */
let modalState = null;
let lastFocused = null;

function openCustomization(product) {
  lastFocused = document.activeElement;
  modalState = {
    product,
    size: product.options?.size?.[0]?.id || null,
    crust: product.options?.crust?.[0] || null,
    spice: product.options?.spice?.[0] || null,
    addons: [],
    instructions: "",
    qty: 1,
  };
  renderModal();
  const backdrop = $("#modalBackdrop");
  backdrop.dataset.open = "true";
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#modalClose").focus(), 50);
}

function closeModal() {
  $("#modalBackdrop").dataset.open = "false";
  document.body.style.overflow = "";
  modalState = null;
  if (lastFocused) lastFocused.focus();
}

function renderModal() {
  if (!modalState) return;
  const { product } = modalState;
  $("#modalTitle").textContent = `Customize ${product.name}`;
  const body = $("#modalBody");
  const opts = product.options || {};

  let html = "";
  if (opts.size) {
    html += `<div class="option-group"><label>Size</label><div class="option-list">
      ${opts.size.map((s) => `<button type="button" class="option" data-opt="size" data-val="${s.id}" aria-pressed="${modalState.size === s.id}">${s.name}${s.priceDelta ? ` (+${formatINR(s.priceDelta)})` : ""}</button>`).join("")}
    </div></div>`;
  }
  if (opts.crust) {
    html += `<div class="option-group"><label>Crust</label><div class="option-list">
      ${opts.crust.map((c) => `<button type="button" class="option" data-opt="crust" data-val="${c}" aria-pressed="${modalState.crust === c}">${c}</button>`).join("")}
    </div></div>`;
  }
  if (opts.spice) {
    html += `<div class="option-group"><label>Spice level</label><div class="option-list">
      ${opts.spice.map((s) => `<button type="button" class="option" data-opt="spice" data-val="${s}" aria-pressed="${modalState.spice === s}">${s}</button>`).join("")}
    </div></div>`;
  }
  if (opts.addons) {
    html += `<div class="option-group"><label>Add-ons</label><div class="option-list">
      ${opts.addons.map((a) => `<button type="button" class="option" data-opt="addon" data-val="${a.id}" aria-pressed="${modalState.addons.includes(a.id)}">${a.name} (+${formatINR(a.price)})</button>`).join("")}
    </div></div>`;
  }
  html += `<div class="option-group"><label for="modalNotes">Special instructions</label>
    <input class="input" id="modalNotes" type="text" placeholder="e.g. less oil, extra spicy" value="${escapeHtml(modalState.instructions)}" /></div>`;

  body.innerHTML = html;

  const unit = unitPriceFor(product, modalState);
  const foot = $("#modalFoot");
  foot.innerHTML = `
    <div class="qty" role="group" aria-label="Quantity">
      <button type="button" data-modal="dec" aria-label="Decrease quantity">−</button>
      <span aria-live="polite">${modalState.qty}</span>
      <button type="button" data-modal="inc" aria-label="Increase quantity">+</button>
    </div>
    <div style="display:flex;gap:var(--space-3);align-items:center;">
      <strong style="font-size:var(--fs-lg);">${formatINR(unit * modalState.qty)}</strong>
      <button class="btn btn-primary" data-modal="add">Add to cart</button>
    </div>
  `;
}

/* ---------- 8. ROUTER ---------- */
function navigate(view) {
  $$("[data-view]").forEach((el) => el.classList.toggle("is-active", el.dataset.view === view));
  $$(".nav-links button").forEach((b) => b.toggleAttribute("aria-current", b.dataset.nav === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
  $("#primaryNav").dataset.open = "false";
  $("#menuToggle").setAttribute("aria-expanded", "false");

  if (view === "home") renderHome();
  if (view === "menu") { renderCategoryChips(); renderMenu(); }
  if (view === "favorites") renderFavorites();
  if (view === "cart") renderCart();
  if (view === "checkout") renderCheckout();
  if (view === "order") renderOrder(safeRead("smartbite:v1:lastOrder", null));
}

/* ---------- 9. EVENT WIRING ---------- */
function updateCartBadge() {
  const badge = $("#cartBadge");
  const n = cart.count();
  badge.textContent = n;
  badge.dataset.count = n;
}

function updateFavoritesUI() {
  const menuVisible = $('[data-view="menu"]').classList.contains("is-active");
  const favVisible = $('[data-view="favorites"]').classList.contains("is-active");
  const homeVisible = $('[data-view="home"]').classList.contains("is-active");
  if (menuVisible) renderMenu();
  if (favVisible) renderFavorites();
  if (homeVisible) renderHome();
}

document.addEventListener("click", (e) => {
  const navEl = e.target.closest("[data-nav]");
  if (navEl) { e.preventDefault(); navigate(navEl.dataset.nav); return; }

  const catEl = e.target.closest("[data-category]");
  if (catEl) { menuState.category = catEl.dataset.category; navigate("menu"); return; }

  const chip = e.target.closest("[data-category-chip]");
  if (chip) { menuState.category = chip.dataset.category; renderCategoryChips(); renderMenu(); return; }

  const actionEl = e.target.closest("[data-action]");
  if (actionEl) {
    const action = actionEl.dataset.action;
    const id = actionEl.dataset.id;
    const lineId = actionEl.dataset.lineId;

    if (action === "favorite") {
      const nowFav = favorites.toggle(id);
      toast(nowFav ? "Added to favorites ❤️" : "Removed from favorites", nowFav ? "success" : "info");
      updateFavoritesUI();
      return;
    }
    if (action === "add") {
      const product = store.getProducts().find((p) => p.id === id);
      if (!product) return;
      if (product.customizable && product.options) openCustomization(product);
      else { cart.add(product); toast(`${product.name} added to cart`, "success"); }
      return;
    }
    if (action === "qty-inc") {
      const line = store.state.cart.find((l) => l.lineId === lineId);
      if (line) cart.setQty(lineId, line.qty + 1);
      renderCart();
      return;
    }
    if (action === "qty-dec") {
      const line = store.state.cart.find((l) => l.lineId === lineId);
      if (line) cart.setQty(lineId, line.qty - 1);
      renderCart();
      return;
    }
    if (action === "remove-line") {
      cart.remove(lineId);
      toast("Item removed from cart", "info");
      renderCart();
      return;
    }
    if (action === "apply-coupon") {
      const code = $("#couponInput").value;
      const check = coupons.validate(code, cart.subtotal());
      if (!check.ok) { toast(check.reason, "error"); return; }
      store.setCoupon(check.code);
      toast(`Coupon ${check.code} applied`, "success");
      renderCart();
      return;
    }
    if (action === "remove-coupon") {
      store.setCoupon(null);
      toast("Coupon removed", "info");
      renderCart();
      return;
    }
  }
});

$("#modalBackdrop").addEventListener("click", (e) => {
  if (e.target === $("#modalBackdrop")) return closeModal();
  const modalAct = e.target.closest("[data-modal]")?.dataset.modal;
  const optAct = e.target.closest("[data-opt]");
  if (optAct) {
    const kind = optAct.dataset.opt;
    const val = optAct.dataset.val;
    if (kind === "size") modalState.size = val;
    if (kind === "crust") modalState.crust = val;
    if (kind === "spice") modalState.spice = val;
    if (kind === "addon") {
      modalState.addons = modalState.addons.includes(val)
        ? modalState.addons.filter((x) => x !== val)
        : [...modalState.addons, val];
    }
    renderModal();
    return;
  }
  if (modalAct === "inc") { modalState.qty++; renderModal(); }
  if (modalAct === "dec") { modalState.qty = Math.max(1, modalState.qty - 1); renderModal(); }
  if (modalAct === "add") {
    const p = modalState.product;
    const opts = {
      size: modalState.size,
      sizeLabel: p.options?.size?.find((s) => s.id === modalState.size)?.name,
      crust: modalState.crust,
      spice: modalState.spice,
      addons: modalState.addons,
    };
    const notes = $("#modalNotes")?.value || "";
    cart.add(p, { options: opts, instructions: notes, qty: modalState.qty });
    toast(`${p.name} added to cart`, "success");
    closeModal();
  }
});

$("#modalClose").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && $("#modalBackdrop").dataset.open === "true") closeModal();
});

$("#searchInput").addEventListener("input", (e) => { menuState.search = e.target.value; renderMenu(); });
$("#sortSelect").addEventListener("change", (e) => { menuState.sort = e.target.value; renderMenu(); });
$("#priceSelect").addEventListener("change", (e) => { menuState.maxPrice = Number(e.target.value); renderMenu(); });
$("#ratingSelect").addEventListener("change", (e) => { menuState.minRating = Number(e.target.value); renderMenu(); });
$("#vegFilter").addEventListener("click", (e) => {
  menuState.vegOnly = !menuState.vegOnly;
  e.currentTarget.setAttribute("aria-pressed", menuState.vegOnly);
  renderMenu();
});
$("#resetFilters").addEventListener("click", () => {
  menuState.search = ""; menuState.category = "all"; menuState.vegOnly = false;
  menuState.maxPrice = 1000; menuState.minRating = 0; menuState.sort = "popular";
  $("#searchInput").value = ""; $("#sortSelect").value = "popular";
  $("#priceSelect").value = "1000"; $("#ratingSelect").value = "0";
  $("#vegFilter").setAttribute("aria-pressed", "false");
  renderCategoryChips(); renderMenu();
});

$("#viewSpecials").addEventListener("click", () => {
  navigate("menu");
  menuState.category = "all";
});

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#primaryNav");
  const open = nav.dataset.open === "true";
  nav.dataset.open = String(!open);
  $("#menuToggle").setAttribute("aria-expanded", String(!open));
});

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = $("#themeIcon");
  if (theme === "dark") {
    icon.setAttribute("d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z");
  } else {
    icon.setAttribute("d", "M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m10-10l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z");
  }
}
$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  store.setTheme(next);
  applyTheme(next);
});
bus.on("theme:changed", applyTheme);

document.addEventListener("submit", (e) => {
  if (e.target.id !== "checkoutForm") return;
  e.preventDefault();
  if (checkoutSubmitting) return;

  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = {};

  if (!data.name || data.name.trim().length < 2) errors.coName = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test((data.phone || "").replace(/\D/g, ""))) errors.coPhone = "Enter a valid 10-digit Indian mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) errors.coEmail = "Enter a valid email address.";
  if (!data.address || data.address.trim().length < 8) errors.coAddress = "Please enter a complete delivery address.";

  $$(".field-error").forEach((el) => (el.textContent = ""));
  $$(".input").forEach((el) => el.removeAttribute("aria-invalid"));

  if (Object.keys(errors).length) {
    Object.entries(errors).forEach(([k, msg]) => {
      const el = document.querySelector(`[data-error-for="${k}"]`);
      if (el) el.textContent = msg;
      const input = document.getElementById(k);
      if (input) input.setAttribute("aria-invalid", "true");
    });
    toast("Please fix the errors above.", "error");
    return;
  }

  checkoutSubmitting = true;
  const btn = $("#placeOrderBtn");
  btn.disabled = true;
  btn.textContent = "Placing order…";

  const totals = computeTotals();
  const order = {
    id: "SB-" + Date.now().toString(36).toUpperCase(),
    createdAt: new Date().toISOString(),
    customer: { name: data.name.trim(), phone: data.phone.trim(), email: data.email.trim(), address: data.address.trim(), notes: (data.notes || "").trim() },
    items: store.state.cart.map((l) => ({ ...l })),
    totals,
    prepTimeMinutes: Math.max(...store.state.cart.map((l) => store.getProducts().find((p) => p.id === l.productId)?.prepTime || 20), 20),
  };

  safeWrite("smartbite:v1:lastOrder", order);
  const orders = safeRead(STORAGE_KEYS.orders, []);
  orders.unshift(order);
  safeWrite(STORAGE_KEYS.orders, orders.slice(0, 20));

  setTimeout(() => {
    cart.clear();
    checkoutSubmitting = false;
    toast("Order placed successfully (demo)", "success");
    navigate("order");
  }, 700);
});

/* ---------- 10. BOOT ---------- */
function boot() {
  const stored = store.state.theme;
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (systemDark ? "dark" : "light"));

  $("#year").textContent = new Date().getFullYear();

  bus.on("cart:changed", updateCartBadge);
  bus.on("favorites:changed", () => {});

  updateCartBadge();
  renderHome();
}

boot();