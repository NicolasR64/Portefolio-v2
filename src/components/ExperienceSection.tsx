import type { Experience } from "../type";

type ExperiencesectionProps = {
    experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperiencesectionProps) {
    return (
        <section className="place-content-center mx-auto">
            <h2>Experience</h2>
            {experiences.map((exp) => (
                <div key={exp.startDate} className="grid sm:grid-row md:grid-cols-12 pt-8">
                    <div className="md:col-span-7 md:col-start-1 md:col-end-7 md:row-start-1 h-auto w-full flex items-center justify-center">
                        <img className="w-full rounded-xl" src={exp.image} alt={exp.title} />
                    </div>
                    <div className="md:col-span-5 md:col-start-6 md:col-end-12 md:row-start-1 pl-4 py-12 text-right">
                        <h3 className="text-primary">{exp.title}</h3>
                        <p className="text-accent">{exp.startDate} - {exp.endDate}</p>
                        <p className="relative bg-background p-4 my-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]">{exp.description}</p>
                        <div className="links">
                            {exp.links.map((link, index) => (
                                <a key={index} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                            ))}
                        </div>
                        <div className="flex flex-wrap flex-row-reverse mt-2">
                            {exp.technologies.map((tech, index) => (
                                <span className="bg-primary/10 text-primary p-2 rounded-md m-1" key={index}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
