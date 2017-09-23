---
permalink: /pscorr/
title: Phase-scatter correction
heading: Phase-Scatter Correction
subheading: Simultaneously phase and normalize NMR spectra
layout: project
bar: top
images:
  - file: results.png
    width: 800
    height: 250
    tip: >
      Monte carlo statistics for (a) dilution factor recovery error, (b) PCA
      cluster quality, and (c) loading divergence angle over various phase
      errors
---

# Introduction

While most data sources for chemometrics only suffer from random dilution
factors, correctable by normalizing each observation to a common scale, NMR
data also contains phase error that can interfere with obtaining correct
normalization coefficients during analysis. Because of that, I developed an
algorithm (**pscorr**) to simultaneously phase and normalize 1D NMR spectra
for chemometrics applications.

There's really not much to say about PSC. It's based on a nonlinear least
squares minimization of the L<sub>2</sub> norm of the differences between
each scaled, phased spectrum and the mean pseudospectrum of the dataset. It
runs in GNU Octave and, with some subtle tweaks, would run without issue in
MATLAB.

# Selected results

To test the performance of PSC relative to other commonly used normalization
methods, I ran a Monte Carlo simulation. For various degrees of random phase
error introduced into a simulated 1D NMR metabolomics dataset, I calculated
normalization factors and modeled the datasets using PCA. The spectral
intensities in the data were randomly generated with certain mean values
such that six distinct classes should exist in the scores space. Closeness
to the true normalization factor (RMSE(alpha)) and quality of the clusters
in scores space (J<sub>2</sub>) were then calculated over all phase errors.

Long story short, PSC copes with more phase error than any other method of
normalization, producing better resolved clusters in PCA analyses. Provided
the spectra can be perfectly phased, however, MSC provides tighter clusters
and HM/PQ provide better normalization factor estimates.

{% include gallery.html dir="pscorr" images=page.images %}

# The code

The **pscorr** algorithm is standalone code, but is available as part of the
MVAPACK toolbox. You can get it on [the MVAPACK page]({{site.url}}/mvapack).
You can read more about PSC in the following papers:

 * [Publication on PSC]({{site.db}}pscorr/bworley-2014.pdf)
 * [Publication on USSR]({{site.db}}pscorr/bworley-2015.pdf)

