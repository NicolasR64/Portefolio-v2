import AboutSection from "./components/AboutSection.tsx"
import ContactSection from "./components/ContactSection.tsx"
import ExperienceSection from "./components/ExperienceSection.tsx"
import Hero from "./components/Hero.tsx"
import Navbar from "./components/Navbar.tsx"
import ProjectSection from "./components/ProjectSection.tsx"
import SkillSection from "./components/SkillSection.tsx"
import WaveDivider from "./components/WaveDivider.tsx"
import { experiences, projects, skills } from "./cv"
import useInView from "./hooks/useInView.ts"
import useReveal from "./hooks/useReveal.ts"

function App() {
  useReveal()
  const heroVisible = useInView("hero", true)

  return (
    <>
      <Navbar />
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
        <a href="#hero" aria-label="Back to top" className={`bg-background p-2 fixed rounded-full bottom-5 right-5 motion-safe:transition-all motion-safe:duration-500 ease-in-out ${heroVisible ? "opacity-0 translate-y-4 pointer-events-none invisible" : "opacity-100 translate-y-0 visible motion-safe:delay-500 motion-safe:animate-bounce"}`}>
          <svg className="size-6" fill="#2F5D46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="#2F5D46">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </a>
      </main>
    </>
  )
}
export default App   