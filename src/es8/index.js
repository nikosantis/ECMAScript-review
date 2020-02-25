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

//

const helloWorld = () => {
  return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Error'))
  })
}

const helloAsync = async () => {
  console.log('Pre Hello')
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()


const anotherFunction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()
