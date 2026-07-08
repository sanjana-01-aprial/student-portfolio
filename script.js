// ==============================
// Portfolio JavaScript
// ==============================

// Portfolio Loaded Message
console.log("Student Portfolio Loaded Successfully!");

// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });
});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Fade-in Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});