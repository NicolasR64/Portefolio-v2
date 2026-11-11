import type { Project } from "../type";
import TimelineItem from "./TimelineItem.tsx";

type ProjectSectionProps = {
    projects: Project[]
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
    return (
        <section id="projects" className="place-content-center mx-auto p-6 md:p-12">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <TimelineItem
                    key={project.title}
                    index={index}
                    title={project.title}
                    subtitle={`${project.type} · ${project.date}`}
                    description={project.description}
                    image={project.image}
                    links={project.links}
                    technologies={project.technologies}
                />
            ))}
        </section>
    )
}
