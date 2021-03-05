basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let llum = 39
led.setBrightness(llum)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        llum += 1
        led.setBrightness(llum)
        basic.pause(100)
        serial.writeLine("" + (llum))
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        llum += -1
        led.setBrightness(llum)
        basic.pause(100)
        serial.writeLine("" + (llum))
    }
})
