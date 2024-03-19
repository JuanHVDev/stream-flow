"use server";

import CardMovieItem from "@/components/CardMovieItem";
import { DataMovies } from "../../types";
import { Suspense } from "react";
import SkeletonMovies from "@/components/SkeletonMovies";

export const getMoviesPopularity = async (page: number = 1) =>
{
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.IMDB_API_KEY}&language=es-MX&page=${page}&include_adult=false`
  );
  const data: DataMovies = await response.json();
  return data.results.map((movie, index) => (
    <div key={movie.id + index}>
      <Suspense fallback={<SkeletonMovies index={index} />}>
        <CardMovieItem movie={movie} index={index} />
      </Suspense>

    </div>
  ))
};
