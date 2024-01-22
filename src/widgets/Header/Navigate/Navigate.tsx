"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navigate() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <nav>
      <motion.ul
        className="container flex w-[30vw] justify-between items-center text-[18px]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="item"
          variants={item}
          whileHover={{
            rotateX: 360,
            transition: { duration: 0.7 },
          }}
        >
          <Link href="/cases">Кейсы</Link>
        </motion.li>
        <motion.li
          className="item"
          variants={item}
          whileHover={{
            rotateX: 360,
            transition: { duration: 0.7 },
          }}
        >
          <Link href="/ships" className="flex text-main">
            Ships{" "}
            <Image
              src="linkArrow.svg"
              alt="Перейти на страницу"
              width={20}
              height={20}
            />
          </Link>
        </motion.li>
        <motion.li
          className="item"
          variants={item}
          whileHover={{
            rotateX: 360,
            transition: { duration: 0.7 },
          }}
        >
          <Link href="/company">Компания</Link>
        </motion.li>
        <motion.li className="item" variants={item}>
          <button className="flex flex-col gap-1 cursor-pointer">
            <span className="w-[27px] h-[3px] block content-[''] bg-grey100"></span>
            <span className="w-[27px] h-[3px] block content-[''] bg-grey100"></span>
            <span className="w-[27px] h-[3px] block content-[''] bg-grey100"></span>
          </button>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
