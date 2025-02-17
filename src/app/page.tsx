"use client"

import BackgroundVideo from "@/components/BackgroundVideo";
import HomeStats from "@/components/HomeStats";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[100vh] flex items-center justify-center">
        <BackgroundVideo />
        <div className="home__home relative left-96 flex flex-col items-center gap-5">
          <Image src="/logo_mallta.webp" alt="logo" width={400} height={300}></Image>
          <h3 className="text-3xl font-bold text-zinc-50">Vença contra tudo e contra todos</h3>
          <Link href="/HowToPlay" className="p-5 bg-zinc-50 rounded-lg font-bold hover:bg-zinc-200 transition-all shadow-lg text-zinc-900">Start Now!</Link>
        </div>
      </section>
      <HomeStats />
      <section className="about w-full h-[100vh] p-20 flex items-center" id="About">
        <div className="about__left w-[50%]">
          <div className="about__left-header mb-3">
            <h1 className="flex items-center text-3xl gap-3">About us</h1>
          </div>
          <div className="about__left-body ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices, mauris sit amet hendrerit sagittis, eros ligula mollis ante, a convallis diam sem ac felis. Nunc egestas massa vel sodales lacinia. Cras ultricies magna at arcu interdum, quis hendrerit massa maximus. Vivamus egestas ac sapien at rutrum. Duis congue lacinia ligula, sit amet volutpat dolor molestie fringilla. Praesent convallis aliquam arcu sit amet facilisis. Integer eu cursus ligula, at eleifend magna. Donec egestas euismod lacus, et facilisis libero sollicitudin sed. Mauris tempor enim vitae mauris gravida, quis lobortis mauris ornare. Donec sollicitudin scelerisque ipsum, ut scelerisque arcu sollicitudin sed. Maecenas sit amet tempor lorem, eu feugiat justo. Nam at posuere neque, sollicitudin congue quam. Duis eu consectetur arcu. Nunc finibus tellus ac justo efficitur imperdiet. Nam nulla est, facilisis vitae suscipit sit amet, convallis sed sapien.
            </p>
            <div className="about__left-socials mt-10">
              <nav className="flex justify-start">
                <ul className="flex items-center justify-center gap-4">
                  <Link href="/" className="w-16 h-16 flex items-center justify-center rounded-lg hover:bg-zinc-900 transition-all">
                    <Icon icon="logos:discord-icon" width={35} />
                  </Link>
                  <Link href="/" className="w-16 h-16 flex items-center justify-center rounded-lg hover:bg-zinc-900 transition-all">
                    <Icon icon="cbi:wow" width={35} />
                  </Link>
                  <Link href="/" className="w-16 h-16 flex items-center justify-center rounded-lg hover:bg-zinc-900 transition-all">
                    <Icon icon="logos:facebook" width={35} />
                  </Link>
                  <Link href="/" className="w-16 h-16 flex items-center justify-center rounded-lg hover:bg-zinc-900 transition-all">
                    <Icon icon="logos:whatsapp-icon" width={35} />
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="about__right w-[50%]">
          <div className="about__right-image relative">
            <Image src="/about.png" alt="about" width={1000} height={300} className="scale-x-[-1]" />
          </div>
        </div>
      </section>
      <section className="htp w-full h-[60vh] flex flex-col items-center justify-center" id="HowToPlay">
        <div className="htp__container flex w-[900px] h-[300px] border rounded-lg flex-col">
          <div className="htp__header w-full h-32 flex items-center justify-center flex-col">
            <h1 className="flex items-center justify-center gap-3 text-3xl">How To Play</h1>
            <p>To connect to the server, follow these steps:</p>
          </div>
          <nav>
            <ul>
              <li className="text-2xl text-center m-3">
                1. <Link href="/" className="hover:underline">Download game</Link>
              </li>
              <li className="text-2xl text-center m-3">
                2. Set realmlist <span className="text-blue-600">45.182.134.22</span>
              </li>
              <li className="text-2xl text-center m-3">
                3. Save the file and start the game.
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
