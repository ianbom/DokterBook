import { Head } from '@inertiajs/react';
import { CalendarDays, Heart, ShieldCheck, Star, Users } from 'lucide-react';
import { PublicFooter } from '@/components/public/public-footer';
import { PublicHeader } from '@/components/public/public-header';

const chips = [
    'All Doctors',
    'General Dentist',
    'Orthodontist',
    'Cosmetic Dentist',
    'Implant Specialist',
    'Pediatric Dentist',
    'Oral Surgeon',
];

const doctors = [
    {
        name: 'Dr. Amelia Putri',
        specialty: 'General Dentist',
        experience: '10+ years experience',
        rating: '4.8',
        reviews: '280',
        badge: 'Available Today',
        image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=420',
        tags: ['Whitening', 'Veneers', 'Gum & Design'],
        next: 'Today, 15:00',
    },
    {
        name: 'Dr. Raka Pratama',
        specialty: 'Orthodontist',
        experience: '10+ years experience',
        rating: '4.9',
        reviews: '656',
        badge: 'Top Rated',
        image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=420',
        tags: ['Braces', 'Invisalign', 'Aligners'],
        next: 'Today, 13:30',
    },
    {
        name: 'Dr. Nadine Lestari',
        specialty: 'Pediatric Dentist',
        experience: '6+ years experience',
        rating: '4.8',
        reviews: '240',
        badge: 'New Patient Friendly',
        image: 'https://images.pexels.com/photos/5214955/pexels-photo-5214955.jpeg?auto=compress&cs=tinysrgb&w=420',
        tags: ['Kids Care', 'Preventive', 'Sealants'],
        next: 'Tomorrow, 09:30',
    },
    {
        name: 'Dr. Bima Ardiansyah',
        specialty: 'Implant Specialist',
        experience: '12+ years experience',
        rating: '4.9',
        reviews: '142',
        badge: 'Top Rated',
        image: 'https://images.pexels.com/photos/5452292/pexels-photo-5452292.jpeg?auto=compress&cs=tinysrgb&w=420',
        tags: ['Implants', 'Bone Graft', 'All on 4'],
        next: 'Today, 11:00',
    },
    {
        name: 'Dr. Sinta Maharani',
        specialty: 'General Dentist',
        experience: '7+ years experience',
        rating: '4.8',
        reviews: '110',
        badge: 'Available Today',
        image: 'https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=420',
        tags: ['Cleaning', 'Fillings', 'Check-up'],
        next: 'Today, 14:00',
    },
    {
        name: 'Dr. Kevin Wijaya',
        specialty: 'Oral Surgeon',
        experience: '11+ years experience',
        rating: '4.9',
        reviews: '131',
        badge: 'Top Rated',
        image: 'https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=420',
        tags: ['Wisdom Teeth', 'Surgery', 'Extractions'],
        next: 'Today, 16:00',
    },
];

const trustItems = [
    { label: 'Certified dentists', icon: ShieldCheck },
    { label: '4.9 Google rating', icon: Star },
    { label: '2,000+ happy patients', icon: Users },
];

function Stars() {
    return (
        <span className="flex text-[#2563eb]" aria-label="Five star rating">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
            ))}
        </span>
    );
}

export default function Welcome() {
    return (
        <>
            <Head title="DentaCare Clinic" />
            <div className="min-h-dvh bg-[#fbfdff] font-sans text-[#0f172a]">
                <PublicHeader activeItem="Doctors" />

                <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
                    <section className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.25fr]">
                        <div>
                            <p className="text-sm font-semibold text-[#2563eb]">Our dental experts</p>
                            <h1 className="mt-5 max-w-xl text-5xl font-bold leading-tight tracking-[-0.04em] text-[#0f172a] md:text-6xl">
                                Meet the Dentists Behind Your Healthy Smile
                            </h1>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748b]">
                                Choose experienced dental professionals for general care, cosmetic treatment, orthodontics,
                                implants, and family dentistry.
                            </p>
                            <div className="mt-8 grid gap-4 border-y border-[#e2e8f0] py-5 sm:grid-cols-3">
                                {trustItems.map(({ label, icon: Icon }) => (
                                    <div key={label} className="flex items-center gap-3 sm:border-r sm:border-[#e2e8f0] sm:last:border-r-0">
                                        <Icon className="h-5 w-5 shrink-0 text-[#2563eb]" />
                                        <p className="text-sm font-semibold text-[#0f172a]">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img
                            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="DentaCare Clinic dentists in a bright clinic"
                            className="h-[320px] w-full rounded-[1.25rem] object-cover object-center shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] md:h-[410px]"
                        />
                    </section>

                    <section className="mt-16 border-t border-[#e2e8f0] pt-10">
                        <div className="flex gap-6 overflow-x-auto border-b border-[#e2e8f0] pb-4 md:flex-wrap md:overflow-visible">
                            {chips.map((chip, index) => (
                                <button
                                    key={chip}
                                    className={`shrink-0 border-b-2 pb-3 text-sm font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40 ${
                                        index === 0
                                            ? 'border-[#2563eb] text-[#2563eb]'
                                            : 'border-transparent text-[#64748b] hover:border-[#bfdbfe] hover:text-[#2563eb]'
                                    }`}
                                    type="button"
                                >
                                    {chip}
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">Doctors</p>
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f172a]">Browse Our Dentists</h2>
                            </div>
                            <p className="max-w-md text-sm leading-6 text-[#64748b]">
                                Compare specialties, available schedules, and treatment focus before booking.
                            </p>
                        </div>

                        <div className="mt-7 grid border-y border-[#e2e8f0] md:grid-cols-2 lg:grid-cols-3 lg:border-l">
                            {doctors.map((doctor) => (
                                <DoctorItem key={doctor.name} doctor={doctor} />
                            ))}
                        </div>
                    </section>

                    <section className="mt-14 border-y border-[#e2e8f0] py-8">
                        <div className="grid gap-7 md:grid-cols-3">
                            {trustItems.map(({ label, icon: Icon }) => (
                                <div key={label} className="flex items-center gap-4 md:border-r md:border-[#e2e8f0] md:last:border-r-0">
                                    <Icon className="h-8 w-8 shrink-0 text-[#2563eb]" />
                                    <p className="text-base font-bold leading-6 text-[#0f172a]">{label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                <PublicFooter activeLink="Doctors" />
            </div>
        </>
    );
}

function DoctorItem({ doctor }: { doctor: (typeof doctors)[number] }) {
    return (
        <article className="group flex flex-col border-b border-[#e2e8f0] bg-transparent p-5 transition hover:bg-white lg:border-r">
            <div className="relative">
                <img
                    src={doctor.image}
                    alt={`${doctor.name} portrait`}
                    className="h-[220px] w-full rounded-xl object-cover object-top shadow-[0_18px_50px_-36px_rgba(15,23,42,0.5)]"
                />
                <p className="absolute left-3 top-3 text-xs font-bold text-[#2563eb]">{doctor.badge}</p>
                <button
                    type="button"
                    className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-[#0f172a] backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40"
                    aria-label={`Save ${doctor.name}`}
                >
                    <Heart className="h-5 w-5" />
                </button>
            </div>

            <div className="flex flex-1 flex-col pt-5">
                <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#0f172a]">{doctor.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-[#2563eb]">{doctor.specialty}</p>
                    <p className="mt-1 text-sm text-[#64748b]">{doctor.experience}</p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-[#0f172a]">{doctor.rating}</span>
                    <Stars />
                    <span className="text-xs text-[#64748b]">({doctor.reviews} reviews)</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {doctor.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold text-[#2563eb]">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-5 border-t border-[#e2e8f0] pt-4">
                    <p className="text-sm text-[#0f172a]">
                        Next available: <span className="font-semibold text-[#2563eb]">{doctor.next}</span>
                    </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                    <a
                        href="/book"
                        className="inline-flex h-10 items-center gap-2 rounded-md bg-[#2563eb] px-4 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition hover:bg-[#1d4ed8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40"
                    >
                        <CalendarDays className="h-4 w-4" />
                        Book Appointment
                    </a>
                    <a href="#" className="text-xs font-semibold text-[#2563eb] transition hover:text-[#1d4ed8] hover:underline">
                        View Profile -&gt;
                    </a>
                </div>
            </div>
        </article>
    );
}
