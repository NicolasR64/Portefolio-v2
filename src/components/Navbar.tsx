const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
]

export default function Navbar() {
    return (
        <nav aria-label="Main" className="fixed top-0 left-0 w-full z-50 section-dark">
            <div className="flex justify-between items-center p-4 md:p-6">
                <a href="#hero" className="text-primary text-xl font-bold">Nicolas Ravaux</a>
                <div className="space-x-4">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link text-accent">{link.label}</a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
