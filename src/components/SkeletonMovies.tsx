import React from 'react'
import CardMovieItem from './CardMovieItem'
import { MotionDiv } from '@/lib/motion'
import { getMovieReleaseYear } from '@/utils/getMovieReleaseYear'
import { Link } from 'lucide-react'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}


const SkeletonMovies = ({ index }: { index: number }) =>
{
  return (
    <div key={index}>
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
          <div className="-z-10">
            <Skeleton
              className="absolute inset-0 object-cover aspect-[500/700] w-full h-full rounded-lg "
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 gap-6 z-30">
            <div className="flex flex-col gap-1 text-white">
              <Skeleton className="text-lg font-semibold leading-none"></Skeleton>
              <Skeleton className="text-sm font-medium leading-none" />
            </div>
            <Skeleton className="w-full max-w-xl" >
              <Skeleton className="w-full max-w-xl" />
            </Skeleton>
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  )
}

export default SkeletonMovies