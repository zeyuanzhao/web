import Link from "next/link";
import Image from "next/image";

export const Socials = ({
  logoLight,
  logoDark,
  logoAlt,
  logoLink,
}: {
  logoLight: HTMLImageElement;
  logoDark: HTMLImageElement;
  logoAlt: string;
  logoLink: string;
}) => {
  return (
    <div className="focus:ring-4 hover:ring-4 ring-slate-300 dark:ring-slate-600 rounded-full m-auto">
      <Link href={logoLink} target="_blank" className="">
        <picture>
          <source srcSet={logoDark.src} media="(prefers-color-scheme: dark)" />
          <Image src={logoLight} width="35" alt={logoAlt} className="scale-100 hover:scale-110 ease-in duration-250" />
        </picture>
      </Link>
    </div>
  );
};

export default Socials;