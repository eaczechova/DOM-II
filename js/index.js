// Your code goes here
const interactionSection = document.createElement('section');
interactionSection.classList.add('interaction-section')

const heading = document.createElement('h4');
heading.textContent = 'Your Idea Box';
heading.style.fontsize = '20px';
heading.style.textAlign = 'center';

const dropArea = document.createElement('div');
dropArea.style.width = '50%';
dropArea.style.height = '100px';
dropArea.style.margin = '0 auto';
dropArea.style.border = '1px solid black';
dropArea.classList.add('dropzone');
interactionSection.appendChild(dropArea);

const screenSize = document.createElement('p');
screenSize.classList.add('screen-size');
screenSize.style.textAlign = 'center';
screenSize.style.padding = '20px';

const keysPressed = document.createElement('p');
keysPressed.classList.add('keys-pressed');
keysPressed.style.textAlign = 'center';
keysPressed.style.padding = '20px';

const elementForSelectEvent = document.createElement('input');
elementForSelectEvent.setAttribute('value', 'Here is the text you can select and see what will happen.');
elementForSelectEvent.style.width = '100%';
elementForSelectEvent.style.textAlign = 'center';

interactionSection.appendChild(heading);
interactionSection.appendChild(dropArea);
interactionSection.appendChild(screenSize);
interactionSection.appendChild(keysPressed);
interactionSection.appendChild(elementForSelectEvent);
document.querySelector('.home').appendChild(interactionSection);

// 1. mouseover to images (add also mouseleave to revert the change)

const images = document.querySelectorAll('img');

images.forEach((item)=> {
    item.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'all 0.3s';
    });
});

images.forEach((item) => {
    item.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.transition = 'all 0.3s';
    });
});

// 2. keydown 

window.addEventListener('keydown', (event) => {
    const keysPressedInfo = document.querySelector('.keys-pressed');
    keysPressedInfo.textContent = `Youe have pressed ${String.fromCharCode(event.keyCode)}`;
});

// 3. wheel

document.addEventListener('wheel', (event) => {
    event.target.style.fontSize = '20px';
});

// 4. drag/drop 

const dragItem = document.querySelectorAll('.destination h4');
dragItem.forEach(
    item => {item.setAttribute(
        'draggable', true)});

let draggedItem = null;

document.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
}, false);

document.addEventListener('dragover', function (e) {
    if (draggedItem) {
        e.preventDefault();
    }
}, false);	

document.addEventListener('drop', (event) => {
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == 'dropzone') {
        event.target.appendChild(draggedItem);
        e.preventDefault();
    }
}, false);

document.addEventListener('dragend', function (event) {
    draggedItem = null;
}, false);


// 5. load

window.addEventListener('load', () => {
    console.log('The page is benn fully loaded successfully!');
});

// 6. focus - change font size and backgrond color on focus

document.body.addEventListener('focus', (event) => {
    event.target.style.fontSize = '30xp';
});

// 7. resize

window.addEventListener('resize', () => {
    const screenSizeInfo = document.querySelector('.screen-size');
    screenSizeInfo.textContent = `The window height is ${window.innerHeight} and width is ${window.innerWidth}`;
});

// 8. scroll - add position: fixed to nav section on scroll

window.addEventListener('scroll', () => {
    const navigation = document.querySelector('.main-navigation');
    navigation.style.position = 'fixed';
    navigation.style.zIndex = '1';
})

// 9. select - input field added to document structure as per MDN select event works only on input and textarea HTML elelements.

elementForSelectEvent.addEventListener('select', (event) => {
    event.target.style.fontSize = '20px';
});

// 10. dblclick toggel class .dblclick that add/remove background color

document.body.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('dbclick');
} )

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach( (item) => {
    item.addEventListener('click', function (event) {
        navLinks.forEach(item => item.classList.remove('navLinkClicked'));
        event.preventDefault();
        event.stopPropagation();
        event.target.classList.add('navLinkClicked');
    })})

const logoHeading = document.querySelector('.nav-container');

logoHeading.addEventListener('click', function (event) {
    logoHeading.style.background = "red";   
});

console.log(logoHeading);