"use client";
import Text from "@/components/Text/page";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/9");
  }, 7000);

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
          src={"/pentol-4.jpeg"}
          width={150}
          height={150}
          className="rounded-lg"
          alt="boleh"
        />

        <Text>
          Aku tunggu jawaban kamu di slide selanjutnya yaa!!!
        </Text>
      </motion.div>
    </main>
  );
}
