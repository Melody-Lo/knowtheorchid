// Select the "Know the Orchid" element
const title = document.querySelector('h1');

// Add a click event listener to scroll to the top
title.addEventListener('click', () => {
  window.scrollTo({
    top: 0, // Scroll to the top
    behavior: 'smooth' // Smooth scrolling animation
  });
});

// Change header style on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  

