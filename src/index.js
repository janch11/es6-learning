function Counter() {
    this.count = 0
    setInterval((function () {

            this.count++
        }).bind(this)
        , 1000
    )
}


function ArrowCounter() {
    this.count = 0

    setInterval(() => {

            this.count++
        }
        , 1000
    )
}


window.counter = new Counter()


window.arrowCounter = new ArrowCounter()


//
// function ArrowCat(name) {
//     this.name = name
//     this.sound = "meow"
//     this.makeSound= () => console.log(this.sound)
//
// }
//
//
// const cat = new Cat("Fluffy")
// cat.makeSound()
//
//
// window.makeSoundInGlobalScope = cat.makeSound
// window.makeSoundInGlobalScope() // undefined because of global scope
//
// const arrowCat = new ArrowCat("Fluf")
// arrowCat.makeSound()
//
// window.arrowMakeSoundInGlobalScope = arrowCat.makeSound
// window.arrowMakeSoundInGlobalScope()
//
//
// // FUNKCJE STRZAŁKOWE NIE MOGĄ BYĆ KONSTRUKTORAMI !!!
//
// // ARROW FUNCTION CAN't BE CONSTRUCTOR FUNCTION