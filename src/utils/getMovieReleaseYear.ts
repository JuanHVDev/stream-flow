export const getMovieReleaseYear = (date: Date): number => {
    return new Date(date).getFullYear();
};
