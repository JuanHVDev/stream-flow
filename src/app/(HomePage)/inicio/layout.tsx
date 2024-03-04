
export const metadata = {

  title: "Stream-Flow",
  description: "App de streaming para peliculas y series",
  authors: { name: "Juan Herreraa Vazquez" },
  keywords: [
    "streaming",
    "peliculas",
    "series",
    "movil",
  ],
  type: "website",
}
export default function InicioLayout({
  children
}: {
  children: React.ReactNode;
})
{
  return (
    <section>
      
      {children}
    </section>
  );
}