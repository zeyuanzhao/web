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
        <picture>
          <source srcSet={logoDark.src} media="(prefers-color-scheme: dark)" />
          <Image src={logoLight} width={width} height={height} alt={logoAlt} className="scale-100 hover:scale-110 ease-in duration-250" />
        </picture>
      </Link>
    </div>
  );
};

export default Socials;