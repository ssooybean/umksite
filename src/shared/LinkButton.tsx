"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function LinkButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const layotButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gTimeline = gsap.timeline();
    gTimeline.pause();

    gTimeline.to(layotButtonRef.current, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4,
    });
    gTimeline.to(layotButtonRef.current, {
      width: "1.7em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6,
    });
    buttonRef.current?.addEventListener("mouseenter", () => {
      gTimeline.play();
    });

    buttonRef.current?.addEventListener("mouseleave", () => {
      gTimeline.reverse();
    });
  }, [layotButtonRef]);
  return (
    <motion.button
      className="bg-transparent place-items-center mt-[60px] grid "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1.5,
      }}
    >
      <Link
        ref={buttonRef}
        className="text-[2rem] relative flex items-center"
        href="/cases"
        target="_blank"
      >
        <div
          ref={layotButtonRef}
          className="w-[1.7em] h-[1.7em] rounded-[2em] bg-main top-[50%] left-[-0.65em] absolute translate-y-[-50%]"
        ></div>
        <span className=" text-grey100 mr-[11px] text-[1.5rem] leading-[25px] mb-1 relative">
          ВСЕ ПРОЕКТЫ
        </span>
        <i className="ml-[0.1rem] font-semibold relative">
          <svg
            width="12"
            height="19"
            viewBox="0 0 12 19"
            fill="none"
            className="stroke-grey100 dark:stroke-grey100 group-hover:dark:stroke-grey100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.69727 1.04785L10.1973 9.54785L1.69727 18.0479"
              strokeWidth="2"
            ></path>
          </svg>
        </i>
      </Link>
    </motion.button>
  );
}
