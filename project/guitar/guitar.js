const STRING_KEYS = ['d', 'f', 'g', 'h', 'j', 'k']


const keys = document.querySelectorAll('.key')
const stringKeys = document.querySelectorAll('.key.string')



keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const stringKeyIndex = STRING_KEYS.indexOf(key)


  if (stringKeyIndex > -1) playNote(stringKeys[stringKeyIndex])
  
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

	

