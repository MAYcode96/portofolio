function setupSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const images = slider.querySelectorAll("img");
  const prevBtn = slider.parentElement.querySelector(".prev-btn");
  const nextBtn = slider.parentElement.querySelector(".next-btn");

  let index = 0;
  const slideWidth = images[0].clientWidth;
  const totalSlides = images.length;

  function moveToSlide(newIndex) {
    index = (newIndex + totalSlides) % totalSlides;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    moveToSlide(index + 1);
  }

  function prevSlide() {
    moveToSlide(index - 1);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 4000);
}

setupSlider("slide1");
setupSlider("slide2");
