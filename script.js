// ===============================
// Typing Effect
// ===============================

const texts = [
    "DevOps Engineer",
    "AWS Cloud Engineer",
    "DevSecOps Enthusiast",
    "CI/CD Automation",
    "Docker & Kubernetes"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

    } else {

        setTimeout(type, 120);

    }

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 300);

    } else {

        setTimeout(erase, 60);

    }

}

// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {

        header.style.boxShadow = "0px 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

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

// ===============================
// Reveal Animation
// ===============================

const reveals = document.querySelectorAll(
    ".card,.project-card,.timeline-box,.education-box,.about-box"
);

window.addEventListener("scroll", reveal);

function reveal() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

// Initial Styles

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

});

reveal();

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Sunil Kumar | DevOps Portfolio`;

// ===============================
// Welcome Message
// ===============================

console.log("Welcome to Sunil Kumar's DevOps Portfolio");
