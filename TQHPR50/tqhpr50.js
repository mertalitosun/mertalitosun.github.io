const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderWidth = slider.offsetWidth;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
    slider.style.transform = `translateX(${-slideIndex * sliderWidth}px)`;
  }
});

nextButton.addEventListener('click', () => {
  if (slideIndex < slider.children.length - 1) {
    slideIndex++;
    slider.style.transform = `translateX(${-slideIndex * sliderWidth}px)`;
  }
});
