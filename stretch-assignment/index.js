const blocks = document.querySelector('.blocks');
let blocksChildren = document.querySelectorAll('.block');
blocks.addEventListener('click', (event) => {
    event.stopPropagation();
    blocksChildren.forEach(item => item.style.order = 0); 
    event.target.style.order = '-1';
});

blocksChildren.forEach(item => item.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    console.log(event);
    event.target.style.animation = 'travelers linear 15s infinite';
}));
 
blocksChildren.forEach(item => item.addEventListener('mouseup', (event) => {
    event.stopPropagation();
    event.target.style.animation = 'travelersReversed linear 1s 1';
}));




