const button = document.querySelector('.btn_add');
const button_delete_all = document.querySelector('.btn_del');
const input = document.querySelector('.input_area');
const notes = document.querySelector('.notes');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function fader(node) {
    node.classList.add('fade');
    await delay(600);
}


async function deleteNote(e){
    //because the target is the img, we have to go up in img->del_btn->note
    let node = e.target.parentElement;
    while (!node.classList.value.includes('note')) { //if we click on the border or padding of del_btn and not the img, the note node is not the parent, but the parent of the parent so we need to go up until we find the note node
        node = node.parentElement;
    }
    // console.log(node);
    await fader(node);
    notes.removeChild(node);
}

function deleteAllNotes() {
    //make the child nodelist into an array and iterate through it add the fade effect and remove them from the DOM
    Promise.all(Array.from(notes.children).map(async note => {
        await fader(note);
        notes.removeChild(note);
    }))
}


function toggleNote(e) {
    e.target.classList.toggle('highlight');
}


function makeNote(){
    if (input.value === '') return //Empty note should not be displayed

    //Make first letter uppercase
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);

    //Creating note
    const note = document.createElement('div');
    note.classList.add('note')
    note.textContent = input.value;
    //Creating delete button inside note
    const del_btn = document.createElement('button');
    del_btn.classList.add('del_btn');
    del_btn.addEventListener('click', deleteNote);

    //Adding Icon
    const del_img = document.createElement('img');
    del_img.src = "delete.png";
    del_btn.appendChild(del_img);



    //Append together and cleanup
    note.appendChild(del_btn);
    notes.appendChild(note);
    note.addEventListener('click', (e) => {
        if (e.target.classList.value.includes('note')) {
            toggleNote(e);
        }
    });
    input.value = '';
}





button.addEventListener('click', makeNote); 
input.addEventListener('keypress', (e) => { //Enter works too
    if (e.key === 'Enter'){
        makeNote();
    }
});
button_delete_all.addEventListener('click', deleteAllNotes);