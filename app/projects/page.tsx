import React from "react";
import Main from "../../components/Main";
import { Project } from "../../components/Project";
import WebsiteBanner from "../../public/nextjs-banner.png";
import Image from "next/image";

const Projects = () => {
  return (
    <Main title="Projects">
      <div className="flex space-x-12">
        <Project
          name="Website"
          description={
            "I built a website with Next.js!! asdfkaskdfjsakfjadslfjdsakjfk;dasasdkfjaksdlf;aa"
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        ></Project>
        <Project
          name="Website"
          description={
            "I built a website with Next.js!! asdfkaskdfjsakfjadslfjdsakjfk;dasasdkfjaksdlf;aa"
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        ></Project>
        <Project
          name="Website"
          description={
            "I built a website with Next.js!! asdfkaskdfjsakfjadslfjdsakjfk;dasasdkfjaksdlf;aa"
          }
          image={WebsiteBanner}
          imageAlt={"Next.js banner"}
          link={"/"}
          buttonText="Visit"
        ></Project>
      </div>
    </Main>
  );
};

export default Projects;
