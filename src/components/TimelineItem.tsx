type TimelineItemProps = {
    index: number
    title: string
    subtitle: string
    description: string
    image: string
    links: string[]
    technologies: string[]
}

export default function TimelineItem({ index, title, subtitle, description, image, links, technologies }: TimelineItemProps) {
    const isEven = index % 2 === 0
    const imageColumns = isEven ? "md:col-start-1 md:col-end-7" : "md:col-start-7 md:col-end-13"
    const textColumns = isEven ? "md:col-start-7 md:col-end-13" : "md:col-start-1 md:col-end-7"
    const textAlign = isEven ? "text-right" : "text-left"
    const overlap = isEven ? "md:-ml-24" : "md:-mr-24"
    const technologiesAlign = isEven ? "flex-row-reverse" : "flex-row"

    return (
        <div className="grid sm:grid-row md:grid-cols-12 pt-8 reveal">
            <div className={`${imageColumns} md:row-start-1 h-auto w-full flex items-center justify-center`}>
                <img className="w-full rounded-xl" src={image} alt={title} loading="lazy" decoding="async" />
            </div>
            <div className={`${textColumns} md:row-start-1 pl-4 py-6 md:py-12 ${textAlign}`}>
                <h3>{title}</h3>
                <p className="text-accent">{subtitle}</p>
                <p className={`relative z-10 ${overlap} bg-background p-4 my-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]`}>{description}</p>
                <div>
                    {links.map((link) => (
                        <a key={link} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                    ))}
                </div>
                <div className={`flex flex-wrap ${technologiesAlign} mt-2`}>
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-primary/10 text-primary p-2 rounded-md m-1">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
