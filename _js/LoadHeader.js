$(document).ready(function(){

    jQuery('#b').prepend( jQuery('<div>').load('/header.html') );
    //$('#b').prepend( load('/header.html'));
    
    var x = window.matchMedia("(max-width: 900px)")
    HideMenu() 
    x.addListener(HideMenu)
    InitMenu();
});

async function InitMenu(){
    while(!document.querySelector("nav")) {
        await new Promise(r => setTimeout(r, 50));
      }
      var fileName = location.href;//.split("/").slice(-1); 
    if(fileName.toString().includes("index.html")){
        $( "#nav_index" ).addClass("nav_active");
        $( "#nav_projects" ).removeClass("nav_active");
        $( "#nav_blog" ).removeClass("nav_active");
        $( "#nav_about" ).removeClass("nav_active");
        $( "#nav_search" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("about.html")){
        $( "#nav_about" ).addClass("nav_active");
        $( "#nav_index" ).removeClass("nav_active");
        $( "#nav_projects" ).removeClass("nav_active");
        $( "#nav_blog" ).removeClass("nav_active");
        $( "#nav_search" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("blog")){
        $( "#nav_blog" ).addClass("nav_active");
        $( "#nav_index" ).removeClass("nav_active");
        $( "#nav_projects" ).removeClass("nav_active");
        $( "#nav_about" ).removeClass("nav_active");
        $( "#nav_search" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("projects.html")){
        $( "#nav_projects" ).addClass("nav_active");
        $( "#nav_index" ).removeClass("nav_active");
        $( "#nav_blog" ).removeClass("nav_active");
        $( "#nav_about" ).removeClass("nav_active");
        $( "#nav_search" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("search.html")){
        $( "#nav_search" ).addClass("nav_active");
        $( "#nav_index" ).removeClass("nav_active");
        $( "#nav_projects" ).removeClass("nav_active");
        $( "#nav_blog" ).removeClass("nav_active");
        $( "#nav_about" ).removeClass("nav_active");
    }
    HideMenu();
}

function ToggleMenu(x){
    $(x).toggleClass("menuChange");
    $('#nav').toggleClass( "nav" );  
}

function HideMenu(){
    if($(window).width < 900){
        $('#nav').addClass("nav");
        $('#menuBars').removeClass("menuChange");
    }
    else{
        $('#nav').removeClass("nav");
        $('#menuBars').addClass("menuChange");
    }
}
