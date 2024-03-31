document.addEventListener('DOMContentLoaded', function () {
    const outputTop = document.querySelector('[data-top-answer]');
    const outputBottom = document.querySelector('[data-bottom-answer]');
    let currentOperand = '';
    let previousOperand = '';
    let operation = '';

    function clear(){
        currentOperand ='';
        previousOperand='';
        operation='';
        updateDisplay();
    }

    function appendNumber(number){
        if(number==='.'&& currentOperand.includes('.')) return;
        currentOperand += number;
        updateDisplay();
    }
    
    function chooseOperation(op){
        if(currentOperand ==='')return;
        if(previousOperand !==''){
            compute();
        }
        previousOperand = currentOperand;
        currentOperand= '';
        operation =op;
        updateDisplay();
    }
    function compute(){
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation= prev* current;
                break;
            case '/':
                computation= prev/current;
                break;
            default:
                return;    


        }
        currentOperand = computation;
        operation = '';
        previousOperand = '';
        updateDisplay();
    }
    function updateDisplay(){
        outputTop.innerText = currentOperand;
        outputBottom.innerText = previousOperand + ' ' +operation;
    }

    const numberButtons = document.querySelectorAll('[data-number]');
    const operationButtons = document.querySelectorAll('[data-operation]');
    const equalsButton = document.querySelector('[data-equals]');
    const clearButton = document.querySelector('[data-clear]');

    numberButtons.forEach(button => {
        button.addEventListener('click',() => {
            appendNumber( button.innerText);
        });
    });

    operationButtons.forEach( button =>{
      button.addEventListener('click',() => {
        chooseOperation(button.innerText);
    })
      })

    equalsButton.addEventListener('click',compute);

    clearButton.addEventListener('click',clear);
 })