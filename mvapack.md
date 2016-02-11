---
permalink: /mvapack/
title: The MVAPACK toolbox
heading: MVAPACK - NMR chemometrics in octave
subheading: Free and open for all your grubby little hands!
layout: project
bar: top
images:
  - file: fig-01.png
    width: 800
    height: 315
    tip: >
      flow diagram (a) and corresponding processing script (b) of a simple
      metabolic fingerprinting experiment.
  - file: fig-02.png
    width: 800
    height: 287
    tip: >
      principal component analysis (a) and linear discriminant analysis (b)
      scores plots for the coffee dataset.
  - file: fig-03.png
    width: 800
    height: 287
    tip: >
      orthogonal projections to latent structures regression scores plot (a)
      and s-plot (b) for the coffee dataset.
  - file: fig-04.png
    width: 800
    height: 600
    tip: >
      backscaled pseudospectral loadings plot for the coffee dataset when
      regressed against uv/vis-predicted caffeine concentration.
  - file: fig-05.png
    width: 800
    height: 600
    tip: >
      degree of fit (R<sup>2</sup>) and degree of predictive ability
      (Q<sup>2</sup>) for the PCA model.
  - file: fig-06.png
    width: 800
    height: 600
    tip: >
      response permutation testing results of R<sup>2</sup> and
      Q<sup>2</sup> for the OPLS-R model.
---

# Introduction

While I hired on to work on a completely different set of projects during
graduate school at UNL, I quickly gravitated towards writing software
solutions for the other members of the group, whose main research goals were
founded on the techniques of NMR metabolomics.

The MVAPACK toolbox originally began as a small set of utilities I could use
to rapidly load 1D <sup>1</sup>H NMR spectra into a [GNU
Octave](http://www.gnu.org/software/octave/) environment for whatever
mathematical manipulation I was working on at the time. Once I saw how
simple it could be to manipulate NMR datasets as matrices in Octave, I began
writing more support code for NMR processing. Finally, the MVAPACK suite had
arrived when I implemented multivariate analysis routines, making the code a
one-stop shop for 1D NMR chemometrics.

Before you tell me that it's been done before: I know. But this is the first
toolbox of it's kind that's free and open-source.

# An example pipeline

We work on Bruker spectrometers, so I implemented routines that can take raw
Bruker Free Induction Decay data files into octave and process them under
full automation, taking the data all the way to the final multivariate
models with little to no human intervention.

Here are a few figures I captured as an example of the path the data takes
through the MVAPACK software for a general metabolomics experiment. I just
bought coffee downtown, lyophilized it, resuspended in heavy water, and ran
the NMR. **:)**

{% include gallery.html dir="mvapack" images=page.images %}

# The code

The official MVAPACK sources are freely available for academic use at my
graduate research group's website.

 * [Official MVAPACK page](http://bionmr.unl.edu/mvapack.php)
 * [bworley-2013.pdf]({{site.db}}mvapack/bworley-2013.pdf)

