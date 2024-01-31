import React from "react";
import Main from "../../components/Main";
import { Project } from "../../components/Project";
import WebsiteBanner from "../../public/nextjs-banner.png";
import SquarespaceBanner from "../../public/squarespace-banner.jpg"
import Image from "next/image";
import Socials from "../../components/Socials";
import githubLogoDark from "../../public/github-dark.svg";
import githubLogoLight from "../../public/github-light.svg";

const Projects = () => {
  return (
    <Main title="Projects">
      {/* flex space-x-12 flex-wrap justify-between */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
        <Project
          name="Website"
          description={
            "This website was built with Next.js and is hosted on CloudFlare. You can view the source code on the public GitHub repository below."
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
        </Project>
        <Project
          name="Website"
          description={
            "Interesting description sentence goes here"
          }
          image={SquarespaceBanner}
          imageAlt={"Squarespace banner"}
          // imageWidth={400}
          link={""}
          buttonText="Visit"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
        </Project>
        <Project
          name="Website"
          description={
            "I built a website with Next.js!! "
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
        </Project>
        <Project
          name="Website"
          description={
            "I built a website with Next.js!! "
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
        </Project>
        <Project
          name="Website"
          description={
            "I built a website with Next.js!! "
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
        </Project>
      </div>
    </Main>
  );
};

export default Projects;
