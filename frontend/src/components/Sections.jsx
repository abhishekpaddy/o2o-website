import React from "react";
import {
    Zap,
    AlertTriangle,
    Wrench,
    TrendingUp,
    Droplets,
    Recycle,
    Battery,
    Factory,
} from "lucide-react";
import { GlassCard } from "./GlassCard";

const Eyebrow = ({ children }) => (
    <span className="section-label">{children}</span>
);

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => (
    <div
        className={`max-w-3xl ${
            align === "center" ? "mx-auto text-center" : ""
        }`}
    >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-display font-black text-ocean text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05]">
            {title}
        </h2>
        {subtitle && (
            <p className="mt-5 text-inkblue text-base md:text-lg leading-relaxed">
                {subtitle}
            </p>
        )}
    </div>
);

// ------------- PROBLEM -------------
export const Problem = () => {
    const items = [
        {
            icon: Zap,
            title: "High energy cost",
            body: "SWRO consumes 3.5–4 Wh/L, requiring 50–80 bar of constant pressure — one of the most energy-intensive industrial processes.",
        },
        {
            icon: AlertTriangle,
            title: "Hazardous waste",
            body: "Brine ends up damaging marine ecosystems. Polysulfone membranes degrade over time, creating hazardous waste.",
        },
        {
            icon: Wrench,
            title: "Skilled dependency",
            body: "Extensive pre/post-treatment and skilled manpower make SWRO unaffordable to deploy in water-stressed regions.",
        },
        {
            icon: TrendingUp,
            title: "$31B market, stale tech",
            body: "Projected to reach $31B by 2030 (CAGR ~11.4%), yet the core technology hasn't fundamentally changed in decades.",
        },
    ];
    return (
        <section
            id="problem"
            data-testid="problem-section"
            className="relative py-24 md:py-32 px-6 md:px-10 bg-lavender"
        >
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    eyebrow="The Problem"
                    title="Desalination today is not environmentally sustainable."
                    subtitle="2.3 billion people face water scarcity. By 2030, demand will exceed supply by 40% — and the dominant fix could be making things worse."
                />
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.map((it, i) => (
                        <GlassCard
                            key={i}
                            className="p-7"
                            data-testid={`problem-card-${i}`}
                        >
                            <div className="w-11 h-11 rounded-xl bg-ocean/10 text-ocean flex items-center justify-center">
                                <it.icon size={20} />
                            </div>
                            <h3 className="mt-5 font-display font-bold text-ocean text-xl tracking-tight">
                                {it.title}
                            </h3>
                            <p className="mt-3 text-inkblue text-sm leading-relaxed">
                                {it.body}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ------------- PARADIGM -------------
export const Paradigm = () => (
    <section
        data-testid="paradigm-section"
        className="relative overflow-hidden bg-ocean-deep grain py-28 md:py-40 px-6 md:px-10"
    >
        <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
        >
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-30 animate-blob-drift"
                style={{
                    background:
                        "radial-gradient(circle, #138A72 0%, rgba(19,138,114,0) 60%)",
                    filter: "blur(90px)",
                }}
            />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
            <Eyebrow>The Paradigm Shift</Eyebrow>
            <h2 className="mt-6 font-display font-black text-white text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tighter">
                Desalination doesn't have to{" "}
                <span className="text-white/40">cost</span> energy.
                <br />
                It can{" "}
                <span className="text-energy italic">generate</span> it.
            </h2>
            <p className="mt-8 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                Our system transforms industrial waste into clean water and
                electricity through a revolutionary circular process. No energy
                input required — waste becomes fuel at ambient conditions.
            </p>
        </div>
    </section>
);

// ------------- PROCESS -------------
export const Process = () => {
    const steps = [
        {
            icon: Factory,
            n: "01",
            title: "Feed in waste",
            body: "Industrial acid and alkali waste streams are pumped into outer chambers — no energy input, no feedstock cost.",
        },
        {
            icon: Droplets,
            n: "02",
            title: "Deionize seawater",
            body: "Seawater flows through the central chamber. Ion-selective membranes pull salt ions out without high-pressure pumps.",
        },
        {
            icon: Battery,
            n: "03",
            title: "Harvest energy",
            body: "Neutralization energy from acid / alkali is harvested as electricity — producing drinking-grade freshwater simultaneously.",
        },
        {
            icon: Recycle,
            n: "04",
            title: "Close the loop",
            body: "The system runs at ambient temperature and pressure. Acid/alkali waste drives deionization in a fully circular process.",
        },
    ];
    return (
        <section
            id="technology"
            data-testid="technology-section"
            className="relative py-24 md:py-32 px-6 md:px-10 bg-lavender"
        >
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    eyebrow="How CPSD Works"
                    title="From waste to water to electricity."
                    subtitle="Climate-Positive Seawater Deionizer (CPSD) — four steps, one circular flow."
                />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                    {steps.map((s, i) => (
                        <GlassCard
                            key={i}
                            className="p-7 relative"
                            data-testid={`process-step-${i}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-teal/15 text-teal flex items-center justify-center">
                                    <s.icon size={22} />
                                </div>
                                <span className="font-display font-black text-ocean/10 text-5xl leading-none">
                                    {s.n}
                                </span>
                            </div>
                            <h3 className="mt-6 font-display font-bold text-ocean text-xl tracking-tight">
                                {s.title}
                            </h3>
                            <p className="mt-3 text-inkblue text-sm leading-relaxed">
                                {s.body}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ------------- PERFORMANCE -------------
export const Performance = () => {
    const stats = [
        {
            v: ">0 Wh/L",
            l: "Net Energy Generated",
            d: "A first for desalination — the system produces energy rather than consuming it.",
        },
        {
            v: "<500 ppm",
            l: "Water Quality Output",
            d: "Drinking-grade freshwater output meeting global potable standards.",
        },
        {
            v: "$0",
            l: "Feedstock Cost",
            d: "Operates on free industrial acid/alkali waste streams — turning a liability into fuel.",
        },
    ];
    return (
        <section
            data-testid="performance-section"
            className="relative py-24 md:py-32 px-6 md:px-10 bg-ocean-deep overflow-hidden grain"
        >
            <div
                className="absolute -top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full opacity-30 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, #A3E635 0%, rgba(163,230,53,0) 60%)",
                    filter: "blur(100px)",
                }}
            />
            <div className="relative max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <span className="section-label text-energy">
                        Performance
                    </span>
                    <h2 className="mt-4 font-display font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05]">
                        Three numbers that rewrite the category.
                    </h2>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            data-testid={`performance-stat-${i}`}
                            className="glass-dark rounded-2xl p-8 md:p-10 glass-card-hover"
                        >
                            <div className="font-display font-black text-energy text-5xl md:text-6xl tracking-tighter leading-none">
                                {s.v}
                            </div>
                            <div className="mt-4 text-white font-semibold text-lg">
                                {s.l}
                            </div>
                            <p className="mt-3 text-white/60 text-sm leading-relaxed">
                                {s.d}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ------------- CATEGORY LINE (replaces Comparison) -------------
export const CategoryLine = () => (
    <section
        data-testid="category-line-section"
        className="relative py-20 md:py-28 px-6 md:px-10 bg-lavender"
    >
        <div className="max-w-5xl mx-auto text-center">
            <span className="section-label">Category Leap</span>
            <p className="mt-6 font-display font-black text-ocean text-3xl md:text-5xl leading-[1.1] tracking-tighter">
                A third-generation leap — the only system that{" "}
                <span className="text-teal italic">generates</span> energy
                while producing freshwater.
            </p>
        </div>
    </section>
);

// ------------- MARKET (one-line) -------------
export const Market = () => (
    <section
        id="market"
        data-testid="market-section"
        className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 bg-ocean-deep grain"
    >
        <div
            className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full opacity-30 pointer-events-none animate-blob-drift"
            style={{
                background:
                    "radial-gradient(circle, #138A72 0%, rgba(19,138,114,0) 60%)",
                filter: "blur(100px)",
            }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
            <span className="section-label text-energy">Market</span>
            <h2 className="mt-6 font-display font-black text-white text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tighter">
                Industrial desalination is a{" "}
                <span className="text-energy">$30&nbsp;billion</span> market.
                <br />
                We're disrupting it.
            </h2>
        </div>
    </section>
);
