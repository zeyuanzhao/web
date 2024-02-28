import ProjectPage from "../../../components/ProjectPage";
import Image from "next/image";
import DiscordBanner from "../../../public/discord-banner.png";
import Socials from "../../../components/Socials";
import githubLogoLight from "../../../public/github-light.svg";
import githubLogoDark from "../../../public/github-dark.svg";
import Link from "next/link";

const Website = () => {
  return (
    <ProjectPage title="Website" urltitle="website">
      <div className="">
        <div className="float-right w-1/3 ml-16 mb-2">
          <div className="rounded-lg shadow-lg overflow-hidden mb-4">
            <Image src={DiscordBanner} alt={""} className="object-cover" />
          </div>
          <div className="ml-4 mb-4 flex place-items-center justify-between">
            <div className="inline-block hover:">
              <Socials
                logoLight={githubLogoLight}
                logoDark={githubLogoDark}
                logoAlt={"GitHub Repository"}
                logoLink={"https://github.com/zeyuanzhao/hubportal"}
              />
              <Link href={"https://github.com/zeyuanzhao/hubportal"} target="_blank">
                <p className="lg:inline-block ml-2 hidden">Source Code</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-y-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Python
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Discord.py
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              JSON API
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Discord API
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Git
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              GitHub
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              pip
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Heroku
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              MongoDB
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              .env
            </span>
          </div>
        </div>
        <article className="prose prose-code:font-mono">
          <p className="font-bold">
            🚧 This page is under construction. 🚧 Please check back soon for
            more information.
          </p>
        </article>
      </div>
    </ProjectPage>
  );
};

export default Website;
