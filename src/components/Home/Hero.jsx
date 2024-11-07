import React, { useEffect } from "react";
import IconCloudContainer from "@/components/IconCloudContainer";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words, mailDetails, resumeDownloadDetails } from "@/assets/Data";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-[46dvh] flex justify-center items-center">
        <IconCloudContainer />
      </div>
      <div className="h-[50dvh] flex flex-col justify-center items-center">
        <TypewriterEffectSmooth words={words} />
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-500 dark:text-gray-400 md:text-xl lg:text-lg xl:text-xl group">
          Welcome to my portfolio, showcasing my projects in software
          development, tech experiments, and creative problem-solving.
        </p>
        <p className="mx-auto max-w-lg text-gray-500 dark:text-gray-400 md:text-xl lg:text-lg xl:text-xl">
          "It's a glimpse into my work and skills."
        </p>
        <div className="flex gap-4 mobile:pb-12">
          <a
            href={mailDetails.link}
            className="mx-auto mt-2 max-w-xl text-center text-foreground dark:text-foreground md:text-xl lg:text-lg xl:text-xl flex text-nowrap items-center gap-2 border border-input dark:border-input rounded-md px-4 py-2 shadow-sm"
          >
            {mailDetails.icon}
            {mailDetails.text}
          </a>
          <a
            href={resumeDownloadDetails.link}
            download={true}
            className="mx-auto mt-2 max-w-xl text-center text-foreground dark:text-foreground md:text-xl lg:text-lg xl:text-xl flex text-nowrap items-center gap-2 border border-input dark:border-input rounded-md px-4 py-2 shadow-sm"
          >
            {resumeDownloadDetails.icon}
            {resumeDownloadDetails.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
