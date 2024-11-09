import { Level } from "@/types/level";
import Image from "next/image";
import Link from "next/link";

const SingleLevel = ({ level }: { level: Level }) => {
  const { title, description, character, tags } = level;
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <Link
        href={`/learning/${level.id}`}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={level.image} alt={`${title} image`} fill />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={`/level-details/${level.id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {description}
        </p>

        <div className="flex items-center">
          <div className="ml-5 flex items-center border-r border-body-color border-opacity-10 pl-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="ml-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={"/images/avatar.svg"}
                  alt={`${character.name} avatar`}
                  fill
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {character.name}
              </h4>
              <p className="text-xs text-body-color">{character.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLevel;
