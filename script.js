/**
 * هاب داده‌های محصولات منو فست فود هات کنتاکی (مجموعاً شامل ۳۰ محصول کاملاً ساختاریافته)
 */
const PRODUCTS_DATABASE = [
    // مرغ سوخاری
    { id: 1, category: 'fried-chicken', title: 'مرغ سوخاری ۲ تکه نرمال', desc: 'دو تکه مرغ سوخاری کلاسیک همراه با سیب زمینی سرخ‌کرده و یک عدد نان کلمپونی کوچک', price: 185000, tag: 'none', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60' },
    { id: 2, category: 'fried-chicken', title: 'مرغ سوخاری ۳ تکه اسپایسی', desc: 'سه تکه مرغ سوخاری تند و رگه‌دار شده با سس هابانرو همراه با سیب زمینی و سالاد کلم', price: 245000, tag: 'best', img: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&auto=format&fit=crop&q=60' },
    { id: 3, category: 'fried-chicken', title: 'مرغ سوخاری ۴ تکه میکس', desc: 'دو تکه نرمال و دو تکه اسپایسی تند کرانچی همراه سیب زمینی سرخ کرده و ۲ عدد نان', price: 310000, tag: 'special', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60' },
    { id: 4, category: 'fried-chicken', title: 'فیله استریپس ۴ تکه', desc: 'چهار تکه فیله مرغ بدون استخوان ترد شده با آرد مخصوص کنتاکی و سس دست‌ساز سیر', price: 195000, tag: 'none', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60' },
    { id: 5, category: 'fried-chicken', title: 'فیله استریپس ۶ تکه اسپایسی', desc: 'ششم تکه فیله مرغ تند بدون استخوان پولکی ترد به همراه سالاد کلم و سس چدار', price: 275000, tag: 'best', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60' },

    // برگر مرغ
    { id: 6, category: 'chicken-burger', title: 'چیکن برگر کلاسیک', desc: 'فیله مرغ سوخاری، کاهو، گوجه فرنگی، خیارشور و سس مایونز مخصوص در نان مکدونالدی', price: 165000, tag: 'none', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
    { id: 7, category: 'chicken-burger', title: 'اسپایسی چیکن چیزبرگر', desc: 'مرغ سوخاری تند، پنیر گودا ذوب شده، کاهو فرانسوی، هالاپینو و سس تند آتشین', price: 185000, tag: 'special', img: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=60' },
    { id: 8, category: 'chicken-burger', title: 'دبل چیکن برگر سوپر لوکس', desc: 'دو لایه فیله سوخاری کرانچی، دو ورق پنیر چدار، پیاز حلقه‌ای و سس تارتار ویژه', price: 240000, tag: 'best', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },
    { id: 9, category: 'chicken-burger', title: 'مستر چیکن زاپاتا', desc: 'فیله سوخاری گریل شده همراه با کالباس ۹۰٪، قارچ بلانچ شده و پنیر پیتزا فراوان', price: 210000, tag: 'none', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60' },

    // ساندویچ‌ها
    { id: 10, category: 'sandwiches', title: 'توییستر ساندویچ (رپ مرغ)', desc: 'دو عدد فیله سوخاری پیچیده شده در نان تورتیلا مدیترانه‌ای به همراه کاهو و سس مایونز سیر', price: 155000, tag: 'none', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60' },
    { id: 11, category: 'sandwiches', title: 'ساندویچ فیله تنوری', desc: 'فیله مرغ خرد شده تنوری با سس قارچ و پنیر و پیاز جعفری در نان باگت سنتی', price: 175000, tag: 'none', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60' },
    { id: 12, category: 'sandwiches', title: 'ساندویچ هالومی چیکن ویژه', desc: 'فیله سوخاری پولکی همراه با پنیر هالومی کبابی غنی شده و کاهو پیچ اسپانیایی', price: 198000, tag: 'special', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=60' },

    // باکت‌های خانوادگی
    { id: 13, category: 'family-buckets', title: 'باکت اکونومی (۶ تکه)', desc: '۶ تکه مرغ سوخاری نرمال و اسپایسی، ۱ سیب زمینی بزرگ، ۲ سالاد کلم کوچک و نوشابه خانواده', price: 540000, tag: 'none', img: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60' },
    { id: 14, category: 'family-buckets', title: 'سوپر باکت هات (۹ تکه)', desc: '۹ تکه مرغ سوخاری مخلوط، ۲ سیب زمینی سرخ کرده، ۳ نان بروچ، سالاد کلم بزرگ و سس دبل سیر', price: 780000, tag: 'best', img: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60' },
    { id: 15, category: 'family-buckets', title: 'مگا پارتی باکس (۱۲ تکه)', desc: '۱۲ تکه مرغ سوخاری کرانچی، ۶ تکه فیله استریپس، قارچ سوخاری غول‌آسا، سیب زمینی خانواده و ۳ عدد سس بزرگ مخصوص', price: 1150000, tag: 'special', img: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60' },

    // سیب زمینی و پیش غذا
    { id: 16, category: 'fries', title: 'سیب زمینی سرخ کرده کلاسیک', desc: 'خلال سیب زمینی بلژیکی ترد و طلایی با ادویه مخصوص کجین هات کنتاکی', price: 75000, tag: 'none', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60' },
    { id: 17, category: 'fries', title: 'سیب زمینی چدار و قارچ', desc: 'سیب زمینی سرخ شده همراه با حمام سس پنیر چدار آب شده داغ و قارچ فرآوری شده', price: 115000, tag: 'best', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60' },
    { id: 18, category: 'fries', title: 'پیاز حلقه‌ای سوخاری (۱۰ عدد)', desc: 'حلقه‌های پیاز شیرین سوخاری شده فوق‌العاده ترد همراه با دیپ سس باربیکیو پلاس', price: 65000, tag: 'none', img: 'https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?w=500&auto=format&fit=crop&q=60' },
    { id: 19, category: 'fries', title: 'قارچ سوخاری مخصوص کرانچی', desc: 'قارچ‌های دکمه‌ای تازه مرینت شده در آرد سوخاری پفکی و ترد پاپ کورنی', price: 90000, tag: 'special', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60' },

    // نوشیدنی‌ها
    { id: 20, category: 'drinks', title: 'نوشابه قوطی کوکاکولا', desc: 'نوشابه گازدار قوطی خنک تگرگی ۳۳۰ میلی‌لیتر', price: 20000, tag: 'none', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60' },
    { id: 21, category: 'drinks', title: 'نوشابه قوطی فانتا پرتقالی', desc: 'نوشابه قوطی طعم پرتقالی خنک گازدار اصل', price: 20000, tag: 'none', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60' },
    { id: 22, category: 'drinks', title: 'دلستر لیمویی بالتیکا', desc: 'ماءالشعیر گازدار با طعم طبیعی لیمو مالت غنی شده', price: 25000, tag: 'none', img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=60' },
    { id: 23, category: 'drinks', title: 'موهیتو طبیعی و دست‌ساز', desc: 'نوشیدنی خنک و ارگانیک تهیه شده از لیمو تازه، برگ نعناع طبیعی و سودا ممتاز', price: 45000, tag: 'best', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60' },

    // سس‌ها
    { id: 24, category: 'sauces', title: 'دیپ سس سیر مخصوص هات', desc: 'سس غلیظ فرموله شده از سیر تازه ارگانیک، روغن زیتون و ادویه مدیترانه‌ای', price: 15000, tag: 'best', img: 'https://images.unsplash.com/photo-1619531040576-fba20077dfb8?w=500&auto=format&fit=crop&q=60' },
    { id: 25, category: 'sauces', title: 'سس چدار گرم فشرده', desc: 'دیپ گرم پنیر چدار ذوب شده خالص و غنی مناسب برای غوطه‌ور کردن سوخاری', price: 25000, tag: 'special', img: 'https://images.unsplash.com/photo-1619531040576-fba20077dfb8?w=500&auto=format&fit=crop&q=60' },
    { id: 26, category: 'sauces', title: 'سس بوفالو آتشین', desc: 'سس تند و تیز ترکیبی فلفل قرمز تند و کره ذوب شده مناسب برای عاشقان اسپایسی', price: 15000, tag: 'none', img: 'https://images.unsplash.com/photo-1619531040576-fba20077dfb8?w=500&auto=format&fit=crop&q=60' },
    { id: 27, category: 'sauces', title: 'سس باربیکیو دودی خالص', desc: 'طعم اصیل دودی هیکوری با بافت کاراملی جذاب', price: 15000, tag: 'none', img: 'https://images.unsplash.com/photo-1619531040576-fba20077dfb8?w=500&auto=format&fit=crop&q=60' },

    // دسرها
    { id: 28, category: 'desserts', title: 'پای سیب داغ دارچینی', desc: 'پای دست‌ساز لایه‌ای سیب پخته شده معطر با پودر دارچین اعلا به همراه بستنی وانیلی', price: 55000, tag: 'special', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60' },
    { id: 29, category: 'desserts', title: 'مافین دبل شکلات بلژیکی', desc: 'کیک مافین نرم و مرطوب مغزدار غنی شده با تکه‌های شکلات تلخ ذوب شده', price: 40000, tag: 'none', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60' },
    { id: 30, category: 'desserts', title: 'بستنی مخصوص هات کنتاکی', desc: 'ژلاتو نرم ایتالیایی با مغز پسته و سس شکلات فرست کلاس', price: 50000, tag: 'best', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60' }
];

// متغیر وضعیت سبد خرید (بارگذاری اولیه از LocalStorage در صورت وجود)
let currentCart = JSON.parse(localStorage.getItem('hot_kentucky_cart')) || [];

/**
 * مدیریت رویدادهای اولیه سیستم بارگذاری و رفتارهای صفحه (DOM Ready)
 */
document.addEventListener('DOMContentLoaded', () => {
    // ۱. حذف انیمیشنی صفحه لودینگ اولیه پس از رندر کامل ساختار درخت DOM
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    }, 800);

    // ۲. رندر اولیه کلیه محصولات پایگاه داده در گرید سیستم منو
    renderProducts(PRODUCTS_DATABASE);
    updateCartUI();

    // ۳. مدیریت سیستم پیشرفته فیلترینگ دسته‌بندی‌ها
    const categoryButtons = document.querySelectorAll('.btn-category');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            filterMenu();
        });
    });

    // ۴. مدیریت فیلترینگ زنده بر اساس فیلد ورودی متن جستجو
    const searchInput = document.getElementById('liveSearchInput');
    searchInput.addEventListener('input', () => {
        filterMenu();
    });

    // ۵. مدیریت رفتار اسکرول مرورگر جهت تغییر وضعیت بصری نوار ناوبری و دکمه بازگشت به بالا
    const navbar = document.querySelector('.custom-navbar');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // ۶. پیوند رویداد کلیک دکمه بازگشت به بالا جهت اسکرول نرم به نقطه صفر صفحه
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/**
 * متد جامع فیلترینگ همزمان دسته‌بندی و واژگان جستجوی زنده به صورت بلادرنگ
 */
function filterMenu() {
    const activeCategory = document.querySelector('.btn-category.active').getAttribute('data-category');
    const searchQuery = document.getElementById('liveSearchInput').value.trim().toLowerCase();

    const filtered = PRODUCTS_DATABASE.filter(product => {
        const matchesCategory = (activeCategory === 'all' || product.category === activeCategory);
        const matchesSearch = product.title.toLowerCase().includes(searchQuery) || 
                              product.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

/**
 * رندر کردن و تولید پویا و ایمن کدهای HTML محصولات درون کانتینر هدف به همراه قابلیت Lazy Loading نیتیو مرورگر
 */
function renderProducts(productsList) {
    const container = document.getElementById('productsGridContainer');
    container.innerHTML = '';

    if (productsList.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fa-solid fa-cookie-bite display-1 text-muted mb-3"></i>
                <p class="text-muted fs-5">هیچ محصولی مطابق با فیلتر یا جستجوی شما یافت نشد.</p>
            </div>
        `;
        return;
    }

    productsList.forEach(product => {
        // تعیین تگ‌ها و لیبل‌های محصول ویژه یا پرفروش
        let badgeHTML = '';
        if (product.tag === 'best') {
            badgeHTML = `<span class="product-badge badge-best"><i class="fa-solid fa-fire"></i> پرفروش</span>`;
        } else if (product.tag === 'special') {
            badgeHTML = `<span class="product-badge badge-special"><i class="fa-solid fa-star"></i> پیشنهاد ویژه</span>`;
        }

        const cardElement = document.createElement('div');
        cardElement.className = 'col-sm-6 col-md-4 col-lg-3';
        cardElement.innerHTML = `
            <div class="product-card">
                ${badgeHTML}
                <div class="product-img-wrapper">
                    <img src="${product.img}" alt="${product.title}" class="product-img" loading="lazy">
                </div>
                <div class="product-info d-flex flex-column justify-content-between w-100">
                    <div>
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-desc">${product.desc}</p>
                    </div>
                    <div class="product-meta">
                        <div class="product-price">${product.price.toLocaleString('fa-IR')} <span>تومان</span></div>
                        <button onclick="addProductToCart(${product.id})" class="btn btn-add-to-cart" aria-label="افزودن به سبد خرید">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(cardElement);
    });
}

/**
 * افزودن امن و بررسی عدم تکرار یک محصول به آرایه سبد خرید و ذخیره‌سازی داده‌ها
 */
function addProductToCart(productId) {
    const targetProduct = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!targetProduct) return;

    const existingCartItem = currentCart.find(item => item.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity += 1;
    } else {
        currentCart.push({
            id: targetProduct.id,
            title: targetProduct.title,
            price: targetProduct.price,
            img: targetProduct.img,
            quantity: 1
        });
    }

    saveCartAndRefresh();
    showToastNotification(`«${targetProduct.title}» با موفقیت به سبد خرید شما اضافه شد.`);
}

/**
 * کاهش مستقیم تعداد یا حذف کلی اقلام در صورت صفر شدن تعداد آیتم
 */
function decreaseProductQuantity(productId) {
    const existingCartItem = currentCart.find(item => item.id === productId);
    if (!existingCartItem) return;

    if (existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
    } else {
        currentCart = currentCart.filter(item => item.id !== productId);
    }

    saveCartAndRefresh();
}

/**
 * حذف مستقیم یک ردیف کامل کالا بدون در نظر گرفتن تعداد شمارش شده آن
 */
function removeProductEntirely(productId) {
    currentCart = currentCart.filter(item => item.id !== productId);
    saveCartAndRefresh();
}

/**
 * همگام‌سازی ذخیره‌ساز LocalStorage و بازسازی کامل رابط کاربری سبد خرید
 */
function saveCartAndRefresh() {
    localStorage.setItem('hot_kentucky_cart', JSON.stringify(currentCart));
    updateCartUI();
}

/**
 * بروزرسانی جامع و تزریق داده‌های محاسباتی جدید به اجزای گرافیکی فاکتور سبد خرید
 */
function updateCartUI() {
    const cartCountBadge = document.getElementById('cartCountBadge');
    const itemsContainer = document.getElementById('cartItemsContainer');
    const totalPriceElement = document.getElementById('cartTotalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // محاسبه کل اقلام موجود در سبد خرید
    const totalItemsCount = currentCart.reduce((acc, current) => acc + current.quantity, 0);
    
    if (totalItemsCount > 0) {
        cartCountBadge.textContent = totalItemsCount.toLocaleString('fa-IR');
        cartCountBadge.classList.remove('text-none', 'd-none');
        checkoutBtn.classList.remove('disabled');
    } else {
        cartCountBadge.classList.add('d-none');
        checkoutBtn.classList.add('disabled');
    }

    // بازسازی بخش آیتم‌های داخل سایدبار
    itemsContainer.innerHTML = '';
    let accumulatedPrice = 0;

    if (currentCart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="text-center py-5 text-muted">
                <i class="fa-solid fa-basket-shopping display-4 mb-3 d-block opacity-30"></i>
                <p class="small">سبد خرید شما در حال حاضر خالی است.</p>
            </div>
        `;
        totalPriceElement.textContent = `۰ تومان`;
        return;
    }

    currentCart.forEach(item => {
        const rowTotalPrice = item.price * item.quantity;
        accumulatedPrice += rowTotalPrice;

        const rowElement = document.createElement('div');
        rowElement.className = 'cart-item-row d-flex align-items-center gap-3 mb-3';
        rowElement.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="cart-item-img">
            <div class="flex-grow-1">
                <h4 class="h6 text-white mb-1 fw-bold truncate-1">${item.title}</h4>
                <div class="text-gold small fw-bold">${rowTotalPrice.toLocaleString('fa-IR')} تومان</div>
            </div>
            <div class="d-flex flex-column align-items-end gap-2">
                <button onclick="removeProductEntirely(${item.id})" class="btn-cart-remove" aria-label="حذف کامل"><i class="fa-solid fa-trash-can"></i></button>
                <div class="quantity-control-group">
                    <button onclick="addProductToCart(${item.id})" class="btn-qty" aria-label="افزایش"><i class="fa-solid fa-plus"></i></button>
                    <span class="qty-value">${item.quantity.toLocaleString('fa-IR')}</span>
                    <button onclick="decreaseProductQuantity(${item.id})" class="btn-qty" aria-label="کاهش"><i class="fa-solid fa-minus"></i></button>
                </div>
            </div>
        `;
        itemsContainer.appendChild(rowElement);
    });

    totalPriceElement.textContent = `${accumulatedPrice.toLocaleString('fa-IR')} تومان`;
}

/**
 * سیستم شلیک توسترهای سفارشی به صورت کاملاً داینامیک و غنی بدون نشت حافظه
 */
function showToastNotification(messageText) {
    const container = document.getElementById('toastContainer');
    
    const toastNode = document.createElement('div');
    toastNode.className = 'toast custom-toast show align-items-center text-white border-0 mb-2';
    toastNode.setAttribute('role', 'alert');
    toastNode.setAttribute('aria-live', 'assertive');
    toastNode.setAttribute('aria-atomic', 'true');
    
    toastNode.innerHTML = `
        <div class="d-flex">
            <div class="toast-body d-flex align-items-center gap-2">
                <i class="fa-solid fa-circle-check text-success fs-5"></i>
                <span>${messageText}</span>
            </div>
            <button type="button" class="btn-close btn-close-white me-auto m-auto pe-3" data-bs-dismiss="toast" aria-label="بستن"></button>
        </div>
    `;
    
    container.appendChild(toastNode);

    // حذف خودکار تگ المان بعد از اتمام مهلت نمایش جهت جلوگیری از کندی مرورگر
    setTimeout(() => {
        toastNode.classList.remove('show');
        setTimeout(() => toastNode.remove(), 300);
    }, 3500);
}
