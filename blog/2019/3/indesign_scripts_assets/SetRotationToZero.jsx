// Set rotation of all selected objects to zero.

for(var i = 0; i < app.selection.length; i++)
{
    var myObj = app.selection[i];
    myObj.rotationAngle = 0;
}