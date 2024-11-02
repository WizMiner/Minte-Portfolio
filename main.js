//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//show/ hide faq answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon
    const icon = faq.querySelector(".faq_icon");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});
// JavaScript for toggling menu and navbar scroll effect
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const toggleMenuBtn = document.getElementById("toggle-menu");
    const menuIcon = document.getElementById("menu-icon"); // The img inside the button
    const navMenu = document.querySelector(".nav_menu");
  
    // Define the icons for open and close states
    const menuIconSrc = "asset/menu.svg"; // Hamburger icon
    const closeIconSrc = "asset/close.svg"; // Close icon
  
    // Toggle open/close menu on click
    toggleMenuBtn.addEventListener("click", function () {
      if (navMenu.classList.contains("open")) {
        // If menu is already open, close it and switch to hamburger
        navMenu.classList.remove("open");
        menuIcon.src = menuIconSrc; // Change to hamburger icon
      } else {
        // If menu is closed, open it and switch to close icon
        navMenu.classList.add("open");
        menuIcon.src = closeIconSrc; // Change to close icon
      }
    });
  
    // Change navbar background on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        nav.classList.add("window-scroll");
      } else {
        nav.classList.remove("window-scroll");
      }
    });
  });

/**
 * letteranimation.js
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimattion is licensed under the MIT license
 **/

window.onload = function () {
  animateSequence();
  animateRandom();
};

function animateSequence() {
  var a = document.getElementsByClassName("sequence");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var str = "";
    var delay = 100;
    for (l = 0; l < letter.length; l++) {
      if (letter[l] != " ") {
        str +=
          '<span style="animation-delay:' +
          delay +
          "ms; -moz-animation-delay:" +
          delay +
          "ms; -webkit-animation-delay:" +
          delay +
          'ms; ">' +
          letter[l] +
          "</span>";
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  var a = document.getElementsByClassName("random");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var delay = 70;
    var delayArray = new Array();
    var randLetter = new Array();
    for (j = 0; j < letter.length; j++) {
      while (1) {
        var random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) == -1) break;
      }
      delayArray[j] = random;
    }
    for (l = 0; l < delayArray.length; l++) {
      var str = "";
      var index = delayArray[l];
      if (letter[index] != " ") {
        str =
          '<span style="animation-delay:' +
          delay +
          "ms; -moz-animation-delay:" +
          delay +
          "ms; -webkit-animation-delay:" +
          delay +
          'ms; ">' +
          letter[index] +
          "</span>";
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join("");
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
