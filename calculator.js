const buttons = document.querySelectorAll(".buttons button")
const screen = document.querySelector(".screen")
const minus = document.querySelector('.minus')
let number1 = null;
let number2 = null;
let operator = null;
let is_result = false;

const operations = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => a - b,
    '×': (a, b) => +a * +b,
    '÷': (a, b) => Math.round((a / b) * 1000) / 1000,
    '%': (a,b) => a * (b/100)
};

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('mousedown', () => buttons[i].classList.add('holding'))
    buttons[i].addEventListener('mouseup', () => buttons[i].classList.remove('holding'))
    if(String(parseFloat(buttons[i].textContent)) === buttons[i].textContent){
        buttons[i].addEventListener('click', (event) => addNumber(event.target.textContent))
    }
    if(buttons[i].textContent === 'CE'){
        buttons[i].addEventListener('click', clear)
    }
    if(buttons[i].textContent === '±'){
        buttons[i].addEventListener('click', reverse) 
    }

    if(buttons[i].classList.contains('operator')){
        buttons[i].addEventListener('click', (event) => operation(event.target.textContent))
    }

    if(buttons[i].textContent === '='){
        buttons[i].addEventListener('click', equals)
    }
    if(buttons[i].textContent === '←'){
        buttons[i].addEventListener('click', backspace)
    }
    // if(buttons[i].textContent === '%'){
    //     buttons[i].addEventListener('click', percent)
    // }
    if(buttons[i].textContent === '.'){
        buttons[i].addEventListener('click', comma)
    }
}

function reverse(){
    screen.textContent = String(parseFloat(screen.textContent) * (-1))
}

function percent(){
    if (screen.textContent){screen.textContent = parseFloat(screen.textContent) / 100}
}
function clear(){
    screen.textContent = '';
    number1 = null;
    number2 = null;
    operator = null;
    is_result = false;
}
function comma(){
    if (!screen.textContent.split('').includes('.')){screen.textContent += '.'}
    
}

function backspace(){
    let screenArr = screen.textContent.split('');
    console.log(screen.textContent)
    screen.textContent = screenArr.splice(0, screenArr.length - 1).join('')
    console.log(screen.textContent)
}
function operation(button){
    if (operator === null){
        operator = button;
    }
    
    if (screen.textContent){
        if (number1 === null){
            number1 = parseFloat(screen.textContent)
            screen.textContent = ''
        }
        else if (is_result){
            number1 = parseFloat(screen.textContent)
            screen.textContent= ''
            operator = button;
        }
        else{
            number2 = parseFloat(screen.textContent);
            console.log(number1,number2,operator)
            result = operations[operator](number1, number2)
            screen.textContent = result;
            number1 = result;
            number2 = null;
            is_result = true;}
        }
    operator = button;
    }
    



function equals(){
    let screenArr = screen.textContent.split('')
    if (screenArr[screenArr.length - 1 ] === '.'){
        return
    }
    if(screen.textContent && number1 && operator){
        screen.textContent = operations[operator](number1, screen.textContent);
        number2 = null;
        number1 = screen.textContent;
        operator = null;
        is_result= true;
    }
    
}
function addNumber(whatNumber){
    if (screen.textContent.length === 0 && whatNumber === '0'){
        console.log(screen.textContent.length)
        return
    }
    if(screen.textContent.length < 18){
        if (!is_result){screen.textContent += whatNumber}
        else if (operator === null){
        screen.textContent = whatNumber;
        is_result = false;
        number2 = null;
        number1 = null;
        }
        else{
            screen.textContent += whatNumber;
        }}
    
}