"use client"

import { useState } from "react";
import { useAudio } from "@/context/AudioContext";
import { Volume2, VolumeX, Play, Pause, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
    const { isPlaying, togglePlay, volume, setVolume } = useAudio();
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
            <button
                onClick={() => setOpen(!open)}
                className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
                <Headphones size={24} />
            </button>
            {open && (
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "220px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="bg-zinc-900/60 backdrop-blur-sm text-white flex gap-4 items-center justify-between p-5 rounded-lg ml-3"
                >
                    <button onClick={togglePlay} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-full cursor-pointer"
                    />

                    <button onClick={() => setVolume(volume > 0 ? 0 : 0.5)} className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default MusicPlayer;
