const container = document.querySelector("#container");

function makeGrid(parent, num){
    parent.innerHTML = '';
    for(let i=1;i<=num;i++){
        // Create a Row
        const row = document.createElement("div");
        parent.appendChild(row);
        row.classList.add("rows", "row_" + i);
        
        // Add cols to that Row
        for(let j=1;j<=num;j++){
            const col = document.createElement("div");
            row.appendChild(col);
            col.classList.add("cols","col_" + j);
        }
    }

    const boxes = document.querySelectorAll(".cols");

    boxes.forEach((box)=>{
        box.addEventListener("mouseenter", () => {
            if (!box.classList.contains("colored")) {
                box.classList.add("colored");
            }
        });
    })
}

let size = 16;
makeGrid(container, size);

const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    let userVal = prompt("Enter size of Grid - ");
    if(userVal>=0 && userVal<=100){
        size = userVal;
        makeGrid(container, size);
    }else{
        alert("Invalid Size; Set to default");
    }
});