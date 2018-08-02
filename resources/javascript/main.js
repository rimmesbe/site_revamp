// -------------project toggle animations---------------

const projects = document.querySelectorAll(".project");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if(e.propertyName.includes("height")) {
    this.classList.toggle("open-active");
  }
}

projects.forEach(project => project.addEventListener("click", toggleOpen));
projects.forEach(project => project.addEventListener("transitionend", toggleActive));


// -----------------sticky header-------------------

window.onscroll = function() {myFunction()};

// Get the header
const header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}
