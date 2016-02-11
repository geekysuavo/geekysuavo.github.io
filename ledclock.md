---
permalink: /ledclock/
title: Yet another LED clock project
heading: Yet another LED clock project
subheading: They're everywhere... I just wanted in on the fad.
layout: project
bar: top
imagesA:
  - file: leds-sch.png
    width: 544
    height: 600
    tip: >
      The schematic diagram of the LED clock. Basic elements of logic
      design.
  - file: leds-lay.png
    width: 800
    height: 436
    tip: >
      The layout for the led clock. Only a few wire jumpers required.
  - file: leds-brd.png
    width: 800
    height: 436
    tip: >
      The bottom copper image of the LED clock design.
imagesB:
  - file: pic03.png
    width: 640
    height: 480
    tip: >
      A closeup shot of the inter-LED wiring that was used to make
      interfacing the display board to the controller board.
  - file: pic04.png
    width: 640
    height: 480
    tip: >
      A quick test of the LM317 regulator layout I decided upon. Working
      fine.
  - file: pic05.png
    width: 640
    height: 480
    tip: >
      The completed display board, showing the digit layouts.
  - file: pic06.png
    width: 640
    height: 480
    tip: >
      My first chemically-etched circuit board! Yay!
  - file: pic07.png
    width: 640
    height: 480
    tip: >
      The copper has been etched away and the resist remains on the board.
  - file: pic08.png
    width: 640
    height: 480
    tip: >
      The final circuit board, which Im programming for the first time in
      this picture.
  - file: pic09.png
    width: 640
    height: 480
    tip: >
      Programming in the implementation of the photoresistor to track
      changes in ambient light with corresponding changes in LED brightness.
  - file: pic10.png
    width: 640
    height: 480
    tip: >
      The beginnings of the display board backplane wiring.
  - file: pic11.png
    width: 640
    height: 480
    tip: >
      More wiring of the display board.
  - file: pic12.png
    width: 640
    height: 480
    tip: >
      The completely wired display board, showing how each segment gets a
      wire and the anodes are tied together.
  - file: pic13.png
    width: 640
    height: 480
    tip: >
      Testing to make sure the clock logic illuminates the segments
      properly.
  - file: pic14.png
    width: 640
    height: 480
    tip: >
      The finished clock, in operation on my dresser.
  - file: pic15.png
    width: 640
    height: 480
    tip: >
      A side-view of the clock, showing the internals. I need to make a case
      for this thing.
  - file: pic16.png
    width: 640
    height: 480
    tip: >
      For now, what the front face of the clock looks like.
parts:
  - part: 512-LM317T
    vendor: mouser
    price: 0.43
    num: 1
    desc: 1.5A adjustable linear regulator
  - part: 556-ATMEGA16-16PU
    vendor: mouser
    price: 6.56
    num: 1
    desc: 16MHz avr risc microcontroller
  - part: 595-SN74HC595N
    vendor: mouser
    price: 0.62
    num: 4
    desc: 8-bit si/po shift/store register
  - part: 595-ULN2803AN
    vendor: mouser
    price: 1.35
    num: 4
    desc: 50V 500mA octal darlington array
  - part: 512-SFP9Z24
    vendor: mouser
    price: 0.84
    num: 1
    desc: p-channel 60V 9.7A mosfet
  - part: 604-WP7113QBC/D
    vendor: mouser
    price: 0.22
    num: 60
    desc: T1.75 water-clear blue led
  - part: 80-C440C105M5U
    vendor: mouser
    price: 0.71
    num: 1
    desc: 1.0uF 50V ceramic capacitor
  - part: 80-C430C475K3R
    vendor: mouser
    price: 7.85
    num: 1
    desc: 4.7uF 25V ceramic capacitor
  - part: 291-470-RC
    vendor: mouser
    price: 0.1
    num: 1
    desc: 470 ohm 1/4W carbon resistor
  - part: 299-240-RC
    vendor: mouser
    price: 0.09
    num: 1
    desc: 240 ohm 1/8W carbon resistor
  - part: 299-4.7K-RC
    vendor: mouser
    price: 0.09
    num: 1
    desc: 4.7 kohm 1/8W carbon resistor
  - part: 299-47K-RC
    vendor: mouser
    price: 0.09
    num: 3
    desc: 47 kohm 1/8W carbon resistor
  - part: 73-XT38T
    vendor: mouser
    price: 0.3
    num: 1
    desc: 32.768kHz 20ppm watch crystal
---

# Introduction

Inspired by other LED clock designs on the internet, I decided to test my
skill by designing and building my own. The entire project was done using
open-source software, including [PCB](http://pcb.gpleda.org/) and
[gschem](http://www.gpleda.org/tools/gschem/). The circuit board was
developed using sodium hydroxide and etched with ferric chloride, which took
some practice.

# Clock design

At the clock's core is an Atmel ATmega16 micro, running on its 1.0 MHz
internal RC oscillator. A pulse-per-second interrupt is achieved by
prescaling the 32.768 kHz pulse of a watch crystal by 2<sup>15</sup>. The
'digit' cathodes are driven by AVR GPIO's through SN74HC595 shift registers
and ULN2083 darlington drivers, and the anodes are driven by a pulse-width
modulated P-channel MOSFET at 4.0 kHz. Software fading routines were written
to make the display less 'rigid' looking.

The schematic, layout and copper etch pattern are of a redesign of the clock
which I re-made on the computer. They have not been tested, but I'm quite
sure they work just like the last version:

{% include gallery.html dir="ledclock" images=page.imagesA %}

A link to the C firmware, written against the avr-libc open-source library.
The Makefile included allows for writing to the flash and fuses via avrdude:

 * [leds.tbz2]({{site.db}}ledclock/leds.tbz2)

**Note:** _The above link is presently broken, as I seem to have misplaced
the source files. If you really want more info, email me and I'll try to
dig up the original sources._

# Clock materials

I sourced all components from mouser this time, as I found them to be easier
to work with at the time, have a better selection of some parts, and a
superfast (two days UPS ground!) shipping time. Here are the parts:

{% include bom.html parts = page.parts 
   title="LED clock bill of materials" %}

# Evidence it exists

{% include gallery.html dir="ledclock" images=page.imagesB %}

# Videos of the clock

{% include youtube.html id="9QsfnAOVvOI" %}

{% include youtube.html id="N-m9yHuHLlA" %}

