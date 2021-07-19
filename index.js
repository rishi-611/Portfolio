"use strict";

const navLinks = document.querySelectorAll(".overlay .nav-link");
const toggler = document.querySelector("#navbar-toggler");
const overlay = document.querySelector("#overlay");
const overlayBg = document.querySelector("#overlay-bg");
const hamIcon = document.querySelector("#ham");
const closeIcon = document.querySelector("#close");
const phoneBox = document.querySelector("#phone-container");
const copyBtn = document.querySelector("#copy");
const phoneBtn = document.querySelector("#phone-btn");

// toggle navigation on small screen

let isNavOn = false;

const openNav = () => {
  overlay.classList.remove("d-none");
  overlayBg.classList.remove("d-none");
  hamIcon.classList.add("d-none");
  closeIcon.classList.remove("d-none");
};

const closeNav = () => {
  overlay.classList.add("d-none");
  overlayBg.classList.add("d-none");
  hamIcon.classList.remove("d-none");
  closeIcon.classList.add("d-none");
};

const toggleNav = () => {
  isNavOn ? closeNav() : openNav();
  isNavOn = !isNavOn;
};

toggler.addEventListener("click", toggleNav);

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    toggleNav();
  })
);

if (window.screen.width > 575) {
  closeNav();
  isNavOn = false;
}

// toggle phone number display

let isPhoneDisplayed = false;

const togglePhoneDisplay = () => {
  if (isPhoneDisplayed) {
    phoneBox.classList.add("d-none");
  } else {
    phoneBox.classList.remove("d-none");
    phoneBox.scrollIntoView();
  }

  isPhoneDisplayed = !isPhoneDisplayed;
};

phoneBtn.addEventListener("click", togglePhoneDisplay);
