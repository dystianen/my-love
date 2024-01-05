"use client";
import Text from "@/components/Text/page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/3");
  }, 7000);

  return (
    <main className=" min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center h-[80vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Text>Sebenernya aku ...</Text>
      </motion.div>
    </main>
  );
}
