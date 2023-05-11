import '../App.css';
import { Song } from '../song-data';

const prettifyGenres = (genres: Song["genres"]): string => {
    return genres.join(', ');
}

interface SongData {
    songData: Song;
}

const SongRecord = (props: SongData) => {
    const { id, artist, title, year, genres } = props.songData;

    return (
        <li key={id}>
            <div>{id}</div>
            <div>{artist}</div>
            <div>{title}</div>
            <div>{year}</div>
            <div>{prettifyGenres(genres)}</div>
        </li>
    )
};

export default SongRecord;
