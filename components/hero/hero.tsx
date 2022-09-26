import { FillIconBox, FillIconType } from "common/IconBox/IconBox";
import Link from "next/link";
import { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <div className="max-w-7xl mx-auto mb-24">
      <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="flex flex-col items-center lg:items-start">
          {/* <SocialLinks height="h-7"></SocialLinks> */}
          <a href="https://github.com/tmdqls2257">
            <FillIconBox iconName={FillIconType.github} />{" "}
          </a>

          <h1 className="text-4xl mt-4 tracking-tight font-extrabold text-cool-gray-900 dark:text-cool-gray-100 sm:text-5xl md:text-6xl">
            <span>techblog</span>
            <span className="text-indigo-600 dark:text-indigo-500 xl:inline">
              .dev
            </span>
          </h1>
          <p className="mt-3 text-base text-cool-gray-500 dark:text-cool-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {"I write tech articles about my side-projects"}
          </p>
          <div className="my-4"></div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
