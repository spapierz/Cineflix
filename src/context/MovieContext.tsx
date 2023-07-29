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
            const response = await axios.get<{ search: Movie[]}>('https://api.themoviedb.org/3/movie/popular?api_key=1fdec8cee31b5e9665542556f7f271d1');
            
            if (!response.data || !response.data.search) {
                throw new Error('Error connecting to the API');
            }

            console.log('API Response:', response.data.search);

            setMovies(response.data.search)
        } catch (error) {
            console.error('Error fetching popular movie data');
        }
    };

    useEffect(() => {
        console.log('test movies')
        fetchPopularMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ movies }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;