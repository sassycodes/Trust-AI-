import Link from "next/link";
import { Mail, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const officeBearers = [
        { name: "Saurav Dhabade", role: "9623328182" },
        { name: "Roshni Sahoo", role: "9137649761" },
        { name: "Gargi Avadhani", role: "7066081728" },
        { name: "Priya Jadhav", role: "9112444965" },

    ];

    const verticalHeads = [
        { name: "Jayata Roy", role: "9503358763" },
        { name: "Piyush Kulkarni", role: "9405582136" },
        { name: "Ayushman Ghosh", role: "7439827539" },
    ];

    return (
        <footer id="footer" className="bg-midnight border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand & Address */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">India AI Summit</h3>
                        <div className="flex items-start gap-4 text-gray-400 mb-4">
                            <MapPin className="text-contrast-gold shrink-0" />
                            <p>
                                IIIT Pune, Talegaon Dabhade,<br />
                                Pune, Maharashtra - 410507
                            </p>
                        </div>
                    </div>

                    {/* Organizing Team */}
                    <div className="md:col-span-2 space-y-10">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Organizing Team</h4>

                            {/* Faculty Advisor */}
                            <div className="mb-8">
                                <h5 className="text-contrast-gold font-semibold mb-3">Faculty Advisor</h5>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10 w-full sm:w-fit">
                                    <p className="text-white font-medium">Dr. Shrikant Salve</p>
                                    <p className="text-xs text-gray-400">Faculty Advisor</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Office Bearers */}
                                <div>
                                    <h5 className="text-contrast-gold font-semibold mb-3">Organizing Team</h5>
                                    <div className="space-y-3">
                                        {officeBearers.map((member, i) => (
                                            <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded border border-white/5 hover:border-white/20 transition-colors">
                                                <span className="text-gray-200 text-sm font-medium">{member.name}</span>
                                                <span className="text-gray-500 text-xs ml-2">{member.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Vertical Heads */}
                                <div>
                                    <h5 className="text-contrast-gold font-semibold mb-3">Organizing Team</h5>
                                    <div className="space-y-3">
                                        {verticalHeads.map((member, i) => (
                                            <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded border border-white/5 hover:border-white/20 transition-colors">
                                                <span className="text-gray-200 text-sm font-medium">{member.name}</span>
                                                <span className="text-gray-500 text-xs ml-2">{member.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 IIIT Pune. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-contrast-gold"><Linkedin size={20} /></Link>
                        <Link href="#" className="text-gray-500 hover:text-contrast-gold"><Twitter size={20} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
