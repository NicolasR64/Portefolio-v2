import type { Experience, Project, Skill, ContactLink } from './type'
import easiLogo from './assets/img/Logo_Easi.gif'
import portfolioLogo from './assets/img/portfolio-hero.png'
import angularLogo from './assets/img/angular.png'
import bootstrapLogo from './assets/img/bootstrap.svg'
import canvaLogo from './assets/img/canva.svg'
import cssLogo from './assets/img/css.svg'
import figmaLogo from './assets/img/figma.svg'
import gitLogo from './assets/img/git.svg'
import githubLogo from './assets/img/github.svg'
import htmlLogo from './assets/img/html.svg'
import javaLogo from './assets/img/java.svg'
import javascriptLogo from './assets/img/javascript.png'
import jqueryLogo from './assets/img/jquery.png'
import sqlLogo from './assets/img/sql.png'
import ssmsLogo from './assets/img/ssms.png'
import typescriptLogo from './assets/img/typescript.svg'
import windevLogo from './assets/img/windev.png'

export const projects: Project[] = [
    {
        title: "Portfolio v2 – Designed and built from scratch",
        description: "The site you are browsing, designed and developed from scratch around a forest theme. It features a parallax hero, scroll-triggered animations, a filterable skills section, a navbar that highlights the current section and a mobile side menu. Built with custom React hooks on top of IntersectionObserver and ResizeObserver, with accessibility in mind: keyboard navigation, reduced-motion support and checked colour contrast.",
        date: "2026",
        image: portfolioLogo,
        links: [],
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        type: "Personal project"
    },
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
        name: "Angular",
        image: angularLogo,
        link: "https://angular.dev/",
        categories: ["Frontend"]
    },
    {
        name: "React",
        image: easiLogo,
        link: "https://react.dev/",
        categories: ["Frontend"]
    },
    {
        name: "TypeScript",
        image: typescriptLogo,
        link: "https://www.typescriptlang.org/",
        categories: ["Frontend", "Backend"]
    },
    {
        name: "JavaScript",
        image: javascriptLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        categories: ["Frontend"]
    },
    {
        name: "HTML",
        image: htmlLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        categories: ["Frontend"]
    },
    {
        name: "CSS",
        image: cssLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        categories: ["Frontend"]
    },
    {
        name: "Bootstrap",
        image: bootstrapLogo,
        link: "https://getbootstrap.com/",
        categories: ["Frontend"]
    },
    {
        name: "jQuery",
        image: jqueryLogo,
        link: "https://jquery.com/",
        categories: ["Frontend"]
    },
    {
        name: "Java",
        image: javaLogo,
        link: "https://dev.java/",
        categories: ["Backend"]
    },
    {
        name: "WinDev",
        image: windevLogo,
        link: "https://www.pcsoft.fr/windev/",
        categories: ["Frontend", "Backend"]
    },
    {
        name: "WLanguage",
        image: windevLogo,
        link: "https://www.pcsoft.fr/wlanguage/",
        categories: ["Backend"]
    },
    {
        name: "Power Platform",
        image: easiLogo,
        link: "https://powerplatform.microsoft.com/",
        categories: ["Frontend", "Backend"]
    },
    {
        name: "C#",
        image: easiLogo,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        categories: ["Backend"]
    },
    {
        name: "Lotus Notes",
        image: easiLogo,
        link: "https://www.ibm.com/products/lotus-notes",
        categories: ["Frontend", "Backend"]
    },
    {
        name: "SQL Server",
        image: sqlLogo,
        link: "https://www.microsoft.com/en-us/sql-server",
        categories: ["Database"]
    },
    {
        name: "SSMS",
        image: ssmsLogo,
        link: "https://learn.microsoft.com/en-us/ssms/",
        categories: ["Database"]
    },
    {
        name: "Git",
        image: gitLogo,
        link: "https://git-scm.com/",
        categories: ["DevOps"]
    },
    {
        name: "GitHub",
        image: githubLogo,
        link: "https://github.com/",
        categories: ["DevOps"]
    },
    {
        name: "Figma",
        image: figmaLogo,
        link: "https://www.figma.com/",
        categories: ["Other"]
    },
    {
        name: "Canva",
        image: canvaLogo,
        link: "https://www.canva.com/",
        categories: ["Other"]
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