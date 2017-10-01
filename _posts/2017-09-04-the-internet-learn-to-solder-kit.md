---
layout: post
title: The Internet Learn To Solder Kit
excerpt: A learn to solder kit based on the "The Internet" from the hit TV show, The IT Crowd
image: /media/mh_theinternet.jpg

author:
  name: Matt Brailsford
  avatar: https://avatars1.githubusercontent.com/u/527305?s=200
  twitter: mattbrailsford
  url: twitter.com/mattbrailsford
  bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed dui nec quam vestibulum semper non vel massa. Mauris vitae gravida sem. Vestibulum rutrum leo sit amet mi viverra, sit amet cursus metus consequat.
---

{:external: rel="nofollow" target="_blank"}

For those of you that don't know, in my every day life I work as web developer, and as part of that, I help organise a little event called [CODECABIN](http://codecab.in). The event follows an un-conference format, in that, attendees get to set the schedule and this year I thought it would be fun to introduce everyone to the hardware world in some way. The simplest way I could think to do this was with a learn to solder kit. There are quite a few diffrent ones around, and most revolve around flashing LEDs, but I really wanted to create something that would resinate with the attendees. After a bit of thought, it hit me "what is the most famous flashing LED in the IT community (in the UK anyway)?", THE INTERNET.

If you've not seen "The Internet" sketch, shame on you, but here's a clip for some context

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/iDbyYGrswtg?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

## The Design
Whilst the idea was perfect, I wanted to scale it down to become a nice little artifact attendees could take home and keep on their work desks, so I started by looking for the smallest enclosure I could find. A quick search on [DigiKey](https://www.digikey.co.uk){:external} and I came across the [Hammond Manufacturing 1551GBK](https://www.digikey.co.uk/product-detail/en/hammond-manufacturing/1551GBK/HM375-ND/284761){:external} measuring in at just 50mm x 35mm x 20mm. It was exactly what I was looking for, and reviewing the [datasheet](http://www.hammondmfg.com/pdf/1551G.pdf){:external} it even gave you the suggested PCB size which made an ideal starting point for the board design.

Whilst I was researching parts, I also looked up the remainder of the PCB components I would need, namely a [battery holder](https://www.digikey.co.uk/product-detail/en/mpd-memory-protection-devices/BS-3/BS-3-ND/275305){:external}, a [switch](https://www.digikey.co.uk/products/en?keywords=EG1213){:external} and a [flashing LED](https://www.digikey.co.uk/product-detail/en/kingbright/WP56BSRD-B/754-1883-ND/2197310){:external}, as well as an [LED bezel](http://www.ebay.co.uk/itm/3mm-5mm-10mm-LED-Chrome-or-Black-Plastic-Holder-Bezel-Mount-/261445436063?var=&hash=item3cdf5cc29f:m:mB5mh-qRpd4WRTV9zwvryJA){:external} to mount in the enclosure and [extra screws to mount the PCB's](https://www.digikey.co.uk/products/en?keywords=1551ATS100){:external} (the enclosure only comes with screws for the back plate, so you have to buy these seperately).

The design for the PCB was done in [Eagle](https://www.autodesk.com/products/eagle/overview){:external}. I started by mapping out the schematic, which also involved making some eagle parts for some of the components I was using (detailing this is a bit out of the scope of this article but I suggest you read this great [SparkFun article](https://www.sparkfun.com/tutorials/110){:external} for more details). With the schematic set up, I then went on to design the board layout, first setting up the board outline as per the enclosure datasheet, and then placing the components where I would want them. As I know components often go out of production, I thought I'd add in an optional resitor footprint in case an alternative LED was used in the future that would need one, but for now, people can just solder some pads together to bypass it. As a finishing touch, I added a custom design to the front in keeping with the theme. I knew it was going to get convered up, but hey, it's the little details that matter :)

With the board design done, I sent it off to OSH Park to have a few sample boards made up.

## The Prototype
When the boards came back, I did a quick solder job on them to test the board design and it worked perfect.

With a working board, I then moved on to the enclosure modifications I would need. The LED was simple as it would just require a big enough round hole for the LED bezel to fit, which I could easily do with my drill press, however for the power switch I needed to create a square hole in the side. Knowing I would need to make this reproducable for the final kits, I decided I would use my CNC machine with a custom made jig (cut on my laser cutter) to hold the enclosures tightly in place whilst a 1.5mm router bit gradually carved out the hole. 

Another problem I had was that the LED bezels were a bit too long, so I also laser cut a small jig for these to help cut them down to size with my dremel.

With holes cut, and the bezel cut to size, I put together the final prototype, and it was glorious :)

## Production
For the final production, I put in a big order at DigiKey for the parts and sent the boards off to DirtyPCB's to be manufatured. When the enclosure parts came back, I set up a small assembley line in the workshop to drill all the holes and cut all the bezels down to size, and then bagged everything up ready for the event.

## The Event
The event itself was a great success, and quite a few people did the kit. It was my first time teaching soldering but I actually really enjoyed it.

[![Event 1](/media/outrun/01.jpg)](/media/outrun/01.jpg)
[![Event 2](/media/outrun/02.jpg)](/media/outrun/02.jpg)
[![Event 3](/media/outrun/03.jpg)](/media/outrun/03.jpg)
[![Event 3](/media/outrun/03.jpg)](/media/outrun/03.jpg)
{:.gallery}

## Conclusion
In the end, the kits went down a storm and everyone had lots of fun putting them together so it was all well worth it in the end. 

I have been asked if I will be selling the kits, however due to the amount of modifications that are needed to some of the components, it's just not commercially viable for me to do them, but to allow people to build their own mini internets, I have created a github repository with the board design and BOM that you are more than welcome to use (non commercial).
