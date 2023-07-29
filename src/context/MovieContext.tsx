import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { Movie, MovieContextData } from '../interfaces/Movies';

interface MovieContextProviderProps {
    children: ReactNode;
}

export const MovieContext = createContext<MovieContextData>({} as MovieContextData);

const MovieContextProvider: React.FC<MovieContextProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const fetchPopularMovies = async () => {
        try {
            const response = await axios.get<{ results: Movie[]}>('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: '1fdec8cee31b5e9665542556f7f271d1',
                },
            });
            
            if (!response.data || !response.data.results) {
                throw new Error('Error connecting to the API');
            }

            setMovies(response.data.results)
        } catch (error) {
            console.error('Error fetching popular movie data');
        }
    };

    const addToFavorites = (movie: Movie) => {
        setFavorites(prevFavorites => [...prevFavorites, movie]);
    };

    const removeFromFavorites = (id: string) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== id))
    };

    useEffect(() => {
        console.log('test movies')
        fetchPopularMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;