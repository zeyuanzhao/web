import Image from "next/image";
import githubLogoDark from "../../public/github-dark.svg";
import githubLogoLight from "../../public/github-light.svg";
import linkedinLight from "../../public/linkedin-light.svg";
import linkedinDark from "../../public/linkedin-dark.svg";
import Link from "next/link";
import { Socials } from "../Socials";

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
        <ul className="inline-block list-none align-middle float-right mr-4">
          <li className="inline-block ml-3">
            <Socials
              logoLight={githubLogoLight}
              logoDark={githubLogoDark}
              logoAlt={"GitHub"}
              logoLink={"https://github.com/zeyuanzhao/"}
            ></Socials>
          </li>
          <li className="inline-block ml-3">
            <Socials
              logoLight={linkedinLight}
              logoDark={linkedinDark}
              logoAlt={"LinkedIn"}
              logoLink={"https://www.linkedin.com/in/zazhao/"}
            ></Socials>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};
