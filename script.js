const container = document.querySelector('#gridContainer');

function makeGrid(size=16) {
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square);
    }

    // make squares according to size input
    const squares = document.querySelectorAll('.square');
    containerWidth = 960;
    const divWidth = containerWidth / size;
    const divHeight = divWidth;
    for (const square of squares) {
        square.style.width = `${divWidth}px`;
        square.style.height = `${divHeight}px`;
    }
}

// when square hovered, change color
const squares = document.querySelectorAll('.square');
for (const square of squares) {
    square.addEventListener('mouseover', () => {
        square.classList.add('hoverColor');
    })
}

const sizeBtn = document.querySelector('#sizeBtn');
sizeBtn.addEventListener('click', () => {
    const size = prompt('Squares per side');
    makeGrid(size);
})