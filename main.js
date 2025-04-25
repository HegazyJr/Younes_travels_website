// Set up the slider functionality
function setupSlider() {
    const slider = document.getElementById("slider");
    const images = slider.getElementsByTagName("img");
    
    // Add click event listeners to each image
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            moveToFront(this);
        });
    }
}

// Function to move clicked image to front
function moveToFront(clickedImage) {
    const slider = document.getElementById("slider");
    const images = slider.getElementsByTagName("img");
    
    // Store all the current image sources
    const imageSources = [];
    for (let i = 0; i < images.length; i++) {
        imageSources.push(images[i].src);
    }
    
    // Find the clicked image source
    const clickedSrc = clickedImage.src;
    
    // Find the position of the clicked image
    let clickedIndex = -1;
    for (let i = 0; i < imageSources.length; i++) {
        if (imageSources[i] === clickedSrc) {
            clickedIndex = i;
            break;
        }
    }
    
    if (clickedIndex > 0) {  // Only rearrange if not already in first position
        // Move clicked image to first position and shift others
        const newSources = [clickedSrc];
        for (let i = 0; i < imageSources.length; i++) {
            if (i !== clickedIndex) {
                newSources.push(imageSources[i]);
            }
        }
        
        // Apply new sources
        for (let i = 0; i < images.length; i++) {
            images[i].src = newSources[i];
        }
    }
}

// Call this function when the page loads
window.onload = setupSlider;


function exit() {
    document.getElementById('pop').style="width: 0%;overflow:hidden"
    document.getElementById('container').style = "filter:blur(0px);"
}
function open_pop() {
    document.getElementById('pop').style="width:65%;overflow:show"
    document.getElementById('container').style = "filter:blur(1px);"
    document.getElementById('container').addEventListener('click',function () {
        exit()
    })
}

window.onload = setupSlider,exit();
window.addEventListener("scroll", function () {
    exit()
  });

