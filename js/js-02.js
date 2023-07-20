const firstNumber = +prompt(`enter first number`)
const operator = prompt(`operator`)
const secondNumber = +prompt(`enter second number`)

if (isNaN(firstNumber) || isNaN(secondNumber)){
    console.log(`firstNumber or secondNumber wrong!`)

}
if (operator === `+`){
    console.log(firstNumber + secondNumber)
}
if (operator === `-`){
    console.log(firstNumber - secondNumber)
}
if (operator === `*`){
    console.log(firstNumber * secondNumber)
}
if (operator === `/`){
    console.log(firstNumber / secondNumber)
}