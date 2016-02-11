---
permalink: /golem/
title: What's he got in his pocketses?
heading: What's he got in his pocketses, precious?
subheading: A guitar amp from the ashes of an oscilloscope
layout: project
bar: top
images:
  - file: supply.png
    width: 800
    height: 420
    tip: >
      a generic tube-based tube amp power supply. crc smoothing and ac
      heaters. easy peasy.
  - file: preamp.png
    width: 800
    height: 373
    tip: >
      the preamplifier. again, more of the same, a hodge-podge of stages...
  - file: poweramp.png
    width: 794
    height: 600
    tip: >
      the single-ended el34 power output stage. this bad boy should give
      some good old-fashioned kick!
  - file: pic01.png
    width: 640
    height: 480
    tip: >
      the guts of the old oscilloscope. amazingly barren construction. i
      know the whole miniaturization fad didn't kick in until later, but
      come on...
  - file: pic02.png
    width: 640
    height: 480
    tip: >
      after fifty or so years of collecting dust, this thing fires up
      without any hiccups, and starts working just as it did so long ago.
      a-freaking-mazing.
  - file: pic03.png
    width: 640
    height: 480
    tip: >
      mains hum, picked up and amplified for the world to see. :P
  - file: pic04.png
    width: 640
    height: 480
    tip: >
      the utilitarian front-panel of the oscilloscope.
  - file: pic05.png
    width: 800
    height: 600
    tip: >
      ok, the case has sort of come together. needs more work in this photo.
      as you can see i've kept my word, and i'm even using the original
      power trafo to make the HT voltage.
  - file: pic06.png
    width: 800
    height: 600
    tip: >
      front-panel, almost done.
  - file: pic07.png
    width: 800
    height: 600
    tip: >
      yet more work on the completed front panel and the first tube socket.
  - file: pic08.png
    width: 800
    height: 600
    tip: >
      test run numero uno, lights on. nothing's exploding, which is good.
  - file: pic09.png
    width: 800
    height: 600
    tip: >
      lights off, so you can see the tube heaters glowing. :)
  - file: pic10.png
    width: 800
    height: 600
    tip: >
      more power supply and preamp wiring.
  - file: pic11.png
    width: 800
    height: 600
    tip: >
      yet more wiring...
  - file: pic12.png
    width: 800
    height: 600
    tip: >
      here, everything's almost complete, except for the power stage wiring.
  - file: pic13.png
    width: 800
    height: 600
    tip: >
      the test rig setup was an 8-ohm dummy resistor load. pretty basic.
  - file: pic14.png
    width: 800
    height: 600
    tip: >
      the finalized amp, showing signs of life with a nicely distorted
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

{% include gallery.html dir="golem" images=page.images %}

# Preamplifier

The interesting bits about this amp are probably in the preamplifier. The
preamp starts with the 6AU8 pentode, lending a bit of edge to the sound of
the amp while boosting gain. (Examples of these can be found in the
Pipsqueak Pentode and the AX84 blues preamp.) The triode section of the 6AU8
is used in a cathode follower configuration whose output is fed to a 12AU7
with both triode sections wired in parallel for low output resistance and
softer gain.

{% include gallery.html dir="golem" images=page.images %}

# Power amplifier

The output stage is really just a stock cathode-biased, (In fact, all the
tubes in the amplifier are cathode-biased.) single-ended reactively loaded
(transformer primary) pentode output stage. I had originally wanted to use a
6CB6 from the scope, but the maximum plate voltage of the tube was too low,
so I redesigned around an EL34, which is popular and relatively cheap. The
EL34 is the only component of the amp not pulled from the old Eico scope!

{% include gallery.html dir="golem" images=page.images %}

# Construction photos

Here are some pictures of the slow by steady progress I've made since
finding the scope in my Grandpa's garage...

{% include gallery.html dir="golem" images=page.images %}

