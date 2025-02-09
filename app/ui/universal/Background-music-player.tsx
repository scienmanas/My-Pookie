"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundMusicPlayer({
  songId,
  type,
  volume,
}: {
  songId: number;
  type: string;
  volume: number;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  const songs = {
    webiste: [
      "/assets/songs/1.mp3",
      "/assets/songs/2.mp3",
      "/assets/songs/3.mp3",
      "/assets/songs/4.mp3",
      "/assets/songs/5.mp3",
    ],
    pookie: [
      "/assets/pookie/songs/1.mp3",
      "/assets/pookie/songs/2.mp3",
      "/assets/pookie/songs/3.mp3",
      "/assets/pookie/songs/4.mp3",
      "/assets/pookie/songs/5.mp3",
      "/assets/pookie/songs/6.mp3",
      "/assets/pookie/songs/7.mp3",
      "/assets/pookie/songs/8.mp3",
    ],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && audioRef.current) {
      if (type === "website") audioRef.current.src = songs.webiste[songId];
      else if (type === "pookie") audioRef.current.src = songs.pookie[songId];

      audioRef.current.volume = volume;
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [songId, volume, type, mounted, songs.pookie, songs.webiste]);

  return <audio ref={audioRef} loop style={{ display: "none" }} />;
}
