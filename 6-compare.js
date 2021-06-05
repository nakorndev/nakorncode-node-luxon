// const date1 = new Date('2021-01-28')
// const date2 = new Date('2021-01-30')

// console.log(Number(date1))
// console.log(Number(date2))
// console.log(date1 < date2)

const { DateTime } = require('luxon')

const date1 = DateTime.fromObject({ year: 2021, month: 1, day: 28 })
const date2 = DateTime.fromObject({ year: 2021, month: 8, day: 28 })

console.log(date1.equals(date2)) // date1 == date2
console.log(date1 < date2)
console.log(date1.day == date2.day)
// console.log(date1.hasSame(date2, 'day'))
