function chaseStar () {
    strip.clear()
    for (let index = 0; index <= 5; index++) {
        for (let index4 = 0; index4 <= 3; index4++) {
            strip.setPixelColor(index * 16 + index4, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
            basic.pause(speed)
            strip.setPixelColor(index * 16 + index4, neopixel.colors(NeoPixelColors.Black))
        }
    }
}
input.onButtonPressed(Button.A, function () {
    speed = 100
    for (let index = 0; index < 10; index++) {
        chaseFlake()
    }
})
function chaseFlake () {
    rgb_values = [255, 255, 0]
    for (let index2 = 0; index2 <= 5; index2++) {
        setSame(index2 + 4, rgb_values)
        if (index2 > 2) {
            setSame(index2 + 10, rgb_values)
            setSame(15 - index2, rgb_values)
        }
        strip.show()
        basic.pause(speed)
        setSame(index2 + 4, [0, 0, 0])
        if (index2 > 2) {
            setSame(index2 + 10, [0, 0, 0])
            setSame(15 - index2, [0, 0, 0])
        }
    }
    strip.show()
}
input.onButtonPressed(Button.AB, function () {
    speed = 30
    for (let index = 0; index < 10; index++) {
        chaseStar()
    }
    for (let index = 0; index < 10; index++) {
        negChaseStar()
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    rgb_values = [128, 255, 255]
    for (let index = 0; index < 20; index++) {
        for (let index47 = 0; index47 <= 3; index47++) {
            strip.clear()
            setSame(index47, rgb_values)
            strip.show()
            basic.pause(200)
        }
        strip.clear()
    }
})
function setSame (num: number, rgb_array: number[]) {
    range1.setPixelColor(num, neopixel.rgb(rgb_array[0], rgb_array[1], rgb_array[2]))
    range2.setPixelColor(num, neopixel.rgb(rgb_array[0], rgb_array[1], rgb_array[2]))
    range3.setPixelColor(num, neopixel.rgb(rgb_array[0], rgb_array[1], rgb_array[2]))
    range4.setPixelColor(num, neopixel.rgb(rgb_array[0], rgb_array[1], rgb_array[2]))
    range5.setPixelColor(num, neopixel.rgb(rgb_array[0], rgb_array[1], rgb_array[2]))
    range6.setPixelColor(num, neopixel.rgb(rgb_array[0], rgb_array[1], rgb_array[2]))
}
input.onGesture(Gesture.Shake, function () {
    rgb_values = [0, 255, 255]
    for (let index = 0; index < 10; index++) {
        for (let index48 = 0; index48 <= 3; index48++) {
            setSame(index48, rgb_values)
            strip.show()
            basic.pause(200)
            strip.clear()
            strip.show()
        }
    }
})
function negChaseStar () {
    for (let index = 0; index <= 5; index++) {
        for (let index4 = 0; index4 <= 3; index4++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.setPixelColor(index * 16 + index4, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            basic.pause(speed)
            strip.setPixelColor(index * 16 + index4, neopixel.colors(NeoPixelColors.Yellow))
        }
    }
    strip.clear()
    strip.show()
}
let rgb_values: number[] = []
let speed = 0
let range6: neopixel.Strip = null
let range5: neopixel.Strip = null
let range4: neopixel.Strip = null
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 96, NeoPixelMode.RGB)
range1 = strip.range(0, 16)
range2 = strip.range(16, 16)
range3 = strip.range(32, 16)
range4 = strip.range(48, 16)
range5 = strip.range(64, 16)
range6 = strip.range(80, 16)
basic.showIcon(IconNames.Heart)
