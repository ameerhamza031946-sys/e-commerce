// =============================================
// Brand E-Commerce - Full Desktop Web Store
// app.js — Dynamic Products, Navigation & Cart
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------
    // PRODUCT DATABASE (12 Products across 6 Categories)
    // -------------------------------------------
    const products = [
        // 1. Clothes and wear
        {
            id: "prod-3",
            name: "Regular Fit Resort Linen Shirt",
            category: "Clothes and wear",
            price: 57.70,
            originalPrice: 80.00,
            rating: 4.5,
            reviews: 154,
            sold: 450,
            image: "assets/blue_shirt_1781681515822.png",
            thumbs: [
                "assets/blue_shirt_1781681515822.png",
                "assets/blue_backpack_1781681528051.png"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Material": "100% Organic Linen",
                "Fit": "Regular fit",
                "Style": "Resort collar"
            },
            about: "Perfect for warm days and beachside retreats, this resort collar shirt is woven in premium, breathable linen. Features a relaxed regular fit, button-up front, and curved hem.",
            supplier: "Artel Market",
            supplierAvatar: "A",
            supplierCountry: "Italy, Milan",
            supplierVerified: true
        },
        {
            id: "prod-4",
            name: "Classic Denim Jacket (Blue)",
            category: "Clothes and wear",
            price: 65.00,
            originalPrice: 95.00,
            rating: 4.7,
            reviews: 88,
            sold: 220,
            image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Material": "100% Denim Cotton",
                "Fit": "Classic fit",
                "Closure": "Button closure"
            },
            about: "A timeless wardrobe staple. This classic blue denim jacket features chest flap pockets, button cuffs, and adjustable waist tabs. Built to last and wear in beautifully.",
            supplier: "LuxeWear Inc.",
            supplierAvatar: "L",
            supplierCountry: "United States, New York",
            supplierVerified: true
        },
        // 3. Home interiors
        {
            id: "prod-5",
            name: "Nordic Minimalist Table Lamp",
            category: "Home interiors",
            price: 42.00,
            originalPrice: 65.00,
            rating: 4.9,
            reviews: 64,
            sold: 195,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Material": "Wood & Matte Metal",
                "Power Source": "Corded Electric",
                "Bulb Type": "E27 LED (Included)"
            },
            about: "Bring cozy Scandinavian style to your bedside or study desk. This elegant lamp features a solid wood base, soft-glare frosted metal shade, and fabric-braided power cable.",
            supplier: "NordicDesigns LLC",
            supplierAvatar: "N",
            supplierCountry: "Sweden, Stockholm",
            supplierVerified: true
        },
        {
            id: "prod-6",
            name: "Ceramic Flower Vase Set (3-Piece)",
            category: "Home interiors",
            price: 34.00,
            originalPrice: 50.00,
            rating: 4.8,
            reviews: 42,
            sold: 150,
            image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Shipping: $4.50",
            specs: {
                "Condition": "Brand new",
                "Material": "Glazed Ceramic",
                "Colors": "Beige, Terracotta, White",
                "Heights": "12cm, 15cm, 20cm"
            },
            about: "Decorate your mantel or bookshelves with these beautifully textured ceramic vases. Features clean lines, earthy color tones, and a hand-crafted finish that complements any modern interior.",
            supplier: "ClayDecor Co.",
            supplierAvatar: "C",
            supplierCountry: "Germany, Munich",
            supplierVerified: false
        },
        // 4. Computer and tech — Mobiles
        {
            id: "prod-7",
            name: "Samsung Galaxy S24 Ultra",
            category: "Computer and tech",
            brand: "Samsung",
            price: 349.00,
            originalPrice: 420.00,
            rating: 4.9,
            reviews: 512,
            sold: 1850,
            image: "assets/samsung_s24.png",
            thumbs: ["assets/samsung_s24.png"],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Display": "6.8\" Dynamic AMOLED 2X, 120Hz",
                "Processor": "Snapdragon 8 Gen 3",
                "RAM": "12GB",
                "Storage": "256GB",
                "Camera": "200MP + 12MP + 10MP + 50MP",
                "Battery": "5000 mAh",
                "Body": "Metallic"
            },
            about: "The Samsung Galaxy S24 Ultra redefines flagship smartphones with a built-in S Pen, industry-leading 200MP camera, titanium frame, and next-generation Galaxy AI features.",
            supplier: "Samsung Official Store",
            supplierAvatar: "S",
            supplierCountry: "South Korea, Seoul",
            supplierVerified: true
        },
        {
            id: "prod-8",
            name: "Apple iPhone 15 Pro Max",
            category: "Computer and tech",
            brand: "Apple",
            price: 399.00,
            originalPrice: 480.00,
            rating: 4.9,
            reviews: 684,
            sold: 2100,
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1697460009133-bfa1f8af8e1e?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Display": "6.7\" Super Retina XDR, ProMotion 120Hz",
                "Processor": "Apple A17 Pro chip",
                "RAM": "8GB",
                "Storage": "256GB",
                "Camera": "48MP + 12MP + 12MP",
                "Battery": "4422 mAh",
                "Body": "Titanium / Metallic"
            },
            about: "The iPhone 15 Pro Max features Apple's A17 Pro chip, titanium design, USB 3 connectivity, and a breakthrough camera system with 5x optical zoom — all in the most refined iPhone ever.",
            supplier: "Apple Authorized Reseller",
            supplierAvatar: "A",
            supplierCountry: "United States, California",
            supplierVerified: true
        },
        {
            id: "prod-17",
            name: "Huawei Pura 70 Pro",
            category: "Computer and tech",
            brand: "Huawei",
            price: 279.00,
            originalPrice: 350.00,
            rating: 4.7,
            reviews: 298,
            sold: 890,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Shipping: $6.00",
            specs: {
                "Condition": "Brand new",
                "Display": "6.8\" OLED, 120Hz",
                "Processor": "Kirin 9010",
                "RAM": "12GB",
                "Storage": "512GB",
                "Camera": "50MP Leica + 48MP + 40MP",
                "Battery": "5000 mAh",
                "Body": "Metallic"
            },
            about: "Huawei Pura 70 Pro brings Leica-certified photography, a premium metallic build, and blazing-fast Kirin 9010 chipset. With its stunning OLED display and large battery, it is built for productivity and creativity.",
            supplier: "Huawei Store",
            supplierAvatar: "H",
            supplierCountry: "China, Beijing",
            supplierVerified: true
        },
        {
            id: "prod-18",
            name: "Sony Xperia 1 VI",
            category: "Computer and tech",
            brand: "Sony",
            price: 319.00,
            originalPrice: 399.00,
            rating: 4.6,
            reviews: 187,
            sold: 530,
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Shipping: $5.00",
            specs: {
                "Condition": "Brand new",
                "Display": "6.5\" 4K HDR OLED, 120Hz",
                "Processor": "Snapdragon 8 Gen 3",
                "RAM": "12GB",
                "Storage": "256GB",
                "Camera": "52MP + 12MP + 12MP",
                "Battery": "5000 mAh",
                "Body": "Metallic"
            },
            about: "Sony Xperia 1 VI is a creator's dream — with a 4K OLED display, Zeiss-optics camera system, and lossless audio for music lovers. Premium metallic body with IP68 water resistance.",
            supplier: "Sony Electronics",
            supplierAvatar: "S",
            supplierCountry: "Japan, Tokyo",
            supplierVerified: true
        },
        {
            id: "prod-19",
            name: "Poco X6 Pro 5G",
            category: "Computer and tech",
            brand: "Pocco",
            price: 129.00,
            originalPrice: 170.00,
            rating: 4.5,
            reviews: 432,
            sold: 1620,
            image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Display": "6.67\" AMOLED Flow, 144Hz",
                "Processor": "Dimensity 8300-Ultra",
                "RAM": "8GB",
                "Storage": "256GB",
                "Camera": "64MP + 8MP + 2MP",
                "Battery": "5000 mAh",
                "Body": "Plastic cover"
            },
            about: "Poco X6 Pro 5G brings flagship-level gaming performance at a budget-friendly price. Features a 144Hz AMOLED display, powerful Dimensity chip, and a sleek plastic design that is lightweight yet durable.",
            supplier: "Poco Global",
            supplierAvatar: "P",
            supplierCountry: "China, Shenzhen",
            supplierVerified: true
        },
        {
            id: "prod-20",
            name: "Samsung Galaxy A55 5G",
            category: "Computer and tech",
            brand: "Samsung",
            price: 199.00,
            originalPrice: 249.00,
            rating: 4.6,
            reviews: 376,
            sold: 1340,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Display": "6.6\" Super AMOLED, 120Hz",
                "Processor": "Exynos 1480",
                "RAM": "8GB",
                "Storage": "128GB",
                "Camera": "50MP + 12MP + 5MP",
                "Battery": "5000 mAh",
                "Body": "Metallic"
            },
            about: "Galaxy A55 brings premium Samsung design to the mid-range segment. Featuring a bright AMOLED display, 50MP camera with optical image stabilization, IP67 rating, and all-day battery life.",
            supplier: "Samsung Official Store",
            supplierAvatar: "S",
            supplierCountry: "South Korea, Seoul",
            supplierVerified: true
        },
        {
            id: "prod-21",
            name: "Apple iPhone 14 (128GB)",
            category: "Computer and tech",
            brand: "Apple",
            price: 249.00,
            originalPrice: 329.00,
            rating: 4.8,
            reviews: 890,
            sold: 3200,
            image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=500&auto=format&fit=crop&q=80",
            thumbs: [
                "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=500&auto=format&fit=crop&q=80"
            ],
            shipping: "Free Shipping",
            specs: {
                "Condition": "Brand new",
                "Display": "6.1\" Super Retina XDR",
                "Processor": "Apple A15 Bionic",
                "RAM": "6GB",
                "Storage": "128GB",
                "Camera": "12MP + 12MP Dual",
                "Battery": "3279 mAh",
                "Body": "Plastic cover"
            },
            about: "iPhone 14 brings the power of Apple's A15 Bionic chip, Emergency SOS via satellite, Crash Detection, and advanced dual-camera system. A top choice for reliability and premium iOS experience.",
            supplier: "Apple Authorized Reseller",
            supplierAvatar: "A",
            supplierCountry: "United States, California",
            supplierVerified: true
        }
    ];


    // -------------------------------------------
    // CURRENCY STATE
    // -------------------------------------------
    const exchangeRates = {
        USD: { rate: 1,      symbol: '$',    code: 'USD' },
        EUR: { rate: 0.92,   symbol: '€',    code: 'EUR' },
        GBP: { rate: 0.79,   symbol: '£',    code: 'GBP' },
        INR: { rate: 83.5,   symbol: '₹',    code: 'INR' },
        JPY: { rate: 157,    symbol: '¥',    code: 'JPY' },
        AED: { rate: 3.67,   symbol: 'د.إ',  code: 'AED' },
        SAR: { rate: 3.75,   symbol: '﷼',    code: 'SAR' },
        CNY: { rate: 7.25,   symbol: '¥',    code: 'CNY' }
    };
    let activeCurrency = exchangeRates.USD;

    function formatPrice(usdPrice) {
        const converted = usdPrice * activeCurrency.rate;
        const decimals = ['JPY','INR'].includes(activeCurrency.code) ? 0 : 2;
        return activeCurrency.symbol + converted.toFixed(decimals);
    }

    // -------------------------------------------
    // LANGUAGE STATE & TRANSLATIONS
    // -------------------------------------------
    const translations = {
        en: {
            addToCart: 'Add to cart',
            sendInquiry: 'Send inquiry',
            saveLater: 'Save for later',
            inStock: 'In stock',
            shipping: 'Shipping',
            freeShipping: 'Free Shipping',
            reviews: 'reviews',
            sold: 'sold',
            allCategories: 'All Categories',
            shop: 'Shop',
            hotOffers: 'Hot offers',
            giftBoxes: 'Gift boxes',
            search: 'Search',
            myCart: 'My cart',
            profile: 'Profile',
            message: 'Message',
            orders: 'Orders',
            continueShop: 'Continue shopping',
            removeAll: 'Remove all',
            checkout: 'Checkout Securely',
            orderSummary: 'Order Summary',
            subtotal: 'Subtotal',
            tax: 'Tax (5%)',
            total: 'Total',
            similarProducts: 'Similar products',
            recommended: 'Recommended items',
            deals: 'Deals and offers',
            homeInteriors: 'Home interiors',
            consumerElec: 'Consumer electronics',
            applyFilter: 'Apply Filter',
            category: 'Category',
            brands: 'Brands',
            priceRange: 'Price Range',
            features: 'Features',
            readMore: 'Read full description...',
            about: 'About this product:'
        },
        es: {
            addToCart: 'Añadir al carrito',
            sendInquiry: 'Enviar consulta',
            saveLater: 'Guardar para después',
            inStock: 'En stock',
            shipping: 'Envío',
            freeShipping: 'Envío gratis',
            reviews: 'reseñas',
            sold: 'vendidos',
            allCategories: 'Todas las categorías',
            shop: 'Tienda',
            hotOffers: 'Ofertas calientes',
            giftBoxes: 'Cajas regalo',
            search: 'Buscar',
            myCart: 'Mi carrito',
            profile: 'Perfil',
            message: 'Mensaje',
            orders: 'Pedidos',
            continueShop: 'Seguir comprando',
            removeAll: 'Eliminar todo',
            checkout: 'Pagar de forma segura',
            orderSummary: 'Resumen del pedido',
            subtotal: 'Subtotal',
            tax: 'Impuesto (5%)',
            total: 'Total',
            similarProducts: 'Productos similares',
            recommended: 'Artículos recomendados',
            deals: 'Ofertas y descuentos',
            homeInteriors: 'Interiores del hogar',
            consumerElec: 'Electrónica de consumo',
            applyFilter: 'Aplicar filtro',
            category: 'Categoría',
            brands: 'Marcas',
            priceRange: 'Rango de precio',
            features: 'Características',
            readMore: 'Leer descripción completa...',
            about: 'Sobre este producto:'
        },
        fr: {
            addToCart: 'Ajouter au panier',
            sendInquiry: 'Envoyer une demande',
            saveLater: 'Sauvegarder',
            inStock: 'En stock',
            shipping: 'Livraison',
            freeShipping: 'Livraison gratuite',
            reviews: 'avis',
            sold: 'vendus',
            allCategories: 'Toutes catégories',
            shop: 'Boutique',
            hotOffers: 'Meilleures offres',
            giftBoxes: 'Coffrets cadeaux',
            search: 'Chercher',
            myCart: 'Mon panier',
            profile: 'Profil',
            message: 'Message',
            orders: 'Commandes',
            continueShop: 'Continuer mes achats',
            removeAll: 'Tout supprimer',
            checkout: 'Paiement sécurisé',
            orderSummary: 'Résumé de commande',
            subtotal: 'Sous-total',
            tax: 'Taxe (5%)',
            total: 'Total',
            similarProducts: 'Produits similaires',
            recommended: 'Articles recommandés',
            deals: 'Offres et promotions',
            homeInteriors: 'Intérieur maison',
            consumerElec: 'Électronique grand public',
            applyFilter: 'Appliquer filtre',
            category: 'Catégorie',
            brands: 'Marques',
            priceRange: 'Gamme de prix',
            features: 'Caractéristiques',
            readMore: 'Lire la description complète...',
            about: 'À propos de ce produit:'
        },
        ar: {
            addToCart: 'أضف إلى السلة',
            sendInquiry: 'إرسال استفسار',
            saveLater: 'حفظ لاحقاً',
            inStock: 'متوفر',
            shipping: 'شحن',
            freeShipping: 'شحن مجاني',
            reviews: 'تقييم',
            sold: 'مباع',
            allCategories: 'جميع الفئات',
            shop: 'المتجر',
            hotOffers: 'عروض ساخنة',
            giftBoxes: 'صناديق الهدايا',
            search: 'بحث',
            myCart: 'سلتي',
            profile: 'ملفي',
            message: 'رسالة',
            orders: 'طلبات',
            continueShop: 'مواصلة التسوق',
            removeAll: 'إزالة الكل',
            checkout: 'الدفع الآمن',
            orderSummary: 'ملخص الطلب',
            subtotal: 'المجموع الفرعي',
            tax: 'ضريبة (5%)',
            total: 'المجموع',
            similarProducts: 'منتجات مشابهة',
            recommended: 'منتجات موصى بها',
            deals: 'عروض وخصومات',
            homeInteriors: 'ديكور المنزل',
            consumerElec: 'إلكترونيات',
            applyFilter: 'تطبيق الفلتر',
            category: 'الفئة',
            brands: 'العلامات',
            priceRange: 'نطاق السعر',
            features: 'المميزات',
            readMore: 'اقرأ الوصف الكامل...',
            about: 'عن هذا المنتج:'
        },
        hi: {
            addToCart: 'कार्ट में जोड़ें',
            sendInquiry: 'पूछताछ भेजें',
            saveLater: 'बाद के लिए सेव करें',
            inStock: 'स्टॉक में है',
            shipping: 'शिपिंग',
            freeShipping: 'मुफ्त शिपिंग',
            reviews: 'समीक्षाएं',
            sold: 'बेचे गए',
            allCategories: 'सभी श्रेणियां',
            shop: 'दुकान',
            hotOffers: 'गर्म ऑफर',
            giftBoxes: 'गिफ्ट बॉक्स',
            search: 'खोजें',
            myCart: 'मेरी कार्ट',
            profile: 'प्रोफ़ाइल',
            message: 'संदेश',
            orders: 'ऑर्डर',
            continueShop: 'खरीदारी जारी रखें',
            removeAll: 'सब हटाएं',
            checkout: 'सुरक्षित भुगतान',
            orderSummary: 'ऑर्डर सारांश',
            subtotal: 'उप-कुल',
            tax: 'कर (5%)',
            total: 'कुल',
            similarProducts: 'समान उत्पाद',
            recommended: 'अनुशंसित आइटम',
            deals: 'डील और ऑफर',
            homeInteriors: 'घर की सजावट',
            consumerElec: 'इलेक्ट्रॉनिक्स',
            applyFilter: 'फ़िल्टर लागू करें',
            category: 'श्रेणी',
            brands: 'ब्रांड',
            priceRange: 'मूल्य सीमा',
            features: 'विशेषताएं',
            readMore: 'पूरा विवरण पढ़ें...',
            about: 'इस उत्पाद के बारे में:'
        },
        de: {
            addToCart: 'In den Warenkorb',
            sendInquiry: 'Anfrage senden',
            saveLater: 'Für später speichern',
            inStock: 'Auf Lager',
            shipping: 'Versand',
            freeShipping: 'Kostenloser Versand',
            reviews: 'Bewertungen',
            sold: 'verkauft',
            allCategories: 'Alle Kategorien',
            shop: 'Shop',
            hotOffers: 'Heiße Angebote',
            giftBoxes: 'Geschenkboxen',
            search: 'Suchen',
            myCart: 'Mein Warenkorb',
            profile: 'Profil',
            message: 'Nachricht',
            orders: 'Bestellungen',
            continueShop: 'Weiter einkaufen',
            removeAll: 'Alle entfernen',
            checkout: 'Sicher bezahlen',
            orderSummary: 'Bestellübersicht',
            subtotal: 'Zwischensumme',
            tax: 'Steuer (5%)',
            total: 'Gesamt',
            similarProducts: 'Ähnliche Produkte',
            recommended: 'Empfohlene Artikel',
            deals: 'Angebote und Deals',
            homeInteriors: 'Wohndesign',
            consumerElec: 'Unterhaltungselektronik',
            applyFilter: 'Filter anwenden',
            category: 'Kategorie',
            brands: 'Marken',
            priceRange: 'Preisbereich',
            features: 'Merkmale',
            readMore: 'Vollständige Beschreibung lesen...',
            about: 'Über dieses Produkt:'
        },
        zh: {
            addToCart: '加入购物车',
            sendInquiry: '发送询价',
            saveLater: '稍后购买',
            inStock: '有库存',
            shipping: '运费',
            freeShipping: '免费送货',
            reviews: '评论',
            sold: '已售',
            allCategories: '全部分类',
            shop: '商店',
            hotOffers: '热门优惠',
            giftBoxes: '礼品盒',
            search: '搜索',
            myCart: '我的购物车',
            profile: '个人资料',
            message: '消息',
            orders: '订单',
            continueShop: '继续购物',
            removeAll: '全部删除',
            checkout: '安全结账',
            orderSummary: '订单摘要',
            subtotal: '小计',
            tax: '税 (5%)',
            total: '总计',
            similarProducts: '相似产品',
            recommended: '推荐商品',
            deals: '优惠活动',
            homeInteriors: '家居装饰',
            consumerElec: '消费电子',
            applyFilter: '应用筛选',
            category: '分类',
            brands: '品牌',
            priceRange: '价格范围',
            features: '特点',
            readMore: '阅读完整描述...',
            about: '关于此产品:'
        },
        ja: {
            addToCart: 'カートに追加',
            sendInquiry: '問い合わせを送る',
            saveLater: '後で購入',
            inStock: '在庫あり',
            shipping: '配送',
            freeShipping: '送料無料',
            reviews: 'レビュー',
            sold: '販売数',
            allCategories: '全カテゴリ',
            shop: 'ショップ',
            hotOffers: '人気商品',
            giftBoxes: 'ギフトボックス',
            search: '検索',
            myCart: 'マイカート',
            profile: 'プロフィール',
            message: 'メッセージ',
            orders: '注文',
            continueShop: 'ショッピングを続ける',
            removeAll: 'すべて削除',
            checkout: '安全に購入',
            orderSummary: '注文概要',
            subtotal: '小計',
            tax: '税金 (5%)',
            total: '合計',
            similarProducts: '類似商品',
            recommended: 'おすすめアイテム',
            deals: 'セールとオファー',
            homeInteriors: 'インテリア',
            consumerElec: '家電',
            applyFilter: 'フィルター適用',
            category: 'カテゴリ',
            brands: 'ブランド',
            priceRange: '価格帯',
            features: '特徴',
            readMore: '全文を読む...',
            about: 'この商品について:'
        }
    };
    let activeLang = translations.en;
    let activeLangCode = 'en';

    function t(key) { return activeLang[key] || translations.en[key] || key; }

    function applyLanguageToDOM() {
        // Nav links
        const navHot = document.getElementById('nav-hot-offers-btn'); if (navHot) navHot.textContent = t('hotOffers');
        const navGift = document.getElementById('nav-gift-boxes-btn'); if (navGift) navGift.textContent = t('giftBoxes');
        const navShop = document.getElementById('nav-shop-btn'); if (navShop) navShop.textContent = t('shop');
        // Header actions
        const myCartSpan = document.querySelector('.cart-header-link span:last-child'); if (myCartSpan) myCartSpan.textContent = t('myCart');
        const profileSpan = document.querySelector('.profile-link span'); if (profileSpan) profileSpan.textContent = t('profile');
        // Cart view
        const checkoutBtn = document.getElementById('checkout-btn'); if (checkoutBtn) checkoutBtn.innerHTML = `<i class="fa-solid fa-lock"></i> ${t('checkout')}`;
        const removeAllBtn = document.getElementById('remove-all-btn'); if (removeAllBtn) removeAllBtn.textContent = t('removeAll');
        const continueShopBtn = document.querySelector('#view-cart .btn-primary[data-link="listing"]'); if (continueShopBtn) continueShopBtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i> ${t('continueShop')}`;
        // Order summary labels
        const summarySubLabel = document.getElementById('summary-subtotal-label'); if (summarySubLabel) summarySubLabel.textContent = `${t('subtotal')}:`;
        // Listing sidebar headings
        document.querySelectorAll('.filter-section h4').forEach((el, i) => {
            const keys = ['category','brands','priceRange','features'];
            if (keys[i]) el.textContent = t(keys[i]);
        });
        // Apply filter button
        const applyBtn = document.getElementById('apply-filters-btn');
        if (applyBtn) applyBtn.innerHTML = `<i class="fa-solid fa-sliders"></i> ${t('applyFilter')}`;
        // Details page buttons
        const addCartBtn = document.getElementById('add-to-cart-btn'); if (addCartBtn) addCartBtn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${t('addToCart')}`;
        const sendInqBtn = document.getElementById('send-inquiry-btn'); if (sendInqBtn) sendInqBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${t('sendInquiry')}`;
        const wishBtn = document.querySelector('#view-details .wishlist-btn'); if (wishBtn) wishBtn.innerHTML = `<i class="fa-regular fa-heart"></i> &nbsp;${t('saveLater')}`;
        // Home section headings
        const dealsHeading = document.querySelector('.card-header h3');
        if (dealsHeading) {
            const headings = document.querySelectorAll('.card-header h3');
            if (headings[0]) headings[0].textContent = t('deals');
            if (headings[1]) headings[1].textContent = t('homeInteriors');
            if (headings[2]) headings[2].textContent = t('consumerElec');
            if (headings[3]) headings[3].textContent = t('recommended');
        }
        // In stock status on details
        const inStockEl = document.querySelector('#view-details .product-info-main > div:first-child');
        if (inStockEl && inStockEl.textContent.includes('stock')) {
            inStockEl.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${t('inStock')}`;
        }
        // Similar products heading
        const simHeading = document.querySelector('#view-details .card .card-header h3');
        if (simHeading) simHeading.textContent = t('similarProducts');
    }

    // -------------------------------------------
    // PROMO STATE
    // -------------------------------------------
    let promoActivated = false;
    let showPromoProductsOnly = false;
    const promoProductIds = ['prod-7', 'prod-8', 'prod-17', 'prod-18'];

    let hotOffersActivated = false;
    let showHotOffersOnly = false;
    const hotOffersProductIds = ['prod-7', 'prod-8', 'prod-21'];

    let giftBoxesActivated = false;
    let showGiftBoxesOnly = false;
    const giftBoxesProductIds = ['prod-3', 'prod-4', 'prod-5', 'prod-6'];

    // -------------------------------------------
    // CART STATE
    // -------------------------------------------
    let currentCartTotal = 0;
    let cart = [
        { product: products.find(p => p.id === "prod-3"), quantity: 2 },  // Linen Shirt
        { product: products.find(p => p.id === "prod-7"), quantity: 1 }, // Samsung S24
        { product: products.find(p => p.id === "prod-8"), quantity: 1 }   // iPhone 15
    ];

    // Count total items in cart
    function getCartCount() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const cartBadge = document.getElementById('cart-badge');
    function updateCartBadge() {
        if (cartBadge) {
            cartBadge.textContent = getCartCount();
        }
    }

    // -------------------------------------------
    // DYNAMIC RENDERING FUNCTIONS
    // -------------------------------------------

    // Helper to generate star HTML
    function getStarsHtml(rating) {
        let html = '';
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                html += '<i class="fa-solid fa-star"></i>';
            } else if (i === fullStars && hasHalf) {
                html += '<i class="fa-solid fa-star-half-stroke"></i>';
            } else {
                html += '<i class="fa-regular fa-star"></i>';
            }
        }
        return html;
    }

    // Helper to generate product card HTML with promo badges/styles
    function getProductCardHtml(p) {
        const isSupplierPromo = promoProductIds.includes(p.id);
        const isHotPromo = hotOffersProductIds.includes(p.id);
        const isGiftPromo = giftBoxesProductIds.includes(p.id);

        let promoBadge = '';
        let borderStyle = 'position: relative;';
        let activeRibbon = '';

        if (isSupplierPromo && promoActivated) {
            promoBadge = `<span class="badge discount" style="background:#20c997; color:white; font-size:11px; margin-left:6px; padding:2px 6px; border-radius:4px; display:inline-block; vertical-align:middle; margin-top:-2px;">$10 Off Promo</span>`;
            borderStyle = 'border: 2px solid #20c997; position: relative;';
            activeRibbon = `<div style="position:absolute; top:10px; right:10px; background:#20c997; color:white; padding:4px 8px; font-size:11px; font-weight:bold; border-radius:4px; box-shadow:0 2px 4px rgba(0,0,0,0.1); z-index: 2;">Promo Active</div>`;
        } else if (isHotPromo && hotOffersActivated) {
            promoBadge = `<span class="badge discount" style="background:#ff3838; color:white; font-size:11px; margin-left:6px; padding:2px 6px; border-radius:4px; display:inline-block; vertical-align:middle; margin-top:-2px;">$20 Off Promo</span>`;
            borderStyle = 'border: 2px solid #ff3838; position: relative;';
            activeRibbon = `<div style="position:absolute; top:10px; right:10px; background:#ff3838; color:white; padding:4px 8px; font-size:11px; font-weight:bold; border-radius:4px; box-shadow:0 2px 4px rgba(0,0,0,0.1); z-index: 2;">Hot Offer</div>`;
        } else if (isGiftPromo && giftBoxesActivated) {
            promoBadge = `<span class="badge discount" style="background:#8f12fd; color:white; font-size:11px; margin-left:6px; padding:2px 6px; border-radius:4px; display:inline-block; vertical-align:middle; margin-top:-2px;">Free Gift + $15 Off</span>`;
            borderStyle = 'border: 2px solid #8f12fd; position: relative;';
            activeRibbon = `<div style="position:absolute; top:10px; right:10px; background:#8f12fd; color:white; padding:4px 8px; font-size:11px; font-weight:bold; border-radius:4px; box-shadow:0 2px 4px rgba(0,0,0,0.1); z-index: 2;">Gift Pack</div>`;
        }

        return `
            <div class="product-card" data-link="details" data-product-id="${p.id}" style="cursor:pointer; ${borderStyle}">
                <div class="img-wrapper" style="position:relative;">
                    <img src="${p.image}" alt="${p.name}">
                    ${activeRibbon}
                </div>
                <div class="price">${formatPrice(p.price)} ${promoBadge}</div>
                <div class="rating">
                    <div class="stars">${getStarsHtml(p.rating)}</div>
                    <span>${p.rating.toFixed(1)} (${p.reviews} orders)</span>
                </div>
                <h4 style="margin-top:6px; height:40px; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${p.name}</h4>
                <p class="shipping" style="margin-top:auto;"><i class="fa-solid fa-truck"></i> ${p.shipping}</p>
            </div>
        `;
    }

    // 1. Render Home View Grids
    function renderHomeProducts() {
        // Helper to find product by id
        function findById(id) { return products.find(p => p.id === id); }

        // A. Deals & Offers: Show 5 products with custom discounts
        const dealsGrid = document.getElementById('home-deals-grid');
        if (dealsGrid) {
            const dealProducts = [
                findById('prod-7'),  // Samsung S24
                findById('prod-8'),  // iPhone 15
                findById('prod-3'),  // Linen Shirt
                findById('prod-5'),  // Table Lamp
                findById('prod-19') // Poco X6 Pro
            ].filter(Boolean);
            const discounts = ["-20%", "-15%", "-28%", "-35%", "-30%"];
            dealsGrid.innerHTML = dealProducts.map((p, idx) => `
                <div class="deal-item-desktop" data-link="details" data-product-id="${p.id}" style="cursor:pointer;">
                    <div class="img-wrapper"><img src="${p.image}" alt="${p.name}"></div>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 130px;">${p.name}</p>
                    <span class="badge discount">${discounts[idx]}</span>
                </div>
            `).join('');
        }

        // B. Home Interiors Showcase: Show 3 products from Home interiors
        const homeOutdoorGrid = document.getElementById('home-outdoor-grid');
        if (homeOutdoorGrid) {
            const homeProducts = products.filter(p => p.category === "Home interiors").slice(0, 3);
            homeOutdoorGrid.innerHTML = homeProducts.map(p => `
                <div class="deal-item-desktop" data-link="details" data-product-id="${p.id}" style="cursor:pointer;">
                    <div class="img-wrapper" style="height:100px;"><img src="${p.image}" alt="${p.name}"></div>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 120px;">${p.name}</p>
                    <span class="subtext">From ${formatPrice(p.price)}</span>
                </div>
            `).join('');
        }

        // C. Consumer Electronics (Mobiles): Show 3 products from Computer & tech
        const homeElectronicsGrid = document.getElementById('home-electronics-grid');
        if (homeElectronicsGrid) {
            const techProducts = products.filter(p => p.category === "Computer and tech").slice(0, 3);
            homeElectronicsGrid.innerHTML = techProducts.map(p => `
                <div class="deal-item-desktop" data-link="details" data-product-id="${p.id}" style="cursor:pointer;">
                    <div class="img-wrapper" style="height:100px;"><img src="${p.image}" alt="${p.name}"></div>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 120px;">${p.name}</p>
                    <span class="subtext">From ${formatPrice(p.price)}</span>
                </div>
            `).join('');
        }

        // D. Recommended Items Showcase: Show 5 mobile products
        const recommendedGrid = document.getElementById('home-recommended-grid');
        if (recommendedGrid) {
            const recommendedProducts = [
                findById('prod-17'), // Huawei Pura 70
                findById('prod-18'), // Sony Xperia
                findById('prod-19'), // Poco X6 Pro
                findById('prod-20'), // Samsung A55
                findById('prod-21')  // iPhone 14
            ].filter(Boolean);
            recommendedGrid.innerHTML = recommendedProducts.map(p => `
                <div class="deal-item-desktop" data-link="details" data-product-id="${p.id}" style="cursor:pointer;">
                    <div class="img-wrapper"><img src="${p.image}" alt="${p.name}"></div>
                    <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 130px; font-weight: 500;">${p.name}</p>
                    <span class="subtext price-tag" style="color:var(--text-primary); font-weight:700;">${formatPrice(p.price)}</span>
                </div>
            `).join('');
        }
    }

    // Active Category Filter for listing page
    let activeCategory = 'all';
    let activeSearchQuery = '';

    // 2. Render Shop / Listing Page Products
    function renderListingProducts() {
        const listingProductsGrid = document.getElementById('listing-products-grid');
        if (!listingProductsGrid) return;

        // Filter products based on active category or promo filter
        let filtered = [];
        if (showPromoProductsOnly) {
            filtered = products.filter(p => promoProductIds.includes(p.id));
        } else if (showHotOffersOnly) {
            filtered = products.filter(p => hotOffersProductIds.includes(p.id));
        } else if (showGiftBoxesOnly) {
            filtered = products.filter(p => giftBoxesProductIds.includes(p.id));
        } else {
            filtered = activeCategory === 'all' 
                ? products 
                : products.filter(p => p.category === activeCategory);
        }

        // Apply activeSearchQuery filter if present
        if (activeSearchQuery) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(activeSearchQuery) || 
                p.description.toLowerCase().includes(activeSearchQuery) ||
                p.category.toLowerCase().includes(activeSearchQuery) ||
                p.supplier.toLowerCase().includes(activeSearchQuery)
            );
        }

        let html = '';
        if (showPromoProductsOnly) {
            html += `
                <div style="grid-column: 1/-1; background: #e8fafd; border: 1px solid #b2ebf2; border-radius: 8px; padding: 14px 20px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; color: #006064; font-size: 15px; font-weight: 500;">
                    <div>
                        <i class="fa-solid fa-circle-info" style="color:#00bcd4; margin-right:8px;"></i>
                        Showing 4 promo products. Get US $10 off if your total order is over $300!
                    </div>
                    <button id="reset-promo-filter-btn" style="border: 1px solid #00bcd4; color:#00bcd4; background:white; padding:6px 12px; font-size:13px; border-radius:4px; cursor:pointer;">
                        Show all products
                    </button>
                </div>
            `;
        } else if (showHotOffersOnly) {
            html += `
                <div style="grid-column: 1/-1; background: #ffebee; border: 1px solid #ffcdd2; border-radius: 8px; padding: 14px 20px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; color: #c62828; font-size: 15px; font-weight: 500;">
                    <div>
                        <i class="fa-solid fa-fire" style="color:#ff3838; margin-right:8px;"></i>
                        Hot Offers: Save flat $20.00 off on these items when your order is over $200!
                    </div>
                    <button id="reset-promo-filter-btn" style="border: 1px solid #ff3838; color:#ff3838; background:white; padding:6px 12px; font-size:13px; border-radius:4px; cursor:pointer;">
                        Show all products
                    </button>
                </div>
            `;
        } else if (showGiftBoxesOnly) {
            html += `
                <div style="grid-column: 1/-1; background: #f3e5f5; border: 1px solid #e1bee7; border-radius: 8px; padding: 14px 20px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; color: #4a148c; font-size: 15px; font-weight: 500;">
                    <div>
                        <i class="fa-solid fa-gift" style="color:#8f12fd; margin-right:8px;"></i>
                        Gift Box Special: Get a Free Gift Box + flat $15.00 off when your order is over $150!
                    </div>
                    <button id="reset-promo-filter-btn" style="border: 1px solid #8f12fd; color:#8f12fd; background:white; padding:6px 12px; font-size:13px; border-radius:4px; cursor:pointer;">
                        Show all products
                    </button>
                </div>
            `;
        }

        if (filtered.length === 0) {
            const noMatchMsg = activeSearchQuery 
                ? `No products match "${escapeHtml(activeSearchQuery)}".`
                : "No products found in this category.";
            html += `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size:48px; margin-bottom:16px; display:block;"></i>
                    <p>${noMatchMsg}</p>
                </div>
            `;
            listingProductsGrid.innerHTML = html;
            return;
        }

        html += filtered.map(p => getProductCardHtml(p)).join('');
        listingProductsGrid.innerHTML = html;

        // Update selected class in listing sidebar
        document.querySelectorAll('#listing-category-list .category-tab').forEach(tab => {
            const cat = tab.getAttribute('data-category');
            if (cat === activeCategory) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    // Set active category and re-render listing
    function setActiveCategory(category) {
        activeCategory = category;
        renderListingProducts();
    }

    // 3. Load Individual Product Details Page
    let currentSelectedProductId = "prod-7"; // Default — Samsung S24 Ultra

    function loadProductDetails(productId) {
        const p = products.find(prod => prod.id === productId);
        if (!p) return;

        currentSelectedProductId = productId;

        // Reset details quantity val
        const qtyVal = document.getElementById('details-qty-val');
        if (qtyVal) qtyVal.textContent = '1';

        // Breadcrumb
        const breadcrumbCat = document.getElementById('details-breadcrumb-category');
        if (breadcrumbCat) {
            breadcrumbCat.textContent = p.category;
            breadcrumbCat.setAttribute('data-category', p.category);
        }
        const breadcrumbName = document.getElementById('details-breadcrumb-name');
        if (breadcrumbName) {
            breadcrumbName.textContent = p.name;
        }

        // Main Image & Thumbs
        const mainImg = document.getElementById('main-gallery-img');
        if (mainImg) {
            mainImg.src = p.image;
            mainImg.alt = p.name;
        }

        const galleryThumbs = document.getElementById('details-gallery-thumbs');
        if (galleryThumbs) {
            galleryThumbs.innerHTML = p.thumbs.map((thumbUrl, idx) => `
                <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" style="cursor:pointer;">
                    <img src="${thumbUrl}" alt="Thumbnail ${idx + 1}">
                </div>
            `).join('');
        }

        // Title & Rating
        const title = document.getElementById('details-title');
        if (title) title.textContent = p.name;

        const ratingBox = document.getElementById('details-rating-box');
        if (ratingBox) {
            ratingBox.innerHTML = `
                <div class="stars">${getStarsHtml(p.rating)}</div>
                <span style="font-weight:600;">${p.rating.toFixed(1)}</span>
                <span class="text-muted">• ${p.reviews} reviews</span>
                <span class="text-muted">• ${p.sold} sold</span>
            `;
        }

        // Price
        const price = document.getElementById('details-price');
        if (price) price.textContent = formatPrice(p.price);

        const origPrice = document.getElementById('details-original-price');
        if (origPrice) origPrice.textContent = formatPrice(p.originalPrice);

        // Promo Alert
        const promoAlert = document.getElementById('details-promo-alert');
        if (promoAlert) {
            const isSupplierPromo = promoProductIds.includes(p.id);
            const isHotPromo = hotOffersProductIds.includes(p.id);
            const isGiftPromo = giftBoxesProductIds.includes(p.id);

            if (isSupplierPromo || isHotPromo || isGiftPromo) {
                promoAlert.style.display = 'block';
                promoAlert.style.background = '#f8f9fa';
                promoAlert.style.borderColor = '#e3e8ee';
                promoAlert.style.color = '#1c1c1c';
                promoAlert.style.padding = '16px';
                
                let alertHtml = '<div style="display:flex; flex-direction:column; gap:12px;">';
                
                if (isSupplierPromo) {
                    if (promoActivated) {
                        alertHtml += `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#e8fafd; border:1px solid #b2ebf2; border-radius:6px; padding:10px 14px; color:#006064; font-size:14px; font-weight:500;">
                                <span><i class="fa-solid fa-gift" style="color:#20c997; margin-right:8px;"></i>Supplier Offer: US $10 off (order > $300)</span>
                                <span style="background:#20c997; color:white; padding:2px 8px; font-size:11px; border-radius:4px; font-weight:bold;">Active</span>
                            </div>
                        `;
                    } else {
                        alertHtml += `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#fff3cd; border:1px solid #ffeeba; border-radius:6px; padding:10px 14px; color:#856404; font-size:14px; font-weight:500;">
                                <span><i class="fa-solid fa-gift" style="color:#ff9017; margin-right:8px;"></i>Supplier Offer: US $10 off (order > $300)</span>
                                <button class="activate-promo-details-btn" data-promo="supplier" style="background:#ff9017; color:white; border:none; padding:4px 10px; font-size:12px; border-radius:4px; font-weight:bold; cursor:pointer;">Activate</button>
                            </div>
                        `;
                    }
                }
                
                if (isHotPromo) {
                    if (hotOffersActivated) {
                        alertHtml += `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#ffebee; border:1px solid #ffcdd2; border-radius:6px; padding:10px 14px; color:#c62828; font-size:14px; font-weight:500;">
                                <span><i class="fa-solid fa-fire" style="color:#ff3838; margin-right:8px;"></i>Hot Offer: Flat $20.00 off (order > $200)</span>
                                <span style="background:#ff3838; color:white; padding:2px 8px; font-size:11px; border-radius:4px; font-weight:bold;">Active</span>
                            </div>
                        `;
                    } else {
                        alertHtml += `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#fff3cd; border:1px solid #ffeeba; border-radius:6px; padding:10px 14px; color:#856404; font-size:14px; font-weight:500;">
                                <span><i class="fa-solid fa-fire" style="color:#ff3838; margin-right:8px;"></i>Hot Offer: Flat $20.00 off (order > $200)</span>
                                <button class="activate-promo-details-btn" data-promo="hot" style="background:#ff9017; color:white; border:none; padding:4px 10px; font-size:12px; border-radius:4px; font-weight:bold; cursor:pointer;">Activate</button>
                            </div>
                        `;
                    }
                }
                
                if (isGiftPromo) {
                    if (giftBoxesActivated) {
                        alertHtml += `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#f3e5f5; border:1px solid #e1bee7; border-radius:6px; padding:10px 14px; color:#4a148c; font-size:14px; font-weight:500;">
                                <span><i class="fa-solid fa-gift" style="color:#8f12fd; margin-right:8px;"></i>Gift Box Promo: Free Deluxe Box + $15.00 off (order > $150)</span>
                                <span style="background:#8f12fd; color:white; padding:2px 8px; font-size:11px; border-radius:4px; font-weight:bold;">Active</span>
                            </div>
                        `;
                    } else {
                        alertHtml += `
                            <div style="display:flex; justify-content:space-between; align-items:center; background:#fff3cd; border:1px solid #ffeeba; border-radius:6px; padding:10px 14px; color:#856404; font-size:14px; font-weight:500;">
                                <span><i class="fa-solid fa-gift" style="color:#8f12fd; margin-right:8px;"></i>Gift Box Promo: Free Deluxe Box + $15.00 off (order > $150)</span>
                                <button class="activate-promo-details-btn" data-promo="gift" style="background:#ff9017; color:white; border:none; padding:4px 10px; font-size:12px; border-radius:4px; font-weight:bold; cursor:pointer;">Activate</button>
                            </div>
                        `;
                    }
                }
                
                alertHtml += '</div>';
                promoAlert.innerHTML = alertHtml;
            } else {
                promoAlert.style.display = 'none';
            }
        }

        // Specs Table
        const specsTable = document.getElementById('details-specs-table');
        if (specsTable) {
            let trs = `<tr><td>Category:</td><td><strong>${p.category}</strong></td></tr>`;
            for (const [key, val] of Object.entries(p.specs)) {
                trs += `<tr><td>${key}:</td><td>${val}</td></tr>`;
            }
            specsTable.innerHTML = trs;
        }

        // Description
        const about = document.getElementById('details-about');
        if (about) {
            about.innerHTML = `
                <strong>About this product:</strong> ${p.about}
                <a href="#" style="color:var(--primary-color); display:block; margin-top:8px;">Read full description...</a>
            `;
        }

        // Supplier Info
        const supAvatar = document.getElementById('details-supplier-avatar');
        if (supAvatar) supAvatar.textContent = p.supplierAvatar;

        const supName = document.getElementById('details-supplier-name');
        if (supName) supName.textContent = p.supplier;

        const supStars = document.getElementById('details-supplier-stars');
        if (supStars) supStars.innerHTML = getStarsHtml(4.5); // Fixed supplier rating

        const supInfo = document.getElementById('details-supplier-info');
        if (supInfo) {
            supInfo.innerHTML = `
                <span><img src="https://flagcdn.com/w20/${p.supplierCountry.includes('Germany') ? 'de' : p.supplierCountry.includes('Japan') ? 'jp' : p.supplierCountry.includes('China') ? 'cn' : 'us'}.png" alt="Country" style="vertical-align:middle; width:18px;"> ${p.supplierCountry}</span>
                <span><i class="fa-solid fa-shield-halved" style="color:#198754;"></i> ${p.supplierVerified ? 'Verified Seller' : 'Registered Seller'}</span>
                <span><i class="fa-solid fa-globe" style="color:var(--primary-color);"></i> Worldwide shipping</span>
                <span><i class="fa-solid fa-clock" style="color:#ff9017;"></i> Fast inquiry response</span>
            `;
        }

        // Similar Products Grid (Other items from same category, or list default)
        const similarGrid = document.getElementById('details-similar-grid');
        if (similarGrid) {
            const similar = products.filter(prod => prod.category === p.category && prod.id !== p.id);
            const displaySimilar = similar.length > 0 ? similar : products.filter(prod => prod.id !== p.id).slice(0, 5);
            similarGrid.innerHTML = displaySimilar.slice(0, 5).map(prod => `
                <div class="deal-item-desktop" data-link="details" data-product-id="${prod.id}" style="cursor:pointer;">
                    <div class="img-wrapper"><img src="${prod.image}" alt="${prod.name}"></div>
                    <div class="price" style="font-size:16px;font-weight:600;">${formatPrice(prod.price)}</div>
                    <span class="subtext" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 130px; display:block;">${prod.name}</span>
                </div>
            `).join('');
        }
    }

    // 4. Render Cart View Items & Totals
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (!cartContainer) return;

        const cartHeader = document.querySelector('#view-cart h2');
        if (cartHeader) {
            cartHeader.textContent = `My cart (${getCartCount()})`;
        }

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                    <i class="fa-solid fa-cart-shopping" style="font-size:48px; margin-bottom:16px; display:block;"></i>
                    <p>Your cart is empty.</p>
                    <button class="btn btn-primary" data-link="listing" style="margin-top:16px;">Go to Shop</button>
                </div>
            `;
            // Zero out summaries
            updateCartTotal(0);
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item-desktop" data-cart-product-id="${item.product.id}">
                <div class="img-wrapper"><img src="${item.product.image}" alt="${item.product.name}"></div>
                <div class="cart-item-info">
                    <div class="cart-item-header">
                        <div>
                            <h4 class="cart-item-click-title" data-link="details" data-product-id="${item.product.id}" style="cursor:pointer; hover:text-decoration:underline;">${item.product.name}</h4>
                            <div class="text-muted" style="margin-top:4px; font-size:14px;">Category: ${item.product.category}</div>
                            <div class="text-muted" style="font-size:14px;">Seller: <strong>${item.product.supplier}</strong></div>
                        </div>
                        <div class="cart-item-price">${formatPrice(item.product.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div style="display:flex; gap:12px; align-items:center;">
                            <button class="btn btn-text cart-delete-item-btn" style="color:var(--danger-color); font-size:14px;">
                                <i class="fa-regular fa-trash-can"></i> Remove
                            </button>
                            <button class="btn btn-text wishlist-btn" style="color:var(--primary-color); font-size:14px;"><i class="fa-regular fa-heart"></i> Save for later</button>
                        </div>
                        <div class="quantity-control">
                            <button class="qty-btn cart-qty-minus">-</button>
                            <span class="qty">${item.quantity}</span>
                            <button class="qty-btn cart-qty-plus">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Recalculate totals
        let subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        updateCartTotal(subtotal);
    }

    function updateCartTotal(subtotal) {
        // 1. Supplier Promo check
        const hasSupplierPromoProduct = cart.some(item => promoProductIds.includes(item.product.id));
        const supplierPromoApplies = promoActivated && subtotal > 300 && hasSupplierPromoProduct;
        const supplierDiscount = supplierPromoApplies ? 10 : 0;

        // 2. Hot Offers Promo check
        const hasHotPromoProduct = cart.some(item => hotOffersProductIds.includes(item.product.id));
        const hotPromoApplies = hotOffersActivated && subtotal > 200 && hasHotPromoProduct;
        const hotDiscount = hotPromoApplies ? 20 : 0;

        // 3. Gift Boxes Promo check
        const hasGiftPromoProduct = cart.some(item => giftBoxesProductIds.includes(item.product.id));
        const giftPromoApplies = giftBoxesActivated && subtotal > 150 && hasGiftPromoProduct;
        const giftDiscount = giftPromoApplies ? 15 : 0;

        const totalDiscount = supplierDiscount + hotDiscount + giftDiscount;
        const shipping = subtotal > 0 ? 10 : 0;
        const tax = parseFloat((Math.max(0, subtotal - totalDiscount) * 0.05).toFixed(2));
        const total = Math.max(0, subtotal - totalDiscount + shipping + tax);
        currentCartTotal = total;

        const subtotalLabel = document.getElementById('summary-subtotal-label');
        if (subtotalLabel) {
            subtotalLabel.textContent = `Subtotal (${getCartCount()} items):`;
        }

        const subtotalEl = document.getElementById('summary-subtotal');
        if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

        // Supplier Promo Row
        const promoSupplierRow = document.getElementById('summary-promo-row-supplier');
        if (promoSupplierRow) {
            promoSupplierRow.style.display = supplierPromoApplies ? 'flex' : 'none';
        }

        // Hot Promo Row
        const promoHotRow = document.getElementById('summary-promo-row-hot');
        if (promoHotRow) {
            promoHotRow.style.display = hotPromoApplies ? 'flex' : 'none';
        }

        // Gift Promo Row
        const promoGiftRow = document.getElementById('summary-promo-row-gift');
        if (promoGiftRow) {
            promoGiftRow.style.display = giftPromoApplies ? 'flex' : 'none';
        }

        const shippingEl = document.getElementById('summary-shipping');
        if (shippingEl) shippingEl.textContent = shipping > 0 ? '+' + formatPrice(shipping) : formatPrice(0);

        const taxEl = document.getElementById('summary-tax');
        if (taxEl) taxEl.textContent = '+' + formatPrice(tax);

        const totalEl = document.getElementById('summary-total');
        if (totalEl) totalEl.textContent = formatPrice(total);
    }


    // -------------------------------------------
    // LIVE COUNTDOWN TIMER
    // -------------------------------------------
    const cdH = document.getElementById('cd-h');
    const cdM = document.getElementById('cd-m');
    const cdS = document.getElementById('cd-s');

    if (cdH && cdM && cdS) {
        let totalSeconds = (13 * 3600) + (34 * 60) + 56;
        setInterval(() => {
            if (totalSeconds <= 0) return;
            totalSeconds--;
            cdH.textContent = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            cdM.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            cdS.textContent = String(totalSeconds % 60).padStart(2, '0');
        }, 1000);
    }

    // -------------------------------------------
    // PRICE RANGE SLIDER
    // -------------------------------------------
    const priceRange = document.getElementById('price-range');
    const priceVal = document.getElementById('price-val');
    if (priceRange && priceVal) {
        priceRange.addEventListener('input', () => {
            priceVal.textContent = '$' + priceRange.value;
        });
    }

    // -------------------------------------------
    // APPLY FILTER BUTTON
    // -------------------------------------------
    document.addEventListener('click', (e) => {
        if (e.target.closest('#apply-filters-btn')) {
            showPromoProductsOnly = false; // Reset promo filter if manually selecting filters
            // Read selected brands
            const brandCheckboxes = document.querySelectorAll('.filter-list input[type="checkbox"]');
            const selectedBrands = [];
            brandCheckboxes.forEach(cb => {
                if (cb.checked) {
                    selectedBrands.push(cb.parentElement.textContent.trim());
                }
            });

            // Read max price
            const maxPrice = priceRange ? parseInt(priceRange.value) : 500;

            // Filter products
            const listingGrid = document.getElementById('listing-products-grid');
            if (!listingGrid) return;

            let filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

            // Apply brand filter if any brands selected
            if (selectedBrands.length > 0) {
                filtered = filtered.filter(p => {
                    const brand = p.brand || p.supplier || '';
                    return selectedBrands.some(b => brand.toLowerCase().includes(b.toLowerCase()));
                });
            }

            // Apply price filter
            filtered = filtered.filter(p => p.price <= maxPrice);

            if (filtered.length === 0) {
                listingGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                        <i class="fa-solid fa-filter-circle-xmark" style="font-size:48px; margin-bottom:16px;"></i>
                        <p>No products match the selected filters.</p>
                    </div>
                `;
            } else {
                listingGrid.innerHTML = filtered.map(p => getProductCardHtml(p)).join('');
            }

            showToast(`Filter applied — ${filtered.length} product(s) found.`);
        }
    });

    // -------------------------------------------
    // SPA NAVIGATION CONTROL
    // -------------------------------------------
    let currentView = 'home';

    const navHighlightMap = {
        home: 'home',
        listing: 'listing',
        details: 'listing',
        cart: null
    };

    function navigateTo(viewId) {
        if (!viewId) return;
        currentView = viewId;

        // Hide all views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

        // Show target view
        const target = document.getElementById('view-' + viewId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update active nav link
        const highlightLink = navHighlightMap[viewId];
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (highlightLink && a.getAttribute('data-link') === highlightLink) {
                a.classList.add('active');
            }
        });

        // Trigger view-specific dynamic rendering
        if (viewId === 'home') {
            renderHomeProducts();
        } else if (viewId === 'listing') {
            renderListingProducts();
        } else if (viewId === 'cart') {
            renderCart();
        }
    }

    // Re-render whichever view is currently active (used after lang/currency change)
    function refreshCurrentView() {
        if (currentView === 'home') {
            renderHomeProducts();
        } else if (currentView === 'listing') {
            renderListingProducts();
        } else if (currentView === 'details') {
            // Re-render details for the currently selected product
            const p = products.find(pr => pr.id === currentSelectedProductId);
            if (p) {
                const price = document.getElementById('details-price');
                if (price) price.textContent = formatPrice(p.price);
                const origPrice = document.getElementById('details-original-price');
                if (origPrice) origPrice.textContent = formatPrice(p.originalPrice);
                // Re-render similar grid
                const similarGrid = document.getElementById('details-similar-grid');
                if (similarGrid) {
                    const similar = products.filter(prod => prod.category === p.category && prod.id !== p.id);
                    const displaySimilar = similar.length > 0 ? similar : products.filter(prod => prod.id !== p.id).slice(0, 5);
                    similarGrid.innerHTML = displaySimilar.slice(0, 5).map(prod => `
                        <div class="deal-item-desktop" data-link="details" data-product-id="${prod.id}" style="cursor:pointer;">
                            <div class="img-wrapper"><img src="${prod.image}" alt="${prod.name}"></div>
                            <div class="price" style="font-size:16px;font-weight:600;">${formatPrice(prod.price)}</div>
                            <span class="subtext" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 130px; display:block;">${prod.name}</span>
                        </div>
                    `).join('');
                }
            }
            applyLanguageToDOM();
        } else if (currentView === 'cart') {
            renderCart();
        }
        applyLanguageToDOM();
    }

    // Initialize Page Content
    renderHomeProducts();
    updateCartBadge();

    // -------------------------------------------
    // DELEGATED CLICK HANDLERS
    // -------------------------------------------
    document.addEventListener('click', (e) => {
        // Special handler for Hot Offers navigation link
        const hotOffersBtn = e.target.closest('#nav-hot-offers-btn');
        if (hotOffersBtn) {
            e.preventDefault();
            hotOffersActivated = true;
            showPromoProductsOnly = false;
            showHotOffersOnly = true;
            showGiftBoxesOnly = false;
            showToast("Hot Offers Activated! Get flat $20.00 off on these items.");
            navigateTo('listing');
            return;
        }

        // Special handler for Gift Boxes navigation link
        const giftBoxesBtn = e.target.closest('#nav-gift-boxes-btn');
        if (giftBoxesBtn) {
            e.preventDefault();
            giftBoxesActivated = true;
            showPromoProductsOnly = false;
            showHotOffersOnly = false;
            showGiftBoxesOnly = true;
            showToast("Gift Box Specials Activated! Free gift box + flat $15.00 off.");
            navigateTo('listing');
            return;
        }

        // Special handler for Shop navigation link
        const shopBtn = e.target.closest('#nav-shop-btn');
        if (shopBtn) {
            e.preventDefault();
            showPromoProductsOnly = false;
            showHotOffersOnly = false;
            showGiftBoxesOnly = false;
            setActiveCategory('all');
            navigateTo('listing');
            return;
        }

        // Special handler for Get Now promo button on homepage banner
        const promoBtn = e.target.closest('#get-now-promo-btn');
        if (promoBtn) {
            e.preventDefault();
            promoActivated = true;
            showPromoProductsOnly = true;
            showHotOffersOnly = false;
            showGiftBoxesOnly = false;
            showToast("Promo Activated! Showing 4 products eligible for $10 off.");
            navigateTo('listing');
            return;
        }

        // Special handler for Activate button on Details page promo alerts
        const activateDetailsBtn = e.target.closest('.activate-promo-details-btn');
        if (activateDetailsBtn) {
            e.preventDefault();
            const promoType = activateDetailsBtn.getAttribute('data-promo');
            if (promoType === 'supplier') {
                promoActivated = true;
                showToast("Supplier Promo Activated! $10 off if order is over $300.");
            } else if (promoType === 'hot') {
                hotOffersActivated = true;
                showToast("Hot Offers Activated! Flat $20 off if order is over $200.");
            } else if (promoType === 'gift') {
                giftBoxesActivated = true;
                showToast("Gift Box Promo Activated! Free Gift Box + flat $15 off if order is over $150.");
            }
            loadProductDetails(currentSelectedProductId);
            return;
        }

        // Special handler to reset promo product filters on Listing page
        if (e.target.id === 'reset-promo-filter-btn') {
            e.preventDefault();
            showPromoProductsOnly = false;
            showHotOffersOnly = false;
            showGiftBoxesOnly = false;
            renderListingProducts();
            return;
        }

        // A. SPA links & details navigation
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            const viewId = link.getAttribute('data-link');

            // If it is details page, load the correct product info
            if (viewId === 'details') {
                const productId = link.getAttribute('data-product-id');
                if (productId) {
                    loadProductDetails(productId);
                }
            } else if (viewId === 'listing') {
                showPromoProductsOnly = false; // Reset promo filters on normal navigation
                showHotOffersOnly = false;
                showGiftBoxesOnly = false;
                activeSearchQuery = ''; // Reset search on normal navigation
                // Category filtering from Home sidebar or top links
                const category = link.getAttribute('data-category');
                if (category) {
                    setActiveCategory(category);
                } else {
                    setActiveCategory('all');
                }
            }
            
            navigateTo(viewId);
            return;
        }

        // B. Category filtering on shop page sidebar
        const categoryTab = e.target.closest('#listing-category-list .category-tab');
        if (categoryTab) {
            e.preventDefault();
            showPromoProductsOnly = false; // Reset promo filters
            showHotOffersOnly = false;
            showGiftBoxesOnly = false;
            activeSearchQuery = ''; // Reset search on normal navigation
            const category = categoryTab.getAttribute('data-category');
            setActiveCategory(category);
            return;
        }

        // C. Details gallery thumbnail switching
        const thumb = e.target.closest('.gallery-thumb');
        if (thumb) {
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            const mainImg = document.querySelector('.gallery-main img');
            if (mainImg && thumb.querySelector('img')) {
                mainImg.src = thumb.querySelector('img').src;
            }
            return;
        }

        // D. Product Details Quantity selector
        if (e.target.id === 'details-qty-plus') {
            const qtyVal = document.getElementById('details-qty-val');
            let val = parseInt(qtyVal.textContent);
            qtyVal.textContent = val + 1;
            return;
        }
        if (e.target.id === 'details-qty-minus') {
            const qtyVal = document.getElementById('details-qty-val');
            let val = parseInt(qtyVal.textContent);
            if (val > 1) {
                qtyVal.textContent = val - 1;
            }
            return;
        }

        // E. Add to Cart button (Details view)
        if (e.target.closest('#add-to-cart-btn')) {
            const qtyVal = document.getElementById('details-qty-val');
            const quantityToAdd = qtyVal ? parseInt(qtyVal.textContent) : 1;

            const product = products.find(p => p.id === currentSelectedProductId);
            if (product) {
                // Check if already in cart
                const cartItem = cart.find(item => item.product.id === product.id);
                if (cartItem) {
                    cartItem.quantity += quantityToAdd;
                } else {
                    cart.push({ product, quantity: quantityToAdd });
                }
                updateCartBadge();
                showToast(`Added ${quantityToAdd} item(s) to cart!`);
            }
            return;
        }

        // F. Cart quantity triggers
        if (e.target.classList.contains('qty-btn') && e.target.closest('.cart-item-desktop')) {
            const cartItemEl = e.target.closest('.cart-item-desktop');
            const productId = cartItemEl.getAttribute('data-cart-product-id');
            const cartItem = cart.find(item => item.product.id === productId);
            if (cartItem) {
                const isPlus = e.target.classList.contains('cart-qty-plus') || e.target.textContent.trim() === '+';
                if (isPlus) {
                    cartItem.quantity++;
                } else if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                }
                updateCartBadge();
                renderCart();
            }
            return;
        }

        // G. Cart delete item
        if (e.target.closest('.cart-delete-item-btn') && e.target.closest('.cart-item-desktop')) {
            const cartItemEl = e.target.closest('.cart-item-desktop');
            const productId = cartItemEl.getAttribute('data-cart-product-id');
            
            cartItemEl.style.transition = 'opacity 0.3s, transform 0.3s';
            cartItemEl.style.opacity = '0';
            cartItemEl.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                cart = cart.filter(item => item.product.id !== productId);
                updateCartBadge();
                renderCart();
                showToast('Item removed from cart.');
            }, 300);
            return;
        }

        // H. Remove all cart items
        if (e.target.closest('#remove-all-btn')) {
            if (cart.length > 0 && confirm('Are you sure you want to remove all items from your cart?')) {
                cart = [];
                updateCartBadge();
                renderCart();
                showToast('All items removed.');
            }
            return;
        }

        // I. Checkout
        if (e.target.closest('#checkout-btn')) {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            window.activePaymentMethod = 'card';
            showModal('Secure Checkout', `
                <div style="font-family: 'Inter', sans-serif;">
                    <!-- Order Summary Brief -->
                    <div style="display:flex; justify-content:space-between; align-items:center; background:#f8f9fa; padding:12px 16px; border-radius:8px; margin-bottom:20px; border:1px solid #e3e8ee;">
                        <div>
                            <span style="font-size:13px; color:var(--text-muted); display:block;">Amount to Pay</span>
                            <strong style="font-size:18px; color:#1c1c1c;">${formatPrice(currentCartTotal)}</strong>
                        </div>
                        <div style="text-align:right;">
                            <span style="font-size:12px; color:var(--text-muted); display:block; font-weight:500;"><i class="fa-solid fa-shield-halved" style="color:var(--success-color);"></i> Secure SSL Checkout</span>
                            <span style="font-size:11px; color:var(--text-muted);">Order Ref: #BRD-${Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                    </div>

                    <!-- Payment Methods Selector -->
                    <div style="margin-bottom:20px;">
                        <label style="font-size:13px; font-weight:600; color:#1c1c1c; display:block; margin-bottom:8px;">Select Payment Method</label>
                        <div style="display:flex; gap:10px;">
                            <button class="pay-method-btn" onclick="switchPaymentMethod('card')" id="pay-method-card"
                                style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px; border:2px solid var(--primary-color); border-radius:8px; background:white; cursor:pointer; transition:all 0.2s;">
                                <i class="fa-regular fa-credit-card" style="font-size:20px; color:var(--primary-color);"></i>
                                <span style="font-size:13px; font-weight:600; color:#1c1c1c;">Card</span>
                            </button>
                            <button class="pay-method-btn" onclick="switchPaymentMethod('paypal')" id="pay-method-paypal"
                                style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px; border:2px solid var(--border-color); border-radius:8px; background:white; cursor:pointer; transition:all 0.2s;">
                                <i class="fa-brands fa-paypal" style="font-size:20px; color:#003087;"></i>
                                <span style="font-size:13px; font-weight:600; color:#1c1c1c;">PayPal</span>
                            </button>
                            <button class="pay-method-btn" onclick="switchPaymentMethod('apple')" id="pay-method-apple"
                                style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px; border:2px solid var(--border-color); border-radius:8px; background:white; cursor:pointer; transition:all 0.2s;">
                                <i class="fa-brands fa-apple-pay" style="font-size:20px; color:black;"></i>
                                <span style="font-size:13px; font-weight:600; color:#1c1c1c;">Apple Pay</span>
                            </button>
                        </div>
                    </div>

                    <!-- Panel 1: Card details (default) -->
                    <div id="pay-panel-card" style="display:block;">
                        <div style="margin-bottom:14px;">
                            <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">Cardholder Name</label>
                            <input type="text" id="pay-card-name" placeholder="John Doe" 
                                style="width:100%; padding:10px 12px; border:1px solid var(--border-color); border-radius:6px; font-size:14px; box-sizing:border-box; outline:none; transition:border-color 0.2s;">
                        </div>
                        <div style="margin-bottom:14px;">
                            <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">Card Number</label>
                            <div style="position:relative; display:flex; align-items:center;">
                                <input type="text" id="pay-card-number" placeholder="4111 2222 3333 4444" maxlength="19"
                                    style="width:100%; padding:10px 12px 10px 40px; border:1px solid var(--border-color); border-radius:6px; font-size:14px; box-sizing:border-box; outline:none; transition:border-color 0.2s;">
                                <i class="fa-solid fa-credit-card" style="position:absolute; left:14px; color:#8b96a5; font-size:16px;"></i>
                            </div>
                        </div>
                        <div style="display:flex; gap:12px; margin-bottom:20px;">
                            <div style="flex:1;">
                                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">Expiry Date</label>
                                <input type="text" id="pay-card-expiry" placeholder="MM/YY" maxlength="5"
                                    style="width:100%; padding:10px 12px; border:1px solid var(--border-color); border-radius:6px; font-size:14px; box-sizing:border-box; outline:none; text-align:center;">
                            </div>
                            <div style="flex:1;">
                                <label style="font-size:12px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:6px;">CVV / CVC</label>
                                <input type="password" id="pay-card-cvv" placeholder="•••" maxlength="3"
                                    style="width:100%; padding:10px 12px; border:1px solid var(--border-color); border-radius:6px; font-size:14px; box-sizing:border-box; outline:none; text-align:center;">
                            </div>
                        </div>
                    </div>

                    <!-- Panel 2: PayPal -->
                    <div id="pay-panel-paypal" style="display:none; text-align:center; padding:20px 0; border:1px dashed var(--border-color); border-radius:8px; margin-bottom:20px; background:#fbfcfe;">
                        <i class="fa-brands fa-paypal" style="font-size:48px; color:#003087; margin-bottom:12px;"></i>
                        <p style="font-size:14px; color:#4a4a4a; margin:0 0 16px 0;">You will be redirected to PayPal to complete your purchase securely.</p>
                    </div>

                    <!-- Panel 3: Apple Pay -->
                    <div id="pay-panel-apple" style="display:none; text-align:center; padding:20px 0; border:1px dashed var(--border-color); border-radius:8px; margin-bottom:20px; background:#fbfcfe;">
                        <i class="fa-brands fa-apple-pay" style="font-size:48px; color:black; margin-bottom:12px;"></i>
                        <p style="font-size:14px; color:#4a4a4a; margin:0 0 16px 0;">Double-click side button or confirm with Touch ID/Face ID to complete payment.</p>
                    </div>

                    <!-- Submit Button & Shield -->
                    <button id="pay-submit-btn" onclick="executePayment()"
                        style="width:100%; padding:14px; background:var(--success-color); color:white; border:none; border-radius:8px; cursor:pointer; font-size:16px; font-weight:600; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 4px 12px rgba(0, 181, 24, 0.15); transition:background 0.2s;">
                        <i class="fa-solid fa-lock"></i> Pay ${formatPrice(currentCartTotal)}
                    </button>
                </div>
            `);

            // Apply card auto-formatting listeners
            setTimeout(() => {
                const cardNumInput = document.getElementById('pay-card-number');
                if (cardNumInput) {
                    cardNumInput.addEventListener('input', (e) => {
                        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                        let formattedValue = '';
                        for (let i = 0; i < value.length; i++) {
                            if (i > 0 && i % 4 === 0) formattedValue += ' ';
                            formattedValue += value[i];
                        }
                        e.target.value = formattedValue;
                    });
                }
                const expiryInput = document.getElementById('pay-card-expiry');
                if (expiryInput) {
                    expiryInput.addEventListener('input', (e) => {
                        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                        if (value.length > 2) {
                            e.target.value = value.slice(0, 2) + '/' + value.slice(2, 4);
                        } else {
                            e.target.value = value;
                        }
                    });
                }
            }, 50);
            return;
        }

        // J. Send inquiry
        if (e.target.closest('#send-inquiry-btn')) {
            showModal('Inquiry Sent!', 'Your inquiry has been sent to the supplier. They will contact you within 24 hours.');
            return;
        }

        // K. Wishlist toggle
        const wishBtn = e.target.closest('.wishlist-btn');
        if (wishBtn) {
            const icon = wishBtn.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.replace('fa-regular', 'fa-solid');
                wishBtn.style.color = '#dc3545';
                showToast('Added to favourites!');
            } else {
                icon.classList.replace('fa-solid', 'fa-regular');
                wishBtn.style.color = '';
                showToast('Removed from favourites.');
            }
            return;
        }

        // L. Sell on Brand Link
        if (e.target.closest('#sell-link')) {
            e.preventDefault();
            showModal('Sell on Brand', '<p style="line-height:1.8;">Join thousands of sellers on Brand marketplace.<br><br>List your products, reach global buyers, and grow your business.<br><br><button onclick="closeModal()" style="padding:10px 24px; background:#0d6efd; color:white; border:none; border-radius:6px; cursor:pointer; font-size:15px;">Apply to sell</button></p>');
            return;
        }

        // M. Help Center Link
        if (e.target.closest('#help-link')) {
            e.preventDefault();
            showModal('Help Center', '<ul style="line-height:2.2; padding-left:20px;"><li>📦 How to place an order</li><li>🚚 Shipping & delivery info</li><li>💳 Payment methods</li><li>↩️ Returns & refunds</li><li>📞 Contact support: <strong>+1 800 BRAND</strong></li></ul>');
            return;
        }

        // N. Lang Selector Link
        if (e.target.closest('#lang-btn')) {
            showModal('Language & Currency', `
                <div style="display:flex; flex-direction:column; gap:24px;">

                    <div>
                        <h4 style="font-size:14px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:12px;">
                            <i class="fa-solid fa-language" style="margin-right:6px; color:var(--primary-color);"></i> Select Language
                        </h4>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;" id="lang-options">
                            ${[
                                {code:'en', label:'English', flag:'us'},
                                {code:'es', label:'Español', flag:'es'},
                                {code:'fr', label:'Français', flag:'fr'},
                                {code:'ar', label:'العربية', flag:'sa'},
                                {code:'hi', label:'हिन्दी', flag:'in'},
                                {code:'de', label:'Deutsch', flag:'de'},
                                {code:'zh', label:'中文', flag:'cn'},
                                {code:'ja', label:'日本語', flag:'jp'}
                            ].map(l => `
                                <button onclick="selectLanguage('${l.code}', '${l.label}', '${l.flag}')" class="lang-choice-btn"
                                    style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; border:1px solid var(--border-color); background:${l.code==='en'?'#f0f5ff':'white'}; cursor:pointer; font-size:14px; font-weight:500; transition:all 0.2s;">
                                    <img src="https://flagcdn.com/w20/${l.flag}.png" style="width:20px; border-radius:2px;">
                                    ${l.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <h4 style="font-size:14px; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:12px;">
                            <i class="fa-solid fa-dollar-sign" style="margin-right:6px; color:var(--primary-color);"></i> Select Currency
                        </h4>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            ${[
                                {code:'USD', symbol:'$', label:'US Dollar'},
                                {code:'EUR', symbol:'€', label:'Euro'},
                                {code:'GBP', symbol:'£', label:'British Pound'},
                                {code:'INR', symbol:'₹', label:'Indian Rupee'},
                                {code:'JPY', symbol:'¥', label:'Japanese Yen'},
                                {code:'AED', symbol:'د.إ', label:'UAE Dirham'},
                                {code:'SAR', symbol:'﷼', label:'Saudi Riyal'},
                                {code:'CNY', symbol:'¥', label:'Chinese Yuan'}
                            ].map(c => `
                                <button onclick="selectCurrency('${c.code}', '${c.symbol}', '${c.label}')" class="lang-choice-btn"
                                    style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; border:1px solid var(--border-color); background:${c.code==='USD'?'#f0f5ff':'white'}; cursor:pointer; font-size:14px; font-weight:500; transition:all 0.2s;">
                                    <span style="font-weight:700; color:var(--primary-color); width:28px;">${c.symbol}</span>
                                    <div style="text-align:left;">
                                        <div style="font-weight:600;">${c.code}</div>
                                        <div style="font-size:12px; color:var(--text-muted);">${c.label}</div>
                                    </div>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                </div>
            `);
            return;
        }

        // O. Ship Selector Link
        if (e.target.closest('#ship-btn')) {
            showModal('Shipping Destination', `
                <p style="color:var(--text-muted); font-size:14px; margin-bottom:16px;">
                    <i class="fa-solid fa-circle-info" style="color:var(--primary-color); margin-right:6px;"></i>
                    Select your country to see accurate shipping rates, taxes, and estimated delivery times.
                </p>
                <div style="margin-bottom:16px;">
                    <input type="text" id="country-search-input" placeholder="🔍  Search country..." oninput="filterCountries(this.value)"
                        style="width:100%; padding:10px 14px; border:1px solid var(--border-color); border-radius:8px; font-size:14px; box-sizing:border-box; outline:none;">
                </div>
                <div id="country-list" style="display:grid; grid-template-columns:1fr 1fr; gap:8px; max-height:320px; overflow-y:auto; padding-right:4px;">
                    ${[
                        {code:'us', label:'United States', ship:'Free', days:'5-7 days'},
                        {code:'de', label:'Germany', ship:'$3.99', days:'7-10 days'},
                        {code:'gb', label:'United Kingdom', ship:'$4.99', days:'7-10 days'},
                        {code:'fr', label:'France', ship:'$4.99', days:'7-12 days'},
                        {code:'in', label:'India', ship:'$5.99', days:'10-15 days'},
                        {code:'sa', label:'Saudi Arabia', ship:'$6.99', days:'10-14 days'},
                        {code:'ae', label:'UAE', ship:'$5.99', days:'8-12 days'},
                        {code:'pk', label:'Pakistan', ship:'$6.99', days:'10-15 days'},
                        {code:'cn', label:'China', ship:'$2.99', days:'5-8 days'},
                        {code:'jp', label:'Japan', ship:'$4.99', days:'7-10 days'},
                        {code:'ca', label:'Canada', ship:'$3.99', days:'6-10 days'},
                        {code:'au', label:'Australia', ship:'$7.99', days:'10-14 days'},
                        {code:'tr', label:'Turkey', ship:'$5.99', days:'8-12 days'},
                        {code:'eg', label:'Egypt', ship:'$7.99', days:'12-18 days'},
                        {code:'ng', label:'Nigeria', ship:'$9.99', days:'15-20 days'},
                        {code:'br', label:'Brazil', ship:'$8.99', days:'12-18 days'}
                    ].map(c => `
                        <button class="country-choice-btn" onclick="selectCountry('${c.code}', '${c.label}', '${c.ship}', '${c.days}')"
                            style="display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:8px; border:1px solid var(--border-color); background:${c.code==='de'?'#f0f5ff':'white'}; cursor:pointer; font-size:13px; font-weight:500; transition:all 0.2s; text-align:left;">
                            <img src="https://flagcdn.com/w20/${c.code}.png" style="width:20px; border-radius:2px; flex-shrink:0;">
                            <div>
                                <div style="font-weight:600; font-size:13px;">${c.label}</div>
                                <div style="font-size:11px; color:var(--text-muted);">Ship: ${c.ship} · ${c.days}</div>
                            </div>
                        </button>
                    `).join('')}
                </div>
            `);
            return;
        }

        // P. Messages Link
        if (e.target.closest('#message-link')) {
            e.preventDefault();
            showModal('Messages & Reviews', `
                <div style="display:flex; flex-direction:column; gap:20px;">

                    <!-- Tab Buttons -->
                    <div style="display:flex; gap:0; border-bottom:2px solid var(--border-color);">
                        <button id="msg-tab-messages" onclick="switchMsgTab('messages')"
                            style="flex:1; padding:10px; font-size:14px; font-weight:600; border:none; background:none; cursor:pointer; color:var(--primary-color); border-bottom:2px solid var(--primary-color); margin-bottom:-2px;">
                            <i class="fa-regular fa-envelope"></i> Messages
                        </button>
                        <button id="msg-tab-reviews" onclick="switchMsgTab('reviews')"
                            style="flex:1; padding:10px; font-size:14px; font-weight:600; border:none; background:none; cursor:pointer; color:var(--text-muted); border-bottom:2px solid transparent; margin-bottom:-2px;">
                            <i class="fa-regular fa-star"></i> Write a Review
                        </button>
                    </div>

                    <!-- Messages Panel -->
                    <div id="msg-panel-messages">
                        <div id="msg-chat-box" style="height:220px; overflow-y:auto; border:1px solid var(--border-color); border-radius:10px; padding:14px; display:flex; flex-direction:column; gap:10px; background:#f9fafb;">
                            <!-- Chat messages will be dynamically rendered here -->
                        </div>
                        <div style="display:flex; gap:8px; margin-top:12px;">
                            <input type="text" id="msg-input" placeholder="Type your message..."
                                style="flex:1; padding:10px 14px; border:1px solid var(--border-color); border-radius:8px; font-size:14px; outline:none;"
                                onkeydown="if(event.key==='Enter') sendMessage()">
                            <button onclick="sendMessage()"
                                style="padding:10px 18px; background:var(--primary-color); color:white; border:none; border-radius:8px; cursor:pointer; font-size:14px; font-weight:600; display:flex; align-items:center; gap:6px;">
                                <i class="fa-solid fa-paper-plane"></i> Send
                            </button>
                        </div>
                    </div>

                    <!-- Reviews Panel (hidden by default) -->
                    <div id="msg-panel-reviews" style="display:none;">
                        <div style="margin-bottom:16px;">
                            <label style="font-size:13px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:8px;">Your Rating</label>
                            <div id="review-stars" style="display:flex; gap:6px; font-size:28px; cursor:pointer;">
                                <i class="fa-regular fa-star review-star" data-star="1" onclick="setReviewStar(1)" style="color:#ff9017; transition:all 0.15s;"></i>
                                <i class="fa-regular fa-star review-star" data-star="2" onclick="setReviewStar(2)" style="color:#ff9017; transition:all 0.15s;"></i>
                                <i class="fa-regular fa-star review-star" data-star="3" onclick="setReviewStar(3)" style="color:#ff9017; transition:all 0.15s;"></i>
                                <i class="fa-regular fa-star review-star" data-star="4" onclick="setReviewStar(4)" style="color:#ff9017; transition:all 0.15s;"></i>
                                <i class="fa-regular fa-star review-star" data-star="5" onclick="setReviewStar(5)" style="color:#ff9017; transition:all 0.15s;"></i>
                            </div>
                            <span id="review-star-label" style="font-size:13px; color:var(--text-muted); margin-top:4px; display:inline-block;">Select a rating</span>
                        </div>
                        <div style="margin-bottom:16px;">
                            <label style="font-size:13px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:8px;">Your Name</label>
                            <input type="text" id="review-name" placeholder="Enter your name"
                                style="width:100%; padding:10px 14px; border:1px solid var(--border-color); border-radius:8px; font-size:14px; box-sizing:border-box; outline:none;">
                        </div>
                        <div style="margin-bottom:16px;">
                            <label style="font-size:13px; font-weight:600; color:var(--text-muted); display:block; margin-bottom:8px;">Your Review</label>
                            <textarea id="review-text" rows="4" placeholder="Share your experience with this product..."
                                style="width:100%; padding:10px 14px; border:1px solid var(--border-color); border-radius:8px; font-size:14px; box-sizing:border-box; outline:none; resize:vertical; font-family:inherit;"></textarea>
                        </div>
                        <button onclick="submitReview()"
                            style="width:100%; padding:12px; background:var(--primary-color); color:white; border:none; border-radius:8px; cursor:pointer; font-size:15px; font-weight:600;">
                            <i class="fa-solid fa-check-circle"></i> Submit Review
                        </button>

                        <!-- Submitted reviews list -->
                        <div id="submitted-reviews" style="margin-top:20px;"></div>
                    </div>

                </div>
            `);
            setTimeout(() => {
                if (typeof renderChat === 'function') renderChat();
                if (typeof renderReviews === 'function') renderReviews();
            }, 50);
            return;
        }

        // Q. Orders Link
        if (e.target.closest('#orders-link')) {
            e.preventDefault();
            showModal('My Orders', '<p style="color:var(--text-muted); text-align:center; padding:20px;"><i class="fa-solid fa-box-open" style="font-size:48px; display:block; margin-bottom:16px; color:#0d6efd;"></i>You have no active orders yet.<br><br><button onclick="closeModal()" data-link="listing" style="margin-top:16px; padding:10px 24px; background:#0d6efd; color:white; border:none; border-radius:6px; cursor:pointer; font-size:15px;">Start shopping</button></p>');
            return;
        }

        // R. Sign In Modal Form Trigger
        const profileLink = e.target.closest('.profile-link');
        if (profileLink) {
            e.preventDefault();
            showModal('Sign In', `
                <form id="signin-form">
                    <div style="margin-bottom:16px;">
                        <label style="display:block; margin-bottom:6px; font-weight:500;">Email</label>
                        <input type="email" placeholder="you@email.com" style="width:100%; padding:10px; border:1px solid #e3e8ee; border-radius:6px; font-size:15px;">
                    </div>
                    <div style="margin-bottom:16px;">
                        <label style="display:block; margin-bottom:6px; font-weight:500;">Password</label>
                        <input type="password" placeholder="••••••••" style="width:100%; padding:10px; border:1px solid #e3e8ee; border-radius:6px; font-size:15px;">
                    </div>
                    <button type="button" id="do-signin" style="width:100%; padding:12px; background:#0d6efd; color:white; border:none; border-radius:6px; font-size:16px; cursor:pointer;">Sign In</button>
                </form>
            `);
            setTimeout(() => {
                const doSignin = document.getElementById('do-signin');
                if (doSignin) {
                    doSignin.addEventListener('click', () => {
                        closeModal();
                        showToast('Signed in successfully!');
                    });
                }
            }, 100);
            return;
        }
    });

    // -------------------------------------------
    // SEARCH BAR
    // -------------------------------------------
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar-desktop input');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim().toLowerCase();
            const categoryDropdown = document.getElementById('search-category');
            const selectedCatText = categoryDropdown ? categoryDropdown.value : 'All categories';

            let selectedCategory = 'all';
            if (selectedCatText.includes('Clothes')) {
                selectedCategory = 'Clothes and wear';
            } else if (selectedCatText.includes('Tech')) {
                selectedCategory = 'Computer and tech';
            } else if (selectedCatText.includes('Home')) {
                selectedCategory = 'Home interiors';
            }

            // Reset promo filters, update activeCategory and activeSearchQuery
            showPromoProductsOnly = false;
            showHotOffersOnly = false;
            showGiftBoxesOnly = false;
            activeCategory = selectedCategory;
            activeSearchQuery = query;

            // Render and navigate to listing view
            navigateTo('listing');
            renderListingProducts();

            if (query) {
                showToast(`Search: "${query}" in ${selectedCatText}`);
            } else {
                showToast(`Category: ${selectedCatText}`);
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') searchBtn.click();
        });
    }

    // -------------------------------------------
    // TOAST NOTIFICATION
    // -------------------------------------------
    function showToast(message) {
        let toast = document.getElementById('toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-notification';
            toast.style.cssText = `
                position: fixed; bottom: 30px; right: 30px; background: #1c1c1c;
                color: white; padding: 14px 24px; border-radius: 8px; font-size: 15px;
                box-shadow: 0 6px 20px rgba(0,0,0,0.25); z-index: 9999;
                transition: opacity 0.4s, transform 0.4s;
                opacity: 0; transform: translateY(20px);
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
        }, 2800);
    }

    // -------------------------------------------
    // MODAL
    // -------------------------------------------
    function showModal(title, content) {
        let overlay = document.getElementById('modal-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'modal-overlay';
            overlay.style.cssText = `
                position: fixed; inset: 0; background: rgba(0,0,0,0.5);
                display: flex; align-items: center; justify-content: center;
                z-index: 9998;
            `;
            document.body.appendChild(overlay);
        }
        overlay.innerHTML = `
            <div style="background:white; border-radius:12px; padding:32px; min-width:560px; max-width:640px; position:relative; box-shadow:0 20px 60px rgba(0,0,0,0.2);">
                <button id="modal-close-btn" style="position:absolute; top:16px; right:16px; background:none; border:none; font-size:22px; cursor:pointer; color:#8b96a5;">&times;</button>
                <h3 style="margin-bottom:20px; color:#1c1c1c;">${title}</h3>
                <div style="color:#2c2c2c;">${content}</div>
            </div>
        `;
        overlay.style.display = 'flex';
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
        document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    }

    function closeModal() {
        const overlay = document.getElementById('modal-overlay');
        if (overlay) overlay.style.display = 'none';
    }

    window.closeModal = closeModal;

    // -------------------------------------------
    // LANGUAGE SELECTOR
    // -------------------------------------------
    window.selectLanguage = function(code, label, flag) {
        // Update internal language state
        activeLangCode = code;
        activeLang = translations[code] || translations.en;

        const langBtn = document.getElementById('lang-btn');
        if (langBtn) {
            const parts = langBtn.textContent.split(',');
            const currency = parts.length > 1 ? parts[1].trim().split(' ')[0] : 'USD';
            langBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ${label}, ${currency} &nbsp;<i class="fa-solid fa-chevron-down" style="font-size:11px;color:var(--text-muted);"></i>`;
        }
        closeModal();

        // Apply translation to all visible DOM
        applyLanguageToDOM();
        // Re-render current view so dynamic content uses new language
        refreshCurrentView();
        showToast(`Language → ${label}`);
    };

    // -------------------------------------------
    // CURRENCY SELECTOR
    // -------------------------------------------
    window.selectCurrency = function(code, symbol, label) {
        // Update internal currency state
        activeCurrency = exchangeRates[code] || exchangeRates.USD;

        const langBtn = document.getElementById('lang-btn');
        if (langBtn) {
            const text = langBtn.textContent.trim();
            const langPart = text.split(',')[0].trim();
            langBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ${langPart}, ${code} &nbsp;<i class="fa-solid fa-chevron-down" style="font-size:11px;color:var(--text-muted);"></i>`;
        }
        closeModal();

        // Re-render current view so prices update
        refreshCurrentView();
        showToast(`Currency → ${code} (${label})`);
    };

    // -------------------------------------------
    // COUNTRY / SHIPPING DESTINATION SELECTOR
    // -------------------------------------------
    window.selectCountry = function(code, label, shipCost, days) {
        const shipBtn = document.getElementById('ship-btn');
        if (shipBtn) {
            shipBtn.innerHTML = `Ship to <img src="https://flagcdn.com/w20/${code}.png" alt="${code.toUpperCase()}" style="vertical-align:middle;"> &nbsp;<i class="fa-solid fa-chevron-down" style="font-size:11px;color:var(--text-muted);"></i>`;
        }
        closeModal();
        showToast(`Shipping destination set to ${label} · ${shipCost} · ${days}`);
    };

    // -------------------------------------------
    // MESSAGING & REVIEWS SYSTEM
    // -------------------------------------------
    let currentReviewRating = 0;

    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    let chatHistory = [
        { sender: 'supplier', text: 'Welcome! How can we help you today? Feel free to ask about any product.', time: '10:00 AM' }
    ];

    let submittedReviews = [
        { name: 'John Doe', rating: 5, text: 'Amazing service and very fast response!', date: '6/15/2026' }
    ];

    window.switchMsgTab = function(tab) {
        const btnMsg = document.getElementById('msg-tab-messages');
        const btnRev = document.getElementById('msg-tab-reviews');
        const panelMsg = document.getElementById('msg-panel-messages');
        const panelRev = document.getElementById('msg-panel-reviews');

        if (tab === 'messages') {
            if (btnMsg) {
                btnMsg.style.color = 'var(--primary-color)';
                btnMsg.style.borderBottom = '2px solid var(--primary-color)';
            }
            if (btnRev) {
                btnRev.style.color = 'var(--text-muted)';
                btnRev.style.borderBottom = '2px solid transparent';
            }
            if (panelMsg) panelMsg.style.display = 'block';
            if (panelRev) panelRev.style.display = 'none';
            setTimeout(() => {
                const chatBox = document.getElementById('msg-chat-box');
                if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
            }, 50);
        } else {
            if (btnMsg) {
                btnMsg.style.color = 'var(--text-muted)';
                btnMsg.style.borderBottom = '2px solid transparent';
            }
            if (btnRev) {
                btnRev.style.color = 'var(--primary-color)';
                btnRev.style.borderBottom = '2px solid var(--primary-color)';
            }
            if (panelMsg) panelMsg.style.display = 'none';
            if (panelRev) panelRev.style.display = 'block';
        }
    };

    window.setReviewStar = function(rating) {
        currentReviewRating = rating;
        const starContainer = document.getElementById('review-stars');
        if (!starContainer) return;
        const stars = starContainer.querySelectorAll('.review-star');
        stars.forEach(star => {
            const starVal = parseInt(star.getAttribute('data-star'));
            if (starVal <= rating) {
                star.className = 'fa-solid fa-star review-star';
            } else {
                star.className = 'fa-regular fa-star review-star';
            }
        });
        const labels = {
            1: '1 - Poor',
            2: '2 - Fair',
            3: '3 - Good',
            4: '4 - Very Good',
            5: '5 - Excellent'
        };
        const labelEl = document.getElementById('review-star-label');
        if (labelEl) labelEl.textContent = labels[rating] || 'Select a rating';
    };

    window.sendMessage = function() {
        const input = document.getElementById('msg-input');
        if (!input) return;
        const text = input.value.trim();
        if (!text) return;

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        chatHistory.push({ sender: 'user', text: text, time: timeStr });
        input.value = '';

        window.renderChat();

        setTimeout(() => {
            let replyText = "Thank you for contacting us! We have received your message and will get back to you shortly.";
            if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
                replyText = "Our prices are competitive and display converted currency directly based on your selected settings.";
            } else if (text.toLowerCase().includes('shipping') || text.toLowerCase().includes('delivery') || text.toLowerCase().includes('ship')) {
                replyText = "We ship worldwide! Shipping fee and estimated days are calculated based on your selected location.";
            } else if (text.toLowerCase().includes('discount') || text.toLowerCase().includes('offer')) {
                replyText = "Check out our 'Hot Offers' section in the navbar for the best deals!";
            }
            chatHistory.push({ sender: 'supplier', text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
            window.renderChat();
        }, 1000);
    };

    window.renderChat = function() {
        const chatBox = document.getElementById('msg-chat-box');
        if (!chatBox) return;
        chatBox.innerHTML = chatHistory.map(msg => {
            const isUser = msg.sender === 'user';
            const align = isUser ? 'flex-end' : 'flex-start';
            const bg = isUser ? 'var(--primary-color)' : 'white';
            const color = isUser ? 'white' : 'inherit';
            const border = isUser ? 'none' : '1px solid var(--border-color)';
            const radius = isUser ? '12px 12px 2px 12px' : '12px 12px 12px 2px';
            const shadow = isUser ? '0 2px 4px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.04)';
            const senderLabel = isUser ? 'You' : 'Supplier Support';
            const senderColor = isUser ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)';
            const timeColor = isUser ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)';

            return `
                <div style="align-self:${align}; background:${bg}; color:${color}; border:${border}; border-radius:${radius}; padding:10px 14px; max-width:75%; box-shadow:${shadow};">
                    <div style="font-size:11px; color:${senderColor}; margin-bottom:4px; font-weight:600;">${senderLabel}</div>
                    <div style="font-size:14px; line-height:1.4;">${escapeHtml(msg.text)}</div>
                    <div style="font-size:10px; color:${timeColor}; text-align:right; margin-top:4px;">${msg.time}</div>
                </div>
            `;
        }).join('');
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    window.submitReview = function() {
        const nameInput = document.getElementById('review-name');
        const textInput = document.getElementById('review-text');
        if (!nameInput || !textInput) return;

        const name = nameInput.value.trim() || 'Anonymous';
        const text = textInput.value.trim();
        const rating = currentReviewRating;

        if (rating === 0) {
            alert('Please select a star rating.');
            return;
        }
        if (!text) {
            alert('Please type a review.');
            return;
        }

        const newReview = {
            name: name,
            text: text,
            rating: rating,
            date: new Date().toLocaleDateString()
        };
        submittedReviews.unshift(newReview);

        nameInput.value = '';
        textInput.value = '';
        window.setReviewStar(0);

        window.renderReviews();
        showToast('Review submitted successfully!');
    };

    window.renderReviews = function() {
        const container = document.getElementById('submitted-reviews');
        if (!container) return;
        if (submittedReviews.length === 0) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = `
            <h4 style="margin-bottom:12px; font-size:14px; font-weight:600; border-top:1px solid var(--border-color); padding-top:16px; color:#1c1c1c;">Reviews (${submittedReviews.length})</h4>
            <div style="display:flex; flex-direction:column; gap:12px; max-height:180px; overflow-y:auto; padding-right:4px;">
                ${submittedReviews.map(rev => {
                    let starsHtml = '';
                    for (let i = 1; i <= 5; i++) {
                        starsHtml += `<i class="${i <= rev.rating ? 'fa-solid' : 'fa-regular'} fa-star" style="color:#ff9017; font-size:12px;"></i>`;
                    }
                    return `
                        <div style="background:#f9fafb; padding:12px; border:1px solid var(--border-color); border-radius:8px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                                <span style="font-weight:600; font-size:13px; color:#1c1c1c;">${escapeHtml(rev.name)}</span>
                                <span style="font-size:11px; color:var(--text-muted); margin-left:auto;">${rev.date}</span>
                            </div>
                            <div style="margin-bottom:6px;">${starsHtml}</div>
                            <p style="font-size:13px; color:#4a4a4a; margin:0; line-height:1.4;">${escapeHtml(rev.text)}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    };

    // -------------------------------------------
    // PAYMENT PORTAL SYSTEM
    // -------------------------------------------
    window.activePaymentMethod = 'card';

    window.switchPaymentMethod = function(method) {
        window.activePaymentMethod = method;
        const btnCard = document.getElementById('pay-method-card');
        const btnPaypal = document.getElementById('pay-method-paypal');
        const btnApple = document.getElementById('pay-method-apple');
        
        const panelCard = document.getElementById('pay-panel-card');
        const panelPaypal = document.getElementById('pay-panel-paypal');
        const panelApple = document.getElementById('pay-panel-apple');
        
        const submitBtn = document.getElementById('pay-submit-btn');

        // Reset borders
        if (btnCard) btnCard.style.borderColor = 'var(--border-color)';
        if (btnPaypal) btnPaypal.style.borderColor = 'var(--border-color)';
        if (btnApple) btnApple.style.borderColor = 'var(--border-color)';

        // Hide panels
        if (panelCard) panelCard.style.display = 'none';
        if (panelPaypal) panelPaypal.style.display = 'none';
        if (panelApple) panelApple.style.display = 'none';

        if (method === 'card') {
            if (btnCard) btnCard.style.borderColor = 'var(--primary-color)';
            if (panelCard) panelCard.style.display = 'block';
            if (submitBtn) submitBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay ${formatPrice(currentCartTotal)}`;
        } else if (method === 'paypal') {
            if (btnPaypal) btnPaypal.style.borderColor = 'var(--primary-color)';
            if (panelPaypal) panelPaypal.style.display = 'block';
            if (submitBtn) submitBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay with PayPal`;
        } else if (method === 'apple') {
            if (btnApple) btnApple.style.borderColor = 'var(--primary-color)';
            if (panelApple) panelApple.style.display = 'block';
            if (submitBtn) submitBtn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay with Apple Pay`;
        }
    };

    window.executePayment = function() {
        const submitBtn = document.getElementById('pay-submit-btn');
        if (!submitBtn) return;

        // Validation if Card
        if (window.activePaymentMethod === 'card') {
            const cardName = document.getElementById('pay-card-name');
            const cardNum = document.getElementById('pay-card-number');
            const cardExpiry = document.getElementById('pay-card-expiry');
            const cardCvv = document.getElementById('pay-card-cvv');

            if (!cardName || !cardName.value.trim()) {
                alert('Please enter the cardholder name.');
                return;
            }
            const cleanNum = cardNum ? cardNum.value.replace(/\s+/g, '') : '';
            if (cleanNum.length < 15 || isNaN(cleanNum)) {
                alert('Please enter a valid credit card number.');
                return;
            }
            if (!cardExpiry || !cardExpiry.value.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
                alert('Please enter a valid expiry date (MM/YY).');
                return;
            }
            const cleanCvv = cardCvv ? cardCvv.value.trim() : '';
            if (cleanCvv.length < 3 || isNaN(cleanCvv)) {
                alert('Please enter a valid CVV.');
                return;
            }
        }

        // Show Processing state
        submitBtn.disabled = true;
        submitBtn.style.background = '#8b96a5';
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...`;

        setTimeout(() => {
            let methodLabel = 'Credit Card';
            if (window.activePaymentMethod === 'paypal') methodLabel = 'PayPal';
            if (window.activePaymentMethod === 'apple') methodLabel = 'Apple Pay';

            const overlay = document.getElementById('modal-overlay');
            if (overlay) {
                const modalBox = overlay.querySelector('div');
                if (modalBox) {
                    modalBox.innerHTML = `
                        <button id="modal-close-btn" style="position:absolute; top:16px; right:16px; background:none; border:none; font-size:22px; cursor:pointer; color:#8b96a5;">&times;</button>
                        <div style="text-align:center; padding:20px 0; font-family:'Inter', sans-serif;">
                            <div style="width:72px; height:72px; background:#d1e7dd; color:#0f5132; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:36px; margin-bottom:20px;">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <h3 style="color:#0f5132; margin-bottom:8px;">Payment Successful!</h3>
                            <p style="color:var(--text-muted); font-size:14px; margin-bottom:24px;">Your transaction has been processed securely.</p>
                            
                            <!-- Receipt Box -->
                            <div style="background:#f8f9fa; border:1px solid var(--border-color); border-radius:10px; padding:18px; text-align:left; margin-bottom:24px; box-shadow:inset 0 1px 3px rgba(0,0,0,0.02);">
                                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:13px;">
                                    <span style="color:var(--text-muted);">Transaction ID:</span>
                                    <strong style="color:#1c1c1c;">TXN-${Math.floor(10000000 + Math.random() * 90000000)}</strong>
                                </div>
                                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:13px;">
                                    <span style="color:var(--text-muted);">Payment Method:</span>
                                    <strong style="color:#1c1c1c;">${methodLabel}</strong>
                                </div>
                                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:13px;">
                                    <span style="color:var(--text-muted);">Amount Paid:</span>
                                    <strong style="color:var(--success-color);">${formatPrice(currentCartTotal)}</strong>
                                </div>
                                <div style="display:flex; justify-content:space-between; border-top:1px dashed var(--border-color); padding-top:10px; margin-top:10px; font-size:13px;">
                                    <span style="color:var(--text-muted);">Shipping Address:</span>
                                    <strong style="color:#1c1c1c; text-align:right;">Germany (DE)<br><span style="font-size:11px; font-weight:normal; color:var(--text-muted);">Delivering in 5-7 business days</span></strong>
                                </div>
                            </div>
                            
                            <button id="modal-success-done-btn" class="btn btn-primary" style="width:100%; padding:12px; font-size:15px; font-weight:600; border:none; border-radius:6px; cursor:pointer; color:white; background:var(--primary-color);">Done</button>
                        </div>
                    `;
                    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
                    const successBtn = document.getElementById('modal-success-done-btn');
                    if (successBtn) {
                        successBtn.addEventListener('click', closeModal);
                    }
                }
            }

            // Clear the cart
            cart = [];
            updateCartBadge();
            renderCart();
            showToast('Order placed successfully!');
        }, 1500);
    };

    // -------------------------------------------
    // COUNTRY SEARCH FILTER (inside Ship modal)
    // -------------------------------------------
    window.filterCountries = function(query) {
        const list = document.getElementById('country-list');
        if (!list) return;
        const buttons = list.querySelectorAll('.country-choice-btn');
        const q = query.toLowerCase();
        buttons.forEach(btn => {
            const name = btn.querySelector('div div:first-child').textContent.toLowerCase();
            btn.style.display = name.includes(q) ? 'flex' : 'none';
        });
    };

});
