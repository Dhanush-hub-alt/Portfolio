"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code2, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "Who I Am",
      icon: <User className="h-6 w-6 text-primary" />,
      content: "I am a passionate 3rd Year CSE student at Nandha College of Technology. I enjoy building innovative solutions that solve real-world problems."
    },
    {
      title: "Academic Background",
      icon: <GraduationCap className="h-6 w-6 text-purple-500" />,
      content: "Currently pursuing B.E in Computer Science Engineering. Actively participating in hackathons, paper presentations, and technical events."
    },
    {
      title: "Career Goals",
      icon: <Briefcase className="h-6 w-6 text-cyan-500" />,
      content: "Seeking opportunities to apply my skills in software development, AI, and IoT. I aim to become a versatile Full Stack Developer and AI Engineer."
    },
    {
      title: "Tech Interests",
      icon: <Code2 className="h-6 w-6 text-orange-500" />,
      content: "Profoundly interested in Web Development (React/Next.js), AI algorithms, Internet of Things, and Cloud Architectures."
    }
  ];

  return (
    <Section id="about" className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-[120px] rounded-full z-[-1] pointer-events-none" />
      
      <SectionHeader 
        title="About Me" 
        subtitle="A quick glimpse into my background, goals, and interests in the tech world."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="h-full group hover:border-primary/50 transition-colors">
              <CardContent className="p-8 flex flex-col items-start gap-4">
                <div className="p-4 rounded-xl glass group-hover:scale-110 transition-transform bg-white/5 dark:bg-black/20">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
