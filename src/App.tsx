import ExperienceSection from "./components/ExperienceSection.tsx"
import { experiences } from "./cv"

function App() {
  return (
    <>
      <main className="w-full max-w-5xl mx-auto">
        <h1 className="">Hi, I'm Nicolas Ravaux</h1>
        <p className="">
          I'm a web developer and I love to create beautiful and functional websites.
        </p>
        <ExperienceSection experiences={experiences} />
      </main>
    </>
  )
}
export default App