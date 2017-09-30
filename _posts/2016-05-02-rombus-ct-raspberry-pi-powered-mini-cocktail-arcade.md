---
layout: post
title: Rombus-CT - A Raspberry Pi powered mini cocktail arcade
image: /media/mh_rombusct.jpg
disqus_id: 1448

author_name: Matt Brailsford
author_avatar: https://avatars1.githubusercontent.com/u/527305?s=200
author_url: twitter.com/mattbrailsford
author_bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui nec quam vestibulum semper non vel massa. Mauris vitae gravida sem. Vestibulum rutrum leo sit amet mi viverra, sit amet cursus metus consequat.
---

{:external: rel="nofollow" target="_blank"}

If you follow my blog, you may recall my [ROMBUS3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine) project from a few months ago, which went down quite the storm. This was my attempt at fulfilling a long lived desire to create an arcade machine.

Well, when looking to create something to take to an event I am helping organise, [CodeCabin](http://codecab.in){:external}, an arcade machine seemed the perfect fit. I could of course just take the ROMBUS3000, however I thought it would be much more fun to create a 2 player arcade so that multiple people can play together.

Looking around at case designs, there are many bar top options to choose from, but none of them really inspired me, until I came across an old video of a mini cocktail arcade.

<div class="video">
    <iframe src="https://www.youtube.com/embed/DuT_CHWoQ_M?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

When I had been looking to make an arcade machine many years ago, it was a cocktail arcade I was looking to make. I actually made a ton of progress including buying all the components, designing the case and cutting much of the wood, but I never actually put it all together, so this seemed like the perfect way to fulfill that dream, and thus ROMBUS-CT was born.

### Design

Probably the longest running phase was the designing phase. This was all done in inkscape, and started by drawing out a few core components that I knew I wanted to use, such as the ZIPPYY joysticks (they have a nice short shaft, and are nice and cheap whilst still feeling "arcady"), the Sanwa 24mm diameter buttons (smaller than the standard arcade buttons) and the 8” monitor available from Pimoroni. With those in mind, the case design was built up around them.

[![Inkscape 1](/media/rombusct/01.jpg)](/media/rombusct/01.jpg)
[![Inkscape 2](/media/rombusct/02.jpg)](/media/rombusct/02.jpg)
[![Inkscape 3](/media/rombusct/03.jpg)](/media/rombusct/03.jpg)
{:.gallery}

A requirement of the design was that it must be able to be cut on my A3 laser cutter, so this pretty much defined the overall size of the top.

After a few nights work, I had a design I was happy with, and had broken it all out into flat panels to cut out on my laser cutter.

### Prototype

With the design ready, I decided to go through a prototyping phase. I had a ton of laser ply in the garage, so this was perfect for experimenting with. I cut out all the panels, and dry fit everything together using masking tape to keep things together.

[![Laser Cuting 1](/media/rombusct/04.jpg)](/media/rombusct/04.jpg)
[![Laser Cuting 2](/media/rombusct/05.jpg)](/media/rombusct/05.jpg)
[![Laser Cuting 3](/media/rombusct/06.jpg)](/media/rombusct/06.jpg)
[![Test Fit 1](/media/rombusct/07.jpg)](/media/rombusct/07.jpg)
[![Test Fit 2](/media/rombusct/08.jpg)](/media/rombusct/08.jpg)
{:.gallery} 

The prototyping phase was a really worthwhile process as it helped identify several little issues, allowing tweaks to be made to the design files before the real build began.

### Build

With the design files ready for final production, the build began.

MDF was purchased from my local B&Q and cut down to A3 size, then the various panels were cut out and painted using a black satin wood paint to cover all visible faces and edges. A roller was used to give a much smoother finish.

[![Painting 1](/media/rombusct/09.jpg)](/media/rombusct/09.jpg)
[![Painting 2](/media/rombusct/10.jpg)](/media/rombusct/10.jpg)
[![Painting 3](/media/rombusct/11.jpg)](/media/rombusct/11.jpg)
[![Painting 4](/media/rombusct/12.jpg)](/media/rombusct/12.jpg)
[![Painting 5](/media/rombusct/13.jpg)](/media/rombusct/13.jpg)
{:.gallery}

Whilst the wood was coming out nice, reviewing the original video that inspired me, I really loved the wood effect finish they had, so at this point I started to look into wood effect vinyls, and came across some great options by d-c-fix (the guys at [Pimoroni](http://pimoroni.com/){:external} were suitably impressed too as they are now looking to stock this). I purchased a couple of metres of a few I liked the look of and proceeded to cut out a few sample panels on my plot cutter. The end result was nothing short of awesome, so I went ahead and cutout panels for all the external faces in a mix of light oak and black wood effect.

[![Vinyl Decals 1](/media/rombusct/14.jpg)](/media/rombusct/14.jpg)
[![Vinyl Decals 2](/media/rombusct/15.jpg)](/media/rombusct/15.jpg)
[![Vinyl Decals 3](/media/rombusct/16.jpg)](/media/rombusct/16.jpg)
[![Vinyl Decals 4](/media/rombusct/17.jpg)](/media/rombusct/17.jpg)
{:.gallery}

With all the panels ready, assembly began. [M4 high tensile bolts](http://www.ebay.co.uk/sch/i.html?_odkw=19mm+angle+brackets&_osacat=0&_from=R40&_trksid=p2045573.m570.l1313.TR12.TRC2.A0.H0.XM4+high+tensile+bolts.TRS0&_nkw=M4+high+tensile+bolts&_sacat=0){:external} were used (any bolts should  work fine, but I liked the look of the black, high tensile ones) along with some [19mmx19mm metal brackets](http://www.ebay.co.uk/sch/i.html?_odkw=19x19+angle+brackets&_osacat=0&_from=R40&_trksid=p2045573.m570.l1313.TR0.TRC0.H0.X19mm+angle+brackets.TRS0&_nkw=19mm+angle+brackets&_sacat=0){:external} purchased from ebay to hold it all together. Care had to be taken not to tighten too much and ripple the vinyl, but it was usually a case of tighten them till it ripples and then do a quarter turn back.

The lid was attached via a couple of [dolls house hinges](http://www.ebay.co.uk/sch/i.html?_odkw=DIY450&_osacat=0&_from=R40&_trksid=p2045573.m570.l1313.TR0.TRC0.H0.XDIY450+hinge.TRS0&_nkw=DIY450+hinge&_sacat=0){:external}, and all the buttons and joysticks were put into their associated locations.

[![Construction 1](/media/rombusct/18.jpg)](/media/rombusct/18.jpg)
[![Construction 2](/media/rombusct/19.jpg)](/media/rombusct/19.jpg)
[![Construction 3](/media/rombusct/20.jpg)](/media/rombusct/20.jpg)
[![Construction 4](/media/rombusct/21.jpg)](/media/rombusct/21.jpg)
{:.gallery}

### Wiring

With the case built, the next step was to wire it up. Thankfully the guys at Pimoroni were kind enough to donate a couple of wiring looms from their [Picade arcades](https://shop.pimoroni.com/products/picade){:external} (you can make your own really easily, they are just a bit time consuming so this saved me a bunch of time). I started by wiring all the buttons and joysticks, and then moved on to planning the internals and testing where components should sit.

Given how easy it was to use the [Picade PCB](https://shop.pimoroni.com/products/picade-controller-board){:external} in my ROMBUS3000 project, it was a no brainer I would used this again, however given that I now have 2 controllers this meant 2 would be needed (this requires a bit of fiddling code wise, but I’ll get onto that a little later). I also decided to upgrade the [Raspberry Pi to a v3](https://shop.pimoroni.com/products/raspberry-pi-3){:external} with in built wifi and better processing speed. The only other piece I needed to fit inside was a little custom board I made with just some male PCB headers on to be used as a power distribution board so I could grab 5v/Gnd for various components, such as the monitor and some 5v LED’s in some of the buttons.

[![Wiring 1](/media/rombusct/22.jpg)](/media/rombusct/22.jpg)
[![Wiring 2](/media/rombusct/23.jpg)](/media/rombusct/23.jpg)
[![Wiring 3](/media/rombusct/24.jpg)](/media/rombusct/24.jpg)
{:.gallery}

After a bit of jiggery pokery, I found a nice layout for everything and proceeded to drill some holes in the base so that I could screw all the components down. To save space I decided to stack the 2 Picade PCB’s together.

With everything in place, all the wires were attached to the various boards, and a power test was run. Of course it all worked first time :)

### Programming

With the case built and wired, it was now the time to bring it to life. 

The latest RetroPie was downloaded and burnt to the SD card and the Pi was booted up.

The first change I needed to make was to rotate the screen as it needs to be oriented in portrait mode (the top is actually designed so you can have it in either portrait or landscape mode, but I wanted to go with the classic cocktail arcade portrait mode). To do this I connected to the pi and updated the boot config file by running the command:

````bash
sudo nano /boot/config.txt
````

And then added/updated the display_rotate option as follows:

````bash
display_rotate=3
````

With that saved and the system rebooted, the display was now running in portrait mode.
The next thing to configure was the Picade boards. By default, these come with a firmware that makes them act as a keyboard, which normally works fine, but when you are connecting 2 at the same time, RetroePie doesn’t differentiate them so there is no way to separate player 1 from player 2. Luckily, Phil at Pimoroni has been working on a [new firmware](http://forums.pimoroni.com/t/new-2-x-configurable-keyboard-gamepad-firmware/1881){:external} that allows the boards to work as game controllers, which CAN be seen as separate controllers.

Before you can use the new firmware though, you’ll need to flash it to the boards. The easiest way to do this is from the pi itself.

Start by cloning the firmware repo:

````bash
git clone https://github.com/pimoroni/Picade-Sketch.git
cd Picade-Sketch/update
````

Now, with just 1 of the Picade boards attached, run the following command:

````bash
./update picade_2016.hex
````

Disconnect the Picade board, and do the same for the second board.

With the firmware flashed, we can now configure them as game controllers. To do this, you’ll need to connect to them over serial. I did this by connecting the board to my PC, and used Putty in serial mode, however you should be able to do this using Arduino’s serial monitor if you like. Just make sure you connect to the right COM port, and at baud rate 9600.
With a connection made, configuring it as a game controller is as simple as typing the letter ‘g’. This will apply a default game controller config, however this will also replace the volume and esc/enter keys with alternative keys, but we want to keep these as they were with the keyboard setup. Luckily you can map these back by running the following commands:

````bash
b 12 176
b 13 177
b 14 250
b 15 251
````

With the controller configured, type ‘s’ to save the configuration to the Picade boards EPROM, and then repeat for the second one.

With the Picade boards configured as game controllers, you can now map them in RetroPie by running the gamepad mapping tool in the options menu. It’s best to connect the Player 1 controller first and configure the mapping, then connect the Player 2 controller. The Raspberry Pi seems to remember which USB port the controllers are connected to, so it should keep Player 1 as Player 1 and vica versa (though I’m not entirely sure how it does this).
With the controllers configured, the only thing left is to load up some ROM’s. If you are using MAME, it’s worth going into the options menu with a game loaded (press tab), and go into the DIP Settings option and see if there is a "Cabinet" option. If there is, be sure to set it to "cocktail" and it’ll automatically flip the screen when it’s Player 2’s go. You’ll need to do this for each game individually. Another thing you can do if a game isn’t ordinarily cabinet friendly (this mainly works for top-down games such as Gauntlet or Bomberman) is in the options menu, tweak the controller settings for “this game” and invert player 2’s controls so that they can essentially play the game upside down.

And with that, the arcade is complete

[![Complete 1](/media/rombusct/25.jpg)](/media/rombusct/25.jpg)
[![Complete 2](/media/rombusct/26.jpg)](/media/rombusct/26.jpg)
[![Complete 3](/media/rombusct/27.jpg)](/media/rombusct/27.jpg)
[![Complete 4](/media/rombusct/28.jpg)](/media/rombusct/28.jpg)
[![Complete 5](/media/rombusct/29.jpg)](/media/rombusct/29.jpg)
[![Complete 6](/media/rombusct/30.jpg)](/media/rombusct/30.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/FnfIgnMjjwE?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>
 
### Conclusion

All in all I think the cabinet came out awesome (I actually think it’s the best thing I’ve ever built). Some of the nice design touches I’m really happy with are using some large light up arcade buttons with a custom “coin slot” insert for the coin buttons, and the top decal printed onto acetate and cut out on the plot cutter.

Overall, it feels great to finally realize the project of building a cocktail arcade that I started so many years ago, and I can’t wait to see how well it goes down at the event.

PS. Be sure to checkout [my youtube channel](https://www.youtube.com/channel/UCuc9r0Eg5Csy0iDnZO_t2qg){:external} for some additional videos of the [ROMBUS-CT in action](https://www.youtube.com/watch?v=FnfIgnMjjwE&list=PL_-cBfx8NkZoceXRs-R2WI-seuk_IyVq-){:external}.

#### UPDATE 2016-05-05

The guys at Pimoroni were kind enough to invite me onto their Bilge Tank show, so be sure to checkout episode 035 for an in depth look at the ROMBUS-CT :)

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/j0aaF-yOnlY?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>
