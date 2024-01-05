"use client";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlay, setIsPlay] = useState(false);

  const playAudio = () => {
    const audio = audioRef.current;

    if (audio) {
      try {
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Autoplay blocked:", error);
          });
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  return (
    <html lang="en">
      <body className={quicksand.className}>
        <audio ref={audioRef} autoPlay>
          <source src="kesempurnaan-cinta.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {!isPlay ? (
          <div className="min-h-screen flex justify-center items-center">
            <motion.div
              className="relative hover:cursor-pointer w-max h-max"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                playAudio();
                setIsPlay(true);
              }}
            >
              <Image src="/love.png" width="400" height="400" alt="love" />
              <div className="absolute left-[50%] top-[45%] -translate-x-[50%] -translate-y-[40%]">
                Click Dulu Cantik :)
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="mx-10">{children}</div>
        )}
      </body>
    </html>
  );
}
