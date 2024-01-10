const container = document.querySelector('#gridContainer');

function makeGrid(size=16) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const square = document.createElement('div');
            square.classList.add('square')
            row.appendChild(square);
        }
        container.appendChild(row);
    }

    // same total space (960px) for any size input
    const squares = document.querySelectorAll('.square');
    const containerWidth = 600;
    for (const square of squares) {
        square.style.width = `${containerWidth / size}px`;
        square.style.height = `${containerWidth / size}px`;
        // border-box fixed everything
        square.style.boxSizing = 'border-box';

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
    // limit user input to 100
    let size;
    while (size === undefined || size > 100) {
        size = prompt('Squares per side');
    }
    container.textContent = '';
    makeGrid(size);
})

