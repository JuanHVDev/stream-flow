"use client"
import { Loader } from './Loader';
type Props = {
  data: JSX.Element[]
}

const GridMoviesPopularity = ({ data }: Props) =>
{
  return (
    <div className='p-2'>
      <div className='w-full mx-auto'>
        <h1 className="text-3xl font-bold my-6">
          Most Popular
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

        {
          data
        }

      </div>
      <Loader />
    </div>
  )
}

export default GridMoviesPopularity