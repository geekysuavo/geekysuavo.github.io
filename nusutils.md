---
permalink: /nusutils/
title: NUS Utilities
heading: Seed-independent Nonuniform Sampling
subheading: A general framework for sparse sampling
layout: project
bar: top
images:
  - file: gaputil-l2.png
    width: 800
    height: 309
    tip: >
      Iterative Soft Thresholding reconstruction residuals for (A) simulated
      one-dimensional traces and (B) real two-dimensional planes at varying
      global sampling densities.
  - file: gaputil-psf.png
    width: 800
    height: 600
    tip: >
      Sampling schedules and point spread functions for Poisson-gap,
      sine-gap and sine-burst methods on 128x128 grids at varying global
      sampling densities.
  - file: gaputil-hsqc.png
    width: 800
    height: 600
    tip: >
      Reconstructed spectra from Iterative Soft Thresholding after (A)
      uniform sampling and subsampling by (B) Poisson-gap, (C) sine-gap and
      (D) sine-burst methods, all at five percent global sampling density.
---

# Introduction

## Gap sampling

It is becoming more and more common for NMR spectroscopists to nonuniformly
sparsely subsample their signals in the time domain, a technique referred to
as Nonuniform Sampling, or NUS. While I was playing around with one of the
more widely used sampling methods, called Poisson-gap, I ended up describing
a highly general multidimensional gap sampling framework. Under gap
sampling, each sampled data point is determined from the previously sampled
data point in the current trace by a simple recurrence relation:

{% include equation.html id="01" %}

where _g(x<sub>i</sub>)_ is referred to as a 'gap equation'. Multidimensional
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

## Density sampling

Following on the heels of gap sampling, I decided to investigate if
probability density-based sampling methods could be stripped of their
pseudorandom seed dependence. Indeed, using [Sub-random number sequences](
https://en.wikipedia.org/wiki/Low-discrepancy_sequence), it was possible.

In fact, sub-random numbers could be used to augment the deterministic gap
equations for added incoherence in the resulting NUS schedules. The
**rejutil** and **jitutil** programs were the fruits of this labor, and
the **gaputil** program was also expanded to admit sub-random numbers
into its deterministic gap equations.

# Selected results

To show that seed-independent sampling can produce schedules that perform
similarly to stochastic methods, a Monte Carlo simulation was run.
An ensemble of Poisson-gap samples was constructed. Synthetic and
real time-domain data were then subsampled using both the ensemble
of Poisson-gap schedules and the gap-framework schedules, and
residuals from Iterative Soft Thresholding (IST) reconstruction were
computed and compared.

The results were interesting. Sine-gap and sine-burst sampling using the
general framework yielded residuals that were comparable or better to
Poisson-gap sampling. This is a first for seed-independent sampling methods,
which have until now been regarded as inferior to pseudorandomly sampled
methods.

{% include gallery.html dir="nusutils" images=page.images %}

# The code

The **nusutils** programs are all fairly portable C, but require Julia for
equation interpretation. They're hosted on GitHub:

 * [GitHub repository](http://github.com/geekysuavo/nusutils)
 * [Paper on gap sampling]({{site.db}}nusutils/bworley-2015.pdf)

