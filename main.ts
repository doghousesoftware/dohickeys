input.onButtonPressed(Button.A, function () {
    pushButtonCounter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(pushButtonCounter)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pushButtonCounter += -1
})
input.onGesture(Gesture.Shake, function () {
    pushButtonCounter = 0
})
let pushButtonCounter = 0
pushButtonCounter = 0
