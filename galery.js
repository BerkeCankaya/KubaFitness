document.addEventListener("DOMContentLoaded", () => {
    const heroImg = document.querySelector(".gallery-hero img");
    const heroTitle = document.querySelector(".gallery-content h1");
    const heroText = document.querySelector(".gallery-content p");

    if (heroImg && heroTitle && heroText) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            heroImg.style.transform = `translateY(${scrollY * 0.45}px)`;
            heroTitle.style.transform = `translateY(${scrollY * 0.55}px)`;
            heroText.style.transform = `translateY(${scrollY * 0.55}px)`;
        });
    }
});

const menuItems = document.querySelectorAll(".gallery-menu li");
const images = document.querySelectorAll(".gallery-images img");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const filter = item.dataset.filter;

        images.forEach(img => {
            if (filter === "all" || img.dataset.category === filter) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-prev">&#10094;</button>
    <img class="lightbox-img" src="" alt="">
    <button class="lightbox-next">&#10095;</button>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.lightbox-close');
const prevBtn = lightbox.querySelector('.lightbox-prev');
const nextBtn = lightbox.querySelector('.lightbox-next');

let currentIndex = 0;
let visibleImages = [];

function updateVisibleImages() {
    visibleImages = Array.from(images).filter(img => img.style.display !== 'none');
}

function showImage(index) {
    if (visibleImages.length > 0) {
        lightboxImg.src = visibleImages[index].src;
        currentIndex = index;
        
        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === visibleImages.length - 1 ? 'none' : 'block';
    }
}

images.forEach((img) => {
    img.addEventListener('click', () => {
        updateVisibleImages();
        currentIndex = visibleImages.indexOf(img);
        showImage(currentIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
        showImage(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentIndex < visibleImages.length - 1) {
        showImage(currentIndex + 1);
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentIndex < visibleImages.length - 1) {
            showImage(currentIndex + 1);
        }
    }
});