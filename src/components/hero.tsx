"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full">
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mb-8 relative w-52 h-52 md:w-72 md:h-72 rounded-full border-[6px] border-primary/30 p-2 group overflow-hidden shadow-2xl shadow-primary/20"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="/profile.png"
                alt="Dhanush Kumar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 mt-4 whitespace-nowrap">
            Hi, I'm <span className="text-primary">Dhanush Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground/80">
            A 3rd Year Computer Science Engineering Student
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            I craft highly advanced, modern, and professional digital experiences with a focus on scalable architecture and engaging interactions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all" asChild>
              <Link href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 group glass" asChild>
              <a href="/Dhanush Kumar B - CSE - NCT.pdf" download>
                Download Resume
                <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
