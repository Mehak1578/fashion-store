const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");

  dots[index].classList.add("active");
}

next.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prev.addEventListener("click", () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;

    showSlide(currentSlide);
  });
});

setInterval(() => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}, 3000);
