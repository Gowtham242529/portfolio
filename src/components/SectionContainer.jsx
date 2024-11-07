import { cn } from "@/lib/utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import useInView from "../helpers/useInView";
function AnimatedSlideInComponent({
  direction = "left",
  offset = 30,
  children,
}) {
  const [ref, inView] = useInView({
    margin: `-${offset}px 0px 0px 0px`,
    triggerOnce: false,
  });

  const x = { initial: direction === "left" ? "-150%" : "150%", target: "0%" };

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={{ x: inView ? x.target : x.initial }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

export default function SectionContainer({
  disabled = false,
  children,
  size = "lg",
  className,
  direction,
  classNameDisable = false,
}) {
  let classNameN;

  switch (size) {
    case "sm":
      classNameN =
        "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[50rem] xl:px-8";
      break;
    case "md":
      classNameN =
        "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[64rem] xl:px-8";
      break;
    case "lg":
      classNameN =
        "mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-[73rem] xl:px-0";
      break;
    case "xl":
      classNameN =
        "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[80rem] xl:px-8";
      break;
    case "2xl":
      classNameN =
        "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-[96rem] xl:px-8";
      break;
    default:
      classNameN = "";
  }
  if (disabled) {
    return <>{children}</>;
  }
  let directions;
  if (!Array.isArray(children)) children = [children];

  if (direction) {
    directions = [direction];
  } else {
    directions = ["left", "right"];
  }

  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[i % directions.length]}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });

  return (
    <motion.section
      className={cn(
        !classNameDisable && classNameN,
        className,
        "overflow-hidden",
      )}
    >
      {childrenWithAnimation}
    </motion.section>
  );
}
