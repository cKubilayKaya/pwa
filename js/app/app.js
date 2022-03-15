const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const gallery = new Swiper(".gallerySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const installButton = document.getElementById("install-app"),
  installContainer = document.querySelector(".install-app-container");
let beforeInstallPromptEvent;
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  beforeInstallPromptEvent = e;
  installContainer.style.display = "block";
  installContainer.addEventListener("click", function () {
    e.prompt();
  });
  installButton.hidden = false;
});
installButton.addEventListener("click", function () {
  beforeInstallPromptEvent.prompt();
});
