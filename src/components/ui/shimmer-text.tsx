"use client";

import { cn } from "@/lib/utils";

export const ShimmerText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "inline-flex animate-text-shimmer bg-[linear-gradient(110deg,#FFD700,45%,#fff,55%,#FFD700)] bg-[length:250%_100%] bg-clip-text text-transparent", // Gold base
                className
            )}
        >
            {text}
        </span>
    );
};
