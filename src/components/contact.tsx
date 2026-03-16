"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission to Formspree or EmailJS
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <Section id="contact" className="relative">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full z-[-1] pointer-events-none" />
      
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Have a project in mind or want to collaborate? Feel free to reach out."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6">Let's talk about everything!</h3>
          <p className="text-foreground/70 mb-10 text-lg leading-relaxed">
            I'm currently seeking new opportunities and open to exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-primary border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Email</p>
                <p className="text-lg font-medium">dhanush@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-purple-500 border-purple-500/20 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-background transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Location</p>
                <p className="text-lg font-medium">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="hover:border-primary/50 transition-colors shadow-xl">
            <CardContent className="p-8 md:p-10">
              {success ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 text-green-500">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold">Message Sent!</h4>
                  <p className="text-foreground/70 text-lg">Thank you for reaching out. I will get back to you soon.</p>
                  <Button onClick={() => setSuccess(false)} variant="outline" className="mt-8 rounded-full">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your Name</label>
                      <input 
                        id="name"
                        required
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your Email</label>
                      <input 
                        id="email"
                        type="email"
                        required
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Subject</label>
                    <input 
                      id="subject"
                      required
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-sans"
                      placeholder="I'd like to talk about..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full mt-4 h-12" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
