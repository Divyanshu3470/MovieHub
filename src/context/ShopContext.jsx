import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [popular, setPopular] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [latest, setLatest] = useState([])

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const fetchPopularMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
        const data = await response.json()
        setPopular(data.results)
    }

    const fetchLatestMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        const data = await response.json()
        setLatest(data.results)
    }

    useEffect(() => {
        fetchPopularMovies();
        fetchLatestMovies();
    }, []);

    const value = {
        popular,
        latest
    }

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    )

}

export default ShopContextProvider