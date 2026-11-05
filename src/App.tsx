import ExperienceSection from "./components/ExperienceSection.tsx"
import ProjectSection from "./components/ProjectSection.tsx"
import WaveDivider from "./components/WaveDivider.tsx"
import { experiences, projects } from "./cv"

function App() {
  return (
    <>
      <main className="w-full">
        <h1 className="">Hi, I'm Nicolas Ravaux</h1>
        <p className="">
          I'm a web developer and I love to create beautiful and functional websites.
        </p>
        <WaveDivider color="fill-background-dark" />
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