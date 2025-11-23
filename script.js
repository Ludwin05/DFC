// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Simple animation trigger when elements come into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section, .product").forEach(el => {
    observer.observe(el);
});

// Console message
console.log("Dried Festa Corner website loaded successfully! 🎄");
