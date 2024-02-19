const Main = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <main className="mt-10 md:mx-16 mx-4 mb-32">
      <h1 className="text-5xl mb-8">{title}</h1>
      {children}
    </main>
  );
}

export default Main;