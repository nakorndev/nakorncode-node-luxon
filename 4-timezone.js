const { DateTime, Settings } = require('luxon')

Settings.defaultZoneName = 'UTC+3'
Settings.defaultOutputCalendar = 'buddhist'
Settings.defaultLocale = 'th'
const date = DateTime.now()

console.log('date.offset:', date.offset / 60)
console.log('date.zoneName:', date.zoneName)
console.log('date.toString():', date.toString())

// console.log(date.setZone('UTC+3').toString())
