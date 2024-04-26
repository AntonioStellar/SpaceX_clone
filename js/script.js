
// Variable Declarations
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;
// This part of the code declares variables btn, overlay, menu, counters, and scrollStarted.
// btn, overlay, and menu store references to specific elements in the HTML document.
// counters stores references to all elements with the class name 'counter'.
// scrollStarted is a boolean variable used to track if scrolling has started.



// Event Listeners
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);
// This part of the code adds event listeners to the 'click' event of the btn element and the 'scroll' event of the entire document.
// When btn is clicked, the navToggle function is called.
// When the document is scrolled, the scrollPage function is called.


// navToggle Function
function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
//   This function toggles various classes on specific elements when the hamburger menu button is clicked.
// It toggles the 'open' class on btn, the 'overlay-show' class on overlay, the 'stop-scrolling' class on the body, and the 'show-menu' class on menu.
}



// scrollPage Function
function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
//    This function is triggered when the document is scrolled.
// It checks the current scroll position (scrollPos) using window.scrollY.
// If the scroll position is greater than 100 pixels and scrollStarted is false, it calls the countUp function and sets scrollStarted to true.
// If the scroll position is less than 100 pixels and scrollStarted is true, it calls the reset function and sets scrollStarted to false.
}


// countUp Function
function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
//   This function animates the counting up effect for all elements with the class 'counter'.
// It sets the initial value of each counter to '0'.
// It defines an updateCounter function that calculates and updates the counter value based on the 'data-target' attribute of the element.
// The counter value is incremented in small steps using setTimeout to create a smooth animation effect.
}


// reset Function
function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
  // This function resets the value of all elements with the class 'counter' to '0'.
}

// Update flight counter
document.addEventListener("DOMContentLoaded", function() {
  // Assuming you have a variable for the total number of human flights
  const totalHumanFlights = 10; // Update with actual number
  const flightCounter = document.getElementById("flightCounter");
  flightCounter.textContent = totalHumanFlights;
//   This part of the code updates the flight counter on the page when the DOM content is fully loaded.
// It assumes you have a variable (totalHumanFlights) storing the total number of human flights.
// It updates the text content of the element with the id 'flightCounter' to display the total number of human flights.
});

