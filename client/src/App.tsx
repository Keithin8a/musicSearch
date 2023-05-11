import { ChangeEventHandler, useState } from 'react';
import './App.css';
import './song-data'
import { Song, songs } from './song-data';
import SongRecord from './components/songRecord';
import Layout from './components/layout';

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
        <Layout>
            <section role='search' className='buttonContainer'>
                <label htmlFor='searchMusic'>Search For Music</label>
                <input name='searchMusic' type='search' role='searchbox' placeholder='Search for title, artist, year or genre' onChange={handleChange}></input>
            </section>
            <section>
                <ul>
                    {
                        displayData.map((song, index) => <SongRecord songData={song} rowIndex={index} />)
                    }
                </ul>
            </section>
        </Layout>
    );
}

export default App;
