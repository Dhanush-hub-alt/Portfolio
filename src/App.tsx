import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroBackground } from "@/components/hero-background";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { GithubStats } from "@/components/github-stats";
import { Contact } from "@/components/contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBackground />
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="flex flex-col w-full overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GithubStats />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
