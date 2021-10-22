# Music Search Tech Test
The task data in a json file (music.json). The challenge is to create a page which displays the data along with some ui that allows the user to search the data.

## Setup
1. Use [Create React App](https://create-react-app.dev/) to create a basic react app
2. Copy `music.json` into your `src` directory
3. Import `music.json` into `App.jsx`

## The Test
Using the data provided in `music.json`:

1. Display a list of all the music data provided. For each list item display the Artist, Title, Year and GenreS.
2. Add a text input above the list of music.
3. Update the input so that when the user types into the input, the music list is filtered to only show items where the `title` of the song contains the text currently entered in the input.
4. Ensure that the filter is case-insensitive.
4. Expand the search capabilities so that the same input also filters the list on `artist`, `year` and `genres`.
5. Improve performance by not filtering the list until the user has stopped typing (ie they have not typed a character for 500ms).

The functionality above is the main focus of the test, but you will need to add some basic styling to the list so that it is easy to see the filtering in action.
If you would prefer to use components from a UI Library, feel free to install the relevant dependencies.

## Review Criteria

At a high level we are looking for:

- A good understanding of React
- Good use of Javascript data manipulation methods
- Ability to debug errors using dev tools and internet resources (eg Documentation for React, HTML, CSS, JavaScript, etc)
- Well structured code
- Descriptive and regular commit messages (not required if you are coding live in the interview)
