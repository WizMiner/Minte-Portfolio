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

