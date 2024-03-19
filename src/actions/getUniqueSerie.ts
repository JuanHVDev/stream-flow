"use server";

import { TVData } from "../../types";
export const getUniqueSerie = async (id: string) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.IMDB_API_KEY}&language=es-MX`
    );
    const data: TVData = await response.json();
    return data;
};
