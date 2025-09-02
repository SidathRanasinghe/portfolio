"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

import { testimonials } from "@/lib/portfolio-data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-background to-muted/20 py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            What People Say
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            {
              "Testimonials from colleagues, managers, and clients I've had the pleasure to work with"
            }
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
                {/* Background decoration */}
                <div className="absolute right-0 top-0 size-32 -translate-y-16 translate-x-16 rounded-full bg-gradient-to-br from-primary/5 to-emerald-500/5" />

                {/* Quote icon */}
                <div className="mb-6 flex items-center justify-between">
                  <Quote className="size-8 text-primary/60" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial content */}
                <blockquote className="relative z-10 mb-8 text-lg leading-relaxed text-foreground/90">
                  {`"${testimonial.content}"`}
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                        onError={e => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-lg font-semibold text-primary">${testimonial.name
                              .split(" ")
                              .map(n => n[0])
                              .join("")}</span>`;
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to work together and create something amazing?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {"Let's Connect"}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
