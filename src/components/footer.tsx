import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-6 glass border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Dhanush Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Dhanush-hub-alt" target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/dhanush-kumar-b-3058962bb/" target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanush80729@gmail.com" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
