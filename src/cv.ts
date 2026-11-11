import type { Experience, Project, Skill, ContactLink } from './type'
import easiLogo from './assets/img/Logo_Easi.gif'

export const projects: Project[] = [
    {
        title: "Redroosters – Ice hockey team manager",
        description: "Web application built for the Redroosters ice hockey club as a five-person team project for the Internet Technology course. Members can register, manage their profile and confirm their attendance at events, while admins organise events, leagues and invitations, with automatic email reminders. Built on a hand-made PHP MVC architecture.",
        date: "2022",
        image: easiLogo,
        links: ["https://github.com/NicolasR64/Redroosters"],
        technologies: ["PHP", "MVC", "SQL", "JavaScript", "PHPMailer", "HTML", "CSS"],
        type: "School project for a real client"
    },
    {
        title: "Portfolio v1 – Rebuilt from a visual reference",
        description: "Personal challenge: rebuild an existing portfolio using only its visual appearance as a reference, without looking at its code. Once finished, I compared my implementation with the original to analyse the differences and improve my front-end skills.",
        date: "2022",
        image: easiLogo,
        links: ["https://github.com/NicolasR64/Portefolio"],
        technologies: ["JavaScript", "HTML", "CSS", "particles.js"],
        type: "Personal project"
    }
]

export const experiences: Experience[] = [
    {
        title: "Software Developer – Adfinity ERP (Easi, Nivelles)",
        description: "Full-stack developer on Adfinity, a financial ERP used by more than 10,000 people, working on strategic modules: inventory, purchasing, sales and signing. I fixed critical bugs and maintained a large WinDev codebase, then spent my last year building and deploying the back-end REST API supporting the move to a web version, including a PDA integration.",
        startDate: "Jul 2024",
        endDate: "Jun 2026",
        image: easiLogo,
        links: [],
        technologies: ["WinDev", "WLanguage", "SQL Server", "REST API", "PDA integration"],
        type: "Professional Experience",
    },
    {
        title: "Microsoft Consultant (Easi, Nivelles)",
        description: "Consultant on the Microsoft ecosystem, designing and delivering business solutions with the Power Platform. I analysed critical business flows, designed asynchronous workflows and real-time synchronisation between systems, and integrated external APIs such as Stripe payments and webhooks.",
        startDate: "Sep 2023",
        endDate: "Jun 2024",
        image: easiLogo,
        links: [],
        technologies: ["Power Apps", "Power Automate", "Azure Functions", "SharePoint Online", "Stripe API", "Webhooks"],
        type: "Professional Experience",
    },
    {
        title: "Internship (Easi, Nivelles)",
        description: "Final internship of my bachelor's degree in application development at HELHa, which led to my hiring at Easi.",
        startDate: "Feb 2023",
        endDate: "May 2023",
        image: easiLogo,
        links: [],
        technologies: ["WinDev", "SQL Server", "Power Platform"],
        type: "Professional Experience",
    }
]

export const skills: Skill[] = [
    {
        name: "React",
        image: easiLogo,
        link: "https://react.dev/",
        categories: ["Frontend"]
    },
    {
        name: "TypeScript",
        image: easiLogo,
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

export const contactLinks: ContactLink[] = [
    {
        label: "Email",
        value: "nicolasravaux64@gmail.com",
        href: "mailto:nicolasravaux64@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "Nicolas Ravaux",
        href: "https://www.linkedin.com/in/nicolas-ravaux-232114290/",
    },
    {
        label: "GitHub",
        value: "NicolasR64",
        href: "https://github.com/NicolasR64",
    },
    {
        label: "Resume",
        value: "Download PDF",
        href: "/RavauxNicolas_CV.pdf",
        download: true,
    },
]