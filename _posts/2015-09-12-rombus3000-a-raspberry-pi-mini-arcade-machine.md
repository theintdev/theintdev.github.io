---
layout: post
title: Rombus3000 - A Raspberry Pi mini arcade machine
image: /media/mh_rombus3000.jpg
disqus_id: 1342

author:
  name: Matt Brailsford
  avatar: https://avatars1.githubusercontent.com/u/527305?s=200
  twitter: mattbrailsford
  url: twitter.com/mattbrailsford
  bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui nec quam vestibulum semper non vel massa. Mauris vitae gravida sem. Vestibulum rutrum leo sit amet mi viverra, sit amet cursus metus consequat.
---

Like many makers, a mame arcade machine has been on my list of things to build for quite a while. Recently though I had the pleasure of catching up with the [Pimoroni](http://pimoroni.com/) guys and got to check out their [PiCade arcade machine](https://shop.pimoroni.com/products/picade) they launched on [Kickstarter a few months back](https://www.kickstarter.com/projects/pimoroni/picade-the-arcade-cabinet-kit-for-your-raspberry-p). Needless to say, playing around with the PiCade made my urge to build an arcade machine bubble back to the surface. I toyed with just buying one of the PiCade kits, which really are exceptional, but that's not really my style as I tend to like to hack / re-purpose old technology, so instead I decided to modify an old 80's desktop computer game instead.

<div class="gallery" markdown="1">
[![Teardown 1](/media/rombus3000/01.jpg)](/media/rombus3000/01.jpg)
[![Teardown 2](/media/rombus3000/02.jpg)](/media/rombus3000/02.jpg)
[![Teardown 3](/media/rombus3000/03.jpg)](/media/rombus3000/03.jpg)
[![Teardown 4](/media/rombus3000/04.jpg)](/media/rombus3000/04.jpg)
[![Teardown 5](/media/rombus3000/05.jpg)](/media/rombus3000/05.jpg)
[![Teardown 6](/media/rombus3000/06.jpg)](/media/rombus3000/06.jpg)
</div>

The game itself was an old [Grandstand Scramble desktop arcade machine](http://www.ebay.co.uk/sch/i.html?_odkw=grandstand+scramble&_osacat=0&_from=R40&_trksid=p2045573.m570.l1313.TR2.TRC1.A0.H0.Xgrandstand+scramble+-pocket.TRS0&_nkw=grandstand+scramble+-pocket&_sacat=0) which I stripped bare and mounted a Raspberry Pi 2 with a [5" HDMI TFT screen](http://www.ebay.co.uk/itm/5-inch-HDMI-LCD-A-800-480-High-Resolution-for-Raspberry-Pi-2-Model-B-B-A-/321748043494?hash=item4ae9ad86e6) inside along side a [PiCade controller board (available to buy seperately)](https://shop.pimoroni.com/products/picade-controller-board) to provide the control inputs needed aswell as an audio amplifier. The chasis was modified to accept additional [buttons](http://www.ebay.co.uk/itm/Momentary-Push-To-Make-Button-Switch-Off-On-16mm-Car-Boat-12V-250V-125V-Arduino-/221829258460?var=&hash=item33a60ddcdc) around the back and sides, and a custom controller panel was designed and laser cut to hold a [miniature joystick](http://uk.rs-online.com/web/p/joystick-switches/8252583/) and more buttons, and was mounted to the front.

<div class="gallery" markdown="1">
[![Joystick 1](/media/rombus3000/07.jpg)](/media/rombus3000/07.jpg)
[![Joystick 2](/media/rombus3000/08.jpg)](/media/rombus3000/08.jpg)
[![Joystick 3](/media/rombus3000/09.jpg)](/media/rombus3000/09.jpg)
[![Joystick 4](/media/rombus3000/10.jpg)](/media/rombus3000/10.jpg)
[![Joystick 5](/media/rombus3000/11.jpg)](/media/rombus3000/11.jpg)
[![Joystick 6](/media/rombus3000/12.jpg)](/media/rombus3000/12.jpg)
[![Joystick 7](/media/rombus3000/13.jpg)](/media/rombus3000/13.jpg)
</div>

For sound, a [4 ohm speaker](https://shop.pimoroni.com/products/5w-4-ohm-65mm-full-range-speaker) was mounted in the old battery compartment and then everything was connected up using spade connectors and attached to the appropriate ports on the PiCade board via screw terminal blocks. The PiCade board connects to the Raspberry Pi via a [short flexible micro USB cable](http://www.ebay.co.uk/sch/i.html?_odkw=short+micro+usb+cable+noodle&LH_PrefLoc=1&_osacat=56169&_from=R40&_trksid=p2045573.m570.l1313.TR0.TRC0.H0.TRS0&_nkw=short+micro+usb+cable+noodle&_sacat=0), as well as a [short AUX cable](http://www.ebay.co.uk/itm/15cm-Stereo-Mini-Headphone-3-5-mm-Jack-Plug-to-Plug-Audio-Cable-Lead-SHORT-0-15m-/360413596481?hash=item53ea530b41) for the audio input. The original barrel jack was then modified by attaching a female USB connector on the end of the original wires and connected to the Raspberry Pi by another short flexible micro USB cable to provide power.

As a couple of added extras, [WiFi](https://shop.pimoroni.com/products/official-raspberry-pi-wifi-dongle) and [wireless keyboard](https://shop.pimoroni.com/products/ultra-mini-wireless-keyboard-and-trackpad) dongles were attached to allow for internet access / keyboard usage without the need to open the chassis, and for the final touches, a custom decal was designed and [printed on a brushed aluminium sticker](https://www.diginate.com/products/vinyl-sticker/) as a nod back to the original Grandstand Scramble decal.

<div class="gallery" markdown="1">
[![Wiring 1](/media/rombus3000/14.jpg)](/media/rombus3000/14.jpg)
[![Wiring 2](/media/rombus3000/15.jpg)](/media/rombus3000/15.jpg)
[![Wiring 3](/media/rombus3000/16.jpg)](/media/rombus3000/16.jpg)
[![Wiring 4](/media/rombus3000/17.jpg)](/media/rombus3000/17.jpg)
[![Wiring 5](/media/rombus3000/18.jpg)](/media/rombus3000/18.jpg)
[![Wiring 6](/media/rombus3000/19.jpg)](/media/rombus3000/19.jpg)
[![Wiring 6](/media/rombus3000/20.jpg)](/media/rombus3000/20.jpg)
[![Wiring 6](/media/rombus3000/21.jpg)](/media/rombus3000/21.jpg)
</div>

With the actual build itself complete, the final bit was to [install and configure the Retropie software](https://github.com/RetroPie/RetroPie-Setup/wiki) and upload a few ROMs and the gaming fun could now begin.

All in all, this was actually a pretty quick build which was mainly due to how easy it was to bolt everything together, from the TFT screen to the PiCade controller board, and the simplicity of Retropie. In less than a weeks hacking I now have a one of kind, retro arcade machine, which I'm pretty pleased with (if I do say so myself).

<div class="gallery margin-bottom-none" markdown="1">
[![Complete 1](/media/rombus3000/22.jpg)](/media/rombus3000/22.jpg)
[![Complete 2](/media/rombus3000/23.jpg)](/media/rombus3000/23.jpg)
</div>
<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/y88_l5-5PV4?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

If you are looking at building your own arcade machine then, this is definitely a setup I would recommend, and for those not so comfortable hacking their own machine together, the PiCade kit uses essentially the same setup in a more flat-pack setup.

Whichever route you take, I'm certain you'll end up with a great little arcade rig.

Happy gaming!