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
            <div className="w-full px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-24 w-auto aspect-[3/1]">
                        <Image
                            src="/assets/logo.png"
                            alt="TrustAI Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <Link href="https://forms.gle/aBgEUkrRpkKZs9Su5" target="_blank">
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
                    <Link href="https://forms.gle/aBgEUkrRpkKZs9Su5" target="_blank" className="w-full">
                        <Button className="w-full bg-contrast-gold text-midnight">Register Now</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
