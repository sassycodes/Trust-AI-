"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export const TiltCard = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); // Reverse for natural tilt
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative transition-all duration-200 ease-out", className)}
        >
            <div style={{ transform: "translateZ(50px)" }} className="h-full">
                {children}
            </div>
        </motion.div>
    );
};
