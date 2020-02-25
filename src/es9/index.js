const obj = {
  name: 'nikolas',
  age: 31,
  country: 'CL'
}

let { name, ...all } = obj
console.log(name, all)


let { country, ...foo } = obj
console.log(foo)

//

const obj2 = {
  name: 'Nikolas',
  age: 31
}

const obj3 = {
  ...obj2,
  country: 'CL'
}

console.log(obj3)

//

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 2000)
      : reject(new Error('Test Error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó'))


//

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
console.log(match)

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)