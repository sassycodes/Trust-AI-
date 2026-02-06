import Hero from "@/components/sections/Hero";
import Rules from "@/components/sections/Rules";
import Themes from "@/components/sections/Themes";
import Timeline from "@/components/sections/Timeline";
import GuestJudges from "@/components/sections/GuestJudges";
import Registration from "@/components/sections/Registration";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-midnight overflow-x-hidden">
            <Hero />
            <Rules />
            <Themes />
            <Timeline />
            <GuestJudges />
            <Registration />
        </main>
    );
}
