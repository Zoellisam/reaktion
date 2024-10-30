def on_button_a():
    global punkte, leben
    if zufall == 1:
        punkte += 1
        basic.show_icon(IconNames.YES)
    else:
        leben += -1
        basic.show_icon(IconNames.NO)
    basic.pause(1000)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def Game_over():
    music.play_melody("E D C - - - - - ", 120)
    basic.show_string("Game over!")
    basic.show_string("Punkte:" + str(punkte))

def on_button_b():
    global punkte, leben
    if zufall == 2:
        punkte += 1
        basic.show_icon(IconNames.YES)
    else:
        leben += -1
        basic.show_icon(IconNames.NO)
    basic.pause(1000)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def anzeige():
    global zufall
    zufall = randint(1, 2)
    if zufall == 1:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . .
            . . # . .
            . . # . .
            """)
    else:
        pass
    if zufall == 2:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            """)
    else:
        pass
    basic.pause(500)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
zufall = 0
punkte = 0
punkte = 0
leben = 3
basic.show_number(3)
basic.show_number(2)
basic.show_number(1)

def on_forever():
    if leben == 3:
        basic.set_led_colors(0x00ffff, 0x00ffff, 0x00ffff)
        anzeige()
    else:
        pass
    if leben == 2:
        basic.set_led_colors(0x00ffff, 0x00ffff, 0xff0000)
        anzeige()
    else:
        pass
    if leben == 1:
        basic.set_led_colors(0x00ffff, 0xff0000, 0xff0000)
        anzeige()
    else:
        pass
    if leben == 0:
        basic.set_led_colors(0xff0000, 0xff0000, 0xff0000)
        Game_over()
    else:
        pass
basic.forever(on_forever)
