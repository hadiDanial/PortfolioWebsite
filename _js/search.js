function search(){
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse( this.responseText);
            findTerm(json);
        }
    };
    console.log(xhttp.open("GET", "/links.json", true));
    xhttp.send();
}

function findTerm(json){
	var results = [];
	var searchTerm = document.getElementById("search_input").value.toLowerCase();
	if(searchTerm == "") displayResults(results);
	else{
		for(var i = 0; i < json.length; i++){
			//console.log(json[i].title.includes(searchTerm));
			var tags = false;
			for (var j = 0; j < json[i].tags.length; j++)
				if(json[i].tags[j].toLowerCase().includes(searchTerm))
					tags = true;
			if(json[i].title.toLowerCase().includes(searchTerm)||
				json[i].description.toLowerCase().includes(searchTerm)||
				json[i].date.toLowerCase().includes(searchTerm) || tags)
				results.push(json[i]);
		}
		console.log(results);
		displayResults(results);
	}
	
}

async function displayResults(results){

	  var resultsBox = document.getElementById("search_results");

	  if(results.length<= 0 ) resultsBox.innerHTML = "<p>No results :(</p>";
	  else{
		resultsBox.innerHTML = "<p>Found " + results.length + " results:</p><br>";
		for(var i = 0; i < results.length; i++){
			var div = addInfo(i,results);
			div.classList = "search_result";
			resultsBox.appendChild(div);
			var t = true;
			while(t) {
				await new Promise(r => setTimeout(r, 300));
				t = false;
			  }
		}
	  }
	 
}

function addInfo(i, results){
    var div = document.createElement("div");
    var id = "link-" + i;
    div.innerHTML += "<br><a href='"+results[i].path+"' style='text-decoration:underline; color:whitesmoke;' id='"+id+"' > <h2>"+ results[i].title + "</h2></a>"; //onclick='loadLink("+i+")'
    div.innerHTML += "<p>Description: " + results[i].description + "</p>";
    div.innerHTML += "<p>Date: " + results[i].date + "</p>";
    div.innerHTML += "<p>tags: " + results[i].tags + "</p>";
    div.innerHTML += "<br>";
    return div;
}