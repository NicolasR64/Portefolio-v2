import { contactLinks } from '../cv'

const currentYear = new Date().getFullYear()

export default function ContactSection() {
    return (
        <section id="contact" className="mx-auto px-4 pt-12 pb-20">
            <h2>Let's work together</h2>
            <p className="max-w-xl mx-auto text-lg leading-relaxed text-foreground/80 mb-12">
                I'm open to new opportunities and always happy to talk about a project.
                The fastest way to reach me is by email.
            </p>

            <div className="grid gap-4 lg:grid-cols-[auto_1fr_1fr] max-w-5xl mx-auto text-left">
                {contactLinks.map((link) => {
                    const isExternal = link.href.startsWith("http")
                    return (
                        <a
                            key={link.label}
                            href={link.href}
                            download={link.download || undefined}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="group flex items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 transition hover:border-primary/50 hover:bg-primary/10 reveal"
                        >
                            <span>
                                <span className="block text-sm uppercase tracking-widest text-accent mb-1">{link.label}</span>
                                <span className="block text-base sm:text-lg font-medium whitespace-nowrap">{link.value}</span>
                            </span>
                            <span className="text-primary text-2xl transition group-hover:translate-x-1" aria-hidden="true">→</span>
                        </a>
                    )
                })}
            </div>

            <p className="mt-16 text-sm text-foreground/60">
                © { currentYear } Nicolas Ravaux
            </p>
        </section>
    )
}
