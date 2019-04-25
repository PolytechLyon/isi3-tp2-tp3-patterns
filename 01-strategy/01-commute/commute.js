
// strategy
class Vehicle {
  travelTime() {
    return this.duration
  }
}

// strategy 1
class Bus extends Vehicle {
  constructor() {
    super()
    this.duration = 10
  }
}

// strategy 2
class Taxi extends Vehicle {
  constructor() {
    super()
    this.duration = 5
  }
}

// strategy 3
class Bike extends Vehicle {
  constructor() {
    super()
    this.duration = 45
  }
}

// encapsulation
class Commute {
  constructor(name) {
    this.name = name
    return this
  }
  useStrategy(strategy) {
    this.strategy = strategy
    return this
  }

  getTravelTime() {
    return this.strategy.travelTime()
  }

}

// usage
const commute = new Commute()

console.log(commute.useStrategy(new Taxi()).getTravelTime())
console.log(commute.useStrategy(new Bus()).getTravelTime())
console.log(commute.useStrategy(new Bike()).getTravelTime())