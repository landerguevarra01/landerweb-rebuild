"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    $: any;
  }
}

export default function RippleEffect() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.$ && typeof window.$.fn.ripples === "function") {
        try {
          window.$(".image").ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
            interactive: true,
          });
          clearInterval(interval); // stop checking once it succeeds
        } catch (err) {
          console.error("Ripples init failed:", err);
        }
      }
    }, 100); // check every 100ms

    return () => clearInterval(interval);
  }, []);

  return null;
}
