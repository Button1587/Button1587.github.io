const hamburger = document.querySelector('.hamburger');
const dropdown = document.getElementById("dropdown-menu");

hamburger.addEventListener("click", function() {
    dropdown.classList.toggle("show");
});

dropdown.addEventListener("mouseleave", function() {
    dropdown.classList.remove("show");
});

document.addEventListener("mouseleave", function(event) {
    if (event.target.closest(".navbar") === null) {
        dropdown.classList.remove("show");
    }
});