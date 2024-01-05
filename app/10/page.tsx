"use client";
import Text from "@/components/Text/page";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function GakMau() {
    var maxWidth = 200;
    var maxHeight = 200;

    var randomTop = Math.floor(Math.random() * maxHeight);
    var randomLeft = Math.floor(Math.random() * maxWidth);

    const target = document.getElementById("gak_mau");

    if (target) {
      target.style.marginTop = randomTop + "px";
      target.style.marginLeft = randomLeft + "px";
    }
  }

  return (
    <main className="min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center font-mono h-[80vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={"/pentol-6.png"}
          width={150}
          height={150}
          className="rounded-lg"
          alt="boleh"
        />
        <Text>Do you want to be my girlfriend ???</Text>
        <div className="flex flex-row gap-10 mt-20 -ml-48">
          <button
            className="bg-green-300 rounded-md text-black px-5 py-2 h-max"
            onClick={() => {
              alert(
                "Ditunggu notif whatsappnya :), selesai kirim jawabannya balik lagi kesini ya!!!"
              );
              window.open(
                "https://wa.me/+6281336473735?text=Kirim%20jawaban%20kamu%20untukku"
              );
              // router.push("/11");
            }}
          >
            YES 😍
          </button>
          <button
            id="gak_mau"
            className="absolute bg-red-300 rounded-md text-black px-5 py-2 left-[50%]"
            onMouseEnter={GakMau}
            onClick={GakMau}
          >
            NO 😝
          </button>
        </div>
      </motion.div>
    </main>
  );
}
