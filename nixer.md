---
permalink: /nixer/
title: My Nixie Clock Experiences
heading: My First Nixie Clock Project
subheading: I had to get in on the Nixie action
layout: project
bar: top
imagesA:
  - file: nixer-sch.png
    width: 800
    height: 600
    tip: >
      my first working nixie clock schematic.
  - file: nixer-brd.png
    width: 800
    height: 336
    tip: >
      the board layout for nixerv3. since i used batchpcb to make the board,
      there is no bottom copper image for this design.
imagesB:
  - file: smps-sch.png
    width: 800
    height: 600
    tip: >
      the switching power supply (boost converter) i designed to power the
      tubes in nixerv3.
  - file: smps-lay.png
    width: 670
    height: 600
    tip: >
      the layout for the boost converter pcb. all through-hole devices,
      quick and dirty...
  - file: smps-brd.png
    width: 670
    height: 600
    tip: >
      the bottom copper image of the boost converter pcb.
imagesC:
  - file: pic01.png
    width: 800
    height: 600
    tip: >
      my test setup to verify lighting of a nixie tube.
  - file: pic02.png
    width: 800
    height: 600
    tip: >
      my first glowing nixie tube! :)
  - file: pic03.png
    width: 800
    height: 600
    tip: >
      a breadboard test of the anode and cathode driver circuits, working.
  - file: pic04.png
    width: 800
    height: 600
    tip: >
      a close-up of the driver test circuit.
  - file: pic05.png
    width: 800
    height: 600
    tip: >
      the fully populated nixerv3 mainboard, ready for action.
  - file: pic06.png
    width: 800
    height: 600
    tip: >
      the etched switching power supply circuit board, with resist
      remaining.
  - file: pic07.png
    width: 800
    height: 600
    tip: >
      a demonstration of the switching power supply, easily lighting a nixie
      tube.
  - file: pic08.png
    width: 800
    height: 600
    tip: >
      the case is starting to come together here, showing the position of
      the circuit boards inside. yes, it's a hack job, i know...
  - file: pic09.png
    width: 800
    height: 600
    tip: >
      the basic casing with a top panel cut out.
  - file: pic10.png
    width: 800
    height: 600
    tip: >
      the completely drilled and countersinked bottom panel.
  - file: pic11.png
    width: 800
    height: 600
    tip: >
      and the finished top panel.
  - file: pic12.png
    width: 800
    height: 600
    tip: >
      the top panel with all electrical fixtures in place, and stained.
  - file: pic13.png
    width: 800
    height: 600
    tip: >
      beginning the process of wiring the circuit boards.
  - file: pic14.png
    width: 800
    height: 600
    tip: >
      power jack and control buttons are wired up.
  - file: pic15.png
    width: 800
    height: 600
    tip: >
      anodes are wired up here.
  - file: pic16.png
    width: 800
    height: 600
    tip: >
      about halfway through the process of wiring the sockets up. what a
      mess!
  - file: pic17.png
    width: 800
    height: 600
    tip: >
      the process of programming the nixie clock took a bit longer than
      expected.
  - file: pic18.png
    width: 800
    height: 600
    tip: >
      working! next to my desktop monitor. :)
  - file: pic19.png
    width: 800
    height: 600
    tip: >
      a close-up of the clock, in action in the dark.
  - file: pic20.png
    width: 800
    height: 600
    tip: >
      the final unit and it's bulky power supply.
partsA:
  - part: 556-ATMEGA16-16PU
    vendor: mouser
    price: 1.42
    num: 1
    desc: ATmega16 16kB flash micro
  - part: 293-1M-RC
    vendor: mouser
    price: 0.09
    num: 6
    desc: 1M 1/2W carbon film resistor
  - part: 293-75K-RC
    vendor: mouser
    price: 0.09
    num: 3
    desc: 75k 1/2W carbon film resistor
  - part: 293-22K-RC
    vendor: mouser
    price: 0.09
    num: 12
    desc: 22k 1/2W carbon film resistor
  - part: 293-10K-RC
    vendor: mouser
    price: 0.09
    num: 10
    desc: 10k 1/2W carbon film resistor
  - part: 512-MPSA42
    vendor: mouser
    price: 0.24
    num: 16
    desc: 50MHz 300V NPN bipolar transistor
  - part: 512-MPSA92
    vendor: mouser
    price: 0.21
    num: 10
    desc: 50MHz 300V PNP bipolar transistor
  - part: 73-XT38T
    vendor: mouser
    price: 0.3
    num: 1
    desc: 32.768kHz 20ppm watch crystal
partsB:
  - part: 580-18R104C
    vendor: mouser
    price: 1.42
    num: 1
    desc: 100uH 1.2A power inductor
  - part: 299-2M-RC
    vendor: mouser
    price: 0.09
    num: 1
    desc: 2M 1/8W carbon film resistor
  - part: 299-75K-RC
    vendor: mouser
    price: 0.09
    num: 1
    desc: 75k 1/8W carbon film resistor
  - part: 299-51K-RC
    vendor: mouser
    price: 0.09
    num: 1
    desc: 51k 1/8W carbon film resistor
  - part: 556-ATTINY13A-PU
    vendor: mouser
    price: 1.4
    num: 1
    desc: ATtiny13A 1kB flash micro
  - part: 511-BYT01-400
    vendor: mouser
    price: 0.4
    num: 1
    desc: 1A 400V ultrafast diode
  - part: 511-STTH102
    vendor: mouser
    price: 0.37
    num: 1
    desc: 1A 200V ultrafast diode
  - part: 647-UPT2D471MRD
    vendor: mouser
    price: 4.4
    num: 1
    desc: 470uF 200V electrolytic
  - part: 512-LM7805CT
    vendor: mouser
    price: 0.37
    num: 1
    desc: 5V 1.5A linear regulator
  - part: 511-IRF630
    vendor: mouser
    price: 1.13
    num: 1
    desc: 200V 10A switching N-MOS
  - part: 80-C330C105Z5U5CA
    vendor: mouser
    price: 0.46
    num: 1
    desc: 1uF 50V Z5U ceramic
---

# Introduction

The obvious next step from my [LED clock](../ledclock/) was of course, a
nixie clock. I became quite enraptured with the idea of designing and
building my own nixie clock once I realized what nixie tubes were, so I
bought some IN-8 (&#1048;&#1053;-8) nixie tubes from eBay and went to work
on a clock design.

At first, my design was crude. Using eagle, I put together a clock which
used CD4016 decade counters, MPSA42 cathode drivers, and an AVR, as well as
an integrated boost controller. My mistakes were numerous, and they resulted
in the frying of an ATmega8535 and an STK500. **:/**

My second design used a MAX1771 boost converter and an AVR which drove six
74141 nixie drivers through SN74HC595 shift registers. This design was too
expensive to even try, so I scrapped it. (I used an autorouter to route the
traces on the board anyways, so it's a good thing it never went anywhere...
Never trust the autorouter! **:P**)

# Mainboard design

Finally, I decided to rectify the (120 V<sub>ac</sub>) mains to 170
V<sub>dc</sub> for the tube voltage and use a multiplexed setup: ten MPSA42
cathode drivers and six MPSA92+MPSA42 anode drivers. The ATmega16 receives a
pulse-per-second interrupt by prescaling the signal from a 32.768 kHz watch
crystal. A second timer/counter is used to multiplex the nixie tubes at
31.25 kHz. Of course, there are switches to increment the hour and minute.

Here are the designs for the main controller board of nixer:

{% include gallery.html dir="nixer" images=page.imagesA %}

The code for nixer is C linked against the avr-libc open-source library for
AVR micros. avrdude commands are already available through the Makefile
included. The gerber zipfile is ready for sending to BatchPCB, if you're
interested.

 * [nixer.tar.bz2]({{site.db}}nixer/nixer.tbz2)
 * [gerber.zip]({{site.db}}nixer/gerber.zip)

# Mainboard materials

I guess I was on a Mouser kick when I designed Nixer, since I sourced all
the parts through them...

{% include bom.html parts = page.partsA
   title="Nixer mainboard bill of materials" %}

# Boost converter design

Testing the driver circuitry with the 170 V<sub>dc</sub> from the wall,
while it proved the driver circuits worked, fried a few switches and diodes
along the way... so, as a quick fix to ensure the safe operation of the
device for years to come (and in other countries) I designed a simple
ATtiny13A-controlled boost converter to step up 12 V<sub>dc</sub> from a
wall-wort into the 170 V<sub>dc</sub> required by the IN-8.

The AVR (ATtiny13A) runs a simple C program that monitors the voltage at the
output of a resistor-divider and adjusts the duty cycle of its internal
31.25 kHz pulse-width modulation peripheral. The RAM size of the ATtiny13A
is a tiny (pun?) 1 kB, so I decided not to splurge on any fancy PID
controls. In practice, the simple up/down controller works well enough on
this clock.

Here are the designs for the power supply board of Nixer:

{% include gallery.html dir="nixer" images=page.imagesB %}

Again, the code is in C. Nothing special going on here...

 * [smps.tar.bz2]({{site.db}}nixer/smps.tbz2)

# Boost converter materials

All parts for the boost converter can also be sourced from Mouser.

{% include bom.html parts = page.partsB
   title="Boost converter bill of materials" %}

# Construction photos

Perhaps you'd like proof that the clock works? **:)**

{% include gallery.html dir="nixer" images=page.imagesC %}

# Video of Nixer

{% include youtube.html id="DATPTRRQG_Q" %}

