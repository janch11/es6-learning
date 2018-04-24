console.log('Hello ES6')

//LET vs VAR

for (var i =0; i < 3; i++){
    console.log(i)
}
console.log("after" + i)


for (let j =0; j < 3; j++){
    console.log(j)
}


// j is not in this scope beacause let has block scope
// console.log("after" + j)

// We don't have GLOBAL SCOPE in webpack, we must write window !!!

window.i = "ala ma kota"
console.log(window.i)


// Redeclaration

var name1 = "Marry"
var name1 = "Stary"



//No redeclaration in let
// let name2 = "Marry"
// let name2 = "Stary"


function abcd () {
    x = 2
    var x // go to top of scope
    console.log(x)
}
abcd()

function abc () {
    x = 2
    let x //hosisting, not go to top of scope !!!
    console.log(x)
}
abc()

/// Const

let number = 1
number = 2
number = 3
number = 4
number = 5
number = 6


const number2 = 1
// number2 = 2 //Error !!!!!
// number2 = 3
// number2 = 4
// number2 = 5


const name = "Jan"
const helloTxt = `Hello ${name}!`
console.log(helloTxt)

const isGreenFavourite = true

console.log(
    `My favourite color is ${isGreenFavourite ? '' : 'not'} green`
)

// ARROW FUNCTION

const addOne  = (a) => {
    return a+1
}

console.log(addOne(2))




const addOneV2 = a => {
    return a +1
}
console.log(addOneV2(2))




const  addOneV3 = a => a+1
console.log(addOneV3(2))







