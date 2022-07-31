const grid_layout = document.querySelector('#grid_layout');
const grid_range = document.querySelector('[type="range"]');
const grid_range_value = document.querySelector('.grid_range_value');
let grid_items = [];
let isDown = false;

populate(10);


function clearGrid()
{
    console.log(grid_layout.childElementCount);
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
}



function gridSelect(e)
{
    grid_range_value.textContent = `${this.value}`;
    populate(this.value);
}

function handleMove()
{
    if (isDown)
    {
        console.log('down');
    }
    else
    {
        console.log('up');
    }
}



grid_range.addEventListener('click', gridSelect);
// document.addEventListener('mousemove',handleMove);
