---
permalink: /usbtmc-bode/
title: Bode plotting with a DSO and USBTMC
heading: Bode plotting with the Agilent MSO-X 2024A
subheading: Laziness is the true mother of invention
layout: project
bar: top
images:
  - file: test-filter-response.png
    width: 800
    height: 405
    tip: >
      comparison of the theoretical and measured transfer functions using
      the usbtmc-bode program. not bad at all, i think!
  - file: test-filter-circuit.png
    width: 800
    height: 523
    tip: >
      schematic of the circuit i put together to test the new measurement
      software.
  - file: chebyshev-circuit.pdf
    width: 
    height: 
    tip: >
      circuit schematic of the chebyshev active filter circuit adapted from
      filterpro recommendations.
  - file: chebyshev-board.png
    width: 800
    height: 410
    tip: >
      finalized board layout of the chebyshev active filter.
  - file: chebyshev-pic01.png
    width: 800
    height: 584
    tip: >
      the soldered and (kinda) cleaned chebyshev filter board.
  - file: chebyshev-pic02.png
    width: 800
    height: 600
    tip: >
      the chebyshev filter with attached power and signals. small! :)
  - file: chebyshev-response.png
    width: 800
    height: 397
    tip: >
      comparison of the simulated and measured transfer functions using
      spice and the usbtmc-bode program, based on the active chebyshev
      filter circuit.
  - file: ina-pic01.png
    width: 800
    height: 580
    tip: >
      instrumentation amplifier board, soldered up and connected into the
      measurement jig for analysis via usbtmc-bode.
  - file: ina-pic02.png
    width: 795
    height: 600
    tip: >
      instrumentation amplifier board, completed and cleaned up.
  - file: ina-response.png
    width: 800
    height: 533
    tip: >
      measured frequency/phase response of the instrumentation amplifier
      circuit.
---

# Introduction

Inspired by a video by [Dave Jones](http://www.eevblog.com) on how to get
[Bode plots](http://en.wikipedia.org/wiki/Bode_plot) using a swept sine
generator and an oscilloscope, I decided to work out a way to pull Bode
plots from my scope. Unlike Dave's method, I only wanted to use a
computer-connected digital scope, and no external signal source. Also, I
wanted to recover phase information (for complete Bode plots) in addition to
gain.

Well, anyone who claims that necessity is the mother of invention has
clearly never met a programmer. (it's actually **laziness** that drives
invention) Strangely enough, it seems we're the only people who've figured
it out that a bolus of effort up front can pay for itself in the long term.
Rather than methodically dialing up input frequencies and recording the
measured response variables, I scripted it, as any programmer would.

With the goal in mind, I wrote a simple
[C](http://en.wikipedia.org/wiki/C_(programming_language)) program to [text
message](http://en.wikipedia.org/wiki/Standard_Commands_for_Programmable_Instruments)
with my Agilent MSO-X 2024A through the [ USB Test and
Measurement](http://www.home.agilent.com/upload/cmc_upload/All/usbtmc.htm)
Linux kernel driver. The program runs fine in a
[VirtualBox](https://www.virtualbox.org)'ed [Debian
Squeeze](http://www.debian.org) system on my iMac, and only requires a
decently up-to-date Glibc.

Given a starting frequency, an ending frequency, and a number of points, the
program captures the amplitude and phase shift of an analog circuit such
that the captured points are evenly spaced in a log-frequency axis. The
internal function generator (WaveGen) in the MSO-X is used to send ten
cycles of a sinewave into the circuit. The output is measured and the
measurements are sent back to the host computer.

# Initial testing

To test the code, I lashed up a simple
[Sallen-Key](http://en.wikipedia.org/wiki/Sallen-Key_topology) bandpass
filter on a breadboard, calculated its theoretical response, and then
measured the true response of the circuit. The results are shown in the
figure below:

{% include gallery.html dir="usbtmc-bode" images=page.images %}

# Active filter testing

To really test the capabilities of this simple program, I used Texas
Instruments' [FilterPro](http://www.ti.com/tool/filterpro) software to
design an active 8<sup>th</sup> order Chebyshev bandpass filter around the
Analog Devices OP462 quad opamp, as shown below:

{% include gallery.html dir="usbtmc-bode" images=page.images %}

I simulated the circuit in Berkeley SPICE and measured its response with
usbtmc-bode. I caught a few small software bugs, but to no surprise, the
measurements agree well enough with the simulations and design
specifications. SPICE simulations indicated a filter with an effective
bandwidth of 3.7 kHz with -3 dB transitions around 500 Hz and 4 kHz, and the
measurements showed a 3.63 kHz effective bandwidth and a similar passband
frequency range. See for yourself below! **:)**

{% include gallery.html dir="usbtmc-bode" images=page.images %}

# Instrumentation amplifier

Finally, as a last test, I built up a circuit designed around the AD8428
fixed-gain (66 dB) instrumentation amplifier to try usbtmc-bode on a high
gain circuit. With a bit of tweaking of the parameters inside the source
code, everything worked out just fine. Check out the measurements:

{% include gallery.html dir="usbtmc-bode" images=page.images %}

# Application video

{% include youtube.html id="akvrAP0rLew" %}

# The code

Of course, this page would be pretty useless without source code, huh?
**:P**

 * [usbtmc-bode.tar.gz]({{site.db}}usbtmc-bode/usbtmc-bode.tar.gz)

