import type { Experience } from "../type";

type ExperiencesectionProps = {
    experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperiencesectionProps) {
    return (
        <section className="experience-card">
            <h2>Experience</h2>
            {experiences.map((exp) => (
                <div key={exp.startDate} className="experience-card">
                    <img src={exp.image} alt={exp.title} />
                    <h3>{exp.title}</h3>
                    <p>{exp.description}</p>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <div className="links">
                        {exp.links.map((link, index) => (
                            <a key={index} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        ))}
                    </div>
                    <div className="technologies">
                        {exp.technologies.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
