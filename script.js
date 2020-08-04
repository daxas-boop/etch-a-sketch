function resetColorsGrid(){
    const $grid = document.querySelectorAll('div .grid');
    $grid.forEach(grid => 
        grid.style.background = 'blueviolet')
}

function showNewGrid(){
    const gridSquares = Number(prompt('Choose how many squares you want Ex. 50 for 50x50'));
    if( isNaN(gridSquares) || gridSquares > 64) { 
        return
    }
    
    const $container = document.querySelector('#container');
    $container.innerHTML = '';

    $container.style.cssText= `
        grid-template-columns: repeat(${gridSquares}, 1fr);
        grid-template-rows: repeat(${gridSquares}, 1fr)`

    for(let i = 0; i < gridSquares*gridSquares; i++){
        const $grid = document.createElement('div');
        $grid.classList.add('grid');
        $container.appendChild($grid);
    }

    
    changeColorGrid();
}

function initializeResetButton() {
    const $reset = document.querySelector('#reset');
    $reset.addEventListener('click',()=>{resetColorsGrid(); showNewGrid();});
}

function changeColorGrid(){
    const $grid = document.querySelectorAll('div .grid');
    $grid.forEach(grid => grid.addEventListener('mouseover' ,()=>{
        grid.style.background = 'black'
    }));
}

function initialize(){
    const $container = document.querySelector('#container');
    
    for(let i = 0; i < 256; i++){
        const $grid = document.createElement('div');
        $grid.classList.add('grid');
        $container.appendChild($grid);
    }

    changeColorGrid();
    initializeResetButton();
}

initialize();