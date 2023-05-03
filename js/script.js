//============================  Date  ==========================================================
// function createElement(value) {
//   const div = document.createElement("div")
//   div.className = "task"
//   div.innerHTML = `${value}`
//   return document.querySelector(".__container").append(div)
// }

//Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.
function holiday(value) {
  const div = document.querySelector(".task-date1")
  return (div.innerText = `1. Якщо працівник піде ${new Date().toLocaleDateString(
    "uk-UA"
  )} у відпустку то вийде на роботу ${new Date(
    value.setDate(value.getDate() + 56)
  ).toLocaleDateString("uk-UA")}
   `)
}
holiday(new Date())
//=======================================================================================================
// Задача 2 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
function yogrtProduct(year, month, day, normDay) {
  const div = document.querySelector(".task-date2")
  const currentDate = new Date()
  const dateManuf = new Date(year, month - 1, day)
  const date = new Date(dateManuf.setDate(dateManuf.getDate() + normDay))
  if (currentDate < date) div.innerText = `2.Цей йогурт можна пить`
  else div.innerText = `2. Цей йогурт порчений`
}
// ну или можно было ввести с промта значения
const year = 2023
const month = 4
const day = 28
const normDay = 10
const testYogrt = yogrtProduct(year, month, day, normDay)
//=======================================================================================================
//Задача 3. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
function getRandomArr(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
function createArr(count, min, max) {
  let newArr = []
  for (let i = 0; i < count; i++) {
    let num = getRandomArr(min, max)
    newArr.push(num)
  }
  return newArr
}
function sortArrBubble(arr) {
  let start = new Date()
  let exchanged
  do {
    exchanged = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
        exchanged = true
      }
    }
  } while (exchanged)
  let end = new Date()
  return end - start
}
function sortArrInsert(arr) {
	let start = new Date()
  for (let k = 1; k < arr.length; k++) {
    let currentElement = arr[k]
    let i = k - 1
    while (i >= 0 && arr[i] > currentElement) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = currentElement
  }
  let end = new Date()
  return end - start
}

let array = createArr(1000, 1, 800)
let array2 = createArr(1000, 1, 800)
let sortBubble = sortArrBubble(array)
const sortInsert = sortArrInsert(array2)
let div = document.querySelector(".task-date3")
div.innerHTML = `3. Сортування бульбашкою здійснено за <span>${sortBubble} мс</span><br> Сортування вставкою здійснено за <span>${sortInsert} мс</span>`

//=======================================================================================================
// Задача 4. Задаємо користувачу задачу з додавання двох чисел. Визначити скільки секунд було використано для розв’язання задачі.

function getSum(val1, val2) {
  const startTime = new Date()
  const userValue = parseInt(prompt(`Скільки буде 12 + 14 =`))
  let resultSum = val1 + val2
  const finishTime = new Date()
  const timeResult = (finishTime - startTime) / 1000
  if (userValue === resultSum)
    alert(`Ви відповіли правильно \n за ${timeResult}с`)
  else alert(`Ви дали неправильну відповідь \n за ${timeResult}с`)
}
document.getElementById("button").onclick = getSum

//=====================================  String  ========================================
function create(value) {
  const div = document.createElement("div")
  div.className = "task"
  div.innerHTML = `${value}`
  return document.querySelector(".__container").append(div)
}

//task 1
const strArr = ["Koly 896", "Hello world", "+3852 BMW", "Denis", "86 Ben"]
const newArr = strArr.filter((str) => /\d/g.test(str))
create(
  `Задача 1. Дано масив рядків. Вивести ті, у яких є цифри - <span>[${newArr}]</span> `
)

//=======================================================================================================
//task 2
const resArr = strArr.filter((str) => !/\d/g.test(str))
create(
  `Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр -  <span>[${resArr}]</span>`
)
//========================================================================================================
//task 3
const arrString = [
  "Koly",
  "gnb",
  "BMW",
  "Denis",
  "Ben",
  "Robert Deniro",
  "srt",
  "Mike",
]
const resArr2 = arrString.filter((el) => /[aouie]/g.test(el))
create(
  `Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери -  <span>[${resArr2}]</span>`
)
//=======================================================================================================
//task 4
const resArr3 = arrString.filter((el) => !/[aouie]/g.test(el))
create(
  `Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер. -  <span>[${resArr3}]</span>`
)
//=======================================================================================================
//task 5
const arrNum = ["67", "123", "819", "33", "90", "739", "Igor", "Jonny"]
const resArrNum = arrNum.filter((el) => /\d[13]/g.test(el))
create(
  `Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.-  <span>[${resArrNum}]</span>`
)
//=======================================================================================================
//task 6
const stringText = "Hello my Dear friend56. How much your bike9876"
if (stringText.match(/\d/g))
  create(
    `Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті -  <span>[${stringText.match(
      /\d/g
    )}]</span>`
  )
else
  create(
    `Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.- (<span>у цьому ряку немає цифр</span>)`
  )
//=======================================================================================================
//task 7
const strText = 'When I was in the beach.I saw big "Waves". Did you see my car?'
create(
  `Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано -  <span>[${strText.match(
    /[^\w\s]/g
  )}]</span>`
)
//=======================================================================================================
//task 8
const strText2 =
  "Lorem 214 'ipsum' dolor 30.04.2002 sit. Amet 65 consectetur: adipisicing, 28.05.1993elit!"
const resultStrText2 = strText2.match(/\b\w+\b\W\s\b/g)
create(
  `Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками. -  <span>[${resultStrText2}]</span>`
)
//=======================================================================================================
//task 9
const resultDate = strText2.match(/\d{2}.\d{2}.\d{4}/g)
create(
  `Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік). -  <span>[${resultDate}]</span>`
)
//=====================================================================================================
//task 10
const task10 = strText2.match(/\b\d{2}\b/g)
create(
  `Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку -  <span>[${task10.length}]</span>`
)
//=======================================================================================================
// task 11
const someText =
  "Determine whether a string 4142-3433-2323-3434 can be a bank card number? Find all such numbers: 1825-1598-3232-6565"
const task11 = someText.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
create(
  `Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери. -  <span>[${task11}]</span>`
)
//=======================================================================================================
// task 12
const domen = "http//verhovna-zrada.gov.ua"
const task12 = /gov/.test(domen)
create(
  `Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”) -  <span>[${task12}]</span>`
)
//=======================================================================================================
// task 13
const message =
  "In 2021 I only wanted to study in IT. In 2022 I had such opportunity. In 2023 I am studing. And I hope, in 2024 I will find 2031 a good job. In 2025 I will have big salary!))"
const task13 = message.match(/20[0-9][0-9]/g).filter((year) => year > 2021)
create(
  `Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення -  <span>[${task13}]</span>`
)
//=======================================================================================================
// task 14
const tel = "+380661066826"
const task14 = /\+38./g.test(tel)
create(
  `Задача 14.Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38») -  <span>[${task14}]</span>`
)
//=======================================================================================================
// task 15
const userName = prompt(`Введіть Ваше прізвище та ім’я`)
const task15 = userName.replace(" ", "-")
create(
  `Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс. -  <span>${task15}</span>`
)
//=======================================================================================================
// task 16
const userDate = prompt("Введіть дату у форматі «день.місяць.рік»")
const task16 = userDate.replaceAll(/\.|,/g, "/")
create(
  `Задача 16. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс. -  <span>${task16}</span>`
)
// =======================================================================================================
// task 17
const userDay = prompt(
  "Enter the weekday in nuber format (0-6) or sun,mon,tue,wed,thu,fri,sat"
)
let result
if (/0|6 | sun|sat/.test(userDay)) result = "Weekend"
else if (/[1-5] | mon|thu|/.test(userDay)) result = "Workday"
else throw new Error("inncorect day")
create(
  `Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним. -  <span>${result}</span>`
)
