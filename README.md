# Music Search Tech Test
The challenge is to create a page which displays the some music data along with some ui that allows the user to search the data.
All development must be done in JavaScript or TypeScript, and you may use any libraries and resources that you would normally use during development (eg online documentation / AI tools).
The data you'll need is provided in the form of a JSON file `music.json`.

## Setup
1. In a terminal, use [Create React App](https://create-react-app.dev/) to create a basic react app within the `client` directory
2. Copy `music.json` into your `client/src` directory
3. Import `music.json` into `App.jsx`

## Review Criteria

At a high level we are looking for:

- A good understanding of React
- Good use of JavaScript/TypeScript data manipulation methods
- Ability to debug errors using dev tools and internet resources (eg Documentation for React, HTML, CSS, JavaScript/TypeScript etc)
- Well structured code
- Descriptive and regular commit messages (not required if you are coding live in the interview)

## The Test
The following is a list of features which should be developed one at a time.
There's a lot of features, but we don't expect you to complete them all in the allotted time, we just want to see how you work through each task.
The functionality below is the main focus of the test, but you will need to add some basic styling to the list so that it is easy to see the filtering in action.
If you would prefer to use components from a UI Library, feel free to install the relevant dependencies.

1. Using the data provided in `music.json`, display a list of all the music data provided. For each list item display the Artist, Title, Year and Genres.
2. Add a text input above the list of music.
3. Update the input so that when the user types into the input, the music list is filtered to only show items where the `title` of the song contains the text currently entered in the input.
4. Ensure that the filter is case-insensitive.
5. Expand the search capabilities so that the same input also filters the list on `artist`, `year` and `genres`.
6. Improve performance by not filtering the list until the user has stopped typing (ie they have not typed a character for 500ms).
7. Create an API server in the `server` directory which returns the music data as JSON (this could be REST or GraphQL, using any libraries / frameworks).
8. Replace the import of `music.json` with a call to the API server.
9. Update the API to accept pagination arguments.
10. Update the UI to display pagination controls and use the pagination arguments to fetch the correct data from the API.