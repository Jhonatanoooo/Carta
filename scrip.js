const buttonNO = document.querySelector('#no')
const buttonYES = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  
]

buttonNO.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNO.textContent = messages[indexRandom]
})

buttonYES.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})