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
        <div className="bg-white p-4 rounded-lg absolute bottom-4 left-[50%] -translate-x-[50%] shadow-xl">
          <p className="text-xl text-center text-gray-600 font-bold">
            &#34; Yeyyyyyy ✨🎉🎊 <br />
            I hope we can together strive to achieve <br /> our dreams each
            other&#39;s dreams. <br /> Luv u :)
            <br />
            05 Jan 2024 &#34;
          </p>
        </div>
      </motion.div>
    </main>
  );
}
