export type Project = {
    title: string,
    description: string,
    date: string,
    image: string,
    links: string[],
    technologies: string[],
    type: string
}

export type Skill = {
    name: string,
    image: string,
    link: string
    categories: skill_categories[]
}
export const SKILL_CATEGORIES = ["Frontend", "Backend", "Database", "DevOps", "Other"] as const
export type skill_categories = typeof SKILL_CATEGORIES[number]

export type Experience = {
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    image: string,
    links: string[],
    technologies: string[],
    type: "Professional Experience" | "Personal Project"
}


