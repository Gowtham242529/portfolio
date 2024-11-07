import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import { mailDetails } from "@/assets/Data";

const FooterText = () => {
  const topTextControls = useAnimation();
  const bottomTextControls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [gradientPosition, setGradientPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setLastScrollPosition(currentScrollY);
      setScrollPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  useEffect(() => {
    topTextControls.start({
      x: -(scrollPosition * 1.5) % window.innerWidth,
      // transition: { type: "spring", stiffness: 150, damping: 20 },
      transition: {
        ease: "linear forwards",
        duration: 2,
        x: { duration: 0.5 },
      },
    });

    bottomTextControls.start({
      x: (scrollPosition * 1.5) % window.innerWidth,
      // transition: { type: "spring", stiffness: 150, damping: 20 },
      transition: {
        ease: "linear forwards",
        duration: 2,
        x: { duration: 0.5 },
      },
    });
  }, [scrollPosition, topTextControls, bottomTextControls]);

  return (
    <>
      <div className="relative overflow-hidden h-screen w-full dark:bg-black bg-white dark:text-white flex flex-col justify-center items-center">
        {/* Top Text */}
        <motion.div
          animate={topTextControls}
          className="absolute top-1/4 whitespace-nowrap text-2xl md:text-3xl lg:text-8xl xl:text-5xl font-bold uppercase text-gray-500"
        >
          Problem Solving Software Engineering Problem Solving Software
          Engineering Problem Solving Software Engineering Problem Solving
          Software Engineering Problem Solving Software Engineering Problem Solving Software
          Engineering Problem Solving Software Engineering Problem Solving
          Software Engineering
        </motion.div>

        {/* Middle Text */}
        <motion.div className="text-xl md:text-5xl text-center font-bold my-6">
          Interested in{" "}
          <motion.span
            style={{
              display: "inline-block",
              color: "#7e22ce", // Set text color to transparent
            }}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
          >
            Collaboration
          </motion.span>
          ?
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          animate={bottomTextControls}
          className="absolute bottom-1/4 whitespace-nowrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-gray-500"
        >
          React Development Backend Development React Development Backend
          Development React Development Backend Development React Development
          Backend Development React Development Backend Development React Development Backend
          Development React Development Backend Development React Development
          Backend Development
        </motion.div>
        <a
          href={mailDetails.link}
          className="mx-auto mt-2 bottom-6 absolute max-w-xl text-center text-foreground dark:text-foreground md:text-xl lg:text-lg xl:text-xl flex text-nowrap items-center gap-2 border border-input dark:border-input rounded-md px-4 py-2 shadow-sm"
        >
          {mailDetails.icon}
          {mailDetails.text}
        </a>
      </div>
    </>
  );
};

export default FooterText;
