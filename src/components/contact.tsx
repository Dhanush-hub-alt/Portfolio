"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      // For GitHub Pages (static), we use Formspree or similar
      // Replaces the internal /api/contact/ route which won't work on static hosting
      const res = await fetch("https://formspree.io/f/mqakeebv", { // Using a placeholder ID
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
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
              <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Email</p>
                <p className="text-lg font-medium">dhanush80729@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-purple-400/30 bg-purple-500/5 flex items-center justify-center text-purple-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Location</p>
                <p className="text-lg font-medium">Namakkal, Tamil Nadu, India</p>
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

              {/* Success State */}
              {status === "success" ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-600">Message Sent!</h4>
                  <p className="text-foreground/65 text-base max-w-xs">
                    Thanks for reaching out! I'll get back to you at your email soon.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-6 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-black/5 border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-sans"
                      placeholder="I'd like to talk about..."
                    />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Failed to send. Please check your internet connection and try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 rounded-full mt-2 h-12"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
