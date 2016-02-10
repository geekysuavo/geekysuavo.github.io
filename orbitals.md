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

{% include equation.html id="01" %}

More specifically, for the energy and angular momentum quantum numbers
_n_, _l_ and _m_, the wavefunction has the form:

{% include equation.html id="02" %}

where the normalization factor equals:

{% include equation.html id="03" %}

The next term equals the generalized Laguerre polynomial:

{% include equation.html id="04" %}

And the final term equals the spherical harmonic equation:

{% include equation.html id="05" %}

Finally, the term in the spherical harmonic equation represents the
associated Legendre polynomial:

{% include equation.html id="06" %}

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

