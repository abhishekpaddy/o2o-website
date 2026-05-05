import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_254b404b-7873-4515-bdac-426c3efec3f4/artifacts/x61qgwzc_o2o%20logo%20-%20Copy.png";

const links = [
    { label: "Home", id: "home" },
    { label: "Technology", id: "technology" },
    { label: "Market", id: "market" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
];

export const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    return (
        <header
            data-testid="site-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-lavender/80 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_24px_rgba(15,42,68,0.05)]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
                <button
                    onClick={() => scrollTo("home")}
                    className="flex items-center gap-3 group"
                    data-testid="nav-logo"
                >
                    <img
                        src={LOGO_URL}
                        alt="OceanToOasis"
                        className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-12"
                    />
                    <span className="font-display font-black text-ocean tracking-tight text-lg hidden sm:block">
                        Ocean<span className="text-teal">To</span>Oasis
                    </span>
                </button>

                <nav className="hidden md:flex items-center gap-1">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scrollTo(l.id)}
                            data-testid={`nav-link-${l.id}`}
                            className="px-4 py-2 rounded-full text-sm font-medium text-ocean/80 hover:text-ocean hover:bg-white/60 transition-all duration-300"
                        >
                            {l.label}
                        </button>
                    ))}
                    <a
                        href="mailto:abhishekp@oceantooasis.in"
                        data-testid="nav-cta"
                        className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ocean text-white text-sm font-semibold hover:bg-ocean-mid transition-all duration-300 shadow-[0_6px_24px_rgba(15,42,68,0.2)] hover:-translate-y-0.5"
                    >
                        Get in touch
                    </a>
                </nav>

                <button
                    className="md:hidden p-2 rounded-full bg-white/50 border border-white/70"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    data-testid="nav-mobile-toggle"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden glass-light mx-4 mb-4 rounded-2xl p-4 flex flex-col gap-1" data-testid="nav-mobile-menu">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scrollTo(l.id)}
                            data-testid={`nav-mobile-link-${l.id}`}
                            className="text-left px-4 py-3 rounded-xl hover:bg-white/60 text-ocean font-medium transition"
                        >
                            {l.label}
                        </button>
                    ))}
                    <a
                        href="mailto:abhishekp@oceantooasis.in"
                        className="mt-2 text-center px-5 py-3 rounded-xl bg-ocean text-white font-semibold"
                    >
                        Get in touch
                    </a>
                </div>
            )}
        </header>
    );
};

export default Nav;
