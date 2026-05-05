import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
    const scrollToTech = () => {
        document
            .getElementById("technology")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-ocean-deep grain"
        >
            {/* Animated swirl layers */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {/* Deep core blue blob */}
                <div
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full opacity-80 mix-blend-screen animate-blob-drift"
                    style={{
                        background:
                            "radial-gradient(circle at 40% 40%, #1B3A5C 0%, rgba(15,42,68,0) 60%)",
                        filter: "blur(80px)",
                    }}
                />
                {/* Teal swirl */}
                <div
                    className="absolute top-[10%] left-[20%] w-[55vw] h-[55vw] rounded-full opacity-80 mix-blend-screen animate-blob-drift-alt"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, #138A72 0%, rgba(19,138,114,0) 65%)",
                        filter: "blur(90px)",
                    }}
                />
                {/* Energy lime pop */}
                <div
                    className="absolute top-[30%] right-[5%] w-[38vw] h-[38vw] rounded-full opacity-70 mix-blend-screen animate-blob-drift"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, #A3E635 0%, rgba(163,230,53,0) 60%)",
                        filter: "blur(70px)",
                        animationDuration: "26s",
                    }}
                />
                {/* Cyan highlight */}
                <div
                    className="absolute bottom-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full opacity-60 mix-blend-screen animate-blob-drift-alt"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, #64A5C5 0%, rgba(100,165,197,0) 60%)",
                        filter: "blur(80px)",
                        animationDuration: "32s",
                    }}
                />
            </div>

            {/* Soft bottom gradient to lavender */}
            <div
                className="absolute bottom-0 left-0 w-full h-60 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(231,231,247,0) 0%, #E7E7F7 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-32 w-full">
                <div className="max-w-4xl">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-energy mb-8 animate-rise-in"
                        data-testid="hero-eyebrow"
                    >
                        <Sparkles size={14} className="text-energy" />
                        <span className="text-xs font-semibold tracking-[0.22em] uppercase">
                            Climate-Positive Seawater Deionizer
                        </span>
                    </div>

                    <h1
                        data-testid="hero-heading"
                        className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter animate-rise-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        Ocean<span className="text-cyan">To</span>Oasis
                    </h1>

                    <p
                        className="mt-6 font-display font-light text-white/90 text-2xl md:text-4xl tracking-tight max-w-3xl animate-rise-in"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Climate{" "}
                        <span className="text-energy font-black">Positive</span>{" "}
                        Desalination.
                    </p>

                    <p
                        className="mt-6 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed animate-rise-in"
                        style={{ animationDelay: "0.3s" }}
                        data-testid="hero-subtext"
                    >
                        Desalination doesn't have to cost energy. With our Climate-Positive
                        Seawater Deionizer, it can generate it — turning industrial waste
                        streams into freshwater and electricity in one fully circular
                        process.
                    </p>

                    <div
                        className="mt-10 flex flex-wrap gap-4 animate-rise-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <button
                            onClick={scrollToTech}
                            data-testid="hero-cta-technology"
                            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-energy text-ocean font-bold text-sm tracking-wide hover:bg-white transition-all duration-300 shadow-[0_10px_40px_rgba(163,230,53,0.3)] hover:-translate-y-0.5"
                        >
                            Explore the technology
                            <ArrowDown
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                            />
                        </button>
                        <a
                            href="mailto:abhishekp@oceantooasis.in"
                            data-testid="hero-cta-contact"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-dark text-white font-semibold text-sm hover:bg-white/10 transition"
                        >
                            Talk to the team
                        </a>
                    </div>

                    {/* Inline stats strip */}
                    <div
                        className="mt-16 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl animate-rise-in"
                        style={{ animationDelay: "0.5s" }}
                        data-testid="hero-stat-strip"
                    >
                        {[
                            { v: ">0 Wh/L", l: "Net energy" },
                            { v: "<500 ppm", l: "Water quality" },
                            { v: "$0", l: "Feedstock cost" },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="glass-dark rounded-xl px-4 py-4"
                            >
                                <div className="font-display text-energy font-black text-xl md:text-2xl tracking-tight">
                                    {s.v}
                                </div>
                                <div className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                                    {s.l}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToTech}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition"
                aria-label="Scroll down"
                data-testid="hero-scroll-indicator"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                    Scroll
                </span>
                <ArrowDown size={18} className="animate-pulse-soft" />
            </button>
        </section>
    );
};

export default Hero;
