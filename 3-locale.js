const { DateTime, Settings } = require('luxon')

const date = DateTime.now()
Settings.defaultLocale = 'th'

// console.log(date.toLocaleString({ ...DateTime.DATETIME_MED_WITH_WEEKDAY, locale: 'th' }))
console.log(date.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS))
