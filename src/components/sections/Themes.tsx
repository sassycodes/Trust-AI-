"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock, Fingerprint, Scale, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "../ui/spotlight-card";
import { TiltCard } from "../ui/tilt-card";

const themes = [
    {
        id: 1,
        title: "Digital Media & Public Platforms",
        subtitle: "Protecting the Information Ecosystem",
        icon: Globe,
        problems: [
            { title: "Identity Manipulation (Deepfakes)", desc: "Develop detection and watermarking to prevent unauthorized synthesis of likenesses." },
            { title: "Adversarial Prompt Engineering", desc: "Design defensive guardrails against harmful jailbreaks and prompt injections." },
            { title: "The Accountability Gap", desc: "Frameworks to resolve liability in AI-generated harms between User, Platform, and Architect." },
        ]
    },
    {
        id: 2,
        title: "Communication & Identity Systems",
        subtitle: "Securing the Digital Persona",
        icon: Fingerprint,
        problems: [
            { title: "Synthetic Persona Proliferation", desc: "Detect and neutralize persistent AI personas used for social engineering." },
            { title: "Real-Time Liveness Verification", desc: "Low-latency tools to distinguish human vs AI voice clones in live calls." },
            { title: "Legacy System Resilience", desc: "Redesign auth flows (telecom/banking) to withstand AI spoofing." },
        ]
    },
    {
        id: 3,
        title: "Policing & Public Safety",
        subtitle: "Algorithmic Justice & Governance",
        icon: Scale,
        problems: [
            { title: "Probabilistic Judgment Management", desc: "Mitigate 'Machine Bias' in predictive policing and facial recognition." },
            { title: "Transparent Decision Support", desc: "Interpretable interfaces for first responders to explain AI alerts." },
            { title: "Digital Chain of Custody", desc: "Secure integrity of digital evidence for legal and forensic proceedings." },
        ]
    },
    {
        id: 4,
        title: "Open Innovation",
        subtitle: "AI for Socio-Economic Empowerment",
        icon: Lock,
        problems: [
            { title: "Open Challenge", desc: "Solve a unique Indian challenge using XAI, Algorithmic Fairness, or HITL." }
        ]
    }
];

const Themes = () => {
    const [activeTheme, setActiveTheme] = useState<number | null>(1);

    return (
        <section id="themes" className="py-24 relative bg-midnight">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Themes & Problem Statements</h2>
                    <p className="text-gray-400">Select a theme to explore specific challenges.</p>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {themes.map((theme) => (
                        <TiltCard key={theme.id} className="h-full">
                            <SpotlightCard
                                className={cn(
                                    "group rounded-xl transition-all duration-300 overflow-hidden h-full",
                                    activeTheme === theme.id
                                        ? "border-contrast-gold/50 shadow-lg shadow-contrast-gold/10"
                                        : "border-white/10 hover:border-white/20"
                                )}
                            >
                                <button
                                    onClick={() => setActiveTheme(activeTheme === theme.id ? null : theme.id)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "p-3 rounded-lg transition-colors",
                                            activeTheme === theme.id ? "bg-contrast-gold text-midnight" : "bg-white/10 text-gray-400 group-hover:text-white"
                                        )}>
                                            <theme.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className={cn("text-xl font-semibold transition-colors", activeTheme === theme.id ? "text-white" : "text-gray-300")}>
                                                {theme.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{theme.subtitle}</p>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={cn("transition-transform duration-300 text-gray-500", activeTheme === theme.id ? "rotate-180 text-contrast-gold" : "")}
                                    />
                                </button>

                                <AnimatePresence>
                                    {activeTheme === theme.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                                {theme.problems.map((prob, idx) => (
                                                    <div key={idx} className="bg-midnight/50 p-4 rounded-lg border border-white/5 hover:border-contrast-gold/30 transition-colors">
                                                        <h4 className="text-contrast-gold font-medium mb-2 text-sm">P.S. {idx + 1} | {prob.title}</h4>
                                                        <p className="text-gray-400 text-sm leading-relaxed">{prob.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </SpotlightCard>
                        </TiltCard>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Themes;
