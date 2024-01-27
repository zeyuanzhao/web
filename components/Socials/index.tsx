import Link from "next/link";
import Image from "next/image";

export const Socials = ({
  logoLight,
  logoDark,
  logoAlt,
  logoLink,
}: {
  logoLight: SVGElement & HTMLImageElement;
  logoDark: SVGElement & HTMLImageElement;
  logoAlt: string;
  logoLink: string;
}) => {
  return (
    <div className="focus:ring-4 hover:ring-4 ring-slate-300 dark:ring-slate-600 rounded-full">
      <Link href={logoLink} target="_blank" className="">
        <picture>
          <source srcSet={logoDark.src} media="(prefers-color-scheme: dark)" />
          <Image src={logoLight} width="35" alt={logoAlt} />
        </picture>
      </Link>
    </div>
  );
};
