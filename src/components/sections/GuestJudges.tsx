"use client";

import { motion } from "framer-motion";
import { Gavel } from "lucide-react";
import { SpotlightCard } from "../ui/spotlight-card";

const GuestJudges = () => {
    const judges = [
        {
            name: "Mr. Gaurav Taywade",
            bio: "Managing Director, Vicon, India."
        },
        {
            name: "Dr. Deepak Kshirsagar",
            bio: "Assistant Professor COEP Technological University, Pune"
        },
        {
            name: "Dr. Ganesh Bhutkar",
            bio: "Professor and Assistant Head (Research) in the Department of Computer Engineering at Vishwakarma Institute of Technology (VIT), Pune, India. And Coordinator of Centre of Excellence in Human Computer Interaction (HCI) at VIT Pune."
        },
        {
            name: "Dr. Sanga Chaki",
            bio: "Assistant Professor in the Department of Computer Science and Engineering  at Indian Institute of Information Technology, Pune, India."
        },
        {
            name: "Dr. Shrikant Salve",
            bio: "Assistant Professor in the Department of Computer Science and Engineering  at Indian Institute of Information Technology, Pune, India."
        },
    ];

    return (
        <section id="judges" className="py-24 relative bg-midnight">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16 flex items-center gap-3 justify-center"
                >
                    <Gavel className="text-contrast-gold" /> Guest Judges
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {judges.map((judge, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="w-full max-w-sm"
                        >
                            <SpotlightCard className="h-full p-6 flex flex-col items-center text-center group bg-white/5 hover:bg-white/10 transition-colors border-white/10">


                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-contrast-gold transition-colors">
                                    {judge.name}
                                </h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-contrast-gold/50 to-transparent mb-4" />
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {judge.bio}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuestJudges;
