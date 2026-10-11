"use client";

import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { Award, Code2, Compass, Globe, Layers, Settings } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  devTools,
  languages,
  skillDomains,
  skillTiers,
} from "@/lib/portfolio-data";

const tierStyles = {
  core: { icon: Award, color: "hsl(var(--chart-1))" },
  working: { icon: Layers, color: "hsl(var(--chart-2))" },
  familiar: { icon: Compass, color: "hsl(var(--chart-3))" },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning in modern web technologies.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-7">
          {/* Skills Overview Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="h-full border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-sans">
                  <Code2 className="size-5 text-primary" />
                  Skills Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillDomains}>
                      <PolarGrid />
                      <PolarAngleAxis
                        dataKey="name"
                        className="font-body text-xs"
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        className="text-xs"
                      />
                      <Radar
                        name="Proficiency"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.1}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Skills Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Tabs defaultValue="core" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-3">
                {skillTiers.map(tier => {
                  const TierIcon = tierStyles[tier.id].icon;
                  return (
                    <TabsTrigger
                      key={tier.id}
                      value={tier.id}
                      className="text-xs"
                    >
                      <TierIcon className="mr-1 size-4" />
                      <span className="hidden sm:inline">{tier.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {skillTiers.map(tier => {
                const { icon: TierIcon, color } = tierStyles[tier.id];
                return (
                  <TabsContent key={tier.id} value={tier.id}>
                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-sans">
                          <TierIcon className="size-5" style={{ color }} />
                          {tier.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {tier.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                              }}
                              viewport={{ once: true }}
                              className="space-y-2"
                            >
                              <span className="font-body font-medium">
                                {skill.name}
                              </span>
                              <Progress value={skill.level} className="h-2" />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>
        </div>

        {/* Additional Skills & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-sans">
                <Globe className="size-5 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map(language => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between"
                  >
                    <span className="font-body">{language.name}</span>
                    <Badge>{language.proficiency}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-sans">
                <Settings className="size-5 text-primary" />
                Development Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {devTools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="font-body">
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
