"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
    decimals?: number;
}

export const CountUp = ({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
    className,
    decimals = 0,
}: CountUpProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return () => unsubscribe();
    }, [springValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {suffix}
        </span>
    );
};
