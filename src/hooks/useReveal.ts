import { useLayoutEffect } from "react"

export default function useReveal() {
    useLayoutEffect(() => {
        const root = document.documentElement
        root.classList.add("reveal-ready")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        )

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

        return () => {
            observer.disconnect()
            root.classList.remove("reveal-ready")
        }
    }, [])
}
