"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(true); // Default true to avoid flash on mobile

    useEffect(() => {
        const handleMediaQuery = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(e.matches);
        };
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        handleMediaQuery(mediaQuery);
        // Use modern event listener if available, otherwise fallback
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", handleMediaQuery);
        }

        if (!isMobile) {
            const moveCursor = (e: MouseEvent) => {
                setPosition({ x: e.clientX, y: e.clientY });
            };

            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (
                    target.tagName.toLowerCase() === "a" ||
                    target.tagName.toLowerCase() === "button" ||
                    target.closest("a") ||
                    target.closest("button")
                ) {
                    setIsHovering(true);
                } else {
                    setIsHovering(false);
                }
            };

            window.addEventListener("mousemove", moveCursor);
            window.addEventListener("mouseover", handleMouseOver);

            return () => {
                window.removeEventListener("mousemove", moveCursor);
                window.removeEventListener("mouseover", handleMouseOver);
            };
        }
        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", handleMediaQuery);
            }
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
                animate={{
                    x: position.x - 5,
                    y: position.y - 5,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[99] mix-blend-difference flex items-center justify-center"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
            />
        </>
    );
}
