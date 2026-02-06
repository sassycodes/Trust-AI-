"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Rules", href: "#rules" },
        { name: "Themes", href: "#themes" },
        { name: "Timeline", href: "#timeline" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-midnight/80 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="w-full px-6 flex items-center justify-end md:justify-between relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">


                    <div className="relative h-16 w-32 md:h-20 md:w-40">
                        <Image
                            src="/assets/logo2.png"
                            alt="TrustAI Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />
                    <div className="relative h-12 w-12 md:h-16 md:w-16">
                        <Image
                            src="/assets/iiitp_logo.png"
                            alt="IIIT Pune"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-contrast-gold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="https://www.google.com/search?q=unstop+trust+ai+ideathon&oq=unstop+trust+ai+ideathon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCTExMzI0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank">
                        <Button variant="outline" className="border-contrast-gold/50 text-contrast-gold hover:bg-contrast-gold hover:text-midnight">
                            Register Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-midnight/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-300 hover:text-contrast-gold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="https://unstop.com/o/PajkhH1?lb=46jViFUd&utm_medium=Share&utm_source=sarthgai85049&utm_campaign=Online_coding_challenge" target="_blank" className="w-full">
                        <Button className="w-full bg-contrast-gold text-midnight">Register Now</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
