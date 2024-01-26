export default function Main(
  { 
    title,
    children 
  }: { 
    title: string; 
    children: React.ReactNode 
  }) {
  return (
    <main className="mt-10 mx-16">
      <h1 className="text-5xl mb-4">{title}</h1>
      {children}
    </main>
  )
}