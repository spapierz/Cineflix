export interface Movie {
    title: string;
    backdrop_path: string;
    overview: string;
    releaseDate: string;
    rating: string;
    id: string;
}

export interface MovieContextData {
    movies: Movie[];
    //favorites: Movie[];
    //searchMovies: (query: string) => Promise<void>;
    //addToFavorites: (movie: Movie) => void;
    //removeFromFavorites: (id: string) => void;
}