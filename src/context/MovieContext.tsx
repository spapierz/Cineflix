import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { MovieContextData } from '../interfaces/Movies';

export const MovieContext = createContext<MovieContextData>({} as MovieContextData);