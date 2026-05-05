import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Contact = () => (
    <section
        id="contact"
        data-testid="contact-section"
        className="relative overflow-hidden bg-ocean-deep grain py-24 md:py-32 px-6 md:px-10"
    >
        <div
            className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full opacity-30 pointer-events-none animate-blob-drift"
            style={{
                background:
                    "radial-gradient(circle, #138A72 0%, rgba(19,138,114,0) 60%)",
                filter: "blur(100px)",
            }}
        />
        <div
            className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-30 pointer-events-none animate-blob-drift-alt"
            style={{
                background:
                    "radial-gradient(circle, #A3E635 0%, rgba(163,230,53,0) 60%)",
                filter: "blur(100px)",
            }}
        />

        <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <span className="section-label text-energy">
                        Let's build this
                    </span>
                    <h2 className="mt-5 font-display font-black text-white text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05]">
                        Ready to turn the tide?
                    </h2>
                    <p className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed">
                        We're raising $290K to scale our CPSD prototype from
                        bench to industrial pilot. Investors, industrial
                        partners, and policy stakeholders — let's talk.
                    </p>
                    <a
                        href="mailto:abhishekp@oceantooasis.in?subject=OceanToOasis%20%E2%80%94%20Let%27s%20talk"
                        data-testid="contact-primary-cta"
                        className="mt-10 group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-energy text-ocean font-bold text-base hover:bg-white transition-all duration-300 shadow-[0_10px_40px_rgba(163,230,53,0.3)] hover:-translate-y-1"
                    >
                        Email the founders
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>

                <div className="glass-dark rounded-3xl p-8 md:p-10 space-y-6">
                    <a
                        href="mailto:abhishekp@oceantooasis.in"
                        className="flex items-start gap-5 group"
                        data-testid="contact-email"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-energy/15 text-energy flex items-center justify-center shrink-0 group-hover:bg-energy group-hover:text-ocean transition">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                                Email
                            </div>
                            <div className="mt-1 text-white font-display font-bold text-lg md:text-xl tracking-tight break-all">
                                abhishekp@oceantooasis.in
                            </div>
                        </div>
                    </a>

                    <div className="h-px bg-white/10" />

                    <a
                        href="tel:+919757418360"
                        className="flex items-start gap-5 group"
                        data-testid="contact-phone"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-teal/20 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition">
                            <Phone size={20} />
                        </div>
                        <div>
                            <div className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                                Phone
                            </div>
                            <div className="mt-1 text-white font-display font-bold text-lg md:text-xl tracking-tight">
                                +91 97574 18360
                            </div>
                        </div>
                    </a>

                    <div className="h-px bg-white/10" />

                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <div className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                                Based in
                            </div>
                            <div className="mt-1 text-white font-display font-bold text-lg md:text-xl tracking-tight">
                                Chennai & Bengaluru, India
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
