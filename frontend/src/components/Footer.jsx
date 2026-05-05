import React from "react";

const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_254b404b-7873-4515-bdac-426c3efec3f4/artifacts/x61qgwzc_o2o%20logo%20-%20Copy.png";

export const Footer = () => (
    <footer
        data-testid="site-footer"
        className="relative bg-ocean-deep text-white/70 border-t border-white/5"
    >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                    <img
                        src={LOGO_URL}
                        alt="OceanToOasis"
                        className="h-11 w-11 object-contain"
                    />
                    <div>
                        <div className="font-display font-black text-white text-xl tracking-tight">
                            Ocean<span className="text-teal-light">To</span>
                            Oasis
                        </div>
                        <div className="text-white/50 text-xs tracking-widest uppercase font-semibold">
                            Climate-Positive Desalination
                        </div>
                    </div>
                </div>

                <nav className="flex flex-wrap gap-6 text-sm">
                    {[
                        ["Home", "home"],
                        ["Technology", "technology"],
                        ["Market", "market"],
                        ["Team", "team"],
                        ["Contact", "contact"],
                    ].map(([label, id]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="hover:text-white transition"
                            data-testid={`footer-link-${id}`}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
                <div>
                    © {new Date().getFullYear()} OceanToOasis. All rights
                    reserved.
                </div>
                <div>
                    Turning industrial waste into freshwater and electricity.
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
