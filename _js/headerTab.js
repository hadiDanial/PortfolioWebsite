function HeaderTab(_name){
    this.name = _name;
}

HeaderTab.prototype.addToHTML = function(){
    nav.innerHTML += '<h2>' + this.name + '</h2>';
}
HeaderTab.prototype.addToHTMLID = function(id){
    nav.innerHTML += '<div id = \'' + id + '\' ><h2>' + this.name + '</h2></div';
}