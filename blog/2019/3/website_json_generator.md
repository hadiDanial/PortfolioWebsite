[comment]: # (*.desc*An app that generates a JSON file for the posts on my website*.desc*)
[comment]: # (*.tags*website, C#, WPF, JSON, github, project, 2019, finished, featured*.tags*)
[comment]: # (*.title*Website JSON Generator*.title*)
[comment]: # (*.date*3-3-2019*.date*)
[comment]: # (*.lastMod*8-5-2019*.lastMod*)

# Website JSON Generator

#### *March 3rd, 2019, updated May 5th, 2019*

![Cover Image](website_json_generator_assets/coverImg.png)

This was a small project, made with `C#`, using `WPF`. It looks through a given directory and searches for files that end with `.html`. For each file that it finds, it creates a `Post` object that contains a title, description, date, tags, a cover image, and a path for each post, the data taken from a `.md` or `.txt` file with the same name as the `.html` file. It then generates a `JSON` array with all the posts it found and sorts them by date, then saves the generated `.json` file. Uses [Newtonsoft's Json.Net](https://www.newtonsoft.com/json) to serialize the data into a `JSON` array..

The `.json` file is then used to search the posts and generate links to them in the website.

![JSON Generator App](website_json_generator_assets/jsonGenApp.png)

#### *April 9th, 2019*

Added a button to generate a sitemap. The sitemap is just a collection of all the links in a text file.

#### *May 5th, 2019*

Added last modification date to the app, so that the sitemap stays up to date with any future modifications.