function sum (number1, operator, number2){
if ( !isNaN(number1+number2)){
switch(operator){
case "+":
    return(number1 + number2)
    case "-":
        return(number1 - number2)
        case "*":
    return(number1 * number2)
    case "/":
    return(number1 / number2)
default:
    return(`somthing is wrong!`)
}
}
}
