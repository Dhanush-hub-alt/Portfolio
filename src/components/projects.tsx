"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Cpu, Wind, Globe } from "lucide-react";

const projects = [
  {
    title: "Car-to-Car Communication System",
    description:
      "A V2V (Vehicle-to-Vehicle) communication system designed for highway safety in foggy conditions. Built a hardware prototype paired with a software application that displays real-time collision alerts on the car's in-dash display, preventing pile-ups before they happen.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    tech: ["Embedded C", "Arduino", "RF Module", "Python", "LCD Display"],
    icon: <Cpu className="w-5 h-5" />,
    github: "https://github.com/Dhanush-hub-alt",
    demo: null,
    badge: "Hardware + Software",
    color: "from-cyan-500/20 to-blue-500/10",
    accent: "text-cyan-600",
  },
  {
    title: "AQ‑Immune — Air Quality System",
    description:
      "An IoT-powered air quality monitoring and prediction platform that detects dust particles, CO₂, NO₂, and other harmful gases. The hardware sensor array feeds data into a mobile app that alerts users in real time when pollution levels become dangerous.",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800",
    tech: ["Arduino", "MQ Sensors", "React Native", "Firebase", "Python"],
    icon: <Wind className="w-5 h-5" />,
    github: "https://github.com/Dhanush-hub-alt",
    demo: null,
    badge: "IoT + Mobile App",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-600",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal professional portfolio built with Next.js 15, Framer Motion animations, and a clean modern design system. Features smooth scroll navigation, animated skill bars, project showcases, a contact form, and full responsiveness across all devices.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: <Globe className="w-5 h-5" />,
    github: "https://github.com/Dhanush-hub-alt",
    demo: null,
    badge: "Web Development",
    color: "from-primary/20 to-indigo-500/10",
    accent: "text-primary",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        title="My Projects"
        subtitle="Real-world hardware and software projects I have built end-to-end."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="h-full"
          >
            <Card className="h-full overflow-hidden group hover:shadow-[0_4px_30px_rgba(6,182,212,0.13)] hover:border-primary/40 transition-all duration-300 flex flex-col">
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 z-20 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/20">
                  {project.badge}
                </span>
                {/* Action buttons */}
                <div className="absolute bottom-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/80 hover:bg-primary text-white backdrop-blur-md border border-white/20 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 flex flex-col flex-1">
                <div className={`inline-flex items-center gap-2 text-sm font-semibold mb-3 ${project.accent}`}>
                  {project.icon}
                  <span>{project.badge}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-foreground/65 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
