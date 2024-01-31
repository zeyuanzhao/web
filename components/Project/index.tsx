import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const Project = ({
  name,
  description,
  image,
  imageWidth,
  imageAlt,
  link,
  buttonText,
  children,
}: {
  name: string;
  description: string;
  image: HTMLImageElement | StaticImageData;
  imageWidth?: number;
  imageAlt: string;
  link: string;
  buttonText: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="bg-cyan-50 rounded-2xl w-full shadow-lg flex flex-col">
      <div className="h-60 object-cover rounded-t-2xl rounded-b-md overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          className="m-auto h-full w-full object-cover"
        ></Image>
      </div>
      <div className="px-6 pb-6 pt-6 flex flex-col flex-1">
        <h1 className="text-5xl mb-4">{name}</h1>
        <p className="mb-8">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <Link href={link}>
            <button
              type="button"
              className="bg-cyan-500 py-2 px-4 text-xl text-white rounded-xl hover:bg-cyan-600 shadow-lg inline-block"
            >
              {buttonText}
            </button>
          </Link>
          <div className="float-right">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
