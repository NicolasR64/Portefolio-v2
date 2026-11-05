type WaveDividerProps = {
    color?: string
    flip?: boolean
    className?: string
}

export default function WaveDivider({ color = "fill-background", flip = false, className = "" }: WaveDividerProps) {
    return (
        <svg
            className={`block w-full ${color} ${flip ? "rotate-180 bottom-1" : "top-1"} ${className} relative`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path
                d="M0,288L60,261.3C120,235,240,181,360,176C480,171,600,213,720,213.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />     
        </svg>
    )
}
