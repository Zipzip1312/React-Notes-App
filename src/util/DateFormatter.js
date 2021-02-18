/* eslint-disable no-unused-vars */
const DateFormatter = (dateToFormat) => {
  const date = new Date(dateToFormat)
  const [dayName, monthName, dayNumber, fullYear] = date
    .toDateString()
    .split(' ')

  return monthName + ' ' + dayNumber + ', ' + fullYear
}

export default DateFormatter
