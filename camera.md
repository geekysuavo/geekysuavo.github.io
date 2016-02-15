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

CAMERA utilizes accelerated convex optimization techniques developed by
[Yurii Nesterov](https://scholar.google.com/citations?user=DJ8Ep8YAAAAJ)
for solving smooth convex functions under convex constraints. Formally
stated, CAMERA solves:

{% include equation.html id="01" %}

where _Q_ represents the set of all feasible solutions:

{% include equation.html id="02" %}

The entropy functional _f_ is computed by summation of the entropies of all
frequency-domain estimates,

{% include equation.html id="03" %}

where _S_ represents the Hoch-Hore entropy functional,

{% include equation.html id="04" %}

which is a smooth convex function over the hypercomplex vector space of
frequency-domain estimates, and has a known [Lipschitz constant](
https://en.wikipedia.org/wiki/Lipschitz_continuity). Part of the efficiency
of CAMERA revolves around its use of the [fast Fourier transform](
https://en.wikipedia.org/wiki/Fast_Fourier_transform) to compute the
time-domain gradient of the entropy functional at iteration _t_:

{% include equation.html id="05" %}

In the above equation, **F** represents the inverse discrete Fourier transform
and asterisks denote hypercomplex conjugate transposition. The local gradient
information is then used in a constrained projected gradient mapping step to
compute a new **y** iterate,

{% include equation.html id="06" %}

FIXME

{% include equation.html id="07" %}

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

