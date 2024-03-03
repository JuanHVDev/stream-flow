import { getMovie } from "@/actions/getMovie";
import { formatMoney } from "@/utils/formatMoney";
import { getMovieReleaseYear } from "@/utils/getMovieReleaseYear";
import Image from "next/image";

interface Props
{
  params: {
    id: string
  }
}

import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge";
import CircularProgress from "@/components/CircularProgress";

export default async function MoviePage({ params: { id } }: Props)
{
  const movie = await getMovie(id)
  return (
    <div className="flex flex-col gap-4 max-w-6xl px-4 mx-auto py-6">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl">
            {movie.title}
          </h1>
          <div className="grid md:grid-cols-1 gap-2">
            <dl className="grid grid-cols-2 gap-1 text-sm ">
              <dt className="font-semibold">Vote Average</dt>
              <dd>
                <CircularProgress percent={+Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(movie.vote_average)} />
              </dd>
            </dl>
            <dl className="grid grid-cols-2 gap-2 text-lg">
              <dt className="font-semibold">Genres</dt>
              <dd>
                {
                  movie.genres.map((genre, index) => (
                    <Badge key={genre.id + index} variant="default" className="h-fit" >
                      {genre.name}
                    </Badge>
                  ))
                }
              </dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Production Companies</dt>
              <dd>{movie.production_companies.map((c) => c.name).join(", ")}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Production Countries</dt>
              <dd>{movie.production_countries.map((c) => c.name).join(", ")}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Release Date</dt>
              <dd>{new Date(movie.release_date).toLocaleString("en-US")}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Revenue</dt>
              <dd>{formatMoney(movie.revenue)}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Runtime</dt>
              <dd>{movie.runtime}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Status</dt>
              <dd>{movie.status}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Tagline</dt>
              <dd>{movie.tagline}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Budget</dt>
              <dd>{formatMoney(movie.budget)}</dd>
            </dl>
          </div>
        </div>
        <div className="grid gap-4 items-start md:items-center">
          <Card>
            <CardContent className="p-4">
              <img
                alt="Poster"
                className="aspect-[3/4] object-cover rounded-lg overflow-hidden"
                height={600}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={400}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-2">
          <Label className="text-lg" htmlFor="overview">
            Overview
          </Label>
          <p>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props: React.ComponentPropsWithoutRef<"svg">)
{
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}