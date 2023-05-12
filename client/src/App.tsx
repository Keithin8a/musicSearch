import { ChangeEventHandler, useEffect, useState } from 'react';
import './App.css';
import SongRecord from './components/songRecord';
import Layout from './components/layout';

const musicSearchUrl = "http://127.0.0.1:8000/musicSearch"


function App() {
    const [displayData, setDisplayData] = useState<SongData.Song[]>([])
    const [error, setError] = useState<string | undefined>();

    const fetchData = async (searchTerm?: string) => {
        try {
            const response = await fetch(musicSearchUrl, {
                method: 'POST',
                body: JSON.stringify({ searchTerm: searchTerm || '' }),
                mode: 'cors'
            })

            const data: SongData.MusicSearchPostResponse = (await response.json())
            setDisplayData(data.data);
        } catch {
            setError("There has been an unexpected error fetching the song data")
        }
    }

    let filterTimeout: ReturnType<typeof setTimeout>;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;

        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(() => {
            fetchData(inputValue.trim());
        }, 500)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Layout>
            <section role='search' className='buttonContainer'>
                <label htmlFor='searchMusic'>Search For Music</label>
                <input name='searchMusic' type='search' role='searchbox' placeholder='Search for title, artist, year or genre' onChange={handleChange}></input>
            </section>
            {error && (
                <section role='alert'>
                    <p>{error}</p>
                </section>)
            }
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
