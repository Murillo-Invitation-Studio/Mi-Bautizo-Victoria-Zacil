// ====================================
// ====== Reproduccion de musica ======
// ====================================
var audio = document.getElementById("musica");
var boton = document.getElementById("botonMusica");

function toggleMusica(){

    if(audio.paused){
        audio.play().catch(()=>{}); // Maneja el error si el navegador bloquea la reproducción automática
        boton.innerHTML = "❚❚ Detener"; // icono pausa
    }
    else{
        audio.pause();
        boton.innerHTML = "Reproducir"; // icono play
    }

}

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