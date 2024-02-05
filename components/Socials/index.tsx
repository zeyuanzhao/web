import Link from "next/link";
import Image from "next/image";

export const Socials = ({
  logoLight,
  logoDark,
  logoAlt,
  logoLink,
  width,
  height,
  newTab,
}: {
  logoLight: HTMLImageElement;
  logoDark: HTMLImageElement;
  logoAlt: string;
  logoLink: string;
  width?: number;
  height?: number;
  newTab?: boolean;
}) => {
  if (width == null) width = 35;
  if (height == null) height = 35;
  let t = "_blank";
  if (newTab == false) {
    t = "_self";
  }
  return (
    // focus:ring-4 hover:ring-4 ring-slate-300 dark:ring-slate-600 
    <div className="rounded-full m-auto">
      <Link href={logoLink} target={t} className="">
        <Image src={logoLight} width={width} height={height} alt={logoAlt} className="inline-block dark:hidden scale-100 hover:scale-110 ease-in duration-250" />
        <Image src={logoDark} width={width} height={height} alt={logoAlt} className="hidden dark:inline-block scale-100 hover:scale-110 ease-in duration-250" />
      </Link>
    </div>
  );
};

export default Socials;