"use strict";

let body = document.querySelector("body");
let checkbox = document.querySelector("#menu__toggle");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // body.style.position = 'fixed';
    disableScroll();
  } else {
    // body.style.position = 'static';
    enableScroll();
  }
});

window.disableScroll = function () {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  // document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  padding-right: ${widthScroll}px;
  `;
  // top: ${-window.scrollY}px;
};

window.enableScroll = function () {
  document.body.style.cssText = ``;
  // window.scroll({ top: document.body.dbScrollY });
};
