// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// SCROLL REVEAL
// ==========================================

const hiddenElements = document.querySelectorAll(

    ".about-card, .info-card, .skill-card, .experience-box, .project-card, .education-card, .language-card, .certificate-card"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "flex";

    } else {

        topButton.style.display = "none";

    }

});

// ==========================================
// TYPING EFFECT
// ==========================================

const text = "DevOps Engineer";

const typingElement = document.querySelector(".hero-left h2");

let index = 0;

function typeWriter() {

    if (!typingElement) return;

    typingElement.innerHTML = "";

    index = 0;

    function typing() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typing, 120);

        }

    }

    typing();

}

window.onload = typeWriter;

// ==========================================
// FLOATING ICONS
// ==========================================

const icons = document.querySelectorAll(".icons i");

icons.forEach((icon, i) => {

    icon.style.animation = `floatIcon ${3 + i * 0.3}s ease-in-out infinite`;

});

// ==========================================
// PROJECT CARD HOVER EFFECT
// ==========================================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ==========================================
// PARALLAX HERO EFFECT
// ==========================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;

    }

});

// ==========================================
// NAVBAR SHADOW ON SCROLL
// ==========================================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ==========================================
// PRELOADER (OPTIONAL)
// ==========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

// ==========================================
// FLOATING ICON KEYFRAMES
// ==========================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatIcon{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-12px);

}

100%{

transform:translateY(0px);

}

}

.active{

color:#7b6cff !important;

font-weight:700;

}

`;

document.head.appendChild(style);
