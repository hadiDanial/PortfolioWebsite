$(document).ready(function(){

    jQuery('#b').prepend( jQuery('<div>').load('/header.html') );
    //$('#b').prepend( load('/header.html'));
    HighlightNav();
});




async function HighlightNav(){
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
    if(fileName.toString().includes("project.html")){
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
}