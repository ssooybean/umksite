"use client";
import LinkButton from "@/shared/LinkButton";
import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <motion.div
      className="max-w-[60%] flex flex-col items-end"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
    >
      <h1 className="text-[40px]">
        Создаём <strong className="text-main">системы</strong> на основе{" "}
        <strong className="text-main">маркетинговых</strong> данных, взяв
        ответственность за <strong className="text-main">результат</strong>
      </h1>
      <LinkButton />
    </motion.div>
  );
}
