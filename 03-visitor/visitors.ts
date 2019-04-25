//👋 Visitor Pattern

interface Visitor {
  visit(item: Visitable);
}

interface Visitable {
  accept(visitor: Visitor);
}

class Beer implements Visitable {
  brand: string
  price: number
  discountPrice: number
  constructor(brand: string, price: number) {
    this.brand = brand
    this.price = price
    this.discountPrice = price
  }
  public accept(visitor: Visitor) {
    visitor.visit(this)
  }

}

class Discount implements Visitor {
  visit(item: Beer) {

    switch(item.brand) { 
      case "Chouffe": { 
          item.discountPrice = item.price * 0.9 
          break; 
      } 
      case "Pale Ale": { 
          item.discountPrice = item.price * 1.0
          break; 
      } 
      case "IPA": { 
          item.discountPrice = item.price * 0.75
          break; 
      } 
      default: { 
          item.discountPrice = item.price * 1.0
          break; 
      } 
    } 

  }
}

class HappyHour implements Visitable {
  beers: Beer[] = []
  constructor(beers: Beer[]) {
    this.beers = beers
  }

  public accept(visitor: Visitor) {
    this.beers.forEach(beer => beer.accept(visitor))
  }
}

const list = new HappyHour([
  new Beer("Chouffe", 3.0), 
  new Beer("Pale Ale", 4.0), 
  new Beer("IPA", 5.0)
])

list.accept(new Discount())

console.log(list)

/*
HappyHour {
  beers:
   [ Beer { brand: 'Chouffe', price: 3, discountPrice: 2.7 },
     Beer { brand: 'Pale Ale', price: 4, discountPrice: 4 },
     Beer { brand: 'IPA', price: 5, discountPrice: 3.75 } ] }
*/