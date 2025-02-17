"use client"

import { useState, useEffect } from "react";
import { Download, Home, Joystick, LogIn, ScrollText, SquareUserRound, Swords, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (

        <header
            className={cn("fixed z-50 w-full flex items-center justify-between px-10 py-5 transition-all duration-300", isScrolled ? "backdrop-blur-md bg-zinc-900/60" : "bg-zinc-900")}
        >
            <div className="header__logo">
                <Link href="/" className="text-zinc-50">
                    MalltaWoW
                </Link>
            </div>
            <nav className="navlist">
                <ul className="flex items-center justify-center">
                    <Link href="/">
                        <p><Home /> Home</p>
                    </Link>
                    <Link href="#About">
                        <p><SquareUserRound /> About</p>
                    </Link>
                    <Link href="#HowToPlay">
                        <p><Joystick /> How to play</p>
                    </Link>
                    <Link href="/Rules" className="mr-5">
                        <p><ScrollText /> Rules</p>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="text-zinc-900">
                                <User /> Account
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-44" align="end">
                            <DropdownMenuLabel className="flex items-center justify-between">Welcome <Swords size={20} /></DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href="/sign-up" className="text-base">
                                        Sign-Up
                                    </Link>
                                    <DropdownMenuShortcut><UserPlus /></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">
                                    <Link href="/sign-in" className="text-base">
                                        Sign-In
                                    </Link>
                                    <DropdownMenuShortcut><LogIn /></DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href="https://drive.google.com/file/d/1wKJGylaRwnmBfuAgYLoytFHitQeB_FVc/view?usp=sharing" className="text-base">
                                    Download
                                </Link>
                                <DropdownMenuShortcut><Download /></DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ul>
            </nav>
        </header>
    )
}