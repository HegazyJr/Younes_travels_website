// ===== MAIN JAVASCRIPT FILE FOR YOUNES TRAVELS WEBSITE =====

// ===== IMAGE CYCLING FUNCTIONALITY =====
// الحصول على عناصر الصور المتحركة في الخلفية
const imgOne = document.getElementById('img-one');
const imgTwo = document.getElementById('img-two');
const imgThree = document.getElementById('img-three');

/**
 * دالة تبديل الصور في الخلفية
 * تقوم بتبديل مواقع الصور كل 10 ثواني لإنشاء تأثير متحرك
 */
function cycleImages() {
    // الحصول على المصادر الحالية للصور
    const current = [imgOne.src, imgTwo.src, imgThree.src];
    
    // تبديل مواقع الصور: 1→2, 2→3, 3→1
    imgOne.src = current[2];   // الصورة الأولى تأخذ مصدر الصورة الثالثة
    imgTwo.src = current[0];   // الصورة الثانية تأخذ مصدر الصورة الأولى
    imgThree.src = current[1]; // الصورة الثالثة تأخذ مصدر الصورة الثانية
}

// تشغيل تبديل الصور كل 10 ثواني
setInterval(() => {
    cycleImages();
}, 10000);

// ===== HEADER SCROLL EFFECT =====
// الحصول على عنصر الهيدر
const header = document.querySelector("header");
console.log(header)

if (header) {
    // إضافة تأثير انتقالي للهيدر
    header.style.transition = "all 0.3s ease";
    choose = 0
    
    // مراقبة التمرير لتغيير مظهر الهيدر
    window.onscroll = function () {
        if (window.scrollY <= 400 && choose == 0) {
            // جعل الهيدر شفاف عند التمرير لأعلى
            header.style.backgroundColor = "transparent";
            document.getElementById('packages').style.backgroundColor = "transparent";
            header.style.position = "absolute";
        } else {
            choose = 1 
            console.log(choose)
            // جعل الهيدر معتم عند التمرير لأسفل
            document.getElementById('packages').style.backgroundColor = "#242424e3";
            header.style.backgroundColor = "#242424e3";
            header.style.position = "fixed";
            
            if (window.scrollY <= 10 ) {
                choose = 0
                console.log(choose)
            } else {
                choose = 1
                console.log(choose)
            }
        }
    };
}

// ===== DROPDOWN MENU FUNCTIONALITY =====
// الحصول على عناصر القائمة المنسدلة
const packagesLink = document.getElementById('packages-link');
const packagesMenu = document.getElementById('packages');

let packagesTimeout;

/**
 * دالة إظهار القائمة المنسدلة
 */
function showMenu() {
    clearTimeout(packagesTimeout);      // إلغاء مؤقت الإخفاء إذا كان شغال
    packagesMenu.style.display = "flex";
}

/**
 * دالة إخفاء القائمة المنسدلة
 */
function hideMenu() {
    packagesTimeout = setTimeout(() => {  // تأخير الإخفاء 2 ثانية
        packagesMenu.style.display = "none";
    }, 200);
}

// إضافة أحداث الماوس للقائمة المنسدلة
packagesLink.onmouseover = showMenu;
packagesMenu.onmouseover = showMenu;
packagesLink.onmouseout = hideMenu;
packagesMenu.onmouseout = hideMenu;

// ===== SOCIAL MEDIA LINKS =====
// رابط البريد الإلكتروني
document.getElementById('email').addEventListener("click", function () {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=younestours7@gmail.com&su=SUBJECT&body=MESSAGE"
})

// رابط الإنستغرام
document.getElementById('insta').addEventListener("click", function () {
    window.location.href = "https://instagram.com"
})

// رابط الفيسبوك
document.getElementById('face').addEventListener("click", function () {
    window.location.href = "https://facebook.com"
})

// ===== WHATSAPP BUTTON FUNCTIONALITY =====
// دالة فتح الواتساب
function openWhatsApp() {
    const phoneNumber = "+201100077315";
    const message = "مرحباً! أريد الاستفسار عن الجولات السياحية";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// إضافة وظيفة لأيقونة الواتساب للكمبيوتر
const whatsappDesktop = document.getElementById('whatsapp-desktop');
if (whatsappDesktop) {
    whatsappDesktop.addEventListener("click", function () {
        console.log("WhatsApp Desktop clicked");
        openWhatsApp();
    });
}

// إضافة وظيفة لأيقونة الواتساب للهاتف المحمول
const whatsappMobile = document.getElementById('whatsapp-mobile');
if (whatsappMobile) {
    whatsappMobile.addEventListener("click", function () {
        console.log("WhatsApp Mobile clicked");
        openWhatsApp();
    });
}

// إضافة وظيفة بديلة في حالة عدم العثور على العناصر
function initializeWhatsAppButtons() {
    // محاولة إضافية للعثور على أزرار الواتساب
    const whatsappButtons = document.querySelectorAll('.whatsapp, .whatsapp-m');
    whatsappButtons.forEach(button => {
        if (!button.hasAttribute('data-whatsapp-initialized')) {
            button.setAttribute('data-whatsapp-initialized', 'true');
            button.addEventListener("click", function () {
                console.log("WhatsApp button clicked");
                openWhatsApp();
            });
        }
    });
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeWhatsAppButtons);

// تشغيل إضافي بعد تحميل الصفحة بالكامل
window.addEventListener('load', function() {
    setTimeout(initializeWhatsAppButtons, 100);
});

// تشغيل دوري للتأكد من وجود الأزرار
setInterval(function() {
    const whatsappDesktop = document.getElementById('whatsapp-desktop');
    const whatsappMobile = document.getElementById('whatsapp-mobile');
    
    if (whatsappDesktop && !whatsappDesktop.hasAttribute('data-whatsapp-initialized')) {
        whatsappDesktop.setAttribute('data-whatsapp-initialized', 'true');
        whatsappDesktop.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("WhatsApp Desktop clicked");
            openWhatsApp();
        });
    }
    
    if (whatsappMobile && !whatsappMobile.hasAttribute('data-whatsapp-initialized')) {
        whatsappMobile.setAttribute('data-whatsapp-initialized', 'true');
        whatsappMobile.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("WhatsApp Mobile clicked");
            openWhatsApp();
        });
    }
}, 1000);

// إضافة معالج إضافي للتأكد من عمل الزر
document.addEventListener('click', function(e) {
    if (e.target.closest('.whatsapp') || e.target.closest('.whatsapp-m')) {
        e.preventDefault();
        e.stopPropagation();
        console.log("WhatsApp button clicked via event delegation");
        openWhatsApp();
    }
});

// ===== NAVIGATION LINKS =====
// رابط صفحة الجولات
document.getElementById('tour').addEventListener("click", function () {
    window.location.href = "./tours/index.html"
})

// رابط قسم الجولات الشائعة
document.getElementById('P_T').addEventListener("click", function () {
    window.location.href = "./tours/index.html"
    console.log("Tours page clicked");
})

// رابط قسم الجولات الأكثر مبيعاً
document.getElementById('products').addEventListener("click", function () {
    window.location.href = "./tours/index.html"
    console.log("Tours page clicked");
})

// ===== MOBILE MENU FUNCTIONALITY =====
/**
 * دالة إغلاق القائمة المنبثقة للهاتف المحمول
 */
function exit() {
    document.getElementById('pop').style="width: 0%;overflow:hidden"
    document.getElementById('container').style = "filter:blur(0px);"
    setTimeout(() => {
        document.getElementById('logo_menu').style = "display: none;";
        document.getElementById('links_menu').style = "display: none;";
        document.getElementById('btn_menu').style = "display: none;";
    }, 300);
}

/**
 * دالة فتح القائمة المنبثقة للهاتف المحمول
 */
function open_pop() {
    document.getElementById('pop').style="width:70%;overflow:show"
    document.getElementById('container').style = "filter:blur(1px);"
    setTimeout(() => {
        document.getElementById('logo_menu').style = "display: block;";
        document.getElementById('links_menu').style = "display: block;";
        document.getElementById('btn_menu').style = "display: block;";
    });

    // إغلاق القائمة عند النقر في أي مكان
    document.querySelector('body').addEventListener('click',function () {
        exit()
    })
}

// إغلاق القائمة المنبثقة عند التمرير
window.addEventListener("scroll", function () {
    exit()
});

// ===== USEFUL CODE EXAMPLES (COMMENTED) =====
// أمثلة مفيدة للتنقل والتفاعل (معلقة للاستخدام المستقبلي)

// // الطريقة 1: الانتقال لموقع خارجي
// document.getElementById('yourDiv').addEventListener('click', function() {
//     window.location.href = 'https://www.google.com';
// });

// // الطريقة 2: الانتقال لقسم في نفس الصفحة
// document.getElementById('yourDiv').addEventListener('click', function() {
//     document.getElementById('targetSection').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// // الطريقة 3: فتح في تبويب جديد
// document.getElementById('yourDiv').addEventListener('click', function() {
//     window.open('https://www.example.com', '_blank');
// });

// // الطريقة 4: إجراءات مخصصة
// document.getElementById('yourDiv').addEventListener('click', function() {
//     // الكود المخصص هنا
//     alert('تم تنفيذ الإجراء المخصص!');
// });

// // الطريقة 5: إضافة أحداث لعدة عناصر دفعة واحدة
// document.querySelectorAll('.clickable-div').forEach(div => {
//     div.addEventListener('click', function() {
//         const url = this.dataset.url;
//         if (url) {
//             window.location.href = url;
//         }
//     });
// });

// // الطريقة 6: مع تأثيرات بصرية
// function addClickFeedback(element) {
//     element.classList.add('show-feedback');
//     setTimeout(() => {
//         element.classList.remove('show-feedback');
//     }, 1000);
// }

// ===== SAFARI SECTION NAVIGATION =====
/**
 * دالة الانتقال لقسم السفاري في صفحة الرحلات
 * تقوم بفتح صفحة الرحلات والانتقال لقسم السفاري وتفعيل زر الاختيار
 */
function goToSafariSection() {
    // الانتقال لصفحة الرحلات مع hash للسفاري
    window.location.href = './tours/index.html#savari';
    
    // إضافة event listener للصفحة الجديدة
    window.addEventListener('load', function() {
        // البحث عن زر السفاري وتفعيله
        const safariBtn = document.getElementById('savari-btn');
        if (safariBtn) {
            // إزالة active من جميع الأزرار
            document.querySelectorAll('.btns button').forEach(btn => {
                btn.classList.remove('active');
            });
            // إضافة active لزر السفاري
            safariBtn.classList.add('active');
            
            // إظهار قسم السفاري فقط
            const savariSection = document.getElementById('savari');
            const savariTitle = document.getElementById('sav_h1');
            
            if (savariSection && savariTitle) {
                // إخفاء جميع الأقسام
                document.querySelectorAll('.products').forEach(section => {
                    section.style.display = 'none';
                });
                document.querySelectorAll('.labels h1').forEach(title => {
                    title.style.display = 'none';
                });
                
                // إظهار قسم السفاري فقط
                savariSection.style.display = 'flex';
                savariTitle.style.display = 'block';
                
                // الانتقال لقسم السفاري بسلاسة
                setTimeout(() => {
                    savariSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    });
}

// ===== COASTAL SECTION NAVIGATION =====
/**
 * دالة الانتقال لقسم الساحل في صفحة الرحلات
 * تقوم بفتح صفحة الرحلات والانتقال لقسم الساحل وتفعيل زر الاختيار
 */
function goToCoastalSection() {
    // الانتقال لصفحة الرحلات مع hash للساحل
    window.location.href = './tours/index.html#coastal';
    
    // إضافة event listener للصفحة الجديدة
    window.addEventListener('load', function() {
        // البحث عن زر الساحل وتفعيله
        const coastalBtn = document.getElementById('coastal-btn');
        if (coastalBtn) {
            // إزالة active من جميع الأزرار
            document.querySelectorAll('.btns button').forEach(btn => {
                btn.classList.remove('active');
            });
            // إضافة active لزر الساحل
            coastalBtn.classList.add('active');
            
            // إظهار أقسام الساحل فقط
            const publicCoastalSection = document.getElementById('public-coastal');
            const privateCoastalSection = document.getElementById('private-coastal');
            const publicCoastalTitle = document.getElementById('coas_h1');
            const privateCoastalTitle = document.getElementById('pri_h1');
            
            if (publicCoastalSection && privateCoastalSection && publicCoastalTitle && privateCoastalTitle) {
                // إخفاء جميع الأقسام
                document.querySelectorAll('.products').forEach(section => {
                    section.style.display = 'none';
                });
                document.querySelectorAll('.labels h1').forEach(title => {
                    title.style.display = 'none';
                });
                
                // إظهار أقسام الساحل فقط
                publicCoastalSection.style.display = 'flex';
                privateCoastalSection.style.display = 'flex';
                publicCoastalTitle.style.display = 'block';
                privateCoastalTitle.style.display = 'block';
                
                // الانتقال لقسم الساحل بسلاسة
                setTimeout(() => {
                    publicCoastalSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    });
}

// ===== HISTORICAL SECTION NAVIGATION =====
/**
 * دالة الانتقال لقسم التاريخ في صفحة الرحلات
 * تقوم بفتح صفحة الرحلات والانتقال لقسم التاريخ وتفعيل زر الاختيار
 */
function goToHistoricalSection() {
    // الانتقال لصفحة الرحلات مع hash للتاريخ
    window.location.href = './tours/index.html#historical';
    
    // إضافة event listener للصفحة الجديدة
    window.addEventListener('load', function() {
        // البحث عن زر التاريخ وتفعيله
        const historicalBtn = document.getElementById('historical-btn');
        if (historicalBtn) {
            // إزالة active من جميع الأزرار
            document.querySelectorAll('.btns button').forEach(btn => {
                btn.classList.remove('active');
            });
            // إضافة active لزر التاريخ
            historicalBtn.classList.add('active');
            
            // إظهار قسم التاريخ فقط
            const historicalSection = document.getElementById('historical');
            const historicalTitle = document.getElementById('his_h1');
            
            if (historicalSection && historicalTitle) {
                // إخفاء جميع الأقسام
                document.querySelectorAll('.products').forEach(section => {
                    section.style.display = 'none';
                });
                document.querySelectorAll('.labels h1').forEach(title => {
                    title.style.display = 'none';
                });
                
                // إظهار قسم التاريخ فقط
                historicalSection.style.display = 'flex';
                historicalTitle.style.display = 'block';
                
                // الانتقال لقسم التاريخ بسلاسة
                setTimeout(() => {
                    historicalSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    });
}
