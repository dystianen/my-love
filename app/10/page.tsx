"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center font-mono h-[80vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Image src="/my-love.jpg" className="w-full" fill alt="lovee" />
        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-amber-500 opacity-90 font-bold drop-shadow-md text-2xl md:text-6xl">
          Yeyyyyyy ✨🎉🎊 <br />
          I hope we can together strive to achieve our dreams each other&#39;s
          dreams. <br /> Luv u :)
          <br />
          05 Jan 2024
        </p>
      </motion.div>
    </main>
  );
}