import AboutSection from "./components/AboutSection.tsx"
import ContactSection from "./components/ContactSection.tsx"
import ExperienceSection from "./components/ExperienceSection.tsx"
import Hero from "./components/Hero.tsx"
import ProjectSection from "./components/ProjectSection.tsx"
import SkillSection from "./components/SkillSection.tsx"
import WaveDivider from "./components/WaveDivider.tsx"
import { experiences, projects, skills } from "./cv"
import useReveal from "./hooks/useReveal.ts"

function App() {
  useReveal()

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 section-dark">
        <div className="flex justify-between items-center p-4 md:p-6">
          <a href="#hero" className="text-primary text-xl font-bold">Nicolas Ravaux</a>
          <div className="space-x-4">
            <a href="#about" className="nav-link text-accent">About</a>
            <a href="#experience" className="nav-link text-accent">Experience</a>
            <a href="#projects" className="nav-link text-accent">Projects</a>
            <a href="#skills" className="nav-link text-accent">Skills</a>
            <a href="#contact" className="nav-link text-accent">Contact</a>
          </div>
        </div>
      </nav>
      <main className="w-full">
        <Hero />
        <AboutSection />
        <div className="section-dark">
          <ExperienceSection experiences={experiences} />
        </div>
        <WaveDivider color="fill-background-dark" flip />
        <ProjectSection projects={projects} />
        <SkillSection skills={skills} />
        <WaveDivider color="fill-background-dark" />
        <div className="section-dark">
          <ContactSection />
        </div>
        <a href="#hero" aria-label="Back to top" className="bg-background p-2 fixed rounded-full bottom-5 right-5 animate-bounce">
          <svg className="size-6" fill="#2F5D46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="#2F5D46">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </a>
      </main>
    </>
  )
}
export default App   