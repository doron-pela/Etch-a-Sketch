let size = 16;
let input;

const button = document.querySelector('button');
button.addEventListener('click', (e)=>{
    input = parseInt(prompt('How many boxes big do you want your sketchpad to be?'));
    size = input || size;

    while (size>=100){
        alert('Please enter a number less than 100');
        input = parseInt(prompt('How many boxes big do you want your sketchpad to be?'));
        size = input || size;
    }

    const grid = document.querySelector('.grid');
    grid.remove();
    createGrid(size);
});

createGrid(size);

function createGrid(size){
        
    const container = document.querySelector('.container');

    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i<size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        

        for (let j = 0; j<size; j++){
            const div = document.createElement('div');
            div.classList.add('box')
            row.appendChild(div);
        }

        grid.appendChild(row);
    }


    container.addEventListener('mouseover', (e)=>{
        let div = e.target;
        if(div.matches('.box')){
            div.classList.add('hover');
        }

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        const opacity = 0.1;

        div.style.backgroundColor = `rgb(${r} ${g} ${b})`;

    });

    container.appendChild(grid);
}