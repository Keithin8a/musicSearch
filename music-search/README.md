# Music Search Tech Test
The task comes with a setup react app with JSON data pre loaded and ready to use in the main app. The challenge is to allow the user to search the music data.
In one hour, please complete as many of the tasks as possible. We do not expect you to finish this test, just do as much as possible in the time frame.

## Setup
1. Clone this repository
2. Install dependencies
3. `package.json` contains a script named `start` run this script to start the project.

## The Test
The test uses styled-components and example of this can be seen in `App.styles.js`
If you are not familiar with styled components feel free to use `css`. Creating `App.css` and importing into main app will work by default.

Using the data provided in `music.json`:
1. Display a list of all the music data provided. For each list item display the Artist, Title, Year and Genre. Don't worry about the Track list for now
2. Add a text input above the list of music.
3. Use the input to filter the data shown to the user as they type filter using the `title` of the song.
4. Expand the search capabilities so the input also searches `artist`, `year` and `genre`
5. Improve performance by not searching the tracks until the user has finished typing

## Review Criteria

At a high level we are looking for:

- Well structured code
- A good level of understanding of React
- Descriptive and regular commit messages
- Good use of Javascript data manipulation methods
