function Cat(name) {
    this.name = name
    this.sound = "Meow"
    this.makeSound = function () {
        console.log(this.sound)
    }
}

function ArrowCat(name) {
    this.name = name
    this.sound = "meow"
    this.makeSound= () => console.log(this.sound)

}


const cat = new Cat("Fluffy")
cat.makeSound()


window.makeSoundInGlobalScope = cat.makeSound
window.makeSoundInGlobalScope() // undefined because of global scope

const arrowCat = new ArrowCat("Fluf")
arrowCat.makeSound()

window.arrowMakeSoundInGlobalScope = arrowCat.makeSound
window.arrowMakeSoundInGlobalScope()


// FUNKCJE STRZAŁKOWE NIE MOGĄ BYĆ KONSTRUKTORAMI !!!

// ARROW FUNCTION CAN't BE CONSTRUCTOR FUNCTION