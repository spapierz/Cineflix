export interface Movie {
    title: string;
    poster: string;
    description: string;
    releaseDate: string;
    rating: string;
    imdbID: string;
}

export interface MovieContextData {
    movies: Movie[];
    favorites: Movie[];
    searchMovies: (query: string) => Promise<void>;
    addToFavorites: (movie: Movie) => void;
    removeFromFavorites: (imdbID: string) => void;
}