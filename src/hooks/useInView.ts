import { useEffect, useState } from "react"

export default function useInView(id: string, initialInView = false, rootMargin = "0px", threshold = 0.1) {
    const [inView, setInView] = useState(initialInView)

    useEffect(() => {
        const element = document.getElementById(id)
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting)
        }, { threshold, rootMargin })

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [id, rootMargin, threshold])

    return inView
}
