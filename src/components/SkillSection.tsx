import { SKILL_CATEGORIES, type Skill, type skill_categories } from "../type";
import { useState } from "react"

type SkillSectionProps = {
    skills: Skill[]
}


export default function SkillSection({ skills }: SkillSectionProps) {
    const [category, setCategory] = useState<skill_categories>(SKILL_CATEGORIES[0]);
    return (
        <section id="skills" className="place-content-center mx-auto py-12">
            <h2 className="text-primary">Skills</h2>
            <div className="flex flex-wrap mb-4">
                {SKILL_CATEGORIES.map((skillCategory) => (
                    <button key={skillCategory} onClick={() => setCategory(skillCategory)} className={`bg-primary/10 text-primary p-2 rounded-md m-1 hover:bg-primary/20 transition ${category === skillCategory ? "bg-primary/20" : ""}`}>
                        {skillCategory}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap" id="skillsContainer">
                {skills.filter(skill => skill.categories.includes(category)).map((skill) => (
                    <a key={skill.name} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center bg-primary/10 text-primary p-2 rounded-md m-1 hover:bg-primary/20 transition">
                        <img src={skill.image} alt={skill.name} className="w-6 h-6 mr-2" />
                        <span>{skill.name}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}