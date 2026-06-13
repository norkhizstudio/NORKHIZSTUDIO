/* ============================================================
   HOT KENTUCKY — Digital Menu JavaScript
   Production-Ready | Persian RTL | Full-Featured
   ============================================================ */

'use strict';

/* -------- PRODUCT DATABASE -------- */
const PRODUCTS = [
  // ===== مرغ سوخاری =====
  {
    id: 1,
    name: 'مرغ سوخاری کلاسیک',
    desc: 'قطعه ران مرغ با پوشش ترد ادویه‌دار، طرز تهیه اصیل هات کنتاکی',
    price: 89000,
    category: 'fried-chicken',
    icon: '🍗',
    badges: ['hot'],
    color: '#ff6b00'
  },
  {
    id: 2,
    name: 'مرغ سوخاری تند ویژه',
    desc: 'ترکیب فلفل قرمز و ادویه‌های تند اختصاصی برای عاشقان طعم آتشین',
    price: 95000,
    category: 'fried-chicken',
    icon: '🌶️',
    badges: ['hot', 'special'],
    color: '#c8102e'
  },
  {
    id: 3,
    name: 'باله مرغ سوخاری',
    desc: 'باله مرغ با پوشش طلایی ترد، برشته در روغن آفتاب‌گردان',
    price: 75000,
    category: 'fried-chicken',
    icon: '🍗',
    badges: [],
    color: '#ff8c38'
  },
  {
    id: 4,
    name: 'مرغ سوخاری سینه',
    desc: 'سینه مرغ کامل سوخاری، پُر آب و آبدار با پوشش دو لایه',
    price: 105000,
    category: 'fried-chicken',
    icon: '🍗',
    badges: ['special'],
    color: '#d4a017'
  },
  {
    id: 5,
    name: 'ران مرغ سوخاری خانگی',
    desc: 'ران کامل مرغ با ادویه محرمانه ۱۱ چاشنی، بدون پوست',
    price: 99000,
    category: 'fried-chicken',
    icon: '🍗',
    badges: [],
    color: '#ff6b00'
  },

  // ===== برگر مرغ =====
  {
    id: 6,
    name: 'برگر مرغ کلاسیک',
    desc: 'فیله مرغ سوخاری، کاهو، گوجه و سس مایونز در نان کنجدی',
    price: 125000,
    category: 'burger',
    icon: '🍔',
    badges: ['hot'],
    color: '#ff6b00'
  },
  {
    id: 7,
    name: 'دابل برگر مرغ',
    desc: 'دو لایه فیله مرغ سوخاری با پنیر ذوب شده و سس اختصاصی',
    price: 165000,
    category: 'burger',
    icon: '🍔',
    badges: ['special', 'hot'],
    color: '#c8102e'
  },
  {
    id: 8,
    name: 'برگر اسپایسی',
    desc: 'فیله مرغ تند با جالاپنیو، سس سریراچا و پنیر تیلسیتر',
    price: 145000,
    category: 'burger',
    icon: '🌶️',
    badges: ['hot'],
    color: '#c8102e'
  },
  {
    id: 9,
    name: 'برگر مکزیکی',
    desc: 'مرغ سوخاری با گواکامولی، ذرت و سس چیپوتل تند',
    price: 155000,
    category: 'burger',
    icon: '🍔',
    badges: ['new'],
    color: '#ff8c38'
  },
  {
    id: 10,
    name: 'برگر گلد',
    desc: 'فیله طلایی مرغ، پنیر گودا، باکن و سس مخصوص هات کنتاکی',
    price: 175000,
    category: 'burger',
    icon: '👑',
    badges: ['special'],
    color: '#d4a017'
  },

  // ===== ساندویچ =====
  {
    id: 11,
    name: 'ساندویچ فیله مرغ',
    desc: 'فیله نازک مرغ سوخاری در نان باگت با کاهو و گوجه',
    price: 98000,
    category: 'sandwich',
    icon: '🥖',
    badges: [],
    color: '#ff8c38'
  },
  {
    id: 12,
    name: 'ساندویچ کریسپی',
    desc: 'مرغ کریسپی دو لایه با خیارشور، کاهو بنفش و سس تارتار',
    price: 118000,
    category: 'sandwich',
    icon: '🥪',
    badges: ['hot'],
    color: '#ff6b00'
  },
  {
    id: 13,
    name: 'ساندویچ کبابی',
    desc: 'مرغ گریل شده با کدو، فلفل دلمه و سس پستو',
    price: 109000,
    category: 'sandwich',
    icon: '🥗',
    badges: ['new'],
    color: '#25d366'
  },
  {
    id: 14,
    name: 'ساندویچ ترکی',
    desc: 'فیله مرغ ترکی با بادمجان کبابی، فلفل و ادویه ترکی',
    price: 115000,
    category: 'sandwich',
    icon: '🥙',
    badges: [],
    color: '#ff8c38'
  },

  // ===== باکت خانوادگی =====
  {
    id: 15,
    name: 'باکت خانوادگی ۶ تایی',
    desc: '۶ قطعه مرغ سوخاری + ۳ سیب زمینی + ۳ نوشابه',
    price: 385000,
    category: 'bucket',
    icon: '🪣',
    badges: ['special', 'hot'],
    color: '#d4a017'
  },
  {
    id: 16,
    name: 'باکت خانوادگی ۱۰ تایی',
    desc: '۱۰ قطعه مرغ + ۴ سیب زمینی + ۴ نوشابه + ۲ سس',
    price: 590000,
    category: 'bucket',
    icon: '🪣',
    badges: ['hot', 'special'],
    color: '#c8102e'
  },
  {
    id: 17,
    name: 'باکت مهمانی ۱۵ تایی',
    desc: '۱۵ قطعه مرغ + ۶ سیب زمینی + ۶ نوشابه + ۴ سس + دسر',
    price: 845000,
    category: 'bucket',
    icon: '🎉',
    badges: ['special'],
    color: '#d4a017'
  },
  {
    id: 18,
    name: 'باکت دو نفره',
    desc: '۴ قطعه مرغ + ۲ سیب زمینی + ۲ نوشابه',
    price: 245000,
    category: 'bucket',
    icon: '🪣',
    badges: [],
    color: '#ff6b00'
  },

  // ===== سیب زمینی =====
  {
    id: 19,
    name: 'سیب زمینی کلاسیک',
    desc: 'سیب زمینی ترد طلایی با نمک دریا',
    price: 45000,
    category: 'fries',
    icon: '🍟',
    badges: [],
    color: '#d4a017'
  },
  {
    id: 20,
    name: 'سیب زمینی پنیری',
    desc: 'سیب زمینی با سس چدار داغ و پنیر پارمزان',
    price: 62000,
    category: 'fries',
    icon: '🧀',
    badges: ['hot'],
    color: '#ff8c38'
  },
  {
    id: 21,
    name: 'سیب زمینی تند',
    desc: 'سیب زمینی با پاپریکا، فلفل قرمز و ادویه تند',
    price: 55000,
    category: 'fries',
    icon: '🌶️',
    badges: [],
    color: '#c8102e'
  },
  {
    id: 22,
    name: 'وجز فرانسوی',
    desc: 'وِج سیب زمینی شکری با رزماری و سس دیپ',
    price: 68000,
    category: 'fries',
    icon: '🍟',
    badges: ['new'],
    color: '#ff6b00'
  },

  // ===== نوشیدنی =====
  {
    id: 23,
    name: 'نوشابه قوطی',
    desc: 'کوکاکولا، پپسی، اسپرایت و فانتا — به انتخاب شما',
    price: 28000,
    category: 'drinks',
    icon: '🥤',
    badges: [],
    color: '#c8102e'
  },
  {
    id: 24,
    name: 'دوغ محلی',
    desc: 'دوغ تازه با نعناع و زیره — محصول ایرانی',
    price: 22000,
    category: 'drinks',
    icon: '🥛',
    badges: [],
    color: '#6bc5f8'
  },
  {
    id: 25,
    name: 'لیموناد تازه',
    desc: 'لیموناد خانگی با نعناع تازه و شربت گلاب',
    price: 38000,
    category: 'drinks',
    icon: '🍋',
    badges: ['new'],
    color: '#ffe066'
  },
  {
    id: 26,
    name: 'شیک پرتقال',
    desc: 'شیک پرتقال تازه با خامه و توپ بستنی وانیل',
    price: 55000,
    category: 'drinks',
    icon: '🍊',
    badges: [],
    color: '#ff8c38'
  },

  // ===== سس‌ها =====
  {
    id: 27,
    name: 'سس باربیکیو',
    desc: 'سس باربیکیو دودی دستساز با گوجه و قارچ دودی',
    price: 18000,
    category: 'sauce',
    icon: '🫙',
    badges: [],
    color: '#c8102e'
  },
  {
    id: 28,
    name: 'سس تند اختصاصی',
    desc: 'سس مخصوص هات کنتاکی با ۷ نوع فلفل محلی',
    price: 22000,
    category: 'sauce',
    icon: '🌶️',
    badges: ['special'],
    color: '#ff6b00'
  },

  // ===== دسر =====
  {
    id: 29,
    name: 'کاپ‌کیک شکلاتی',
    desc: 'کاپ‌کیک نرم و خامه‌ای با روکش گاناش شکلات تلخ',
    price: 48000,
    category: 'dessert',
    icon: '🧁',
    badges: [],
    color: '#8B4513'
  },
  {
    id: 30,
    name: 'بستنی وانیل',
    desc: 'بستنی نرم وانیل با رویه عسل و تکه‌های کاراملی',
    price: 42000,
    category: 'dessert',
    icon: '🍦',
    badges: ['hot'],
    color: '#ffe066'
  },
  {
    id: 31,
    name: 'چیزکیک توت فرنگی',
    desc: 'چیزکیک کرمی با بیسکویت بوربون و کولیس توت فرنگی تازه',
    price: 65000,
    category: 'dessert',
    icon: '🍰',
    badges: ['new'],
    color: '#ff6b8a'
  },
  {
    id: 32,
    name: 'دونات گلدن',
    desc: 'دونات طلایی با پودر قند و مربای هلو',
    price: 38000,
    category: 'dessert',
    icon: '🍩',
    badges: [],
    color: '#d4a017'
  }
];

/* -------- SPECIAL OFFERS -------- */
const SPECIALS = [
  {
    id: 's1',
    name: 'باکت آتشین',
    desc: '۸ قطعه مرغ تند ویژه + ۳ سیب زمینی + ۳ نوشابه + ۲ سس تند اختصاصی',
    originalPrice: 520000,
    specialPrice: 399000,
    icon: '🔥',
    ribbon: 'پرفروش',
    productId: 16
  },
  {
    id: 's2',
    name: 'ست عاشقانه',
    desc: '۲ برگر گلد + ۲ سیب زمینی پنیری + ۲ لیموناد تازه',
    originalPrice: 405000,
    specialPrice: 319000,
    icon: '❤️',
    ribbon: 'پیشنهاد ویژه',
    productId: 10
  },
  {
    id: 's3',
    name: 'ست دانشجویی',
    desc: 'برگر مرغ کلاسیک + سیب زمینی + نوشابه + سس باربیکیو',
    originalPrice: 216000,
    specialPrice: 169000,
    icon: '🎓',
    ribbon: 'صرفه‌جویی بیشتر',
    productId: 6
  },
  {
    id: 's4',
    name: 'باکت هفتگی',
    desc: '۱۵ قطعه مرغ + ۵ سیب زمینی + ۵ نوشابه + ۳ سس + دسر رایگان',
    originalPrice: 1050000,
    specialPrice: 799000,
    icon: '👨‍👩‍👧‍👦',
    ribbon: 'پرطرفدار',
    productId: 17
  }
];

/* ============================================================
   CART STATE
   ============================================================ */
const CART_KEY = 'hk_cart_v2';

let cart = loadCart();
let currentFilter = 'all';
let searchQuery = '';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, icon: product.icon, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.icon} ${product.name} به سبد اضافه شد`);

  // Button animation
  const btn = document.querySelector(`.btn-add[data-id="${productId}"]`);
  if (btn) {
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 600);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

function getTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getItemCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function formatPrice(n) {
  return n.toLocaleString('fa-IR') + ' تومان';
}

/* ============================================================
   CART UI
   ============================================================ */
function updateCartUI() {
  const badge  = document.getElementById('cartBadge');
  const body   = document.getElementById('cartItems');
  const empty  = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const total  = document.getElementById('cartTotal');
  const count  = getItemCount();

  // Badge
  badge.textContent = count.toLocaleString('fa-IR');
  badge.style.display = count > 0 ? 'flex' : 'none';

  // Items
  body.querySelectorAll('.cart-item').forEach(el => el.remove());

  if (cart.length === 0) {
    empty.style.display  = 'flex';
    footer.style.display = 'none';
    return;
  }

  empty.style.display  = 'none';
  footer.style.display = 'block';
  total.textContent    = formatPrice(getTotal());

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-icon">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)" aria-label="کم کردن">−</button>
        <span class="qty-display">${item.qty.toLocaleString('fa-IR')}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},1)" aria-label="زیاد کردن">+</button>
        <button class="qty-remove" onclick="removeFromCart(${item.id})" aria-label="حذف">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    body.appendChild(el);
  });
}

/* ============================================================
   CART DRAWER TOGGLE
   ============================================================ */
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'hk-toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

/* ============================================================
   RENDER MENU
   ============================================================ */
function renderMenu() {
  const grid     = document.getElementById('menuGrid');
  const noResult = document.getElementById('noResults');
  const countEl  = document.getElementById('searchCount');

  let filtered = PRODUCTS;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.includes(q) ||
      p.desc.includes(q) ||
      p.category.includes(q)
    );
  }

  // Clear existing cards
  grid.querySelectorAll('.product-card').forEach(el => el.remove());

  if (searchQuery) {
    countEl.textContent = `${filtered.length.toLocaleString('fa-IR')} محصول یافت شد`;
  } else {
    countEl.textContent = '';
  }

  if (filtered.length === 0) {
    noResult.style.display = 'block';
    return;
  }

  noResult.style.display = 'none';

  filtered.forEach((product, i) => {
    const card = createProductCard(product);
    card.style.animationDelay = `${i * 40}ms`;
    card.classList.add('card-appear');
    grid.appendChild(card);
  });
}

function createProductCard(product) {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.dataset.category = product.category;
  div.dataset.id = product.id;

  const badgeHTML = product.badges.map(b => {
    const labels = { hot: '🔥 پرفروش', special: '⭐ ویژه', new: '✨ جدید' };
    const cls    = { hot: 'badge-hot', special: 'badge-special', new: 'badge-new' };
    return `<span class="${cls[b]}">${labels[b]}</span>`;
  }).join('');

  div.innerHTML = `
    <div class="product-img-wrap" style="background: linear-gradient(135deg, ${product.color}18, #1a1a1a);">
      <div class="product-img-icon" aria-hidden="true">${product.icon}</div>
      ${product.badges.length ? `<div class="product-badges">${badgeHTML}</div>` : ''}
    </div>
    <div class="product-body">
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-footer">
        <div class="product-price">
          <small>قیمت</small>
          ${formatPrice(product.price)}
        </div>
        <button class="btn-add" data-id="${product.id}" onclick="addToCart(${product.id})" aria-label="افزودن ${product.name} به سبد">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  `;

  return div;
}

/* ============================================================
   RENDER SPECIALS
   ============================================================ */
function renderSpecials() {
  const grid = document.getElementById('specialsGrid');
  if (!grid) return;

  SPECIALS.forEach(s => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6';
    col.dataset.animate = 'fade-up';

    const discount = Math.round((1 - s.specialPrice / s.originalPrice) * 100);

    col.innerHTML = `
      <div class="special-card h-100">
        <div class="special-card-header">
          <div class="special-ribbon">${s.ribbon}</div>
          <div class="special-icon" aria-hidden="true">${s.icon}</div>
        </div>
        <div class="special-card-body">
          <div class="special-name">${s.name}</div>
          <div class="special-desc">${s.desc}</div>
          <div class="special-price-row">
            <div class="price-group">
              <span class="price-original">${formatPrice(s.originalPrice)}</span>
              <span class="price-special">${formatPrice(s.specialPrice)}</span>
            </div>
            <button class="btn-special" onclick="addToCart(${s.productId})">
              <i class="fa-solid fa-basket-shopping ms-1"></i>
              سفارش (${discount}٪ تخفیف)
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

/* ============================================================
   LOADING SCREEN
   ============================================================ */
function hideLoading() {
  const screen = document.getElementById('loadingScreen');
  if (!screen) return;
  screen.classList.add('hidden');
  setTimeout(() => screen.remove(), 700);
}

/* ============================================================
   STICKY HEADER
   ============================================================ */
function handleScroll() {
  const header    = document.getElementById('mainHeader');
  const scrollBtn = document.getElementById('scrollTopBtn');
  const y = window.scrollY;

  if (y > 80) header.classList.add('scrolled');
  else         header.classList.remove('scrolled');

  if (y > 400) scrollBtn.classList.add('visible');
  else          scrollBtn.classList.remove('visible');
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('animated'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   SMOOTH SCROLL NAV
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu
        const collapse = document.getElementById('navMenu');
        if (collapse && collapse.classList.contains('show')) {
          const toggler = document.querySelector('.navbar-toggler');
          if (toggler) toggler.click();
        }
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('#navMenu .nav-link');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`#navMenu a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ============================================================
   CATEGORY FILTER
   ============================================================ */
function initCategories() {
  document.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      renderMenu();

      // Scroll to menu
      const menu = document.getElementById('menu');
      if (menu) {
        setTimeout(() => menu.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    });
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
function initSearch() {
  const input    = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  if (!input) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    searchQuery = input.value.trim();
    clearBtn.style.display = searchQuery ? 'block' : 'none';

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(renderMenu, 200);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderMenu();
    input.focus();
  });
}

/* ============================================================
   LAZY LOAD IMAGES (emoji-based, no real img here)
   Observer kept for future real images
   ============================================================ */
function initLazyLoad() {
  // Intersection observer for product cards appearing
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  const observe = () => {
    document.querySelectorAll('.product-card').forEach(card => {
      observer.observe(card);
    });
  };
  // Re-observe after renders
  const mo = new MutationObserver(observe);
  mo.observe(document.getElementById('menuGrid'), { childList: true });
}

/* ============================================================
   CARD APPEAR ANIMATION
   ============================================================ */
const cardStyle = document.createElement('style');
cardStyle.textContent = `
.card-appear {
  opacity: 0;
  transform: translateY(20px);
  animation: cardIn .45s ease forwards;
}
@keyframes cardIn {
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(cardStyle);

/* ============================================================
   SCROLL TOP BUTTON
   ============================================================ */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ============================================================
   CART EVENTS
   ============================================================ */
function initCartEvents() {
  document.getElementById('cartToggle')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  // ESC key closes cart
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
  });
}

/* ============================================================
   PERFORMANCE: requestAnimationFrame for scroll
   ============================================================ */
let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  // Render content first
  renderMenu();
  renderSpecials();
  updateCartUI();

  // Interactions
  initCategories();
  initSearch();
  initScrollTop();
  initCartEvents();

  // Scroll-based
  window.addEventListener('scroll', onScroll, { passive: true });
  handleScroll();

  // Animations (after a tick to let DOM settle)
  requestAnimationFrame(() => {
    initScrollAnimations();
    initSmoothScroll();
    initLazyLoad();
  });

  // Hide loading after render
  setTimeout(hideLoading, 2200);

  // Animate hero elements after loading
  setTimeout(() => {
    document.querySelectorAll('#hero [data-animate]').forEach((el, i) => {
      setTimeout(() => el.classList.add('animated'), i * 150 + 400);
    });
  }, 2400);
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
