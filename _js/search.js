let jsonSearchSearch;
function initSearch(){
	
	
	var input = document.getElementById("search_input");
	input.addEventListener("keyup", function(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
		  // Cancel the default action, if needed
		  event.preventDefault();
		  // Trigger the button element with a click
		  document.getElementById("searchBtn").click();
		}
	  });


	  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonSearch = JSON.parse( this.responseText);
            //findTerm(jsonSearch);
        }
    };
    console.log(xhttp.open("GET", "/links.json", true));
    xhttp.send();
}

/*
function search(){
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonSearch = JSON.parse( this.responseText);
            findTerm(jsonSearch);
        }
    };
    console.log(xhttp.open("GET", "/links.json", true));
    xhttp.send();
}*/

function findTerm(){
	var results = [];
	var searchTerm = document.getElementById("search_input").value.toLowerCase();
	if(searchTerm == "") displayResults(results);
	else{
		for(var i = 0; i < jsonSearch.length; i++){
			var tags = false;
			for (var j = 0; j < jsonSearch[i].tags.length; j++)
				if(jsonSearch[i].tags[j].toLowerCase().includes(searchTerm))
					tags = true;
			if(jsonSearch[i].title.toLowerCase().includes(searchTerm)||
				jsonSearch[i].description.toLowerCase().includes(searchTerm)||
				jsonSearch[i].date.toLowerCase().includes(searchTerm) || tags)
				results.push(jsonSearch[i]);
		}
		console.log(results);
		displayResults(results);
	}
	
}
function findTag(jsonSearch, searchTerm){
	var results = [];
	var searchTerm = searchTerm.toLowerCase();
	if(searchTerm == "") displayResults(results);
	else{
		for(var i = 0; i < jsonSearch.length; i++){
			var tags = false;
			for (var j = 0; j < jsonSearch[i].tags.length; j++)
				if(jsonSearch[i].tags[j].toLowerCase().includes(searchTerm))
					tags = true;
			if(tags)
				results.push(jsonSearch[i]);
		}
		console.log(results);
		return results;
	}
	
}

async function displayResults(results){

	  var resultsBox = document.getElementById("search_results");

	  if(results.length<= 0 ) resultsBox.innerHTML = "<p>No results :(</p>";
	  else{
		resultsBox.innerHTML = "<p>Found " + results.length + " results:</p><br>";
		for(var i = 0; i < results.length; i+=3){
			var div1 = addInfoCustom(i,results);
			div1.classList = "search_result tile";
			resultsBox.appendChild(div1);
			var div2 = addInfoCustom(i + 1,results);
			div2.classList = "search_result tile";
			resultsBox.appendChild(div2);
			var div3 = addInfoCustom(i + 2,results);
			div3.classList = "search_result tile";
			resultsBox.appendChild(div3);
			var t = true;
			while(t) {
				await new Promise(r => setTimeout(r, 300));
				t = false;
			  }
		}
	  }
	 
}
/*

for(var i = 0; i < results.length; i++){
			var div = addInfoCustom(i,results);
			div.classList = "search_result tile";
			resultsBox.appendChild(div);
			var t = true;
			while(t) {
				await new Promise(r => setTimeout(r, 300));
				t = false;
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
}*/