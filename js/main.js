const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');

/* Navbar turns solid after scrolling */
function updateNavbar() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', updateNavbar);
updateNavbar();

/* Hamburger menu */
function closeMenu() {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

navAnchors.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

/* Close menu using Escape key */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && links.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});

/* Highlight the nav link of the section currently on screen */
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((anchor) => {
          anchor.classList.toggle(
            'active',
            anchor.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((section) => sectionObserver.observe(section));

/* Fade elements in as they scroll into view */
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));


/* ========================================
   HOBBY IMAGE LIGHTBOX
======================================== */

const hobbyImages = document.querySelectorAll('.hobby-image-button');
const lightbox = document.querySelector('#hobby-lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

let lastFocusedImage = null;

/* Open the selected image */
hobbyImages.forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lastFocusedImage = button;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';

    lightboxClose.focus();
  });
});

/* Close the lightbox */
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  document.body.style.overflow = '';

  if (lastFocusedImage) {
    lastFocusedImage.focus();
  }
}

lightboxClose.addEventListener('click', closeLightbox);

/* Close when clicking outside the image */
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/* Close using Escape key */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !lightbox.hidden) {
    closeLightbox();
  }
});


/* ========================================
   BACK TO TOP BUTTON
======================================== */

const backToTop = document.querySelector('#back-to-top');

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* ========================================
   FAMILY CARD FLIP
======================================== */

const familyCards = document.querySelectorAll('.family-card');

familyCards.forEach((card) => {

  /* Flip on click or tap */
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  /* Flip using keyboard */
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.classList.toggle('flipped');
    }
  });

});