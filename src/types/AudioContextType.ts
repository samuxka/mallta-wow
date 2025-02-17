export type AudioContextType = {
    isPlaying: boolean;
    togglePlay: () => void;
    volume: number;
    setVolume: (volume: number) => void;
    mute: boolean;
    toggleMute: () => void;
}