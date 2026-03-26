// ===== BOTÃO WHATSAPP COM MENSAGEM DINÂMICA =====
function pedirProduto(nomeProduto) {
  const numero = "5541999999999";

  const mensagem = `Olá! Quero pedir: ${nomeProduto}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

const botao = document.querySelector(".btn.big");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botao.style.opacity = "0.8";
  } else {
    botao.style.opacity = "1";
  }
});