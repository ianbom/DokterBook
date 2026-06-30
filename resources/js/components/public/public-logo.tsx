import type { SVGProps } from 'react';

function ToothIcon({ className, strokeWidth = 2 }: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            className={className}
            aria-hidden="true"
        >
            <path d="M7.5 3.5c1.4 0 2.3.7 3 1.2.9.7 2.1.7 3 0 .7-.5 1.6-1.2 3-1.2 2.8 0 4.5 2.1 4.5 5.1 0 2.5-1.2 4.6-2.1 6.6-.7 1.5-1.1 3-1.4 4.6-.2 1-.8 1.7-1.6 1.7-1 0-1.4-1-1.8-2.4l-.8-2.7c-.3-1-.7-1.4-1.3-1.4s-1 .4-1.3 1.4l-.8 2.7c-.4 1.4-.8 2.4-1.8 2.4-.8 0-1.4-.7-1.6-1.7-.3-1.6-.7-3.1-1.4-4.6C4.2 13.2 3 11.1 3 8.6c0-3 1.7-5.1 4.5-5.1Z" />
        </svg>
    );
}

export function PublicLogo() {
    return (
        <div className="flex items-center gap-3">
            <ToothIcon className="h-9 w-9 text-[#2563eb]" strokeWidth={2.2} />
            <span className="text-2xl font-bold tracking-tight text-[#0f172a]">DentaCare Clinic</span>
        </div>
    );
}
