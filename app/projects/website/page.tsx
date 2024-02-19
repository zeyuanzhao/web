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
            <Image src={WebsiteBanner} alt={""} className="object-cover" />
          </div>
          <div className="ml-4 mb-4 flex place-items-center justify-between">
            <div className="inline-block">
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
        </div>
        <article className="prose prose-code:font-mono">
          <p className="font-bold">
            🚧 This page is under construction. 🚧 Please check back soon for more
            information.
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
            I registered the <code>azhao.dev</code> domain using Cloudflare.
          </p>
        </article>
      </div>
    </ProjectPage>
  );
};

export default Website;
