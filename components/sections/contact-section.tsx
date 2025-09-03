"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/portfolio-data";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: personalInfo.linkedin,
    username: "sidath-ranasinghe",
  },
  {
    icon: Github,
    label: "GitHub",
    href: personalInfo.github,
    username: "SidathRanasinghe",
  },
  {
    icon: ExternalLink,
    label: "GitLab",
    href: personalInfo.gitlab,
    username: "SidathRanasinghe",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailJsConfigs {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // Format current date and time as "12.35pm, 11.06.2025"
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";
      const displayHours = hours % 12 || 12;

      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear();

      const formattedTime = `${displayHours}.${minutes}${ampm}, ${day}.${month}.${year}`;

      const emailjsConfigs: EmailJsConfigs = {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      };

      if (
        emailjsConfigs.serviceId &&
        emailjsConfigs.templateId &&
        emailjsConfigs.publicKey
      ) {
        // Send email with form data and additional time parameter
        await emailjs.send(
          emailjsConfigs.serviceId,
          emailjsConfigs.templateId,
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            time: formattedTime,
          },
          emailjsConfigs.publicKey
        );

        // Reset form and show success message
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
      } else {
        console.error(
          "EmailJS configuration is incomplete. Please check your environment variables."
        );
        setStatus({
          type: "error",
          message:
            "Oops! Something went wrong. Please try again or contact me directly via email.",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Oops! Something went wrong. Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  };

  return (
    <section id="contact" className="bg-muted/30 py-20 lg:py-32">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance font-sans text-3xl font-bold md:text-4xl lg:text-5xl">
            {"Let's"} <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-lg text-muted-foreground">
            {
              "Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you."
            }
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 font-sans text-2xl font-bold">
                Get in Touch
              </h3>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {
                  "Whether you're looking for a senior developer to join your team, need consultation on a technical project, or want to discuss potential collaborations, I'm always open to meaningful conversations."
                }
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50 transition-shadow duration-300 hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <contact.icon className="size-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-body text-sm font-medium text-muted-foreground">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              className="font-body text-foreground transition-colors hover:text-primary"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-body text-foreground">
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-sans font-semibold">Connect on Social</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group min-w-fit max-w-full"
                  >
                    <Card className="border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <social.icon className="size-5 text-primary transition-transform group-hover:scale-110" />
                          <div>
                            <p className="font-body text-sm font-medium">
                              {social.label}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {social.username}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-sans">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Message */}
                  {status.type && (
                    <div
                      className={`rounded-lg p-4 text-sm ${
                        status.type === "success"
                          ? "border border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200"
                          : "border border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                        className="font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-body">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      disabled={isSubmitting}
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="resize-none font-body"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 size-4 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
