//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
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

//show vs hide faq answer
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active"); // Toggle the active class
    });
  });
});

let currentSlideIndex = 0;

function showSlides(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;

  // Loop back to the first slide if index exceeds total slides
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }

  // Calculate the offset and apply it to the slides
  const offset = -currentSlideIndex * 100; // 100% for each slide
  slides.style.transform = `translateX(${offset}%)`;
}

// Change slide based on direction (-1 for previous, +1 for next)
function changeSlide(direction) {
  showSlides(currentSlideIndex + direction);
}

// Automatic slide every 5 seconds
setInterval(() => {
  changeSlide(1); // Move to the next slide
}, 5000);

// Initial call to display the first slide
showSlides(currentSlideIndex);

function toggleSkills(category) {
  const skillsList = category.querySelector(".skills-list");
  const icon = category.querySelector(".icon");
  if (skillsList.style.display === "none") {
    skillsList.style.display = "flex";
    icon.innerHTML = "&#9660;"; // Down arrow
  } else {
    skillsList.style.display = "none";
    icon.innerHTML = "&#9654;"; // Right arrow
  }
}

// Initially show all skill categories
function toggleSkills(element) {
  const skillsList = element.querySelector('.skills-list');
  skillsList.style.display = skillsList.style.display === 'block' ? 'none' : 'block';
}
