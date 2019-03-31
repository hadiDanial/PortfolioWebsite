[comment]: # (*.desc*Creating my personal website*.desc*)
[comment]: # (*.tags*website, webdev, frontend, js, finished, featured*.tags*)
[comment]: # (*.title*Personal Website*.title*)
[comment]: # (*.date*3-3-2019*.date*)

# Personal Website

#### *March 3rd, 2019*

This website was the first web dev project I've ever done.  
It was built from scratch using plain `HTML, CSS, JS`, and a little bit of `jQuery` mixed in.

![Cover Image](Website_Assets/coverImg.png)

Web development is... interesting, and different from what I'm used to with `C#`. I spent a lot of time looking up how to accomplish what I wanted, be it with the CSS styling and animations, or scripting.

At first, I didn't want to create a static HTML website. I didn't want to go about manually adding links to each post I made. At the same time, I didn't want to use a prebuilt CMS, because this was, first and foremost, a project to **learn** front end web development, and a portfolio second.

I also didn't want to use any libraries or frameworks such as React or Angular. I didn't want to spend the time learning them before making sure I had a good grasp of the basics of web development.

### I faced several challenges getting everything to work correctly.

1. Using a CMS for the blog was overkill, and, like I said, I wanted to learn the basics. I didn't want to deal with backend or a database on my first project. While researching, I stumbled upon [Jekyll](https://jekyllrb.com/). It seemed like it would have been the ideal solution, but using it meant giving up on learning web dev on this project. It did, however, inspire me.

    I developed a simple app in `C#`, using `WPF`, that would search for `.html` files in any given directory, then generate a `JSON` array based on the data it found, which is located in a `.md` or `.txt` file with the same name as the `.html` document. The `JSON` data contains a title, description, date, tags, a cover image, and a path for each post.

    Using this data, I was able to create a simple search system, and a way to generate links to all the pages on my website, simply by running the app and updating the `JSON` file.

2. I didn't want to reuse the same `HTML` code for the header in all of my pages. I was looking for ways to somewhat automate the process, and if I wanted to change the header and nav bar later on, I didn't want to manually go through all of the pages in the website and replace the code. So I created a `JavaScript` script that loads the header and highlights the correct category on the nav bar. This script also handles the nav menu on mobile.

### In addition, I tried several things that didn't end up panning out:

   1. I created a script that loads the content of the `.html` files into a div, similar to loading the header. The idea was that I'd dynamically load the content, so that I'd only have a handful of pages to take care of, and the rest would be generated on the fly as requested. I had a working prototype, but ended up scrapping it because it meant that the website would be a Single Page App, which is not really suited to a blog. I couldn't find an easy way to take care of the URL routing issue without a backend or using a framework. A blog wouldn't work well if you couldn't go to specific posts with a URL, would it? Having to search every time would get annoying quick.

   2. The posts are written in `Markdown`. At one point, I wanted to skip converting the `Markdown` to `HTML` manually, and instead use something like [Showdown](http://showdownjs.com/) at runtime. I ended up scrapping that idea too, and converting the `Markdown` to `HTML` using an online converter such as [Dillinger](https://dillinger.io/) or the Markdown PDF extension in VSCode, making minor adjustments, and uploading `.html` files.

### Future changes:

1. I want to add post groups, so that posts concerning a single topic or project can be shown together.
2. I might consider adding comments, which might be tricky considering how I implemented the blog itself.