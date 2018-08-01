// ------project toggle animations------

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
