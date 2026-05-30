document.addEventListener("DOMContentLoaded", () => {
    const heroImg = document.querySelector(".gallery-hero img");
    const heroTitle = document.querySelector(".other-content h1");
    const heroText = document.querySelector(".other-content p");

    if (heroImg && heroTitle && heroText) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            heroImg.style.transform = `translateY(${scrollY * 0.45}px)`;
            heroTitle.style.transform = `translateY(${scrollY * 0.55}px)`;
            heroText.style.transform = `translateY(${scrollY * 0.55}px)`;
        });
    }
});
