import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { MovieData } from '../../types'
import CardMovieItem from './CardMovieItem'
import { getMoviesPopularity } from '@/actions/getMoviesPopular'
interface Props
{
  moviesData?: MovieData[],
  totalPages?: number
}

let page = 2
export const Loader = ({ moviesData }: Props) =>
{
  const [movies, setMovies] = useState<JSX.Element[]>([])
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() =>
  {
    if (isInView)
    {
      getMoviesPopularity(page).then((res) =>
      {
        setMovies([...movies, ...res])
        page++
      })
    }
  }, [isInView, movies])
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        {movies}
      </div>
      <div className="flex-col gap-4 w-full flex items-center justify-center" ref={ref}>
        <svg width="5rem" height="5rem" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="animate-spin mt-5" preserveAspectRatio="xMidYMid meet"><path d="M51 11.9c1.9-5.8-5.4-9-8.4-5.8c-3.9-6.4-12.2-1.8-12.2-1.8s-4.5-5-10.3-.4c-2.1-2.1-8.4-2.6-8.2 7.6c-7 .6-6.9 10.4-3.7 11.9l46.2 4c4.5-1.8 6.2-13.8-3.4-15.5" fill="#edd8b4"></path><path d="M21.8 4.8C22.3.5 14 1.3 15.3 6c-3.1 1.1-.9 5.8 1.6 4.6c.1 3.7 6.3 2.8 5.4-1.1c2.3 1 4.3-5.2-.5-4.7" fill="#fff8d6"></path><path d="M20.7 6.1c.9-1.6-2.1-3.4-2.3-.5c-1.8-1.5-4.1 2.7-.9 2.8c-1.5 2.3 2.4 3.7 3.1 1.5c3.1-.3 2.2-4.3.1-3.8" fill="#edd8b4"></path><path d="M20.8 7.7c-1.2-.3-1-.4-.9-1.3c.2-1.7-.8-1.7-.7-.1c.1 1-.1 1.4-1.1.6c-1.3-.9-1.4.1-.2.5c1.1.5.7.2.7 1.6c0 1.1.6 1.4.7 0c.1-1.4 0-1.3 1.1-.6c1.1.6 1.5-.4.4-.7" fill="#c9ae81"></path><path d="M17.9 15.8c2.3-2-3.3-7.4-5.4-1.9c-4.4-2.7-6.5 5.4-2.2 7.7c2.1 1.2 14.2.4 7.6-5.8" fill="#fff8d6"></path><path d="M13.3 15.8c-1.2-1.8-4.8.5-1.9 2.3c-6.3 2.9 11.4 5 5.9-.3c1.4-3.6-3.3-4.6-4-2" fill="#edd8b4"></path><path d="M15.1 16.5c-1 1.1-1 .9-1.9.4c-1.7-1.1-2.3.6-.4 1.4c1.1.4 1 .6 2.5 1.4c1.2.6 1.8 0 .3-.8s-1.4-.6 0-1.5c1.3-1.1.4-2-.5-.9" fill="#c9ae81"></path><path d="M55.6 18.6c2.1-1.8-2.9-6.6-4.8-1.7c-3.9-2.4-7.3 6-2 6.9c-.4 3.6 5.2 3.6 5.2.6c3.6 1.7 5.9-4.8 1.6-5.8" fill="#fff8d6"></path><path d="M51.5 18.6c-1.1-1.6-4.4.4-1.7 2c-2.4 1.1.6 5.2 2.3 2.1c1.6 2.5 4.8-.7 3.1-2.4c1.1-3.1-3.1-4-3.7-1.7" fill="#edd8b4"></path><path d="M53.1 19.2c-.9 1-.9.8-1.7.3c-1.5-1-2.1-.1-.4.6c1 .4 1.3.7 0 1.4c-1.5.8-.5 1.4.4.5c1-1 .5-.7 1.8 0c1.1.5 1.6 0 .3-.7s-1.3-.6 0-1.4c1.2-.8.4-1.7-.4-.7" fill="#c9ae81"></path><path d="M35.8 7c2.2-1.9-3.1-6.9-5-1.8c-4.1-2.5-7.6 6.2-2.1 7.2c-.4 3.7 5.4 3.8 5.5.6c3.7 1.8 6-5 1.6-6" fill="#fff8d6"></path><path d="M31.5 7c-1.1-1.7-4.5.4-1.8 2.1c-2.5 1.1.6 5.4 2.4 2.2c1.6 2.6 5-.7 3.2-2.5c1.3-3.3-3.2-4.2-3.8-1.8" fill="#edd8b4"></path><path d="M33.1 7.6c-1 1.1-.9.9-1.8.4c-1.6-1-2.2-.1-.4.6c1 .4 1.3.8.1 1.4c-1.6.9-.6 1.5.4.5s.5-.7 1.9 0c1.1.6 1.7 0 .3-.7c-1.4-.8-1.3-.6 0-1.4c1.2-.9.4-1.7-.5-.8" fill="#c9ae81"></path><path d="M27.6 16.1c.6-2.9-7-4-5.3 1.6c-5 .4-2.9 7.4 2.9 7.4c8.2-.1 6.7-10.9 2.4-9" fill="#fff8d6"></path><path d="M23.2 18.8c-1.6 7.9 9.9 5 5.1-.8c-1-3.6-4.5-1.8-5.1.8" fill="#edd8b4"></path><path d="M25.7 18.2c-.1 1.5-1.2.8-2 1.5c-2.3 2 3.9 3.9 4.9.3c.2-.9-2.6.1-2.1-1.4c.6-1.5-.6-1.7-.8-.4" fill="#c9ae81"></path><path d="M45.3 9.3c.6-2.9-6.9-3.9-5.2 1.6c-4.9.4-2.3 9.7 2.8 7.2c2 3.3 6.8-.1 4.9-2.7c4.1-.9 1.8-7.9-2.5-6.1" fill="#fff8d6"></path><path d="M41.8 11.9c-2-.7-3.4 3.1-.1 2.8c-1.3 2.4 3.9 4.1 3.3.4c3 1.2 3.7-3.6 1.1-3.9c-1.1-3.6-5.3-1.7-4.3.7" fill="#edd8b4"></path><path d="M43.6 11.4c-.1 1.5-.2 1.3-1.2 1.3c-1.9.1-1.8 1.2 0 .8c1.1-.3 1.6-.2.9 1.2c-.8 1.7.5 1.6.7.1c.2-1.5 0-.9 1.5-1.1c1.3-.2 1.4-1-.2-.8c-1.6.2-1.4.3-.9-1.2c.5-1.4-.7-1.6-.8-.3" fill="#c9ae81"></path><path d="M7.8 22.4L15.7 62h6.5l-5.3-39.6c-.4-5.6-9.9-5.6-9.1 0" fill="#ed4c5c"></path><path d="M16.9 22.4L22.2 62h6.5L26 22.4c0-5.6-9.5-5.6-9.1 0" fill="#f9f9f9"></path><path d="M26 22.4L28.7 62h6.5V22.4c.3-5.6-9.2-5.6-9.2 0" fill="#ed4c5c"></path><path d="M35.2 22.4V62h6.4l2.7-39.6c.6-5.6-8.8-5.6-9.1 0" fill="#f9f9f9"></path><path d="M41.6 62l4.1-2.8l1.9-35.5c.6-4.3-3-5.9-3.4-1.3L41.6 62" fill="#c94747"></path><path d="M49.2 56.8L51.1 25c.7-4-2.8-5.6-3.4-1.3l-1.9 35.5l3.4-2.4" fill="#e8e8e8"></path><path d="M52.1 54.9l2.3-28.5c.8-3.7-2.6-5.3-3.3-1.3l-1.9 31.8l2.9-2" fill="#c94747"></path><path d="M54 53.6l2.3-26c.2-2.9-1.6-3.9-1.9-1.2l-2.3 28.5l1.9-1.3" fill="#e8e8e8"></path></svg>
      </div >
    </>
  )
}
