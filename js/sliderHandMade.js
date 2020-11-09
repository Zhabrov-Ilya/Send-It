"use strict";

let slides = document.querySelectorAll(".slide");

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

//Стартовое положение слайдов
function slidesPosition() {
  let slideWidth = document.querySelector(".slide").offsetWidth;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = i * slideWidth + "px";
  }
}
slidesPosition();

//Подгонка высоты слайдера для избежания вылезания контента за его пределы
function sliderScrollHeight() {
  let slider = document.querySelector(".slider");
  let activeEl = document.querySelector(".active");
  slider.style.minHeight = activeEl.offsetHeight + "px";
}
sliderScrollHeight();

//Подгонка ширины слайдера при изменении размеров экрана
window.onresize = function () {
  let activeEl = document.querySelector(".active");
  let firstSlide = document.querySelector(".slide");
  activeEl.classList.toggle("active"); //убираем
  firstSlide.classList.toggle("active"); //добавляем

  slidesPosition();

  sliderScrollHeight();
};

//Переключение на предыдущий слайд
prev.onclick = function () {
  let slideWidth = document.querySelector(".slide").offsetWidth;
  let activeEl = document.querySelector(".active");
  if (activeEl.previousElementSibling) {
    for (let i = 0; i < slides.length; i++) {
      let left = slides[i].style.left;
      left = left.substring(0, left.indexOf("px"));
      slides[i].style.left = Number(left) + slideWidth + "px";
    }
    activeEl.classList.toggle("active"); //убираем
    activeEl.previousElementSibling.classList.toggle("active"); //добавляем
  }
  sliderScrollHeight();
};

//Переключение на следующий слайд
next.onclick = function () {
  let slideWidth = document.querySelector(".slide").offsetWidth;
  let activeEl = document.querySelector(".active");
  if (activeEl.nextElementSibling) {
    for (let i = 0; i < slides.length; i++) {
      let left = slides[i].style.left;
      left = left.substring(0, left.indexOf("px"));
      slides[i].style.left = Number(left) - slideWidth + "px";
    }
    activeEl.classList.toggle("active"); //убираем
    activeEl.nextElementSibling.classList.toggle("active"); //добавляем
  }
  sliderScrollHeight();
};

//TODO: сделать кнопки неактивными когда слайды заканчиваются
//TODO: несколько слайдеров на одной странице
//TODO: попробовать сделать зацикливание
//FIXME: при изменении экрана подгоняет слайдер используя transition
