"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "IIT Ropar",
    duration: "Dec 2025 – Jan 2026",
    details: "Intensive 2-month internship focusing on advanced web technologies and scalable architectures.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    contributions: [
      "Developed comprehensive full-stack applications solving real-world data tracking needs.",
      "Optimized database queries resulting in a 30% increase in API response time.",
      "Collaborated with researchers and engineers to deploy scalable solutions on AWS."
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" className="relative">
      <SectionHeader 
        title="Experience & Internships" 
        subtitle="My journey in the professional software engineering space."
      />

      <div className="max-w-4xl mx-auto w-full relative mt-16">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-4 border-background bg-cyan-500 transform -translate-x-1/2 translate-y-6 md:translate-y-1 shadow-[0_0_15px_#06b6d4] z-10" />

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                <div className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors group">
                  <h3 className="text-2xl font-bold mb-1 text-primary group-hover:neon-text-cyan transition-all">{exp.role}</h3>
                  <h4 className="text-xl font-semibold text-foreground/90 mb-2">{exp.company}</h4>
                  <p className="text-sm text-cyan-500 font-medium mb-4">{exp.duration}</p>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{exp.details}</p>
                  
                  <ul className={`text-sm text-foreground/70 mb-6 space-y-2 text-left ${index % 2 === 0 ? "" : "md:inline-block md:text-right"}`}>
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">•</span> 
                        <span className={index % 2 === 0 ? "text-left" : "md:text-left"}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-xs font-medium rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-foreground/90 group-hover:border-cyan-500/30 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
