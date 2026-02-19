// Smooth Scrolling
document.querySelectorAll('a.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Animations
const elements = document.querySelectorAll('.fade-in');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

elements.forEach((element) => {
    observer.observe(element);
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
// pricing tab
function showTab(tabId, btn) {
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");
    const indicator = document.querySelector(".tab-indicator");

    contents.forEach(c => c.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    btn.classList.add("active");

    indicator.style.width = btn.offsetWidth + "px";
    indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

/* set indicator position on load */
window.onload = () => {
    const activeBtn = document.querySelector(".tab-btn.active");
    document.querySelector(".tab-indicator").style.width = activeBtn.offsetWidth + "px";
};
