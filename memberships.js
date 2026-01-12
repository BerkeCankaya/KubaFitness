document.addEventListener("DOMContentLoaded", () => {
    const heroImg = document.querySelector(".about-hero img");
    const heroTitle = document.querySelector(".about-content h1");
    const heroText = document.querySelector(".about-content p");

    if (heroImg && heroTitle && heroText) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            heroImg.style.transform = `translateY(${scrollY * 0.45}px)`;
            heroTitle.style.transform = `translateY(${scrollY * 0.55}px)`;
            heroText.style.transform = `translateY(${scrollY * 0.55}px)`;
        });
    }

    const tabLinks = document.querySelectorAll('.memberships-title a');
    const sections = document.querySelectorAll('.reformer, .fonk-antrenman, .personal-traning');

    if (tabLinks.length > 0) {
        tabLinks[0].classList.add('active');
    }

    tabLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            tabLinks.forEach(tab => tab.classList.remove('active'));
            link.classList.add('active');
            
            if (sections[index]) {
                sections[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveTab();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateActiveTab() {
        const scrollPos = window.scrollY + 150;
        
        let currentSection = null;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentSection = index;
            }
        });
        
        if (currentSection !== null) {
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabLinks[currentSection].classList.add('active');
        }
    }
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});