let boxTop = 200;
let boxLeft = 200;

'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    if(event.key === 'ArrowDown') {
        boxTop += 10
    } else if(event.key === 'ArrowUp') {
        boxTop -= 10
    }
    document.getElementById("box").style.top = boxTop + "px";
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') {
        boxLeft += 10
    } else if(event.key === 'ArrowLeft') {
        boxLeft -= 10
    }
    document.getElementById("box").style.left = boxLeft + "px"
})