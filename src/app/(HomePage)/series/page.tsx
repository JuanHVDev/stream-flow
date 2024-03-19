import GridMoviesPopularity from "./_components/GridMoviesPopularity";
import HeroSection from "./_components/HeroSection";
import { getSeriesPopular } from "@/actions/getSeriesPopular";

export default async function SeriesPage()
{
  const data = await getSeriesPopular(1)
  return (
    <div>
      <HeroSection />
      <GridMoviesPopularity data={data} />
    </div>
  );
}