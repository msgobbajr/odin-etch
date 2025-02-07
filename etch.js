const containerDiv = document.getElementById("container");
const resetButton = document.getElementById("reset");

function getRandomColor () {
    tempNum = Math.floor(Math.random()*16777216)+1;
    hexNum = "#" + tempNum.toString(16);
    return hexNum;
}

function buildBoard (size) {
    for (let j = 0;j<size;j++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let i = 0;i<size;i++){
            const panel = document.createElement('div');
            panel.classList.add("panel");
            let hexNum = getRandomColor();
            panel.style.opacity = 0;
            panel.addEventListener('mouseover',()=> {
                panel.style.backgroundColor = hexNum;
                if (parseFloat(panel.style.opacity) < 1){
                    panel.style.opacity = parseFloat(panel.style.opacity) + 0.1;
                }
            });
            rowDiv.appendChild(panel);
        } 
        containerDiv.appendChild(rowDiv);
    }
}
buildBoard (16);
resetButton.addEventListener('click',()=> {
    let size = prompt("How large would you like the grid? (10-100)");
    if (size > 100) alert ("Too big!");
    else if (size < 10) alert ("Too small!");
    else if (size <=100 || size >10){
        while (containerDiv.firstChild){
            containerDiv.removeChild(containerDiv.firstChild);
        }
        buildBoard(size);
    }
    else alert("Not a number");
})