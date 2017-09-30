---
layout: post
title: Tomy Turnin' Turbo Dashboard Outrun Arcade
excerpt: Build log for my retro Outrun arcade machine built from a Tomy Turnin' Turbo Dashboard 80s toy and a Raspberry Pi
image: /media/mh_outrun.jpg
tags:
 - raspberrypi
 - picade
 - outrun

author_name: Matt Brailsford
author_avatar: https://avatars1.githubusercontent.com/u/527305?s=200
author_url: twitter.com/mattbrailsford
author_bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui nec quam vestibulum semper non vel massa. Mauris vitae gravida sem. Vestibulum rutrum leo sit amet mi viverra, sit amet cursus metus consequat.
---

{:external: rel="nofollow" target="_blank"}

If you’ve read [RombusCT](/2016/05/02/rombus-ct-raspberry-pi-powered-mini-cocktail-arcade/), [Rombus3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine/) blog posts or [follow me on twitter](twitter.com/mattbrailsford), you’ll probably know I love nothing more than hacking some retro tech, preferably from the 80s, and upgrading it with today's technology to make something that might have existed if only the original designers/engineers had access to the same tech we do. Well, I’ve only gone and done it again, and this times it’s with the Tomy Turnin' Turbo Dashboard, an old 80s desktop motorized driving game which I’ve converted into a suitably retro Outrun arcade. 

[![Outrun 1](/media/outrun/01.jpg)](/media/outrun/01.jpg)
[![Outrun 2](/media/outrun/02.jpg)](/media/outrun/02.jpg)
[![Outrun 3](/media/outrun/03.jpg)](/media/outrun/03.jpg)
[![Outrun 4](/media/outrun/04.jpg)](/media/outrun/04.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/r21Zfmw7moI?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

Some key features are an integrated 3.5" TFT screen, fully usable steering wheel and gear shifter (dashboard turbo light comes on when in high gear), working ignition key for power, true MPH speed and rev counter displays, and a fuel gauge to represent the stage time remaining.

The project itself was quite a big one for me, filled with several moments of frustration, from burnt out potentiometers, to soldering LEDs backwards, multiple TFT screen purchases and more than one change in direction as approaches to problems were found to be inadequate. 

What’s documented in this post then are the final approaches I took (or at least the best I can recall as some times I’m sure I was just trying anything :)).

## Inputs
When hacking hardware, I usually follow a pretty simple rule, “keep it as stock looking as possible”, so the first constraint I set myself was I must use only the existing inputs, so I’d have to use the shifter, steering wheel, ignition and push button that came with the toy. Sounds simple, but these became a real challenge.

[![Before 1](/media/outrun/05.jpg)](/media/outrun/05.jpg)
[![Before 2](/media/outrun/06.jpg)](/media/outrun/06.jpg)
[![Before 3](/media/outrun/07.jpg)](/media/outrun/07.jpg)
{:.gallery}

### Gear Shifter
The first input I tackled was the gear shifter. Looking at the normal outrun arcades, these tend to have a 2 position shifter for high and low gear. Given the lack of an accelerator in the toy though, I decided to go with a 3 position setup, low, neutral and high for which I’ll later handle acceleration in code such that being in low or high gear will automatically apply the accelerator and being in neutral will apply the brakes.

Given this approach, I decided I’d use two switches to detect low / high gear and would also incorporate a self centering mechanism to automatically spring back to neutral if you let go of the shifter.

For the switches, I examined the areas around the shifters internals to see where I could mount them, and found I could fit some just to one side of the shifter. I also noticed that the shifter stick itself had a nice cutout which would be perfect to insert a 3D printed actuator, so this is exactly what I did. A bit of hot glue and JB weld later and the switches and actuator were mounted.

[![Shifter 1](/media/outrun/08.jpg)](/media/outrun/08.jpg)
[![Shifter 2](/media/outrun/09.jpg)](/media/outrun/09.jpg)
[![Shifter 3](/media/outrun/10.jpg)](/media/outrun/10.jpg)
{:.gallery}

For the self centering mechanism, I kept a gear with a rod attachment from the original internals which sweeps side to side as the gear shifter is moved, and rigged up some rubber bands around some nearby internal structures to force it to stay centred, which in turn forces the shifter to stay centred. A bit Heath Robinson, but nobody is going to see it, so hey :)

[![Self Centre 1](/media/outrun/11.jpg)](/media/outrun/11.jpg)
[![Self Centre 2](/media/outrun/12.jpg)](/media/outrun/12.jpg)
{:.gallery}

### Steering
The next tricky one to solve was the steering. Again reviewing the original mechanism, the end of the steering wheel already had an actuator that converts the rotary motion of the wheel into a linear, side to side motion. The first thought that came to mind then was to use a [slide potentiometer](https://www.digikey.co.uk/product-detail/en/bourns-inc/PTA2043-2015DPB103/PTA2043-2015DPB103-ND/3781179){:external} with a custom head to match the original connector. Well, a custom PCB, a Digikey order of a few different sized slide pots, and some 3D printed tinkering and the approach worked :) 

[![Steering 1](/media/outrun/13.jpg)](/media/outrun/13.jpg)
[![Steering 2](/media/outrun/14.jpg)](/media/outrun/14.jpg)
[![Steering 2](/media/outrun/15.jpg)](/media/outrun/15.jpg)
{:.gallery}

The PCB isn’t anything fancy, it just mounts to a plate that was already in the toy, and exposes the three pins of the potentiometer that get hooked up to the controller board later on.

### Ignition (Power)
For the ignition, I really wanted this to be the power switch, so turning the ignition on turns on the Pi, and turning it off powers everything down. Any good Raspberry Pi developer knows you can’t just turn a Raspberry Pi off, but thankfully I’d recently purchased a few [PowerBlock PCB’s](https://blog.petrockblock.com/powerblock/){:external} which handled the powering up / down for you, so I simply used one of these and connected the wires that already came from the ignition key.

[![Ignition 1](/media/outrun/16.jpg)](/media/outrun/16.jpg)
[![Ignition 2](/media/outrun/17.jpg)](/media/outrun/17.jpg)
{:.gallery}

A couple of mods I did make to the PowerBlock though were to replace the upright pins with some right angled ones as I knew I was going to be stacking other components above it, so wanted to save some vertical space, and I also knew I was going to need access to the I2C pins which the PowerBlock connects to, as well as access to the 5/3v pins, so I modified a [Pimoroni Pico HAT Hacker](https://shop.pimoroni.com/collections/prototyping/products/pico-hat-hacker){:external} (making sure not to break any traces I’d need) and soldered it to the head of the pin tops on the PowerBlock PCB.

[![Powerblock 1](/media/outrun/18.jpg)](/media/outrun/18.jpg)
[![Powerblock 2](/media/outrun/19.jpg)](/media/outrun/19.jpg)
[![Powerblock 3](/media/outrun/20.jpg)](/media/outrun/20.jpg)
{:.gallery}

Another nice feature of the PowerBlock is the ability to attach an indicator LED, so for this I (carefully) drilled a hole in the chassis next to the ignition key and mounted a 3mm LED with hot glue.

[![Power LED 1](/media/outrun/21.jpg)](/media/outrun/21.jpg)
[![Power LED 2](/media/outrun/22.jpg)](/media/outrun/22.jpg)
{:.gallery}

Lastly, I needed to decide on an actual power source. I did consider battery power, but this was going to take up too much space, so I just went with an approach I’ve done in my other projects which is to use a panel mount barrel jack. This is really the only non original modification, however using panel mount components makes for a really clean solution, so I was happy to go with it. For the power source I use a 5V DC 2A power supply, so it should suffice for all my power needs and saves the need of any converters.

[![Power Jack 1](/media/outrun/23.jpg)](/media/outrun/23.jpg)
[![Power Jack 2](/media/outrun/24.jpg)](/media/outrun/24.jpg)
{:.gallery}

### Start Button
The only really “push button” element from the original toy was a reset button for a counter, but again, this was all rather mechanical. From an arcade point of view, the only thing we’ll need a button for is to start the game (we’ll configure the game later to be freeplay so we don’t need a coin button) so this seemed a perfect candidate.

For this, I had some [large tactile switches](http://uk.farnell.com/wurth-elektronik/430456073736/switch-360gf-12x12mm-7-3mm-act/dp/2065139?MER=sy-me-pd-mi-acce){:external} lying around already from another project so mounted one of these on some scrap prototyping board, cut it to size and mounted it roughly inline with the original hole. I 3D printed a block to act as a mounting wall, but really it was just a case of using something to keep it straight and provide something to glue against.

[![Button 1](/media/outrun/25.jpg)](/media/outrun/25.jpg)
[![Button 2](/media/outrun/26.jpg)](/media/outrun/26.jpg)
[![Button 3](/media/outrun/27.jpg)](/media/outrun/27.jpg)
{:.gallery}

For the button, I used my dremel to cut it down to size and then JB welded it to a [button cap](http://uk.farnell.com/wurth-elektronik/714308050/cap-green-for-12x12mm-tact-switch/dp/2134450){:external} that attaches perfectly to the tactile switch. It doesn’t really have much “in/out” movement, but it does the job. Wires were attached to the board and then linked up to the controller.

### Volume Controls
I knew I was going to be adding a speaker, but I also knew I’d probably want to be able to control the volume of this, so volume controls were going to be needed. I really didn’t want to add any extra external controls for these to ruin the aesthetic, so instead I decided to mount them inside the old battery compartment out of the way. As they wouldn’t be seen, they didn’t need to beautiful, so I just soldered some [small tactile switches](http://uk.farnell.com/omron-electronic-components/b3f4055/switch-projected-12x12x7-3-260gf/dp/1960973?MER=sy-me-pd-mi-alte){:external} to some spare perf board and hot glued them to the inside of the compartment.

[![Volume Buttons](/media/outrun/28.jpg)](/media/outrun/28.jpg)
{:.gallery}

### Controller (Picade PCB)
The final element for the inputs was some kind of controller. As I’d used one before in both the [Rombus3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine/) and the [RombusCT](/2016/05/02/rombus-ct-raspberry-pi-powered-mini-cocktail-arcade/), [Rombus3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine/), a [Picade PCB](https://shop.pimoroni.com/products/picade-controller-board){:external} seemed the perfect candidate. Another positive for this was that it was already capable of handling analog joysticks, so with a bit of config, should just work with my steering wheel potentiometer no problem, as well has having an onboard amplifier for the speaker. 

[![Picade 1](/media/outrun/29.jpg)](/media/outrun/29.jpg)
[![Picade 2](/media/outrun/30.jpg)](/media/outrun/30.jpg)
{:.gallery}

To configure the board, I downloaded the [latest firmware update](https://github.com/pimoroni/Picade-Sketch){:external}, and from the Pi, flashed it to the PCB ([see the github repo for instructions](https://github.com/pimoroni/Picade-Sketch/tree/master/update){:external}). I kept the default keyboard configuration, but just changed the single “Up” connector to be a joystick input by issuing the serial command `b 0 249` followed by an `s` command to save this to the EPROM.

The last thing to do was to wire everything up, which was pretty much standard. The only other thing I had to do was feed some 5v + GND wires to the steering wheel potentiometer. For this, I just pulled them off the ISP pins on top of the Picade board.

## Outputs
With the inputs sorted, it was time to start thinking of how to actually display things. I knew I was going to need a screen for the actual game play, but I also really wanted to make the dashboard display interactive as this was such a key element of the original game.

### Screen
In the end, I think I tried 3 or 4 different screen configurations, looking for the ideal setup. I was hoping to find something that would fit into the original bezel, but I ended up having to make a custom one instead as the screen was a little smaller than the cutout. 

The screen I ended up going for was a [KeDei 3.5” HDMI display (also sold under the brand KOOKYE)](https://www.amazon.co.uk/KOOKYE-Screen-Inches-Display-Raspberry/dp/B01N5G02MZ/ref=sr_1_74?ie=UTF8&qid=1503941936&sr=8-74&keywords=raspberry+pi+3.5+hdmi){:external}. The HDMI element was really important, as I had tried a monitor that connected to the GPIO, but this just used up all the GPIO pins, which I knew I’d need, and on testing with the game later on, caused serious lag, so it had to be HDMI.

With the screen chosen, I then went about creating the mount and bezel. Starting with the bezel, I did a bunch of trial and error laser cuts out of black acrylic till I got something that fit snugly in the original space. The black acrylic ended up being a bit too shiny, so I sanded it down a bit to give it more of a matt look. 

[![Screen 1](/media/outrun/31.jpg)](/media/outrun/31.jpg)
[![Screen 2](/media/outrun/32.jpg)](/media/outrun/32.jpg)
[![Screen 3](/media/outrun/33.jpg)](/media/outrun/33.jpg)
[![Screen 4](/media/outrun/34.jpg)](/media/outrun/34.jpg)
{:.gallery}

With the bezel mounted, then next tricky part was mounting the screen. To help with this, I 3D printed a thin surround to fit round the edge of the screen which I could glue into place without damaging the screen and then just use a few small dabs of hot glue on the back of the screen to hold it into place. It took some adjusting to get everything lined up perfectly, but it was really just patience and several attempts until it was spot on.

[![Screen Band 1](/media/outrun/35.jpg)](/media/outrun/35.jpg)
[![Screen Band 2](/media/outrun/36.jpg)](/media/outrun/36.jpg)
[![Screen Band 3](/media/outrun/37.jpg)](/media/outrun/37.jpg)
{:.gallery}

For the wiring, I purchased as [low profile and flexible a HDMI cable](http://www.ebay.co.uk/itm/111913220816){:external} as I could find, and for power, used a couple of jumper cables to take 5V and GND from the Pi’s GPIO header, and just hot glued those into place to make sure they wouldn’t fall out.

### Dashboard
The dashboard was quite a tricky element. My initial hope was to reuse the original display and just mount some LEDs into the original cutouts. I designed and had manufactured a PCB for this, but on build, I realised it just wasn’t going to be good enough. There was also limitations in the speedo area as well as the original toy didn’t have cutouts for all the 7 seg segments of the speed display, so in the end, I decided to go with a full on custom display, but in the graphical style of the original.

The first PCB I had manufactured used SMD components, and during that test I found my SMD soldering skills weren’t great, so for this second attempt I knew I’d want to use through hole components. With that in mind, I did some DigiKey searching and found some [rectangular LEDs](https://www.digikey.co.uk/product-detail/en/lumex-opto-components-inc/SSL-LX2573GD/67-1046-ND/270844){:external} and some right sized [7 Seg displays](https://www.digikey.co.uk/product-detail/en/broadcom-limited/HDSP-F503/516-1201-ND/637465){:external} and went about updating the PCB design around those. The 7 Segs I got were actually a grey colour, but I wanted them black so I stuck some [windscreen tinting film](https://www.digikey.co.uk/product-detail/en/broadcom-limited/HDSP-F503/516-1201-ND/637465){:external} I’d purchased a sample of from ebay to the fronts and this worked out great.

For the LED controller, I already had an [Adafruit IS31FL3731 charlieplexing LED driver board](https://www.adafruit.com/product/2946){:external} lying around, which was capable of driving more LEDs than I would need, so I went with that as the driver. 

With the PCB designed and sent off to [Dirty PCBs](http://dirtypcbs.com/){:external} to be manufactured, I then focused on the dashboard decal. This was done in inkscape and I just transfered as much of the original design as I could making sure to line everything up with the PCB design being manufactured.

[![Dashboard Design 1](/media/outrun/40.jpg)](/media/outrun/40.jpg)
[![Dashboard Design 2](/media/outrun/41.jpg)](/media/outrun/41.jpg)
{:.gallery}

I printed the design out onto some vinyl sticker material I had purchased, cut out all the holes with a scalpel and then sandwiched it between 2 layers of clear acrylic, which also has cutouts for all the electrical components, which I’d cut out on my laser cutter.

When the PCB arrived, I soldered everything up, and did some testing with the [Adafruit arduino driver](https://github.com/adafruit/Adafruit_IS31FL3731){:external}, and it all worked just how I wanted it (well, maybe not first time, but this post is already getting pretty long :)).

[![Dashboard 1](/media/outrun/42.jpg)](/media/outrun/42.jpg)
[![Dashboard 2](/media/outrun/43.jpg)](/media/outrun/43.jpg)
[![Dashboard 3](/media/outrun/44.jpg)](/media/outrun/44.jpg)
[![Dashboard 4](/media/outrun/45.jpg)](/media/outrun/45.jpg)
{:.gallery}

To mount, I used the original dashboard mounting holes and screws, but then also hot glued the edges to make sure it wasn’t going to go anywhere.

### Sound
The final output I would need would be a speaker. Outrun has some pretty nostalgic music so I knew I’d want to keep this element. 

The speaker I used was one that I had pulled out of some other old toy a while back, and installation was just a case of finding a place it could mount easily. I ended up mounting it inside the old battery compartment, drilling a few holes to let the sound through.

[![Speaker 1](/media/outrun/46.jpg)](/media/outrun/46.jpg)
[![Speaker 2](/media/outrun/47.jpg)](/media/outrun/47.jpg)
{:.gallery}

Lastly, I wired the speaker up to the Picade PCBs speaker terminals, and that was that job done.

## Construction
With all the inputs and outputs setup, the final hardware element to finish was the mounting of the Raspberry Pi itself, and any final wiring. There isn’t any rocket science here, I just chose the biggest clear space, and mounted everything in that spot stacked via some nylon standoffs, and being sure to leave enough room around the edge to make all the connections I would need.

[![Construction 1](/media/outrun/54.jpg)](/media/outrun/54.jpg)
[![Construction 2](/media/outrun/55.jpg)](/media/outrun/55.jpg)
[![Construction 3](/media/outrun/48.jpg)](/media/outrun/48.jpg)
[![Construction 4](/media/outrun/49.jpg)](/media/outrun/49.jpg)
{:.gallery}

## Code
Now that all the hardware hacking was done, it was now time to move on to the code side of things.

### Screen config
First up was getting the screen working. Being HDMI, I was hoping it would just be plug and play, which wasn’t the case, but thankfully it didn’t take much config to get going. All that was needed was to add the following to `/boot/config.txt`

````bash
disable_hdmi_overscan=1
hdmi_force_hotplug=1
hdmi_group=2
hdmi_mode=87
hdmi_cvt=480 320 60 6 0 0 0
````

There is a [great review of this screen](https://www.raspberrypi.org/forums/viewtopic.php?t=175616){:external}, including an explanation of this config over on the Raspberry Pi Forums, so if you want to know what all this means, be sure to check it out.

The screen is capable of supporting touch screen, but as this wasn’t really needed for this project, I just didn’t bother setting it up and moved on to the next item.

### Sound config
For sound config I needed to do two things. Force analog audio out of the audio jack and merge the audio into a single mono track as I was only using a single speaker.

To force analog audio out, I issued the following commands at the terminal

````bash
sudo modprobe snd_bcm2835
sudo amixer cset numid=3 1 # Force analog
````

And then to merge the sound channels, I modified `/etc/asound.conf` with the following configuration

````bash
pcm.card0 {
  type hw
  card 0
}

ctl.card0 {
  type hw
  card 0
}

pcm.monocard {
  slave.pcm card0
  slave.channels 2
  type route
  ttable {
    # Copy both input channels to ouput channel 0 (left)
    0.0 0.5
    1.0 0.5
    # Send nothing to output channel 1 (right)
    0.1 0
    1.1 0
  }
}

ctl.monocard {
  type hw
  card 0
}

pcm.!default monocard
````

To make these changes take effect, you can either reboot, or just issue the command

````bash
sudo /etc/init.d/alsa-utils restart
````

### Cannonball setup
Next up was the actual game itself. Given I knew I would want to read out some game variables such as speed, revs, turbo and time remaining etc, it was clear I was going to need something I could get pretty low level with. Thankfully I had already come across [Cannonball](https://github.com/djyt/cannonball/wiki){:external}, which is a C++ port of the original Outrun game and was capable of running on a Pi so I knew this would be my best option.

To get Cannonball running on the Pi, it boils down to the following commands

````bash
sudo apt-get update -y
sudo apt-get install -y cmake libboost-dev libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev libsdl2-mixer-dev
git clone https://github.com/djyt/cannonball.git
cd cannonball
mkdir build
cd build
cmake -G "Unix Makefiles" -DTARGET=sdl2_rpi ../cmake
make
ln -s ../roms roms
````

There is quite a bit going on here, but ultimately it’s just installing the needed libraries and setting up the cannonball build process. Cannonball makes use of the original MAME roms for the sprites so you’ll need to “acquire” these and drop them in the ROMs folder. With this setup, you can issue the command `./cannonball` to start cannonball playing.

One thing you’ll probably want to do is enable OpenGL via `raspi-config` as without it the gameplay can be pretty laggy. I found the “Fake” option to be the best result.

With the game working it was now a case of exploring the code base and working out where certain things happen. This was quite time consuming and a lot to explain so I’ll just summarise here, but if you want to see all the changes I made, you can find them in [my github repository here](https://github.com/circuitbeard/cannonball){:external}.

Basically though I hid all the graphic elements I was now going to be showing on the dashboard, and moved some other graphic elements around, such as the score and timer at the top of the screen.

### Interfacing Cannonball with the Dashboard
With the game up and running, it was now time to get it talking to the dashboard. 

For this I would use [WiringPi](http://wiringpi.com/){:external} and custom [Dashboard class](https://github.com/circuitbeard/cannonball/blob/master/src/main/dashboard/dashboard.cpp){:external} I wrote. Again, explaining all of the Dashboard code would be a bit too much for this post, but in summary I ported the Arduino code for the Adafruit IS31F3731 library to work on the Raspberry Pi by using WiringPi to do the I2C communications. Additional methods to interface with the individual dashboard elements were added, such as updateTacho, updateFuel, updateSpeed etc, and then the game code was updated to call these methods in place of the previously commented out code that would draw them to the game screen, making the dashboard update with the actual real time game values. 

[![Code 1](/media/outrun/56.jpg)](/media/outrun/56.jpg)
[![Code 2](/media/outrun/57.jpg)](/media/outrun/57.jpg)
[![Code 2](/media/outrun/58.jpg)](/media/outrun/58.jpg)
{:.gallery}

**Note:** Because cannonball is written in C++ this made this all a lot easier, but if you were using some other games engine, you could potentially inspect register values to pull out the different variables.

To incorporate our custom Dashboard class into the Cannonball codebase, I had to first install WiringPi (see [instructions here](http://wiringpi.com/download-and-install/){:external}, you’ll want to make sure you have it installed from src, so uninstall / reinstall if you don’t) then I had to update both the [sdl2_rpi.cmake](https://github.com/circuitbeard/cannonball/blob/master/cmake/sdl2_rpi.cmake){:external} file to include the WiringPi dependency, as well as the [CMakeList.txt](https://github.com/circuitbeard/cannonball/blob/master/cmake/CMakeLists.txt){:external} file to include the new Dashboard C++ class files.

With those updated, you then need to re-generate your build files by navigating to `~/cannonball/build` and re-issuing the commands

````bash
cmake -G "Unix Makefiles" -DTARGET=sdl2_rpi ../cmake
````

Now when you build the cannonball codebase using the `make` command, our custom Dashboard class and WiringPi will be fully compiled into the actual game executable and run as part of the game.

With all the code updates made, and our solution built, we can fire up the game to test everything by issuing the command

````bash
./cannonball
````

Now as we play the game, the revs, speed, time remaining (fuel) and turbo mode should all update our dashboard.

The last thing to do with Cannonball, was to make some configuration changes in `config.xml` file such as enabling fullscreen mode, enabling freeplay mode, setting the frame rate, disabling the menu system and enabling our analog steering wheel controller.

### Autostart Cannonball
With cannonball working, we want to make it so that the game automatically starts when the system boots up. To do this I created a `run.sh` file in the `~/cannonball` folder containing the following

````bash
#!/bin/bash
cd /home/pi/cannonball/build
./cannonball
````

Made it executable by issuing the command

````bash
chmod +x run.sh
````

Then added it to the desktop autostart file `~/.config/lxsession/LXDE-pi/autostart`

````bash
@lxterminal -e “/home/pi/cannonball/run.sh”
````

Now whenever the Pi reboots, our game will automatically start.

### PowerBlock config
Finally, the last thing to configure is the PowerBlock module so that our Pi safely shuts down when the ignition key is turned off. This is as simple as issuing the command

````bash
wget -O - https://raw.githubusercontent.com/petrockblog/PowerBlock/master/install.sh | sudo bash
````

## Finishing Touches
With all the hardware and software done, the last things to do were just the finishing touches, which in this case was some custom decals. For these I designed them in inkscape again and printed them out on some printable sticker vinyl. Some careful scissor work later, and even more careful sticker placement and we were done!  

[![Decals 1](/media/outrun/50.jpg)](/media/outrun/50.jpg)
[![Decals 2](/media/outrun/51.jpg)](/media/outrun/51.jpg)
[![Decals 3](/media/outrun/52.jpg)](/media/outrun/52.jpg)
[![Decals 4](/media/outrun/53.jpg)](/media/outrun/53.jpg)
{:.gallery}

## Conclusion
If you actually read all of this post, then I salute you :) It was a pretty epic build, and a hard one to document so if I’ve skimmed over anything, be sure to leave a question in the comments. Overall though, it was a really challenging build, but I’m super happy with the result.

[![Outrun 1](/media/outrun/01.jpg)](/media/outrun/01.jpg)
[![Outrun 2](/media/outrun/02.jpg)](/media/outrun/02.jpg)
[![Outrun 3](/media/outrun/03.jpg)](/media/outrun/03.jpg)
[![Outrun 4](/media/outrun/04.jpg)](/media/outrun/04.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/r21Zfmw7moI?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

## UPDATE: 2017-09-23
Thanks to feedback from a few people on twitter, I got reminded of a major feature that was present in the original Outrun arcades but that I had missed in my build, which was of course haptic feedback. Well, I couldn't live knowing I was missing such an awesome feature, so I went ahead and added it in :)

[![Haptic Motor 1](/media/outrun/59.jpg)](/media/outrun/59.jpg)
[![Haptic Motor 2](/media/outrun/60.jpg)](/media/outrun/60.jpg)
[![Haptic Motor 3](/media/outrun/61.jpg)](/media/outrun/61.jpg)
{:.gallery}

For this I'm using a [vibrating mini motor disc](https://shop.pimoroni.com/products/vibrating-mini-motor-disc){:external} which I have attached to the underside of the steering wheel and routed the wires through the steering wheel shaft to the inside of the cabinet. There I attach them to an [Adafruit DRV2605L Haptic Motor Controller](https://shop.pimoroni.com/products/adafruit-drv2605l-haptic-motor-controller){:external} which I have soldered directly on top of the IS31FL3731 boards I2C pins.

[![Haptic Controller](/media/outrun/62.jpg)](/media/outrun/62.jpg)
{:.gallery}

Cannonball already had an outputs class for haptic feedback, but I pretty much cleared that out and started fresh for my implementation. Similar to how I did the dashboard, I started by porting the [Adafruit DRV2605L Arduino Driver](https://github.com/adafruit/Adafruit_DRV2605_Library){:external} to work on the Pi, then tweaked it to trigger different vibrations during the game (see [my cannonball repo on GitHub](https://github.com/circuitbeard/cannonball/blob/master/src/main/engine/ooutputs.cpp){:external} for the full code). Currently I have it configured to vibrate when the car skids, goes off road or crashes.

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/_qNDbQitKBk?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

All in all, I'm really glad I added this feature as it really does add an extra dimension and takes it to another level.