"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/7");
  }, 8000);

  return (
    <main className=" min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center font-mono h-[80vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={"/pentol-3.jpeg"}
          width={150}
          height={150}
          className="rounded-lg"
          alt="boleh"
        />

        <p className="text-2xl md:text-6xl text-center text-sky-600 font-bold mt-10">
          &#168;Aku pengen ngejalanin hubungan <br /> lebih dari temen maupun
          sahabat&#168;
        </p>
      </motion.div>
      {/* <div className="flex justify-between mx-32">
        <button
          className=" bg-slate-400 rounded-md text-black px-5 py-2"
          onClick={() => router.push("/5")}
        >
          Prev
        </button>
        <button
          className=" bg-slate-400 rounded-md text-black px-5 py-2"
          onClick={() => router.push("/7")}
        >
          Next
        </button>
      </div> */}
    </main>
  );
}
