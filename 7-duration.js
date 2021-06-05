const { DateTime, Duration } = require('luxon')
const humanizeDuration = require('humanize-duration')
const thaiHumanizer = humanizeDuration.humanizer({
  language: 'th'
})

const now = DateTime.now()
const date = now.plus({ hours: 2 })

console.log(thaiHumanizer(date.diff(now).valueOf()))

const oneHour = Duration.fromObject({ hour: 1 })
console.log(thaiHumanizer(oneHour.valueOf()))
