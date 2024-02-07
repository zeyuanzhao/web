import React from "react";
import Main from "../../components/Main";
import { Project } from "../../components/Project";
import WebsiteBanner from "../../public/nextjs-banner.png";
import SquarespaceBanner from "../../public/squarespace-banner.jpg"
import Image from "next/image";
import Socials from "../../components/Socials";
import githubLogoDark from "../../public/github-dark.svg";
import githubLogoLight from "../../public/github-light.svg";
import webLogoDark from "../../public/web-dark.svg";
import webLogoLight from "../../public/web-light.svg";

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
          link={"/projects/website"}
          buttonText="Learn More"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/web"}
          />
          <Socials
            logoLight={webLogoLight}
            logoDark={webLogoDark}
            logoAlt={"Visit Website"}
            logoLink={"/"}
            width={50}
            height={50}
            newTab={false}
          />
        </Project>
        <Project
          name="Tuttio"
          description={
            "I am the founder and president of Tuttio, a nonprofit organization that hosts community concerts and provides free music tutoring. Learn more about Tuttio below!"
          }
          image={SquarespaceBanner}
          imageAlt={"Squarespace banner"}
          // imageWidth={400}
          link={""}
          buttonText="Learn More"
        >
          <Socials
            logoLight={webLogoLight}
            logoDark={webLogoDark}
            logoAlt={"Visit Website"}
            logoLink={"#"}
            width={50}
            height={50}
            newTab={false}
          />
        </Project>
      </div>
    </Main>
  );
};

export default Projects;
