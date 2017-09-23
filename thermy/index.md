---
permalink: /thermy/
title: Thermy
heading: The thermy digital thermometer
subheading: My first microcontroller project
layout: project
bar: top
imagesA:
  - file: thermy-sch.png
    width: 800
    height: 597
    tip: The first-revision thermy schematic.
  - file: thermy-brd.png
    width: 604
    height: 282
    tip: The first-revision thermy board design.
  - file: thermy-top.png
    width: 800
    height: 359
    tip: The batchpcb rendering of thermyv1.
imagesB:
  - file: thermyv2-sch.png
    width: 800
    height: 597
    tip: The second-revision thermy schematic.
  - file: thermyv2-brd.png
    width: 426
    height: 410
    tip: The second-revision thermy board design.
  - file: thermyv2-top.png
    width: 614
    height: 600
    tip: The batchpcb rendering of thermyv2.
imagesC:
  - file: thermyv3-sch.png
    width: 796
    height: 600
    tip: The third-revision thermy schematic.
  - file: thermyv3-brd.png
    width: 525
    height: 411
    tip: The third-revision thermy board design.
  - file: thermyv3-top.png
    width: 776
    height: 600
    tip: The batchpcb rendering of thermyv3.
imagesD:
  - file: pic01.png
    width: 640
    height: 480
    tip: >
      I've wired up the power supply components and tested the output without
      any load. You can see the voltage reading on the multimeter.
  - file: pic02.png
    width: 640
    height: 480
    tip: >
      A picture of my setup in my sisters old room. Not too shabby for a
      first electronics work bench.
  - file: pic03.png
    width: 640
    height: 480
    tip: >
      A nice blurry image of the v2 board with PSU elements, IC socket,
      10-pin (dumb, yeah) ISP header, and the DIP switch.
  - file: pic04.png
    width: 640
    height: 480
    tip: Another blurry image of the v2 board with the basics soldered in.
  - file: pic05.png
    width: 640
    height: 480
    tip: >
      Here I've added a few resistors. You can see that the footprints
      werent quite big enough... oops!
  - file: pic06.png
    width: 640
    height: 480
    tip: Heres the board with the last seven-segment display hooked up.
  - file: pic07.png
    width: 640
    height: 480
    tip: And the third display is soldered on here...
  - file: pic08.png
    width: 640
    height: 480
    tip: Ive laid down all the displays... looking good so far.
  - file: pic09.png
    width: 640
    height: 480
    tip: You can see the first transistor in the top left that I added.
  - file: pic10.png
    width: 640
    height: 480
    tip: Two more transistors added...
  - file: pic11.png
    width: 640
    height: 480
    tip: All four transistors and a few more resistors.
  - file: pic12.png
    width: 640
    height: 480
    tip: More resistors... yeah, there a quite a few on there!
  - file: pic13.png
    width: 640
    height: 480
    tip: All the resistors have been awkwardly soldered down now.
  - file: pic14.png
    width: 640
    height: 480
    tip: >
      You can see I forgot my pullup resistor, whoops. I originally thought
      it was the reason for failed OWI code. That was actually due to a
      footprint error.
  - file: pic15.png
    width: 640
    height: 480
    tip: The pullup circuit I so noobishly neglected.
  - file: pic16.png
    width: 640
    height: 480
    tip: The assembled and soldered hackjob for my v2 sensor. Didnt work.
  - file: pic17.png
    width: 640
    height: 480
    tip: When in doubt, add more electrical tape.
  - file: pic18.png
    width: 640
    height: 480
    tip: >
      This is where my frustration really started. Every time I connected my
      sensor to the power, it would overheat. Turns out the part was backward!
  - file: pic19.png
    width: 640
    height: 480
    tip: My better, more improved workspace.
  - file: pic20.png
    width: 640
    height: 480
    tip: Again, the new workspace.
  - file: pic21.png
    width: 640
    height: 480
    tip: A closeup of the way I programmed thermyv3.
  - file: pic22.png
    width: 640
    height: 480
    tip: >
      The nearly finished board hooked up to the STK500v2. You can see by the
      idiot lights that everything is A-OK.
  - file: pic23.png
    width: 640
    height: 480
    tip: >
      After I programmed the board with the current thermy hex file, I got
      this. Looks like more programming is in order.
  - file: pic24.png
    width: 640
    height: 480
    tip: >
      Here you can see the sensor has been properly soldered on and doesnt
      overheat. Also, I found a small bug in leds_init.
  - file: pic25.png
    width: 640
    height: 480
    tip: >
      I fixed the numeric display routines as much as I feel is needed. This
      is just a test of the display. The sensor isn't being polled just yet.
  - file: pic26.png
    width: 640
    height: 480
    tip: >
      I fixed the program to run through 250 renderings of the current value
      before trying to get another reading from the sensor, but I still got
      garbage values.
  - file: pic27.png
    width: 640
    height: 480
    tip: >
      I shimmed up the LED display code to only show important digits.
  - file: pic28.png
    width: 640
    height: 480
    tip: >
      Thanks to my last physics TA, I was fortunate enough to borrow a Tek
      TDS1002 60 MHz, 1 GS/s digital scope for debugging.
  - file: pic29.png
    width: 640
    height: 480
    tip: >
      Here I used the cursors to measure the voltage difference between
      high and low logic levels on the one-wire bus.
  - file: pic30.png
    width: 640
    height: 480
    tip: >
      It turns out _delay_us(500) was only delaying for 96 microseconds,
      because _delay_loop_1 uses a uint8_t and _delay_loop_2 uses a uint16_t.
      Using the _delay_ms(0.5) function fixed the whole issue.
  - file: pic31.png
    width: 640
    height: 480
    tip: >
      Here you can see the rise time of the one-wire bus is 3.6 microseconds.
      This is nearly perfect, because the shortest delays are 6 microseconds.
  - file: pic32.png
    width: 640
    height: 480
    tip: >
      Yeah, its working in this picture. Displaying fahrenheit, of course.
  - file: pic33.png
    width: 640
    height: 480
    tip: >
      Here is thermy, finished and displaying 23 degrees celsius in my dorm
      room. Brr!
  - file: pic34.png
    width: 640
    height: 480
    tip: >
      Heres thermy with a final fix that I added to display C or F depending
      on which temperature scale the user has selected via the DIP switch.
---

# Introduction

Before this project, I had very little electronics experience. My only time
spent was with an RS232 interfaced servo controller, which was canned and
plagued with good luck in the form of complete functionality. (You never
learn anything when something works.)

To put this project in concrete context: I learned about Ohm's law when I
started sketching the resistor dropper circuit connections for the LED
displays. Elementary stuff here.

# First design

My first design never actually saw production. The layout had fatal flaws
that would have made it absolutely non-functional, specifically the LED
directionality and footprints. Thankfully, I figured that out without
ordering the boards.

{% include gallery.html dir="thermy" images=page.imagesA %}

# Second design

My second design did see the light of day, but mostly failed. The DS18B20
just overheated and I decided to re-design the board instead of fix any
other problems and ignore the sensor.

{% include gallery.html dir="thermy" images=page.imagesB %}

# Final design

Finally, I built a board that could be programmed and would write readable
numbers to the LED displays, but the DS18B20 was still overheating. Thanks
to the patient aid of AVR-Freaks members, I learned that the sensor was
wired backwards! It turns out the datasheet shows a bottom view, and I missed
the fine print indicating that fact... D'oh!

{% include gallery.html dir="thermy" images=page.imagesC %}

# Design files

If you're interested in looking at my designs, for whatever reason, here
they are. The last file is what I used to make a TO-92 footprint for the
DS18B20; it's a total hack-job. You've been warned...

 * [Hardware v1]({{site.db}}thermy/design.tbz2)
 * [Hardware v2]({{site.db}}thermy/designv2.tbz2)
 * [Hardware v3]({{site.db}}thermy/designv3.tbz2)
 * [Firmware]({{site.db}}thermy/20080402.tbz2)
 * [DS18B20 Library]({{site.db}}thermy/ds18b20.lbr.bz2)

# Project images

The original web page for this project was just a thumbnail gallery, so
most of the information is spread through a bunch of image captions. For
your viewing pleasure, here are the remaining images I captured to document
my progress on thermy:

{% include gallery.html dir="thermy" images=page.imagesD %}

