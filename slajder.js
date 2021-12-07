const output = document.querySelector('.slider__output')
const input = document.querySelector('.slider__input')

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
  /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  /* Проверяем количество слайдов: */
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  /* Проходим по каждому слайду в цикле for: */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}
