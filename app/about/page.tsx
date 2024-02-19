import React from "react";
import Main from "../../components/Main";
import Link from "next/link";

const About = () => {
  return (
    <Main title="About">
      <p className="font-bold mb-4">
        This page isn't finished yet. I'll be writing more later, but check out my{" "}
          <Link href={"/projects"} className="hover:underline text-blue-800">
            programming projects
          </Link>{" "}
          and{" "}
          <Link href={"/music"} className="hover:underline text-blue-800">
            violin recordings
          </Link>
          {" "}while you're waiting.
      </p>
      <p>
        I'm a sophomore at Montgomery Blair High School's STEM Magnet Program.
      </p>
    </Main>
  );
};

export default About;
