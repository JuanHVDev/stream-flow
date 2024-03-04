import { getMoviesPopularity } from '@/actions/getMoviesPopular';
import { getMoviesTopRated } from '@/actions/getMoviesPopularity';
import CarouselMovie from '@/components/CarouselMovie';
import GridMoviesPopularity from '@/components/GridMoviesPopularity';
import HeroSection from '@/components/HeroSection';


export default async function HomePage()
{
  const data = await getMoviesPopularity(1)
  const moviesTopRated = await getMoviesTopRated()
  return (
    <div className='w-full '
    >
      <HeroSection />
      <div className='w-full mx-auto'>
        <h1 className="text-3xl font-bold my-6">
          Top Rated
        </h1>
      </div>
      <CarouselMovie movies={moviesTopRated.results} />
      <GridMoviesPopularity data={data} />
    </div>
  )
}