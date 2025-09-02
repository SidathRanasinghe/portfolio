"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, Star, Users, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";

const categories = [
  "All",
  "Web Application",
  "AI Platform",
  "Library",
  "Platform",
  "Social Platform",
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    project =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="bg-muted/30 py-20 lg:py-32">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            A showcase of innovative solutions, from AI-powered platforms to
            scalable web applications that make a real impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-2 font-sans text-2xl font-bold"
          >
            <Star className="size-6 text-primary" />
            Highlighted Projects
          </motion.h3>

          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/50 transition-all duration-500 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1024}
                      height={1024}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute right-4 top-4 flex gap-2">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {project.category}
                      </Badge>
                      {project.status === "Ongoing" && (
                        <Badge
                          variant="secondary"
                          className="bg-accent/90 text-accent-foreground"
                        >
                          <Zap className="mr-1 size-3" />
                          {project.status}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 font-sans text-xl font-bold transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="font-body text-sm leading-relaxed text-muted-foreground">
                          {hoveredProject === project.title
                            ? project.longDescription
                            : project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 6).map(tech => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="font-body text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 6} more
                          </Badge>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-2">
                        {project.liveUrl && (
                          <Button size="sm" className="group/btn" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="group/btn bg-transparent"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 size-4 transition-transform group-hover/btn:scale-110" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-2 font-sans text-2xl font-bold"
          >
            <Users className="size-6 text-primary" />
            All Projects
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/50 transition-all duration-300 hover:shadow-lg">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1024}
                      height={1024}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3">
                      <Badge
                        variant="secondary"
                        className="bg-background/90 text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-sans font-semibold transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="line-clamp-3 font-body text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map(tech => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-transparent"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-1 size-3" />
                              View
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 bg-transparent"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-1 size-3" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Total Projects", value: "6+" },
              { label: "Technologies", value: "25+" },
              { label: "Live Projects", value: "3" },
              { label: "Open Source", value: "1" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="gradient-text mb-1 font-sans text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
