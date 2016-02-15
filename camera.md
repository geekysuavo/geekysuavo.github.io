---
permalink: /camera/
title: CAMERA
heading: Convex Accelerated Maximum Entropy Reconstruction
subheading: It's really just MaxEnt, but faster
layout: project
bar: top
images:
  - file: fixme.png
    width: 100
    height: 100
    tip: >
      FIXME
---

# Introduction

FIXME

# The mathematics

FIXME

{% include equation.html id="01" %}

FIXME

{% include equation.html id="02" %}

FIXME

{% include equation.html id="03" %}

FIXME

{% include equation.html id="04" %}

FIXME

{% include equation.html id="05" %}

FIXME

{% include equation.html id="06" %}

FIXME

# Performance analyses

FIXME

{% include gallery.html dir="camera" images=page.images %}

# The code

The **camera** reconstruction utility is written in C and requires a modern
C compiler that supports several vector processing extensions. The
[FFTW](http://www.fftw.org) library is required to compile CAMERA. More
information may be found within the CAMERA GitHub repository:

 * [GitHub repository](http://github.com/geekysuavo/camera)
 * [Paper on CAMERA]({{site.db}}camera/bworley-2016.pdf)

