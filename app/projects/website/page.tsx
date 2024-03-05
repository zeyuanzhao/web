import ProjectPage from "../../../components/ProjectPage";
import Image from "next/image";
import WebsiteBanner from "../../../public/nextjs-banner.png";
import Socials from "../../../components/Socials";
import githubLogoLight from "../../../public/github-light.svg";
import githubLogoDark from "../../../public/github-dark.svg";
import webLogoDark from "../../../public/web-dark.svg";
import webLogoLight from "../../../public/web-light.svg";
import Link from "next/link";

const Website = () => {
  return (
    <ProjectPage title="Website" urltitle="website">
      <div className="">
        <div className="float-right w-1/3 ml-16 mb-2">
          <div className="rounded-lg shadow-lg overflow-hidden mb-4">
            <Image src={WebsiteBanner} alt={"Next.js Logo"} className="object-cover" />
          </div>
          <div className="ml-4 mb-4 flex place-items-center justify-between">
            <div className="inline-block hover:">
              <Socials
                logoLight={githubLogoLight}
                logoDark={githubLogoDark}
                logoAlt={"GitHub Repository"}
                logoLink={"https://github.com/zeyuanzhao/web"}
              />
              <Link href={"https://github.com/zeyuanzhao/web"} target="_blank">
                <p className="lg:inline-block ml-2 hidden">Source Code</p>
              </Link>
            </div>
            <div className="inline-block mr-6">
              <Socials
                logoLight={webLogoLight}
                logoDark={webLogoDark}
                logoAlt={"Visit Website"}
                logoLink={"/"}
                width={50}
                height={50}
                newTab={false}
              />
              <Link href={"/"}>
                <p className="lg:inline-block ml-0.5 hidden">Visit Website</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-y-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Next.js
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              React
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Node.js
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Tailwind
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              HTML
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              CSS
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Javascript
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Typescript
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Git
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              GitHub
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              npm
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              VSCode
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Google IDX
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Cloudflare
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Markdown
            </span>
          </div>
        </div>
        <article className="prose prose-code:font-mono">
          <p className="font-bold">
            🚧 This page is under construction. 🚧 Please check back soon for
            more information.
          </p>
          <p>
            This website was built using <code>Next.js</code>, a{" "}
            <code>React</code> framework that runs on <code>Node.Js</code>. I
            started working on this project in January 2024 to learn{" "}
            <code>React</code>
            and practice my web development skills. I showcase my programming
            and science projects on this website, along with some of my violin
            recordings.
          </p>
          <p>
            The website was developed on{" "}
            <a href="https://idx.dev/" target="_blank">
              Google IDX
            </a>
            , a web-based IDE that is based on Code OSS. The code for this
            website is hosted on the GitHub repository linked to the right. The{" "}
            <code>main</code> branch contains all the code that is currently
            deployed. The <code>development</code> branch contains newer code
            that hasn't been published yet.
          </p>
          <p>
            I registered the <code>azhao.dev</code> domain using Cloudflare and
            deployed it using Cloudflare Workers. This website was built using
            <code>Next.js's</code> <code>app</code> router and{" "}
            <code>TailwindCSS</code> for the styling.
          </p>
          <h2>Navigation Bar</h2>
          <p>
            The navigation bar was implemented in the <code>Navbar</code>{" "}
            component, which I added to the <code>layout.tsx</code> file to
            automatically render on each page. I also created a separate{" "}
            <code>Socials</code> component to render the social media icons.
            Each button also has a dark mode image so that it displays well in
            dark mode.
          </p>
          <h2>Home Page</h2>
          <p>
            This page was very simple to build. I surrounded everything in a{" "}
            <code>div</code> to add a blue background and rounded corners. I
            also added shadows to enhance the appearance.
          </p>
          <h2>Projects Page</h2>
          <p>
            I implemented the project cards in the <code>Project</code>{" "}
            component. Each card was a flex column, containing an image, some
            text, and buttons. I reused the <code>Socials</code> component for
            the buttons, and added some rounding and shadows to the cards. Each
            project card links to a separate project page, like this one.
          </p>
        </article>
      </div>
    </ProjectPage>
  );
};

export default Website;
