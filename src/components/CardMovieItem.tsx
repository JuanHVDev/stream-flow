import { getMovieReleaseYear } from "@/utils/getMovieReleaseYear"
import Link from "next/link"
import { MovieData } from "../../types"
import { Button } from "./ui/button"
import Image from "next/image"
import { MotionDiv } from "@/lib/motion"
interface Props
{
  movie: MovieData,
  index?: number
}

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: "easeInOut",
      duration: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const CardMovieItem = ({ movie, index }: Props) =>
{
  return (
    <MotionDiv
      variants={variants}
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
        variants={item}
        className="relative flex justify-center items-center mx-auto w-[200px] h-[300px] rounded-lg mt-5">
        <div>
          <Image
            priority
            alt={movie.title}
            className="absolute inset-0 object-cover aspect-[500/700] w-full h-full rounded-lg"
            height={500}
            src={
              `https://image.tmdb.org/t/p/original${movie.poster_path}`
            }
            width={500}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-6 gap-6 z-10">
          <div className="flex flex-col gap-1 text-white">
            <h3 className="text-lg font-semibold leading-none">{movie.title}</h3>
            <span className="text-sm font-medium leading-none">{
              getMovieReleaseYear(movie.release_date)
            }</span>
          </div>
          <Button size="sm" variant="default">
            <Link href={`/movie/${movie.id}`} >
              View
            </Link>
          </Button>
        </div>
      </MotionDiv>
    </MotionDiv>
  )
}

export default CardMovieItem