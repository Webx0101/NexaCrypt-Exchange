/*=====================================
        DOM LOADED
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
            PRELOADER
    ==============================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 600);

    });

    /*==============================
            HAMBURGER MENU
    ==============================*/

    const hamburger = document.querySelector(".hamburger");

    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("open");

        navLinks.classList.toggle("active");

    });

    /*==============================
            CLOSE MENU WHEN LINK CLICKED
    ==============================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            hamburger.classList.remove("open");

        });

    });

    /*==============================
            CLOSE MENU OUTSIDE CLICK
    ==============================*/

    document.addEventListener("click", function(e){

        if(!hamburger.contains(e.target) && !navLinks.contains(e.target)){

            navLinks.classList.remove("active");

            hamburger.classList.remove("open");

        }

    });

    /*==============================
            FAQ
    ==============================*/

    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(item=>{

        const btn=item.querySelector(".faq-question");

        btn.addEventListener("click",()=>{

            item.classList.toggle("active");

        });

    });
    /*=====================================
        STICKY NAVIGATION
=====================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(8,17,31,.97)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(8,17,31,.85)";
        navbar.style.boxShadow = "none";

    }

});


/*=====================================
        BACK TO TOP BUTTON
=====================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "flex";

        backToTop.style.justifyContent = "center";

        backToTop.style.alignItems = "center";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=====================================
        SMOOTH SCROLLING
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=====================================
        ANIMATED COUNTERS
=====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = Math.ceil(target / 120);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target.toLocaleString();

            } else {

                counter.innerText = current.toLocaleString();

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=====================================
        SCROLL REVEAL ANIMATION
=====================================*/

const revealElements = document.querySelectorAll(

".service-card, .coin-card, .feature-card, .step, .testimonial-card, .stat-box"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all .8s ease";

    revealObserver.observe(element);

});
    

});
