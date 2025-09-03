"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { overallExperience, workExperience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            A journey of continuous growth, technical excellence, and impactful
            contributions across innovative projects.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {workExperience.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-6 top-24 h-full w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 z-10 size-4 rounded-full border-4 border-background bg-primary shadow-lg" />

              {/* Experience Card */}
              <div className="mb-12 ml-16">
                <Card className="overflow-hidden border-border/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-sans text-xl font-bold text-foreground">
                            {experience.title}
                          </h3>
                          {experience.period
                            .toLowerCase()
                            .includes("present") && (
                            <Badge className="border-primary/20 bg-primary/10 text-primary">
                              <TrendingUp className="mr-1 size-3" />
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="font-body text-lg font-medium text-primary">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="size-4" />
                            {experience.location}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6 space-y-4">
                      <h4 className="font-sans font-semibold text-foreground">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: achievementIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 font-body text-sm leading-relaxed text-muted-foreground"
                            >
                              <div className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                              {achievement}
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-sans text-sm font-semibold text-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: techIndex * 0.05,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge className="font-body text-xs">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {overallExperience.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="border-border/50 p-6">
                  <div className="gradient-text mb-2 font-sans text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
