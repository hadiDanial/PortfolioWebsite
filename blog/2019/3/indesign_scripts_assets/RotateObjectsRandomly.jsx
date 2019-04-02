// This script rotates all the selected objects randomly

var randomStart = 6;

for(var i = 0; i < app.selection.length; i++)
{
    var rnd = Math.random();
    var randomRotation = rnd * (randomStart) - (randomStart/2);
    var myObj = app.selection[i];
    myObj.rotationAngle = randomRotation;
}