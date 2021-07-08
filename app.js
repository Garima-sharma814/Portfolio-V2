const theme = document.querySelector("#theme-link");
const btn = document.querySelector("#checkbox");
const card = document.querySelector("#card");
const pop = document.querySelector("#pop");

// For theme 
const btnValue = localStorage.getItem("themeBtn");

if (btnValue === null || btnValue === "null") {
	localStorage.setItem("themeBtn", btn.checked);
	applyTheme(localStorage.getItem("themeBtn"));
}

if (btnValue === "true" || btnValue === "false") {
	applyTheme(btnValue);
}

btn.addEventListener("change", () => {
	localStorage.setItem("themeBtn", btn.checked);
	applyTheme(localStorage.getItem("themeBtn"));
});

function applyTheme(value) {
	if (value === "true") {
		theme.href = "/css/light-theme.css";
		btn.checked = true;
	} else if (value === "false") {
		theme.href = "/css/style.css";
		btn.checked = false;
	}
};

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
	myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
