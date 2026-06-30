import { Clock, Facebook, Globe2, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { PublicLogo } from './public-logo';

const defaultNavItems = ['Home', 'Services', 'Doctors', 'Pricing', 'Testimonials', 'Contact'];
const defaultServices = ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Pediatric Dentistry'];
const defaultInfoLinks = ['About Us', 'Testimonials', 'Insurance', 'Blog', 'FAQs'];

type PublicFooterProps = {
    activeLink?: string;
    navItems?: string[];
    services?: string[];
    infoLinks?: string[];
};

export function PublicFooter({
    activeLink,
    navItems = defaultNavItems,
    services = defaultServices,
    infoLinks = defaultInfoLinks,
}: PublicFooterProps) {
    return (
        <footer className="border-t border-[#eef2f7] bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.45fr]">
                <div>
                    <PublicLogo />
                    <p className="mt-5 max-w-[30ch] text-sm leading-7 text-[#334155]">
                        Providing exceptional dental care with compassion, expertise, and advanced technology.
                    </p>
                    <div className="mt-5 flex gap-3">
                        {[Facebook, Instagram, Youtube, Globe2].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#64748b] text-white transition hover:bg-[#2563eb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40"
                                aria-label="Social link"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-10 text-sm text-[#64748b]">(c) 2025 DentaCare Clinic. All rights reserved.</p>
                </div>
                <FooterColumn title="Quick Links" links={navItems} active={activeLink} />
                <FooterColumn title="Our Services" links={services} />
                <FooterColumn title="Information" links={infoLinks} />
                <div>
                    <h2 className="text-sm font-bold text-[#0f172a]">Contact Us</h2>
                    <div className="mt-5 space-y-4 text-sm text-[#334155]">
                        <p className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-[#0f172a]" />
                            (021) 1234 5678
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-[#0f172a]" />
                            hello@dentacareclinic.com
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-[#0f172a]" />
                            Jl. Senyum No. 10, Jakarta 12345
                        </p>
                        <p className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-[#0f172a]" />
                            Mon - Sat: 09:00 - 19:00
                        </p>
                    </div>
                    <div className="mt-10 flex gap-5 text-sm text-[#334155]">
                        <a href="#" className="hover:text-[#2563eb]">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-[#2563eb]">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links, active }: { title: string; links: string[]; active?: string }) {
    return (
        <div className="border-[#e2e8f0] lg:border-l lg:pl-10">
            <h2 className="text-sm font-bold text-[#0f172a]">{title}</h2>
            <div className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className={`text-sm transition hover:text-[#2563eb] ${
                            active === link ? 'font-semibold text-[#2563eb]' : 'text-[#334155]'
                        }`}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}
