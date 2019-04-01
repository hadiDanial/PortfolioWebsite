[comment]: # (*.title*inDesign Scripts*.title*)
[comment]: # (*.desc*These are some small inDesign scripts I made at work to speed things up.*.desc*)
[comment]: # (*.tags*indesign, script, .jsx, finished*.tags*)
[comment]: # (*.date*31-3-2019*.date*)

# inDesign Scripts

#### *March 31st, 2019*

I've been working with inDesign for several years now, and over time I've acquired a collection of useful scripts. Sometimes, though, you can't find what you want online, especially when it's a specific function that you want to use for a specific job. So, I made a few small scripts.

### Rotate Objects

These scripts were made when I had a large collection of images in a document and I needed to rotate them all randomly. I didn't feel like going through the 50+ images and rotating them manually, so I made this simple script. 

Rotate Objects Randomly: [Download](indesign_scripts/Rotate Objects Randomly.jsx)

### The Snake

After the `Grid` system was done, it was time to create the `Snake` and define how it moves. The `Snake` script was responsible for snapping the snake to the grid, moving it on the grid/2D array, rotating the head, and growing and shrinking it.

The `SnakeController` script took in the player's input, and checked if the snake could move in that direction on the grid. If it could, it send instructions to the `Snake` script to move the head and update all the body parts.

### The Art

![Snakescape Art](snakescape_assets/tiles.png)

We didn't have an artist working with us on this project, and we didn't even have any decent placeholder art. So, on the last day, I opened up Affinity Designer and started working. I'm not an artist, but I know my way around design, and considering the game was based on tiles, I managed to create all the art for the game in ~6 hours. I'm actually happy with how it turned out, and it gave me some confidence regarding my abilities.

### Looking Back

Once again, as it is a jam game, there's a lot that could be improved upon.

1. The level editing was a pain, and it really needs to be made more user friendly. I wasn't aware of Unity's Tilemap system at the time of this jam, but maybe that would have helped, and saved us a lot of time and trouble creating the custom grid system and manually creating the levels.

2. The gameplay turned out to be fine. There were no major bugs, so that's good, but we should have made a *lot* of extra levels. The ones we had were good, but the game ended up being too short.
