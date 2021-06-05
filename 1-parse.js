// const date = new Date()
// const date = new Date('2021-01-28')

const date = new Date('2021-01-28')

const { DateTime } = require('luxon')

console.log('.now():', DateTime.now().toString())
console.log('.local():', DateTime.local(2021, 1, 28).toString())
console.log('.fromObject():', DateTime.fromObject({ year: 2021, month: 1 }).toString())
console.log('.fromISO():', DateTime.fromISO('2021-01-28T00:30:35').toString())
console.log('.fromFormat():', DateTime.fromFormat('9/2/2021', 'd/M/yyyy').toString())
console.log('.fromJSDate():', DateTime.fromJSDate(date).toString())
