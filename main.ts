let Light = 0
let Temperature = 0
let Sound = 0
let Compass = 0
input.onButtonPressed(Button.A, function () {
    Light = input.lightLevel()
    Temperature = input.temperature()
    Sound = input.soundLevel()
})
basic.forever(function () {
    Compass = input.compassHeading()
    if (Compass < 45) {
        basic.showString("N")
    } else if (Compass < 135) {
        basic.showString("E")
    } else if (Compass < 225) {
        basic.showString("S")
    } else if (Compass < 315) {
        basic.showString("W")
    }
})
basic.forever(function () {
	
})
