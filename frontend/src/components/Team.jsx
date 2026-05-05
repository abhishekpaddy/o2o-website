import React from "react";
import { Linkedin } from "lucide-react";
import { GlassCard } from "./GlassCard";

const team = [
    {
        name: "Dr. Purnima Jalihal",
        role: "Co-Founder / CTO",
        img: "https://customer-assets.emergentagent.com/job_startup-blur-design/artifacts/mnigi9gq_image.png",
        linkedin: "https://www.linkedin.com/in/purnima-jalihal-352511186/",
        bio: [
            "Former Director, National Institute of Ocean Technology, Chennai",
            "25+ years in ocean energy and desalination",
            "Led OTEC desalination for Lakshadweep & wave-energy programs",
        ],
    },
    {
        name: "Abhishek Padmanabhan",
        role: "Co-Founder / CEO",
        img: "https://customer-assets.emergentagent.com/job_startup-blur-design/artifacts/ri81mmva_image.png",
        linkedin: "https://www.linkedin.com/in/abhishekpaddy/",
        bio: [
            "Director, CoE in Energy Sciences at Atria University",
            "Ex-Tech Lead at SunEdison India (10,000+ solar water pumps)",
            "Cornell / IITB · Aditya Birla Scholar · Emergent Ventures Fellow",
        ],
    },
];

export const Team = () => (
    <section
        id="team"
        data-testid="team-section"
        className="relative py-24 md:py-32 px-6 md:px-10 bg-lavender"
    >
        <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
                <span className="section-label">The Team</span>
                <h2 className="mt-4 font-display font-black text-ocean text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05]">
                    Deep science. Deep water. Deep commitment.
                </h2>
                <p className="mt-5 text-inkblue text-base md:text-lg leading-relaxed">
                    A founding team with decades of combined expertise across
                    ocean energy, desalination, and industrial engineering.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                {team.map((m, i) => (
                    <GlassCard
                        key={i}
                        className="p-6 overflow-hidden"
                        data-testid={`team-card-${i}`}
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-square max-w-[240px] mb-6 bg-ocean/5">
                            <img
                                src={m.img}
                                alt={m.name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(15,42,68,0.35), transparent 40%)",
                                }}
                            />
                        </div>
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="font-display font-black text-ocean text-xl md:text-2xl tracking-tight">
                                    {m.name}
                                </h3>
                                <p className="mt-1 text-teal text-sm font-semibold uppercase tracking-widest">
                                    {m.role}
                                </p>
                            </div>
                            <a
                                href={m.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-ocean/5 hover:bg-ocean text-ocean hover:text-white flex items-center justify-center transition"
                                aria-label={`${m.name} LinkedIn`}
                                data-testid={`team-linkedin-${i}`}
                            >
                                <Linkedin size={15} />
                            </a>
                        </div>
                        <ul className="mt-5 space-y-2">
                            {m.bio.map((b, j) => (
                                <li
                                    key={j}
                                    className="flex items-start gap-2 text-inkblue text-sm leading-relaxed"
                                >
                                    <span className="mt-2 w-1 h-1 rounded-full bg-teal shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                ))}
            </div>
        </div>
    </section>
);

export default Team;
