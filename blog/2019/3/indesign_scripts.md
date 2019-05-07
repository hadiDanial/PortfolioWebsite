[comment]: # (*.title*inDesign Scripts*.title*)
[comment]: # (*.desc*These are some small inDesign scripts I made at work to speed things up.*.desc*)
[comment]: # (*.tags*indesign, script, .jsx, post, finished*.tags*)
[comment]: # (*.date*31-3-2019*.date*)

# inDesign Scripts

#### *March 31st, 2019*

I've been working with inDesign for several years now, and over time I've acquired a collection of useful scripts. Most of the time, I could find a way to accomplish what I needed to do, and sometimes I had to modify an existing script. A few times, though, I couldn't find anything, or I needed a specific task done, and so made my own scripts.

These were only used and tested with CS6.

I'll update this page if I create more scripts.

To download, click the download link, then right-click the page and select the `Save as...` option.

### BestFit

This script lets you choose a `PDF` file and select a size and final page count, and it fills the page with that file in a grid (gangup-repeat). The document values are hard coded in, as are the auto export location and the placed document's dimensions, so you'll have to go in and change those manually if you need to use this. In my case, those values never changed for the project, so I didn't need to figure out how to get the UI input to work.

Due to the specific nature of the job, I also didn't take orientation into account, so it doesn't find the best fit for given page size, it finds the best fit for the page size on the given orientation.

This script was made during the local elections, when I had to repeat this process dozens of time, and while I could use the impose software on the printer, it was time consuming to then export the files individually to another computer, not to mention error prone. I wrote this script, and it saved a lot of time, as it would quickly run and export everything neatly.

I got the `getPDFPageCount` and `macFileFilter` functions from somewhere else online.

Best Fit: [Download](indesign_scripts_assets/BestFit.jsx)

### Rotate Objects

These scripts were made when I had a large collection of images in a document and I needed to rotate them all randomly. I didn't feel like going through the 50+ images and rotating them manually, so I made these simple scripts. These rotate all selected (active) objects. You can easily change the values to whatever you want, they're pretty low as I wanted a more subtle effect.

Rotate Objects Randomly: [Download](indesign_scripts_assets/RotateObjectsRandomly.jsx)

Set Rotation to zero: [Download](indesign_scripts_assets/SetRotationToZero.jsx)