const { DateTime } = require('luxon')

const date = DateTime.now()

console.log('now:', date.toString())
console.log('+3 months:', date.plus({ months: 3 }).toString())
console.log('-3 months:', date.minus({ months: 3 }).toString())

console.log('+1 week:', date.plus({ week: 1 }).toString())
console.log('+1Q:', date.plus({ quarter: 1 }).toString())
