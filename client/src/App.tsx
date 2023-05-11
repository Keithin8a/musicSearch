import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './song-data'
import { Song } from './song-data';



function App() {
    const [songData, setSongData] = useState([
        {
            "id": 249504,
            "artist": "Rick Astley",
            "title": "Never Gonna Give You Up",
            "year": 1987,
            "genres": ["Electronic", "Pop"]
        },
        {
            "id": 249501,
            "artist": "Madonna",
            "title": "Frozen",
            "year": 1998,
            "genres": ["Electronic"]
        },
        {
            "id": 249507,
            "artist": "Bam Bam",
            "title": "Give It To Me (I'm A Man Baby)",
            "year": 1988,
            "genres": ["Electronic"]
        },
        {
            "id": 249510,
            "artist": "The Communards",
            "title": "There's More To Love",
            "year": 1988,
            "genres": ["Electronic", "Pop"]
        },
        {
            "id": 249450,
            "artist": "Cool Hipnoise",
            "title": "Select Cuts Showcase & More",
            "year": 2003,
            "genres": ["Electronic"]
        }
    ])
    const [filteredSongData, setFilteredSongData] = useState([])

    const prettifyGenres = (genres: Song["genres"]): string => {
        return genres.join(', ');
    }

    const displaySongData = (songData: Song): JSX.Element => {
        return <li key={songData.id}>
            <div>{songData.id}</div>
            <div>{songData.artist}</div>
            <div>{songData.title}</div>
            <div>{songData.year}</div>
            <div>{prettifyGenres(songData.genres)}</div>
        </li>
    }

    const filterSearch = (): any => {

    }



    return (
        <div className="App">
            <div className='buttonContainer'>
                <label htmlFor='search'>Search</label>
                <input name='search' type='text'></input>
                <button>Search</button>
            </div>
            <ul>
                {
                    filteredSongData.length > 0 ?
                        filteredSongData.map((song) => displaySongData(song)) :
                        songData.map((song) => displaySongData(song))
                }
            </ul>
        </div>
    );
}

export default App;
