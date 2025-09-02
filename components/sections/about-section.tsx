"use client";

import { motion } from "framer-motion";
import { Code2, Users, Zap, Award } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, education } from "@/lib/portfolio-data";

const highlights = [
  {
    icon: Code2,
    title: "Technical Leadership",
    description:
      "Led front-end development initiatives across multiple high-value client projects at FocalId Technologies",
  },
  {
    icon: Users,
    title: "Team Mentorship",
    description:
      "Mentored junior developers and established code quality standards, improving sprint velocity",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Implemented performance-optimized components, reducing load times on key client applications",
  },
  {
    icon: Award,
    title: "Proven Impact",
    description:
      "Contributed to platforms serving 5K+ concurrent users and 100+ businesses",
  },
];

const technologies = [
  "React",
  "Angular",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Redux",
  "Tailwind CSS",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 py-20 lg:py-32">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            Passionate about creating exceptional digital experiences through
            clean code and innovative solutions.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-sans text-2xl font-semibold">
                Professional Journey
              </h3>
              <p className="font-body leading-relaxed text-muted-foreground">
                {personalInfo.tagline}
              </p>
              <p className="font-body leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>
            </div>

            {/* Technology Stack */}
            <div className="space-y-4">
              <h4 className="font-sans text-lg font-medium">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="font-body text-sm">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                          <highlight.icon className="size-6 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-sans text-sm font-semibold">
                          {highlight.title}
                        </h4>
                        <p className="font-body text-sm leading-relaxed text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="mx-auto max-w-2xl border-border/50">
            <CardContent className="p-8">
              <h3 className="mb-4 font-sans text-xl font-semibold">
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-body font-medium">{education.degree}</p>
                <p className="font-body text-muted-foreground">
                  {education.university}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {education.period}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
