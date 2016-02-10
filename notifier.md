---
permalink: /notifier/
title: GNOME Gmail Notifier
heading: The GNOME Gmail Notifier
subheading: A Gmail Notifier for your Desktop
layout: project
bar: top
images:
  - file: shot-about.png
    width: 375
    height: 267
    tip: The notifier about dialog.
  - file: shot-edit.png
    width: 485
    height: 464
    tip: The dialog for editing account information.
  - file: shot-errors.png
    width: 426
    height: 136
    tip: A notification of account update errors.
  - file: shot-lmenu.png
    width: 357
    height: 152
    tip: The left-click panel menu.
  - file: shot-rmenu.png
    width: 205
    height: 126
    tip: The right-click panel menu.
  - file: shot-prefs.png
    width: 321
    height: 465
    tip: The preferences window.
  - file: shot-new-a.png
    width: 428
    height: 136
    tip: A new mail notification.
  - file: shot-new-b.png
    width: 425
    height: 132
    tip: Another new mail notification.
  - file: shot-new-c.png
    width: 428
    height: 135
    tip: Yet another new mail notification.
  - file: shot-none.png
    width: 426
    height: 138
    tip: An informative message about no configured accounts
  - file: shot-open.png
    width: 681
    height: 600
    tip: The window for choosing notification sounds.
---

# Introduction

The GNOME Gmail Notifier constantly and unobtrusively checks the status
of your Gmail and Google Apps Mail accounts for new messages and notifies
you as new mail arrives. Just set the Notifier to check the accounts you
wish to have inbox notifications for and it does all the work, informing
you of new message details as they arrive.

The GNOME Gmail Notifier was actively maintained until I started graduate
school. Now, I simply don't have the time to update it.

# Prerequisites

The following free software packages are required in order to use the
GNOME Gmail Notifier. Basically, if you have a recent GNU/Linux
distribution running the GNOME desktop, you're probably running way
more recent packages than required. **:)**

 * GLib 2.6.0
 * GTK+ 2.12.0
 * GConf 2.20.0
 * Libxml2 2.6.20
 * Libsoup 2.6.0
 * Libnotify 0.4.2
 * GStreamer 0.10.0
 * Gnome Keyring 0.4.2

# Screenshots

{% include gallery.html images=page.images %}

# Source code

Source tarballs and ebuilds were hosted on
[Google Code](http://gnome-gmail-notifier.googlecode.com/).
Alternatively, you can download them from this
server below:

 * [ver. 0.10.1]({{site.db}}notifier/gnome-gmail-notifier-0.10.1.tbz2)
 * [ver. 0.9.4]({{site.db}}notifier/gnome-gmail-notifier-0.9.4.tbz2)
 * [ver. 0.9.3]({{site.db}}notifier/gnome-gmail-notifier-0.9.3.tbz2)

