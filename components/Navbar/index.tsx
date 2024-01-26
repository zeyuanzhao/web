import Image from "next/image";
import githubLogo from "../../public/github-mark-white.svg";

export const Navbar = () => {
  return (
    <nav>
      <div className="py-4 align-middle">
        <h1 className="inline-block text-3xl font-bold ml-8 align-middle">
          <a href="/">Alex Zhao</a>
        </h1>
        <ul className="inline-block list-none text-2xl ml-8 align-middle">
          <li className="inline-block mx-8">
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li className="inline-block mx-8">
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li className="inline-block mx-8">
            <a href="/projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li className="inline-block mx-8">
            <a href="/recordings" className="hover:underline">
              Recordings
            </a>
          </li>
        </ul>
        <ul className="inline-block list-none align-middle">
          <li>
            <Image src={githubLogo} width="35" alt="GitHub" />
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};
