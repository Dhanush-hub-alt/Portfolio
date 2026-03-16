"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "C/C++", level: 75 },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React / Next.js", level: 80 },
      { name: "Node.js / Express", level: 75 },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
    ]
  }
];

export function Skills() {
  return (
    <Section id="skills" className="relative">
       <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full z-[-1] pointer-events-none" />
      <SectionHeader 
        title="Technical Skills" 
        subtitle="My toolkit for building scalable and modern applications."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
          >
            <Card className="h-full group hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
