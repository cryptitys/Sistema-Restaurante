//========= menu amburguer ===========//
  const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-menu');
btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  btn.classList.toggle('open');
});

// Opcional: fecha menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.classList.remove('open');
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
 
//======= fim CD amburguer  ==========//
// ======= modal PDF cardápio ========//
  const openPDF = document.getElementById("openMenuPDF");
  const modalPDF = document.getElementById("modalPDF");
  const closePDF = document.getElementById("closePDF");

  // abrir modal
  openPDF.addEventListener("click", (e) => {
    e.preventDefault();
    modalPDF.style.display = "flex";
  });

  // fechar modal pelo X
  closePDF.addEventListener("click", () => {
    modalPDF.style.display = "none";
  });

  // fechar clicando fora da caixa
  window.addEventListener("click", (e) => {
    if (e.target === modalPDF) {
      modalPDF.style.display = "none";
    }
  });

