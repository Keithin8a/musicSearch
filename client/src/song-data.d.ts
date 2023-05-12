declare namespace SongData {
    export interface Song {
        id: number;
        artist: string;
        title: string;
        year: number;
        genres: string[];
    }

    export interface MusicSearchPostResponse {
        data: Song[]
    }
}