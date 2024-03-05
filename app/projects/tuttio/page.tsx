import ProjectPage from "../../../components/ProjectPage";
import Image from "next/image";
import TuttioBanner from "../../../public/tuttio-banner.png";
import Socials from "../../../components/Socials";
import webLogoDark from "../../../public/web-dark.svg";
import webLogoLight from "../../../public/web-light.svg";
import Link from "next/link";

const Website = () => {
  return (
    <ProjectPage title="Tuttio" urltitle="tuttio">
      <div className="">
        <div className="float-right w-1/3 ml-16 mb-2">
          <div className="rounded-lg shadow-lg overflow-hidden mb-4">
            <Image src={TuttioBanner} alt={"Tuttio Logo"} className="object-cover" />
          </div>
          <div className="ml-4 mb-4 flex place-items-center justify-between">
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
              <Link href={""}>
                <p className="lg:inline-block ml-0.5 hidden">
                  Visit Website (under construction)
                </p>
              </Link>
            </div>
          </div>
        </div>
        <article className="prose prose-code:font-mono">
          <p>
            I am the founder and president of Tuttio, a nonprofit organization
            that hosts community concerts and provides free music tutoring. We were founded in September 2023.
          </p>
          <p className="font-bold">
            🚧 This page is under construction. 🚧 Please check back soon for more
            information.
          </p>
        </article>
      </div>
    </ProjectPage>
  );
};

export default Website;
