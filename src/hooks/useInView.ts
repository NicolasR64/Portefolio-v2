import { useEffect, useState } from "react"

export default function useInView(id: string, initialInView = false) {
    const [inView, setInView] = useState(initialInView)

    useEffect(() => {
        const element = document.getElementById(id)
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting)
        }, { threshold: 0.1 })

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [id])

    return inView
}
