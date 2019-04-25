class Component {
  constructor() {}
  operation() {}
  add (component) {}
}

class Leaf extends Component {
  constructor(name) {
    super()
    this.name = name
    console.log(`Leaf ${name} created`)
  }

  operation (){
    console.log(`operation -> ${this.name}`)
  }
}

class Composite extends Component {
  constructor(name) {
    super()
    this.name = name
    this.children = []
    console.log(`Composite ${name} created`)
  }

  operation() {
    console.log('Composite Operation for: ' + this.name)
    this.children.forEach(element => {
      element.operation()
    })
  }

  add(component) {
    this.children.push(component)
  }

}

let sandwich = new Composite('pain')

let garniture = new Composite('garniture')

garniture.add(new Leaf('salade'))
garniture.add(new Leaf('tomate'))
garniture.add(new Leaf('oignons'))
//garniture.add(new Leaf('veau'))
garniture.add(new Leaf('steak soja'))

sandwich.add(garniture)
sandwich.operation()
