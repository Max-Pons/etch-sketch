const container = document.querySelector(`.container`)
const btnBlack = document.querySelector(`#black`)
const btnEraser = document.querySelector(`#eraser`)
const btnRainbow = document.querySelector(`#rainbow`)
const btnSize = document.querySelector(`#size`)
const btnColor = document.querySelector(`#color`)
const buttonsContainer = document.querySelector(`.buttons`)

let choice = 2;
let sizeChoice = choice;

function createDivs(col = sizeChoice, rows = sizeChoice) {

        for (i = 0; i < (col * rows); i++) {
            const div = document.createElement(`div`)
            div.style.border = `1px white dotted`;
            container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
            container.appendChild(div).classList.add(`box`);
        }


}
function size() {
    

        if (choice === 2) {
            
            return(3);
           
        }

        else if (choice === 3) {
       
            return(4);
        }
        
        else if (choice === 4) {
                
            return(8);
        }
        
        else if (choice === 8) {
                       
            return(12);
        }   
        else if (choice === 12) {
                       
            return(16);
        }   
        else if (choice == 16) {
                       
            return(2);
        }   
        
}







function blackColor() {
    const boxs = document.querySelectorAll(`.box`)
        btnBlack.addEventListener(`click`, () =>{
            boxs.forEach(box => box.addEventListener(`mouseover`, () =>{
                box.style.border = `0`;
                box.style.background = `black`;
        }))
        })

    }

function erase() {
    const boxs = document.querySelectorAll(`.box`)
        btnEraser.addEventListener(`click`, () =>{
            boxs.forEach(box => box.addEventListener(`mouseover`, () =>{
                box.style.border = `1px dotted white`
                box.style.background = `black`
        }))
        })
    }    

function rainbowMan() {
    const boxs = document.querySelectorAll(`.box`)
        btnRainbow.addEventListener(`click`, () =>{
            boxs.forEach(box => box.addEventListener(`mouseover`, () =>{
                let R = Math.floor(Math.random() * 255) 
                let G = Math.floor(Math.random() * 255)
                let B = Math.floor(Math.random() * 255)
                box.style.border = `rgb(${R},${G},${B})`
                box.style.background = `rgb(${R},${G},${B}, ${10})`
        }))
        })
    } 



function reSet() {
    const boxs = container.querySelectorAll(`.box`)
    boxs.forEach(box => box.remove())
}

function reSize() {
    btnSize.addEventListener(`click`, () => {

        reSet()
        choice = size();
        sizeChoice = choice;
        createDivs();
        blackColor();
        rainbowMan()
        erase(); 
        })
 
}

reSize();
createDivs();
blackColor();
rainbowMan()
erase();





