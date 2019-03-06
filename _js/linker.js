let json;

function loadDoc(n = -1, tagFilter="") {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse( this.responseText);
            if(n <= 0)
            addToHTML(tagFilter);
            else
            addNumToHTML(n, tagFilter);
        }
    };
    console.log(xhttp.open("GET", "/links.json", true));
    xhttp.send();
}

function addToHTML(tagFilter){
    var ajax = document.getElementById("ajax");
    ajax.innerHTML="";
    if(tagFilter == ""){
        for(var i = 0; i<json.length; i++){
            var div = addInfoJSON(i,json);
            div.classList = "tile";
            ajax.appendChild(div);
        }
    }
    else{
        var results = findTag(json, tagFilter);
        for(var i = 0; i<results.length; i++){
            var div = addInfoCustom(i,results);
            div.classList = "tile";
            ajax.appendChild(div);
        }
    }
    
}
function addNumToHTML(num, tagFilter){
    var ajax = document.getElementById("ajax");
    ajax.innerHTML="";
    if(tagFilter == ""){ 
        for(var i = 0; i<json.length && i < num; i++){
            var div = addInfoJSON(i,json);
            div.classList = "tile";
            ajax.appendChild(div);
        }
    }
    else{
        var results = findTag(json, tagFilter);
        for(var i = 0; i<results.length && i < num; i++){
            var div = addInfoCustom(i,results);
            div.classList = "tile";
            ajax.appendChild(div);
        }
    }
}


function addInfoJSON(i){
    var p = new Post(posts[i].title, posts[i].description, posts[i].date, posts[i].tags, posts[i].coverImage, posts[i].path);    
    //p = p.GetPostFromJSON(json,i);
    return p.BuildPostDiv(i);
}
function addInfoCustom(i, posts){
    var p = new Post(posts[i].title, posts[i].description, posts[i].date, posts[i].tags, posts[i].coverImage, posts[i].path);
    //p = p.GetPostFromJSON(posts,i);
    return p.BuildPostDiv(i);
}
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

/*
function addInfo(i){
    var div = document.createElement("div");
    var img = document.createElement("img");
    var text = document.createElement("text");
    var id = "link-" + i;
    img.src = json[i].coverImage;
    //img.width = "40%";
    text.innerHTML += "<br><a href='"+json[i].path+"' style='text-decoration:underline; color:whitesmoke;' id='"+id+"' > <h3>"+ json[i].title + "</h3></a>"; //onclick='loadLink("+i+")'
    text.innerHTML += "<p>Description: " + json[i].description + "</p>";
    text.innerHTML += "<p><em>" + json[i].date + "</em></p>";
    
    text.classList.add("tileText");
    text.innerHTML += "<br>";
    div.append(img);
    div.append(text);
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
    //location.href = json[i].path;
    
}

function GetTags(i){
    var t;
    if(json[i].tags == ""){
        
        t += "<p><em>Tags: None</em></p>";
    }
    else{
        t ="<p><em>Tags: ";
        
        for (var j = 0; j < json[i].tags.length; j++){
            if(j == json[i].tags.length - 1)
            t += json[i].tags[j] + "</em></p>";
            else
            t += json[i].tags[j] +", ";
        }
    }
    return t;
}

*/