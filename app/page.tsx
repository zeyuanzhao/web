import Link from "next/link";
import Main from "../components/Main";

const Home = () => {
  return (
    <Main>
      <img src="" alt="" />
      <div className="p-12 bg-sky-100 dark:bg-slate-800 dark:text-white rounded-xl shadow-md">
        <h1 className="text-5xl mb-4">Hi, I'm Alex Zhao</h1>
        <h2 className="mb-3 text-xl">🎻 Violin and 💻 Programming</h2>
        <hr className="border-2 border-slate-600" />
        <p className="mt-8">
          I'm a sophomore at Montgomery Blair High School. Learn more about me{" "}
          <Link href={"/about"} className="hover:underline text-blue-800 dark:text-blue-300">
            here
          </Link>
          . Also view my{" "}
          <Link href={"/projects"} className="hover:underline text-blue-800 dark:text-blue-300">
            programming projects
          </Link>{" "}
          and{" "}
          <Link href={"/recordings"} className="hover:underline text-blue-800 dark:text-blue-300">
            violin recordings
          </Link>
          .
        </p>
        <p>
          Check out how I built this website using Next.js on my{" "}
          <Link
            href={"/projects/website"}
            className="hover:underline text-blue-800 dark:text-blue-300"
          >
            projects page
          </Link>
          . This website is also <span className="underline">responsive</span>, so try viewing it on a mobile device!
        </p>
        <p className="mt-4">
          🚧 This site is still under construction so it'll be updated very
          frequently. 🚧 Give me suggestions at{" "}
          <Link
            href="mailto:contact@azhao.dev"
            className="hover:underline text-blue-800 dark:text-blue-300"
          >
            contact@azhao.dev
          </Link>
        </p>
      </div>
    </Main>
  );
};

export default Home;
