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
    
    return children;
};

export default MovieContextProvider;