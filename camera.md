---
permalink: /camera/
title: CAMERA
heading: Convex Accelerated Maximum Entropy Reconstruction
subheading: It's really just MaxEnt, but faster
layout: project
bar: top
images:
  - file: conv-wrt-ffm.png
    width: 800
    height: 571
    tip: >
      Convergence of CAMERA, with and without line-search (L.S.), compared
      to the existing Fast Forward MaxEnt (FFM) algorithm.
  - file: conv-wrt-rnmrtk.png
    width: 800
    height: 571
    tip: >
      Convergence of line-search CAMERA compared to the Cambridge MaxEnt
      algorithm employed in the Rowland NMR Toolkit.
  - file: deltas.png
    width: 800
    height: 571
    tip: >
      Convergence of constant-aim CAMERA (without line search) as a function
      of various constant regularization functional curvature values.
  - file: lambdas.png
    width: 800
    height: 571
    tip: >
      Convergence of constant-lambda CAMERA (without line search) as a
      function of various constant Lagrange multipliers.
  - file: hsqc.png
    width: 800
    height: 271
    tip: >
      CAMERA-reconstructed proton-nitrogen HSQC dataset of double-labeled
      ubiquitin.
  - file: hnco.png
    width: 701
    height: 600
    tip: >
      Projection of a CAMERA-reconstructed HNCO dataset along the proton
      spectral dimension.
  - file: decoup.png
    width: 800
    height: 271
    tip: >
      Analysis of CAMERA deconvolution performance of a doublet having
      a known J-coupling constant.
---

# Introduction

Maximum Entropy, or MaxEnt, is a method commonly used to reconstruct
nonuniformly sparsely sampled data in [Nuclear Magnetic Resonance](
https://en.wikipedia.org/wiki/Nuclear_magnetic_resonance) (NMR)
spectroscopy. MaxEnt uses the [principle of maximum entropy](
https://en.wikipedia.org/wiki/Principle_of_maximum_entropy) to guide
reconstruction: it finds the least informative spectrum that agrees
with the sparse measured data.

Prior to this work, MaxEnt reconstruction was performed using
techniques originally introduced by [Skilling and Bryan](
https://dx.doi.org/10.1093/mnras/211.1.111) in 1984 and transferred into
NMR by [Hoch, Stern and colleagues](http://rnmrtk.uchc.edu/) over the
years. However, these techniques did not fully exploit the convexity
and smoothness of the entropy [regularization functional](
https://en.wikipedia.org/wiki/Regularization_%28mathematics%29),
and converged to their solutions rather slowly, at least compared
to the theoretically optimum convergence rates.

The Convex Accelerated Maximum Entropy Reconstruction Algorithm, or CAMERA,
is a new MaxEnt reconstruction algorithm for NMR that fully exploits the
curvature and convexity of the entropy functional to converge rapidly to
MaxEnt solutions. CAMERA is faster than previous methods of MaxEnt
reconstruction, and integrates easily into [nmrPipe](
http://spin.niddk.nih.gov/NMRPipe/) processing scripts. So if you're
reconstructing on-grid NUS NMR datasets, you should seriously be using
CAMERA. **;)**

# The mathematics

CAMERA utilizes accelerated convex optimization techniques developed by
[Yurii Nesterov](https://scholar.google.com/citations?user=DJ8Ep8YAAAAJ)
for minimizing smooth convex functions under convex constraints. Formally
stated, CAMERA solves:

{% include equation.html id="01" %}

$$
\mathbf{\hat{x}} =
 \underset{\mathbf{x} \in \mathcal{Q}}{\text{argmax}}
 \; f(\mathbf{F}^\ast \mathbf{x})
$$

where $\mathcal{Q}$ represents the set of all feasible solutions:

{% include equation.html id="02" %}

The entropy functional $f$ is computed by summation of the entropies of all
frequency-domain estimates,

{% include equation.html id="03" %}

$$f(\mathbf{X}) \equiv \sum_{i=1}^N S(\mathbf{X}_i)$$

where $S$ represents the Hoch-Hore entropy functional,

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
information is then used in a projected gradient mapping step to compute a
new **y** iterate,

{% include equation.html id="06" %}

where _L_ is an estimate of the local Lipschitz constant of _f_ at **x**.
The acceleration of CAMERA rests in the final equation for computing the
next **x** iterate:

{% include equation.html id="07" %}

which is essentially a way of introducing momentum from previous iterates
into the trajectory of **x** as it ascends to the global maximizer of _f_.

**TL;DR:** CAMERA is fast and lightweight. It averages two FFTs per iteration,
converges in 100-500 iterations, and only requires six _N_-element arrays per
reconstruction task.

# Performance analyses

These images recap the fairly detailed performance demonstrations performed
for the 2016 _J. Magn. Reson._ paper, and highlight reconstruction results
on two example NUS datasets.

{% include gallery.html dir="camera" images=page.images %}

# The code

The **camera** reconstruction utility is written in C and requires a modern
C compiler that supports several vector processing extensions. The
[FFTW](http://www.fftw.org) library is required to compile CAMERA. More
information may be found within the CAMERA GitHub repository:

 * [GitHub repository](http://github.com/geekysuavo/camera)
 * [Paper on CAMERA]({{site.db}}camera/bworley-2016.pdf)

