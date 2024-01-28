const Main = ({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <main className="mt-10 mx-16 mb-20">
      <h1 className="text-5xl mb-4">{title}</h1>
      {children}
    </main>
  );
}

export default Main;