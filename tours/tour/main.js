

// ===== DYNAMIC REVIEWS SYSTEM =====
// نظام ديناميكي لإدارة التقييمات

// بيانات التقييمات - يمكنك إضافة تقييمات جديدة هنا
const reviewsData = [
    {
        name: "Kareem Hegazy",
        location: "Egypt",
        rating: 5.0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid fuga ex eos deleniti, est eligendi aperiam magnam molestias aliquam ullam saepe tenetur, nulla non ipsum repellat impedit velit amet.",
        date: "Reviewed 2 weeks ago"
    },
    {
        name: "Sarah Johnson",
        location: "United States",
        rating: 4.5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid fuga ex eos deleniti, est eligendi aperiam magnam molestias aliquam ullam saepe tenetur, nulla non ipsum repellat impedit velit amet.",
        date: "Reviewed 1 month ago"
    },
    {
        name: "Ahmed Hassan",
        location: "Saudi Arabia",
        rating: 4.0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid fuga ex eos deleniti, est eligendi aperiam magnam molestias aliquam ullam saepe tenetur, nulla non ipsum repellat impedit velit amet.",
        date: "Reviewed 3 weeks ago"
    },
    {
        name: "Maria Garcia",
        location: "Spain",
        rating: 5.0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid fuga ex eos deleniti, est eligendi aperiam magnam molestias aliquam ullam saepe tenetur, nulla non ipsum repellat impedit velit amet.",
        date: "Reviewed 1 week ago"
    },
    {
        name: "John Smith",
        location: "Canada",
        rating: 4.5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid fuga ex eos deleniti, est eligendi aperiam magnam molestias aliquam ullam saepe tenetur, nulla non ipsum repellat impedit velit amet.",
        date: "Reviewed 2 weeks ago"
    },
    {
        name: "Fatima Al-Zahra",
        location: "UAE",
        rating: 5.0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid fuga ex eos deleniti, est eligendi aperiam magnam molestias aliquam ullam saepe tenetur, nulla non ipsum repellat impedit velit amet.",
        date: "Reviewed 4 days ago"
    }
];

// متغيرات نظام "المزيد"
let currentReviewIndex = 3; // عدد التقييمات المعروضة في البداية
const reviewsPerLoad = 3;   // عدد التقييمات التي تظهر في كل مرة
const totalReviews = reviewsData.length; // إجمالي عدد التقييمات

/**
 * إنشاء نجوم التقييم
 * @param {number} rating - التقييم (0-5)
 * @returns {string} HTML للنجوم
 */
function createStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // نجوم كاملة
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fa-solid fa-star"></i>';
    }
    
    // نجمة نصف
    if (hasHalfStar) {
        starsHTML += '<i class="fa-solid fa-star" id="semi"></i>';
    }
    
    // نجوم فارغة
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="fa-solid fa-star" id="not"></i>';
    }
    
    return starsHTML;
}



/**
 * إنشاء تقييم واحد
 * @param {Object} review - بيانات التقييم
 * @param {number} index - رقم التقييم
 * @returns {string} HTML للتقييم
 */
function createReviewCard(review, index) {
    const hiddenClass = index >= 3 ? 'hidden-review' : '';
    
    return `
        <div class="review-card ${hiddenClass}">
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="reviewer-details">
                        <h3>${review.name}</h3>
                        <span class="reviewer-location">${review.location}</span>
                    </div>
                </div>
                <div class="review-rating">
                    <div class="stars">
                        ${createStars(review.rating)}
                    </div>
                    <span class="rating-score">${review.rating}</span>
                </div>
            </div>
            <div class="review-content">
                <p>"${review.content}"</p>
            </div>
            <div class="review-date">
                <i class="fa-solid fa-calendar"></i>
                <span>${review.date}</span>
            </div>
        </div>
    `;
}

/**
 * إنشاء جميع التقييمات
 */
function generateReviews() {
    const reviewsContainer = document.getElementById('review-cards');
    let reviewsHTML = '';
    
    reviewsData.forEach((review, index) => {
        reviewsHTML += createReviewCard(review, index);
    });
    
    reviewsContainer.innerHTML = reviewsHTML;
}

/**
 * تحميل المزيد من التقييمات
 */
function loadMoreReviews() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const hiddenReviews = document.querySelectorAll('.hidden-review');
    
    // إضافة حالة التحميل للزر
    loadMoreBtn.classList.add('loading');
    loadMoreBtn.querySelector('.btn-text').textContent = 'Loading...';
    
    // محاكاة تأخير التحميل لتحسين تجربة المستخدم
    setTimeout(() => {
        // إظهار الدفعة التالية من التقييمات
        const reviewsToShow = Math.min(reviewsPerLoad, totalReviews - currentReviewIndex);
        
        for (let i = 0; i < reviewsToShow; i++) {
            if (hiddenReviews[i]) {
                hiddenReviews[i].classList.remove('hidden-review');
                hiddenReviews[i].style.display = 'block';
            }
        }
        
        // تحديث المؤشر الحالي
        currentReviewIndex += reviewsToShow;
        
        // التحقق من إظهار جميع التقييمات
        if (currentReviewIndex >= totalReviews) {
            // إخفاء زر "المزيد"
            loadMoreBtn.style.display = 'none';
        } else {
            // إعادة تعيين حالة الزر
            loadMoreBtn.classList.remove('loading');
            loadMoreBtn.querySelector('.btn-text').textContent = 'المزيد من التقييمات';
        }
        
        // التمرير السلس للتقييمات الجديدة
        if (reviewsToShow > 0) {
            const lastShownReview = hiddenReviews[reviewsToShow - 1];
            if (lastShownReview) {
                lastShownReview.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }
    }, 800); // تأخير 800ms لتأثير التحميل
}

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إنشاء التقييمات
    generateReviews();
    
    // إخفاء التقييمات الإضافية
    const allReviews = document.querySelectorAll('.review-card');
    allReviews.forEach((review, index) => {
        if (index >= 3) {
            review.classList.add('hidden-review');
        }
    });
    
    // إخفاء زر "المزيد" إذا كان عدد التقييمات 3 أو أقل
    if (totalReviews <= 3) {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
});

// ===== END DYNAMIC REVIEWS SYSTEM =====

// ===== LIGHTBOX MODAL FUNCTIONALITY =====
// This section handles the fullscreen image modal with navigation

// Global variables for lightbox functionality
const lightbox = document.getElementById('lightbox');           // Modal container
const lightboxImage = document.getElementById('lightbox-image'); // Main image element

// Array of all images - easy to add new images
// To add a new image, simply add its path to this array
const lightboxImages = [
    './../../IMG/Gallery_imgs/pexels-artem-krapivin-2149275329-30594279.jpg',
    './../../IMG/Gallery_imgs/WhatsApp Image 2025-04-24 at 22.03.12_e264bf03.jpg',
    './../../IMG/Gallery_imgs/Classical Tour Egypt.jpg',
    './../../IMG/Gallery_imgs/My photo to Hurgada (egypt).jpg'
    // To add new images, just add the path here:
    // './../../IMG/Gallery_imgs/your-new-image.jpg',
];

// Track the currently displayed image index
let currentImageIndex = 0;

/**
 * Opens the lightbox modal with the specified image
 * @param {string} type - Type of media ('image' or 'video') - currently only 'image' is supported
 * @param {string} src - Source URL of the image to display
 * @param {string} caption - Caption text for the image (not used anymore, kept for compatibility)
 */
function openLightbox(type, src, caption) {
    // Find the index of the clicked image in our array
    currentImageIndex = lightboxImages.indexOf(src);
    
    // If image not found in array, default to first image
    if (currentImageIndex === -1) {
        currentImageIndex = 0;
    }
    
    // Set the image source and alt text
    lightboxImage.src = src;
    lightboxImage.alt = caption || '';
    
    // Show the lightbox with smooth animation
    lightbox.classList.add('active');
    
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add keyboard event listener for navigation
    document.addEventListener('keydown', handleLightboxKeyboard);
}

/**
 * Changes the displayed image in the lightbox
 * @param {number} direction - Direction to move (-1 for previous, 1 for next)
 */
function changeLightboxImage(direction) {
    // Calculate the new image index
    currentImageIndex += direction;
    
    // Handle wrap-around navigation (circular browsing)
    if (currentImageIndex >= lightboxImages.length) {
        currentImageIndex = 0; // Go to first image if at the end
    } else if (currentImageIndex < 0) {
        currentImageIndex = lightboxImages.length - 1; // Go to last image if at the beginning
    }
    
    // Smooth transition effect: fade out current image
    lightboxImage.style.opacity = '0';
    
    // After fade out, change image and fade in
    setTimeout(() => {
        lightboxImage.src = lightboxImages[currentImageIndex];
        lightboxImage.style.opacity = '1';
    }, 200); // 200ms delay for smooth transition
}

/**
 * Closes the lightbox modal
 */
function closeLightbox() {
    // Hide the lightbox
    lightbox.classList.remove('active');
    
    // Restore background scrolling
    document.body.style.overflow = 'auto';
    
    // Remove keyboard event listener to prevent conflicts
    document.removeEventListener('keydown', handleLightboxKeyboard);
}

/**
 * Handles keyboard events for lightbox navigation
 * @param {KeyboardEvent} event - The keyboard event object
 */
function handleLightboxKeyboard(event) {
    switch(event.key) {
        case 'Escape':
            // Close modal with Escape key
            closeLightbox();
            break;
        case 'ArrowLeft':
            // Navigate to previous image with left arrow
            changeLightboxImage(-1);
            break;
        case 'ArrowRight':
            // Navigate to next image with right arrow
            changeLightboxImage(1);
            break;
    }
}

// Event listener to close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    // Only close if clicking on the background (not the image or buttons)
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ===== END LIGHTBOX MODAL FUNCTIONALITY =====

// ===== EXISTING FUNCTIONALITY =====
// This section contains the original tour page functionality

// Set minimum date for date input to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('dateInput').min = today;

// Event listener for adult participants selection
document.getElementById('participants').addEventListener('change', function() {
    if (this.value === '') {
        // Reset to default styling when no selection
        document.getElementById('participants').style.backgroundColor = 'var(--main-color)';
        document.getElementById('participants').style.color = 'var(--secend-color)';
        document.getElementById('participants').style.border = '0px solid var(--secend-color)';
    } else {
        // Apply selected styling when option is chosen
        document.getElementById('participants').style.backgroundColor = 'var(--third-color)';
        document.getElementById('participants').style.border = '2px solid var(--third-color)';
        document.getElementById('participants').style.color = 'var(--main-color)';
    }
});

// Event listener for children participants selection
document.getElementById('youngs').addEventListener('change', function() {
    if (this.value === '') {
        // Reset to default styling when no selection
        document.getElementById('youngs').style.backgroundColor = 'var(--main-color)';
        document.getElementById('youngs').style.color = 'var(--secend-color)';
        document.getElementById('youngs').style.border = '0px solid var(--secend-color)';
    } else {
        // Apply selected styling when option is chosen
        document.getElementById('youngs').style.backgroundColor = 'var(--third-color)';
        document.getElementById('youngs').style.border = '2px solid var(--third-color)';
        document.getElementById('youngs').style.color = 'var(--main-color)';
    }
});
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
// Event listener for availability check button
// document.getElementById("check-availability").addEventListener("click", function () {
//     // Get selected values from form elements
//     const adultSelect = document.getElementById("participants");
//     const youngSelect = document.getElementById("youngs");
//     const dateInput = document.getElementById("dateInput");

//     let adults = adultSelect.value;
//     let youngs = youngSelect.value;
//     const date = dateInput.value;

//     // Helper function to parse participant values (handles "10+" format)
//     const parseValue = (val) => {
//         if (val.includes("+")) {
//             return parseInt(val) || 0;
//         }
//         return parseInt(val) || 0;
//     };

//     // Parse participant counts
//     adults = parseValue(adults);
//     youngs = parseValue(youngs);

//     // Calculate total price
//     var adultPrice = 45;
//     const youngPrice = adultPrice /2;  // Price per child (free)
//     const total = (adults * adultPrice) + (youngs * youngPrice);

//     // Update participant count display
//     document.getElementById("adult-count").textContent = adults + " ";
//     document.getElementById("young-count").textContent = youngs + " ";

//     // Update price display
//     const priceElement = document.querySelector(".price-members h2");
//     priceElement.textContent = `$${total}`;

//     // Validate date selection and show results
//     if (!date) {
//         // Show error message if no date selected
//         document.getElementById("check-availability").innerText = "Please Try Again";
//         return;
//     } else {
//         // Show success and display booking details
//         document.getElementById("check-availability").innerText = "Availability";
//         document.getElementById("time").innerText = `${date}`;
//         document.getElementById('result').style.display = 'block';
//     }
// });