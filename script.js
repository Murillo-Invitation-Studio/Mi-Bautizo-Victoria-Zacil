// ================================================
// ====== Animacion de texto al hacer scroll ======
// ================================================
const elementosReveal = document.querySelectorAll(".reveal");

const mostrarElementos = () => {
  const trigger = window.innerHeight * 0.85;

  elementosReveal.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("activo");
      el.classList.remove("inicial");
    }
  });
};

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);