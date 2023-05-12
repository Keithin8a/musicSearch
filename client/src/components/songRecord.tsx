import '../App.css';

const prettifyGenres = (genres: SongData.Song["genres"]): string => {
    return genres.join(', ');
}

interface Props {
    songData: SongData.Song;
    rowIndex: number;
}

const SongRecord = (props: Props) => {
    const { id, artist, title, year, genres } = props.songData;

    const rowClassName = props.rowIndex % 2 ? "evenRow" : "oddRow"

    return (
        <li key={id} className={`item ${rowClassName}`}>
            <p className='itemDetail'>{id}</p>
            <p className='itemDetail'>{artist}</p>
            <p className='itemDetail'>{title}</p>
            <p className='itemDetail'>{year}</p>
            <p className='itemDetail'>{prettifyGenres(genres)}</p>
        </li>
    )
};

export default SongRecord;
