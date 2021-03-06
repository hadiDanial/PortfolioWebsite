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

function findTerm(){
	var results = [];
	var searchTerm = document.getElementById("search_input").value.toLowerCase();
	///
	if ("ga" in window) {
		tracker = ga.getAll()[0];
		if (tracker)
			tracker.send("event", "Search Page", "Search", searchTerm);
	}	
	///
	if(searchTerm == "") displayResults(results);
	else{
		for(var i = 0; i < jsonSearch.length; i++){
			var p = new Post();
			p = p.GetPostFromJSON(jsonSearch,i);
			var tags = p.HasTag(searchTerm);
			if(p.PostHasTerm(searchTerm) || tags)
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
			var p = new Post();
			p = p.GetPostFromJSON(jsonSearch,i);
			var tags = p.HasTag(searchTerm);
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
			var div1 = addInfoCustom(i,results, true);
			div1.classList = "search_result tile";
			resultsBox.appendChild(div1);
			if(i + 1 < results.length){
				var div2 = addInfoCustom(i + 1,results, true);
				div2.classList = "search_result tile";
				resultsBox.appendChild(div2);		
			}
			if(i + 2 < results.length){
				var div3 = addInfoCustom(i + 2,results, true);
				div3.classList = "search_result tile";
				resultsBox.appendChild(div3);
			}
			var t = true;
			while(t) {
				await new Promise(r => setTimeout(r, 300));
				t = false;
			}
		}
	}
}
