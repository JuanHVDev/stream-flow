import Navbar from "./_components/navbar";

export const metadata = {
  title: 'Inicio',
  description: 'Inicio',
};
export default function MarketingLayout({
  children
}: {
  children: React.ReactNode;
})
{
  return (
    <section>
      <Navbar />
      {
        children
      }
    </section>
  );
}