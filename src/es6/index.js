function newFunction (name, age, country) {
  var name = name || 'Nikolas'
  var age = age || 31
  var country = country || 'Chile'
  console.log(name, age, country)
}

// es6
function newFunction2 (
  name = 'Nikolas',
  age = '31',
  country = 'Chile'
) {
  console.log(name, age, country)
}

newFunction2()
newFunction2('Angie', 32, 'Chile')

//

let hello = 'Hello'
let world = 'World'

let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// es6

let epicPhrase2 = `[Template Literals] ${hello} ${world}`
console.log(epicPhrase2)

//

let lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit aenean. \n'
+ 'otra frase épica que necesitamos'


// es6

let lorem2 = `Otra frase épica que necesitamos.
Ahora es otra frase épica.
`

console.log(lorem)
console.log(lorem2)

//

let person = {
  'name': 'Nikolas',
  'age': 31,
  'country': 'CL'
}

console.log(person.name, person.age, person.country)

// es6

let { name, country } = person

console.log('[ES6]', name, country)

//

let team1 = ['Nikolas', 'Angie', 'Perro']
let team2 = ['Harry', 'Ron', 'Hermione']

let school = ['Dumbledore', 'Nikolas', 'Angie', 'Perro', 'Harry', 'Ron', 'Hermione']

// es6

let education = ['Dumbledore', ...team1, ...team2]

console.log(education)

//

{
  var globalVar = 'Global Var'
}

{
  let globalLet = 'Global Let'
  console.log(globalLet)
}

console.log(globalVar)
// console.log(globalLet) error

//

const a = 'b'
a = 'a'
console.log(a)


//

let name = 'Nikolas'
let age = 31

obj = { name: name, age: age }

console.log(obj)

// es6
obj2 = { name, age }

console.log(obj2)

//

const names = [
  { name: 'Nikolas', age: 31 },
  { name: 'Angie', age: 32 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name)
})

// es6

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
  // ...
}

const listOfNames4 = name => {
  // ...
}

const square = num => num * num

// es6 promises

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Ups!!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('[OK]'))
  .catch(error => console.log(error))

// es6

class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }

  sum (valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new calculator()
console.log('[RES]', calc.sum(2, 3))


// es6

import helloWorld from './moduleJS';
console.log(helloWorld);

function* helloWorld2 () {
  if (true) {
    yield 'Hello, wtf'
  }
  if (true) {
    yield 'World, wtf'
  }
}

const generatorHello = helloWorld2()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)