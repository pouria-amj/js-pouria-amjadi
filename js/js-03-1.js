function sum() {
    const firstNumber = +prompt(`enter first number`)
    const operator = prompt(`operator`)
    const secondNumber = +prompt(`enter second number`)
    if (isNaN(firstNumber + secondNumber))
console.log(`format is wrong!`)
else{
    switch(operator){
    case `+`:    
        return(firstNumber + secondNumber)
    case `-`:      
    return(firstNumber - secondNumber)
        case `*`:      
        return(firstNumber * secondNumber)
            case `/`:  
            return(firstNumber / secondNumber)
            default:      
            return(`operator is wrong`)
}
}
}
console.log(sum())

