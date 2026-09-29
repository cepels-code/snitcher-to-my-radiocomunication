/**
 * Repository: RADIOCOMUNICATION_BBC_MICROBIT
 * 
 * Description: Pure Radio Receiver for BBC micro:bit (V1 & V2 compatible)
 */
// --- RECEIVE MESSAGE: Display received string or clear screen ---
radio.onReceivedString(function (receivedString) {
    if (receivedString == "CLEAR") {
        basic.clearScreen()
    } else {
        basic.showString(receivedString)
    }
})
// Set radio frequency group (must match the transmitter)
radio.setGroup(1)
// Display a checkmark icon on startup to indicate the receiver is ready
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
