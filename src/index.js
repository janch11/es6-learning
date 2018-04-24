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