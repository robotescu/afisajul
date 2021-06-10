OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P0)
basic.showIcon(IconNames.Surprised)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        OLED.clear()
        OLED.writeStringNewLine("Buton apasat")
    } else {
        OLED.clear()
        OLED.writeStringNewLine("Buton neapasat")
    }
})
