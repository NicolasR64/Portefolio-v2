import ExperienceSection from "./components/ExperienceSection.tsx"
import Hero from "./components/Hero.tsx"
import ProjectSection from "./components/ProjectSection.tsx"
import WaveDivider from "./components/WaveDivider.tsx"
import { experiences, projects } from "./cv"
import useReveal from "./hooks/useReveal.ts"

function App() {
  useReveal()

  return (
    <>
      <main className="w-full">
        <Hero />
        <div id="about" className="relative isolate overflow-hidden">
            <svg className="absolute inset-0 -z-10 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="a" width="29" height="50.115" patternTransform="scale(2)" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="#E3EBDF"/><path fill="none" stroke="#1F3A2E" strokeOpacity="0.1" strokeWidth="1" d="M14.498 16.858 0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z"/></pattern>
              </defs>
              <rect width="800%" height="800%" fill="url(#a)" transform="translate(0 -.46)"/>
            </svg>
          <section className="mx-auto px-4 py-20">
            <div className="bg-background rounded-2xl shadow-[0_8px_30px_rgba(31,58,46,0.12)] px-6 py-10 md:px-14 md:py-14">
              <h2>About me</h2>
              <div className="max-w-2xl mx-auto space-y-4 text-lg leading-relaxed">
                <p>
                  Software developer with <strong>3 years of experience</strong> in demanding environments,
                  specialised in designing and delivering complete business solutions. I quickly pick up
                  new tech stacks and enjoy working closely with teams on complex projects.
                </p>
                <p>
                  Rigorous, autonomous and quality-driven, with solid experience in API architecture,
                  business data management and technical migrations.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 md:divide-x divide-border mt-12 pt-10 border-t border-border">
                <div className="md:px-4">
                  <h3 className="text-sm uppercase tracking-widest text-accent mb-3">Education</h3>
                  <p className="font-medium">Bachelor in Application Development</p>
                  <p className="text-muted">HELHa, Charleroi · 2020 – 2023</p>
                </div>
                <div className="md:px-4">
                  <h3 className="text-sm uppercase tracking-widest text-accent mb-3">Languages</h3>
                  <p>French <span className="text-muted">· native</span></p>
                  <p>English <span className="text-muted">· professional</span></p>
                </div>
                <div className="md:px-4">
                  <h3 className="text-sm uppercase tracking-widest text-accent mb-3">Interests</h3>
                  <p>Programming</p>
                  <p>Ice hockey</p>
                  <p>Gardening &amp; horticulture</p>
                </div>
              </div>
            </div>
          </section>
          <WaveDivider color="fill-background-dark" />
        </div>
        <div className="section-dark">
          <ExperienceSection experiences={experiences} />
        </div>
        <WaveDivider color="fill-background-dark" flip />
        <ProjectSection projects={projects} />
      </main>
    </>
  )
}
export default App   