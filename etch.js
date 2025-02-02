const containerDiv = document.getElementById("container");
for (let j =0;j<16;j++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let i =0;i<16;i++){
        const panel = document.createElement('div');
        panel.classList.add("panel");
        panel.addEventListener('mouseover',()=> {
            panel.style.backgroundColor = 'white';
        });
        rowDiv.appendChild(panel);
    } 
    containerDiv.appendChild(rowDiv);
}