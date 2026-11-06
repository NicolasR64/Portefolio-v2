import type { Project } from "../type";

type ProjectSectionProps = {
    projects: Project[]
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
    return (
        <section id="projects" className="place-content-center mx-auto">
            <h2 className="text-primary">Projects</h2>
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                const imageColumns = isEven ? "md:col-start-1 md:col-end-7" : "md:col-start-6 md:col-end-13"
                const textColumns  = isEven ? "md:col-start-7 md:col-end-13" : "md:col-start-1 md:col-end-6"
                const textAlign    = isEven ? "text-right" : "text-left"
                const overlap      = isEven ? "md:-ml-24" : "md:-mr-24"
                const technologiesAlign = isEven ? "flex-row-reverse" : "flex-row"
                    return (
                        <div key={project.title} className="grid sm:grid-row md:grid-cols-12 pt-8 reveal">
                            <div className={`${imageColumns} md:row-start-1 h-auto w-full flex items-center justify-center`}>
                                <img className="w-full rounded-xl" src={project.image} alt={project.title} />
                            </div>
                            <div className={`${textColumns} md:row-start-1 pl-4 py-12 ${textAlign}`}>
                                <h3 className="text-primary">{project.title}</h3>
                                <p className="text-accent">{project.type} · {project.date}</p>
                                <p className={`relative z-10 ${overlap} bg-background p-4 my-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]`}>{project.description}</p>
                                <div className="">
                                    {project.links.map((link, index) => (
                                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                    ))}
                                </div>
                                <div className={`flex flex-wrap ${technologiesAlign} mt-2`}>
                                    {project.technologies.map((tech, index) => (
                                        <span className="bg-primary/10 text-primary p-2 rounded-md m-1" key={index}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
            })}
        </section>
    )
}
