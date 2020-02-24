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

// newFunction2()
// newFunction2('Angie', 32, 'Chile')

//

let hello = 'Hello'
let world = 'World'

let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

let epicPhrase2 = `[Template Literals] ${hello} ${world}`
console.log(epicPhrase2)