import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Registration = () => {
    return (
        <section className="py-32 relative flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-contrast-gold/5" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-midnight to-transparent" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Define the Future?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Join the brightest minds at IIIT Pune and build the shield for India's digital frontier.
                </p>
                <Link href="https://www.google.com/search?q=unstop+trust+ai+ideathon&oq=unstop+trust+ai+ideathon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBCTExMzI0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank">
                    <Button size="lg" className="bg-contrast-gold text-midnight hover:bg-contrast-gold/90 h-14 px-8 text-lg rounded-full">
                        Register Your Team <ArrowRight className="ml-2" />
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Registration;
