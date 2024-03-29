import { getMoviesPopularityUnique } from "@/actions/getMovieUnique"
import { Button } from "./ui/button"
import Link from "next/link"


const HeroSection = async () =>
{
  const movie = await getMoviesPopularityUnique()
  return (
    <section
      className="relative h-[calc(100vh-8rem)] bg-cover bg-center text-white rounded-3xl my-2"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-0">
        <div className="flex h-full flex-col justify-center p-8">
          <h1 className="text-5xl font-bold capitalize">{movie.title}</h1>
          <p className="mt-4 mb-8 max-w-xl text-lg">
            {movie.overview}
          </p>
          <div className="flex space-x-4">
            {/* <Button className="bg-red-600 hover:bg-red-700">Reproducir</Button> */}
            <Link href={`movie/${movie.id}`} >
              <Button className="bg-[#6d6d6e] hover:bg-[#5c5c5d]">Más información</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection