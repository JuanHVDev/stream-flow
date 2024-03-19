import { TVResponse } from "../../types";

export const getSeriePopularityUnique = async (page: number = 1) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.IMDB_API_KEY}&language=es-MX&page=${page}&include_adult=false`
    );
    const data: TVResponse = await response.json();
    const moviesSort = data.results.sort((a, b) =>
        a.popularity < b.popularity ? 1 : -1
    );
    return moviesSort[0];
};
