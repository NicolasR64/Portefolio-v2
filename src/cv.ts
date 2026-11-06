import type { Experience, Project, Skill } from './type'
import easiLogo from './assets/img/Logo_Easi.gif'

export const projects: Project[] = [
    {
        title: "Portfolio",
        description: "My personal portfolio website, built with React and TypeScript.",
        date: "2023-01-01",
        image: easiLogo,
        links: [],
        technologies: ["React", "TypeScript", "CSS"],
        type: "Web Development"
    },
    {
        title: "Portfolio",
        description: "My personal portfolio website, built with React and TypeScript.",
        date: "2023-01-01",
        image: easiLogo,
        links: [],
        technologies: ["React", "TypeScript", "CSS"],
        type: "Web Development"
    },    
    {
        title: "Portfolio",
        description: "My personal portfolio website, built with React and TypeScript.",
        date: "2023-01-01",
        image: easiLogo,
        links: [],
        technologies: ["React", "TypeScript", "CSS"],
        type: "Web Development"
    }

]

export const experiences: Experience[] = [
    {
        title: "Software Developer – ERP Adfinity (Easi)",
        description: "Software developer on Adfinity, the ERP built by Easi and used by 10,000+ users. Full-stack development with WinDev/WLanguage, back-end REST APIs and SQL Server databases.",
        startDate: "2024-07-01",
        endDate: "2024-12-31",
        image: easiLogo,
        links: [],
        technologies: ["WinDev", "WLanguage", "SQL Server", "REST API", "C#"],
        type: "Professional Experience",
    },
    {
        title: "IT Consultant (Easi)",
        description: "Enterprise IT consultant at Easi (Nivelles), working on business software projects for clients before moving to the Adfinity ERP development team.",
        startDate: "2023-09-01",
        endDate: "2024-06-30",
        image: easiLogo,
        links: [],
        technologies: ["Javascript", "jQuery", "HTML", "CSS", "react", "Power Platform", "Lotus Notes"],
        type: "Professional Experience",
    },
    {
        title: "Internship (Easi)",
        description: "**Internship at Easi (Nivelles), working on business software projects for clients before moving to the Adfinity ERP development team.",
        startDate: "2023-02-01",
        endDate: "2023-05-31",
        image: easiLogo,
        links: [],
        technologies: ["WinDev", "SQL Server", "Power Platform"],
        type: "Professional Experience",
    }
]

export const skills: Skill[] = [
    {
        name: "React",
        image: "/images/react.png",
        link: "https://react.dev/",
        categories: ["Frontend"]
    },
    {
        name: "TypeScript",
        image: "/images/typescript.png",
        link: "https://www.typescriptlang.org/",
        categories: ["Frontend", "Backend"]
    },
    {
        name: "JavaScript",
        image: "/images/javascript.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        categories: ["Frontend"]
    },
    {
        name: "HTML",
        image: "/images/html.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        categories: ["Frontend"]
    },
    {
        name: "CSS",
        image: "/images/css.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        categories: ["Frontend"]
    },
    {
        name: "SQL Server",
        image: "/images/sqlserver.png",
        link: "https://www.microsoft.com/en-us/sql-server",
        categories: ["Database"]
    },
    {
        name: "WinDev",
        image: "/images/windev.png",
        link: "https://www.pcsoft.fr/windev/",
        categories: ["Frontend","Backend"]
    },
    {
        name: "WLanguage",
        image: "/images/wlanguage.png",
        link: "https://www.pcsoft.fr/wlanguage/",
        categories: ["Backend"]
    },
    {
        name: "Power Platform",
        image: "/images/powerplatform.png",
        link: "https://powerplatform.microsoft.com/",
        categories: ["Frontend","Backend"]
    },
    {
        name: "C#",
        image: "/images/csharp.png",
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        categories: ["Backend"]
    },
    {
        name: "jQuery",
        image: "/images/jquery.png",
        link: "https://jquery.com/",
        categories: ["Frontend"]
    },
    {
        name: "Lotus Notes",
        image: "/images/lotusnotes.png",
        link: "https://www.ibm.com/products/lotus-notes",
        categories: ["Frontend","Backend"]
    }
]