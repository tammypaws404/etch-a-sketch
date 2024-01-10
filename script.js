const container = document.querySelector('#gridContainer');

function makeGrid(size=16) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let i = 0; i < size; i++) {
            const square = document.createElement('div');
            square.classList.add('square')
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    // same total space (900px) for any size input
    const squares = document.querySelectorAll('.square');
    containerWidth = 900;
    for (const square of squares) {
        square.style.padding = `${(containerWidth / size) / 2}px`
    }    

    // when square hovered, change color
    for (const square of squares) {
        square.addEventListener('mouseover', () => {
            square.classList.add('hoverColor');
        })
    }
}

const sizeBtn = document.querySelector('#sizeBtn');
sizeBtn.addEventListener('click', () => {
    const size = prompt('Squares per side');
    container.textContent = '';
    makeGrid(size);
})

