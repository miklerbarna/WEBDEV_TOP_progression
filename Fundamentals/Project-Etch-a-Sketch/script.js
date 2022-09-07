const grid_layout = document.querySelector('#grid_layout');
const grid_range = document.querySelector('[type="range"]');
const grid_range_value = document.querySelector('.grid_range_value');
const color = document.querySelector('.color');
const clear = document.querySelector('#clear');
const rainbow = document.querySelector('#rainbow');
let isDown = false;
let isRainbow = false;
let grid_items = [];
let current_color = '#000000';

populate(10);
grid_range_value.textContent = '10 x 10';


function clearGrid()
{
    while(grid_layout.childElementCount > 0)
    {
        let child = grid_layout.firstChild;
        grid_layout.removeChild(child);
    }
}



// 1 <= n <= 100
function populate(n)
{
    clearGrid();
    for (let index = 0; index < n; index++) {
        let grid_row = document.createElement('div');
        grid_row.classList.add('grid_row'); 
        for (let index = 0; index < n; index++) {
            let grid_item = document.createElement('div');
            grid_item.classList.add('grid_item');
            grid_item.style.cssText += `width:${40 / n}rem; height:${40 / n}rem;`;
            grid_row.appendChild(grid_item);
        }
        grid_layout.appendChild(grid_row);
    }

    grid_items = Array.from(document.querySelectorAll('.grid_item'));
    grid_items.forEach(item => item.style.cssText += `  background-color: white;
                                                        margin: 0;
                                                        padding: 0;
                                                    `);
    newEvents(grid_items);
}



function gridSelect(e)
{
    grid_range_value.textContent = `${this.value} x ${this.value}`;
    populate(this.value);
}



function chooseColor()
{
    current_color =  this.value;
}



function newEvents(grid_item)
{
    grid_items.forEach(item => item.addEventListener('mousemove', (e) => {
        if (isDown)
        {
            e.target.style.cssText +=`  background-color:${current_color};
            margin: 0;
            padding: 0;
            `;
            if(isRainbow)
            {
                current_color = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        }
    }));
    
    grid_items.forEach(item => item.addEventListener('mouseleave', (e) => {
        if (!isDown && e.target.style.backgroundColor === 'white'){
            e.target.style.cssText +=`  background-color: white;
            margin: 0;
            padding: 0;
            `;
        }
    }));
    
    grid_items.forEach(item => item.addEventListener('mousedown', () => {
        (isDown === true) ? isDown = false : isDown = true;
    }));
}

function click_clear()
{
    let grid_item_count = grid_items.length;
    populate(Math.sqrt(grid_item_count));
}


grid_range.addEventListener('click', gridSelect);
color.addEventListener('change', chooseColor);
clear.addEventListener('click', click_clear);
rainbow.addEventListener('click', () => {
    (isRainbow === true) ? isRainbow = false : isRainbow = true;
});