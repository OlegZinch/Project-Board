const intervalId = setInterval(() => {
  console.log('Sendinding analytics data...')
}, 2000)

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId)
})
