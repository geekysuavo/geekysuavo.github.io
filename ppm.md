---
permalink: /ppm/
title: An open-source proton precession magnetometer
heading: An open-source proton precession magnetometer
subheading: My adventures in the earth's magnetic field
layout: project
bar: top
images:
  - file: fil-schematic.png
    width: 776
    height: 600
    tip: >
      final schematic of the FILv1r0 board as it was built and tested.
  - file: fil-layout.png
    width: 800
    height: 371
    tip: >
      final layout of FILv1r0. the bulky SP-CAPs will be replaced with
      smaller 1206 tantalums!
  - file: fil-image01.png
    width: 800
    height: 584
    tip: >
      a closeup of the FIL board with a 1.5v AA battery for size comparison.
  - file: fil-image02.png
    width: 800
    height: 600
    tip: >
      the FIL board wired up and under test to generate a Bode plot.
  - file: fil-response.png
    width: 800
    height: 398
    tip: >
      the predicted and measured responses of the filter match up quite
      well!
  - file: ina-schematic.png
    width: 776
    height: 600
    tip: >
      final schematic of the INAv1r0 board as it was built and tested.
  - file: ina-layout.png
    width: 800
    height: 400
    tip: >
      final layout of INAv1r0. nothing special here, just an input filter
      network and the ad8428 of course. the tantalums are still too big
      here.
  - file: ina-image01.png
    width: 795
    height: 600
    tip: >
      a closeup of the INA board with a 1.5v AA battery for size comparison.
      i managed to get it a bit smaller than FIL!
  - file: ina-image02.png
    width: 800
    height: 580
    tip: >
      the lashup of INA used to measure its frequency response. not pictured
      is an attenuation network preceeding the input to the board.
  - file: ina-response-a.png
    width: 800
    height: 399
    tip: >
      the predicted and measured response of the amplifier are close until a
      few hundred kHz. the bandwidth is far wider than needed. i am curious
      what the cause of that zero is.
  - file: ina-response-b.png
    width: 800
    height: 400
    tip: >
      later revisions of the analog signal chain used a lower-bandwidth
      input filter, with a response like the one predicted and measured
      here.
  - file: osc-schematic.png
    width: 776
    height: 600
    tip: >
      final schematic of the OSCv1r0 board as it was built and tested.
  - file: osc-layout.png
    width: 800
    height: 458
    tip: >
      final layout of the OSC board. since the battery connections are
      swappable, i can mount the 9v battery on the underside. sweet!
  - file: osc-image01.png
    width: 800
    height: 600
    tip: >
      the built up oscillator board. the switch footprint was a mismatch, so
      i had to just jumper it closed. battery in, oscillator on.
  - file: osc-response.png
    width: 800
    height: 533
    tip: >
      the predicted and measured frequency domain outputs of the oscillator.
      no signal averaging was used in measurement.
  - file: dig-schematic.png
    width: 776
    height: 600
    tip: >
      final schematic of the DIGv1r0 board as it was built and tested.
  - file: dig-layout.png
    width: 567
    height: 600
    tip: >
      final board layout for DIGv1r0. again, the switch footprints failed to
      match the parts, so i was reduced to shorting the pads with breadboard
      jumpers. what a pain!
  - file: dig-image01.png
    width: 800
    height: 600
    tip: >
      look at all that flux residue... time for an isopropanol bath! shown
      by a 1.5v AA battery.
  - file: dig-image02.png
    width: 800
    height: 600
    tip: >
      the cleaned board nearing testing at my computer desk. the alligator
      cables were used to feed a sinewave into the ADC from the
      oscilloscope.
  - file: dig-image03.png
    width: 800
    height: 600
    tip: >
      can you tell which pins are SPI SCK, CS, and MISO? hint: i had to
      probe them with sharp oscilloscope probe tips. <b>:)</b>
  - file: dig-floor.png
    width: 800
    height: 533
    tip: >
      the signal-averaged noise floor of the ADC, with input shorted to
      ground. 64 transients of 16k points each were averaged, DC offset was
      removed, and a Blackman window function was applied prior to FFT.
  - file: dig-sin1k.png
    width: 800
    height: 533
    tip: >
      single-shot capture of a 1.0 kHz sinewave from my DSO wavegen output.
      the SNR is close to the theoretical maximum for a 16-bit ADC, and i
      anticipate the final design will come closer to reaching it.
  - file: ppm-v1r1-schematic.png
    width: 776
    height: 600
    tip: >
      final block diagram (first schematic page) of the PPMv1r1 board as it
      was built and tested.
  - file: ppm-v1r1-layout.png
    width: 719
    height: 600
    tip: >
      final board layout for PPMv1r1. this was my first four-layer board
      design, and i have to say it was immeasurably simpler to lay out than
      any other two-layer board i've done.
  - file: ppm-v1r1-image01.png
    width: 800
    height: 600
    tip: >
      first revision assembled board, looking sexy under the ring-light.
  - file: ppm-v1r1-image02.png
    width: 800
    height: 600
    tip: >
      a face-on shot of the first revision magnetometer board.
  - file: ppm-v1r1-image03.png
    width: 800
    height: 600
    tip: >
      the first revision magnetometer board, striking a pose with usb cable,
      footprint layout sheet and tweezers.
  - file: ppm-v1r1-image04.png
    width: 800
    height: 600
    tip: >
      the closest thing you can get to an 'action shot' of the first
      revision board.
  - file: ppm-v1r1-ccs01.png
    width: 800
    height: 480
    tip: >
      this capture shows a test mode of the current sink DAC output where
      all DAC codes are output in a triangular ramp, as rapidly as possible.
  - file: ppm-v1r1-ccs02.png
    width: 800
    height: 479
    tip: >
      oscillations in the early current sink circuit, cut at points by relay
      contact chatter.
  - file: ppm-v1r1-ccs03.png
    width: 800
    height: 480
    tip: >
      a closer look at the current sink oscillations
  - file: ppm-v1r1-ccs04.png
    width: 800
    height: 480
    tip: >
      it seemed as though the opamp could drive the mosfet up to a point,
      and then it just began to oscillate.
  - file: ppm-v1r1-ccs05.png
    width: 800
    height: 480
    tip: >
      a frequency measurement of the current sink oscillations.
  - file: ppm-v1r1-ccs06.png
    width: 800
    height: 480
    tip: >
      with the AD8541 in lieu of the AD8591, the situation was resolved.
  - file: ppm-v1r1-ccs07.png
    width: 800
    height: 480
    tip: >
      rise time measurement for a 1.0 A current pulse into a resistive load.
  - file: ppm-v1r1-ccs08.png
    width: 800
    height: 480
    tip: >
      fall time measurement for a 1.0 A current pulse into a resistive load.
  - file: ppm-v1r2-schematic.png
    width: 800
    height: 565
    tip: >
      final block diagram (first schematic page) of the PPMv1r2 board as it
      was built and tested.
  - file: ppm-v1r2-layout.png
    width: 719
    height: 600
    tip: >
      final board layout for PPMv1r2.
  - file: ccscmp-v1r1-res-all.png
    width: 800
    height: 480
    tip: >
      first revision current waveform with a 2-ohm resistive load.
  - file: ccscmp-v1r1-res-end.png
    width: 800
    height: 480
    tip: >
      first revision current waveform with a 2-ohm resistive load, showing
      some MHz-range oscillation.
  - file: ccscmp-v1r1-ind-all.png
    width: 800
    height: 480
    tip: >
      first revision current waveform with a 10 mH inductive load. the
      flatness is due to saturation of the output MOSFET.
  - file: ccscmp-v1r1-ind-end.png
    width: 800
    height: 480
    tip: >
      first revision current waveform with a 10 mH inductive load. the
      flatness is due to saturation of the output MOSFET.
  - file: ccscmp-v1r2-res-all.png
    width: 800
    height: 480
    tip: >
      second revision current waveform with a 2-ohm resistive load. no more
      HF oscillations!
  - file: ccscmp-v1r2-res-end.png
    width: 800
    height: 480
    tip: >
      second revision current waveform with a 2-ohm resistive load.
  - file: ccscmp-v1r2-ind-all.png
    width: 800
    height: 480
    tip: >
      second revision current waveform with a 10 mH inductive load.
  - file: ccscmp-v1r2-ind-end.png
    width: 800
    height: 480
    tip: >
      second revision current waveform with a 10 mH inductive load, showing
      the critical fall-time.
  - file: ppm-v1r3-schematic.png
    width: 776
    height: 600
    tip: >
      final block diagram (first schematic page) of the PPMv1r3 board as it
      was built and tested.
  - file: ppm-v1r3-layout.png
    width: 719
    height: 600
    tip: >
      final board layout for PPMv1r3.
  - file: ppm-v1r3-image01.png
    width: 800
    height: 600
    tip: >
      beer and soldering fumes: a winning combination!
  - file: ppm-v1r3-image02.png
    width: 800
    height: 600
    tip: >
      the third-revision board, assembled and resting comfortably in its
      case.
  - file: ppm-v1r3-image03.png
    width: 800
    height: 600
    tip: >
      i found an un-developed field within a reasonable distance from my
      place, so a few tests were conducted out there to ensure minimal
      interference and maximal homogeneity.
  - file: ppm-v1r3-image04.png
    width: 800
    height: 444
    tip: >
      the very first precession signal acquired using the device. this took
      45 minutes (128 signal averages) in the basement of my chemistry
      building.
  - file: ppm-v1r3-image05.png
    width: 800
    height: 446
    tip: >
      the second precession signal acquired using the device, with a bit of
      digital retouching (removal of noise background). this was acquired in
      32 scans.
  - file: backspin-init.png
    width: 800
    height: 528
    tip: >
      the user first has to connect the device and initialize communication
      with 'ii' in the bottom command bar.
  - file: backspin-par.png
    width: 800
    height: 528
    tip: >
      acquisition parameters appear that allow the user to tune up every
      little detail of the earth's field NMR experiment. to change a
      parameter, you just type 'sn 16384' (or similar) in the command bar.
  - file: backspin-acq.png
    width: 800
    height: 528
    tip: >
      acquisition starts when 'zg' is run and finishes with a plot of the
      acquired time-domain data. this is an example of leaving the amplifier
      input floating without a BNC terminator. <b>:)</b>
  - file: backspin-ft.png
    width: 800
    height: 528
    tip: >
      fourier transformation of the time-domain data yields a spectrum.
  - file: backspin-wfp.png
    width: 800
    height: 528
    tip: >
      short-time fourier transformation via 'wfp' yields a spectral
      waterfall of the acquisition, which is helpful for discerning
      exponentially decaying precession signals from continuous sources of
      interference.
---

# Introduction

Because I work in a lab where the instrumentation of choice is Nuclear
Magnetic Resonance (NMR) spectroscopy, you can say I've grown fond of NMR,
as well as all the engineering challenges NMR instrumentation faces and
overcomes. Truth be told, sometimes I find the circuitry and signals in NMR
spectrometers more interesting than the sample... Don't tell my boss. **;)**

Of course, my level of understanding when it comes to circuits is not
**_yet_** advanced enough to tackle a full pulsed NMR design. I figured I'd
give myself a simpler challenge: a proton precession magnetometer.

** I absolutely could not have achieved success in this project without the
insight, guidance, support and encouragement offered by [Joe
Geller](mailto:joegeller@gellerlabs.com) at [Geller
Labs](http://www.gellerlabs.com). ** Thanks Joe!

# The science

Without going into a good amount of quantum mechanics, the idea behind
proton NMR is this: a proton (hydrogen nucleus), when placed in a static
magnetic field (_**B**<sub>0</sub>_), will be polarized by that field. If a
stronger static magnetic field (_**B**<sub>1</sub>_) is applied orthogonally
to the first field, the protons will essentially be re-polarized by the
stronger field, much the way a compass needle points to magnetic north. If
the stronger field is then turned off [sufficiently
quickly](http://en.wikipedia.org/wiki/Adiabatic_theorem), the proton will
begin to [precess](http://en.wikipedia.org/wiki/Larmor_precession) about the
original field at its characteristic frequency:

{% include equation.html id="01" %}

In the above equation, gamma is called the gyromagnetic ratio, which is a
scale factor that simply relates field strength to precession frequency. The
entire process is described a bit more completely by the phenomenological
[Bloch equations](http://en.wikipedia.org/wiki/Bloch_equations):

{% include equation.html id="02" %}

# The engineering

Solution of the Bloch equations for the <a
href='http://en.wikipedia.org/wiki/Earth's_magnetic_field'>Earth's field</a>
along _z_ and the polarizing field along _x_ yields a situation in which the
same solenoid used to generated the polarizing field may be utilized to
detect the precession signal as it swings through the _xy_ plane. Thus, a
properly constructed solenoid that holds at least 500 mL of water and sits
at a right angle to the local field vector should be capable of both
polarizing and detecting the sample protons.

Of course, it's much easier said than done. Other factors dictate the use of
specialized circuitry and design. For example, while polarization turn-on
may be slow, turn-off must be as fast as possible, or the magnetization will
decay away without precessing (more on that later). Furthermore, the signal
is tiny: on the order of nanovolts to microvolts. Thus, placing both digital
and analog components on the circuit board requires careful attention to
grounding and signal paths. Finally, the device should be powered solely
from a PC USB port, with the exception of the polarization battery. This
dictates the use of ultralow-noise switching regulators to turn the nasty
USB +5V<sub>dc</sub> into a clean +/-5V<sub>dc</sub>.

If all that isn't enough, construction of the coil itself has broad impacts
on the entire system. It's a big task, no doubt...

# FIL: Bandpass filter

This whole project was kind of dead in the water until I made this board. I
had been working for months on self-contained low-noise preamplifiers
designed around multiple LT1028 opamps, and had gotten nowhere. This board
renewed my faith in the feasibility of the project just enough to get
started again.

The FILv1r0 board is derived from an 8<sup>th</sup> order Chebyshev bandpass
filter in a multiple-feedback topology proposed by the TI FilterPro software
tool. The design targets were: 1.4 kHz passband center, 3.7 kHz passband
width, and +/- 0.5 dB passband ripple. In fact, the board -- realized around
an Analog Devices OP462 -- achieved the targets just fine. The -3 dB rolloff
frequencies of the filter of 500 Hz and 4.0 kHz translate to a magnetic
field (as measured through the proton gyromagnetic ratio) that can range
from 11.75 to 93.95 microtesla and remain detectable, far outside the
typical values for earth's field.

{% include gallery.html dir="ppm" images=page.images %}

# INA: Preamplifier

Excited from the success of the filter design, I went to work on a new
instrumentation preamplifier circuit, this time simplifying around the
fixed-gain (66 dB) AD8428 low-noise instrumentation amplifier IC. Thanks to
the exemplary application notes on noise, grounding and instrumentation
amplifiers put out by Analog Devices and Linear Technology, I was able to
incorporate a functional differential filter into the design to limit any RF
interference that could try and creep in. And it worked!

{% include gallery.html dir="ppm" images=page.images %}

# OSC: Test oscillator

This oscillator was a quick circuit to test the true noise floor of the INA
amplifier and PPM analog signal chain. It was designed to put out a 1.0 kHz
sine wave at 10 microvolts, but the output voltage ended up around six times
that. Good enough. I have plenty of inline attenuators that can kick that
down plenty.

{% include gallery.html dir="ppm" images=page.images %}

# DIG: Digitizer

Once the input precession signal is suitably amplified, it has to be
captured somehow! I decided to use an external 16-bit SAR ADC attached to an
ATmega32U2 to get the analog data into digital bits on a host computer.

First off, I was blown away at how much nicer it is to build around the new
USB-enabled ATmega chips. Programming _and_ communication can now both be
done over the USB cable -- there's no longer any need for that stupid ISP,
unless you're doing something wacky with fuses.

I rewrote the usb-serial software stack from the Teensy 2.0 to use in the
DIG board. _(I say rewrote because it was literally all typed in again, and
I did change a significant amount of the code to make it more readable and
understandable...)_ The end result was a USB device that you could 'cat' and
get a timed binary dump of ADC register values from. Neat!

{% include gallery.html dir="ppm" images=page.images %}

# PPM: First revision

Once I had built up and tested the designs above, I was left with a choice:
keep building modular boards for the analog power supply and current sink,
or just wing it and build up a complete magnetometer prototype. I was a bit
impatient, so I chose the latter. I got a bit lucky. After swapping out the
current sink driver opamp to a slower chip, the whole board was completely
functional!

{% include gallery.html dir="ppm" images=page.images %}

The sensor coil current sink did prove to be a bit touchier than I expected.
I had originally designed in an AD8591 3 MHz 250 mA rail-to-rail opamp into
the circuit, without any compensation or high frequency rolloff. The result
was pretty severe oscillations in the output current around 3 MHz.

Swapping the AD8591 with the AD8541 1 MHz opamp and upping the compensation
capacitor to 10 nF quenched the oscillations with a resistive load and the
sensor coil, so I went with that.

{% include gallery.html dir="ppm" images=page.images %}

# PPM: Second revision

The second revision magnetometer was relatively similar to the original
version, with the only major changes being:

 * Officially designed in a 12-bit CCS DAC
 * Changed a few resistors to thin-film type
 * Current sink AD8591 replaced with AD8541
 * Added FET gate resistor to current sink
 * Increased size of capacitor in CCS feedback
 * Added FET gate pull-down resistor to REL_EN
 * Added a third LED indicator, because why not?

{% include gallery.html dir="ppm" images=page.images %}

Of course, I wish I'd tested the current sink with the actual sensor coil
before finalizing the second revision, because the behaviour changes wildly
between a resistive load and an inductive one. I learned that the hard way,
and ended up having to go back to compare polarization waveforms for both
versions, shown below:

{% include gallery.html dir="ppm" images=page.images %}

The final verdict from these comparisons was that placing a huge inductor
inside the feedback path of a current-boosted opamp was probably a poor
decision. Experimentation with several possible alternative current sink
circuits led me to decide on the simplest possible method: directly
switching the maximum current available by Ohm's law. I'm expecting
inductive fall times around ten microseconds using this method in the next
revision.

# PPM: Third revision

The major change in the third revision board focus on the redesigned coil
polarization scheme, which does away with the 12 bits of current resolution
in exchange for certainty that the coil will experience a flat polarization
envelope with rise and fall times below a couple hundred microseconds.

A less serious revision involved a lowering of the input instrumentation
amplifier's 3 dB rolloff from 300 kHz to 15 kHz in an attempt to further
reduce high-frequency noise and aliasing in the input signal chain.

{% include gallery.html dir="ppm" images=page.images %}

Lo and behold, the third time was a charm! After several trials with the new
board (including realizing I had forgotten to fill the coil with that magic
water!) I collected a hopelessly smeared NMR line in the basement of the
chemistry building at UNL. Subsequent tests in a more remote region of
Nebraska resulted in a sharper, more intense line: confirmation that the
magnetometer **works**.

{% include gallery.html dir="ppm" images=page.images %}

# The CLI software

Because DIG was a true proof of concept, I only wanted to test the very
basic and critical features of the design first: transferring a live stream
of ADC values back to the host in real time. So the first walk of testing
DIG was to just **cat** it's device file. How elegant! **:P**

Of course, my first real attempt at talking with the DIGv1r0 board was
through a tiny set of command line programs. There is really no need to
build up a complete graphical interface for debugging the prototype. The
functions of the PPM are boiled down into three commands: **rpar**,
**wpar**, and **zg**. (Yes, it's a tiny hat-tip to the folks at Bruker.) The
parms are transferred in 15-byte packets (six parameters) using **rpar** and
**wpar**, and **zg** initiates execution of an acquisition. Signal averaging
of multiple transients is also supported.

As an example, the following code shows the process of reading current
parms, writing new parms, and running a four-scan acquisition with the new
parms. The new parms are for a 5-second polarization, 32k samples at 20
kS/s, a 10-millisecond dead time before and after polarization, and a 1-amp
coil polarization current:

```
[b][prompt] rpar[/b]
RPAR: 62 800 16384 25 25 16 OK
[b][prompt] wpar 306 800 32768 400 400 2048[/b]
WPAR: OK
[b][prompt] zg 4[/b]
RPAR: 306 800 32768 400 400 128 OK
ZG: POL ACQ POL ACQ POL ACQ POL ACQ OK
[b][prompt] awk 'END {print NR, NF}' fid[/b]
32768 2
```

I got pretty tired of translating between DAC and timer/counter register
values and wrote a few helper functions to convert to and from human-
readable versions of the PPM parameters, like so:

```
[b][prompt] wparh 10 22.05 32768 1 10 0.5[/b]
WPAR: OK
[b][prompt] rparh[/b]
RPAR: 610 726 32768 40 400 1024 OK

  Polarization time     9.994 s
  Acquisition rate      22.039 kS/s
  Sample points         32768
  Polarization deadtime 1.000 ms
  Acquisition deadtime  10.000 ms
  Polarization current  0.500 A
```

Conversion into the frequency domain was the next software design target, so
I wrote **ft**, **hrft** and **wfp** to address that need. In short, **ft**
just calculates a Fast Fourier Transform of the time-domain data, **hrft**
calculates a 'High Resolution Fourier Transform' of the data, and **wfp**
calculates a Short-Time Fourier Transform 'waterfall' from the data. Once an
acquisition is complete, running them is as easy as:

```
[b][prompt] ft[/b]
[b][prompt] wfp[/b]
[b][prompt] hrft 950 1050[/b]
```

Finally, if the **wparh** statement above didn't give you the hint, there is
a tool to save the acquired time-domain data as a 'wav' file: **snd**.

# The GUI software

Once I had a first complete prototype PPM board, I quickly became frustrated
with having to run a shell command to acquire and then jump into gnuplot for
visualization. It was time for a graphical interface to the device.

May I present **backspin**. It's really just a quick hack in GTK+-3.0 that
ties into the API I had already written for the CLI utilities and provides a
snazzy way of visualizing acquired and transformed data without tabbing
between a ton of windows. The following images detail a typical progression
through the **backspin** program:

{% include gallery.html dir="ppm" images=page.images %}

# The Python API

Because why stop at a small set of inflexible command-line and graphical
tools? I couldn't help myself! I wrote a C extension in Python (2.7 and 3.3)
that links into the PPM goodness, allowing complete control over a connected
magnetometer from inside the Python scripting language.

For example, here's the Python code for acquiring and plotting an acquired
spectrum:

```
import pyppm
import numpy as np
import matplotlib.pyplot as plt

device = pyppm.PPM()
device.setparm(pyppm.POLARIZE_TIME, 10)
device.setparm(pyppm.POINT_COUNT, 32768)

(t, a) = device.acquire()
(f, A) = pyppm.fft(t, a)

l, = plt.plot(np.array(f), np.array(A))
plt.show()
```

# Project videos

From time to time I'd post a video on part of the project, so here are all
the videos I've put up relating to the magnetometer...

{% include youtube.html id="IgR02pbqHtA" %}

{% include youtube.html id="05Pod3HhqNs" %}

# The source code

This is an open-source project, from the software to the hardware. The whole
shebang is wrapped up into a single tarballed source tree, with a few
scripts inside to simplify getting started. The circuit schematics can be
read and edited with gEDA gschem and the board designs can be read and
edited with gEDA PCB.

 * [GitHub repository](http://github.com/geekysuavo/pyppm)

Enjoy! **:D**
