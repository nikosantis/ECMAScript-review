const data = {
  frontend: 'Nikolas',
  backend: 'Angie',
  designer: 'Perro'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//

const data2 = {
  frontend: 'Nikolas',
  backend: 'Angie',
  designer: 'Perro'
}

const values = Object.values(data2)
console.log(values)
console.log(values.length)

//

const string = 'Hello'
console.log(string.padStart(7, 'My'))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))

//

const obj = {
  name: 'Nikolas',
}