export const metadata = {
  title: 'Home',
  description: '',
};
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