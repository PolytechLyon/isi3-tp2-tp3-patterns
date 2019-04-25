
class Beer {
  brand: string
  price: number
  constructor(brand: string, price: number) {
    this.brand = brand
    this.price = price
  }
}

interface HappyHourStrategy {
  discount: number
  calculateNewPrice(beer: Beer): number
}

class TenPercent implements HappyHourStrategy {
  // à compléter
}

class TwentyFivePercent implements HappyHourStrategy {
  // à compléter
}

class NoDiscount implements HappyHourStrategy {
  // à compléter
}

class PubWaiter {
  name: string
  strategy: HappyHourStrategy
  constructor(name: string) {
    this.name = name
    return this
  }

  useStrategy(strategy: HappyHourStrategy) {
    // à compléter
    return this
  }

  calculatePrice(beer: Beer) {
    // à compléter
  }
}

/* initialize strategy */
let noDiscount = new NoDiscount()
let tenPercent = new TenPercent()
let twentyFivePercent = new TwentyFivePercent()

/* initialize Beers */
let chouffe = new Beer("Chouffe", 3.0)
let paleAle = new Beer("Pale Ale", 4.0)
let ipa = new Beer("IPA", 5.0)

/* waiter */
let bob = new PubWaiter("Bob")

/* orders */
let paleAlePrice = bob.useStrategy(noDiscount).calculatePrice(paleAle)
let chouffePrice = bob.useStrategy(tenPercent).calculatePrice(chouffe)
let ipaPrice = bob.useStrategy(twentyFivePercent).calculatePrice(ipa)

if (paleAlePrice==4.0) { console.log("paleAlePrice ok") } else { console.log("paleAlePrice ko") }
if (chouffePrice==2.7) { console.log("chouffePrice ok") } else { console.log("chouffePrice ko") }
if (ipaPrice==3.75) { console.log("ipaPrice ok") } else { console.log("ipaPrice ko") }

