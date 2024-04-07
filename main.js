//get the body
const bodyElement = document.querySelector('body');
//get the <div class="main"> element
const mainElement = document.querySelector('.main');
//get the "title" ided element
const titleElement = document.querySelector('#title');

mainElement.style.transform = 'translate(-50%, ' + bodyElement.clientHeight * 1.1 + 'px)';


// Animation function to move the element's y position
function animateParallax() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Calculate the new y position based on the scroll position
    const newYPosition = scrollPosition * 0.5; // Adjust the multiplier as needed
    offset = bodyElement.clientHeight * 0.25;
    titleElement.style.opacity = scrollPosition > offset ? Math.max(1 - (scrollPosition - offset) / 500, 0) : 1;

    // Call the animation function on the next frame
    requestAnimationFrame(animateParallax);
}

// Call the animation function to start the parallax effect
animateParallax();