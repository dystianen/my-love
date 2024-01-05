"use client";
import Text from "@/components/Text/page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/4");
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
        <Text>
          Sebenernya aku suka sama kamu del dari dulu, tapi jujurly aku belum
          berani ngungkapin waktu itu hehe
        </Text>
      </motion.div>
    </main>
  );
}
