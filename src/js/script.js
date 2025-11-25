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
