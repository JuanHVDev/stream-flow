"use server";

import CardMovieItem from "@/components/CardMovieItem";
import { DataMovies, TVResponse } from "../../types";
import { Suspense } from "react";
import SkeletonMovies from "@/components/SkeletonMovies";
import { MotionDiv } from "@/lib/motion";
import Image from "next/image";
import { getMovieReleaseYear } from "@/utils/getMovieReleaseYear";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const getSeriesPopular = async (page: number = 1) =>
{
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.IMDB_API_KEY}&language=es-MX&page=${page}&include_adult=false`
  );
  const data: TVResponse = await response.json();
  return data.results.map((serie, index) => (
    <div key={serie.id + index}>
      <Suspense fallback={<SkeletonMovies index={index} />}>
        <MotionDiv
          // variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            // staggerChildren: (index as number) * 0.02,
            delay: (index as number) * 0.25,
            ease: "easeInOut",
            duration: 0.5
          }}
          viewport={{ amount: 0 }}
        >
          <MotionDiv
            // variants={item}
            className="relative flex justify-center items-center mx-auto w-[200px] h-[300px] rounded-lg mt-5">
            <div className="-z-10">
              <Image
                priority
                alt={serie.name}
                className="absolute inset-0 object-cover aspect-[500/700] w-full h-full rounded-lg"
                height={500}
                src={
                  `https://image.tmdb.org/t/p/original/${serie.poster_path}`
                }
                width={500}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 gap-6 z-30">
              <div className="flex flex-col gap-1 text-white">
                <h3 className="text-lg font-semibold leading-none">{serie.name}</h3>
                <span className="text-sm font-medium leading-none">{
                  getMovieReleaseYear(serie.first_air_date)
                }</span>
              </div>
              <Link href={`/series/${serie.id}`} className="w-full max-w-xl" >
                <Button size="sm" variant="default">
                  View
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </MotionDiv>
      </Suspense>

    </div>
  ))
};
