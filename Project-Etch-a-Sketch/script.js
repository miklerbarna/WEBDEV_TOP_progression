const grid_layout = document.querySelector('#grid_layout');
const grid_range = document.querySelector('[type="range"]');
const grid_range_value = document.querySelector('.grid_range_value');
const color = document.querySelector('.color');
let grid_items = [];
let isDown = false;
let current_color = '#000000';

populate(10);


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
    grid_items.forEach(item => item.style.cssText += `  background-color: aquamarine;
                                                        margin: 0;
                                                        padding: 0;
                                                        outline: black solid 1px;
                                                    `);
    newEvents(grid_items);
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

function chooseColor()
{
    current_color =  this.value;
}


grid_range.addEventListener('click', gridSelect);
// color.addEventListener('click', chooseColor);
color.addEventListener('change', chooseColor);

function newEvents(grid_item)
{
    grid_items.forEach(item => item.addEventListener('mousemove', (e) => {
        e.target.style.cssText +=`  background-color:${current_color};
                                    margin: 0;
                                    padding: 0;
                                    outline: black solid 1px;
                                    `;
    }));

    grid_items.forEach(item => item.addEventListener('mouseleave', (e) => {
        e.target.style.cssText +=`  background-color: aquamarine;
                                    margin: 0;
                                    padding: 0;
                                    outline: black solid 1px;
                                    `;
    }));
}
// document.addEventListener('mousemove',handleMove);
