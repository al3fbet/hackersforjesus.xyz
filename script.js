// script.js
// Array of different paragraphs
const paragraphs = [
    "Exodus 20:8-11 - 8: Remember the sabbath day too keep it holy.",
    "This is just a test lets see if this works #2.",
    "Let's see if this works #3."
];

// Function to randomly select a paragraph from the array
function getRandomParagraph() {
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

// Function to update the text container with a random paragraph
function updateTextContainer() {
    const textContainer = document.getElementById('dynamic-text');
    textContainer.textContent = getRandomParagraph();
}

// Call the function initially to populate the container with a paragraph
updateTextContainer();

// You can call the updateTextContainer() function whenever you want to change the paragraph dynamically

// JavaScript for interactive navbar
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo');
  const navbarLinks = document.querySelectorAll('.nav-link');

  // Function to toggle navbar width
  function toggleNavbarWidth() {
    const isNavbarExpanded = navbar.classList.contains('expanded');
    if (isNavbarExpanded) {
      navbar.classList.remove('expanded');
    } else {
      navbar.classList.add('expanded');
    }
  }

  // Toggle navbar width when logo is clicked
  logo.addEventListener('click', toggleNavbarWidth);

  // Toggle navbar width when each nav link is clicked
  navbarLinks.forEach(link => {
    link.addEventListener('click', toggleNavbarWidth);
  });

  // Close navbar when user taps outside of it
  document.addEventListener('click', function (event) {
    if (!navbar.contains(event.target) && !logo.contains(event.target) && navbar.classList.contains('expanded')) {
      navbar.classList.remove('expanded');
    }
  });
});

