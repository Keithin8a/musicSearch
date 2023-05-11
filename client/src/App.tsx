import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import './App.css';
import './song-data'
import { Song } from './song-data';
import SongRecord from './components/songRecord';



function App() {
    const [songData, setSongData] = useState<Song[]>([
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
    const [filteredSongData, setFilteredSongData] = useState<Song[]>([])
    const [searchTerm, setSearchTerm] = useState('');

    const filterSearch: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (searchTerm === '') {
            //sort out validation message
            return
        }

        const tempSongData = songData.filter((song) => song.title === searchTerm)
        setFilteredSongData(tempSongData)
    }

    const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;

        setSearchTerm(inputValue.trim());
    }

    return (
        <div className="App">
            <div className='buttonContainer'>
                <label htmlFor='search'>Search</label>
                <input name='search' type='text' value={searchTerm} onChange={handleSearchInputChange}></input>
                <button onClick={filterSearch}>Search</button>
            </div>
            <ul>
                {
                    filteredSongData.length > 0 ?
                        filteredSongData.map((song) => <SongRecord songData={song} />) :
                        songData.map((song) => <SongRecord songData={song} />)
                }
            </ul>
        </div>
    );
}

export default App;
