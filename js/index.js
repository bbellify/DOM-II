// Your code goes here


// getters

const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-link');

const busImage = document.querySelector('.intro img');
const images = document.querySelectorAll('img')
const imageArray = Array.from(images);

const paragraphs = document.querySelectorAll('p');

const destinationSection = document.querySelector('section.content-destination')

const destinationH2 = document.querySelector('.content-destination h2')


// event listeners
header.addEventListener('mouseenter', e => e.target.style.backgroundColor = 'yellow');
header.addEventListener('mouseleave', e => e.target.style.backgroundColor = 'white');

navLinks.forEach(link => link.addEventListener('mouseenter', e => e.target.style.textDecoration = 'underline'));
navLinks.forEach(link => link.addEventListener('mouseleave', e => e.target.style.textDecoration = ''));

busImage.addEventListener('dblclick', function(e) {
    if (e.target.style['max-width'] === '100%') {
        e.target.style['max-width'] = '50%'
    } else {
        e.target.style['max-width'] = '100%'
    }
});

imageArray.forEach(img => img.addEventListener('mouseover', e => e.target.style.border = '10px solid green'));

destinationH2.addEventListener('click', function(e){
    e.stopPropagation();
    e.target.style.background = 'blue'; 
});
destinationSection.addEventListener('click', () => destinationSection.style.background = 'purple'
);

function bKey(e){
    if (e.key === 'b') {
        paragraphs.forEach(p => p.style.border = '10px solid grey')
    } 
}
document.addEventListener('keydown', bKey);

function nKey(e){
    if (e.key === 'n') {
        paragraphs.forEach(p => p.style.border = '')
    }
}
document.addEventListener('keydown', nKey);

document.addEventListener('scroll', () => header.style.height = '5vh')

window.addEventListener('resize', destinationChanger)
function destinationChanger(){
    destinationSection.style.display = 'flex';
    destinationSection.style['flex-direction'] = 'column-reverse';
    destinationSection.style['align-items'] = 'center'
}

window.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('No stealing our copy!')
})