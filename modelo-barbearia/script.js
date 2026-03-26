const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const hero = document.querySelector(".hero");
const heroContent = document.getElementById("heroContent");
const heroVisual = document.getElementById("heroVisual");
const heroShapes = document.querySelectorAll(".hero-shape");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

// Parallax no scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (hero) {
    hero.style.backgroundPosition = `center calc(50% + ${scrollY * 0.18}px)`;
  }

  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.10}px)`;
  }

  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrollY * 0.06}px)`;
  }

  heroShapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.04;
    shape.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

// Movimento com mouse
if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 18;
    const moveY = (y / rect.height - 0.5) * 18;

    if (heroContent) {
      heroContent.style.transform = `translate(${moveX * 0.25}px, ${moveY * 0.25}px)`;
    }

    if (heroVisual) {
      heroVisual.style.transform = `translate(${moveX * -0.45}px, ${moveY * -0.45}px)`;
    }
  });

  hero.addEventListener("mouseleave", () => {
    if (heroContent) {
      heroContent.style.transform = "translate(0, 0)";
    }

    if (heroVisual) {
      heroVisual.style.transform = "translate(0, 0)";
    }
  });
}