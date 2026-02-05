"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HackerTextProps {
    text: string;
    className?: string;
    speed?: number;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export const HackerText = ({ text, className, speed = 30 }: HackerTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    const animate = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <span
            className={cn("font-mono", className)}
            onMouseEnter={() => animate()}
        >
            {displayText}
        </span>
    );
};
