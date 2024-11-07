/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
// import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Logo from "../../../public/GN_logo.png";
import { useLocation } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import { links as items } from "@/assets/Data";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

export const FloatingDock = ({ desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex md:hidden h-16 gap-10 items-end shadow-sm saturate-100 border border-border rounded-3xl bg-gray-50 dark:bg-card px-4 pb-3 backdrop-blur-[4px] fixed inset-x-0 left-[calc(100vw-100%)] -top-12 sm:top-4 z-40 justify-between bg-card transition-all duration-200",
        isScrolled &&
          "border-transparent backdrop:blur-[4px] dark:bg-transparent bg-transparent",
        className
      )}
    >
      <div className="h-full flex items-center relative w-full">
        <div className="h-full bg-accent dark:bg-[#aab1d3] rounded-lg mt-[0.7rem]">
          <img src={Logo} alt="" className="h-full" />
        </div>
      </div>
      <div>
        <ModeToggle className="ml-8" />
      </div>
      <Sheet>
        <SheetTrigger>
          <AlignJustify
            className="h-8 w-8 mb-1 text-foreground dark:text-foreground"
            aria-label="Toggle navigation"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <div className="h-8 w-12 flex gap-2 items-center bg-accent dark:bg-[#aab1d3] rounded-lg mt-[0.7rem]">
            <a href="/" className="w-full h-full block">
              <img src={Logo} alt="" className="h-8 w-12 max-w-none" />
            </a>
            <p className="font-bold">Gowtham Nandavarapu</p>
          </div>
          <div className="flex flex-col gap-2 pt-8 pl-8">
            {items.map((item) => (
              <a
                href={item.href}
                className={cn("text-lg",
                  (pathname.startsWith(item.href) && item.href !== "/") ||
                    pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-10 items-end shadow-sm saturate-100 border border-border rounded-3xl bg-gray-50 dark:bg-card px-4 pb-3 backdrop-blur-[4px] fixed inset-x-0 left-[calc(100vw-100%)] -top-12 sm:top-4 z-40 justify-between bg-card transition-all duration-200 md:mx-auto md:max-w-[700px] md:px-8 xl:max-w-[1168px] lg:max-w-[800px]",
        isScrolled &&
          "border-transparent backdrop:blur-[4px] dark:bg-transparent bg-transparent",
        className
      )}
    >
      <div className="h-full flex items-center relative w-full">
        <div className="h-full bg-accent dark:bg-[#aab1d3] rounded-lg mt-[0.7rem]">
          <img src={Logo} alt="" className="h-full" />
        </div>
      </div>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
      <div>
        <ModeToggle className="ml-8" />
      </div>
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x + bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const location = useLocation();
  const pathname = location.pathname;

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "aspect-square rounded-full dark:bg-background flex items-center justify-center relative",
          (pathname.startsWith(href) && href !== "/") || pathname === href
            ? "bg-accent"
            : "bg-accent/40"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 250, x: "-50%" }}
              animate={{ opacity: 1, y: 100, x: "-50%" }}
              exit={{ opacity: 0, y: 100, x: "-50%" }}
              className={cn(
                "px-2 py-0.5 whitespace-pre rounded-md bg-background border dark:bg-neutral-800 dark:border-neutral-900 dark:text-foreground border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-sm font-bold ",
                (pathname.startsWith(href) && href !== "/") || pathname === href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center",
            (pathname.startsWith(href) && href !== "/") || pathname === href
              ? "!text-foreground"
              : "!text-foreground/60"
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
