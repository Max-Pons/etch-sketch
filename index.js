const container = document.querySelector(`.container`)
const btnBlack = document.createElement(`button`)
const btnEraser = document.createElement(`button`)
const btnRainbow = document.createElement(`button`)
const btnSize = document.createElement(`button`)
const buttonsContainer = document.querySelector(`.buttons`)

function createDivs(col, rows) {

        for (i = 0; i < (col * rows); i++) {
            const div = document.createElement(`div`)
            div.style.border = `1px dotted yellow`
            container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
            container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
            container.appendChild(div).classList.add(`box`)
        }
}

createDivs(3,3)


function blackColor() {
    const boxs = document.querySelectorAll(`.box`)
    btnBlack.textContent = `Black`
    btnBlack.addEventListener(`click`, () =>{
        boxs.forEach(box => box.addEventListener(`mouseover`, () =>{
            /* let Rnum = Math.floor(Math.random() * 255) */
            let Rnum = 0;
            box.style.border = `rgb(${Rnum},${Rnum},${Rnum})`
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add(`btn`)
}

function erase() {
    const boxs = document.querySelectorAll(`.box`)
    btnEraser.textContent = `Eraser`
    btnEraser.addEventListener(`click`, () =>{
        boxs.forEach(box => box.addEventListener(`mouseover`, () =>{
            box.style.border = `1px dotted yellow`
            box.style.background = `black`
        }))
    })

    buttonsContainer.appendChild(btnEraser).classList.add(`btn`)
} 

function rainbowMan() {
    const boxs = document.querySelectorAll(`.box`)
    btnRainbow.textContent = `Rainbow`
    btnRainbow.addEventListener(`click`, () =>{
        boxs.forEach(box => box.addEventListener(`mouseover`, () =>{
            let R = Math.floor(Math.random() * 255) 
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.border = `rgb(${R},${G},${B})`
            box.style.background = `rgb(${R},${G},${B}, ${20})`
        }))
    })

    buttonsContainer.appendChild(btnRainbow).classList.add(`btn`)
} 



function reSet() {
    const boxs = container.querySelectorAll(`.box`)
    boxs.forEach(box => box.remove())
}

function reSize() {
    btnSize.textContent = `size`;
    btnSize.addEventListener(`click`, () => {
        let user = prompt(`write the number of squares per side.(e.g. 16)
Max 64`)
            if (user < 1 || user === null || user > 64){
                reSet()
                createDivs(4, 4)
                blackColor() 
                erase()
                rainbowMan()
            }
            else {
                reSet()
                createDivs(user, user)
                blackColor() 
                erase()
                rainbowMan()
            }
    })
    buttonsContainer.appendChild(btnSize).classList.add(`btn`)
}
reSize()
blackColor() 
erase()
rainbowMan()
