const numberButtons= document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons= document.querySelector('[data-equals]')
const ACButtons = document.querySelector('[data-clear]')
const topAnswerAndTextElement = document.querySelector('[data-top-answer]')
const bottomAnswerAndTextElement = document.querySelector('[data-bottom-answer ]')

class Calculator{
    constructor( topAnswerAndTextElement,bottomAnswerAndTextElement ){
        this.topAnswerAndTextElement= topAnswerAndTextElement
        this.bottomAnswerAndTextElement= bottomAnswerAndTextElement
        this.clear()
    }
}
clear(){
    this.topAnswer=''
    this.bottomAnswer=''
    this.operation = undefined

}

attachNumberToOutput(number){
    if (number === '.' && this.bottomAnswer.includes('.')) return
    this.bottomAnswer = this.bottomAnswer.toString() + number.toString()

}

selectOperation(operation){
    this.operation = operation
    this.topAnswer =this.bottomAnswer
    this.bottomAnswer=''

}
Computed(){

}
update (){
    this.topAnswerAndTextElement.innertext = this.bottomAnswerAnswer
    this.topAnswerAndTextElement.innertext = this.topAnswer

}



const calculator = new Calculator(topAnswerAndTextElement,bottomAnswerAndTextElement)

numberButtons.forEach(button=> {
     button.addEventListener('click',() => {
       calculator.attachNumberToOutput(button.innertext)
       calculator.update()
     })
    })

    operationButtons.forEach(button=> {
        button.addEventListener('click',() => {
          calculator.selectOperation(button.innertext)
          calculator.update()
        })
       })