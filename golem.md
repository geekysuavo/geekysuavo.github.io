---
permalink: /golem/
title: What's he got in his pocketses?
heading: What's he got in his pocketses, precious?
subheading: A guitar amp from the ashes of an oscilloscope
layout: project
bar: top
imagesA:
  - file: supply.png
    width: 800
    height: 420
    tip: >
      A generic tube-based tube amp power supply. CRC smoothing and AC
      heaters. Easy peasy.
imagesB:
  - file: preamp.png
    width: 800
    height: 373
    tip: >
      The preamplifier. Again, more of the same, a hodge-podge of stages...
imagesC:
  - file: poweramp.png
    width: 794
    height: 600
    tip: >
      The single-ended EL34 power output stage. This bad boy should give
      some good old-fashioned kick!
imagesD:
  - file: pic01.png
    width: 640
    height: 480
    tip: >
      The guts of the old oscilloscope. Amazingly barren construction. I
      know the whole miniaturization fad didnt kick in until later, but
      come on...
  - file: pic02.png
    width: 640
    height: 480
    tip: >
      After fifty or so years of collecting dust, this thing fires up
      without any hiccups, and starts working just as it did so long ago.
      A-freaking-mazing.
  - file: pic03.png
    width: 640
    height: 480
    tip: >
      Mains hum, picked up and amplified for the world to see.
  - file: pic04.png
    width: 640
    height: 480
    tip: >
      The utilitarian front-panel of the oscilloscope.
  - file: pic05.png
    width: 800
    height: 600
    tip: >
      OK, the case has sort of come together. Needs more work in this photo.
      as you can see Ive kept my word, and Im even using the original
      power trafo to make the HT voltage.
  - file: pic06.png
    width: 800
    height: 600
    tip: >
      Front-panel, almost done.
  - file: pic07.png
    width: 800
    height: 600
    tip: >
      Yet more work on the completed front panel and the first tube socket.
  - file: pic08.png
    width: 800
    height: 600
    tip: >
      Test run numero uno, lights on. Nothing exploded, which is good.
  - file: pic09.png
    width: 800
    height: 600
    tip: >
      Lights off, so you can see the tube heaters glowing. :)
  - file: pic10.png
    width: 800
    height: 600
    tip: >
      More power supply and preamp wiring.
  - file: pic11.png
    width: 800
    height: 600
    tip: >
      Still more wiring...
  - file: pic12.png
    width: 800
    height: 600
    tip: >
      Here, everything is almost complete, except for the power stage wiring.
  - file: pic13.png
    width: 800
    height: 600
    tip: >
      The test rig setup was an 8-ohm dummy resistor load. pretty basic.
  - file: pic14.png
    width: 800
    height: 600
    tip: >
      The finalized amp, showing signs of life with a nicely distorted
      signal on the output and such a wonderful amount of excess heat!
---

# Introduction

A few months ago, I ran across an old Eico 460 oscilloscope in my Grandpa's
garage, and was totally shocked to find that when I powered it up after
thirty years of sitting in a dusty Texas shed, it worked like a treat! It
was my first exposure to vacuum tubes, and it would seem I became instantly
hooked.

Since I already had a more modern, powerful oscilloscope, I decided to
salvage the components from inside the scope for a devious, fantastic, and
altogether fun goal: a guitar amp. My design is shown in detail below. (Yes,
it's my own design. I did actually work out the circuit components from tube
plate characteristics charts.)

# Power supply

There's nothing really exciting about this: just a basic tube-rectified and
RC-filtered power supply with AC filaments, raised to 265 V<sub>dc</sub>
from ground to try and reduce hum. The circuit produces up to 450
V<sub>dc</sub>, but is designed for 325 V<sub>dc</sub> under normal load
conditions.

{% include gallery.html dir="golem" images=page.imagesA %}

# Preamplifier

The interesting bits about this amp are probably in the preamplifier. The
preamp starts with the 6AU8 pentode, lending a bit of edge to the sound of
the amp while boosting gain. (Examples of these can be found in the
Pipsqueak Pentode and the AX84 blues preamp.) The triode section of the 6AU8
is used in a cathode follower configuration whose output is fed to a 12AU7
with both triode sections wired in parallel for low output resistance and
softer gain.

{% include gallery.html dir="golem" images=page.imagesB %}

# Power amplifier

The output stage is really just a stock cathode-biased, (In fact, all the
tubes in the amplifier are cathode-biased.) single-ended reactively loaded
(transformer primary) pentode output stage. I had originally wanted to use a
6CB6 from the scope, but the maximum plate voltage of the tube was too low,
so I redesigned around an EL34, which is popular and relatively cheap. The
EL34 is the only component of the amp not pulled from the old Eico scope!

{% include gallery.html dir="golem" images=page.imagesC %}

# Construction photos

Here are some pictures of the slow by steady progress I've made since
finding the scope in my Grandpa's garage...

{% include gallery.html dir="golem" images=page.imagesD %}

