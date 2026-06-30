import { CalendarDays, Phone } from 'lucide-react';
import { PublicLogo } from './public-logo';

const defaultNavItems = ['Home', 'Services', 'Doctors', 'Pricing', 'Testimonials', 'Contact'];

type PublicHeaderProps = {
    activeItem?: string;
    navItems?: string[];
};

export function PublicHeader({ activeItem = 'Home', navItems = defaultNavItems }: PublicHeaderProps) {
    return (
        <header className="sticky top-0 z-20 border-b border-[#eef2f7] bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
                <PublicLogo />
                <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`relative text-sm font-medium transition hover:text-[#2563eb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40 ${
                                item === activeItem ? 'text-[#2563eb]' : 'text-[#0f172a]'
                            }`}
                        >
                            {item}
                            {item === activeItem && (
                                <span className="absolute -bottom-[31px] left-0 h-1 w-full rounded-full bg-[#2563eb]" />
                            )}
                        </a>
                    ))}
                </nav>
                <div className="hidden items-center gap-5 md:flex">
                    <a href="tel:02112345678" className="flex items-center gap-2 text-sm font-semibold text-[#2563eb]">
                        <Phone className="h-5 w-5" />
                        Emergency?
                    </a>
                    <a
                        href="#booking"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#2563eb] px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.24)] transition hover:bg-[#1d4ed8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40"
                    >
                        <CalendarDays className="h-4 w-4" />
                        Book Appointment
                    </a>
                </div>
            </div>
        </header>
    );
}
