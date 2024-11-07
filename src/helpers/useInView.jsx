import { useRef } from "react";
import { useInView as useInViewFromFramer } from "framer-motion";

export default function useInView({ triggerOnce = false, margin = "-30px 0px 0px 0px" } = {}) {
  const ref = useRef(null);
  const isInView = useInViewFromFramer(ref, {
    margin,
    triggerOnce
  });

  return [ref, isInView];
}