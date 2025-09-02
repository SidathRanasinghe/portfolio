"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-width section-padding">
        <div className="py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Left side - Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="font-body text-sm text-muted-foreground">
                {`© ${new Date().getFullYear()} Sidath Ranasinghe.`}
              </p>
            </motion.div>

            {/* Right side - Back to top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group bg-transparent"
              >
                <ArrowUp className="mr-2 size-4 transition-transform group-hover:-translate-y-1" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
