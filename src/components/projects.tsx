"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type ProjectCategory = "All" | "Web Development" | "AI" | "IoT" | "Software Engineering";

const projects = [
  {
    title: "AQ Immune Platform",
    description: "AI-powered Air Pollution Intelligence Platform integrating advanced UI, AI predictions, geospatial visualization, and real-time IoT data.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800",
    categories: ["Web Development", "AI"],
    tech: ["React 18", "Tailwind CSS", "Firebase", "LSTM Models"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "IoT Monitoring System",
    description: "Real-time dashboard for monitoring industrial IoT sensor data with automated alert systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    categories: ["IoT", "Web Development"],
    tech: ["Next.js", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "E-Commerce Frontend",
    description: "A comprehensive Flipkart-like e-commerce website using React and Redux Toolkit with dynamic customizer.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    categories: ["Web Development"],
    tech: ["React", "Vite", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    title: "Car Accident Alert App",
    description: "A software application that aggregates data to detect potential collisions and immediately notifies emergency response.",
    image: "https://images.unsplash.com/photo-1549635072-cdbba5f2dd3d?auto=format&fit=crop&q=80&w=800",
    categories: ["Software Engineering", "AI"],
    tech: ["Python", "TensorFlow", "React Native"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

const categories: ProjectCategory[] = ["All", "Web Development", "AI", "IoT", "Software Engineering"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  
  const filteredProjects = projects.filter(p => activeCategory === "All" || p.categories.includes(activeCategory as any));

  return (
    <Section id="projects" className="bg-black/5 dark:bg-white/5">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Some of my recent work bridging the gap between design and complex engineering."
      />
      
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className="rounded-full transition-all"
          >
            {cat}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto min-h-[500px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden group hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-shadow">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <Button size="icon" variant="glass" className="rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border-white/20" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a>
                    </Button>
                    <Button size="icon" variant="glass" className="rounded-full bg-primary/80 hover:bg-primary text-white backdrop-blur-md border-white/20" asChild>
                      <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/70 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
