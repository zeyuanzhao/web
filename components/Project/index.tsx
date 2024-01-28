import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const Project = ({
  name,
  description,
  image,
  imageAlt,
  link,
  buttonText
}: {
  name: string;
  description: string;
  image: HTMLImageElement | StaticImageData;
  imageAlt: string;
  link: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-cyan-50 rounded-2xl basis-1/3 shadow-lg">
      <Link href={link}>
        <Image
          src={image}
          alt={imageAlt}
          sizes="30vw"
          className="rounded-t-2xl rounded-b-md"
        ></Image>
        <div className="px-6 pb-6 pt-6">
          <h1 className="text-5xl mb-4">{name}</h1>
          <p className="mb-4">{description}</p>
          <button
            type="button"
            className="bg-cyan-500 py-2 px-4 text-xl text-white rounded-xl hover:bg-cyan-600 shadow-lg"
          >
            {buttonText}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Project;
