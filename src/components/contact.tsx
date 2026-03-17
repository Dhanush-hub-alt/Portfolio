"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "dhanush80729@gmail.com",
      description: "Send me an email for inquiries",
      icon: <Mail className="w-8 h-8 text-primary" />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=dhanush80729@gmail.com",
      color: "bg-primary/10",
      borderColor: "hover:border-primary/50"
    },
    {
      title: "LinkedIn",
      value: "Dhanush Kumar B",
      description: "Let's connect professionally",
      icon: <Linkedin className="w-8 h-8 text-[#0a66c2]" />,
      link: "https://www.linkedin.com/in/dhanush-kumar-b-3058962bb/",
      color: "bg-[#0a66c2]/10",
      borderColor: "hover:border-[#0a66c2]/50"
    },
    {
      title: "GitHub",
      value: "Dhanush-hub-alt",
      description: "Check out my latest projects",
      icon: <Github className="w-8 h-8 text-foreground" />,
      link: "https://github.com/Dhanush-hub-alt",
      color: "bg-foreground/10",
      borderColor: "hover:border-foreground/50"
    },
    {
      title: "Location",
      value: "Namakkal, Tamil Nadu, India",
      description: "Open to remote & on-site work",
      icon: <MapPin className="w-8 h-8 text-purple-500" />,
      link: "https://www.google.com/maps/place/Namakkal,+Tamil+Nadu",
      color: "bg-purple-500/10",
      borderColor: "hover:border-purple-500/50"
    }
  ];

  return (
    <Section id="contact" className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-[120px] rounded-full z-[-1] pointer-events-none" />

      <SectionHeader
        title="Connect With Me"
        subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mt-16 px-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a 
              href={method.link} 
              target="_blank" 
              rel="noreferrer"
              className="block group h-full"
            >
              <Card className={`h-full border border-white/10 glass transition-all duration-300 ${method.borderColor} group-hover:-translate-y-2`}>
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <div className={`p-4 rounded-2xl ${method.color} transition-transform group-hover:scale-110 duration-300 relative`}>
                    {method.icon}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-foreground/40" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{method.title}</h3>
                    <p className="text-sm text-foreground/60 font-medium">{method.description}</p>
                  </div>
                  
                  <p className="text-[15px] font-semibold text-foreground/90 mt-2 break-all">
                    {method.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-20 p-8 glass rounded-3xl border border-white/10 max-w-3xl mx-auto"
      >
        <h4 className="text-2xl font-bold mb-4 italic text-primary">"Let's build something extraordinary together."</h4>
        <p className="text-foreground/70">
          Whether you have a specific project in mind or just want to chat about tech, 
          I'm just a click away.
        </p>
      </motion.div>
    </Section>
  );
}
