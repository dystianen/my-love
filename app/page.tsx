"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/1");
  }, 5000);

  return (
    <main className=" min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center font-mono h-[80vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Image src={"/pentol-7.jpg"} className="w-60 h-60 rounded-lg" width={150} height={150} alt="boleh" />
        <p className="text-6xl text-center text-sky-600 font-bold mt-10">
          Welcome 🎃🎃
        </p>
      </motion.div>
      {/* <div className="flex justify-end mx-32">
        <button
          className=" bg-slate-400 rounded-md text-black px-5 py-2"
          onClick={() => router.push("/1")}
        >
          Next
        </button>
      </div> */}
    </main>
  );
}
