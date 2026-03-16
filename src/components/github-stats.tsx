"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, GitFork, BookOpen } from "lucide-react";

export function GithubStats() {
  const [stats, setStats] = useState({ repos: 0, stars: 0, forks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from GitHub API
    // fetch('https://api.github.com/users/Dhanush-hub-alt')
    // We mock it for the portfolio to avoid API rate limits during demo
    setTimeout(() => {
      setStats({
        repos: 45,
        stars: 128,
        forks: 34
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Section id="github" className="relative">
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full z-[-1] pointer-events-none" />
      <SectionHeader 
        title="GitHub Activity" 
        subtitle="Open source contributions and repository statistics."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="text-center group hover:border-cyan-500/50 transition-colors">
            <CardContent className="p-8">
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-cyan-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold mb-2">{loading ? "-" : stats.repos}</h3>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Repositories</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="text-center group hover:border-yellow-500/50 transition-colors">
            <CardContent className="p-8">
              <Star className="h-10 w-10 mx-auto mb-4 text-yellow-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold mb-2">{loading ? "-" : stats.stars}</h3>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Total Stars</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Card className="text-center group hover:border-purple-500/50 transition-colors">
            <CardContent className="p-8">
              <GitFork className="h-10 w-10 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-bold mb-2">{loading ? "-" : stats.forks}</h3>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Total Forks</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <motion.a 
          href="https://github.com/Dhanush-hub-alt" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-medium shadow-lg hover:shadow-xl hover:bg-primary/80 transition-all hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-5 w-5" />
          Visit My GitHub Profile
        </motion.a>
      </div>
    </Section>
  );
}
