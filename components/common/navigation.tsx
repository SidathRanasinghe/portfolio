"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";

import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems, personalInfo } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = "Sidath_Ranasinghe_SE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent",
        { "rounded-b-lg border-b border-border backdrop-blur-md": isOpen }
      )}
    >
      <div className="container-width section-padding">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="gradient-text h-16 w-auto p-3 font-sans text-xl font-bold"
          >
            <Image
              src={personalInfo.logo}
              alt="Logo"
              width={40}
              height={40}
              className="size-full object-cover"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-foreground/80 transition-colors duration-200 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={downloadResume}
              className="ml-4 bg-transparent"
            >
              <Download className="mr-2 size-4" />
              Resume
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "mb-3 rounded-lg border-t border-border",
              scrolled ? "bg-background/95" : "",
              "backdrop-blur-md md:hidden"
            )}
          >
            <div className="space-y-2 py-4">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground/80 transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadResume}
                  className={cn(
                    "w-full",
                    scrolled ? "bg-transparent" : "bg-background/95"
                  )}
                >
                  <Download className="mr-2 size-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
