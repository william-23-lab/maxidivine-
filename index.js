// =========================
// AOS (Animate On Scroll) Init
// =========================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }
});

// =========================
// Lucide Icons Activation
// =========================
if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

// =========================
// Mobile Menu Toggle
// =========================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// =========================
// Divider Reveal on Scroll
// =========================
const divider = document.querySelector(".nav-divider");

if (divider) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          divider.classList.add("visible");
          divider.classList.remove("hidden");
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(divider);
}

// =========================
// Smooth Scroll for Anchor Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =========================
// Hero Section Slider
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  if (slides.length && next && prev) {
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
    setInterval(nextSlide, 10000);
  }
});

// =========================
// Swiper Testimonials Slider
// =========================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});

// =========================
// Mobile Dropdown Menu Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  dropdownParents.forEach(parent => {
    const triggerLink = parent.querySelector("a");
    const submenu = parent.querySelector(".dropdown-menu");

    if (submenu && triggerLink) {
      triggerLink.addEventListener("click", function (e) {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          e.stopPropagation(); // prevent bubbling

          // Toggle the current submenu
          submenu.classList.toggle("active");

          // Close all others except this
          dropdownParents.forEach(otherParent => {
            const otherSubmenu = otherParent.querySelector(".dropdown-menu");
            if (otherSubmenu !== submenu) {
              otherSubmenu.classList.remove("active");
            }
          });
        }
      });
    }
  });

  // Close all dropdowns if clicked outside
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 991 && !e.target.closest('.dropdown-parent')) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("active");
      });
    }
  });
});


// =========================
// Language Switcher
// =========================
const langSelect = document.getElementById("language");
if (langSelect) {
  langSelect.addEventListener("change", function () {
    const selectedLang = this.value;
    alert("Language switched to: " + selectedLang);
    // Optional: Load translation or redirect here
  });
}

// =========================
// News Slider Navigation
// =========================
let currentNewsIndex = 0;

function slideNews(direction) {
  const slider = document.getElementById("newsSlider");
  const cards = document.querySelectorAll(".news-card");

  if (slider && cards.length) {
    const total = cards.length;
    currentNewsIndex = (currentNewsIndex + direction + total) % total;
    const offset = -currentNewsIndex * cards[0].offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;
  }
}

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => slideNews(-1));
  nextBtn.addEventListener("click", () => slideNews(1));
}

 document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".hero-slider");
  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Dot click navigation (still restarts autoplay)
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(index);
      startAutoSlide();
    });
  });

  // Init
  showSlide(currentSlide);
  startAutoSlide();
});




  const body = document.body;
  let lastScroll = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      // At top of the page
      body.classList.add("at-top");
      body.classList.remove("scrolled-up", "scrolled-down");
    } else if (currentScroll > lastScroll) {
      // Scrolling down
      body.classList.remove("scrolled-up", "at-top");
      body.classList.add("scrolled-down");
    } else {
      // Scrolling up (but not at top)
      body.classList.remove("scrolled-down", "at-top");
      body.classList.add("scrolled-up");
    }

    lastScroll = currentScroll;
  });



  document.addEventListener("DOMContentLoaded", () => {
    const brandTrigger = document.querySelector(".brand-trigger");
    const dropdown = document.querySelector(".services-dropdown");

    brandTrigger.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    // Optional: close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!brandTrigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  })