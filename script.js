// Написать функцию, которая создаст очереди в следующем порядке:
// 1. Задача
//  1. микрозадача
//  2. Рендер задача (например, изменение стилей)

// 2. Задача
//  1. микрозадача
//  2. микрозадача

// 3. Задача
//  1. микрозадача
//  2. Рендер задача (например изменение содержание элемента)

function eventLoopPractice() {
  const square = document.querySelector('.square')

  setTimeout(() => {
    Promise.resolve().then(() => console.log(1))
    requestAnimationFrame(() => square.classList.add('red_square'))
  }, 1000)

  setTimeout(() => {
    Promise.resolve().then(() => console.log(2))
    queueMicrotask(() => console.log(3))
  }, 2000)

  setTimeout(() => {
    Promise.resolve().then(() => console.log(4))
    requestAnimationFrame(() =>
      square.insertAdjacentHTML('afterbegin', '<h1>Привет</h1>')
    )
  }, 3000)
}

eventLoopPractice()

// Реализовать клон функции map (отдельная функция или прототип для массивов на ваше усмотрение)
function almostMap(originalArray, callback) {
  const modifiedArray = []
  originalArray.forEach((item, index, arr) => {
    const res = callback(item, index, arr)
    modifiedArray.push(res)
  })
  return modifiedArray
}

const array = [1, 2, 3]
const callback = (item, index, array) => {
  return `Index: ${index}, item: ${item}, array: ${array}`
}

const example = almostMap(array, callback)
console.log(example)
