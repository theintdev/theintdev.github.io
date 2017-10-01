---
layout: post
title: Raspberry Pi Zero USB hub mod with case
image: /media/mh_zerocase.jpg
disqus_id: 1426

author:
  name: Matt Brailsford
  avatar: https://avatars1.githubusercontent.com/u/527305?s=200
  twitter: mattbrailsford
  url: twitter.com/mattbrailsford
  bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui nec quam vestibulum semper non vel massa. Mauris vitae gravida sem. Vestibulum rutrum leo sit amet mi viverra, sit amet cursus metus consequat.
---

If you were lucky enough to get your hands on one of the new [Raspberry Pi Zero's](https://www.raspberrypi.org/products/pi-zero/), one of the first things you are likely going to want to do is hook it up to a USB hub to add things like WiFi and a keyboard and mouse. Of course you can just connect an ordinary USB hub, but there isn't many compact solutions available just yet. There are a few methods that have been posted online so far, from [hacking an off the shelf USB hub](http://frederickvandenbosch.be/?p=1343), to [manufacturing a custom hub yourself](http://deluxecapacitor.com/projects/view/15). These are all great, but are either a little unpolished or require some advanced maker skills, so I thought I'd have a go myself at something that is a but more approachable by the average maker, and uses predominantly off the shelf parts. So here is what I came up with.

<div class="gallery" markdown="1">
[![Case 1](/media/pizerohubcase/01.jpg)](/media/pizerohubcase/01.jpg)
[![Case 2](/media/pizerohubcase/02.jpg)](/media/pizerohubcase/02.jpg)
[![Case 3](/media/pizerohubcase/03.jpg)](/media/pizerohubcase/03.jpg)
[![Case 4](/media/pizerohubcase/04.jpg)](/media/pizerohubcase/04.jpg)
</div>

My approach is based on the USB hub mod by Frederick Vandenbosch but wraps it up in a bit of a neater package, and avoids some of the trickier soldering.

To create your own you'll need a Pi Zero, a USB hub (Frederick uses a LogiLink UA0160 but you can also use a [Belkin F5U404](http://www.ebay.co.uk/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR0.TRC0.H0.XF5U404.TRS0&_nkw=F5U404&_sacat=0)), a short [Mini to Micro USB cable](http://www.aliexpress.com/item/4-10cm-SHORT-Right-Angle-Micro-USB-B-Host-OTG-to-mini-USB-B-Adapter-Cable/32383193394.html) and a bit of wire. For the case you'll want to [download and laser cut my design files from here](/media/pizerohubcase/raspberry_pi_zero_hub_case.dxf), and you'll need some nylon M3 nuts and bolts (9 sets in total, at least 30mm in length).

You'll want to copy Frederick's instructions on disassembly, and attaching the power leads, but once you've done that, just use the purchased USB cable for connecting the hub to the Pi instead of wiring direct to the USB port (those connections are might small).

Once you've added the power lines, simply build up the case as pictured by attaching the Pi to the Pi layer first (use the nylon screw + bolts, then cut the remainder of the screw shaft off), then stack everything else together, making sure to add the centre screw (this is used to keep USB hub tightly in position) and tightening everything up and cutting screws to length.

<div class="gallery" markdown="1">
[![Case 5](/media/pizerohubcase/05.jpg)](/media/pizerohubcase/05.jpg)
[![Case 6](/media/pizerohubcase/06.jpg)](/media/pizerohubcase/06.jpg)
[![Case 7](/media/pizerohubcase/07.jpg)](/media/pizerohubcase/07.jpg)
[![Case 8](/media/pizerohubcase/08.jpg)](/media/pizerohubcase/08.jpg)
[![Case 9](/media/pizerohubcase/09.jpg)](/media/pizerohubcase/09.jpg)
[![Case 10](/media/pizerohubcase/10.jpg)](/media/pizerohubcase/10.jpg)
[![Case 11](/media/pizerohubcase/11.jpg)](/media/pizerohubcase/11.jpg)
</div>

We're pretty sure someone will start selling a much better solution real soon, but in the meantime we hope this provides a manageable solution for the general maker right now that also looks pretty nice sat on your desk.