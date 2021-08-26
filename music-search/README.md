# Music Search Tech Test
The task comes with a setup react app with JSON data pre loaded and ready to use in the main app. The challenge is to allow the user to search the music data.
In one hour, please complete as many of the tasks as possible. We do not expect you to finish this test, just do as much as possible in the time frame.

## Setup
1. Clone this repository
2. Install dependencies
3. `package.json` contains a script named `start` run this script to start the project.

## The Test
Using the data provided in `music.json`:

1. Display a list of all the music data provided. For each list item display the Artist, Title, Year and Genre. Don't worry about the Track list for now
2. Add a text input above the list of music.
3. Use the input to filter the data shown to the user. As they type filter the list to show only items where the `title` of the song contains the text currently entered in the input.
4. Expand the search capabilities so the input also searches `artist`, `year` and `genre`
5. Improve performance by not filtering the list until the user has stopped typing (ie they have not typed a character for 500ms)

The functionality above is the main focus of the test, but you will need to add some basic styling to the list so that it is easy to see the filtering in action.
The test uses styled-components and example of this can be seen in `App.styles.js`
If you are not familiar with styled components feel free to use `css`.
Creating `App.css` and importing into main app will work by default.

## Review Criteria

At a high level we are looking for:

- Well structured code
- A good level of understanding of React
- Descriptive and regular commit messages
- Good use of Javascript data manipulation methods
