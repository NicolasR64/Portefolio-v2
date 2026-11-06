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
        <div className="relative isolate overflow-hidden">
            <svg className="absolute inset-0 -z-10 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="a" width="29" height="50.115" patternTransform="scale(2)" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="#d2dfcc"/><path fill="none" stroke="#1F3A2E" stroke-opacity="0.25" stroke-width="1.5" d="M14.498 16.858 0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z"/></pattern></defs><rect width="800%" height="800%" fill="url(#a)" transform="translate(0 -.46)"/>
            </svg>
          <section className="">
            <p>Test</p>
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