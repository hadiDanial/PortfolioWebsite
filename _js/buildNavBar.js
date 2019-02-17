function BuildNavBar(){
    var numTabs = 6;
    var width = document.getElementById('nav').offsetWidth;
    var colors = ["#ff0000","#00ff00","#0000ff","#ff00ff","#00ffff","#e05a02"]
    for(var i = 1; i <= numTabs; i++){
        tab = new HeaderTab('Tab ' + i);
        var id = 'id'+i;
        tab.addToHTMLID(id);
        var element = document.getElementById(id);
        element.style.color = "#black";
        //element.style.backgroundColor = colors[i-1];
        element.style.margin = 0;
        element.style.width = width/numTabs + "px";
        element.style.cssFloat = "left";
        element.style.height = "100px";
        element.getElementsByTagName("h2")[0].style.backgroundColor = colors[i-1];
        }
}

window.onload = function(){
    BuildNavBar();
}