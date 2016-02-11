---
permalink: /dgs/
title: Deterministic Nonuniform Gap Sampling
heading: Deterministic Nonuniform Gap Sampling
subheading: A general framework for sparse sampling
layout: project
bar: top
images:
  - file: results-l2.png
    width: 800
    height: 309
    tip: >
      iterative soft thresholding reconstruction residuals for (A) simulated
      one-dimensional traces and (B) real two-dimensional planes at varying
      global sampling densities.
  - file: results-psf.png
    width: 800
    height: 600
    tip: >
      sampling schedules and point spread functions for poisson-gap,
      sine-gap and sine-burst methods on 128x128 grids at varying global
      sampling densities.
  - file: results-hsqc.png
    width: 800
    height: 600
    tip: >
      reconstructed spectra from iterative soft thresholding after (A)
      uniform sampling and subsampling by (B) poisson-gap, (C) sine-gap and
      (D) sine-burst methods, all at five percent global sampling density.
---

# Introduction

It is becoming more and more common for NMR spectroscopists to nonuniformly
sparsely subsample their signals in the time domain, a technique referred to
as Nonuniform Sampling, or NUS. While I was playing around with one of the
more widely used sampling methods, called Poisson-gap, I ended up describing
a highly general multidimensional gap sampling framework. Under gap
sampling, each sampled data point is determined from the previously sampled
data point in the current trace by a simple recurrence relation:

{% include equation.html id="01" %}

where g(x<sub>i</sub>) is referred to as a 'gap equation'. Multidimensional
gap sampling schedules are built up recursively from lower-dimensional
sub-schedules according to the above relation. The popular Poisson-gap
method obeys a stochastic gap equation by drawing from a Poisson
distribution at each evalution of its gap equation. The related sine-gap and
sine-burst methods, developed in parallel with the framework, obey
deterministic gap equations and require no pseudorandom number generators.

The generality of the gap sampling framework was so tempting that I decided
to write a sampling program that could use any user-supplied gap equation.
The **gaputil** program was the result, and wraps the
[Julia](http://julialang.org/) mathematical programming language to
interpret almost any conceivable gap equation during schedule generation.

# Selected results

To show that deterministic sampling using the gap framework can produce
schedules that perform similarly to stochastic methods, a Monte Carlo
simulation was run. An ensemble of Poisson-gap samples was constructed.
Synthetic and real time-domain data were then subsampled using both the
ensemble of Poisson-gap schedules and the gap-framework schedules, and
residuals from Iterative Soft Thresholding (IST) reconstruction were
computed and compared.

The results were interesting. Sine-gap and sine-burst sampling using the
general framework yielded residuals that were comparable or better to
Poisson-gap sampling. This is a first for deterministic sampling methods,
which have until now been regarded as inferior to pseudorandomly sampled
methods.

{% include gallery.html dir="dgs" images=page.images %}

# The code

The **gaputil** program is fairly portable C, but requires Julia for gap
equation interpretation. It's hosted on GitHub. Once the paper is published,
I'll certainly post it here.

 * [GitHub repository](http://github.com/geekysuavo/gaputil)

