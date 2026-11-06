/**
 * Hero "lisière de forêt" : fond vert profond + collines superposées.
 * La dernière couche a la couleur sauge de la section About pour une transition sans couture.
 * Les couches du fond bougent avec un léger effet de parallaxe au scroll (voir .parallax dans index.css).
 */

type HillLayer = {
    path: string
    fill: string
    /** Distance parcourue pendant le scroll : plus la couche est loin, plus elle "traîne" */
    shift: string
}

const hills: HillLayer[] = [
    {
        path: "M0,192C160,128,320,96,480,128C640,160,720,96,880,80C1040,64,1200,128,1440,112L1440,320L0,320Z",
        fill: "#2A4C3B",
        shift: "[--parallax-shift:140px]",
    },
    {
        path: "M0,224C200,176,360,208,540,176C720,144,860,192,1020,176C1180,160,1300,200,1440,176L1440,320L0,320Z",
        fill: "#3D6A52",
        shift: "[--parallax-shift:90px]",
    },
    {
        path: "M0,256C180,224,340,272,520,248C700,224,840,264,1000,248C1160,232,1300,264,1440,240L1440,320L0,320Z",
        fill: "#6E957A",
        shift: "[--parallax-shift:40px]",
    },
    {
        // Couche de premier plan : couleur de la section About, ne bouge pas
        path: "M0,288C240,264,420,304,640,288C860,272,1080,300,1260,286C1340,280,1400,284,1440,288L1440,320L0,320Z",
        fill: "#E3EBDF",
        shift: "",
    },
]

export default function Hero() {
    return (
        <header className="section-dark relative isolate overflow-hidden min-h-svh flex items-center bg-linear-to-b from-background-dark to-[#142820]">
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-48 md:pb-64 pt-24 text-center">
                <p className="text-accent uppercase tracking-[0.3em] text-sm mb-6">Software Developer</p>
                <h1 className="text-5xl md:text-7xl leading-tight mb-6">
                    Nicolas Ravaux
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed opacity-90 mb-10">
                    I build reliable business applications — from REST APIs and databases
                    to the interfaces people use every day.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-primary text-background-dark font-medium px-7 py-3 transition hover:brightness-110"
                    >
                        See my projects
                    </a>
                    <a
                        href="#about"
                        className="rounded-full border border-primary text-primary font-medium px-7 py-3 transition hover:bg-primary/10"
                    >
                        About me
                    </a>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 pointer-events-none" aria-hidden="true">
                {hills.map((layer, index) => (
                    <svg
                        key={index}
                        className={`absolute inset-0 w-full h-full ${layer.shift ? `parallax ${layer.shift}` : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path fill={layer.fill} d={layer.path} />
                    </svg>
                ))}
            </div>
        </header>
    )
}
