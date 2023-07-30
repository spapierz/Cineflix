import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Button } from '@mui/material';

const FavoritesButton: React.FC = () => {
    //const { showFavorites, toggleFavorites } = useContext(MovieContext);

    return (
        <Button
            /*onClick={toggleFavorites}*/
            variant="contained"
            style={{
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '3px',
                textTransform: 'none',
                fontWeight: 500,
                marginTop: '8px',
                marginBottom: '16px',
            }}
        >
            test {/* {showFavorites ? 'Show All Movies' : 'Show Favorites'}*/}
        </Button>
    );
};

export default FavoritesButton;
