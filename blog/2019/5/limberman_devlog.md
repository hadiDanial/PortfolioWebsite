[comment]: # (*.title*Limberman Dev Log*.title*)
[comment]: # (*.desc*Developement Log and Postmortem for Limberman*.desc*)
[comment]: # (*.tags*unity, C#, game, ludum dare, ld44, jam, 2019, post*.tags*)
[comment]: # (*.date*12-5-2019*.date*)

# Limberman Dev Log

#### *May 12th, 2019*

You can [play the game here.](http://www.hadidanial.com/blog/2019/5/limberman.html)

## Devlog

There was a lot to do for this game, and I worked on the [Player Controller](#PlayerController), the [Enemies](#Enemies), the Weapons, and the Room system, the tilemap, and several miscellaneous things, and the other programmer handled all character animations, sounds, the shop, UI, and game manager.

### Player Controller

I started off by working on the player controller while the other programmer worked on creating procedural animations. The player controller handles all player movement and input, as well as manages the `Player Visuals` script that controls the animations to behave according to the current state. The player movement is relatively simple: I get input from the player, normalize it, and set the velocity of the rigidbody accordingly. This also calculates the angle necessary for each weapon to aim towards the mouse.

### Enemies

The enemies have two variations: `Ranged` and `Melee`. They share the same parent class with the basic functionality, and each type has different movement and attack behavior. They also use the same animation system as the Player.

1. **Ranged Enemies:** Ranged enemies move in a random direction, stay there for a number of seconds while shooting at the player, either actively targeting them or shooting at their last location before the enemy stopped moving. Then they move again and repeat the cycle.
2. **Melee Enemies:** These always try to move towards the player, but they don't have any pathfinding, so they try to target a location either to the left or right of the player and move there. When they get close enough, the attack animation is triggered, and if their sword hits the player, it deals damage.

### Weapons



## Postmortem

I have also recorded (almost) all of the work, and I might be uploading a timelapse video eventually.

![Limberman](limberman_assets/gameplay.png)
