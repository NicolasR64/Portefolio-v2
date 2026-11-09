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
        <div className="bg-background p-2 fixed rounded-full bottom-5 right-5 animate-bounce">
          <a href="#hero">
            <svg className="size-6" fill="#2F5D46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="#2F5D46">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </a>
        </div>
      </main>
    </>
  )
}
export default App   