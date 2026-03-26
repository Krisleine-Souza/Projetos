const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-link");
const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section[id]");

// Menu mobile
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedButton = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedButton) {
      menu.classList.remove("open");
    }
  });
}

// Animação ao aparecer na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// Link ativo no menu conforme rolagem
function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });

  if (window.scrollY < 120) {
    menuLinks.forEach((link) => link.classList.remove("active"));
    const homeLink = document.querySelector('.menu-link[href="#topo"]');
    if (homeLink) homeLink.classList.add("active");
  }
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);