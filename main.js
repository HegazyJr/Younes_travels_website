
// FIXED VERSION:

// Image cycling functionality
const imgOne = document.getElementById('img-one');
const imgTwo = document.getElementById('img-two');
const imgThree = document.getElementById('img-three');
// const nextBtn = document.getElementById('next'); 

// Store original image sources
// const originalSources = [
//     imgOne.src,
//     imgTwo.src,
//     imgThree.src
// ];

function cycleImages() {
    // Get current sources
    const current = [imgOne.src, imgTwo.src, imgThree.src];
    
    // Cycle them: 1→2, 2→3, 3→1
    imgOne.src = current[2];   // img1 gets img3's source
    imgTwo.src = current[0];   // img2 gets img1's source
    imgThree.src = current[1]; // img3 gets img2's source
    
    // console.log('Images cycled successfully');
}


setInterval(() => {
    cycleImages();
}, 10000);

const header = document.querySelector("header");
console.log(header)
if (header) {
    header.style.transition = "all 0.3s ease";
    choose = 0
    window.onscroll = function () {
        if (window.scrollY <= 400 && choose == 0) {
            header.style.backgroundColor = "transparent";
            document.getElementById('packages').style.backgroundColor = "transparent";
            // document.getElementById('blog').style.backgroundColor = "transparent";
            // document.getElementById('nav-n').style.backgroundColor = "transparent";
            header.style.position = "absolute";


        } else {
            choose = 1 
            console.log(choose)
            document.getElementById('packages').style.backgroundColor = "#242424e3";
            // document.getElementById('blog').style.backgroundColor = "#242424e3";
            // document.getElementById('nav-n').style.backgroundColor = "#201e43e7";
            header.style.backgroundColor = "#242424e3";
            header.style.position = "fixed";
            if (window.scrollY <= 10 ) {
                choose = 0
                console.log(choose)

            }else{
                choose = 1
                console.log(choose)

            }
        }

    };
}
const packagesLink = document.getElementById('packages-link');
// const blogLink = document.getElementById('blog-link');
const packagesMenu = document.getElementById('packages');
// const blogMenu = document.getElementById('blog');

let packagesTimeout, blogTimeout;

function showMenu() {
    clearTimeout(packagesTimeout);      // لو في مؤقت إخفاء شغال، نلغي
    packagesMenu.style.display = "flex";
}

function hideMenu() {
    packagesTimeout = setTimeout(() => {  // نأخر الإخفاء 2 ثانية
        packagesMenu.style.display = "none";
    }, 200);
}

// function showblog() {
//     clearTimeout(blogTimeout);         // نلغي مؤقت الإخفاء لو شغال
//     blogMenu.style.display = "flex";
// }

// function hideblog() {
//     blogTimeout = setTimeout(() => {    // نأخر الإخفاء 2 ثانية
//         blogMenu.style.display = "none";
//     }, 200);
// }

// Show on hover
packagesLink.onmouseover = showMenu;
packagesMenu.onmouseover = showMenu;
// blogLink.onmouseover = showblog;
// blogMenu.onmouseover = showblog;

// Hide when leaving both elements
packagesLink.onmouseout = hideMenu;
packagesMenu.onmouseout = hideMenu;
// blogLink.onmouseout = hideblog;
// blogMenu.onmouseout = hideblog;
document.getElementById('email').addEventListener("click",function () {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=younestours7@gmail.com.com&su=SUBJECT&body=MESSAGE"
})
document.getElementById('insta').addEventListener("click",function () {
    window.location.href = "instagram.com"
})
document.getElementById('face').addEventListener("click",function () {
    window.location.href = "facebook.com"
})
document.getElementById('tour').addEventListener("click",function () {
    window.location.href = "./tours/index.html"
})
document.getElementById('P_T').addEventListener("click",function () {
    window.location.href = "./tours/index.html"
    console.log("Tours page clicked");
})
document.getElementById('products').addEventListener("click",function () {
    window.location.href = "./tours/index.html"
    console.log("Tours page clicked");
})



//  link by js
// // Method 1: Navigate to External Website
// document.getElementById('yourDiv').addEventListener('click', function() {
//     window.location.href = 'https://www.google.com';
// });

// // Method 2: Navigate to Page Section
// document.getElementById('yourDiv').addEventListener('click', function() {
//     document.getElementById('targetSection').scrollIntoView({
//         behavior: 'smooth'
//     });
// });

// // Method 3: Open in New Tab
// document.getElementById('yourDiv').addEventListener('click', function() {
//     window.open('https://www.example.com', '_blank');
// });

// // Method 4: Custom Actions
// document.getElementById('yourDiv').addEventListener('click', function() {
//     // Your custom code here
//     alert('Custom action executed!');
// });

// // Method 5: Multiple Divs at Once
// document.querySelectorAll('.clickable-div').forEach(div => {
//     div.addEventListener('click', function() {
//         const url = this.dataset.url;
//         if (url) {
//             window.location.href = url;
//         }
//     });
// });

// // Method 6: With Animation Feedback
// function addClickFeedback(element) {
//     element.classList.add('show-feedback');
//     setTimeout(() => {
//         element.classList.remove('show-feedback');
//     }, 1000);
// }

function exit() {
    document.getElementById('pop').style="width: 0%;overflow:hidden"
    document.getElementById('container').style = "filter:blur(0px);"
    setTimeout(() => {
        document.getElementById('logo_menu').style = "display: none;";
        document.getElementById('links_menu').style = "display: none;";
        document.getElementById('btn_menu').style = "display: none;";
    }, 300);
}
function open_pop() {
    document.getElementById('pop').style="width:70%;overflow:show"
    document.getElementById('container').style = "filter:blur(1px);"
    setTimeout(() => {
        document.getElementById('logo_menu').style = "display: block;";
        document.getElementById('links_menu').style = "display: block;";
        document.getElementById('btn_menu').style = "display: block;";
    });

    document.querySelector('body').addEventListener('click',function () {
        exit()
    })
}
 window.addEventListener("scroll", function () {
    exit()
  });
