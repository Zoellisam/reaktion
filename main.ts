input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (zufall == 1) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        leben += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
function Game_over () {
    music.playMelody("E D C - - - - - ", 120)
    basic.showString("Game over!")
    basic.showString("Punkte:" + punkte)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (zufall == 2) {
        punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        leben += -1
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
function anzeige () {
    zufall = randint(1, 2)
    if (zufall == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
    	
    }
    if (zufall == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            `)
    } else {
    	
    }
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
let zufall = 0
let punkte = 0
punkte = 0
let leben = 3
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.forever(function () {
    if (leben == 3) {
        basic.setLedColors(0x00ffff, 0x00ffff, 0x00ffff)
        anzeige()
    } else {
    	
    }
    if (leben == 2) {
        basic.setLedColors(0x00ffff, 0x00ffff, 0xff0000)
        anzeige()
    } else {
    	
    }
    if (leben == 1) {
        basic.setLedColors(0x00ffff, 0xff0000, 0xff0000)
        anzeige()
    } else {
    	
    }
    if (leben == 0) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        Game_over()
    } else {
    	
    }
})
