import React from "react";
import Main from "../../components/Main";
import { Project } from "../../components/Project";
import WebsiteBanner from "../../public/nextjs-banner.png";
import TuttioBanner from "../../public/tuttio-banner.png";
import DiscordBanner from "../../public/discord-banner.png"
import DjangoBanner from "../../public/django-banner.jpeg"
import FlaskBanner from "../../public/flask-banner.png";
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
          image={TuttioBanner}
          imageAlt={"Squarespace banner"}
          // imageWidth={400}
          link={"/projects/tuttio"}
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
        <Project
          name="Discord Bot"
          description={
            "Created a Discord chatbot for Hypixel Skyblock that lets users access game data in a simple format."
          }
          image={DiscordBanner}
          imageAlt={"Discord Logo"}
          link={"/projects/discordbot"}
          buttonText="Learn More"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/hubportal"}
          />
        </Project>
        <Project
          name="Auctions Site"
          description={
            "A Django website where users can log in to list and bid in auctions."
          }
          image={DjangoBanner}
          imageAlt={"Django Logo"}
          link={"/projects/auctions"}
          buttonText="Learn More"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/auctions-site"}
          />
        </Project>
        <Project
          name="Flasklist"
          description={
            "A flask site where users can log in to create to-do lists"
          }
          image={FlaskBanner}
          imageAlt={"Flask Logo"}
          link={"/projects/flasklist"}
          buttonText="Learn More"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/cs50x/tree/main/final-project"}
          />
        </Project>
        <Project
          name="Wiki Site"
          description={
            "A wikipedia clone built using Django. Users can create, read, search, and modify posts."
          }
          image={DjangoBanner}
          imageAlt={"Django Logo"}
          link={"/projects/wiki"}
          buttonText="Learn More"
        >
          <Socials
            logoLight={githubLogoLight}
            logoDark={githubLogoDark}
            logoAlt={"GitHub Repository"}
            logoLink={"https://github.com/zeyuanzhao/wiki-site"}
          />
        </Project>
      </div>
    </Main>
  );
};

export default Projects;
