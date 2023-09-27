// Attach a scroll event listener to the window
window.onscroll = function() {
  myFunction(); // Call the myFunction when scrolling occurs
};

// Get a reference to the HTML element with the id "navbar"
var navbar = document.getElementById("navbar");

// Get the initial offset position of the "navbar" element
var sticky = navbar.offsetTop;

// Define the myFunction that will be called when scrolling
function myFunction() {
  // Also, ensure that the window width is greater than or equal to 768 pixels
  if (window.pageYOffset >= sticky && window.innerWidth >= 768) {
    // If both conditions are met, add the "sticky" class to the "navbar" element
    navbar.classList.add("sticky");
  } else {
    // If the conditions are not met, remove the "sticky" class from the "navbar" element
    navbar.classList.remove("sticky");
  }
}
