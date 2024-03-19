import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import CircularProgress from "@/components/CircularProgress";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { getUniqueSerie } from "@/actions/getUniqueSerie";
import { Button } from "@/components/ui/button";
import ButtonReturn from "@/components/ButtonReturn";
interface Props
{
  params: {
    id: string
  }
}
// export const openGraphImage = { images: ['http://...'] }
export async function generateMetadata({ params: { id } }: Props, parent: ResolvingMetadata): Promise<Metadata>
{
  const movie = await getUniqueSerie(id)
  return {
    title: movie.name,
    description: movie.overview,
    authors: { name: "Juan" },
    openGraph: {
      title: movie.original_name,
      description: movie.overview
    }
  }
}


export default async function MoviePage({ params: { id } }: Props)
{
  const movie = await getUniqueSerie(id)
  return (
    <div className="flex flex-col gap-4 max-w-6xl px-4 mx-auto py-6">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="grid gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl">
            {movie.name}
          </h1>
          <div className="grid md:grid-cols-1 gap-2">
            <dl className="grid grid-cols-2 gap-1 text-sm ">
              <dt className="font-semibold">Vote Average</dt>
              <dd>
                <CircularProgress percent={+Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(movie.vote_average)} />
              </dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Country</dt>
              <dd>
                {movie.origin_country}
              </dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Original Name</dt>
              <dd>
                {movie.original_name}
              </dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Lenguage</dt>
              <dd>
                {movie.original_language}
              </dd>
            </dl>
            {/* <dl className="grid grid-cols-2 gap-2 text-lg">
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
            </dl> */}
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">First Air Date</dt>
              <dd>{new Date(movie.first_air_date).toLocaleString("en-US")}</dd>
            </dl>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="font-semibold">Popularity</dt>
              <dd>{movie.popularity}</dd>
            </dl>
          </div>

          <div className="grid gap-4 md:gap-10 items-start">
            {
              movie.overview && <div className="grid gap-2">
                <Label className="text-lg" htmlFor="overview">
                  Overview
                </Label>
                <p>
                  {movie.overview}
                </p>
              </div>
            }

          </div>

          <div>
            <ButtonReturn />
          </div>
        </div>
        <div className="grid gap-4 items-center md:items-center">
          <Card className="w-full mx-auto">
            <CardContent className="p-4 w-full">
              <Image
                alt={movie.name + "Poster"}
                className="aspect-[3/4] object-cover rounded-lg overflow-hidden w-full"
                height={600}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={400}
              />
            </CardContent>
          </Card>
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