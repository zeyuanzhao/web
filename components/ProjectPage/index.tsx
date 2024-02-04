import Main from "../Main";

const ProjectPage = ({
  title,
  urltitle,
  children,
}: {
  title: string;
  urltitle: string;
  children: React.ReactNode;
}) => {
  return (
    <Main>
      <div className="mb-8">
        <h3 className="text-md text-gray-700 dark:text-gray-300">/projects/{urltitle}</h3>
        <h1 className="text-5xl">{title}</h1>
        {children}
      </div>
    </Main>
  );
};

export default ProjectPage;
