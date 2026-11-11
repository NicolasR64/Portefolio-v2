import type { Experience } from "../type";
import TimelineItem from "./TimelineItem.tsx";

type ExperiencesectionProps = {
    experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperiencesectionProps) {
    return (
        <section id="experience" className="place-content-center mx-auto p-6 md:p-12">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <TimelineItem
                    key={exp.startDate}
                    index={index}
                    title={exp.title}
                    subtitle={`${exp.startDate} - ${exp.endDate}`}
                    description={exp.description}
                    image={exp.image}
                    links={exp.links}
                    technologies={exp.technologies}
                />
            ))}
        </section>
    )
}
