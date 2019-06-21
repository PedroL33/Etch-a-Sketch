const container = document.getElementById("container");
//Create Button 
const reset = document.createElement('button');
reset.innerText = "Make New Etch-a-Sketch";
document.body.appendChild(reset);
reset.addEventListener("click", makeBoard, container);

function addColor(e) {
    e.target.style.backgroundColor = 'gray';
}

function clearBoard() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function makeBoard(board) {
    clearBoard();
    var size  = prompt("How many squares per side?");
    if(isNaN(size)) {
        return alert('Enter a number.')
    }
    for(var i=0;i<size*size; i++) {
        var square = document.createElement('div');
        square.classList.add('square');
        square.style.width = (100/size) + "%";
        square.style.height = (100/size) + "%";
        container.appendChild(square);
        square.addEventListener('mouseover', addColor);
    }
}
