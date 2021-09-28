// Your code goes here


// getters

const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-link');

const busImage = document.querySelector('.intro img');

const paragraphs = document.querySelectorAll('p');

const destinationSection = document.querySelector('.content-destination')


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




// come back here - select isn't working but the function syntax is correct
// paragraphs.forEach(p => p.addEventListener('selectionchange', function() {
//     let selection = document.getSelection();
//     selection.style.color = 'orange';
// }));
