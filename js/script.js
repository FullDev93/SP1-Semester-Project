function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (navLinks && hamburger) {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
  }
}


// Only used on exhibition page, but safe to keep here for global use
function filterImages(category) {
  const cards = document.querySelectorAll('.image-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

