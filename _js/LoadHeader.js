$(document).ready(function(){
    //$('header').load('header.html');
    var fileName = location.href.split("/").slice(-1); 
    if(fileName.toString().includes("index.html")){
        $( "nav ul a:nth-child(1)" ).addClass("nav_active");
        $( "nav ul a:nth-child(2)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(3)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(4)" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("about.html")){
        $( "nav ul a:nth-child(4)" ).addClass("nav_active");
        $( "nav ul a:nth-child(1)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(2)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(3)" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("blog.html")){
        $( "nav ul a:nth-child(3)" ).addClass("nav_active");
        $( "nav ul a:nth-child(1)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(2)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(4)" ).removeClass("nav_active");
    }
    if(fileName.toString().includes("project.html")){
        $( "nav ul a:nth-child(2)" ).addClass("nav_active");
        $( "nav ul a:nth-child(1)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(3)" ).removeClass("nav_active");
        $( "nav ul a:nth-child(4)" ).removeClass("nav_active");
    }
});
/* INDEX
<a href=#> <div class="logo_container">
                <div style="float:left"><img src="_img/_logo/Logo_Part1.png"></div>
                <div style="float:left"><img src="_img/_logo/Logo_Part2.png"></div>
                <div style="float:left"><img src="_img/_logo/Logo_Part3.png"></div>
                <div style="float:left"><img src="_img/_logo/Logo_Part4.png"></div> 
            </div>  </a>
            <nav><ul>
                <a href=# class="nav_active"><li>Home</li></a>
                <!----<a href=#><li>Games</li></a>-->
                <a href=#><li>Projects</li></a>
                <a href=#><li>Blog</li></a>
                <a href="about.html"><li>About</li></a>
            </ul> 
        </nav>   */


        /* ABOUT
        <a href="index.html"> <div class="logo_container">
        <div class="logo"><img src="_img/_logo/Logo_Part1.png"></div>
        <div class="logo_hidden"><img src="_img/_logo/Logo_Part2.png"></div>
        <div class="logo logoMove"><img src="_img/_logo/Logo_Part3.png"></div>
        <div class="logo_hidden logoMove"><img src="_img/_logo/Logo_Part4.png"></div> 
    </div>  </a>
    <nav><ul>
        <a href="index.html"><li>Home</li></a>
        <!----<a href=#><li>Games</li></a>-->
        <a href=#><li>Projects</li></a>
        <a href=#><li>Blog</li></a>
        <a href=# class="nav_active"><li>About</li></a>
    </ul> 
</nav>  */