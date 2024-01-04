"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/6");
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
        <p className="text-6xl text-center text-sky-600 font-bold">
          sekarang aku pengen ngajak <br /> cewek yang ngebaca ini.
        </p>
      </motion.div>
      {/* <div className="flex justify-between mx-32">
        <button
          className=" bg-slate-400 rounded-md text-black px-5 py-2"
          onClick={() => router.push("/4")}
        >
          Prev
        </button>
        <button
          className=" bg-slate-400 rounded-md text-black px-5 py-2"
          onClick={() => router.push("/6")}
        >
          Next
        </button>
      </div> */}
    </main>
  );
}
