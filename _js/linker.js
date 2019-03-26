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
    var p = new Post(json[i].title, json[i].description, json[i].date, json[i].tags, json[i].coverImage, json[i].path);    
    //p = p.GetPostFromJSON(json,i);
    return p.BuildPostDiv(i);
}
function addInfoCustom(i, posts){
    var p = new Post(posts[i].title, posts[i].description, posts[i].date, posts[i].tags, posts[i].coverImage, posts[i].path);
    //p = p.GetPostFromJSON(posts,i);
    return p.BuildPostDiv(i, true);
}
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}