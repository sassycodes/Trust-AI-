"use client";

import { motion } from "framer-motion";
import { Users, Timer, Trophy, ShieldCheck } from "lucide-react";
import { CountUp } from "../ui/count-up";

const Rules = () => {
    const criteria = [
        { label: "Innovation", value: "30%" },
        { label: "Trust Alignment", value: "30%" },
        { label: "Feasibility", value: "25%" },
        { label: "Defense", value: "15%" },
    ];

    return (
        <section id="rules" className="py-24 relative bg-midnight/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Participation & Rules</h2>
                    <p className="text-gray-400">Guidelines for the next generation of AI guardians.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Eligibility Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Users className="text-contrast-gold h-8 w-8" />
                            <h3 className="text-2xl font-semibold text-white">Eligibility</h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-contrast-gold mt-2" />
                                <span className="group-hover:text-contrast-gold transition-colors">Open to UG/PG Students & Working Professionals.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-contrast-gold mt-2" />
                                <span>Teams of 2–4 members allowed.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-contrast-gold mt-2" />
                                <span>Inter-college teams are permitted.</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Selection Process */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Timer className="text-royal-saffron h-8 w-8" />
                            <h3 className="text-2xl font-semibold text-white">Format</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-medium mb-1">Stage 1: Innovation Sprint (Virtual)</h4>
                                <p className="text-sm text-gray-400">Submit your proposal and initial prototype. Top 20 teams qualify.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Stage 2: Grand Finale (IIIT Pune)</h4>
                                <p className="text-sm text-gray-400">24-hour ideathon to build and defend your solution.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>



                {/* Judging Criteria */}
                <div className="mt-12 bg-white/5 border border-white/10 rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <ShieldCheck className="text-contrast-gold h-8 w-8" />
                        <h3 className="text-2xl font-semibold text-white">Evaluation Criteria</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {criteria.map((c) => (
                            <div key={c.label} className="text-center p-4 bg-midnight/40 rounded-lg">
                                <div className="text-3xl font-bold text-contrast-gold mb-2">
                                    <CountUp value={parseInt(c.value)} suffix="%" />
                                </div>
                                <div className="text-sm text-gray-300 uppercase tracking-wide">{c.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rules;
