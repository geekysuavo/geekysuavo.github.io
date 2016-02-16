---
title: Research projects
heading: My research projects
layout: listing
bar: top
projects:
  - link: camera
    caption: Convex Accelerated MaxEnt Reconstruction Algorithm
    content: >
      CAMERA is a new method for rapidly reconstructing NUS NMR data
      according to the statistical principle of maximum entropy. Using
      accelerated techniques for optimizing smooth convex functions,
      CAMERA converges to MaxEnt solutions faster than prior methods.
  - link: nusutils
    caption: Seed-independent nonuniform sampling
    content: >
      The acquisition of sparsely sampled time-domain data in NMR
      spectroscopy is becoming more and more popular, but most techniques
      for determining which Nyquist grid points to sample are based on
      pseudorandom numbers. The choice of which sample to select from
      the ensemble of possibilities is nontrivial, and is usually too
      tiresome for the practicing spectroscopist. This is my two cents
      on how to address the issue of seed-dependent sampling.
  - link: mvapack
    caption: Open-source octave tools for chemometrics
    content: >
      Pipelines for handling 1D NMR data for metabolomics and other
      chemometrics applications are typically either <i>ad hoc</i> toolchains
      of non-free software spiced with manual curation in Excel, or custom
      MATLAB toolkits that have never reached the public. My MVAPACK package
      for GNU Octave is meant to address the need for a FOSS 1D NMR
      chemometrics toolkit.
  - link: pscorr
    caption: Simultaneously phasing and normalizing NMR data
    content: >
      NMR datasets suffer from a phase-correction problem, where either a
      trained user or software algorithms must 'phase' spectra in order to
      extract highest quality information. Phase errors <i>between</i>
      spectra in a dataset have never been addressed, until I wrote
      <b>pscorr</b>, of course.
  - link: pca-utils
    caption: Quantifying PCA/PLS scores-space separations
    content: >
      The bulk of the metabolomics community relies on visual inspection
      of PCA and PLS-DA scores plots to decide which experimental groups
      show significant differences. Because this is actually a simple
      statistical task and subject to human bias, I wrote a small set
      of C programs to rapidly assess the statistical significance of
      separations in multivariate scores.
---
