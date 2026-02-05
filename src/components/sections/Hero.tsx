"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import NeuralMesh from "./NeuralMesh";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/50 to-midnight z-10" />
            <NeuralMesh />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-contrast-gold text-lg font-medium tracking-wider mb-6">
                        IIIT PUNE PRESENTS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        India AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-contrast-gold to-royal-saffron">Summit - Pre-Event</span>
                    </h1>

                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
                            Trust AI Ideathon 2026 on Safe and Trusted AI
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Building Safe and Trusted AI solutions for India's Future.<br className="hidden md:block" />
                            Join the movement to define the boundaries of responsible innovation.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://forms.gle/aBgEUkrRpkKZs9Su5" target="_blank">
                            <Button size="lg" className="bg-contrast-gold text-midnight hover:bg-contrast-gold/90 min-w-[200px] text-base font-semibold">
                                Register Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="min-w-[200px] text-base hover:text-contrast-gold border-white/10">
                            Download Rulebook <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500 text-sm"
            >
                <span>Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-contrast-gold/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
