import Link from "next/link";
import { Mail, Linkedin, Twitter, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const studentLeads = [
        { name: "Roshni", contact: "+91 9137649761" },
        { name: "Gargi", contact: "+91 7066081728" },
        { name: "Ayushman", contact: "+91 74398 27539" },
        { name: "Yuvraj", contact: "+91 93094 61747" },
        { name: "Sarthak", contact: "+91 82087 38340" },
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

                    {/* Student Leads */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold text-white mb-6">Student Representatives</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {studentLeads.map((lead, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-contrast-gold/30 transition-colors">
                                    <p className="text-white font-medium">{lead.name}</p>
                                    <p className="text-sm text-contrast-gold mb-2">Lead Organizer</p>
                                    <a href={`tel:${lead.contact.replace(/\s/g, '')}`} className="text-xs text-gray-400 hover:text-white flex items-center gap-2">
                                        <Phone size={14} /> {lead.contact}
                                    </a>
                                </div>
                            ))}
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
