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
