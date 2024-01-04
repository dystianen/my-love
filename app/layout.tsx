"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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

  return (
    <html lang="en">
      <body className={inter.className}>
        <audio ref={audioRef} autoPlay>
          <source src="kesempurnaan-cinta.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {!isPlay ? (
          <div className="min-h-screen flex justify-center items-center">
            <button
              className="bg-sky-600 p-4 rounded-lg"
              onClick={() => {
                playAudio();
                setIsPlay(true);
              }}
            >
              Buka Dulu Cantik :)
            </button>
          </div>
        ) : (
          <div className="mx-10">{children}</div>
        )}
      </body>
    </html>
  );
}
