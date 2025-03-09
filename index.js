let size = 16;
let input;

const button = document.querySelector('button');
button.addEventListener('click', (e)=>{
    input = parseInt(prompt('How many boxes big do you want your sketchpad to be?'));
    size = input || size;

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
    });

    container.appendChild(grid);
}