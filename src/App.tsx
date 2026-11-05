import ExperienceSection from "./components/ExperienceSection.tsx"
import { experiences } from "./cv"

function App() {
  return (
    <>
      <main>
        <h1 className="title">Hi, I'm Nicolas Ravaux</h1>
        <p className="description">
          I'm a web developer and I love to create beautiful and functional websites.
        </p>
        <ExperienceSection experiences={experiences} />
      </main>
    </>
  )
}
export default App