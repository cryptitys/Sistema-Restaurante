//========= menu amburguer ===========//
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
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
</script>
