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
import {
  Code2,
  Database,
  Server,
  Settings,
  Palette,
  Globe,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { devTools, skills } from "@/lib/portfolio-data";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Palette,
    color: "hsl(var(--chart-1))",
    skills: skills.frontend,
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "hsl(var(--chart-2))",
    skills: skills.backend,
  },
  {
    id: "database",
    title: "Database Technologies",
    icon: Database,
    color: "hsl(var(--chart-3))",
    skills: skills.database,
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    icon: Settings,
    color: "hsl(var(--chart-4))",
    skills: skills.tools,
  },
];

const radarData = [
  {
    subject: "Frontend",
    A: Math.round(
      skills.frontend.reduce((acc, skill) => acc + skill.level, 0) /
        skills.frontend.length
    ),
    fullMark: 100,
  },
  {
    subject: "Backend",
    A: Math.round(
      skills.backend.reduce((acc, skill) => acc + skill.level, 0) /
        skills.backend.length
    ),
    fullMark: 100,
  },
  {
    subject: "Database",
    A: Math.round(
      skills.database.reduce((acc, skill) => acc + skill.level, 0) /
        skills.database.length
    ),
    fullMark: 100,
  },
  {
    subject: "DevOps",
    A: Math.round(
      skills.tools.reduce((acc, skill) => acc + skill.level, 0) /
        skills.tools.length
    ),
    fullMark: 100,
  },
  { subject: "Mobile", A: 70, fullMark: 100 },
  { subject: "Cloud", A: 65, fullMark: 100 },
];

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

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {/* Skills Overview Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
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
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis
                        dataKey="subject"
                        className="font-body text-xs"
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        className="text-xs"
                      />
                      <Radar
                        name="Proficiency"
                        dataKey="A"
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
            className="lg:col-span-2"
          >
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-4">
                {skillCategories.map(category => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs"
                  >
                    <category.icon className="mr-1 size-4" />
                    <span className="hidden sm:inline">
                      {category.title.split(" ")[0]}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-sans">
                        <category.icon
                          className="size-5"
                          style={{ color: category.color }}
                        />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-body font-medium">
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {skill.years}y
                                </Badge>
                                <span className="font-mono text-sm text-muted-foreground">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
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
                <div className="flex items-center justify-between">
                  <span className="font-body">English</span>
                  <Badge>Full Professional Proficiency</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body">Sinhala</span>
                  <Badge>Native</Badge>
                </div>
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
