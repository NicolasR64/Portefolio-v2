import { SKILL_CATEGORIES, type Skill, type skill_categories } from "../type";
import { useLayoutEffect, useRef, useState } from "react"

type SkillSectionProps = {
    skills: Skill[]
}


export default function SkillSection({ skills }: SkillSectionProps) {
    const [category, setCategory] = useState<skill_categories>(SKILL_CATEGORIES[0]);
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number>()

    useLayoutEffect(() => {
        const content = contentRef.current
        if (!content) return

        const observer = new ResizeObserver(() => setHeight(content.offsetHeight))
        observer.observe(content)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" className="place-content-center mx-auto p-6 md:p-12">
            <h2 className="text-primary">Skills</h2>
            <div className="flex flex-wrap mb-4">
                {SKILL_CATEGORIES.map((skillCategory) => (
                    <button key={skillCategory} onClick={() => setCategory(skillCategory)} className={`bg-primary p-2 rounded-md m-1 hover:bg-primary/20 hover:text-primary transition ${category === skillCategory ? "bg-primary/20 text-primary" : "text-background"}`}>
                        {skillCategory}
                    </button>
                ))}
            </div>
            <div className="overflow-hidden motion-safe:transition-[height] motion-safe:duration-500 ease-in-out" style={{ height }}>
                <div ref={contentRef} className="flex flex-wrap gap-2 justify-center min-h-32" id="skillsContainer">
                    {skills.filter(skill => skill.categories.includes(category)).map((skill, index) => (
                        <a key={category + skill.name} href={skill.link} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center bg-primary/10 text-primary p-4 rounded-md m-1 hover:bg-primary/20 transition w-3xs motion-safe:opacity-0 motion-safe:transform-[translateY(20px)] motion-safe:animate-[fadeInSkills_0.5s_ease_forwards]`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <img src={skill.image} alt={skill.name} loading="lazy" decoding="async" className="w-full mx-auto" />
                            <span>{skill.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
