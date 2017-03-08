---
permalink: /bezier/
title: Bezier
heading: A simple exercise with Bezier curves
subheading: An old project that was fun enough to document
layout: project
bar: top
images:
  - file: ex-curvy.png
    width: 512
    height: 512
    tip: A self-crossing curve.
  - file: ex-infinity.png
    width: 512
    height: 512
    tip: A familiar symbol.
  - file: ex-linear.png
    width: 512
    height: 512
    tip: Just a line.
  - file: ex-parabolic.png
    width: 512
    height: 512
    tip: Perhaps not actually parabolic.
  - file: ex-round.png
    width: 512
    height: 512
    tip: A closed path.
  - file: ex-sinusoidal.png
    width: 512
    height: 512
    tip: An oscillatory path.
---

# Introduction

I was always interested in the computerized usage of curves (such as NURBS,
Splines, etc.) so I decided to learn a little more about Bezier curves one
evening in the school library in 2007, and I instantly decided to write a C
program to generate renderable curves from control points.

My first program, **bezier**, generated its curves in static arrays to
hold the points. This method was fast, but quite inflexible, and not as
portable as I had hoped. My second attempt resulted in an implementation
of the Bezier plotter that utilized linked lists to store the point data,
called **belize**.

# Mathematics

A Bezier function is generated as the following parametric equation, where
$P_i$ represents the cartesian coordinate of the
$i$-th control point. The number of points $N$ determines how
many steps are made by the parameter, $t$.

$$
\mathbf{B}(t) = \sum_{i=0}^n { n \choose i }
 \mathbf{P}_i (1-t)^{n-i} t^i
 \quad t \in [ 0, 1 ].
$$

# Source code

I decided to release different packages for each platform. The codebase is
essentially unchanged, if I recall correctly. It's been a while. **:P**

 * [Linux source]({{site.db}}bezier/belize-20070711.tbz2)
 * [Windows source]({{site.db}}bezier/belize32-src-20070714.zip)
 * [Windows binary]({{site.db}}bezier/belize32-bin-20070714.zip)
 * [OSX source]({{site.db}}bezier/belizeOSX-src-20070810.tbz2)
 * [OSX binary]({{site.db}}bezier/belizeOSX-bin-20070810.tbz2)

# Example curves

{% include gallery.html images=page.images dir="bezier" %}

