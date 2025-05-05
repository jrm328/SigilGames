// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Form Submission Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple form validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset(); // Clear the form
});

// Add Scroll Animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.2 // Trigger animation when 20% of the element is visible
});

document.querySelectorAll('.card, section').forEach(element => {
  observer.observe(element);
});

// Add CSS class for animations
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .animate {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .card, section {
      opacity: 0;
      transform: translateY(20px);
    }
  </style>
`);
