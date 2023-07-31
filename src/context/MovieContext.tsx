import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
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

    const API_KEY = '1fdec8cee31b5e9665542556f7f271d1';
    
    const fetchPopularMovies = async () => {
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
    };

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

            // user searches and gets results, but if user deletes, it grabs popular movies again
            response.data.results.length ? setMovies(filteredMovies) : fetchPopularMovies();
        } catch (error) {
            console.error('Error searching movie data');
        }
    };

    const addToFavorites = (movie: Movie) => {
        setFavorites(prevFavorites => [...prevFavorites, movie]);
    };

    const removeFromFavorites = (id: string) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== id));
    };

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            const parsedFavorites: Movie[] = JSON.parse(savedFavorites);
            setFavorites(parsedFavorites);
        }
        setFavoritesLoaded(true);
        setMovies([]);
        fetchPopularMovies();
    }, []);

    // Save favorites to localStorage whenever 'favorites' state changes
    useEffect(() => {
        if (favoritesLoaded) {
            const favoritesToSave = JSON.stringify(favorites);
            localStorage.setItem('favorites', favoritesToSave);
        }
    }, [favorites, favoritesLoaded]);

    return (
        <MovieContext.Provider value={{ movies, favorites, searchMovies, addToFavorites, removeFromFavorites }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;