'use strict';

let acc = document.getElementsByClassName("accordion-box");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    event.preventDefault();
    //вращаемый треугольник
    let toggle = this.querySelector('.toggle');
    //раскрываемый блок
    let panel = this.querySelector('.panel');
    if (panel.style.maxHeight) {
      toggle.style.transform = 'rotate(0deg)';
      panel.style.maxHeight = null;
    } else {
      toggle.style.transform = 'rotate(180deg)';
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}