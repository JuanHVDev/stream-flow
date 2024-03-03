"use server";

import { Movie } from "../../types";
export const getMovie = async (id: string) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.IMDB_API_KEY}&language=es-MX`
    );
    const data: Movie = await response.json();
    return data;
};
