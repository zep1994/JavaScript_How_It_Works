class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine 
        this.color = color
    }

    carStats() {
        return `This car has ${this.doors}, ${this.engine}, and ${this.color}`
    }


    //will not be available the instance of the Car
    static totalCarDoors(car1, car2) {
        const doors1 = car1.doors 
        const doors2 = car2.doors 

        return doors1 + doors2
    }
}

const honda = new Car(4, 'v4', 'grey')
const gmc = new Car(4, 'v4', 'blue')



console.log(honda)
console.log(honda.carStats())
console.log(gmc)
console.log(gmc.carStats())
console.log(Car.totalCarDoors(honda, gmc))

// Static methods are used when the function will not matter to a specific instance of the class