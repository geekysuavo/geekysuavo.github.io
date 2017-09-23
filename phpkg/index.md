---
permalink: /phpkg/
title: PHPkg
heading: A simple Pkg repository viewer
subheading: An elementary web interface for Pkg
layout: project
bar: top
---

# Introduction

The Pkg package manager, a tool I hacked together to manage the binary
packages for a distribution, supports remote package repositories (in
their most simple form). The PHPkg web interface provided a simple,
powerful way to browse any remote repository's packages, and even to
search for dependencies.

In a nutshell, PHPkg is a set of PHP (4 and 5) scripts that provide a
simple, straightforward web interface for any HTTP server that stores
Pkg-compliant package repositories.

It's far from fully functional, even buggy. But I figured why not put it
out there for others. Maybe it could be useful somehow.

# Instructions

PHPkg requires a web server running PHP4 or PHP5, a few KB of webspace,
and one or more hosted Pkg repositories. First, just copy all of the files
in **src/** into the web server root (or another hosted directory).

The Pkg repositories that PHPkg will interface with must be available on
the local filesystem of the web server hosting the PHPkg scripts. On
systems whose repositories are being managed by the Pkg scripts (highly
recommended), there will be a file called 'repos.conf' in the **/etc/pkg**
directory. You may either copy this file into the directory holding the
PHPkg scripts, or leave it where it is. Second, edit the first few lines
of the **phpkg.php** file to point to the **repos.conf** that you wish to
use. (See **phpkg.php** for more information)

That should do it! Once the above changes have been made, the PHPkg
interface should be set up.

# Source code

 * [phpkg-20070701.tgz]({{site.db}}phpkg/phpkg-20070701.tgz)

