
export const revalidate = (60 * 60 * 24 * 7)

export default function SeriesLayout({
  children
}: {
  children: React.ReactNode;
})
{
  return (
    <section
      className="container"
    >{children}</section>
  );
}