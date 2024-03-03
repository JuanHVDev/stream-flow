"use client"
import { useInView } from "framer-motion"
import { MovieData } from '../../types'
import { useEffect, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import CardMovieItem from './CardMovieItem'
import Autoplay from "embla-carousel-autoplay"
type Props = {
  movies: MovieData[]
}

function CarouselMovie({ movies }: Props)
{
  const plugin = useRef(
    Autoplay({
      delay: 2000,
    })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true
      }}
      className="max-w-7xl mx-auto"
    >

      <CarouselPrevious />
      <CarouselContent className="max-w-sm w-full">
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-2/3" >
            <CardMovieItem movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselMovie