// Your code goes here


// getters

const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-link');













// event listeners
header.addEventListener('mouseenter', e => e.target.style.backgroundColor = 'yellow');
header.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white');

navLinks.forEach(link => link.addEventListener('mouseenter', e => e.target.style.textDecoration = 'underline'));
navLinks.forEach(link => link.addEventListener('mouseleave', e => e.target.style.textDecoration = ''));

