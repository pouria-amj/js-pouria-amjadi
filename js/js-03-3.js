function sum() {
    const firstNumber = +prompt(`enter first number`)
    const secondNumber = +prompt(`enter second number`)
    const thirdNumber = +prompt(`enter third number`)
    const fourthNumber = +prompt(`enter fourth number`)
    const fifthNumber = +prompt(`enter fifth number`)
    const operator = prompt(`operator`)
    if (isNaN(firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber))
console.log(`format is wrong!`)
else{
    switch(operator){
    case `+`:    
        return(firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber)
            default:      
            return(`operator is wrong`)
}
}

}

console.log(sum() / 5)