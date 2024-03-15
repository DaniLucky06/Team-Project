// Get the element with "parallax" class
const parallaxElement = document.querySelector('.parallax');
// Get the second element with "parallax" class
const secondParallaxElement = document.querySelectorAll('.parallax')[1];
//body element
const bodyElement = document.querySelector('body');


//get the <div class="main"> element
const mainElement = document.querySelector('.main');
//get the "title" ided element
const titleElement = document.querySelector('#title');


// Animation function to move the element's y position
function animateParallax() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Calculate the new y position based on the scroll position
    const newYPosition = scrollPosition * 0.5; // Adjust the multiplier as needed
    titleElement.style.transform = `translate(-50%, ${newYPosition - titleElement.clientHeight}px)`;
    titleElement.style.opacity = Math.max(1 - scrollPosition / 1000, 100 / scrollPosition);

    parallaxElement.style.backdropFilter = `blur(${scrollPosition / 50}px)`;
    mainElement.style.backdropFilter = `blur(${scrollPosition / 50}px)`;
    // opacity relative to scroll position and window height
    mainElement.style.opacity = scrollPosition / window.innerHeight;

    // Call the animation function on the next frame
    requestAnimationFrame(animateParallax);
}

// Call the animation function to start the parallax effect
animateParallax();