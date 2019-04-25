// strategy
interface Vehicle {
  duration: number
  travelTime(): number
}

// strategy 1
class Bus implements Vehicle {
  duration: number = 10
  travelTime(): number {
    return this.duration
  }
}

// strategy 2
class Taxi implements Vehicle {
  duration: number = 5
  travelTime(): number {
    return this.duration
  }
}

// strategy 3
class Bike implements Vehicle {
  duration: number = 45
  travelTime(): number {
    return this.duration
  }
}

// encapsulation
class Commute {
  name: string
  strategy: Vehicle
  constructor(name: string) {
    this.name = name
    return this
  }

  useStrategy(strategy: Vehicle) {
    this.strategy = strategy
    return this
  }

  getTravelTime(): number {
    return this.strategy.travelTime()
  }
}

// usage
let commute = new Commute("transportation")

console.log(commute.useStrategy(new Taxi()).getTravelTime())
console.log(commute.useStrategy(new Bus()).getTravelTime())
console.log(commute.useStrategy(new Bike()).getTravelTime())