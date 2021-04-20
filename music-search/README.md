# Music Search Tech Test

This task comes with a JSON file with restaurant data. The challenge is to build a React application to display the data and enable users to browse the restaurant listings.
The task comes with a setup react app with JSON data pre loaded and ready to use in the main app. The challenge it to allow the user to search the music data.
In one hour, please complete as many of the tasks as possible. We do not expect you to finish this test, just do as much as possible in the time frame.

## Setup
1. Clone this repository
2. Run `yarn`
3. Run `yarn start`

## The Test

Using the data provided in `music.json`:

1. Display a list of all the music data provided. For each list item display the Artist, Title, Year and Genre. Don't worry about the Track list for now
2. Add a text input above the list of music.
3. Use the input to filter the data shown to the user they should be able to search by Artist, Title, Year and Genre all from one input. This should be done as the user types.
4. For Each list item add a drop down section which can display all the variants of the track. This should be toggleable from a UI element and opening one dropdown should close the others.
5. Improve performance by not searching the tracks until the user has finished typing
6. Enable the user to also search by tracklist title and duration from the main search input.

## Review Criteria

At a high level we are looking for:

- Well structured code
- A good level of understanding of React
- Descriptive and regular commit messages
- Good use of Javascript data manipulation methods
