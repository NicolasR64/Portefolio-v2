import { useEffect, useState } from "react"
import useInView from "../hooks/useInView.ts"

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
]

const ACTIVE_ZONE = "-45% 0px -54% 0px"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const close = () => setIsOpen(false)
    const heroVisible = useInView("hero", true)
    const aboutFocus = useInView("about", false, ACTIVE_ZONE, 0)
    const experienceFocus = useInView("experience", false, ACTIVE_ZONE, 0)
    const projectsFocus = useInView("projects", false, ACTIVE_ZONE, 0)
    const skillsFocus = useInView("skills", false, ACTIVE_ZONE, 0)
    const contactFocus = useInView("contact", false, ACTIVE_ZONE, 0)

    const sectionInView: Record<string, boolean> = {
        "#about": aboutFocus,
        "#experience": experienceFocus,
        "#projects": projectsFocus,
        "#skills": skillsFocus,
        "#contact": contactFocus,
    }
    const activeHref = NAV_LINKS.find((link) => sectionInView[link.href])?.href

    useEffect(() => {
        if (!isOpen) return

        document.body.style.overflow = "hidden"

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false)
        }
        const desktop = window.matchMedia("(min-width: 48rem)")
        const onDesktop = () => {
            if (desktop.matches) setIsOpen(false)
        }

        window.addEventListener("keydown", onKeyDown)
        desktop.addEventListener("change", onDesktop)

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", onKeyDown)
            desktop.removeEventListener("change", onDesktop)
        }
    }, [isOpen])

    return (
        <nav aria-label="Main" className="fixed top-0 left-0 w-full z-50 section-dark">
            <div className={`relative z-20 bg-background flex justify-between items-center p-4 md:p-6 motion-safe:transition-shadow duration-300 ${heroVisible ? "" : "shadow-lg"}`}>
                <a href="#hero" onClick={close} className="text-primary text-xl font-bold">Nicolas Ravaux</a>

                <div className="hidden md:flex gap-4">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} aria-current={activeHref === link.href ? "true" : undefined} className="nav-link text-accent">{link.label}</a>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 size-10 text-primary"
                >
                    <span className={`block h-0.5 w-6 bg-current motion-safe:transition duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-current motion-safe:transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-current motion-safe:transition duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            <div className="md:hidden fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    onClick={close}
                    aria-hidden="true"
                    className={`absolute inset-0 bg-black/50 motion-safe:transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"}`}
                />

                <div
                    id="mobile-menu"
                    className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-background shadow-2xl pt-28 px-8 flex flex-col gap-6 pointer-events-auto motion-safe:transition-all duration-300 ease-out ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}
                >
                    {NAV_LINKS.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            aria-current={activeHref === link.href ? "true" : undefined}
                            className={`nav-link self-start text-2xl font-serif text-accent motion-safe:transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                            style={{ transitionDelay: isOpen ? `${150 + index * 50}ms` : "0ms" }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
