"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AudioContextType } from "@/types/AudioContextType";

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [mute, setMute] = useState(false);
  
    useEffect(() => {
      const audio = new Audio("/bgaudio.mp3");
      audio.loop = true;
      audio.volume = volume;
      audioRef.current = audio;
  
      if (mute) {
        audio.volume = 0;
      }
  
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };
    }, [volume, mute]);
  
    const togglePlay = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    const toggleMute = () => {
      if (audioRef.current) {
        setMute(!mute);
        audioRef.current.volume = mute ? volume : 0; // Volta ao volume se desmutado
      }
    };
  
    return (
      <AudioContext.Provider value={{ isPlaying, togglePlay, volume, setVolume, mute, toggleMute }}>
        {children}
      </AudioContext.Provider>
    );
  };
  
  export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
      throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
  };