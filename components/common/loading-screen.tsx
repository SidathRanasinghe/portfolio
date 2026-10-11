"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Keep the splash brief, and never hold the page hostage on slow networks
const MIN_DURATION_MS = 800;
const MAX_DURATION_MS = 3000;

// Survives client-side navigation, so returning from a project page skips the splash
let hasShown = false;

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(!hasShown);

  useEffect(() => {
    if (hasShown) return;

    const startedAt = performance.now();
    let minTimer: ReturnType<typeof setTimeout> | undefined;

    const hide = () => {
      hasShown = true;
      setIsVisible(false);
    };

    const onLoad = () => {
      const remaining = MIN_DURATION_MS - (performance.now() - startedAt);
      minTimer = setTimeout(hide, Math.max(0, remaining));
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
    const maxTimer = setTimeout(hide, MAX_DURATION_MS);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="gradient-text font-sans text-4xl font-bold">SR</h1>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: MIN_DURATION_MS / 1000,
                ease: "easeInOut",
              }}
              className="mx-auto h-1 max-w-xs rounded-full bg-gradient-to-r from-primary to-accent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-4 font-body text-muted-foreground"
            >
              Loading Portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
