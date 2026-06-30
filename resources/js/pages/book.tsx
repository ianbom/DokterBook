import { Head } from '@inertiajs/react';
import { useState } from 'react';
import type { ComponentType, SVGProps } from 'react';
import {
    ArrowRight,
    CalendarDays,
    Check,
    ClipboardCheck,
    Clock,
    CreditCard,
    MessageCircle,
    Moon,
    ShieldCheck,
    Sparkles,
    Star,
    Sun,
    Sunrise,
    Tag,
    User,
} from 'lucide-react';
import { PublicFooter } from '@/components/public/public-footer';
import { PublicHeader } from '@/components/public/public-header';

const services = [
    { name: 'Scaling', duration: '45 mins', price: 'From Rp 350.000', icon: ToothSparkleIcon },
    { name: 'Consultation', duration: '30 mins', price: 'From Rp 150.000', icon: MessageCircle },
    { name: 'Tooth Filling', duration: '45 mins', price: 'From Rp 450.000', icon: ToothIcon },
    { name: 'Braces Consultation', duration: '30 mins', price: 'From Rp 250.000', icon: BracesIcon },
    { name: 'Tooth Extraction', duration: '30 mins', price: 'From Rp 500.000', icon: ToothPinIcon },
    { name: 'Teeth Whitening', duration: '60 mins', price: 'From Rp 1.200.000', icon: Sparkles },
    { name: 'Dental Check-up', duration: '30 mins', price: 'From Rp 200.000', icon: ClipboardCheck },
    { name: 'Root Canal Treatment', duration: '90 mins', price: 'From Rp 1.800.000', icon: ToothIcon },
];

const timeGroups = [
    { label: 'Morning', range: '06:00 - 12:00', icon: Sunrise, times: ['09:00', '09:30', '10:00', '10:30'], disabled: ['10:30'] },
    { label: 'Afternoon', range: '12:00 - 16:00', icon: Sun, times: ['13:00', '13:30', '15:00', '15:30'], disabled: ['15:30'] },
    { label: 'Evening', range: '16:00 - 20:00', icon: Moon, times: ['16:30', '17:00', '19:00', '19:30'], disabled: ['19:00', '19:30'] },
];

const dateOptions = ['Wednesday, 14 May 2025', 'Thursday, 15 May 2025', 'Friday, 16 May 2025', 'Saturday, 17 May 2025'];

const benefits = [
    { label: 'Easy reschedule', icon: CalendarDays },
    { label: 'Instant confirmation', icon: ShieldCheck },
    { label: 'Certified dentists', icon: ToothIcon },
    { label: 'Transparent pricing', icon: Tag },
];

const tags = ['General Dentist', 'Scaling', 'Check-up', 'Whitening'];

type PatientDetails = {
    fullName: string;
    nik: string;
    whatsapp: string;
};

type PatientErrors = Partial<Record<keyof PatientDetails, string>>;

function ToothIcon({ className, strokeWidth = 2 }: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} className={className} aria-hidden="true">
            <path d="M7.5 3.5c1.4 0 2.3.7 3 1.2.9.7 2.1.7 3 0 .7-.5 1.6-1.2 3-1.2 2.8 0 4.5 2.1 4.5 5.1 0 2.5-1.2 4.6-2.1 6.6-.7 1.5-1.1 3-1.4 4.6-.2 1-.8 1.7-1.6 1.7-1 0-1.4-1-1.8-2.4l-.8-2.7c-.3-1-.7-1.4-1.3-1.4s-1 .4-1.3 1.4l-.8 2.7c-.4 1.4-.8 2.4-1.8 2.4-.8 0-1.4-.7-1.6-1.7-.3-1.6-.7-3.1-1.4-4.6C4.2 13.2 3 11.1 3 8.6c0-3 1.7-5.1 4.5-5.1Z" />
        </svg>
    );
}

function ToothSparkleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <span className="relative inline-flex">
            <ToothIcon {...props} />
            <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-[#2563eb]" />
        </span>
    );
}

function ToothPinIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <span className="relative inline-flex">
            <ToothIcon {...props} />
            <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-[#2563eb]" />
        </span>
    );
}

function BracesIcon({ className }: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className={className} aria-hidden="true">
            <rect x="2" y="6" width="10" height="12" rx="4" />
            <rect x="13" y="6" width="10" height="12" rx="4" />
            <rect x="25" y="6" width="10" height="12" rx="4" />
            <rect x="36" y="6" width="10" height="12" rx="4" />
            <path d="M2 12h44" />
        </svg>
    );
}

function Stars() {
    return (
        <span className="flex text-[#2563eb]" aria-label="4.8 rating">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
            ))}
        </span>
    );
}

export default function Book() {
    return (
        <>
            <Head title="Book Appointment" />
            <div className="min-h-dvh bg-[#fbfdff] font-sans text-[#0f172a]">
                <PublicHeader activeItem="" />
                <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
                    <section className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:items-end">
                        <div>
                            <p className="text-sm font-semibold text-[#2563eb]">Online booking</p>
                            <h1 className="mt-5 max-w-md text-5xl font-bold leading-tight tracking-[-0.04em] text-[#0f172a] md:text-6xl">
                                Book Your Dental Appointment
                            </h1>
                            <p className="mt-6 max-w-md text-lg leading-8 text-[#64748b]">
                                Choose a treatment, reserve a time, and share your details. The clinic will confirm your visit.
                            </p>
                        </div>
                        <StepProgress />
                    </section>

                    <section id="booking" className="mt-16 grid gap-12 border-t border-[#e2e8f0] pt-12 lg:grid-cols-[340px_1fr]">
                        <DoctorPanel />
                        <BookingFlow />
                    </section>

                    <TrustRow />
                </main>
                <PublicFooter />
            </div>
        </>
    );
}

function StepProgress() {
    return (
        <div className="grid grid-cols-4 items-start gap-3">
            {['Service', 'Date & Time', 'Details', 'Confirm'].map((label, index) => (
                <div key={label} className="relative text-center">
                    {index < 3 && <span className={`absolute left-1/2 top-5 h-px w-full ${index === 0 ? 'bg-[#2563eb]' : 'bg-[#cbd5e1]'}`} />}
                    <span className={`relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold ${index === 0 ? 'border-[#2563eb] bg-[#2563eb] text-white' : 'border-[#cbd5e1] bg-[#fbfdff] text-[#64748b]'}`}>
                        {index + 1}
                    </span>
                    <p className={`mt-4 text-xs font-semibold md:text-sm ${index === 0 ? 'text-[#0f172a]' : 'text-[#64748b]'}`}>{label}</p>
                </div>
            ))}
        </div>
    );
}

function DoctorPanel() {
    return (
        <aside className="lg:sticky lg:top-28 lg:self-start">
            <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=640"
                alt="Dr. Amelia Putri portrait"
                className="h-[390px] w-full rounded-[1.25rem] object-cover object-top shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]"
            />
            <div className="mt-7 space-y-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#0f172a]">Dr. Amelia Putri</h2>
                    <p className="mt-3 text-base font-semibold text-[#2563eb]">General Dentist</p>
                    <p className="mt-2 text-base text-[#64748b]">10+ years experience</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-lg font-bold">4.8</span>
                    <Stars />
                    <span className="text-sm text-[#64748b]">(280 reviews)</span>
                </div>
                <p className="max-w-sm leading-7 text-[#334155]">Experienced in preventive care, scaling, fillings, and routine dental check-ups.</p>
                <div className="border-y border-[#e2e8f0] py-5">
                    <p className="flex items-center gap-3 text-sm text-[#334155]">
                        <Clock className="h-5 w-5 text-[#2563eb]" />
                        Available: Mon-Sat, 09:00-17:00
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-sm font-semibold text-[#2563eb]">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}

function BookingFlow() {
    const [selectedService, setSelectedService] = useState('Scaling');
    const [selectedDate, setSelectedDate] = useState(dateOptions[0]);
    const [selectedTime, setSelectedTime] = useState('09:30');
    const [patientDetails, setPatientDetails] = useState<PatientDetails>({
        fullName: '',
        nik: '',
        whatsapp: '',
    });
    const [errors, setErrors] = useState<PatientErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const updateDetail = (field: keyof PatientDetails, value: string) => {
        setPatientDetails((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
        setSubmitted(false);
    };

    const continueBooking = () => {
        const nextErrors: PatientErrors = {};

        if (!patientDetails.fullName.trim()) nextErrors.fullName = 'Full name is required.';
        if (!patientDetails.nik.trim()) nextErrors.nik = 'NIK is required.';
        if (!patientDetails.whatsapp.trim()) nextErrors.whatsapp = 'WhatsApp number is required.';

        setErrors(nextErrors);
        setSubmitted(Object.keys(nextErrors).length === 0);
    };

    return (
        <section className="space-y-12">
            <section>
                <SectionHeader eyebrow="Step 1" title="Choose Service" />
                <div className="mt-5 grid border-y border-[#e2e8f0] md:grid-cols-2 md:border-l">
                    {services.map(({ name, duration, price, icon: Icon }, index) => {
                        const selected = selectedService === name;

                        return (
                            <button
                                key={name}
                                type="button"
                                onClick={() => {
                                    setSelectedService(name);
                                    setSubmitted(false);
                                }}
                                className={`group relative flex min-h-[116px] items-center gap-5 border-b border-[#e2e8f0] px-5 py-5 text-left transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40 md:border-r ${index > 5 ? 'md:border-b-0' : ''} ${selected ? 'bg-white' : ''}`}
                            >
                                {selected && <span className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-[#2563eb]" />}
                                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${selected ? 'bg-[#eff6ff] text-[#2563eb]' : 'bg-transparent text-[#64748b]'}`}>
                                    <Icon className="h-6 w-6" />
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block text-base font-bold text-[#0f172a]">{name}</span>
                                    <span className="mt-2 block text-sm text-[#64748b]">{duration} <span className="px-2">/</span> {price}</span>
                                </span>
                                {selected && <Check className="h-5 w-5 text-[#2563eb]" />}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section>
                <SectionHeader eyebrow="Step 2" title="Select Date" />
                <div className="mt-5 grid border-y border-[#e2e8f0] md:grid-cols-4 md:border-l">
                    {dateOptions.map((date) => {
                        const selected = selectedDate === date;

                        return (
                            <button
                                key={date}
                                type="button"
                                onClick={() => {
                                    setSelectedDate(date);
                                    setSubmitted(false);
                                }}
                                className={`flex min-h-20 items-center gap-3 border-b border-[#e2e8f0] px-4 py-4 text-left text-sm font-bold transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40 md:border-r md:border-b-0 ${selected ? 'bg-white text-[#2563eb]' : 'text-[#0f172a]'}`}
                            >
                                <CalendarDays className={`h-5 w-5 shrink-0 ${selected ? 'text-[#2563eb]' : 'text-[#64748b]'}`} />
                                {date}
                            </button>
                        );
                    })}
                </div>
            </section>

            <section>
                <SectionHeader eyebrow="Step 2" title="Select Time Slot" />
                <div className="mt-5 divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
                    {timeGroups.map(({ label, range, icon: Icon, times, disabled }) => (
                        <div key={label} className="grid gap-5 py-6 md:grid-cols-[190px_1fr] md:items-center">
                            <div className="flex items-center gap-4">
                                <Icon className="h-7 w-7 text-[#2563eb]" />
                                <div>
                                    <p className="font-bold text-[#0f172a]">{label}</p>
                                    <p className="mt-1 text-sm text-[#64748b]">{range}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {times.map((time) => {
                                    const isDisabled = disabled.includes(time);
                                    const isSelected = selectedTime === time;
                                    return (
                                        <button
                                            key={time}
                                            type="button"
                                            disabled={isDisabled}
                                            onClick={() => {
                                                setSelectedTime(time);
                                                setSubmitted(false);
                                            }}
                                            className={`h-11 rounded-md border text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40 ${isSelected ? 'border-[#2563eb] bg-[#2563eb] text-white' : isDisabled ? 'cursor-not-allowed border-[#e2e8f0] bg-[#f8fafc] text-[#94a3b8]' : 'border-[#cbd5e1] bg-transparent text-[#0f172a] hover:border-[#2563eb] hover:bg-white'}`}
                                        >
                                            {time}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <SectionHeader eyebrow="Step 3" title="Your Details" />
                <div className="mt-5 grid gap-5 md:grid-cols-3">
                    <Field label="Full Name" icon={User} placeholder="Enter your full name" value={patientDetails.fullName} error={errors.fullName} onChange={(value) => updateDetail('fullName', value)} />
                    <Field label="NIK" icon={CreditCard} placeholder="Enter your NIK number" value={patientDetails.nik} error={errors.nik} onChange={(value) => updateDetail('nik', value)} />
                    <Field label="WhatsApp Number" icon={MessageCircle} placeholder="08xxxxxxxxxx" value={patientDetails.whatsapp} error={errors.whatsapp} onChange={(value) => updateDetail('whatsapp', value)} />
                </div>
                <div className="mt-8 flex justify-end">
                    <button type="button" onClick={continueBooking} className="inline-flex h-14 w-full max-w-sm items-center justify-center gap-6 rounded-md bg-[#2563eb] px-8 text-base font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition hover:bg-[#1d4ed8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#93c5fd]/40">
                        Continue Booking
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
                {submitted && (
                    <div className="mt-10 border-y border-[#e2e8f0] py-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">Booking summary</p>
                        <div className="mt-5 grid gap-x-8 gap-y-4 text-sm md:grid-cols-2">
                            <SummaryItem label="Service" value={selectedService} />
                            <SummaryItem label="Schedule" value={`${selectedDate}, ${selectedTime}`} />
                            <SummaryItem label="Patient" value={patientDetails.fullName} />
                            <SummaryItem label="NIK / WhatsApp" value={`${patientDetails.nik} / ${patientDetails.whatsapp}`} />
                        </div>
                    </div>
                )}
            </section>
        </section>
    );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a]">{title}</h2>
        </div>
    );
}

function Field({ label, icon: Icon, placeholder, value, error, onChange }: { label: string; icon: ComponentType<{ className?: string }>; placeholder: string; value: string; error?: string; onChange: (value: string) => void }) {
    return (
        <label className="block">
            <span className="text-sm font-semibold text-[#0f172a]">{label}</span>
            <span className={`mt-3 flex h-14 items-center gap-3 border-b text-[#94a3b8] transition focus-within:border-[#2563eb] ${error ? 'border-[#dc2626]' : 'border-[#cbd5e1]'}`}>
                <Icon className="h-5 w-5 shrink-0" />
                <input value={value} onChange={(event) => onChange(event.target.value)} className="min-w-0 flex-1 bg-transparent text-base text-[#0f172a] outline-none placeholder:text-[#94a3b8]" placeholder={placeholder} />
            </span>
            {error && <span className="mt-2 block text-sm font-semibold text-[#dc2626]">{error}</span>}
        </label>
    );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#94a3b8]">{label}</p>
            <p className="mt-1 font-semibold text-[#0f172a]">{value}</p>
        </div>
    );
}

function TrustRow() {
    return (
        <section className="mt-14 border-y border-[#e2e8f0] py-8">
            <div className="grid gap-7 md:grid-cols-4">
                {benefits.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-4 md:border-r md:border-[#e2e8f0] md:last:border-r-0">
                        <Icon className="h-8 w-8 shrink-0 text-[#2563eb]" />
                        <p className="text-base font-bold leading-6 text-[#0f172a]">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
