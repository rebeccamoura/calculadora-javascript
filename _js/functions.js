const q = element => document.querySelector(element)
const qAll = elements => document.querySelectorAll(elements)

let showScreen = ''
let firstNumber = ''
let secondNumber = ''
let operation
let result
const mathOperations = {
    addition: function(a, b) {
        result = Number(a) + Number(b)
    }, subtraction: function(a, b) {
        result = Number(a) - Number(b)
    }, multiplication: function(a, b) {
        result = Number(a) * Number(b)
    }, division: function(a, b) {
        result = Number(a) / Number(b)
    }

}

function changeTheme(theme) {
    
    switch(theme) {
        case '1':
            q('body').style.backgroundColor = 'hsl(222, 26%, 31%)'
            q('header h1').style.color = 'white'
            q('label[for="choose-theme"]').style.color = 'white'
            q('div.calculator-screen').style.backgroundColor = 'hsl(224, 36%, 15%)'
            q('div.calculator-keyboard').style.backgroundColor = 'hsl(223, 31%, 20%)'
            // normal
            qAll('button').forEach(button => button.style.backgroundColor = 'hsl(30, 25%, 89%)')
            qAll('button').forEach(button => button.style.color = 'hsl(221, 14%, 31%)')
            qAll('button').forEach(button => button.style.boxShadow = '0px 2px hsl(28, 16%, 65%)')

            //calculate
            q('button.calculateBtn').style.backgroundColor = 'hsl(6, 63%, 50%)'
            q('button.calculateBtn').style.color = 'white'
            q('button.calculateBtn').style.boxShadow = '0px 2px hsl(6, 70%, 34%)'

            //reset and del
            q('button.deleteBtn').style.color = 'white'
            q('button.resetBtn').style.color = 'white'
            q('button.deleteBtn').style.backgroundColor = 'hsl(225, 21%, 49%)'
            q('button.resetBtn').style.backgroundColor = 'hsl(225, 21%, 49%)'
            q('button.deleteBtn').style.boxShadow = '0px 2px hsl(224, 28%, 35%)'
            q('button.resetBtn').style.boxShadow = '0px 2px hsl(224, 28%, 35%)'
            q('div.calculator-screen p').style.color = 'white'

            break
        case '2':
            q('body').style.backgroundColor = 'hsl(0, 0%, 90%)'
            q('header h1').style.color = 'hsl(60, 10%, 19%)'
            q('label[for="choose-theme"]').style.color = 'hsl(60, 10%, 19%)'
            q('div.calculator-screen').style.backgroundColor = 'hsl(0, 0%, 93%)'
            q('div.calculator-keyboard').style.backgroundColor = 'hsl(0, 5%, 81%)'
            //normal
            qAll('button').forEach(button => button.style.backgroundColor = 'hsl(45, 7%, 89%)')
            qAll('button').forEach(button => button.style.color = 'hsl(221, 14%, 31%)')
            qAll('button').forEach(button => button.style.boxShadow = '0px 2px hsl(28, 16%, 65%)')

            //calculate
            q('button.calculateBtn').style.backgroundColor = 'hsl(25, 98%, 40%)'
            q('button.calculateBtn').style.color = 'white'
            q('button.calculateBtn').style.boxShadow = '0px 2px hsl(25, 99%, 27%)'

            //reset and del
            q('button.deleteBtn').style.color = 'white'
            q('button.resetBtn').style.color = 'white'
            q('button.deleteBtn').style.backgroundColor = 'hsl(185, 42%, 37%)'
            q('button.resetBtn').style.backgroundColor = 'hsl(185, 42%, 37%)'
            q('button.deleteBtn').style.boxShadow = '0px 2px hsl(185, 58%, 25%)'
            q('button.resetBtn').style.boxShadow = '0px 2px hsl(185, 58%, 25%)'

            q('div.calculator-screen p').style.color = 'hsl(221, 14%, 31%)'

            break
        case '3':
            q('body').style.backgroundColor = 'hsl(268, 75%, 9%)'
            q('header h1').style.color = 'hsl(52, 100%, 62%)'
            q('label[for="choose-theme"]').style.color = 'hsl(52, 100%, 62%)'
            q('div.calculator-screen').style.backgroundColor = 'hsl(268, 71%, 12%)'
            q('div.calculator-keyboard').style.backgroundColor = 'hsl(268, 71%, 12%)'

            // Normal Buttons
            qAll('button').forEach(button => button.style.backgroundColor = 'hsl(268, 47%, 21%)')
            qAll('button').forEach(button => button.style.color = 'hsl(52, 100%, 62%)')
            qAll('button').forEach(button => button.style.boxShadow = '0px 2px hsl(290, 70%, 36%)')

            // Enter button
            q('button.calculateBtn').style.backgroundColor = 'hsl(176, 100%, 44%)'
            q('button.calculateBtn').style.color = 'hsl(221, 14%, 31%)'
            q('button.calculateBtn').style.boxShadow = '0px 2px hsl(177, 92%, 70%)'


            // Reset and Del buttons
            q('button.deleteBtn').style.color = 'white'
            q('button.resetBtn').style.color = 'white'
            q('button.deleteBtn').style.backgroundColor = 'hsl(281, 89%, 26%)'
            q('button.resetBtn').style.backgroundColor = 'hsl(281, 89%, 26%)'

            q('div.calculator-screen p').style.color = 'hsl(52, 100%, 62%)'

            break
    }

}

function callTheme(event) {
    changeTheme(event.target.value)
}

function calculate(operation) {
    switch(operation) {
        case '+':
            mathOperations.addition(firstNumber, secondNumber)
            break
        case '-':
            mathOperations.subtraction(firstNumber, secondNumber)
            break
        case 'x':
            mathOperations.multiplication(firstNumber, secondNumber)
            break
        case '/':
            mathOperations.division(firstNumber, secondNumber)
            break
    }
}

function getKey(event) {
    switch(event.target.innerHTML) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            //se operation estiver vazio, concatena com o firstNumber, caso não, concatena com o secondNumber.
            if (operation === undefined) {
                firstNumber += event.target.innerHTML
            } else {
                secondNumber += event.target.innerHTML
            }

            if (showScreen == result) {
                showScreen = `${showScreen}${operation}${secondNumber}`
            } else if (showScreen == '0') {
                showScreen = ''
                showScreen += event.target.innerHTML
            } else {
                showScreen += event.target.innerHTML
            }
            //showScreen += event.target.innerHTML

            break
        case '+':
        case '-':
        case 'x':
        case '/':
            // preencher operation
            if (secondNumber === '') {
                operation = event.target.innerHTML
                showScreen += event.target.innerHTML
            } else {
                calculate(operation)
                firstNumber = result
                secondNumber = ''
                operation = event.target.innerHTML
            }
            break
        case '=':

            if (operation != undefined) {
                calculate(operation)
                firstNumber = result // na vdd, ele vai receber o RESULTADO e não o secondNumber
                //Caso o enter seja apertado e não tenha secondNumber, ele soma o resultado com o secondNumber anterior. É preciso saber o último operation e o último secondNumber para calcular.
                secondNumber = ''
                showScreen = String(result)
            }

            //calcula e limpa operation.

            // caso algum dos numeros estejam vazios nas operaçoes, preencher na função de cada operação.
            break
        case 'Del':

            if (secondNumber === '') {
                firstNumber = ''
                showScreen = '0'
            } else {
                secondNumber = ''
                showScreen = `${firstNumber}${operation}`
            }
            break
        case 'Reset':
            firstNumber = ''
            secondNumber = ''
            operation = undefined
            result = undefined
            lastNumber = undefined
            showScreen = '0'
            break
    }

    q('div.calculator-screen p').innerHTML = showScreen

    console.log(`First Number: ${firstNumber}; Second NumbeR: ${secondNumber}; Operation: ${operation}`)
}