---
permalink: /pkg/
title: Pkg
heading: A simplistic bash package manager
subheading: My awful adaptation of slackpkg
layout: project
bar: top
---

# Introduction

The Pkg scripts were partly inspired by the versatility of the slackware
pkgtools scripts, which are also written in Bourne-compatible dialect.
However, the Pkg scripts were a radical departure from pkgtools in form
and function, with (mostly) POSIX-compliant syntax and a more centralized
set of functionality.

While the pkgtools scripts perform most of their functions under the
impression that the key information about the package lies with its
filename, the Pkg scripts looked inside package files to determine their
critical features.

The Pkg scripts also provided an automated package compilation process,
which uses user-created shell scripts (build files) to generate packages
from source. Alongside the traditional file-based utilities is a simple
utility (**pkg**) that handles packages, repositories, and dependencies
in a straightforward manner.

# Manual pages

 * [buildpkg.8](man8-buildpkg.html)
 * [explodepkg.8](man8-explodepkg.html)
 * [infopkg.8](man8-infopkg.html)
 * [installpkg.8](man8-installpkg.html)
 * [makepkg.8](man8-makepkg.html)
 * [pkg.8](man8-pkg.html)
 * [removepkg.8](man8-removepkg.html)
 * [servepkg.8](man8-servepkg.html)
 * [sourcepkg.8](man8-sourcepkg.html)
 * [upgradepkg.8](man8-upgradepkg.html)

# Source code

 * [pkg-20070813.tgz]({{site.db}}pkg/pkg-20070813.tgz)

