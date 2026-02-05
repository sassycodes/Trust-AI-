"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { CountUp } from "../ui/count-up";

const Timeline = () => {
    const events = [
        { date: "Feb 5", title: "Registrations Open", desc: "Start of the journey." },
        { date: "Feb 7", title: "Proposal Submission", desc: "Submit your team's abstract." },
        { date: "Feb 9", title: "Finalists Announced", desc: "Top 20 teams selected." },
        { date: "Feb 10", title: "Grand Finale", desc: "24-hour physical ideathon." },
    ];

    return (
        <section id="timeline" className="py-24 relative bg-midnight/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Timeline */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-12 flex items-center gap-3"
                        >
                            <Calendar className="text-contrast-gold" /> Timeline
                        </motion.h2>

                        <div className="relative border-l-2 border-white/10 ml-3 space-y-12">
                            {events.map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-midnight border-2 border-contrast-gold" />
                                    <div className="text-sm text-contrast-gold font-mono mb-1">{event.date}</div>
                                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{event.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Prizes */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-white mb-12 flex items-center gap-3"
                        >
                            <Award className="text-royal-saffron" /> Prize Pool
                        </motion.h2>



                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-32 bg-royal-saffron/10 blur-[100px] rounded-full poiter-events-none" />

                            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Total Cash Prize</h3>
                            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-contrast-gold to-royal-saffron mb-12">
                                <CountUp value={50000} prefix="₹" />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/10 mt-8">
                                    <div className="text-2xl font-bold text-gray-300">
                                        <CountUp value={15} prefix="₹" suffix="k" />
                                    </div>
                                    <div className="text-xs text-gray-500">2nd Place</div>
                                </div>
                                <div className="p-4 bg-white/10 rounded-lg border border-contrast-gold/50 relative -mt-4 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-contrast-gold text-midnight text-[10px] font-bold px-2 py-0.5 rounded-full">WINNER</div>
                                    <div className="text-3xl font-bold text-white">
                                        <CountUp value={25} prefix="₹" suffix="k" />
                                    </div>
                                    <div className="text-xs text-contrast-gold">1st Place</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/10 mt-8">
                                    <div className="text-2xl font-bold text-gray-300">
                                        <CountUp value={10} prefix="₹" suffix="k" />
                                    </div>
                                    <div className="text-xs text-gray-500">3rd Place</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
