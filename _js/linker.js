function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse( this.responseText);
            addToHTML(json);
        }
    };
    console.log(xhttp.open("GET", "/links.json", true));
    xhttp.send();
}

function addToHTML(json){
    var ajax = document.getElementById("ajax");
    ajax.style.display = "inline-block";
    ajax.style.width="67%";
    
    for(var i = 0; i<json.length; i++){
        var div = document.createElement("div");
        div.classList = "tile";
        div.style.width = "30%";
        div.style.height = "250px";
        div.style.margin = "1%";
        ajax.appendChild(div);
        div.innerHTML += "<br><a style='text-decoration:underline; color:whitesmoke;' href='" +  json[i].path + "'> <h2>"+ json[i].title + "</h2></a>";
        div.innerHTML += "<p>Description: " + json[i].description + "</p>";
        div.innerHTML += "<p>Date: " + json[i].date + "</p>";
        div.innerHTML += "<p>tags: " + json[i].tags + "</p>";
        div.innerHTML += "<br>";
        
    }
}