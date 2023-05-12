import { RequestHandler } from "express"

import { Song, songs } from '../../data/song-data'

export interface SearchMusicReq {
    searchTerm: string
}

export interface SearchMusicRes {
    data: Song[]
}

export const searchMusic: RequestHandler<SearchMusicReq, SearchMusicRes> = async (req, res, next) => {
    let data = songs
    const { searchTerm } = req.params;

    if (searchTerm !== '') {
        const searchTermLower = searchTerm.toLowerCase();

        const filteredSongs = songs.filter(({ title, artist, year, genres }) =>
            title.toLowerCase().includes(searchTermLower)
            || artist.toLowerCase().includes(searchTermLower)
            || year.toString().includes(searchTermLower)
            || genres.some((genre) => genre.toLowerCase().includes(searchTermLower))
        )
        data = filteredSongs
    }

    res.status(200);
    res.json({
        data: data,
    })
}