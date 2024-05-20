radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
