"use server";

import { DataMovies } from "../../types";

export const getMoviesTopRated = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.IMDB_API_KEY}&language=en-US&page=1`
    );
    const data: DataMovies = await response.json();
    return data.results;
};
