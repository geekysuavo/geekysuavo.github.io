---
permalink: /pca-utils/
title: PCA/PLS-DA Utilities
heading: Quantifying separations in PCA/PLS-DA scores
subheading: You mean we can't just eyeball that?
layout: project
bar: top
images:
  - file: beatles-plot.png
    width: 800
    height: 488
    tip: >
      an example PCA scores plot rendered from generated scores data.
      confidence ellipses show alpha=0.05.
  - file: beatles-tree.png
    width: 800
    height: 421
    tip: >
      dendrogram of the PCA scores. boostrap numbers on the branches are
      based on 1000 iterations. alternatively, p-values can be reported on
      the branches based on mahalanobis distances.
---

# Introduction

My graduate work in a lab that primarily focuses on
[NMR](http://en.wikipedia.org/wiki/NMR)-based
[metabolomics](http://en.wikipedia.org/wiki/Metabolomics) has brought me
into close contact with two very powerful multivariate data handling
algorithms: [PCA](http://en.wikipedia.org/wiki/Principal_component_analysis)
and [PLS](http://en.wikipedia.org/wiki/Partial_least_squares). These
algorithms uncover underlying trends in high-dimensional data (NMR spectra)
by approximating said data in a low-dimensional space. In the
low-dimensional 'latent variable' space, the original observations are
represented as points ('scores') and distances between the points are
related to the original distances between the high-dimensional spectra.

Practicioners of metabolomics may then draw several (~10-100) replicates
from any suitably chosen experimental groups and perform PCA or PLS on the
NMR (or MS, IR, Raman, CE, etc.) data to identify metabolic differences
between those groups.

A very salient question in this exercise is: 'how do we decide how far apart
experimental groups have to be in scores space to be significant?' The human
mind is an extremely creative and wonderful gift, but it leads us astray
from truth in times when we may expect a given outcome. Thankfully, cold and
calculating computer software can apply statistical measures to scores to
yield a scientifically respectable answer.

But a human still had to write the software. **:)**

# A small demonstration

Since I wanted to code to run virtually anywhere, I implemented
**pca-utils** in straight up, vanilla C. My implementation also incorporated
a [UPGMA](http://en.wikipedia.org/wiki/UPGMA) algorithm for generating
dendrograms from scores, as well as rendering confidence ellipses and
ellipsoids in two- and three-dimensional space, respectively.

Take, for example, urine samples (not actually) collected from four
individuals. One can use **pca-utils** to visualize the scores data with
both confidence ellipses and dendrograms, really answering the question:
'are these samples different?'

{% include gallery.html dir="pca-utils" images=page.images %}

# The code

Of course, this page would be pretty useless without source code, huh?
**:P** I'll throw in a PDF of the original paper while I'm at it.

 * [GitHub repository](http://github.com/geekysuavo/pca-utils)
 * [bworley-2013.pdf]({{site.db}}pca-utils/bworley-2013.pdf)

