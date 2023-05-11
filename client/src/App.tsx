import { ChangeEventHandler, useState } from 'react';
import './App.css';
import './song-data'
import { Song, songs } from './song-data';
import SongRecord from './components/songRecord';

function App() {
    const [displayData, setDisplayData] = useState<Song[]>(songs)

    const filterSearch = (searchTerm: string) => {
        if (searchTerm === '') {
            setDisplayData(songs)
            return
        }

        const searchTermLower = searchTerm.toLowerCase();

        const filteredSongs = songs.filter(({ title, artist, year, genres }) =>
            title.toLowerCase().includes(searchTermLower)
            || artist.toLowerCase().includes(searchTermLower)
            || year.toString().includes(searchTermLower)
            || genres.some((genre) => genre.toLowerCase().includes(searchTermLower))
        )
        setDisplayData(filteredSongs)
    }

    let filterTimeout: ReturnType<typeof setTimeout>;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;

        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => {
            filterSearch(inputValue.trim());
        }, 500)
    }

    return (
        <div className="App">
            <div className='buttonContainer'>
                <label htmlFor='search'>Search</label>
                <input name='search' type='text' onChange={handleChange}></input>
            </div>
            <ul>
                {
                    displayData.map((song) => <SongRecord songData={song} />)
                }
            </ul>
        </div>
    );
}

export default App;
