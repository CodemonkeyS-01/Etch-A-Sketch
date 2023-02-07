document.addEventListener("DOMContentLoaded",()=>{
    generate(16, 16)
} 
)


function generate(x,y){
    const num = x*y
    gridcontainer = document.querySelector(".gc")
    for (let i = 0; i < num; i++) {
        grid = document.createElement('div')
        grid.className = "grid"
        grid.dataset.color = "red"
        gridcontainer.appendChild(grid)            
    }
    
    

}


