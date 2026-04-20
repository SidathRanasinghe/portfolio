import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github, Zap } from "lucide-react";

import { projects } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Sidath Ranasinghe`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Sidath Ranasinghe`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const hasRealGithub = project.githubUrl && project.githubUrl !== "#";

  return (
    <main className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container-width section-padding">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
            <Link
              href="/"
              className="gradient-text font-sans text-sm font-semibold"
            >
              Sidath Ranasinghe
            </Link>
          </div>
        </div>
      </div>

      <article className="container-width section-padding py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                {project.category}
              </Badge>
              {project.status && (
                <Badge
                  variant="secondary"
                  className="bg-accent/20 text-accent-foreground"
                >
                  <Zap className="mr-1 size-3" />
                  {project.status}
                </Badge>
              )}
            </div>

            <h1 className="mb-5 font-sans text-4xl font-bold md:text-5xl">
              <span className="gradient-text">{project.title}</span>
            </h1>

            <p className="max-w-3xl text-pretty font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 size-4" />
                    Visit Site
                  </a>
                </Button>
              )}
              {hasRealGithub && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 size-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </header>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <Badge key={tech} variant="secondary" className="font-body">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="mb-6 font-sans text-2xl font-bold">Gallery</h2>
              <div className="space-y-12">
                {project.gallery.map(group => (
                  <div key={group.label}>
                    {project.gallery && project.gallery.length > 1 && (
                      <h3 className="mb-4 flex items-center gap-2 font-sans text-lg font-semibold">
                        <span className="inline-block size-2 rounded-full bg-primary" />
                        {group.label}
                      </h3>
                    )}
                    <div className="space-y-6">
                      {group.images.map((src, i) => (
                        <figure
                          key={src}
                          className="overflow-hidden rounded-lg border border-border/60 bg-muted/30 shadow-sm"
                        >
                          <Image
                            src={src}
                            alt={`${project.title} — ${group.label} — ${i + 1}`}
                            width={2000}
                            height={1200}
                            className="h-auto w-full"
                            sizes="(min-width: 1024px) 960px, 100vw"
                            priority={i === 0}
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom back link */}
          <div className="mt-16 border-t border-border/60 pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
