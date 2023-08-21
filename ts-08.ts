type contantProps ={
text: string | number
}
const textInput = document.querySelector<HTMLInputElement>("#textMessage")
const submitButton = document.querySelector("button")
submitButton?.addEventListener("click" , () =>{
console.log(textInput?.value)

})