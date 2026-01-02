// تطبيق مجموعة العظمة - النسخة المحسنة الكاملة
// إصدار 3.0 - مع جميع التعديلات المطلوبة

// تهيئة Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmd-NJRcpJcTlBeLEcMT5kx3EFXGEbZTA",
    authDomain: "planning-with-ai-3c51a.firebaseapp.com",
    databaseURL: "https://planning-with-ai-3c51a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "planning-with-ai-3c51a",
    storageBucket: "planning-with-ai-3c51a.firebasestorage.app",
    messagingSenderId: "752519469556",
    appId: "1:752519469556:web:606f18aeb972bdbdb581a1"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// بيانات التطبيق المحسنة
const appData = {
    currentUser: null,
    isGuest: false,
    isAdmin: false,
    onlineUsers: [],
    chatMessages: [],
    marketItems: [],
    notifications: [],
    dailyNews: "مرحباً بكم في موقع العظمة!",
    giftTimer: 300,
    giftAvailable: true,
    dailyBonusClaimed: false,
    chatMutedUntil: 0,
    siteStats: {
        totalVisitors: 0,
        onlineUsers: 0,
        totalMessages: 0,
        totalPoints: 0
    },
    selectedMember: null,
    currentRating: 0,
    hoverRating: 0
};

// بيانات الأعضاء الأساسية مع التصفير الكامل
const membersData = [
    {
        id: 1,
        name: "عبد الأول",
        realName: "عبد النور",
        age: 19,
        country: "الجزائر",
        rank: "admin",
        position: "admin",
        image: "https://files.catbox.moe/pxmleq.png",
        instagram: "https://www.instagram.com/_8av9?igsh=NnplZGhlODJydGgx",
        motto: "روح وقلب العظمة",
        password: "admin123",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-01-01",
        messagesCount: 0,
        rating: 5,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 2,
        name: "حسن",
        realName: "حسن",
        age: 16,
        country: "لبنان",
        rank: "member", // تم التغيير من owner إلى member
        position: "owner",
        image: "https://files.catbox.moe/bamzoq.png",
        instagram: "https://www.instagram.com/xflay_1?igsh=MTJxdWphdXM3eGRjcQ==",
        motto: "مؤسس العظمة",
        password: "owner123",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير (تمت إزالة "❄️")
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-01-01",
        messagesCount: 0,
        rating: 5,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 3,
        name: "حمدية",
        realName: "تاج دين",
        age: 18,
        country: "الجزائر",
        rank: "member", // تم التغيير من vip إلى member
        position: "member",
        image: "https://files.catbox.moe/k8xa2h.png",
        instagram: "https://www.instagram.com/mezaiane.esp?igsh=MXJ6dnJ2OWplMWdu",
        motto: "كذاب العظمة",
        password: "7md1",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-02-01",
        messagesCount: 0,
        rating: 4.5,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 4,
        name: "تونة",
        realName: "يحيى",
        age: 16,
        country: "الجزائر",
        rank: "member", // تم التغيير من pro إلى member
        position: "member",
        image: "https://files.catbox.moe/xdero7.png",
        instagram: "https://www.instagram.com/d_a_m_n14?igsh=MXVpYzZ1a3A2ZmhpNg==",
        motto: "ملحد العظمة",
        password: "tona2",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-02-15",
        messagesCount: 0,
        rating: 4.8,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 5,
        name: "عبد الثاني",
        realName: "عبد خالق",
        age: 18,
        country: "الجزائر",
        rank: "member", // تم التغيير من mvp إلى member
        position: "member",
        image: "https://files.catbox.moe/uv3w29.png",
        instagram: "https://www.instagram.com/x_abdoo_19?igsh=MThucTluZWRhc2Frbg==",
        motto: "أساس العظمة",
        password: "abd22",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-03-01",
        messagesCount: 0,
        rating: 4.7,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 6,
        name: "نيرو",
        realName: "ريان",
        age: 18,
        country: "المغرب",
        rank: "member", // تم التغيير من ceo إلى member
        position: "member",
        image: "https://files.catbox.moe/lekrm0.png",
        instagram: "https://www.instagram.com/iiineiro?igsh=dTNtc2ZpNzZxZG95",
        motto: "رابر العظمة",
        password: "iii1",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-03-10",
        messagesCount: 0,
        rating: 4.6,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 7,
        name: "لينصو",
        realName: "الياس",
        age: 16,
        country: "الأردن",
        rank: "member", // تم التغيير من boss إلى member
        position: "member",
        image: "https://files.catbox.moe/sashvz.png",
        instagram: "https://www.instagram.com/lansso0?igsh=eWprOTdtNjkwN3M1",
        motto: "مسلم العظمة",
        password: "linso4",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-03-20",
        messagesCount: 0,
        rating: 4.9,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 8,
        name: "نجومي",
        realName: "يوسف",
        age: 17,
        country: "المغرب",
        rank: "member", // تم التغيير من goat إلى member
        position: "member",
        image: "https://files.catbox.moe/254lfn.png",
        instagram: "https://www.instagram.com/youssef_sdik_5?igsh=azYxYWl1a3lzdGtj",
        motto: "ريلز العظمة",
        password: "member123",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-04-01",
        messagesCount: 0,
        rating: 4.4,
        reviews: [],
        banned: false,
        banReason: ""
    },
    {
        id: 9,
        name: "أبو جاسم",
        realName: "محمد",
        age: 19,
        country: "العراق",
        rank: "member", // تم التغيير من legend إلى member
        position: "member",
        image: "https://files.catbox.moe/eb7q9c.png",
        instagram: "https://www.instagram.com/82bw2?igsh=MXV3c3VhZXl0MWV5eQ==",
        motto: "مصمم العظمة",
        password: "member3",
        points: 0, // تم التصفير
        items: [], // تم التصفير
        activeItems: {}, // تم التصفير
        online: false,
        lastSeen: Date.now(),
        joinedDate: "2023-04-15",
        messagesCount: 0,
        rating: 4.8,
        reviews: [],
        banned: false,
        banReason: ""
    }
];


const shopItems = {
    ranks: [
        { 
            id: "vip", 
            name: "رتبة VIP", 
            price: 2500, 
            type: "rank", 
            color: "#FFD700",
            description: "رتبة VIP المميزة مع تدرج ذهبي وتوهج مميز" 
        },
        { 
            id: "mvp", 
            name: "رتبة MVP", 
            price: 5000, 
            type: "rank", 
            color: "#C0C0C0",
            description: "رتبة MVP مع تدرج فضي وتوهج فضي" 
        },
        { 
            id: "pro", 
            name: "رتبة PRO", 
            price: 25000, 
            type: "rank", 
            color: "#1E90FF",
            description: "رتبة المحترف مع تدرج أزرق وتوهج أزرق" 
        },
        { 
            id: "ceo", 
            name: "رتبة CEO", 
            price: 40000, 
            type: "rank", 
            color: "#8A2BE2",
            description: "رتبة المدير التنفيذي مع تدرج بنفسجي وتوهج بنفسجي" 
        },
        { 
            id: "boss", 
            name: "رتبة BOSS", 
            price: 60000, 
            type: "rank", 
            color: "#FF0000",
            description: "رتبة البوس مع تدرج أحمر وتوهج أحمر" 
        },
        { 
            id: "goat", 
            name: "رتبة GOAT", 
            price: 80000, 
            type: "rank", 
            color: "#32CD32",
            description: "رتبة الأفضل مع تدرج أخضر وتوهج أخضر" 
        },
        { 
            id: "legend", 
            name: "رتبة LEGEND", 
            price: 100000, 
            type: "rank", 
            color: "#FFA500",
            description: "رتبة الأسطورة مع تدرج برتقالي وتوهج برتقالي" 
        }
    ],
    backgrounds: [
        { 
            id: "bg_yellow", 
            name: "خلفية صفراء", 
            price: 200, 
            type: "background", 
            image: "#FFD700", // تم التغيير إلى لون صلب
            description: "خلفية صفراء باهجة" 
        },
        { 
            id: "bg_green", 
            name: "خلفية خضراء", 
            price: 300, 
            type: "background", 
            image: "#32CD32", // تم التغيير إلى لون صلب
            description: "خلفية خضراء بتدرجات أنيقة" 
        },
        { 
            id: "bg_red", 
            name: "خلفية حمراء", 
            price: 500, 
            type: "background", 
            image: "#FF0000", // تم التغيير إلى لون صلب
            description: "خلفية حمراء بتأثيرات نارية مميزة" 
        },
        { 
            id: "bg_blue", 
            name: "خلفية زرقاء", 
            price: 1000, 
            type: "background", 
            image: "#1E90FF", // تم التغيير إلى لون صلب
            description: "خلفية زرقاء بتدرجات عميقة" 
        },
        { 
            id: "bg_purple", 
            name: "خلفية بنفسجية", 
            price: 1500, 
            type: "background", 
            image: "#8A2BE2", // تم التغيير إلى لون صلب
            description: "خلفية بنفسجية بتأثيرات سحرية" 
        },
        { 
            id: "bg_custom", 
            name: "خلفية مخصصة", 
            price: 2001, 
            type: "background", 
            image: null,
            description: "خلفية مخصصة يمكن رفعها من جهازك وتظهر للجميع" 
        }
    ],
    logos: [ // تم تغيير الاسم من emblems إلى logos
        { id: "🤖", name: "شعار روبوت", price: 100, type: "logo", description: "بوت" },
        { id: "🏆", name: "شعار كأس", price: 150, type: "logo", description: "قوي" },
        { id: "🌟", name: "شعار نجمة", price: 200, type: "logo", description: "بطيزك" },
        { id: "🎮", name: "شعار ألعاب", price: 250, type: "logo", description: "قيمر" },
        { id: "❤️", name: "شعار قلب", price: 300, type: "logo", description: "شعار قلب أحمر" },
        { id: "⚡", name: "شعار برق", price: 350, type: "logo", description: "شو سريع" },
        { id: "📚", name: "شعار كتب", price: 400, type: "logo", description: "شو دافور" },
        { id: "🛡️", name: "شعار درع", price: 450, type: "logo", description: "بودي قارد" },
        { id: "🎵", name: "شعار موسيقى", price: 500, type: "logo", description: "رابر" },
        { id: "🎬", name: "شعار أفلام", price: 600, type: "logo", description: "مصور" },
        { id: "🧠", name: "شعار دماغ", price: 700, type: "logo", description: "ذكي" },
        { id: "🔥", name: "شعار نار", price: 800, type: "logo", description: "ستريك" },
        { id: "✨", name: "شعار بريق", price: 900, type: "logo", description: "برق" },
        { id: "💎", name: "شعار ألماس", price: 1000, type: "logo", description: "مميز" },
        { id: "👑", name: "شعار تاج", price: 1200, type: "logo", description: "ملك" },
        { id: "🐉", name: "شعار تنين", price: 1500, type: "logo", description: "اسطوري" },
        { id: "🚀", name: "شعار صاروخ", price: 1800, type: "logo", description: "لعند جيسوس" },
    ]
};

// DOM Elements
const elements = {
    // شاشات النظام
    loader: document.getElementById('loader'),
    loginScreen: document.getElementById('loginScreen'),
    bannedScreen: document.getElementById('bannedScreen'),
    siteWrapper: document.getElementById('siteWrapper'),
    
    // شاشة تسجيل الدخول
    membersList: document.getElementById('membersList'),
    passwordInput: document.getElementById('passwordInput'),
    loginBtn: document.getElementById('loginBtn'),
    guestModeBtn: document.getElementById('guestModeBtn'),
    loginNotice: document.getElementById('loginNotice'),
    
    // شاشة الحظر
    banReasonText: document.getElementById('banReasonText'),
    returnToLoginBtn: document.getElementById('returnToLoginBtn'),
    
    // الشريط العلوي
    menuToggle: document.getElementById('menuToggle'),
    dailyMessageText: document.getElementById('dailyMessageText'),
    userPoints: document.getElementById('userPoints'),
    notificationsBtn: document.getElementById('notificationsBtn'),
    notificationsCount: document.getElementById('notificationsCount'),
    userAvatarSmall: document.getElementById('userAvatarSmall'),
    
    // القائمة الجانبية
    sidebar: document.getElementById('sidebar'),
    sidebarUserAvatar: document.getElementById('sidebarUserAvatar'),
    sidebarUserName: document.getElementById('sidebarUserName'),
    sidebarUserRank: document.getElementById('sidebarUserRank'),
    logoutBtnSidebar: document.getElementById('logoutBtnSidebar'),
    onlineCountSidebar: document.getElementById('onlineCountSidebar'),
    onlineListSidebar: document.getElementById('onlineListSidebar'),
    giftBoxSidebar: document.getElementById('giftBoxSidebar'),
    giftTimerSidebar: document.getElementById('giftTimerSidebar'),
    codeInput: document.getElementById('codeInput'),
    redeemCodeBtn: document.getElementById('redeemCodeBtn'),
    
    // أقسام المحتوى
    contentSections: document.querySelectorAll('.content-section'),
    sidebarMenu: document.querySelectorAll('.sidebar-menu a'),
    
    // الصفحة الرئيسية
    totalMembersCount: document.getElementById('totalMembersCount'),
    onlineMembersCount: document.getElementById('onlineMembersCount'),
    totalPointsCount: document.getElementById('totalPointsCount'),
    todayMessagesCount: document.getElementById('todayMessagesCount'),
    dailyNewsContent: document.getElementById('dailyNewsContent'),
    
    // قسم الأعضاء
    membersGrid: document.getElementById('membersGrid'),
    filterMembersSelect: document.getElementById('filterMembersSelect'),
    searchMembersInput: document.getElementById('searchMembersInput'),
    
    // قسم الدردشة
    onlineChatCount: document.getElementById('onlineChatCount'),
    mostActiveUser: document.getElementById('mostActiveUser'),
    userMessagesToday: document.getElementById('userMessagesToday'),
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    sendBtn: document.getElementById('sendBtn'),
    emojiBtn: document.getElementById('emojiBtn'),
    
    // قسم المتجر
    shopUserBalance: document.getElementById('shopUserBalance'),
    shopItemsContainer: document.getElementById('shopItemsContainer'),
    shopTabs: document.querySelectorAll('.shop-tab'),
    
    // قسم السوق
    marketItems: document.getElementById('marketItems'),
    sellItemBtn: document.getElementById('sellItemBtn'),
    marketFilterType: document.getElementById('marketFilterType'),
    marketFilterSort: document.getElementById('marketFilterSort'),
    marketSearch: document.getElementById('marketSearch'),
    
    // قسم العملة
    currencyBalance: document.getElementById('currencyBalance'),
    transferToSelect: document.getElementById('transferToSelect'),
    transferAmount: document.getElementById('transferAmount'),
    transferFee: document.getElementById('transferFee'),
    transferBtn: document.getElementById('transferBtn'),
    transferHistory: document.getElementById('transferHistory'),
    giftCodeInput: document.getElementById('giftCodeInput'),
    redeemGiftCodeBtn: document.getElementById('redeemGiftCodeBtn'),
    codesHistory: document.getElementById('codesHistory'),
    
    // البروفايل
    profileCard: document.getElementById('profileCard'),
    profileTabs: document.querySelectorAll('.profile-tab'),
    ownedItems: document.getElementById('ownedItems'),
    totalMessagesStat: document.getElementById('totalMessagesStat'),
    totalPointsStat: document.getElementById('totalPointsStat'),
    joinDateStat: document.getElementById('joinDateStat'),
    ratingStat: document.getElementById('ratingStat'),
    currentPassword: document.getElementById('currentPassword'),
    newPassword: document.getElementById('newPassword'),
    confirmPassword: document.getElementById('confirmPassword'),
    changePasswordBtn: document.getElementById('changePasswordBtn'),
    notificationsToggle: document.getElementById('notificationsToggle'),
    
    // الإحصائيات
    generalRanking: document.getElementById('generalRanking'),
    activityRanking: document.getElementById('activityRanking'),
    pointsRanking: document.getElementById('pointsRanking'),
    totalVisitorsStat: document.getElementById('totalVisitorsStat'),
    totalMessagesSiteStat: document.getElementById('totalMessagesSiteStat'),
    totalSalesStat: document.getElementById('totalSalesStat'),
    activityRateStat: document.getElementById('activityRateStat'),
    
    // الإدارة
    adminSection: document.getElementById('adminSection'),
    adminContent: document.getElementById('adminContent'),
    adminTabs: document.querySelectorAll('.admin-tab'),
    
    // النوافذ المنبثقة
    sellModalWindow: document.getElementById('sellModalWindow'),
    buyModalWindow: document.getElementById('buyModalWindow'),
    ratingModal: document.getElementById('ratingModal'),
    confirmModal: document.getElementById('confirmModal'),
    closeModalBtns: document.querySelectorAll('.close-modal'),
    
    // نموذج البيع
    sellItemSelect: document.getElementById('sellItemSelect'),
    sellItemPrice: document.getElementById('sellItemPrice'),
    confirmSellBtn: document.getElementById('confirmSellBtn'),
    
    // نموذج الشراء
    buyItemPreview: document.getElementById('buyItemPreview'),
    buyItemName: document.getElementById('buyItemName'),
    buyItemDescription: document.getElementById('buyItemDescription'),
    buyItemPrice: document.getElementById('buyItemPrice'),
    buyItemSellerAvatar: document.getElementById('buyItemSellerAvatar'),
    buyItemSellerName: document.getElementById('buyItemSellerName'),
    confirmBuyBtn: document.getElementById('confirmBuyBtn'),
    
    // نموذج التقييم
    ratingStars: document.getElementById('ratingStars'),
    ratingComment: document.getElementById('ratingComment'),
    submitRatingBtn: document.getElementById('submitRatingBtn'),
    
    // نموذج التأكيد
    confirmTitle: document.getElementById('confirmTitle'),
    confirmMessage: document.getElementById('confirmMessage'),
    cancelConfirmBtn: document.getElementById('cancelConfirmBtn'),
    okConfirmBtn: document.getElementById('okConfirmBtn'),
    
    // صندوق الهدايا
    floatingGiftBtn: document.getElementById('floatingGiftBtn'),
    giftNotification: document.getElementById('giftNotification'),
    giftNotificationText: document.getElementById('giftNotificationText')
};

// تهيئة التطبيق
function initApp() {
    console.log('🚀 بدء تشغيل تطبيق مجموعة العظمة - النسخة المعدلة...');
    
    // منع فتح أدوات المطورين
    setupDeveloperToolsProtection();
    
    // تحميل حالة الهدايا من localStorage
    loadGiftState();
    
    // إخفاء شاشة التحميل بعد 3 ثواني
    setTimeout(() => {
        elements.loader.style.opacity = '0';
        setTimeout(() => {
            elements.loader.style.display = 'none';
            checkSavedLogin();
        }, 500);
    }, 3000);
    
    // تحميل البيانات من Firebase
    loadFirebaseData();
    
    // إعداد مستمعي الأحداث
    setupEventListeners();
    
    // تعبئة قائمة الأعضاء
    populateMembersList();
    
    // بدء مؤقتات النظام
    startSystemTimers();
}

// منع فتح أدوات المطورين
function setupDeveloperToolsProtection() {
    // منع فتح F12
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            showNotification('هذا الإجراء غير مسموح به', 'error');
            return false;
        }
    });
    
    // مراقبة فتح أدوات المطورين
    let devtools = /./;
    devtools.toString = function() {
        showNotification('تم اكتشاف فحص الصفحة!', 'error');
        return '';
    };
    
    console.log('%c', devtools);
}

// تحميل حالة الهدايا من localStorage
function loadGiftState() {
    const savedGiftTimer = localStorage.getItem('giftTimer');
    const savedGiftAvailable = localStorage.getItem('giftAvailable');
    const lastGiftTime = localStorage.getItem('lastGiftTime');
    
    if (savedGiftTimer !== null) {
        appData.giftTimer = parseInt(savedGiftTimer);
    }
    
    if (savedGiftAvailable !== null) {
        appData.giftAvailable = savedGiftAvailable === 'true';
    }
    
    // إذا كان هناك وقت سابق للهدية، حساب الوقت المتبقي
    if (lastGiftTime && !appData.giftAvailable) {
        const elapsed = Math.floor((Date.now() - parseInt(lastGiftTime)) / 1000);
        const remaining = Math.max(0, 300 - elapsed); // 5 دقائق = 300 ثانية
        
        if (remaining <= 0) {
            appData.giftAvailable = true;
            appData.giftTimer = 300;
        } else {
            appData.giftTimer = remaining;
        }
    }
    
    updateGiftDisplay();
}

// حفظ حالة الهدايا في localStorage
function saveGiftState() {
    localStorage.setItem('giftTimer', appData.giftTimer.toString());
    localStorage.setItem('giftAvailable', appData.giftAvailable.toString());
    
    if (!appData.giftAvailable) {
        localStorage.setItem('lastGiftTime', Date.now().toString());
    } else {
        localStorage.removeItem('lastGiftTime');
    }
    
    console.log('💾 تم حفظ حالة الهدايا:', { 
        timer: appData.giftTimer, 
        available: appData.giftAvailable 
    });
}

// تحميل البيانات من Firebase
function loadFirebaseData() {
    console.log('📥 جاري تحميل البيانات من Firebase...');
    
    // تحميل خبر اليوم
    database.ref('dailyNews').on('value', (snapshot) => {
        if (snapshot.exists()) {
            appData.dailyNews = snapshot.val();
            updateDailyNews();
        }
    });
    
    // تحميل الأعضاء المتصلين
    database.ref('onlineUsers').on('value', (snapshot) => {
        appData.onlineUsers = [];
        if (snapshot.exists()) {
            const data = snapshot.val();
            for (const id in data) {
                if (data[id].online) {
                    appData.onlineUsers.push(data[id]);
                }
            }
        }
        updateOnlineUsers();
    });
    
    // تحميل رسائل الدردشة
    database.ref('chatMessages').limitToLast(100).on('value', (snapshot) => {
        appData.chatMessages = [];
        if (snapshot.exists()) {
            const data = snapshot.val();
            for (const id in data) {
                appData.chatMessages.push({
                    id: id,
                    ...data[id]
                });
            }
        }
        updateChatMessages();
    });
    
    // تحميل عناصر السوق
    database.ref('marketItems').on('value', (snapshot) => {
        appData.marketItems = [];
        if (snapshot.exists()) {
            const data = snapshot.val();
            for (const id in data) {
                appData.marketItems.push({
                    id: id,
                    ...data[id]
                });
            }
        }
        updateMarketItems();
    });
    
    // تحميل إحصائيات الموقع
    database.ref('siteStats').on('value', (snapshot) => {
        if (snapshot.exists()) {
            appData.siteStats = snapshot.val();
            updateSiteStats();
        }
    });
    
    // تحميل بيانات الأعضاء من Firebase
    database.ref('users').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            membersData.forEach(member => {
                if (data[member.id]) {
                    Object.assign(member, data[member.id]);
                }
            });
            
            // تحديث الواجهة
            updateHomeStats();
        }
    });
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    console.log('⚙️ إعداد مستمعي الأحداث...');
    
    // تسجيل الدخول
    elements.loginBtn.addEventListener('click', handleLogin);
    elements.guestModeBtn.addEventListener('click', handleGuestMode);
    elements.passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    
    // العودة من شاشة الحظر
    elements.returnToLoginBtn.addEventListener('click', () => {
        elements.bannedScreen.style.display = 'none';
        showLoginScreen();
    });
    
    // زر القائمة الجانبية
    elements.menuToggle.addEventListener('click', () => {
        elements.sidebar.classList.toggle('active');
    });
    
    // التنقل بين الأقسام
    elements.sidebarMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.closest('a').dataset.section;
            if (section === 'logout') {
                handleLogout();
                return;
            }
            showSection(section);
            elements.sidebar.classList.remove('active');
        });
    });
    
    // تسجيل الخروج
    elements.logoutBtnSidebar.addEventListener('click', handleLogout);
    
    // إجراءات سريعة
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.closest('button').dataset.section;
            showSection(section);
        });
    });
    
    // تصفية الأعضاء
    elements.filterMembersSelect.addEventListener('change', () => {
        loadMembers();
    });
    
    elements.searchMembersInput.addEventListener('input', () => {
        loadMembers();
    });
    
    // إرسال رسالة
    elements.sendBtn.addEventListener('click', sendMessage);
    elements.chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // تبويبات المتجر
    elements.shopTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            switchShopTab(tabId);
        });
    });
    
    // بيع عنصر
    elements.sellItemBtn.addEventListener('click', showSellModal);
    
    // تحويل نقاط
    elements.transferBtn.addEventListener('click', transferPoints);
    elements.transferAmount.addEventListener('input', updateTransferFee);
    
    // استخدام كود الهدية
    elements.redeemCodeBtn.addEventListener('click', redeemCode);
    elements.redeemGiftCodeBtn.addEventListener('click', redeemGiftCode);
    
    // تبويبات البروفايل
    elements.profileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            switchProfileTab(tabId);
        });
    });
    
    // تغيير كلمة المرور
    elements.changePasswordBtn.addEventListener('click', changePassword);
    
    // تبويبات الإدارة
    elements.adminTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            switchAdminTab(tabId);
        });
    });
    
    // إغلاق النوافذ المنبثقة
    elements.closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    // تأكيد البيع
    elements.confirmSellBtn.addEventListener('click', confirmSell);
    
    // تأكيد الشراء
    elements.confirmBuyBtn.addEventListener('click', confirmBuy);
    
    // نظام التقييم
    setupRatingSystem();
    
    // صندوق الهدايا - إصلاح المشكلة
    elements.floatingGiftBtn.addEventListener('click', openGiftBox);
    elements.giftBoxSidebar.addEventListener('click', openGiftBox);
    
    // النقر خارج القائمة الجانبية لإغلاقها
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
            elements.sidebar.classList.remove('active');
        }
    });
    
    // النقر خارج النوافذ المنبثقة لإغلاقها
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
    
    // تحسين تجربة اللمس
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
}

// بدء مؤقتات النظام
function startSystemTimers() {
    // تحديث مؤقت الصندوق كل ثانية
    setInterval(() => {
        updateGiftTimer();
        saveGiftState();
    }, 1000);
    
    // تحديث الإحصائيات كل دقيقة
    setInterval(updateHomeStats, 60000);
}

// تحديث عرض الهدايا
function updateGiftDisplay() {
    if (!elements.giftTimerSidebar) return;
    
    const minutes = Math.floor(appData.giftTimer / 60);
    const seconds = appData.giftTimer % 60;
    
    elements.giftTimerSidebar.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    if (appData.giftAvailable) {
        elements.giftTimerSidebar.textContent = 'جاهز!';
        if (elements.giftBoxSidebar) elements.giftBoxSidebar.classList.add('pulse');
        if (elements.floatingGiftBtn) elements.floatingGiftBtn.classList.add('pulse');
    } else {
        if (elements.giftBoxSidebar) elements.giftBoxSidebar.classList.remove('pulse');
        if (elements.floatingGiftBtn) elements.floatingGiftBtn.classList.remove('pulse');
    }
    
    console.log('🎁 تحديث عرض الهدايا:', {
        timer: appData.giftTimer,
        available: appData.giftAvailable
    });
}

// التحقق من تسجيل الدخول المحفوظ
function checkSavedLogin() {
    const savedUserId = localStorage.getItem('currentUserId');
    const savedPassword = localStorage.getItem('currentUserPassword');
    
    if (savedUserId && savedPassword) {
        const member = membersData.find(m => m.id === parseInt(savedUserId));
        if (member && member.password === savedPassword) {
            if (member.banned) {
                showBannedScreen(member.banReason);
                return;
            }
            
            // تسجيل الدخول التلقائي
            appData.currentUser = { ...member };
            appData.isAdmin = member.position === 'admin';
            updateUserStatus(true);
            showSection('home');
            hideLoginScreen();
            showNotification(`مرحباً بعودتك ${member.name}!`, 'success');
            return;
        }
    }
    
    showLoginScreen();
}

// عرض شاشة تسجيل الدخول
function showLoginScreen() {
    elements.loginScreen.style.display = 'flex';
    setTimeout(() => {
        elements.loginScreen.style.opacity = '1';
    }, 10);
    
    // تعبئة قائمة الأعضاء
    populateMembersList();
}

// إخفاء شاشة تسجيل الدخول
function hideLoginScreen() {
    elements.loginScreen.style.opacity = '0';
    setTimeout(() => {
        elements.loginScreen.style.display = 'none';
        elements.siteWrapper.style.display = 'block';
        setTimeout(() => {
            elements.siteWrapper.style.opacity = '1';
        }, 10);
    }, 500);
}

// عرض شاشة الحظر
function showBannedScreen(reason) {
    elements.banReasonText.textContent = reason || 'لقد تم حظر حسابك من الوصول إلى الموقع.';
    elements.bannedScreen.style.display = 'flex';
    elements.loginScreen.style.display = 'none';
    elements.siteWrapper.style.display = 'none';
    
    // مسح بيانات تسجيل الدخول المحفوظة
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserPassword');
}

// تعبئة قائمة الأعضاء في شاشة تسجيل الدخول
function populateMembersList() {
    if (!elements.membersList) return;
    
    elements.membersList.innerHTML = '';
    
    const sortedMembers = [...membersData].sort((a, b) => {
        if (a.position === 'admin') return -1;
        if (b.position === 'admin') return 1;
        if (a.position === 'owner') return -1;
        if (b.position === 'owner') return 1;
        return a.name.localeCompare(b.name);
    });
    
    sortedMembers.forEach(member => {
        if (member.banned) return;
        
        const memberElement = document.createElement('div');
        memberElement.className = 'login-member';
        memberElement.dataset.id = member.id;
        
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}" onerror="this.src='https://files.catbox.moe/7pcx7j.jpg'">
            <div class="login-member-info">
                <h4>${member.name}</h4>
                <p>${member.position === 'admin' ? 'المدير' : member.position === 'owner' ? 'المالك' : getRankName(member.rank)}</p>
            </div>
        `;
        
        memberElement.addEventListener('click', () => {
            document.querySelectorAll('.login-member').forEach(m => m.classList.remove('active'));
            memberElement.classList.add('active');
            elements.passwordInput.focus();
        });
        
        elements.membersList.appendChild(memberElement);
    });
    
    // تحديد أول عضو
    if (elements.membersList.firstChild) {
        elements.membersList.firstChild.classList.add('active');
    }
}

// معالجة تسجيل الدخول
function handleLogin() {
    const activeMember = document.querySelector('.login-member.active');
    if (!activeMember) {
        showLoginNotice('يجب اختيار عضو', 'error');
        return;
    }
    
    const memberId = parseInt(activeMember.dataset.id);
    const password = elements.passwordInput.value.trim();
    
    const member = membersData.find(m => m.id === memberId);
    
    if (!member) {
        showLoginNotice('العضو غير موجود', 'error');
        return;
    }
    
    if (member.banned) {
        showBannedScreen(member.banReason || 'لقد تم حظر حسابك من الوصول إلى الموقع.');
        return;
    }
    
    if (password !== member.password) {
        showLoginNotice('كلمة المرور غير صحيحة', 'error');
        return;
    }
    
    // تسجيل الدخول الناجح
    appData.currentUser = { ...member };
    appData.isGuest = false;
    appData.isAdmin = member.position === 'admin';
    
    // حفظ بيانات تسجيل الدخول
    localStorage.setItem('currentUserId', member.id);
    localStorage.setItem('currentUserPassword', member.password);
    
    // تحديث حالة الاتصال
    updateUserStatus(true);
    
    // المكافأة اليومية
    checkDailyBonus();
    
    // تحديث الواجهة
    updateUserInfo();
    showSection('home');
    hideLoginScreen();
    showNotification(`مرحباً ${member.name}!`, 'success');
    
    // إخفاء قسم الإدارة إذا لم يكن المشرف الأول
    const adminLink = document.querySelector('.admin-only');
    if (adminLink) {
        adminLink.style.display = appData.currentUser.id === 1 ? 'block' : 'none';
    }
    
    // تعبئة المتجر
    loadShopItems();
    
    // إزالة وضع الشبح
    document.body.classList.remove('ghost-mode');
}

// معالجة الدخول كزائر
function handleGuestMode() {
    appData.currentUser = null;
    appData.isGuest = true;
    appData.isAdmin = false;
    
    // تحديث الواجهة
    updateUserInfo();
    showSection('home');
    hideLoginScreen();
    showNotification('مرحباً كزائر! بعض الميزات غير متاحة', 'info');
    
    // تفعيل وضع الشبح
    document.body.classList.add('ghost-mode');
    
    // إخفاء قسم الإدارة
    const adminLink = document.querySelector('.admin-only');
    if (adminLink) {
        adminLink.style.display = 'none';
    }
}

// تحديث حالة المستخدم
function updateUserStatus(online) {
    if (!appData.currentUser) return;
    
    const userRef = database.ref('users/' + appData.currentUser.id);
    const onlineRef = database.ref('onlineUsers/' + appData.currentUser.id);
    
    const updateData = {
        online: online,
        lastSeen: Date.now()
    };
    
    if (online) {
        updateData.id = appData.currentUser.id;
        updateData.name = appData.currentUser.name;
        updateData.image = appData.currentUser.image;
        updateData.position = appData.currentUser.position;
        updateData.rank = appData.currentUser.rank;
        
        onlineRef.set(updateData);
    } else {
        onlineRef.update({ online: false, lastSeen: Date.now() });
    }
    
    userRef.update({ online: online, lastSeen: Date.now() });
}

// تحديث معلومات المستخدم
function updateUserInfo() {
    if (appData.currentUser) {
        // شريط التنقل العلوي
        elements.userPoints.textContent = appData.currentUser.points || 0;
        elements.userAvatarSmall.querySelector('img').src = appData.currentUser.image;
        
        // القائمة الجانبية
        elements.sidebarUserAvatar.src = appData.currentUser.image;
        elements.sidebarUserName.textContent = appData.currentUser.name;
        elements.sidebarUserRank.textContent = getRankName(appData.currentUser.rank);
        
        // المتجر
        elements.shopUserBalance.textContent = appData.currentUser.points || 0;
        
        // العملة
        elements.currencyBalance.textContent = appData.currentUser.points || 0;
    } else if (appData.isGuest) {
        // شريط التنقل العلوي
        elements.userPoints.textContent = '0';
        elements.userAvatarSmall.querySelector('img').src = 'https://files.catbox.moe/7pcx7j.jpg';
        
        // القائمة الجانبية
        elements.sidebarUserAvatar.src = 'https://files.catbox.moe/7pcx7j.jpg';
        elements.sidebarUserName.textContent = 'زائر';
        elements.sidebarUserRank.textContent = 'زائر';
        
        // المتجر
        elements.shopUserBalance.textContent = '0';
        
        // العملة
        elements.currencyBalance.textContent = '0';
    }
}

// الحصول على اسم الرتبة مع التدرج
function getRankName(rank) {
    const ranks = {
        'admin': 'مشرف',
        'owner': 'مالك',
        'vip': 'VIP',
        'mvp': 'MVP',
        'pro': 'PRO',
        'ceo': 'CEO',
        'boss': 'BOSS',
        'goat': 'GOAT',
        'legend': 'LEGEND',
        'member': 'عضو'
    };
    
    return ranks[rank] || 'عضو';
}

// الحصول على كلاس CSS للرتبة
function getRankClass(rank) {
    return rank;
}

// تحديث خبر اليوم
function updateDailyNews() {
    if (!elements.dailyMessageText || !elements.dailyNewsContent) return;
    
    elements.dailyMessageText.textContent = appData.dailyNews;
    elements.dailyNewsContent.textContent = appData.dailyNews;
}

// تحديث الأعضاء المتصلين
function updateOnlineUsers() {
    if (!elements.onlineListSidebar || !elements.onlineCountSidebar || 
        !elements.onlineMembersCount || !elements.onlineChatCount) return;
    
    elements.onlineListSidebar.innerHTML = '';
    elements.onlineCountSidebar.textContent = appData.onlineUsers.length;
    elements.onlineMembersCount.textContent = appData.onlineUsers.length;
    elements.onlineChatCount.textContent = appData.onlineUsers.length;
    
    appData.onlineUsers.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'online-user';
        
        userElement.innerHTML = `
            <img src="${user.image}" alt="${user.name}" onerror="this.src='https://files.catbox.moe/7pcx7j.jpg'">
            <span>${user.name}</span>
        `;
        
        elements.onlineListSidebar.appendChild(userElement);
    });
}

// تحديث إحصائيات الصفحة الرئيسية
function updateHomeStats() {
    if (!elements.totalMembersCount || !elements.totalPointsCount || !elements.todayMessagesCount) return;
    
    // إجمالي الأعضاء
    elements.totalMembersCount.textContent = membersData.length;
    
    // إجمالي النقاط
    const totalPoints = membersData.reduce((sum, member) => sum + (member.points || 0), 0);
    elements.totalPointsCount.textContent = totalPoints.toLocaleString();
    appData.siteStats.totalPoints = totalPoints;
    
    // رسائل اليوم
    const today = new Date().toDateString();
    const todayMessages = appData.chatMessages.filter(msg => {
        const msgDate = new Date(msg.timestamp).toDateString();
        return msgDate === today;
    }).length;
    
    elements.todayMessagesCount.textContent = todayMessages;
    
    // حفظ إحصائيات الموقع
    database.ref('siteStats').set(appData.siteStats);
}

// تحديث إحصائيات الموقع
function updateSiteStats() {
    if (!elements.totalVisitorsStat || !elements.totalMessagesSiteStat || !elements.activityRateStat) return;
    
    elements.totalVisitorsStat.textContent = appData.siteStats.totalVisitors.toLocaleString();
    elements.totalMessagesSiteStat.textContent = appData.siteStats.totalMessages.toLocaleString();
    
    // حساب النسبة المئوية للنشاط
    const activityRate = membersData.length > 0 ? 
        (appData.onlineUsers.length / membersData.length * 100).toFixed(1) : 0;
    elements.activityRateStat.textContent = `${activityRate}%`;
}

// عرض قسم معين
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    elements.contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // إزالة النشاط من جميع روابط القائمة
    elements.sidebarMenu.forEach(link => {
        link.classList.remove('active');
    });
    
    // إضافة النشاط للقسم المطلوب
    const targetSection = document.getElementById(sectionId + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
        
        // إضافة النشاط للرابط في القائمة
        const targetLink = document.querySelector(`.sidebar-menu a[data-section="${sectionId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
        
        // تحميل محتوى القسم
        switch(sectionId) {
            case 'home':
                updateHomeStats();
                updateDailyNews();
                break;
            case 'members':
                loadMembers();
                break;
            case 'chat':
                updateChatMessages();
                break;
            case 'shop':
                loadShopItems();
                break;
            case 'market':
                updateMarketItems();
                break;
            case 'currency':
                loadCurrencySection();
                break;
            case 'profile':
                if (appData.currentUser) {
                    loadUserProfile();
                } else {
                    showNotification('يجب تسجيل الدخول لعرض البروفايل', 'error');
                    showSection('home');
                }
                break;
            case 'statistics':
                loadStatistics();
                break;
            case 'admin':
                if (appData.currentUser?.id === 1) {
                    loadAdminPanel();
                } else {
                    showNotification('غير مصرح بالدخول', 'error');
                    showSection('home');
                }
                break;
        }
    }
}

// تعبئة قسم الأعضاء
function loadMembers() {
    if (!elements.membersGrid) return;
    
    elements.membersGrid.innerHTML = '';
    
    let filteredMembers = [...membersData];
    
    // تطبيق التصفية
    const filterValue = elements.filterMembersSelect.value;
    const searchValue = elements.searchMembersInput.value.toLowerCase();
    
    if (filterValue === 'online') {
        const onlineUserIds = appData.onlineUsers.map(u => u.id);
        filteredMembers = filteredMembers.filter(m => onlineUserIds.includes(m.id));
    } else if (filterValue === 'admins') {
        filteredMembers = filteredMembers.filter(m => m.position === 'admin' || m.position === 'owner');
    } else if (filterValue === 'banned') {
        filteredMembers = filteredMembers.filter(m => m.banned);
    }
    
    // تطبيق البحث
    if (searchValue) {
        filteredMembers = filteredMembers.filter(m => 
            m.name.toLowerCase().includes(searchValue) ||
            m.realName?.toLowerCase().includes(searchValue) ||
            m.country.toLowerCase().includes(searchValue)
        );
    }
    
    // ترتيب الأعضاء
    filteredMembers.sort((a, b) => {
        if (a.position === 'admin') return -1;
        if (b.position === 'admin') return 1;
        if (a.position === 'owner') return -1;
        if (b.position === 'owner') return 1;
        return a.id - b.id;
    });
    
    // عرض الأعضاء
    if (filteredMembers.length === 0) {
        elements.membersGrid.innerHTML = '<div class="empty-message">لا يوجد أعضاء</div>';
        return;
    }
    
    filteredMembers.forEach(member => {
        const memberCard = createMemberCard(member);
        elements.membersGrid.appendChild(memberCard);
    });
}

// إنشاء بطاقة عضو محسنة
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card';
    if (member.banned) card.classList.add('banned');
    if (['vip', 'mvp', 'pro', 'ceo', 'boss', 'goat', 'legend', 'admin'].includes(member.rank)) {
        card.classList.add('glow');
    }
    
    // تحديد فئة الرتبة
    const rankClass = getRankClass(member.rank);
    
    // الخلفية النشطة
    const activeBackground = member.activeItems?.background || '';
    const backgroundStyle = activeBackground ? 
        (activeBackground.startsWith('#') ? 
            `style="background-color: ${activeBackground};"` : 
            `style="background-image: url('${activeBackground}'); background-size: cover; background-position: center;"`) 
        : '';
    
    // الشعار النشط
    const activeLogo = member.activeItems?.logo || '';
    
    // إنشاء البطاقة
    card.innerHTML = `
        <div class="member-image-container" ${backgroundStyle}>
            <img src="${member.image}" class="member-image" alt="${member.name}" onerror="this.src='https://files.catbox.moe/7pcx7j.jpg'">
            <div class="member-rank ${rankClass}">${getRankName(member.rank)}</div>
            ${member.online ? '<div class="online-badge"></div>' : ''}
        </div>
        <div class="member-info">
            <div class="member-name">
                <span>${member.name}</span>
                ${activeLogo ? `<span class="member-logo">${activeLogo}</span>` : ''}
            </div>
            <div class="member-details">
                <div class="member-detail">
                    <i class="fas fa-user"></i>
                    <span>${member.realName}</span>
                </div>
                <div class="member-detail">
                    <i class="fas fa-birthday-cake"></i>
                    <span>${member.age} سنة</span>
                </div>
                <div class="member-detail">
                    <i class="fas fa-flag"></i>
                    <span>${member.country}</span>
                </div>
            </div>
            ${member.motto ? `<p class="member-motto">"${member.motto}"</p>` : ''}
            <div class="member-stats">
                <span><i class="fas fa-coins"></i> ${member.points || 0} نقطة</span>
                <span><i class="fas fa-comment"></i> ${member.messagesCount || 0} رسالة</span>
            </div>
            <div class="member-actions">
                <a href="${member.instagram}" target="_blank" class="btn btn-primary btn-small">
                    <i class="fab fa-instagram"></i> إنستغرام
                </a>
                ${!appData.isGuest && appData.currentUser && appData.currentUser.id !== member.id ? `
                    <button class="btn btn-secondary btn-small btn-rate" data-member-id="${member.id}">
                        <i class="fas fa-star"></i> تقييم
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    // إضافة مستمع الأحداث لزر التقييم
    const rateBtn = card.querySelector('.btn-rate');
    if (rateBtn) {
        rateBtn.addEventListener('click', (e) => {
            const memberId = parseInt(e.target.closest('button').dataset.memberId);
            showRatingModal(memberId);
        });
    }
    
    return card;
}

// تحديث رسائل الدردشة مع الرتب
function updateChatMessages() {
    if (!elements.chatMessages || !elements.mostActiveUser || !elements.userMessagesToday) return;
    
    elements.chatMessages.innerHTML = '';
    
    if (appData.chatMessages.length === 0) {
        elements.chatMessages.innerHTML = '<div class="empty-message">لا توجد رسائل بعد. كن أول من يرسل رسالة!</div>';
        return;
    }
    
    // تحديد العضو الأكثر نشاطاً اليوم
    const today = new Date().toDateString();
    const todayMessages = appData.chatMessages.filter(msg => {
        const msgDate = new Date(msg.timestamp).toDateString();
        return msgDate === today;
    });
    
    const messageCounts = {};
    todayMessages.forEach(msg => {
        if (messageCounts[msg.senderId]) {
            messageCounts[msg.senderId]++;
        } else {
            messageCounts[msg.senderId] = 1;
        }
    });
    
    let mostActiveId = null;
    let maxMessages = 0;
    for (const senderId in messageCounts) {
        if (messageCounts[senderId] > maxMessages) {
            maxMessages = messageCounts[senderId];
            mostActiveId = senderId;
        }
    }
    
    if (mostActiveId) {
        const mostActiveMember = membersData.find(m => m.id === parseInt(mostActiveId));
        if (mostActiveMember) {
            elements.mostActiveUser.textContent = mostActiveMember.name;
        }
    }
    
    // عد رسائل المستخدم اليوم
    if (appData.currentUser) {
        const userMessagesToday = todayMessages.filter(msg => msg.senderId === appData.currentUser.id).length;
        elements.userMessagesToday.textContent = userMessagesToday;
    }
    
    // عرض الرسائل
    appData.chatMessages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        
        // التحقق إذا كانت الرسالة من المستخدم الحالي
        const isCurrentUser = appData.currentUser && msg.senderId === appData.currentUser.id;
        if (isCurrentUser) {
            messageElement.classList.add('sent');
        }
        
        const sender = membersData.find(m => m.id === msg.senderId);
        const time = new Date(msg.timestamp).toLocaleTimeString('ar-EG', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const rankClass = sender ? getRankClass(sender.rank) : '';
        const rankName = sender ? getRankName(sender.rank) : '';
        
        messageElement.innerHTML = `
            <img src="${sender ? sender.image : 'https://files.catbox.moe/7pcx7j.jpg'}" class="avatar" alt="${msg.senderName}">
            <div class="chat-message-content">
                <div class="chat-message-header">
                    <span class="chat-message-sender">
                        ${msg.senderName}
                        <span class="sender-rank ${rankClass}">${rankName}</span>
                    </span>
                    <span class="chat-message-time">${time}</span>
                </div>
                <div class="chat-message-text">${msg.text}</div>
            </div>
        `;
        
        elements.chatMessages.appendChild(messageElement);
    });
    
    // التمرير لآخر رسالة
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

// إرسال رسالة
function sendMessage() {
    if (!appData.currentUser && !appData.isGuest) {
        showNotification('يجب تسجيل الدخول لإرسال الرسائل', 'error');
        return;
    }
    
    if (appData.isGuest) {
        showNotification('الزوار لا يمكنهم إرسال الرسائل', 'error');
        return;
    }
    
    const message = elements.chatInput.value.trim();
    if (!message) return;
    
    // التحقق من الطول
    if (message.length > 200) {
        showNotification('الرسالة طويلة جداً (الحد الأقصى 200 حرف)', 'error');
        return;
    }
    
    // التحقق من حالة الميوت
    if (appData.chatMutedUntil > Date.now()) {
        const remainingTime = Math.ceil((appData.chatMutedUntil - Date.now()) / 1000);
        showNotification(`ممنوع الكتابة لمدة ${remainingTime} ثانية`, 'error');
        return;
    }
    
    // التحقق من السبام
    const lastMessage = appData.chatMessages[appData.chatMessages.length - 1];
    if (lastMessage && lastMessage.senderId === appData.currentUser.id && 
        lastMessage.text === message && Date.now() - lastMessage.timestamp < 30000) {
        showNotification('ممنوع تكرار الرسائل بشكل متتالي', 'error');
        appData.chatMutedUntil = Date.now() + 60000;
        return;
    }
    
    // إرسال الرسالة إلى Firebase
    const newMessage = {
        senderId: appData.currentUser.id,
        senderName: appData.currentUser.name,
        senderRank: appData.currentUser.rank,
        text: message,
        timestamp: Date.now()
    };
    
    database.ref('chatMessages').push(newMessage)
        .then(() => {
            // زيادة عداد رسائل المستخدم
            appData.currentUser.messagesCount = (appData.currentUser.messagesCount || 0) + 1;
            
            // إضافة نقطة للمستخدم
            appData.currentUser.points += 1;
            
            // حفظ في Firebase
            database.ref('users/' + appData.currentUser.id).update({
                messagesCount: appData.currentUser.messagesCount,
                points: appData.currentUser.points
            });
            
            // تحديث الواجهة
            updateUserInfo();
            
            // مسح حقل الإدخال
            elements.chatInput.value = '';
            
            // تحديث إحصائيات الموقع
            appData.siteStats.totalMessages = (appData.siteStats.totalMessages || 0) + 1;
            database.ref('siteStats/totalMessages').set(appData.siteStats.totalMessages);
        })
        .catch(error => {
            console.error('Error sending message:', error);
            showNotification('حدث خطأ في إرسال الرسالة', 'error');
        });
}

// تبديل تبويبات المتجر
function switchShopTab(tabId) {
    elements.shopTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`.shop-tab[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    loadShopItems(tabId);
}

// تحميل عناصر المتجر المحسنة مع إصلاح الشعارات
function loadShopItems(category = 'ranks') {
    if (!elements.shopItemsContainer) return;
    
    const items = shopItems[category];
    if (!items) return;
    
    elements.shopItemsContainer.innerHTML = '';
    
    if (!items.length) {
        elements.shopItemsContainer.innerHTML = '<div class="empty-message">لا توجد عناصر في هذه الفئة</div>';
        return;
    }
    
    items.forEach(item => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        
        // التحقق إذا كان العنصر مملوكاً
        const isOwned = appData.currentUser && 
                       appData.currentUser.items && 
                       appData.currentUser.items.some(i => i.id === item.id && i.type === item.type);
        
        if (isOwned) shopItem.classList.add('owned');
        
        let iconHTML = '';
        if (item.image && item.image.startsWith('#')) {
            // إذا كان لوناً صلباً
            iconHTML = `<div class="shop-item-icon" style="width: 60px; height: 60px; margin: 0 auto; background-color: ${item.image}; border-radius: 10px; border: 2px solid white;"></div>`;
        } else if (item.image) {
            iconHTML = `<div class="shop-item-icon"><img src="${item.image}" alt="${item.name}"></div>`;
        } else if (item.type === 'logo') {
            // إصلاح عرض الشعارات
            iconHTML = `<div class="shop-item-icon" style="font-size: 3.5rem; height: 60px; display: flex; align-items: center; justify-content: center;">${item.id}</div>`;
        } else {
            iconHTML = `<div class="shop-item-icon"><i class="fas fa-crown" style="color: ${item.color || '#B1121A'}; font-size: 3rem;"></i></div>`;
        }
        
        // زر مخصص للخلفيات المخصصة
        let actionButton = '';
        if (item.id === 'bg_custom' && !isOwned) {
            actionButton = `<button class="btn btn-primary btn-buy-shop" data-id="${item.id}" data-type="${item.type}" data-price="${item.price}">
                <i class="fas fa-shopping-cart"></i> شراء
            </button>`;
        } else if (item.id === 'bg_custom' && isOwned) {
            actionButton = `
                <button class="btn btn-success custom-upload-btn">
                    <i class="fas fa-upload"></i> رفع خلفية
                    <input type="file" accept="image/*" class="custom-bg-upload">
                </button>
            `;
        } else if (isOwned) {
            actionButton = `<button class="btn btn-success" disabled>
                <i class="fas fa-check"></i> مملوك
            </button>`;
        } else {
            actionButton = `<button class="btn btn-primary btn-buy-shop" data-id="${item.id}" data-type="${item.type}" data-price="${item.price}">
                <i class="fas fa-shopping-cart"></i> شراء
            </button>`;
        }
        
        shopItem.innerHTML = `
            <div class="shop-item-header">
                ${iconHTML}
                <h4 class="shop-item-name">${item.name}</h4>
                <p class="shop-item-description">${item.description}</p>
            </div>
            <div class="shop-item-price">
                <i class="fas fa-coins"></i>
                <span>${item.price.toLocaleString()}</span>
            </div>
            <div class="shop-item-actions">
                ${actionButton}
            </div>
        `;
        
        elements.shopItemsContainer.appendChild(shopItem);
    });
    
    // إضافة مستمعي الأحداث لأزرار الشراء
    document.querySelectorAll('.btn-buy-shop').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('button').dataset.id;
            const type = e.target.closest('button').dataset.type;
            const price = parseInt(e.target.closest('button').dataset.price);
            
            if (appData.isGuest) {
                showNotification('الزوار لا يمكنهم الشراء', 'error');
                return;
            }
            
            buyShopItem(id, type, price);
        });
    });
    
    // إضافة مستمعي الأحداث لرفع الخلفيات المخصصة
    document.querySelectorAll('.custom-bg-upload').forEach(input => {
        input.addEventListener('change', handleCustomBackgroundUpload);
    });
}

// معالجة رفع الخلفيات المخصصة
function handleCustomBackgroundUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // التحقق من نوع الملف
    if (!file.type.startsWith('image/')) {
        showNotification('الملف يجب أن يكون صورة', 'error');
        return;
    }
    
    // التحقق من حجم الملف (5MB كحد أقصى)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('حجم الصورة كبير جداً (الحد الأقصى 5MB)', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        
        // تحديث الخلفية النشطة للمستخدم
        if (!appData.currentUser.activeItems) {
            appData.currentUser.activeItems = {};
        }
        
        appData.currentUser.activeItems.background = imageUrl;
        
        // حفظ في Firebase
        database.ref('users/' + appData.currentUser.id).update({
            activeItems: appData.currentUser.activeItems
        })
        .then(() => {
            showNotification('تم رفع الخلفية بنجاح!', 'success');
            loadUserProfile();
        })
        .catch(error => {
            console.error('Error uploading background:', error);
            showNotification('حدث خطأ في رفع الخلفية', 'error');
        });
    };
    
    reader.readAsDataURL(file);
}

// شراء عنصر من المتجر
function buyShopItem(itemId, itemType, itemPrice) {
    if (!appData.currentUser) {
        showNotification('يجب تسجيل الدخول للشراء', 'error');
        return;
    }
    
    if (appData.currentUser.points < itemPrice) {
        showNotification('نقاطك غير كافية', 'error');
        return;
    }
    
    showConfirmModal(
        'تأكيد الشراء',
        `هل تريد شراء هذا العنصر بسعر ${itemPrice.toLocaleString()} نقطة؟`,
        () => {
            // خصم النقاط
            appData.currentUser.points -= itemPrice;
            
            // إضافة العنصر للمستخدم
            if (!appData.currentUser.items) {
                appData.currentUser.items = [];
            }
            
            const item = shopItems[itemType + 's']?.find(i => i.id === itemId);
            if (item) {
                const newItem = {
                    id: itemId,
                    type: itemType,
                    name: item.name,
                    price: itemPrice,
                    purchasedAt: Date.now()
                };
                
                if (item.image) newItem.image = item.image;
                if (item.color) newItem.color = item.color;
                if (itemType === 'logo') newItem.logo = item.id;
                
                appData.currentUser.items.push(newItem);
                
                // حفظ في Firebase
                database.ref('users/' + appData.currentUser.id).update({
                    points: appData.currentUser.points,
                    items: appData.currentUser.items
                })
                .then(() => {
                    showNotification(`تم شراء ${item.name} بنجاح`, 'success');
                    
                    // إذا كان عنصر شعار، تفعيله تلقائياً
                    if (itemType === 'logo') {
                        if (!appData.currentUser.activeItems) {
                            appData.currentUser.activeItems = {};
                        }
                        appData.currentUser.activeItems.logo = item.id;
                        
                        database.ref('users/' + appData.currentUser.id).update({
                            activeItems: appData.currentUser.activeItems
                        });
                    }
                    
                    // تحديث الواجهة
                    updateUserInfo();
                    loadShopItems();
                })
                .catch(error => {
                    console.error('Error saving purchase:', error);
                    showNotification('حدث خطأ في عملية الشراء', 'error');
                });
            }
        }
    );
}

// تحديث عناصر السوق
function updateMarketItems() {
    if (!elements.marketItems) return;
    
    elements.marketItems.innerHTML = '';
    
    // تطبيق الفلاتر
    let filteredItems = [...appData.marketItems];
    const searchTerm = elements.marketSearch.value.toLowerCase();
    const typeFilter = elements.marketFilterType.value;
    const sortFilter = elements.marketFilterSort.value;
    
    if (searchTerm) {
        filteredItems = filteredItems.filter(item => 
            item.name?.toLowerCase().includes(searchTerm) || 
            item.sellerName?.toLowerCase().includes(searchTerm)
        );
    }
    
    if (typeFilter !== 'all') {
        filteredItems = filteredItems.filter(item => item.type === typeFilter);
    }
    
    // التصنيف
    if (sortFilter === 'price-low') {
        filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-high') {
        filteredItems.sort((a, b) => b.price - a.price);
    } else {
        filteredItems.reverse(); // الأحدث أولاً
    }
    
    // عرض العناصر
    if (filteredItems.length === 0) {
        elements.marketItems.innerHTML = '<div class="empty-message">لا توجد عناصر للبيع</div>';
        return;
    }
    
    filteredItems.forEach(item => {
        if (item.sold) return;
        
        const marketItem = document.createElement('div');
        marketItem.className = 'shop-item';
        
        let iconHTML = '';
        if (item.image && item.image.startsWith('#')) {
            iconHTML = `<div class="shop-item-icon" style="width: 60px; height: 60px; margin: 0 auto; background-color: ${item.image}; border-radius: 10px; border: 2px solid white;"></div>`;
        } else if (item.image) {
            iconHTML = `<div class="shop-item-icon"><img src="${item.image}" alt="${item.name}"></div>`;
        } else if (item.type === 'logo') {
            iconHTML = `<div class="shop-item-icon" style="font-size: 3rem;">${item.logo || '🎁'}</div>`;
        } else {
            iconHTML = `<div class="shop-item-icon"><i class="fas fa-crown"></i></div>`;
        }
        
        marketItem.innerHTML = `
            <div class="shop-item-header">
                ${iconHTML}
                <h4 class="shop-item-name">${item.name}</h4>
                <p class="shop-item-description">${item.description || 'لا يوجد وصف'}</p>
            </div>
            <div class="shop-item-price">
                <i class="fas fa-coins"></i>
                <span>${item.price.toLocaleString()}</span>
            </div>
            <div class="seller-info">
                <img src="${item.sellerImage}" alt="${item.sellerName}" style="width: 30px; height: 30px; border-radius: 50%;">
                <span>${item.sellerName}</span>
            </div>
            <div class="shop-item-actions">
                ${!appData.isGuest && appData.currentUser && appData.currentUser.id !== item.sellerId ? `
                    <button class="btn btn-primary btn-buy-market" data-id="${item.id}">
                        <i class="fas fa-shopping-cart"></i> شراء
                    </button>
                ` : ''}
            </div>
        `;
        
        elements.marketItems.appendChild(marketItem);
    });
    
    // إضافة مستمعي الأحداث
    document.querySelectorAll('.btn-buy-market').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.closest('button').dataset.id;
            buyMarketItem(itemId);
        });
    });
}

// شراء عنصر من السوق
function buyMarketItem(itemId) {
    if (!appData.currentUser) {
        showNotification('يجب تسجيل الدخول للشراء', 'error');
        return;
    }
    
    const marketItem = appData.marketItems.find(item => item.id === itemId);
    if (!marketItem) {
        showNotification('العنصر غير موجود', 'error');
        return;
    }
    
    if (appData.currentUser.id === marketItem.sellerId) {
        showNotification('لا يمكنك شراء عنصرك الخاص', 'error');
        return;
    }
    
    if (appData.currentUser.points < marketItem.price) {
        showNotification('نقاطك غير كافية', 'error');
        return;
    }
    
    showConfirmModal(
        'تأكيد الشراء',
        `هل تريد شراء ${marketItem.name} من ${marketItem.sellerName} بسعر ${marketItem.price.toLocaleString()} نقطة؟`,
        () => {
            const buyerId = appData.currentUser.id;
            const sellerId = marketItem.sellerId;
            
            // خصم النقاط من المشتري
            appData.currentUser.points -= marketItem.price;
            
            // إضافة العنصر للمشتري
            if (!appData.currentUser.items) {
                appData.currentUser.items = [];
            }
            
            const purchasedItem = {
                id: marketItem.itemId,
                type: marketItem.type,
                name: marketItem.name,
                purchasedAt: Date.now(),
                fromMarket: true,
                originalSeller: sellerId
            };
            
            if (marketItem.image) purchasedItem.image = marketItem.image;
            if (marketItem.logo) purchasedItem.logo = marketItem.logo;
            
            appData.currentUser.items.push(purchasedItem);
            
            // البحث عن البائع
            const seller = membersData.find(m => m.id === sellerId);
            if (seller) {
                // إضافة النقاط للبائع
                seller.points = (seller.points || 0) + marketItem.price;
                
                // تحديث في Firebase
                database.ref('users/' + sellerId).update({
                    points: seller.points
                });
            }
            
            // تحديث المشتري في Firebase
            database.ref('users/' + buyerId).update({
                points: appData.currentUser.points,
                items: appData.currentUser.items
            });
            
            // تحديث العنصر في السوق كمباع
            database.ref('marketItems/' + itemId).update({
                sold: true,
                soldTo: buyerId,
                soldAt: Date.now()
            });
            
            showNotification(`تم شراء ${marketItem.name} بنجاح`, 'success');
            
            // تحديث الواجهة
            updateUserInfo();
            updateMarketItems();
        }
    );
}

// تحميل قسم العملة
function loadCurrencySection() {
    if (!elements.transferToSelect) return;
    
    // تعبئة قائمة التحويل
    elements.transferToSelect.innerHTML = '<option value="">اختر العضو</option>';
    membersData.forEach(member => {
        if (appData.currentUser && member.id !== appData.currentUser.id && !member.banned) {
            const option = document.createElement('option');
            option.value = member.id;
            option.textContent = member.name;
            elements.transferToSelect.appendChild(option);
        }
    });
    
    // تحديث رسوم التحويل
    updateTransferFee();
    
    // تحميل سجل التحويلات
    loadTransferHistory();
    
    // تحميل تاريخ الأكواد
    loadCodesHistory();
}

// تحديث رسوم التحويل
function updateTransferFee() {
    if (!elements.transferFee) return;
    
    const amount = parseInt(elements.transferAmount.value) || 0;
    const fee = Math.ceil(amount * 0.01); // 1%
    elements.transferFee.textContent = fee.toLocaleString();
}

// تحويل النقاط
function transferPoints() {
    const toId = parseInt(elements.transferToSelect.value);
    const amount = parseInt(elements.transferAmount.value);
    
    if (!toId || !amount) {
        showNotification('يجب اختيار عضو ومبلغ للتحويل', 'error');
        return;
    }
    
    if (amount < 1) {
        showNotification('يجب أن يكون المبلغ أكبر من صفر', 'error');
        return;
    }
    
    if (!appData.currentUser) {
        showNotification('يجب تسجيل الدخول للتحويل', 'error');
        return;
    }
    
    if (appData.currentUser.points < amount) {
        showNotification('نقاطك غير كافية', 'error');
        return;
    }
    
    const toMember = membersData.find(m => m.id === toId);
    if (!toMember) {
        showNotification('العضو غير موجود', 'error');
        return;
    }
    
    if (toMember.banned) {
        showNotification('لا يمكن التحويل إلى عضو محظور', 'error');
        return;
    }
    
    const fee = Math.ceil(amount * 0.01);
    const totalAmount = amount - fee;
    
    showConfirmModal(
        'تأكيد التحويل',
        `هل تريد تحويل ${amount.toLocaleString()} نقطة إلى ${toMember.name}؟ (بعد خصم ${fee.toLocaleString()} نقطة رسوم)`,
        () => {
            // تنفيذ التحويل
            appData.currentUser.points -= amount;
            toMember.points = (toMember.points || 0) + totalAmount;
            
            // حفظ في Firebase
            const updates = {};
            updates[`users/${appData.currentUser.id}/points`] = appData.currentUser.points;
            updates[`users/${toId}/points`] = toMember.points;
            
            database.ref().update(updates)
                .then(() => {
                    showNotification(`تم تحويل ${amount.toLocaleString()} نقطة إلى ${toMember.name}`, 'success');
                    
                    // تحديث الواجهة
                    updateUserInfo();
                    
                    // مسح الحقول
                    elements.transferToSelect.value = '';
                    elements.transferAmount.value = '';
                    updateTransferFee();
                    
                    // إضافة للسجل
                    addTransferToHistory(amount, toMember.name, 'outgoing');
                })
                .catch(error => {
                    console.error('Error transferring points:', error);
                    showNotification('حدث خطأ في عملية التحويل', 'error');
                });
        }
    );
}

// تحميل سجل التحويلات
function loadTransferHistory() {
    if (!elements.transferHistory) return;
    
    elements.transferHistory.innerHTML = '<div class="empty-message">لا توجد تحويلات سابقة</div>';
}

// إضافة تحويل للسجل
function addTransferToHistory(amount, memberName, type) {
    if (!elements.transferHistory) return;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    
    const date = new Date().toLocaleString('ar-EG');
    const sign = type === 'outgoing' ? '-' : '+';
    
    historyItem.innerHTML = `
        <div class="history-info">
            <div class="history-title">تحويل ${type === 'outgoing' ? 'إلى' : 'من'} ${memberName}</div>
            <div class="history-date">${date}</div>
        </div>
        <div class="history-amount ${type === 'outgoing' ? 'negative' : 'positive'}">
            ${sign}${amount.toLocaleString()}
        </div>
    `;
    
    elements.transferHistory.prepend(historyItem);
}

// استخدام كود الهدية
function redeemCode() {
    const code = elements.codeInput.value.trim();
    if (!code) {
        showNotification('يجب إدخال كود', 'error');
        return;
    }
    
    if (!appData.currentUser) {
        showNotification('يجب تسجيل الدخول لاستخدام الأكواد', 'error');
        return;
    }
    
    // البحث عن الكود في Firebase
    database.ref('codes/' + code).once('value')
        .then(snapshot => {
            if (!snapshot.exists()) {
                showNotification('الكود غير صالح', 'error');
                return;
            }
            
            const codeData = snapshot.val();
            
            // التحقق من صلاحية الكود
            if (!codeData.active) {
                showNotification('الكود غير نشط', 'error');
                return;
            }
            
            if (codeData.expiry && Date.now() > codeData.expiry) {
                showNotification('الكود منتهي الصلاحية', 'error');
                return;
            }
            
            if (codeData.used >= codeData.uses) {
                showNotification('تم استخدام هذا الكود بالكامل', 'error');
                return;
            }
            
            // إضافة النقاط للمستخدم
            appData.currentUser.points += codeData.value;
            
            // تحديث استخدام الكود
            const updates = {};
            updates[`users/${appData.currentUser.id}/points`] = appData.currentUser.points;
            updates[`codes/${code}/used`] = codeData.used + 1;
            
            if (codeData.used + 1 >= codeData.uses) {
                updates[`codes/${code}/active`] = false;
            }
            
            database.ref().update(updates)
                .then(() => {
                    showNotification(`تم إضافة ${codeData.value.toLocaleString()} نقطة إلى رصيدك`, 'success');
                    
                    // تحديث الواجهة
                    updateUserInfo();
                    
                    // مسح حقل الإدخال
                    elements.codeInput.value = '';
                    
                    // إضافة للسجل
                    addCodeToHistory(codeData.value, code);
                })
                .catch(error => {
                    console.error('Error redeeming code:', error);
                    showNotification('حدث خطأ في استخدام الكود', 'error');
                });
        })
        .catch(error => {
            console.error('Error checking code:', error);
            showNotification('حدث خطأ في التحقق من الكود', 'error');
        });
}

// استخدام كود الهدية من قسم العملة
function redeemGiftCode() {
    const code = elements.giftCodeInput.value.trim();
    if (!code) {
        showNotification('يجب إدخال كود', 'error');
        return;
    }
    
    redeemCode();
    elements.giftCodeInput.value = '';
}

// تحميل تاريخ الأكواد
function loadCodesHistory() {
    if (!elements.codesHistory) return;
    
    elements.codesHistory.innerHTML = '<div class="empty-message">لا توجد أكواد مستخدمة</div>';
}

// إضافة كود للسجل
function addCodeToHistory(value, code) {
    if (!elements.codesHistory) return;
    
    const historyItem = document.createElement('div');
    historyItem.className = 'code-history-item';
    
    const date = new Date().toLocaleString('ar-EG');
    
    historyItem.innerHTML = `
        <div class="code-history-info">
            <div class="code-history-title">كود: ${code}</div>
            <div class="code-history-date">${date}</div>
        </div>
        <div class="history-amount positive">+${value.toLocaleString()}</div>
    `;
    
    elements.codesHistory.prepend(historyItem);
}

// تحميل البروفايل الشخصي
function loadUserProfile() {
    if (!appData.currentUser) return;
    
    // تحديث بطاقة البروفايل
    const profileCard = createMemberCard(appData.currentUser);
    elements.profileCard.innerHTML = profileCard.innerHTML;
    
    // تحميل العناصر المملوكة
    loadOwnedItems();
    
    // تحديث الإحصائيات
    updateProfileStats();
}

// تحميل العناصر المملوكة
function loadOwnedItems() {
    if (!elements.ownedItems) return;
    
    elements.ownedItems.innerHTML = '';
    
    if (!appData.currentUser.items || appData.currentUser.items.length === 0) {
        elements.ownedItems.innerHTML = '<div class="empty-message">لا تملك أي عناصر</div>';
        return;
    }
    
    // تصنيف العناصر حسب النوع
    const categorizedItems = {
        rank: [],
        background: [],
        logo: []
    };
    
    appData.currentUser.items.forEach(item => {
        if (categorizedItems[item.type]) {
            categorizedItems[item.type].push(item);
        }
    });
    
    // عرض العناصر
    for (const type in categorizedItems) {
        if (categorizedItems[type].length > 0) {
            const typeTitle = document.createElement('h4');
            typeTitle.textContent = getTypeName(type) + 's';
            typeTitle.style.marginTop = '15px';
            typeTitle.style.color = 'var(--primary-color)';
            elements.ownedItems.appendChild(typeTitle);
            
            categorizedItems[type].forEach(item => {
                const itemElement = createOwnedItemElement(item);
                elements.ownedItems.appendChild(itemElement);
            });
        }
    }
}

// إنشاء عنصر مملوك
function createOwnedItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.className = 'shop-item';
    
    const isActive = checkIfItemIsActive(item);
    
    let iconHTML = '';
    if (item.image && item.image.startsWith('#')) {
        iconHTML = `<div class="shop-item-icon" style="width: 60px; height: 60px; margin: 0 auto; background-color: ${item.image}; border-radius: 10px; border: 2px solid white;"></div>`;
    } else if (item.image) {
        iconHTML = `<div class="shop-item-icon"><img src="${item.image}" alt="${item.name}"></div>`;
    } else if (item.logo) {
        iconHTML = `<div class="shop-item-icon" style="font-size: 3rem;">${item.logo}</div>`;
    } else {
        iconHTML = `<div class="shop-item-icon"><i class="fas fa-crown" style="color: ${item.color || '#B1121A'}; font-size: 3rem;"></i></div>`;
    }
    
    // زر رفع الخلفية للملفات المخصصة
    let actionButton = '';
    if (item.id === 'bg_custom' && isActive) {
        actionButton = `
            <button class="btn btn-success custom-upload-btn">
                <i class="fas fa-upload"></i> تغيير الخلفية
                <input type="file" accept="image/*" class="custom-bg-upload">
            </button>
        `;
    } else if (!isActive) {
        actionButton = `
            <button class="btn btn-primary btn-use-item" data-id="${item.id}" data-type="${item.type}">
                <i class="fas fa-check"></i> تفعيل
            </button>
        `;
    } else {
        actionButton = `
            <button class="btn btn-success" disabled>
                <i class="fas fa-check-circle"></i> مفعل
            </button>
        `;
    }
    
    // زر البيع (لا يظهر للخلفيات المخصصة)
    const sellButton = item.id !== 'bg_custom' ? `
        <button class="btn btn-secondary btn-sell-item" data-id="${item.id}" data-type="${item.type}">
            <i class="fas fa-tag"></i> بيع
        </button>
    ` : '';
    
    itemElement.innerHTML = `
        <div class="shop-item-header">
            ${iconHTML}
            <h4 class="shop-item-name">${item.name}</h4>
            <p class="shop-item-description">${getTypeName(item.type)}</p>
        </div>
        <div class="shop-item-actions">
            ${actionButton}
            ${sellButton}
        </div>
    `;
    
    // إضافة مستمعي الأحداث
    const useBtn = itemElement.querySelector('.btn-use-item');
    if (useBtn) {
        useBtn.addEventListener('click', (e) => {
            const id = e.target.closest('button').dataset.id;
            const type = e.target.closest('button').dataset.type;
            useItem(id, type);
        });
    }
    
    const sellBtn = itemElement.querySelector('.btn-sell-item');
    if (sellBtn) {
        sellBtn.addEventListener('click', (e) => {
            const id = e.target.closest('button').dataset.id;
            const type = e.target.closest('button').dataset.type;
            prepareSellItem(id, type);
        });
    }
    
    const uploadBtn = itemElement.querySelector('.custom-bg-upload');
    if (uploadBtn) {
        uploadBtn.addEventListener('change', handleCustomBackgroundUpload);
    }
    
    return itemElement;
}

// التحقق إذا كان العنصر مفعلاً
function checkIfItemIsActive(item) {
    if (!appData.currentUser.activeItems) return false;
    
    if (item.type === 'background') {
        return appData.currentUser.activeItems.background === item.image;
    } else if (item.type === 'logo') {
        return appData.currentUser.activeItems.logo === item.logo;
    } else if (item.type === 'rank') {
        return appData.currentUser.rank === item.id;
    }
    
    return false;
}

// استخدام/تفعيل عنصر
function useItem(itemId, itemType) {
    if (!appData.currentUser) return;
    
    // البحث عن العنصر
    const item = appData.currentUser.items.find(i => i.id === itemId && i.type === itemType);
    if (!item) {
        showNotification('العنصر غير موجود في ممتلكاتك', 'error');
        return;
    }
    
    // تفعيل العنصر
    if (!appData.currentUser.activeItems) {
        appData.currentUser.activeItems = {};
    }
    
    if (itemType === 'background') {
        appData.currentUser.activeItems.background = item.image;
    } else if (itemType === 'logo') {
        appData.currentUser.activeItems.logo = item.logo;
    } else if (itemType === 'rank') {
        appData.currentUser.rank = itemId;
    }
    
    // حفظ في Firebase
    database.ref('users/' + appData.currentUser.id).update({
        activeItems: appData.currentUser.activeItems,
        rank: itemType === 'rank' ? itemId : appData.currentUser.rank
    })
    .then(() => {
        showNotification(`تم تفعيل ${item.name}`, 'success');
        loadUserProfile();
    })
    .catch(error => {
        console.error('Error activating item:', error);
        showNotification('حدث خطأ في تفعيل العنصر', 'error');
    });
}

// الحصول على اسم النوع
function getTypeName(type) {
    const types = {
        'rank': 'رتبة',
        'background': 'خلفية',
        'logo': 'شعار'
    };
    
    return types[type] || type;
}

// تحديث إحصائيات البروفايل
function updateProfileStats() {
    if (!appData.currentUser) return;
    
    if (elements.totalMessagesStat) elements.totalMessagesStat.textContent = appData.currentUser.messagesCount || 0;
    if (elements.totalPointsStat) elements.totalPointsStat.textContent = appData.currentUser.points || 0;
    if (elements.joinDateStat) elements.joinDateStat.textContent = appData.currentUser.joinedDate || '-';
    if (elements.ratingStat) elements.ratingStat.textContent = appData.currentUser.rating ? appData.currentUser.rating.toFixed(1) : '0.0';
}

// تبديل تبويبات البروفايل
function switchProfileTab(tabId) {
    elements.profileTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.profile-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`.profile-tab[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const activeContent = document.getElementById(tabId + 'Tab');
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// تغيير كلمة المرور
function changePassword() {
    const currentPassword = elements.currentPassword.value;
    const newPassword = elements.newPassword.value;
    const confirmPassword = elements.confirmPassword.value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        showNotification('يجب تعبئة جميع الحقول', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showNotification('كلمة المرور الجديدة غير متطابقة', 'error');
        return;
    }
    
    if (currentPassword !== appData.currentUser.password) {
        showNotification('كلمة المرور الحالية غير صحيحة', 'error');
        return;
    }
    
    // تغيير كلمة المرور
    appData.currentUser.password = newPassword;
    
    // حفظ في Firebase
    database.ref('users/' + appData.currentUser.id).update({
        password: newPassword
    })
    .then(() => {
        showNotification('تم تغيير كلمة المرور بنجاح', 'success');
        
        // مسح الحقول
        elements.currentPassword.value = '';
        elements.newPassword.value = '';
        elements.confirmPassword.value = '';
        
        // تحديث التخزين المحلي
        localStorage.setItem('currentUserPassword', newPassword);
    })
    .catch(error => {
        console.error('Error changing password:', error);
        showNotification('حدث خطأ في تغيير كلمة المرور', 'error');
    });
}

// تحميل الإحصائيات
function loadStatistics() {
    // ترتيب النقاط
    const pointsRanking = [...membersData]
        .filter(m => !m.banned)
        .sort((a, b) => (b.points || 0) - (a.points || 0));
    
    elements.pointsRanking.innerHTML = '';
    pointsRanking.forEach((member, index) => {
        const rankItem = createRankingItem(member, index + 1, (member.points || 0).toLocaleString() + ' نقطة');
        elements.pointsRanking.appendChild(rankItem);
    });
    
    // ترتيب النشاط
    const activityRanking = [...membersData]
        .filter(m => !m.banned)
        .sort((a, b) => (b.messagesCount || 0) - (a.messagesCount || 0));
    
    elements.activityRanking.innerHTML = '';
    activityRanking.forEach((member, index) => {
        const rankItem = createRankingItem(member, index + 1, (member.messagesCount || 0).toLocaleString() + ' رسالة');
        elements.activityRanking.appendChild(rankItem);
    });
    
    // ترتيب عام
    const generalRanking = [...membersData]
        .filter(m => !m.banned)
        .sort((a, b) => {
            const scoreA = (a.points || 0) + (a.messagesCount || 0) * 10;
            const scoreB = (b.points || 0) + (b.messagesCount || 0) * 10;
            return scoreB - scoreA;
        });
    
    elements.generalRanking.innerHTML = '';
    generalRanking.forEach((member, index) => {
        const score = ((member.points || 0) + (member.messagesCount || 0) * 10).toLocaleString();
        const rankItem = createRankingItem(member, index + 1, score + ' نقطة');
        elements.generalRanking.appendChild(rankItem);
    });
}

// إنشاء عنصر التصنيف
function createRankingItem(member, position, value) {
    const rankItem = document.createElement('div');
    rankItem.className = 'ranking-item';
    
    rankItem.innerHTML = `
        <div class="ranking-position">${position}</div>
        <img src="${member.image}" class="ranking-avatar" alt="${member.name}">
        <div class="ranking-info">
            <div class="ranking-name">${member.name}</div>
            <div class="ranking-value">${value}</div>
        </div>
    `;
    
    return rankItem;
}

// تحميل لوحة الإدارة المحسنة مع زر التصفير
function loadAdminPanel() {
    elements.adminContent.innerHTML = `
        <div class="admin-tab-content active" id="newsTab">
            <h3>تعديل خبر اليوم</h3>
            <div class="admin-form">
                <div class="admin-form-group">
                    <textarea id="adminNewsInput" rows="6" placeholder="اكتب خبر اليوم هنا...">${appData.dailyNews}</textarea>
                </div>
                <div class="admin-form-actions">
                    <button class="btn btn-primary" id="saveNewsBtn">حفظ الخبر</button>
                </div>
            </div>
        </div>
        
        <div class="admin-tab-content" id="shop-managementTab">
            <h3>إدارة المتجر</h3>
            <div class="admin-form">
                <div class="admin-form-group">
                    <label>إضافة منتج جديد</label>
                    <select id="newItemCategory">
                        <option value="ranks">رتب</option>
                        <option value="backgrounds">خلفيات</option>
                        <option value="logos">شعارات</option>
                    </select>
                    <input type="text" id="newItemName" placeholder="اسم المنتج">
                    <input type="number" id="newItemPrice" placeholder="السعر">
                    <input type="text" id="newItemImage" placeholder="لون أو رابط الصورة">
                    <input type="text" id="newItemLogo" placeholder="رمز الشعار (للشعارات فقط)">
                    <input type="color" id="newItemColor" value="#B1121A">
                    <textarea id="newItemDescription" placeholder="الوصف" rows="3"></textarea>
                </div>
                <div class="admin-form-actions">
                    <button class="btn btn-primary" id="addItemBtn">إضافة منتج</button>
                </div>
            </div>
        </div>
        
        <div class="admin-tab-content" id="codes-managementTab">
            <h3>إنشاء أكواد جديدة</h3>
            <div class="admin-form">
                <div class="admin-form-group">
                    <input type="number" id="codeValue" placeholder="قيمة الكود (نقاط)">
                    <input type="number" id="codeUses" placeholder="عدد مرات الاستخدام" value="1">
                    <input type="date" id="codeExpiry" placeholder="تاريخ الانتهاء">
                </div>
                <div class="admin-form-actions">
                    <button class="btn btn-primary" id="generateCodeBtn">إنشاء كود</button>
                </div>
            </div>
            
            <h4>الأكواد النشطة</h4>
            <div id="activeCodesList" class="codes-list">
                <div class="empty-message">جاري تحميل الأكواد...</div>
            </div>
        </div>
        
        <div class="admin-tab-content" id="members-managementTab">
            <h3>إدارة الأعضاء</h3>
            <div class="admin-form">
                <input type="text" id="adminMemberSearch" placeholder="بحث عن عضو...">
            </div>
            
            <div class="admin-panel">
                <h3>تعديل نقاط العضو</h3>
                <div class="admin-form">
                    <div class="points-control">
                        <select id="editPointsMember">
                            <option value="">اختر العضو</option>
                        </select>
                        <input type="number" id="editPointsAmount" placeholder="المبلغ">
                        <button class="btn btn-primary" id="addPointsBtn">إضافة</button>
                        <button class="btn btn-danger" id="removePointsBtn">خصم</button>
                    </div>
                </div>
            </div>
            
            <div id="adminMembersList" class="members-list">
                <div class="empty-message">جاري تحميل الأعضاء...</div>
            </div>
        </div>
        
        <div class="admin-tab-content" id="chat-managementTab">
            <h3>إدارة الدردشة</h3>
            <div class="admin-form">
                <div class="admin-form-group">
                    <label>ميوت عضو</label>
                    <select id="muteMemberSelect">
                        <option value="">اختر العضو</option>
                    </select>
                    <input type="number" id="muteDuration" placeholder="المدة بالدقائق">
                </div>
                <div class="admin-form-group">
                    <label>حذف الرسائل</label>
                    <select id="deleteMessagesPeriod">
                        <option value="hour">أقدم من ساعة</option>
                        <option value="day">أقدم من يوم</option>
                        <option value="week">أقدم من أسبوع</option>
                        <option value="all">جميع الرسائل</option>
                    </select>
                </div>
                <div class="admin-form-actions">
                    <button class="btn btn-warning" id="muteMemberBtn">ميوت</button>
                    <button class="btn btn-danger" id="deleteMessagesBtn">حذف الرسائل</button>
                </div>
            </div>
        </div>
        
        <div class="admin-tab-content" id="site-statsTab">
            <h3>إحصائيات الموقع</h3>
            <div class="site-stats-grid">
                <div class="site-stat">
                    <i class="fas fa-users"></i>
                    <span class="stat-label">إجمالي الأعضاء</span>
                    <span class="stat-value">${membersData.length}</span>
                </div>
                <div class="site-stat">
                    <i class="fas fa-signal"></i>
                    <span class="stat-label">الأعضاء المتصلين</span>
                    <span class="stat-value">${appData.onlineUsers.length}</span>
                </div>
                <div class="site-stat">
                    <i class="fas fa-comments"></i>
                    <span class="stat-label">مجموع الرسائل</span>
                    <span class="stat-value">${appData.siteStats.totalMessages || 0}</span>
                </div>
                <div class="site-stat">
                    <i class="fas fa-coins"></i>
                    <span class="stat-label">إجمالي النقاط</span>
                    <span class="stat-value">${appData.siteStats.totalPoints || 0}</span>
                </div>
            </div>
            
            <div class="admin-panel">
                <h3><i class="fas fa-redo"></i> أدوات المسؤول</h3>
                <div class="admin-form">
                    <div class="admin-form-group">
                        <label>زر التصفير الكامل (للمدير الأول فقط)</label>
                        <p class="warning-text">تحذير: هذا الإجراء سيعيد جميع الأعضاء إلى الصفر (نقاط، رتب، عناصر)</p>
                        <button class="btn btn-danger" id="resetAllMembersBtn" ${appData.currentUser?.id === 1 ? '' : 'disabled'}>
                            <i class="fas fa-bomb"></i> تصفير جميع الأعضاء
                        </button>
                        ${appData.currentUser?.id !== 1 ? '<p class="error-text">هذا الزر متاح فقط للمدير الأول (عبد الأول)</p>' : ''}
                    </div>
                </div>
            </div>
            
            <div class="admin-form-actions">
                <button class="btn btn-primary" id="refreshStatsBtn">تحديث الإحصائيات</button>
            </div>
        </div>
    `;
    
    // إعداد مستمعي الأحداث للإدارة
    setupAdminEventListeners();
    
    // تحميل الأكواد النشطة
    loadActiveCodes();
    
    // تحميل قائمة الأعضاء للإدارة
    loadAdminMembersList();
    
    // تعبئة قائمة الميوت وتعديل النقاط
    loadMuteMembersList();
    loadEditPointsMembersList();
}

// إعداد مستمعي الأحداث للإدارة
function setupAdminEventListeners() {
    // حفظ خبر اليوم
    document.getElementById('saveNewsBtn')?.addEventListener('click', () => {
        const newsText = document.getElementById('adminNewsInput').value;
        database.ref('dailyNews').set(newsText)
            .then(() => {
                showNotification('تم حفظ خبر اليوم', 'success');
            })
            .catch(error => {
                console.error('Error saving news:', error);
                showNotification('حدث خطأ في حفظ الخبر', 'error');
            });
    });
    
    // إضافة منتج جديد
    document.getElementById('addItemBtn')?.addEventListener('click', () => {
        const category = document.getElementById('newItemCategory').value;
        const name = document.getElementById('newItemName').value.trim();
        const price = parseInt(document.getElementById('newItemPrice').value);
        const image = document.getElementById('newItemImage').value.trim();
        const logo = document.getElementById('newItemLogo').value.trim();
        const color = document.getElementById('newItemColor').value;
        const description = document.getElementById('newItemDescription').value.trim();
        
        if (!name || !price) {
            showNotification('يجب إدخال اسم وسعر للمنتج', 'error');
            return;
        }
        
        const newItem = {
            id: `${category}_${Date.now()}`,
            name: name,
            price: price,
            type: category.slice(0, -1), // إزالة s من النهاية
            description: description
        };
        
        if (image) newItem.image = image;
        if (logo) newItem.logo = logo;
        if (category === 'ranks' || category === 'logos') newItem.color = color;
        
        // إضافة للمتجر المحلي
        if (!shopItems[category]) shopItems[category] = [];
        shopItems[category].push(newItem);
        
        // حفظ في Firebase
        database.ref('shopItems/' + category + '/' + newItem.id).set(newItem)
            .then(() => {
                showNotification('تم إضافة المنتج بنجاح', 'success');
                
                // مسح الحقول
                document.getElementById('newItemName').value = '';
                document.getElementById('newItemPrice').value = '';
                document.getElementById('newItemImage').value = '';
                document.getElementById('newItemLogo').value = '';
                document.getElementById('newItemDescription').value = '';
            })
            .catch(error => {
                console.error('Error adding item:', error);
                showNotification('حدث خطأ في إضافة المنتج', 'error');
            });
    });
    
    // إنشاء كود جديد
    document.getElementById('generateCodeBtn')?.addEventListener('click', () => {
        const value = parseInt(document.getElementById('codeValue').value);
        const uses = parseInt(document.getElementById('codeUses').value) || 1;
        const expiry = document.getElementById('codeExpiry').value;
        
        if (!value || value < 1) {
            showNotification('يجب إدخال قيمة صالحة للكود', 'error');
            return;
        }
        
        // توليد كود عشوائي
        const code = 'GM' + Math.random().toString(36).substring(2, 8).toUpperCase();
        
        const codeData = {
            value: value,
            uses: uses,
            used: 0,
            createdBy: appData.currentUser.id,
            createdAt: Date.now(),
            active: true
        };
        
        if (expiry) {
            codeData.expiry = new Date(expiry).getTime();
        }
        
        database.ref('codes/' + code).set(codeData)
            .then(() => {
                showNotification(`تم إنشاء الكود: ${code}`, 'success');
                loadActiveCodes();
            })
            .catch(error => {
                console.error('Error generating code:', error);
                showNotification('حدث خطأ في إنشاء الكود', 'error');
            });
    });
    
    // إضافة نقاط لعضو
    document.getElementById('addPointsBtn')?.addEventListener('click', () => {
        const memberId = parseInt(document.getElementById('editPointsMember').value);
        const amount = parseInt(document.getElementById('editPointsAmount').value);
        
        if (!memberId || !amount) {
            showNotification('يجب اختيار عضو ومبلغ', 'error');
            return;
        }
        
        if (amount <= 0) {
            showNotification('المبلغ يجب أن يكون أكبر من صفر', 'error');
            return;
        }
        
        const member = membersData.find(m => m.id === memberId);
        if (!member) {
            showNotification('العضو غير موجود', 'error');
            return;
        }
        
        member.points = (member.points || 0) + amount;
        
        database.ref('users/' + memberId).update({
            points: member.points
        })
        .then(() => {
            showNotification(`تم إضافة ${amount} نقطة إلى ${member.name}`, 'success');
            document.getElementById('editPointsAmount').value = '';
        })
        .catch(error => {
            console.error('Error adding points:', error);
            showNotification('حدث خطأ في إضافة النقاط', 'error');
        });
    });
    
    // خصم نقاط من عضو
    document.getElementById('removePointsBtn')?.addEventListener('click', () => {
        const memberId = parseInt(document.getElementById('editPointsMember').value);
        const amount = parseInt(document.getElementById('editPointsAmount').value);
        
        if (!memberId || !amount) {
            showNotification('يجب اختيار عضو ومبلغ', 'error');
            return;
        }
        
        if (amount <= 0) {
            showNotification('المبلغ يجب أن يكون أكبر من صفر', 'error');
            return;
        }
        
        const member = membersData.find(m => m.id === memberId);
        if (!member) {
            showNotification('العضو غير موجود', 'error');
            return;
        }
        
        if (member.points < amount) {
            showNotification('نقاط العضو غير كافية', 'error');
            return;
        }
        
        member.points = (member.points || 0) - amount;
        
        database.ref('users/' + memberId).update({
            points: member.points
        })
        .then(() => {
            showNotification(`تم خصم ${amount} نقطة من ${member.name}`, 'success');
            document.getElementById('editPointsAmount').value = '';
        })
        .catch(error => {
            console.error('Error removing points:', error);
            showNotification('حدث خطأ في خصم النقاط', 'error');
        });
    });
    
    // ميوت عضو
    document.getElementById('muteMemberBtn')?.addEventListener('click', () => {
        const memberId = parseInt(document.getElementById('muteMemberSelect').value);
        const duration = parseInt(document.getElementById('muteDuration').value);
        
        if (!memberId || !duration) {
            showNotification('يجب اختيار عضو ومدة', 'error');
            return;
        }
        
        const muteUntil = Date.now() + (duration * 60000);
        database.ref('mutedUsers/' + memberId).set({
            mutedUntil: muteUntil,
            mutedBy: appData.currentUser.id,
            mutedAt: Date.now(),
            duration: duration
        })
        .then(() => {
            showNotification('تم ميوت العضو', 'success');
        })
        .catch(error => {
            console.error('Error muting member:', error);
            showNotification('حدث خطأ في ميوت العضو', 'error');
        });
    });
    
    // حذف الرسائل
    document.getElementById('deleteMessagesBtn')?.addEventListener('click', () => {
        const period = document.getElementById('deleteMessagesPeriod').value;
        
        showConfirmModal(
            'تأكيد الحذف',
            'هل تريد حذف الرسائل؟ هذا الإجراء لا يمكن التراجع عنه.',
            () => {
                let cutoffTime = Date.now();
                switch(period) {
                    case 'hour': cutoffTime -= 3600000; break;
                    case 'day': cutoffTime -= 86400000; break;
                    case 'week': cutoffTime -= 604800000; break;
                    case 'all': cutoffTime = 0; break;
                }
                
                if (period === 'all') {
                    database.ref('chatMessages').remove()
                        .then(() => {
                            showNotification('تم حذف جميع الرسائل', 'success');
                        })
                        .catch(error => {
                            console.error('Error deleting messages:', error);
                            showNotification('حدث خطأ في حذف الرسائل', 'error');
                        });
                } else {
                    showNotification('هذه الميزة تحتاج إلى تطوير إضافي', 'info');
                }
            }
        );
    });
    
    // تصفير جميع الأعضاء (زر جديد)
    document.getElementById('resetAllMembersBtn')?.addEventListener('click', () => {
        showConfirmModal(
            'تصفير جميع الأعضاء',
            '⚠️ تحذير: هذا الإجراء سيعيد جميع الأعضاء إلى الصفر:<br>• جميع النقاط = 0<br>• جميع الرتب = عضو<br>• جميع العناصر المملوكة = فارغ<br>• جميع الخلفيات والشعارات = غير مفعلة<br><br>هل أنت متأكد؟',
            () => {
                resetAllMembersToZero();
            }
        );
    });
    
    // تحديث الإحصائيات
    document.getElementById('refreshStatsBtn')?.addEventListener('click', () => {
        updateHomeStats();
        showNotification('تم تحديث الإحصائيات', 'success');
    });
}

// تصفير جميع الأعضاء إلى الصفر
function resetAllMembersToZero() {
    console.log('🔄 بدء تصفير جميع الأعضاء...');
    
    const updates = {};
    
    membersData.forEach(member => {
        // استثناء المدير الأول (عبد الأول)
        if (member.id === 1) {
            console.log('⚠️ تم استثناء المدير الأول من التصفير');
            return;
        }
        
        // تصفير جميع البيانات
        member.points = 0;
        member.rank = 'member';
        member.items = [];
        member.activeItems = {};
        member.messagesCount = 0;
        member.rating = 5;
        member.reviews = [];
        
        // إعداد التحديثات لـ Firebase
        updates[`users/${member.id}/points`] = 0;
        updates[`users/${member.id}/rank`] = 'member';
        updates[`users/${member.id}/items`] = [];
        updates[`users/${member.id}/activeItems`] = {};
        updates[`users/${member.id}/messagesCount`] = 0;
        updates[`users/${member.id}/rating`] = 5;
        updates[`users/${member.id}/reviews`] = [];
    });
    
    // تنفيذ التحديثات في Firebase
    database.ref().update(updates)
        .then(() => {
            showNotification('✅ تم تصفير جميع الأعضاء بنجاح!', 'success');
            
            // تحديث الواجهة إذا كان المستخدم الحالي من الأعضاء
            if (appData.currentUser && appData.currentUser.id !== 1) {
                appData.currentUser.points = 0;
                appData.currentUser.rank = 'member';
                appData.currentUser.items = [];
                appData.currentUser.activeItems = {};
                updateUserInfo();
            }
            
            // تحديث صفحة الأعضاء
            loadMembers();
            
            console.log('✅ تم تصفير جميع الأعضاء');
        })
        .catch(error => {
            console.error('Error resetting members:', error);
            showNotification('❌ حدث خطأ في تصفير الأعضاء', 'error');
        });
}

// تحميل الأكواد النشطة
function loadActiveCodes() {
    const codesList = document.getElementById('activeCodesList');
    if (!codesList) return;
    
    database.ref('codes').orderByChild('active').equalTo(true).once('value')
        .then(snapshot => {
            const codes = [];
            if (snapshot.exists()) {
                const data = snapshot.val();
                for (const code in data) {
                    if (data[code].active) {
                        codes.push({ code: code, ...data[code] });
                    }
                }
            }
            
            if (codes.length === 0) {
                codesList.innerHTML = '<div class="empty-message">لا توجد أكواد نشطة</div>';
                return;
            }
            
            codesList.innerHTML = '';
            codes.forEach(codeData => {
                const codeElement = document.createElement('div');
                codeElement.className = 'code-item';
                
                const createdDate = new Date(codeData.createdAt).toLocaleDateString('ar-EG');
                const expiryDate = codeData.expiry ? new Date(codeData.expiry).toLocaleDateString('ar-EG') : 'لا يوجد';
                
                codeElement.innerHTML = `
                    <div class="code-info">
                        <strong>${codeData.code}</strong>
                        <span>قيمة: ${codeData.value} نقطة</span>
                        <span>المستخدم: ${codeData.used}/${codeData.uses}</span>
                    </div>
                    <div class="code-details">
                        <span>أنشئ في: ${createdDate}</span>
                        <span>ينتهي في: ${expiryDate}</span>
                    </div>
                    <button class="btn btn-danger btn-sm btn-delete-code" data-code="${codeData.code}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                
                codesList.appendChild(codeElement);
            });
            
            // إضافة مستمعي الأحداث لحذف الأكواد
            document.querySelectorAll('.btn-delete-code').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const code = e.target.closest('button').dataset.code;
                    deleteCode(code);
                });
            });
        })
        .catch(error => {
            console.error('Error loading codes:', error);
            codesList.innerHTML = '<div class="empty-message">حدث خطأ في تحميل الأكواد</div>';
        });
}

// حذف كود
function deleteCode(code) {
    showConfirmModal(
        'حذف الكود',
        `هل تريد حذف الكود ${code}؟`,
        () => {
            database.ref('codes/' + code).remove()
                .then(() => {
                    showNotification('تم حذف الكود', 'success');
                    loadActiveCodes();
                })
                .catch(error => {
                    console.error('Error deleting code:', error);
                    showNotification('حدث خطأ في حذف الكود', 'error');
                });
        }
    );
}

// تحميل قائمة الأعضاء للإدارة
function loadAdminMembersList() {
    const membersList = document.getElementById('adminMembersList');
    if (!membersList) return;
    
    membersList.innerHTML = '';
    
    membersData.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'member-management-item';
        
        memberElement.innerHTML = `
            <div class="member-info">
                <img src="${member.image}" alt="${member.name}" style="width: 40px; height: 40px; border-radius: 50%;">
                <div>
                    <h4>${member.name}</h4>
                    <p>${member.points || 0} نقطة | ${member.messagesCount || 0} رسالة | ${getRankName(member.rank)}</p>
                </div>
            </div>
            <div class="member-actions">
                ${member.banned ? `
                    <button class="btn btn-success btn-unban" data-id="${member.id}">
                        إلغاء الحظر
                    </button>
                ` : `
                    <button class="btn btn-warning btn-ban" data-id="${member.id}">
                        حظر
                    </button>
                `}
                <button class="btn btn-danger btn-delete-member" data-id="${member.id}">
                    حذف
                </button>
            </div>
        `;
        
        membersList.appendChild(memberElement);
    });
    
    // إضافة مستمعي الأحداث
    document.querySelectorAll('.btn-ban').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const memberId = parseInt(e.target.closest('button').dataset.id);
            banMember(memberId);
        });
    });
    
    document.querySelectorAll('.btn-unban').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const memberId = parseInt(e.target.closest('button').dataset.id);
            unbanMember(memberId);
        });
    });
}

// تعبئة قائمة الميوت وتعديل النقاط
function loadMuteMembersList() {
    const muteSelect = document.getElementById('muteMemberSelect');
    const editSelect = document.getElementById('editPointsMember');
    
    if (!muteSelect || !editSelect) return;
    
    muteSelect.innerHTML = '<option value="">اختر العضو</option>';
    editSelect.innerHTML = '<option value="">اختر العضو</option>';
    
    membersData.forEach(member => {
        if (!member.banned && member.id !== appData.currentUser.id) {
            const option1 = document.createElement('option');
            option1.value = member.id;
            option1.textContent = member.name;
            muteSelect.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = member.id;
            option2.textContent = member.name;
            editSelect.appendChild(option2);
        }
    });
}

// حظر عضو
function banMember(memberId) {
    const member = membersData.find(m => m.id === memberId);
    if (!member) return;
    
    if (member.position === 'admin' || member.position === 'owner') {
        showNotification('لا يمكن حظر المشرف أو المالك', 'error');
        return;
    }
    
    const reason = prompt('أدخل سبب الحظر:');
    if (!reason) return;
    
    showConfirmModal(
        'حظر العضو',
        `هل تريد حظر ${member.name}؟`,
        () => {
            member.banned = true;
            member.banReason = reason;
            
            database.ref('users/' + memberId).update({
                banned: true,
                banReason: reason
            })
            .then(() => {
                showNotification(`تم حظر ${member.name}`, 'success');
                loadAdminMembersList();
            })
            .catch(error => {
                console.error('Error banning member:', error);
                showNotification('حدث خطأ في حظر العضو', 'error');
            });
        }
    );
}

// إلغاء حظر عضو
function unbanMember(memberId) {
    const member = membersData.find(m => m.id === memberId);
    if (!member) return;
    
    showConfirmModal(
        'إلغاء حظر العضو',
        `هل تريد إلغاء حظر ${member.name}؟`,
        () => {
            member.banned = false;
            member.banReason = '';
            
            database.ref('users/' + memberId).update({
                banned: false,
                banReason: ''
            })
            .then(() => {
                showNotification(`تم إلغاء حظر ${member.name}`, 'success');
                loadAdminMembersList();
            })
            .catch(error => {
                console.error('Error unbanning member:', error);
                showNotification('حدث خطأ في إلغاء حظر العضو', 'error');
            });
        }
    );
}

// تبديل تبويبات الإدارة
function switchAdminTab(tabId) {
    elements.adminTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`.admin-tab[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    const activeContent = document.getElementById(tabId + 'Tab');
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// إعداد نظام التقييم
function setupRatingSystem() {
    const stars = elements.ratingStars.querySelectorAll('i');
    
    stars.forEach(star => {
        star.addEventListener('mouseenter', (e) => {
            const rating = parseInt(e.target.dataset.rating);
            appData.hoverRating = rating;
            updateStarsDisplay();
        });
        
        star.addEventListener('click', (e) => {
            const rating = parseInt(e.target.dataset.rating);
            appData.currentRating = rating;
            updateStarsDisplay();
        });
    });
    
    elements.ratingStars.addEventListener('mouseleave', () => {
        appData.hoverRating = 0;
        updateStarsDisplay();
    });
    
    elements.submitRatingBtn.addEventListener('click', submitRating);
}

// تحديث عرض النجوم
function updateStarsDisplay() {
    const stars = elements.ratingStars.querySelectorAll('i');
    const displayRating = appData.hoverRating || appData.currentRating;
    
    stars.forEach(star => {
        const starRating = parseInt(star.dataset.rating);
        
        star.classList.remove('fas', 'far', 'active', 'hover');
        
        if (starRating <= displayRating) {
            star.classList.add('fas', 'active');
        } else {
            star.classList.add('far');
        }
        
        if (appData.hoverRating > 0 && starRating <= appData.hoverRating) {
            star.classList.add('hover');
        }
    });
}

// عرض نافذة التقييم
function showRatingModal(memberId) {
    appData.selectedMember = memberId;
    appData.currentRating = 0;
    appData.hoverRating = 0;
    
    // إعادة تعيين النجوم
    const stars = elements.ratingStars.querySelectorAll('i');
    stars.forEach(star => {
        star.classList.remove('fas', 'far', 'active', 'hover');
        star.classList.add('far');
    });
    
    // مسح التعليق
    elements.ratingComment.value = '';
    
    elements.ratingModal.classList.add('active');
}

// إرسال التقييم
function submitRating() {
    if (!appData.currentUser) {
        showNotification('يجب تسجيل الدخول لتقييم الأعضاء', 'error');
        return;
    }
    
    if (!appData.selectedMember) {
        showNotification('لم يتم اختيار عضو', 'error');
        return;
    }
    
    if (appData.currentRating === 0) {
        showNotification('يجب اختيار تقييم', 'error');
        return;
    }
    
    const seller = membersData.find(m => m.id === appData.selectedMember);
    if (!seller) {
        showNotification('العضو غير موجود', 'error');
        return;
    }
    
    if (seller.id === appData.currentUser.id) {
        showNotification('لا يمكنك تقييم نفسك', 'error');
        return;
    }
    
    const comment = elements.ratingComment.value.trim();
    
    // إضافة التقييم
    if (!seller.reviews) seller.reviews = [];
    
    const review = {
        userId: appData.currentUser.id,
        userName: appData.currentUser.name,
        rating: appData.currentRating,
        comment: comment,
        timestamp: Date.now()
    };
    
    seller.reviews.push(review);
    
    // حساب متوسط التقييم
    const totalRating = seller.reviews.reduce((sum, review) => sum + review.rating, 0);
    seller.rating = totalRating / seller.reviews.length;
    
    // حفظ في Firebase
    database.ref('users/' + seller.id).update({
        rating: seller.rating,
        reviews: seller.reviews
    })
    .then(() => {
        showNotification(`تم تقييم ${seller.name} بنجاح`, 'success');
        elements.ratingModal.classList.remove('active');
    })
    .catch(error => {
        console.error('Error submitting rating:', error);
        showNotification('حدث خطأ في إرسال التقييم', 'error');
    });
}

// عرض نافذة البيع
function showSellModal() {
    if (!appData.currentUser) {
        showNotification('يجب تسجيل الدخول للبيع', 'error');
        return;
    }
    
    // تعبئة قائمة العناصر
    elements.sellItemSelect.innerHTML = '<option value="">اختر العنصر للبيع</option>';
    
    if (appData.currentUser.items) {
        appData.currentUser.items.forEach(item => {
            // تخطي العناصر المشتراة حديثاً من السوق والخلفيات المخصصة
            if (item.fromMarket && Date.now() - item.purchasedAt < 86400000) {
                return;
            }
            
            if (item.id === 'bg_custom') {
                return; // لا يمكن بيع الخلفيات المخصصة
            }
            
            const option = document.createElement('option');
            option.value = JSON.stringify(item);
            option.textContent = `${item.name} (${getTypeName(item.type)})`;
            elements.sellItemSelect.appendChild(option);
        });
    }
    
    if (elements.sellItemSelect.options.length === 1) {
        elements.sellItemSelect.innerHTML = '<option value="">لا تملك عناصر قابلة للبيع</option>';
    }
    
    elements.sellModalWindow.classList.add('active');
}

// إعداد عنصر للبيع
function prepareSellItem(itemId, itemType) {
    const item = appData.currentUser.items.find(i => i.id === itemId && i.type === itemType);
    if (item) {
        elements.sellItemSelect.innerHTML = '<option value="">اختر العنصر للبيع</option>';
        const option = document.createElement('option');
        option.value = JSON.stringify(item);
        option.textContent = `${item.name} (${getTypeName(item.type)})`;
        option.selected = true;
        elements.sellItemSelect.appendChild(option);
        
        elements.sellModalWindow.classList.add('active');
    }
}

// تأكيد البيع
function confirmSell() {
    const selectedOption = elements.sellItemSelect.value;
    const price = parseInt(elements.sellItemPrice.value);
    
    if (!selectedOption) {
        showNotification('يجب اختيار عنصر للبيع', 'error');
        return;
    }
    
    if (!price || price < 1) {
        showNotification('يجب تحديد سعر صالح', 'error');
        return;
    }
    
    const item = JSON.parse(selectedOption);
    
    // إضافة العنصر للسوق
    const newMarketItem = {
        itemId: item.id,
        type: item.type,
        name: item.name,
        price: price,
        sellerId: appData.currentUser.id,
        sellerName: appData.currentUser.name,
        sellerImage: appData.currentUser.image,
        timestamp: Date.now(),
        sold: false
    };
    
    if (item.image) newMarketItem.image = item.image;
    if (item.logo) newMarketItem.logo = item.logo;
    if (item.description) newMarketItem.description = item.description;
    
    database.ref('marketItems').push(newMarketItem)
        .then((ref) => {
            // حذف العنصر من ممتلكات المستخدم
            const itemIndex = appData.currentUser.items.findIndex(i => 
                i.id === item.id && i.type === item.type
            );
            
            if (itemIndex !== -1) {
                appData.currentUser.items.splice(itemIndex, 1);
                
                // حفظ في Firebase
                database.ref('users/' + appData.currentUser.id).update({
                    items: appData.currentUser.items
                });
            }
            
            showNotification('تم عرض العنصر للبيع بنجاح', 'success');
            elements.sellModalWindow.classList.remove('active');
            elements.sellItemPrice.value = '';
        })
        .catch(error => {
            console.error('Error adding item to market:', error);
            showNotification('حدث خطأ في عرض العنصر للبيع', 'error');
        });
}

// عرض نافذة التأكيد
function showConfirmModal(title, message, confirmCallback) {
    elements.confirmTitle.textContent = title;
    elements.confirmMessage.textContent = message;
    
    elements.confirmModal.classList.add('active');
    
    // إزالة المستمعين السابقين
    const newOkBtn = elements.okConfirmBtn.cloneNode(true);
    elements.okConfirmBtn.parentNode.replaceChild(newOkBtn, elements.okConfirmBtn);
    elements.okConfirmBtn = document.getElementById('okConfirmBtn');
    
    const newCancelBtn = elements.cancelConfirmBtn.cloneNode(true);
    elements.cancelConfirmBtn.parentNode.replaceChild(newCancelBtn, elements.cancelConfirmBtn);
    elements.cancelConfirmBtn = document.getElementById('cancelConfirmBtn');
    
    // إضافة مستمعي الأحداث الجدد
    elements.okConfirmBtn.addEventListener('click', () => {
        if (confirmCallback) confirmCallback();
        elements.confirmModal.classList.remove('active');
    });
    
    elements.cancelConfirmBtn.addEventListener('click', () => {
        elements.confirmModal.classList.remove('active');
    });
}

// فتح صندوق الهدايا المحسن
function openGiftBox() {
    if (!appData.currentUser && !appData.isGuest) {
        showNotification('يجب تسجيل الدخول أولاً', 'error');
        return;
    }
    
    if (appData.isGuest) {
        showNotification('الزوار لا يحصلون على هدايا', 'error');
        return;
    }
    
    if (!appData.giftAvailable) {
        const minutes = Math.floor(appData.giftTimer / 60);
        const seconds = appData.giftTimer % 60;
        showNotification(`صندوق الهدايا غير متاح حالياً. الوقت المتبقي: ${minutes}:${seconds.toString().padStart(2, '0')}`, 'warning');
        return;
    }
    
    // توليد مكافأة عشوائية
    const reward = Math.floor(Math.random() * 48) + 3; // 3-50 نقطة
    
    // إضافة النقاط للمستخدم
    appData.currentUser.points += reward;
    
    // تحديث في Firebase
    database.ref('users/' + appData.currentUser.id).update({
        points: appData.currentUser.points
    });
    
    // تحديث الواجهة
    updateUserInfo();
    
    // عرض المكافأة
    elements.giftNotificationText.textContent = `🎁 حصلت على ${reward} نقطة!`;
    elements.giftNotification.classList.add('active');
    
    // إعادة تعيين المؤقت
    appData.giftAvailable = false;
    appData.giftTimer = 300; // 5 دقائق
    
    // حفظ الحالة
    saveGiftState();
    
    // تحديث العرض
    updateGiftDisplay();
    
    // إخفاء الإشعار بعد 3 ثواني
    setTimeout(() => {
        elements.giftNotification.classList.remove('active');
    }, 3000);
    
    showNotification(`🎉 حصلت على ${reward} نقطة من صندوق الهدايا!`, 'success');
    
    console.log('🎁 تم فتح صندوق الهدايا:', { reward, user: appData.currentUser.name });
}

// تحديث مؤقت الصندوق المحسن
function updateGiftTimer() {
    if (!appData.giftAvailable && appData.giftTimer > 0) {
        appData.giftTimer--;
        
        updateGiftDisplay();
        
        if (appData.giftTimer === 0) {
            appData.giftAvailable = true;
            if (elements.giftTimerSidebar) elements.giftTimerSidebar.textContent = 'جاهز!';
            if (elements.floatingGiftBtn) elements.floatingGiftBtn.classList.add('pulse');
            if (elements.giftBoxSidebar) elements.giftBoxSidebar.classList.add('pulse');
        }
    }
}

// تنسيق الوقت
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// التحقق من المكافأة اليومية
function checkDailyBonus() {
    if (!appData.currentUser) return;
    
    const lastBonusDate = localStorage.getItem('lastBonusDate_' + appData.currentUser.id);
    const today = new Date().toDateString();
    
    if (lastBonusDate !== today) {
        const dailyBonus = Math.floor(Math.random() * 151) + 50; // 50-200 نقطة
        appData.currentUser.points += dailyBonus;
        
        // حفظ النقاط في Firebase
        database.ref('users/' + appData.currentUser.id + '/points').transaction((currentPoints) => {
            return (currentPoints || 0) + dailyBonus;
        });
        
        // حفظ تاريخ المكافأة
        localStorage.setItem('lastBonusDate_' + appData.currentUser.id, today);
        
        showNotification(`🎉 حصلت على ${dailyBonus} نقطة كمكافأة يومية!`, 'success');
        updateUserInfo();
    }
}

// معالجة تسجيل الخروج
function handleLogout() {
    showConfirmModal(
        'تسجيل الخروج',
        'هل تريد تسجيل الخروج؟',
        () => {
            if (appData.currentUser) {
                // تحديث حالة الاتصال
                updateUserStatus(false);
                
                // مسح بيانات تسجيل الدخول المحفوظة
                localStorage.removeItem('currentUserId');
                localStorage.removeItem('currentUserPassword');
            }
            
            // إعادة تعيين الحالة
            appData.currentUser = null;
            appData.isGuest = false;
            appData.isAdmin = false;
            
            // إزالة وضع الشبح
            document.body.classList.remove('ghost-mode');
            
            // إغلاق القائمة الجانبية
            elements.sidebar.classList.remove('active');
            
            // العودة لشاشة تسجيل الدخول
            elements.siteWrapper.style.opacity = '0';
            setTimeout(() => {
                elements.siteWrapper.style.display = 'none';
                showLoginScreen();
                
                // مسح حقول تسجيل الدخول
                elements.passwordInput.value = '';
                document.querySelectorAll('.login-member').forEach(m => m.classList.remove('active'));
                if (elements.membersList && elements.membersList.firstChild) {
                    elements.membersList.firstChild.classList.add('active');
                }
            }, 500);
            
            showLoginNotice('تم تسجيل الخروج بنجاح', 'success');
        }
    );
}

// عرض رسالة في شاشة تسجيل الدخول
function showLoginNotice(message, type) {
    if (!elements.loginNotice) return;
    
    elements.loginNotice.textContent = message;
    elements.loginNotice.className = 'login-notice ' + type;
    
    setTimeout(() => {
        elements.loginNotice.textContent = '';
        elements.loginNotice.className = 'login-notice';
    }, 3000);
}

// عرض إشعار محسن مع صوت
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification-toast ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // تشغيل صوت للإشعارات المهمة
    if (type === 'success' || type === 'error') {
        playNotificationSound(type);
    }
    
    // إظهار الإشعار
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // إخفاء الإشعار بعد 3 ثواني
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// تشغيل صوت الإشعار
function playNotificationSound(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'success') {
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        } else if (type === 'error') {
            oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime); // F4
        }
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('تعذر تشغيل الصوت:', error);
    }
}

// الحصول على أيقونة الإشعار
function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    
    return icons[type] || 'bell';
}

// بدء تشغيل التطبيق
document.addEventListener('DOMContentLoaded', initApp);