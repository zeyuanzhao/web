import Image from "next/image";
import githubLogoDark from "../../public/github-mark-white.svg";
import githubLogoLight from "../../public/github-mark.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div className="py-4 align-middle">
        <h1 className="inline-block text-3xl font-bold ml-8 align-middle">
          <Link href="/">Alex Zhao</Link>
        </h1>
        <ul className="inline-block list-none text-2xl ml-8 align-middle">
          <li className="inline-block mx-8">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="inline-block mx-8">
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li className="inline-block mx-8">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li className="inline-block mx-8">
            <Link href="/recordings" className="hover:underline">
              Recordings
            </Link>
          </li>
        </ul>
        <ul className="inline-block list-none align-middle float-right mr-8">
          <li className="none dark:block">
            <Link href="https://github.com/zeyuanzhao" target="_blank">
              <picture>
                <source
                  srcSet={githubLogoDark.src}
                  media="(prefers-color-scheme: dark)"
                />
                <Image src={githubLogoLight} width="35" alt="GitHub" />
              </picture>
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};
