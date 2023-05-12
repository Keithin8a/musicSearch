import { RequestHandler } from "express"

import { Song, songs } from '../../data/song-data'

export interface SearchMusicReq {
    searchTerm: string
    page: any
}

export interface SearchMusicRes {
    data: Song[]
    pageSize: number
    page: number
}

const pageSize = 2

export const searchMusic: RequestHandler<SearchMusicReq, SearchMusicRes> = async (req, res, next) => {
    let data = songs
    console.log("hello")
    const { searchTerm, page } = req.params;

    console.log(page);

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

    const offset = (page - 1) * pageSize

    res.status(200);
    res.json({
        data: data.slice(offset, pageSize),
        pageSize,
        page
    })
}