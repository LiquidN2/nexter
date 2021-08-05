'use strict';

// ------------------------------
import '../scss/style.scss';

// ------------------------------
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// ------------------------------
const btnGoBackTop = document.getElementById('btn-gobacktop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnGoBackTop.style.display = 'block';
  } else {
    btnGoBackTop.style.display = 'none';
  }
};

// When the user clicks on the button, scroll to the top of the document
const scrollBackTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

btnGoBackTop.addEventListener('click', () => scrollBackTop());
