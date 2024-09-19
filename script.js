const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

function headerScroll() {
  const header = document.querySelector("header");
  const headerSubtitle = document.querySelector(".header-subtitle");
  const whatsapp = document.querySelector(".whatsapp");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.800)";
      header.classList.remove("header-scroll");
      headerSubtitle.style.display = "none";
      whatsapp.style.transform = "translateX(0)";
      whatsapp.style.opacity = "1";
    } else {
      header.style.backgroundColor = "transparent";
      header.classList.add("header-scroll");
      headerSubtitle.style.display = "block";
      whatsapp.style.transform = "translateX(200%)";
      whatsapp.style.opacity = "0";
    }
  });
}

headerScroll();

function scrollTo(trigger, target) {
  const element = document.querySelector(target);
  const triggerElement = document.querySelector(trigger);
  triggerElement.style.cursor = "pointer";
  triggerElement.addEventListener("click", () => {
    element.scrollIntoView({
      behavior: "smooth",
    });
  });
}

scrollTo(".contatoTrigger", "#contact");
scrollTo(".inicioTrigger", "#hero");
scrollTo(".sobreTrigger", "#sobre");

function marquee() {
  const list = ["Freios","Troca de embreagem", "Troca de óleo e filtro", "Peças e acessórios", "Revisão geral", "Mecânica em geral", "Elétrica completa"];
  const icons = ["imgs/eletrica.svg", "imgs/mecanica.svg", "imgs/troca-de-oleo.svg", "imgs/venda.svg", "imgs/revisao.svg", "imgs/mecanica.svg", "imgs/eletrica.svg"];
  const heroServices = document.getElementById("hero-services");

  // Cria o conteúdo do marquee
  const marqueeContent = list.map((item, index) => `<div class="hero-services-item"><img src="${icons[index]}" alt="${item}">${item}</div>`).join("");

  // Duplica o conteúdo para criar o efeito contínuo
  heroServices.innerHTML = `
    <div class="marquee-container">
      <div class="marquee-content">
        ${marqueeContent}
      </div>
      <div class="marquee-content-reprise">
        ${marqueeContent}
      </div>
    </div>
  `;
}

marquee();

window.addEventListener("load", () => {
  const lottieAnimation = bodymovin.loadAnimation({
    container: document.querySelector('.lottie-engrenagem'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'imgs/engrenagens.json',
  });
  const lottiemechanico = bodymovin.loadAnimation({
    container: document.querySelector('.lottie-mecanico'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'imgs/mecanico.json',
  });
});
