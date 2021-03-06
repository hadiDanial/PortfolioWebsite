class Post {
    constructor(title, desc, date, tags, coverImage, path) {
        this.title = title;
        this.description = desc;
        this.date = date;
        this.tags = tags;
        this.coverImage = coverImage;
        this.path = path;
    }
    /**
    * Creates a post object from a JSON element.
    * @param {string} json The JSON file.
    * @param {number} i The index of the post in the json file.
    */
    GetPostFromJSON(json, i) {
        if (i > json.length - 1)
        console.log("Index " + i + " out of range: " + json);
        else {
            var p = new Post(json[i].title, json[i].description, json[i].date, json[i].tags, json[i].coverImage, json[i].path);
            return p;
        }
    }
    /**
    * Creates a div containing the relevant info from a Post object.
    * @param {bool} addTags Add the post tags to the div?.
    * @param {number} i Index of the post. Used for assigning id.
    */
    BuildPostDiv(i, addTags = false) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var text = document.createElement("text");
        var id = "link-" + i;
        img.src = this.coverImage;
        img.onerror = function(){
            img.src = "/_img/defaultCover.png";
        }
        var p = this.path;
        img.onclick = function() {
            window.location.href = p;
        };
        //img.width = "40%";
        text.innerHTML += "<br><a href='" + this.path + "' style='text-decoration:underline; color:whitesmoke;' id='" + id + "' > <h3>" + this.title + "</h3></a>"; //onclick='loadLink("+i+")'
        text.innerHTML += "<p>" + this.description + "</p>";
        text.innerHTML += "<p><em>" + this.date + "</em></p>";
        var t = "";
        if (addTags) {
            t = this.GetTags();
        }
        text.innerHTML += t;
        text.classList.add("tileText");
        text.innerHTML += "<br>";
        div.append(img);
        div.append(text);
        return div;
    }

    /**
    * Creates a div containing the relevant info from a Post object, with a <picture> tag that dynamically changes images based on media query size.
    * @param {bool} addTags Add the post tags to the div?.
    * @param {number} i Index of the post. Used for assigning id.
    */
    BuildPostDivPicTag(i, addTags = false) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var pic;
        
        var src1 = "<source media='(max-width: 400px)' srcset='/_img/regular.png'>";
        var src2 = "<source media='(max-width: 900px)' srcset='/_img/regular.png'>";
        var text = document.createElement("text");
        var id = "link-" + i;

        img.src = "/_img/regular.png";
        //img.src = this.coverImage;
        img.onerror = function(){
            img.src = "/_img/defaultCover.png";
        }
        var p = this.path;
        img.onclick = function() {
            window.location.href = p;
        };
        //img.width = "40%";
        text.innerHTML += "<br><a href='" + this.path + "' style='text-decoration:underline; color:whitesmoke;' id='" + id + "' > <h3>" + this.title + "</h3></a>"; //onclick='loadLink("+i+")'
        text.innerHTML += "<p>" + this.description + "</p>";
        text.innerHTML += "<p><em>" + this.date + "</em></p>";
        var t = "";
        if (addTags) {
            t = this.GetTags();
        }
        text.innerHTML += t;
        text.classList.add("tileText");
        text.innerHTML += "<br>";
        pic = "<picture> " + src1+ src2+ img.outerHTML + "</picture>";
        div.innerHTML += pic;
        div.append(text);
        return div;
    }

    /**
    * Returns the tags of the post formatted as a string in <p> and <em> tags.
    */
    GetTags() {
        var t;
        if (this.tags == "") {
            t = "<p><em>Tags: None</em></p>";
        }
        else {
            t = "<p><em>Tags: ";
            for (var j = 0; j < this.tags.length; j++) {
                if (j == this.tags.length - 1)
                t += this.tags[j] + "</em></p>";
                else
                t += this.tags[j] + ", ";
            }
        }
        return t;
    }
    /**
     * Returns true if the tags of this post contain the search term.
     * @param {text} searchTerm The tag to search for.
     */
    HasTag(searchTerm){
        for (var j = 0; j < this.tags.length; j++)
				if(this.tags[j].toLowerCase().includes(searchTerm))
                    return true;
                    
        return false;
    }
    /**
     * Returns true if the post title, description, or date contain the search term.
     * @param {text} searchTerm The tag to search for.
     */
    PostHasTerm(searchTerm){
        if(this.title.toLowerCase().includes(searchTerm)||
        this.description.toLowerCase().includes(searchTerm)||
        this.date.toLowerCase().includes(searchTerm)) return true;
        else return false;
    }
}



