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
const form = document.querySelector("#contact-form");
const contactBtn = document.querySelector("#contact-btn");

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

// send mail

let mailAlreadySent = false;

const setAlert = (message, timeout = 7000) => {
  contactBtn.insertAdjacentHTML(
    "beforebegin",
    `
    <div id="mail-alert" class="text-center mail-alert">
      <div class="inner-mail-alert">
        ${message}
      </div>
    </div>
  `
  );

  setTimeout(() => {
    if (document.querySelector("#mail-alert")) {
      document.querySelector("#mail-alert").remove();
    }
  }, timeout);
  contactBtn.scrollIntoView();
  return;
};

const sendMail = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    await axios.post("/api/mail", data, config);

    setAlert("I have received your mail. <br/> I'll get in touch ASAP");
    mailAlreadySent = true;
  } catch (err) {
    setAlert(
      "Could not send mail. <br/> Please check that your Email is valid and Try Again! <br/> Or try other contact links provided below  ",
      9000
    );
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (mailAlreadySent) {
    return setAlert(`I have already received a mail from you! <br/>
    No need to worry, I'll get in touch ASAP`);
  }

  const data = {};

  data.name = e.target.elements[0].value;
  data.email = e.target.elements[1].value;
  data.message = e.target.elements[2].value;

  sendMail(data);
});
