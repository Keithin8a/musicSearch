export interface Song {
  id: number;
  artist: string;
  title: string;
  year: number;
  genres: string[];
}

export declare const songs: Song[];