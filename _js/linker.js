let json;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse( this.responseText);
            addToHTML();
        }
    };
    console.log(xhttp.open("GET", "/links.json", true));
    xhttp.send();
}

function addToHTML(){
    var ajax = document.getElementById("ajax");
    //ajax.style.display = "inline-block";
    document.getElementById("page-title").innerHTML = "All Posts";
    ajax.innerHTML="";
    ajax.style.width="67%";
    
    for(var i = 0; i<json.length; i++){
        var div = addInfo(i,json);
        div.classList = "tile";
        ajax.appendChild(div);       
        //var id = "link-" + i;
        //div.innerHTML += "<br><a style='text-decoration:underline; color:whitesmoke;' id='"+id+"' > <h2 onclick='loadLink("+i+")'>"+ json[i].title + "</h2></a>";
        //div.innerHTML += "<p>Description: " + json[i].description + "</p>";
        //div.innerHTML += "<p>Date: " + json[i].date + "</p>";
        //div.innerHTML += "<p>tags: " + json[i].tags + "</p>";
        //div.innerHTML += "<br>";
        
    }
}
function addInfo(i){
    var div = document.createElement("div");
    var id = "link-" + i;
    div.innerHTML += "<br><a style='text-decoration:underline; color:whitesmoke;' id='"+id+"' > <h2 onclick='loadLink("+i+")'>"+ json[i].title + "</h2></a>";
    div.innerHTML += "<p>Description: " + json[i].description + "</p>";
    div.innerHTML += "<p>Date: " + json[i].date + "</p>";
    div.innerHTML += "<p>tags: " + json[i].tags + "</p>";
    div.innerHTML += "<br>";
    return div;
}
async function loadLink(i){
    console.log("Click! " + i);
    var ajax = document.getElementById("ajax");
    document.getElementById("page-title").innerHTML = "";
    ajax.innerHTML="";
    var btnId ="Back to all posts";
    var btn = "<button id='" + btnId + "' onclick='addToHTML()'>Back to all posts</button>"; 
    ajax.innerHTML += btn + "<br>";
    //var div = addInfo(i);
    //div.innerHTML+= json[i].path;
    //ajax.appendChild(div);
    //ajax.innerHTML='<object type="text/html" data="'+json[i].path+'" width=100% height=100%></object>';
    ajax.innerHTML = await fetchHtmlAsText(json[i].path);

}


async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

