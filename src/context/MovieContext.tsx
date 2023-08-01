import React, { createContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import axios from 'axios';
import { Movie, MovieContextData } from '../interfaces/Movies';

interface MovieContextProviderProps {
    children: ReactNode;
}

export const MovieContext = createContext<MovieContextData>({} as MovieContextData);

const MovieContextProvider: React.FC<MovieContextProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [favorites, setFavorites] = useState<Movie[]>([]);
    const [favoritesLoaded, setFavoritesLoaded] = useState(false);
    const [isFavoritesPage, setIsFavoritesPage] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [movieGalleryTitle, setMovieGalleryTitle] = useState('');

    const API_KEY = '1fdec8cee31b5e9665542556f7f271d1';
    
    // Function to fetch popular movies
    const fetchPopularMovies = useCallback(async () => {
        try {
            const response = await axios.get<{ results: Movie[]}>('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: API_KEY,
                },
            });
            
            if (!response.data || !response.data.results) {
                throw new Error('Error connecting to the API');
            }

            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching popular movie data');
        }
    }, [setMovies]);

    // Function to search movies
    const searchMovies = async (query: string) => {
        try {
            const response = await axios.get<{ results: Movie[] }>(
                `https://api.themoviedb.org/3/search/movie?query=${query}`, {
                    params: {
                        api_key: API_KEY,
                    },
                });

            const filteredMovies = response.data.results.filter((movie) =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );

            if (!response.data || !response.data.results) {
                throw new Error('Error connecting to the API');
            }

            if (response.data.results.length) {
                setIsSearching(true);
                setSearchQuery(query);
                setMovies(filteredMovies);
            } else {
                setIsSearching(false);
                setSearchQuery('');
                fetchPopularMovies();
            }
        } catch (error) {
            console.error('Error searching movie data');
        }
    };

    // Function to add movie to favorites
    const addToFavorites = useCallback((movie: Movie) => {
        setFavorites(prevFavorites => [...prevFavorites, movie]);
    }, [setFavorites]);

    // Function to remove movie from favorites
    const removeFromFavorites = useCallback((id: string) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== id));
    }, [setFavorites]);

    // Function to toggle favorites page
    const toggleFavorites = useCallback(() => {
        setIsFavoritesPage(prevIsFavoritesPage => !prevIsFavoritesPage);
    }, [setIsFavoritesPage]);

    // Update the movie gallery title whenever searchQuery or isFavoritesPage changes
    useEffect(() => {
        if (isFavoritesPage) {
            setMovieGalleryTitle('Your Favorites...');
        } else if (isSearching) {
            setMovieGalleryTitle(`Search results for ${searchQuery}...`);
        } else {
            setMovieGalleryTitle("Today's Popular Movies");
        }
    }, [isFavoritesPage, isSearching, searchQuery]);

    // Load favorites from local storage
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            const parsedFavorites: Movie[] = JSON.parse(savedFavorites);
            setFavorites(parsedFavorites);
        }
        setFavoritesLoaded(true);
        fetchPopularMovies();
    }, [fetchPopularMovies]);

    // Save favorites to local storage whenever 'favorites' state changes
    useEffect(() => {
        if (favoritesLoaded) {
            const favoritesToSave = JSON.stringify(favorites);
            localStorage.setItem('favorites', favoritesToSave);
        }

        if (!favorites.length) {
            setIsFavoritesPage(false);
        }
    }, [favorites, favoritesLoaded]);

    // Memoize the context value to prevent unnecessary re-rendering of consumers
    const contextValue = useMemo<MovieContextData>(
        () => ({
            movies,
            favorites,
            movieGalleryTitle,
            searchQuery,
            isFavoritesPage,
            isSearching,
            searchMovies,
            addToFavorites,
            removeFromFavorites,
            toggleFavorites,
        }),
        [movies, favorites, movieGalleryTitle, searchQuery, isFavoritesPage, isSearching, searchMovies, addToFavorites, removeFromFavorites, toggleFavorites]
    );

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
