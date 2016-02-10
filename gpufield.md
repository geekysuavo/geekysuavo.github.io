---
permalink: /gpufield/
title: GPUfield - geekysuavo.github.io
heading: GPUfield
subheading: A fast magnetostatics solver
layout: project
bar: top
---

# Introduction

# The mathematics

{% include equation.html dir="gpufield" id="01" %}

Where **A** and **B** are the starting and ending points of each line
segment, **r** is the point at which the field is to be computed, and
**v** is the perpendicular vector from **r** to **AB**.

Whew! Now wasn't that simple?

# Image gallery

I've always fuond magnetic fields to give the most beautiful images, so
here are a few computed results for your enjoyment. **:)**

# The code

The GPUfield program runs as an interpreter that parses a very simple set
of commands. Wires are added using _moveto_ and _lineto_ statements, or
through higher-level commands like _arc_, _solenoid_, _maxwell_ or
_golay_. Once the wires are in place, the magnetic field may be
computed along a surface using the _grid_ command, or along an arbitrary
linear trajectory using the _traj_ command.

Enough of my rambling... If you want to check out the source code, the latest
version is available on GitHub:

 * [GPUfield on GitHub](https://github.com/geekysuavo/gpufield)

