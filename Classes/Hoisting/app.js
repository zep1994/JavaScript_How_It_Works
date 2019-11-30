sayHi()

class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine 
        this.color = color
    }

    carStats() {
        return `This car has ${this.doors}, ${this.engine}, and ${this.color}`
    }
}

const honda = new Car(4, 'v4', 'grey')

console.log(honda)
console.log(honda.carStats())

function sayHi() {
    console.log("hello")
}

// Funtions
// ARE hoisted 
// can be overwritten

//Classes 
// ARE NOT hoisted 
// cannot be overwritten 

