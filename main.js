
// FIXED VERSION:

// Image cycling functionality
const imgOne = document.getElementById('img-one');
const imgTwo = document.getElementById('img-two');
const imgThree = document.getElementById('img-three');
const nextBtn = document.getElementById('next'); // ✅ Correct variable name

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
    
    console.log('Images cycled successfully');
}

// ✅ Correct variable name and function call
nextBtn.addEventListener("click", () => {
    cycleImages(); // ✅ Actually call the function
});

