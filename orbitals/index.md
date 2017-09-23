---
permalink: /orbitals/
title: The Hydrogen Orbitals
heading: The Hydrogen Orbitals
subheading: A nice and simple quantum mechanical screensaver
layout: project
bar: top
---

# Introduction

A hydrogen atom is a relatively simple system, having a single proton and
a single electron bound to the proton. Even in quantum mechanics, this
two-body problem has an analytic solution without requiring the construction
of atomic orbital basis sets. Indeed, the hydrogen atomic orbitals may be
used as a basis, though it is not often done in practice for computational
reasons.

# Mathematics

The wavefunction of the bound electron in a hydrogen atom may be obtained by
separation of variables in a spherical polar coordinate system, like so:

$$\psi(r,\theta,\phi) = R(r) \Theta(\theta) \Phi(\phi)$$

More specifically, for the energy and angular momentum quantum numbers
$n$, $l$ and $m$, the wavefunction has the form:

$$
\psi_{nlm}(r,\theta,\phi) =
 N_{nl} \left( \frac{2 r}{n a_0} \right)
 L_{n-l-1}^{2l+1} \left( \frac{2 r}{n a_0} \right)
 Y_l^m(\theta,\phi)
$$

where the normalization factor equals:

$$
N_{nl}(\rho) =
 \sqrt{\left( \frac{\rho}{r} \right)^3 \frac{(n-l-1)!}{2n(n+l)!}}
 \exp \left( \frac{\rho}{2} \right)
 \rho^l
$$

The next term equals the generalized Laguerre polynomial:

$$
L_{p}^{\alpha} \left( \rho \right) =
 \frac{\rho^{-\alpha} e^{\rho}}{p!}
 \frac{d^p}{d \rho^p}
 \left(
  e^{-\rho} \rho^{p+\alpha}
 \right)
$$

And the final term equals the spherical harmonic equation:

$$
Y_l^m(\theta,\phi) =
 (-1)^m \sqrt{\frac{(2l+1)}{4 \pi} \frac{(l-m)!}{(l+m)!}}
 P_l^m(\cos \theta)
 e^{i m \phi}
$$

Finally, the term in the spherical harmonic equation represents the
associated Legendre polynomial:

$$
P_l^m(\cos \theta) =
 \frac{(-1)^m}{2^l l!}
 (1-\cos^2(\theta))^{m/2}
 \frac{d^{l+m}}{d(\cos \theta)^{l+m}}
 (\cos^2(\theta)-1)^l
$$

While these equations seem messy, they are directly computable, given a few
simple data structures for handling polynomial expressions.

# The screensaver

The screensaver randomly generates a set of valid quantum numbers, and then
calculates slices of the wavefunction probability density and phase. I also
actually implemented an octree-based representation of the wavefunction
that could be used in a marching cubes algorithm for displaying contours,
but the slices were so pretty, I didn't finish it. **:)**

Of course, this page would be pretty useless without source code and final
product, right?

 * [Screensaver]({{site.db}}orbitals/OrbitalScreenSaver-20131102.saver.zip)
 * [Project]({{site.db}}orbitals/OrbitalScreenSaver-20131102.xcarchive.zip)

# Video of the screensaver

{% include youtube.html id="0bqVGVqtFaM" %}

