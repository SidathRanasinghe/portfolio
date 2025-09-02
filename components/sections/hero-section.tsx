"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import { personalInfo } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = "Sidath_Ranasinghe_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(5, 150, 105, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
              "linear-gradient(225deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)",
              "linear-gradient(45deg, rgba(5, 150, 105, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute left-10 top-20 size-20 rounded-full bg-primary/10 blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 size-32 rounded-full bg-accent/10 blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container-width section-padding relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="size-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl md:size-40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/sidath-profile.png"
                  alt={personalInfo.name}
                  width={160}
                  height={160}
                  className="size-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-sm"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-balance font-sans text-4xl font-bold md:text-6xl lg:text-7xl">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="mb-4 font-body text-xl text-muted-foreground md:text-2xl lg:text-3xl">
              <TypeAnimation
                sequence={[
                  personalInfo.title,
                  2000,
                  "Full-stack Developer",
                  2000,
                  "React & Angular Expert",
                  2000,
                  "Node.js Specialist",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="font-medium text-foreground"
              />
            </div>
            <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" onClick={scrollToContact} className="group">
              <Mail className="mr-2 size-5 transition-transform group-hover:scale-110" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={downloadResume}
              className="group bg-transparent"
            >
              <Download className="mr-2 size-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex cursor-pointer flex-col items-center"
            onClick={scrollToAbout}
          >
            <span className="mb-2 font-body text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="size-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
