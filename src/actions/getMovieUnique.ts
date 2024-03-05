"use server";

import { DataMovies } from "../../types";

export const getMoviesPopularityUnique = async (page: number = 1) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.IMDB_API_KEY}&language=es-MX&page=${page}&include_adult=false`
    );
    const data: DataMovies = await response.json();
    const moviesSort = data.results.toSorted((a, b) =>
        a.popularity < b.popularity ? 1 : -1
    );
    return moviesSort[0];
};
