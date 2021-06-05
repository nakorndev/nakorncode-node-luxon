const { DateTime } = require('luxon')

const date = DateTime.now()

console.log('.toString():', date.toString())
console.log('.toISO():', date.toISO())
console.log('.toISODate():', date.toISODate())
console.log('.toISOTime():', date.toISOTime())
console.log('.toMillis():', date.toMillis()) // unix
console.log('.toObject():', date.toObject())
console.log('.toJSDate():', date.toJSDate())

console.log(date.toFormat('วัน cccc วันที่ d'))

console.log('date.year:', date.year)
console.log('date.month:', date.month)
console.log('date.day:', date.day)
console.log('date.weekday:', date.weekday)
console.log('date.hour:', date.hour)
console.log('date.minute:', date.minute)
console.log('date.second:', date.second)
console.log('date.millisecond:', date.millisecond)
