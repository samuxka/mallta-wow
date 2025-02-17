import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AudioProvider } from "@/context/AudioContext";
import MusicPlayer from "@/components/MusicPlayer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mallta WoW"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased bg-zinc-950 text-zinc-50`}>
        <AudioProvider>
          <Navbar />
          {children}
          <Footer />
          <MusicPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}
