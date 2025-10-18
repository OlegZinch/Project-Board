const buttons = document.querySelectorAll('button')

// button.onclick = function() {}

const buttonClickHandler = (event) => {
  event.target.disabled = true
  console.log(event)
}

// button.onclick = buttonClickHandler

// button.addEventListener('click', buttonClickHandler)

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler)
// }, 2000)

buttons.forEach((btn) => {
  btn.addEventListener('click', buttonClickHandler)
})
