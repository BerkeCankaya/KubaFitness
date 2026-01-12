const slides = [
  {
    title: "Kişisel Fitness Programları",
    text: "Kas kazanmak, kilo vermek veya kondisyonunu artırmak isteyenler için uzman eğitmenlerimiz tarafından tamamen sana özel programlar hazırlanır. Vücut analizinden hedef belirlemeye kadar tüm süreç profesyonel şekilde planlanır. Antrenman programın; seviyene, yaşam tarzına ve hedeflerine göre düzenlenir, gelişimin düzenli olarak takip edilir.",
    image: "./img/kişisel-fitness.png",
    details: [
      "Kişiye özel antrenman planı",
      "Düzenli ölçüm ve gelişim takibi",
      "Birebir eğitmen desteği"
    ]
  },
  {
    title: "Pilates Birebir Seansları",
    text: "Reformer ve mat pilates çalışmalarıyla postürünü geliştir, esnekliğini ve core gücünü artır. Kontrollü ve bilinçli hareketler sayesinde kaslarını dengeli şekilde güçlendirirken, duruş bozukluklarını azaltır, vücuduna daha uzun, güçlü ve sağlıklı bir yapı kazandırırsın.",
    image: "./img/pilates.png",
    details: [
      "Postür ve duruş bozukluklarını düzeltir",
      "Core kaslarını güçlendirir",
      "Esneklik ve denge kazandırır"
    ]
  },
  {
    title: "Spinning & Kardiyo Eğitimi",
    text: "Spinning kardiyo, yüksek tempolu ve motivasyonu yüksek bir grup dersidir. Ritmik müzik eşliğinde yapılan bu antrenmanlar, kısa sürede yüksek kalori yakmanı sağlar. Hem alt vücut kaslarını güçlendirir hem de kalp-damar sağlığını destekleyerek genel dayanıklılığını artırır.",
    image: "./img/kardiyo.png",
    details: [
      "Kısa sürede yüksek kalori ve yağ yakımı",
      "Kardiyovasküler dayanıklılığı artırır",
      "Bacak ve kalça kaslarını güçlendirir"
    ]
  },
  {
    title: "Fonksiyonel ve Core Odaklı Dersler",
    text: "Denge, çeviklik ve günlük hareket kabiliyetini artırmaya yönelik fonksiyonel çalışmalarla vücudunu daha kontrollü, güçlü ve esnek hale getir. Core odaklı egzersizler sayesinde duruşunu iyileştirirken, günlük hayatta ve spor performansında daha stabil bir yapı kazanırsın.",
    image: "./img/fonksiyonel.png",
    details: [
      "Günlük hareket kabiliyetini artırır",
      "Denge ve koordinasyonu geliştirir",
      "Core kaslarını aktif çalıştırır"
    ]
  }
];

let currentIndex = 0;
let autoSlideInterval;
const SLIDE_DURATION = 6000; 

const titleEl = document.getElementById("slide-title");
const textEl = document.getElementById("slide-text");
const imageEl = document.getElementById("slide-image");
const detailsEl = document.getElementById("slide-details");
function updateSlide() {
  const currentSlide = slides[currentIndex];

  gsap.to([titleEl, textEl, detailsEl, imageEl], {
    opacity: 0,
    y: 20,
    duration: 0.3,
    onComplete: () => {
      titleEl.textContent = currentSlide.title;
      textEl.textContent = currentSlide.text;
      imageEl.src = currentSlide.image;

      detailsEl.innerHTML = "";
      currentSlide.details.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        detailsEl.appendChild(li);
      });

    const tl = gsap.timeline();

    tl.fromTo(
    titleEl,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 }
    )
    .fromTo(
    textEl,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
        "+=0.05" 
    )
    .fromTo(
    detailsEl,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.08 },
        "+=0.05"
    );
    gsap.fromTo(imageEl,
        { x: 40, scale: 1.05, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" }
    );
    }
  });
}


function startAutoSlide() {
  stopAutoSlide(); 

  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }, SLIDE_DURATION);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

updateSlide();
startAutoSlide();

document.getElementById("next").addEventListener("click", () => {
  stopAutoSlide();
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
  startAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  stopAutoSlide();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
  startAutoSlide();
});

/*TESTİMONİALS SLİDER*/
const swiper = new Swiper('.js-testimonials-slider', {
 grabCursor:true,
 spaceBetween:0,
 slidesPerView: 2,
 slidesPerGroup: 1,
 loop:true,
 pagination:{
  el:".js-testimonials-pagination",
  clickable:true,
  dynamicBullets: true
 },
 navigation: 
 { nextEl: ".js-testimonials-next",
   prevEl: ".js-testimonials-prev", 
 },
 breakpoints:{
  767:{
    slidesPerView:2
  }
 }
});

