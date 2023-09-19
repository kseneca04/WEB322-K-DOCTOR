let EventEmitter = require('events')
let emitter = new EventEmitter()

let colors = ['Red', 'Yellow', 'Green']
let currentColorIndex = 0

let colorTimeouts = {
    'Red': 5000,
    'Yellow': 2000,
    'Green': 5000,
}

function changeColor() {
    let currentColor = colors[currentColorIndex]
    let timeoutDuration = colorTimeouts[currentColor] || 0

    emitter.emit('colorChanged', currentColor)
    console.log(currentColor)

    currentColorIndex = (currentColorIndex + 1) % colors.length
    setTimeout(changeColor, timeoutDuration)
}

emitter.on('colorChanged', (currentColor) => {
    console.log('The light just changed ' + currentColor)
})

changeColor()