[comment]: # (*.title*Lash*.title*)
[comment]: # (*.desc*My entry to the 7DRL jam 2020.*.desc*)
[comment]: # (*.tags*unity, C#, game, 7DRL, project, jam, 2020, finished, featured*.tags*)
[comment]: # (*.date*24-2-2020*.date*)

# Lash

#### *March 7th, 2020*

You can play Lash [here](https://hadidanial.itch.io/lash).

Lash is my game for the 7DRL 2020 jam. 7DRL stands for 7-day rogue like. I decided to take my previous game, [Grid](http://hadidanial.com/blog/2020/2/grid.html), and expand on the gravity mechanic in a rogue-like dungeon crawler. I spent a week on this, and it was fun, yet surprisingly complex.

I started with the player controller from `Grid`, and started to modify it to allow player control of the gravity and simplify it. I ended up reworking it and getting rid of unnecessary parts, basically gutting the system and getting a simple gravity controller instead.

This game contains some of the most complex systems I've made so far. There's a dungeon generator, enemies with some very rudimentary follow behavior, an animation controller that's more involved than I've ever made, I learned how to use the new input system, and for the first time ever, I implemented a simple difficulty system.

![Screenshot](lash_assets/SC1.png)

Instead of the usual left and right movement, the player would move parallel to the transformed x-axis on the grid, and jump along the transformed y-axis.

### The Dungeon Generator

The dungeon generator generates a dungeon where the size is dependant on the difficulty.

The first two rooms in the dungeon are always constant, as is the boss room, though it gets spawned in a random place each time. All the other rooms in the dungeon are randomly chosen from a list of rooms, and the layout of the dungeon is also randomly generated. All adjacent rooms are connected to each other, and the doors are locked until all the enemies in the room are killed.

### The Player

The player controller started off as the controller from `Grid`, but I 

### Looking Back

I feel like I need to spend some time learning about game and level design. But I'm proud of this game, especially the technical parts.

The math was hard to get right, but I feel like I learned a lot. Playing with Shader Graph was fun, and getting the movement to finally work was so satisfying. I think I want to explore this mechanic further (without the grid, perhaps).

I think it looks good, albeit with a little too much bloom. It can be a little hard on the eyes. I'm disappointed that I didn't manage to get any audio in it, though.

Overall, I am very happy about this game.
