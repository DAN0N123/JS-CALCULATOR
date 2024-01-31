const buttons = document.querySelectorAll(".buttons button")
const screen = document.querySelector(".screen")
const minus = document.querySelector('.minus')
for (let i = 0; i < buttons.length; i++){
    if(String(parseInt(buttons[i].textContent)) === buttons[i].textContent){
        buttons[i].addEventListener('click', (event) => addNumber(event.target.textContent))
    }
    if(buttons[i].textContent === 'CE'){
        buttons[i].addEventListener('click', () => screen.textContent = '')
    }
    if(buttons[i].textContent === '±'){
        buttons[i].addEventListener('click', reverse) 
    }
}

function reverse(){
    screen.textContent = String(parseInt(screen.textContent) * (-1))
}

function addNumber(whatNumber){
    screen.textContent += whatNumber
}