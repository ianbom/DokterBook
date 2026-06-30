import { Head } from '@inertiajs/react';
import type { ComponentType, SVGProps } from 'react';
import {
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    CircleHelp,
    Clock,
    CreditCard,
    FileText,
    Globe2,
    Lock,
    MapPin,
    MessageCircle,
    Pencil,
    ReceiptText,
    ShieldCheck,
    Star,
    Tag,
    User,
} from 'lucide-react';
import { PublicFooter } from '@/components/public/public-footer';
import { PublicHeader } from '@/components/public/public-header';

type DetailRow = {
    label: string;
    value: string;
    icon: ComponentType<{ className?: string }>;
};

const appointmentRows: DetailRow[] = [
    { label: 'Service', value: 'Scaling', icon: ToothIcon },
    { label: 'Date', value: 'Wednesday, 14 May 2025', icon: CalendarDays },
    { label: 'Time', value: '09:30 WIB', icon: Clock },
    { label: 'Duration', value: '45 minutes', icon: Clock },
    { label: 'Clinic Location', value: 'DentaCare Clinic - Jl. Senyum No. 10, Jakarta', icon: MapPin },
    { label: 'Time Zone', value: 'Western Indonesian Time', icon: Globe2 },
];

const patientRows: DetailRow[] = [
    { label: 'Full Name', value: 'Ian Ale Hansyah', icon: User },
    { label: 'NIK', value: '3578••••••••1234', icon: CreditCard },
    { label: 'WhatsApp Number', value: '08••••••••678', icon: MessageCircle },
    { label: 'Notes', value: 'Please contact me via WhatsApp if there are schedule updates.', icon: FileText },
];

const benefits = [
    { label: 'Easy reschedule', text: 'Change your appointment whenever you need.', icon: CalendarDays },
    { label: 'Instant confirmation', text: 'Get confirmation right after booking.', icon: ShieldCheck },
    { label: 'Certified dentists', text: 'Experienced professionals you can trust.', icon: ToothIcon },
    { label: 'Transparent pricing', text: 'No hidden fees, ever.', icon: Tag },
];

const tags = ['General Dentist', 'Scaling', 'Check-up', 'Whitening'];

function ToothIcon({ className, strokeWidth = 2 }: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} className={className} aria-hidden="true">
            <path d="M7.5 3.5c1.4 0 2.3.7 3 1.2.9.7 2.1.7 3 0 .7-.5 1.6-1.2 3-1.2 2.8 0 4.5 2.1 4.5 5.1 0 2.5-1.2 4.6-2.1 6.6-.7 1.5-1.1 3-1.4 4.6-.2 1-.8 1.7-1.6 1.7-1 0-1.4-1-1.8-2.4l-.8-2.7c-.3-1-.7-1.4-1.3-1.4s-1 .4-1.3 1.4l-.8 2.7c-.4 1.4-.8 2.4-1.8 2.4-.8 0-1.4-.7-1.6-1.7-.3-1.6-.7-3.1-1.4-4.6C4.2 13.2 3 11.1 3 8.6c0-3 1.7-5.1 4.5-5.1Z" />
        </svg>
    );
}

export default function Review() {
    return (
        <>
            <Head title="Review Booking" />
            <div className="min-h-dvh bg-[#fbfdff] font-sans text-[#101b46]">
                <PublicHeader activeItem="" />
                <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
                    <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <span className="inline-flex rounded-full border border-[#d7e6ff] bg-[#f4f8ff] px-4 py-2 text-sm font-bold text-[#006bff]">Review Booking</span>
                            <h1 className="mt-7 text-5xl font-bold tracking-[-0.04em] text-[#101b46] md:text-6xl">Review Your Booking</h1>
                            <p className="mt-5 max-w-md text-xl leading-9 text-[#66749c]">Please review all details below before confirming your dental appointment.</p>
                        </div>
                        <Stepper />
                    </section>

                    <section className="mt-14 overflow-hidden rounded-xl border border-[#d9e2ef] bg-white shadow-[0_20px_60px_-48px_rgba(15,23,42,0.42)]">
                        <div className="grid lg:grid-cols-[440px_1fr]">
                            <DoctorColumn />
                            <ReviewDetails />
                        </div>
                        <ActionBar />
                    </section>

                    <BenefitStrip />
                </main>
                <PublicFooter
                    services={['Scaling', 'Tooth Filling', 'Tooth Extraction', 'Teeth Whitening', 'Root Canal Treatment', 'Dental Check-up']}
                    infoLinks={['About Us', 'Patient Guide', 'Insurance', 'FAQ', 'Blog', 'Careers']}
                />
            </div>
        </>
    );
}

function Stepper() {
    const steps = ['Choose Service', 'Select Date & Time', 'Patient Details', 'Review Booking'];

    return (
        <div className="grid grid-cols-4 items-start gap-2">
            {steps.map((step, index) => {
                const active = index === 3;

                return (
                    <div key={step} className="relative text-center">
                        {index < 3 && <span className={`absolute left-1/2 top-6 h-px w-full ${index === 2 ? 'bg-[#006bff]' : 'bg-[#a9b8d6]'}`} />}
                        <span className={`relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-xl font-bold ${active ? 'border-[#006bff] bg-[#006bff] text-white shadow-[0_10px_22px_rgba(0,107,255,0.24)]' : 'border-[#a9b8d6] bg-white text-[#101b46]'}`}>
                            {index + 1}
                        </span>
                        <p className={`mt-5 text-sm font-semibold ${active ? 'text-[#006bff]' : 'text-[#101b46]'}`}>{index + 1}. {step}</p>
                    </div>
                );
            })}
        </div>
    );
}

function DoctorColumn() {
    return (
        <aside className="border-b border-[#d9e2ef] px-8 py-8 lg:border-r lg:border-b-0 lg:px-10">
            <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=760"
                alt="Dr. Amelia Putri portrait"
                className="h-[380px] w-full rounded-lg object-cover object-top"
            />
            <h2 className="mt-7 text-3xl font-bold tracking-tight text-[#101b46]">Dr. Amelia Putri</h2>
            <p className="mt-3 text-lg font-semibold text-[#006bff]">General Dentist</p>
            <p className="mt-2 text-base text-[#66749c]">10+ years experience</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-lg font-bold">4.8</span>
                <span className="flex text-[#006bff]" aria-label="4.8 rating">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
                </span>
                <span className="text-sm text-[#66749c]">(280 reviews)</span>
            </div>
            <p className="mt-7 max-w-sm leading-7 text-[#415071]">Experienced in preventive care, scaling, fillings, and routine dental check-ups.</p>
            <div className="mt-9 border-y border-[#d9e2ef] py-7">
                <p className="flex items-center gap-3 text-base text-[#66749c]"><Clock className="h-5 w-5 text-[#101b46]" /> Available&nbsp; Mon-Sat, 09:00-17:00</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
                {tags.map((tag) => <span key={tag} className="rounded-full border border-[#d7e6ff] bg-[#f4f8ff] px-5 py-3 text-sm font-semibold text-[#006bff]">{tag}</span>)}
            </div>
            <div className="mt-10 border-t border-[#d9e2ef] pt-8">
                <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d7e6ff] bg-[#f4f8ff] text-[#006bff]"><BadgeCheck className="h-8 w-8" /></span>
                    <div>
                        <p className="font-bold text-[#101b46]">Certified dentist</p>
                        <p className="mt-2 leading-7 text-[#415071]">Committed to your oral health and safety.</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

function ReviewDetails() {
    return (
        <section className="px-8 py-8 lg:px-10">
            <DetailSection title="Appointment Details" rows={appointmentRows} />
            <DetailSection title="Patient Details" rows={patientRows} className="mt-9 border-t border-[#d9e2ef] pt-8" />
            <section className="mt-9 border-t border-[#d9e2ef] pt-8">
                <h2 className="text-2xl font-bold tracking-tight text-[#101b46]">Booking Summary</h2>
                <div className="mt-6 max-w-xl space-y-5">
                    <PriceRow icon={ReceiptText} label="Service Fee" value="Rp350.000" />
                    <PriceRow icon={Tag} label="Admin Fee" value="Rp0" />
                    <div className="border-t border-[#d9e2ef] pt-5">
                        <div className="flex items-center justify-between text-2xl font-bold">
                            <span>Total</span>
                            <span className="text-[#006bff]">Rp350.000</span>
                        </div>
                    </div>
                </div>
                <p className="mt-6 flex items-center gap-3 text-base font-semibold text-[#16a34a]"><CheckCircle2 className="h-5 w-5" /> No online payment required. Payment will be handled at the clinic.</p>
            </section>
            <section className="mt-7 border-t border-[#d9e2ef] pt-7">
                <h2 className="text-2xl font-bold tracking-tight text-[#101b46]">Important Notes</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-[#415071] marker:text-[#006bff]">
                    <li>Please arrive 10-15 minutes before your appointment.</li>
                    <li>Bring your ID card for verification.</li>
                    <li>Contact the clinic if you need to reschedule.</li>
                    <li>If you are running late, please inform us in advance.</li>
                </ul>
            </section>
        </section>
    );
}

function DetailSection({ title, rows, className = '' }: { title: string; rows: DetailRow[]; className?: string }) {
    return (
        <section className={className}>
            <h2 className="text-2xl font-bold tracking-tight text-[#101b46]">{title}</h2>
            <div className="mt-6 space-y-6">
                {rows.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="grid gap-3 text-base md:grid-cols-[260px_1fr] md:items-start">
                        <p className="flex items-center gap-5 text-[#415071]"><Icon className="h-6 w-6 shrink-0 text-[#006bff]" /> {label}</p>
                        <p className="font-medium leading-7 text-[#101b46]">{value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function PriceRow({ icon: Icon, label, value }: { icon: ComponentType<{ className?: string }>; label: string; value: string }) {
    return (
        <div className="flex items-center justify-between gap-6 text-base">
            <p className="flex items-center gap-5 text-[#415071]"><Icon className="h-6 w-6 text-[#006bff]" /> {label}</p>
            <p className="font-medium text-[#101b46]">{value}</p>
        </div>
    );
}

function ActionBar() {
    return (
        <div className="border-t border-[#d9e2ef] px-8 py-8 lg:px-10">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-center md:px-40">
                <button type="button" className="inline-flex h-14 items-center justify-center gap-4 rounded-md bg-[#006bff] px-8 text-base font-bold text-white shadow-[0_12px_24px_rgba(0,107,255,0.22)] transition hover:bg-[#0057d8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40">
                    <Lock className="h-5 w-5" /> Confirm Booking
                </button>
                <a href="/book" className="inline-flex h-14 items-center justify-center gap-4 rounded-md border border-[#d9e2ef] bg-white px-8 text-base font-bold text-[#006bff] transition hover:border-[#006bff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40">
                    <Pencil className="h-5 w-5" /> Back to Edit
                </a>
                <a href="tel:02112345678" className="inline-flex h-14 items-center justify-center gap-3 px-4 text-base font-bold text-[#006bff] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40">
                    <CircleHelp className="h-5 w-5" /> Need Help?
                </a>
            </div>
        </div>
    );
}

function BenefitStrip() {
    return (
        <section className="mt-8 rounded-xl border border-[#d9e2ef] bg-white px-8 py-6">
            <div className="grid gap-7 md:grid-cols-4">
                {benefits.map(({ label, text, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-5 md:border-r md:border-[#d9e2ef] md:pr-7 md:last:border-r-0">
                        <Icon className="h-11 w-11 shrink-0 text-[#006bff]" />
                        <div>
                            <p className="font-bold text-[#101b46]">{label}</p>
                            <p className="mt-2 text-sm leading-6 text-[#415071]">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
