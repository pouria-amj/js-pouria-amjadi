const arr = []
const genrateObject = () =>{
    const randomNumber = Math.floor(Math.random()*1000)
    const words=['a','b','c','d']
    const randomWord= words[Math.floor(Math.random()*4)] +  words[Math.floor(Math.random()*4)] + words[Math.floor(Math.random()*4)] + words[Math.floor(Math.random()*4)] 
    const date= new Date(Math.floor(Math.random() * new Date().getTime()))
    return{
        randomNumber,randomWord,date
    }
}
const genrateArreyItem = () =>{
    arr.push(genrateObject())
}
console.log(genrateObject())
console.log(genrateObject())
console.log(genrateObject())