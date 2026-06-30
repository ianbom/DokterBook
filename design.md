# Design.md — DentaCare Clinic Blue Theme

> Design reference for a modern dental clinic booking website using **Laravel Inertia + React + TypeScript + Tailwind CSS + shadcn/ui**.

---

## 1. Overview

DentaCare Clinic adalah website booking klinik gigi modern yang mengutamakan pengalaman pasien. Desain harus terasa bersih, premium, terpercaya, mudah digunakan, dan tidak terlihat seperti dashboard rumah sakit.

Website ini menggunakan tema utama **elegant medical blue** dengan canvas putih dominan, teks navy yang kuat, border halus, card rounded, dan CTA biru yang jelas.

Target utama desain:

- Memudahkan pasien memilih dokter.
- Memudahkan pasien memilih layanan, tanggal, dan slot jam.
- Membuat proses booking terasa cepat dan aman.
- Menampilkan dokter dan layanan secara profesional.
- Menjaga tampilan tetap modern, clean, dan conversion-focused.

---

## 2. Design Personality

| Trait | Direction |
| --- | --- |
| Clean | Dominan putih, border halus, layout lega |
| Trustworthy | Biru sebagai warna utama untuk memberi rasa aman |
| Premium | Typography rapi, spacing besar, shadow lembut |
| Friendly | Rounded corner, icon outline, CTA jelas |
| Medical | Visual terang, foto dokter profesional, informasi terstruktur |
| Simple | Pasien bisa booking tanpa login dan tanpa proses rumit |

---

## 3. Color System

### 3.1 Primary Blue Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `primary` | `#2563EB` | CTA utama, active navigation, selected filter, search button, selected date/time |
| `primary-hover` | `#1D4ED8` | Hover dan active button |
| `primary-dark` | `#1E40AF` | Strong blue emphasis, important link |
| `primary-soft` | `#EFF6FF` | Soft background, selected light state, badge background |
| `primary-pale` | `#E0F2FE` | Gentle healthcare accent |
| `primary-border` | `#BFDBFE` | Border selected card, badge border, hover border |
| `primary-ring` | `#93C5FD` | Focus ring |

### 3.2 Neutral Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `canvas` | `#FFFFFF` | Background utama |
| `surface` | `#F8FAFC` | Section background ringan |
| `surface-soft` | `#F1F5F9` | Input background, filter background, tag |
| `border` | `#E2E8F0` | Card border, divider, input border |
| `border-soft` | `#EEF2F7` | Divider sangat halus |
| `ink` | `#0F172A` | Heading, title, strong text |
| `body` | `#334155` | Paragraph, body text |
| `muted` | `#64748B` | Subtitle, metadata |
| `disabled` | `#94A3B8` | Disabled text/icon |

### 3.3 Semantic Colors

| Token | Hex | Usage |
| --- | --- | --- |
| `success` | `#16A34A` | Status tersedia, booking confirmed |
| `success-soft` | `#DCFCE7` | Background success badge |
| `warning` | `#F59E0B` | Warning ringan, pending status |
| `warning-soft` | `#FEF3C7` | Background warning badge |
| `danger` | `#DC2626` | Cancel booking, error state |
| `danger-soft` | `#FEE2E2` | Background error/cancel badge |

---

## 4. Color Usage Rules

### 4.1 Primary Blue Usage

Gunakan `#2563EB` untuk elemen penting seperti:

- Button `Book Appointment`
- Search button
- Active navigation item
- Selected filter chip
- Link `View Profile`
- Rating stars
- Selected date
- Selected time slot
- Step aktif pada booking flow
- Icon penting

### 4.2 White Dominance

Komposisi warna ideal:

- 75–85% white canvas
- 10–15% neutral gray / blue-gray
- 5–10% blue accent

Biru harus menjadi aksen, bukan background dominan.

### 4.3 Avoid

Hindari:

- Red / pink sebagai warna utama
- Orange dominan
- Blue neon
- Gradient berlebihan
- Shadow terlalu gelap
- Background halaman yang terlalu biru

---

## 5. Typography

### 5.1 Font Recommendation

Gunakan font modern sans-serif.

Recommended stack:

```css
font-family: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
```

Alternative:

```css
font-family: "Inter", "Geist", system-ui, sans-serif;
```

### 5.2 Type Scale

| Element | Size | Weight | Line Height | Usage |
| --- | --- | --- | --- | --- |
| Hero Title | `48px–56px` | `700` | `1.1` | Judul utama landing/doctors page |
| Page Title | `36px–44px` | `700` | `1.15` | Judul halaman |
| Section Title | `24px–28px` | `700` | `1.25` | Judul section |
| Card Title | `20px–22px` | `700` | `1.3` | Nama dokter / service title |
| Subheading | `16px–18px` | `500–600` | `1.5` | Subtitle penting |
| Body | `15px–16px` | `400` | `1.6` | Paragraph |
| Metadata | `13px–14px` | `400–500` | `1.4` | Experience, review count, label kecil |
| Button | `14px–15px` | `600` | `1` | CTA |
| Badge | `11px–13px` | `600` | `1` | Status badge |

### 5.3 Typography Rules

```css
.heading {
  color: #0F172A;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.body {
  color: #334155;
  line-height: 1.6;
}

.muted {
  color: #64748B;
}
```

---

## 6. Layout System

### 6.1 Container

Desktop container:

```css
.container-page {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
}
```

Large desktop:

```css
.container-page-lg {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
}
```

Mobile:

```css
.container-page {
  padding-left: 20px;
  padding-right: 20px;
}
```

### 6.2 Grid

Doctor grid desktop:

```css
.doctor-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
```

Tablet:

```css
.doctor-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

Mobile:

```css
.doctor-grid {
  grid-template-columns: 1fr;
}
```

### 6.3 Spacing Scale

| Token | Value | Usage |
| --- | --- | --- |
| `space-1` | `4px` | Small internal gap |
| `space-2` | `8px` | Icon gap |
| `space-3` | `12px` | Badge padding / small gap |
| `space-4` | `16px` | Card internal spacing |
| `space-5` | `20px` | Form/card spacing |
| `space-6` | `24px` | Card grid gap |
| `space-8` | `32px` | Section inner padding |
| `space-10` | `40px` | Large component spacing |
| `space-12` | `48px` | Section spacing |
| `space-16` | `64px` | Hero spacing |

---

## 7. Border Radius

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | `8px` | Small badge, small button |
| `radius-md` | `12px` | Input, select, chip |
| `radius-lg` | `16px` | Doctor card, service card |
| `radius-xl` | `24px` | Hero image, big panel |
| `radius-2xl` | `32px` | Search panel / large section card |
| `radius-full` | `999px` | Pill button, avatar, circular search button |

---

## 8. Shadow System

Shadow harus halus dan tidak terlalu gelap.

| Token | Value | Usage |
| --- | --- | --- |
| `shadow-sm` | `0 2px 8px rgba(15, 23, 42, 0.04)` | Small card |
| `shadow-md` | `0 8px 24px rgba(15, 23, 42, 0.08)` | Floating search bar / card hover |
| `shadow-lg` | `0 16px 40px rgba(15, 23, 42, 0.10)` | Important panel |
| `shadow-blue` | `0 8px 20px rgba(37, 99, 235, 0.24)` | Primary CTA |

---

## 9. Tailwind CSS Theme

### 9.1 Tailwind v3 `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        ink: "#0F172A",
        body: "#334155",
        muted: "#64748B",
        disabled: "#94A3B8",

        primaryBlue: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          dark: "#1E40AF",
          soft: "#EFF6FF",
          pale: "#E0F2FE",
          border: "#BFDBFE",
          ring: "#93C5FD",
        },

        surface: {
          DEFAULT: "#F8FAFC",
          soft: "#F1F5F9",
        },

        line: {
          DEFAULT: "#E2E8F0",
          soft: "#EEF2F7",
        },

        success: {
          DEFAULT: "#16A34A",
          soft: "#DCFCE7",
        },

        warning: {
          DEFAULT: "#F59E0B",
          soft: "#FEF3C7",
        },

        danger: {
          DEFAULT: "#DC2626",
          soft: "#FEE2E2",
        },
      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },

      boxShadow: {
        soft: "0 2px 8px rgba(15, 23, 42, 0.04)",
        card: "0 8px 24px rgba(15, 23, 42, 0.08)",
        panel: "0 16px 40px rgba(15, 23, 42, 0.10)",
        blue: "0 8px 20px rgba(37, 99, 235, 0.24)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 9.2 Recommended Utility Classes

Container:

```tsx
<div className="mx-auto max-w-7xl px-5 md:px-8">
  ...
</div>
```

Primary button:

```tsx
<button className="rounded-full bg-primaryBlue px-6 py-3 text-sm font-semibold text-white shadow-blue transition hover:bg-primaryBlue-hover">
  Book Appointment
</button>
```

Card:

```tsx
<div className="rounded-lg border border-line bg-white p-4 transition hover:border-primaryBlue-border hover:shadow-card">
  ...
</div>
```

Badge:

```tsx
<span className="rounded-full border border-primaryBlue-border bg-primaryBlue-soft px-2.5 py-1 text-xs font-semibold text-primaryBlue">
  Available Today
</span>
```

Selected state:

```tsx
<div className="border-primaryBlue bg-primaryBlue-soft text-primaryBlue">
  ...
</div>
```

---

## 10. shadcn/ui Theme Setup

shadcn/ui menggunakan CSS variables. Gunakan konfigurasi berikut pada `resources/css/app.css` atau `resources/css/globals.css`.

### 10.1 shadcn/ui CSS Variables

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 214.3 94.6% 92.7%;
    --accent-foreground: 221.2 83.2% 53.3%;

    --destructive: 0 72.2% 50.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 213.1 93.9% 67.8%;

    --radius: 1rem;
  }

  .dark {
    --background: 222.2 47.4% 11.2%;
    --foreground: 210 40% 98%;

    --card: 222.2 47.4% 11.2%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 47.4% 11.2%;
    --popover-foreground: 210 40% 98%;

    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}
```

### 10.2 Global Base Style

```css
@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
  }
}
```

---

## 11. shadcn/ui Component Styling Direction

Gunakan komponen shadcn/ui berikut:

- `Button`
- `Card`
- `Badge`
- `Input`
- `Select`
- `Popover`
- `Calendar`
- `Dialog`
- `Sheet`
- `Tabs`
- `Table`
- `DropdownMenu`
- `Separator`

### 11.1 Button

Primary CTA:

```tsx
import { Button } from "@/Components/ui/button";

<Button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-blue hover:bg-primaryBlue-hover">
  Book Appointment
</Button>
```

Secondary button:

```tsx
<Button
  variant="outline"
  className="rounded-full border-line bg-white px-6 py-3 text-ink hover:border-primaryBlue-border hover:bg-primaryBlue-soft hover:text-primaryBlue"
>
  View Profile
</Button>
```

Danger button:

```tsx
<Button variant="destructive" className="rounded-full px-6 py-3 font-semibold">
  Cancel Booking
</Button>
```

### 11.2 Card

```tsx
import { Card, CardContent } from "@/Components/ui/card";

<Card className="rounded-lg border-line bg-white shadow-none transition-all hover:border-primaryBlue-border hover:shadow-card">
  <CardContent className="p-4">
    ...
  </CardContent>
</Card>
```

### 11.3 Badge

Default blue badge:

```tsx
import { Badge } from "@/Components/ui/badge";

<Badge className="rounded-full border border-primaryBlue-border bg-primaryBlue-soft text-primaryBlue hover:bg-primaryBlue-soft">
  Top Rated
</Badge>
```

Success badge:

```tsx
<Badge className="rounded-full border border-green-200 bg-success-soft text-success hover:bg-success-soft">
  Available Today
</Badge>
```

### 11.4 Input

```tsx
import { Input } from "@/Components/ui/input";

<Input
  className="h-12 rounded-md border-line bg-white text-ink placeholder:text-disabled focus-visible:ring-primaryBlue-ring"
  placeholder="Enter your name"
/>
```

### 11.5 Select

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

<Select>
  <SelectTrigger className="h-12 rounded-md border-line bg-white focus:ring-primaryBlue-ring">
    <SelectValue placeholder="Select specialty" />
  </SelectTrigger>
  <SelectContent className="rounded-lg border-line bg-white">
    <SelectItem value="general-dentist">General Dentist</SelectItem>
    <SelectItem value="orthodontist">Orthodontist</SelectItem>
  </SelectContent>
</Select>
```

### 11.6 Calendar

Selected date harus menggunakan primary blue.

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border border-line bg-white"
  classNames={{
    day_selected:
      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "bg-primaryBlue-soft text-primaryBlue",
  }}
/>
```

---

## 12. Main Page Components

## 12.1 Header / Navbar

### Structure

Header terdiri dari:

1. Logo icon gigi
2. Brand name `DentaCare Clinic`
3. Navigation menu
4. Emergency link
5. Button `Book Appointment`

### Style

```tsx
<header className="border-b border-line-soft bg-white">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
    ...
  </div>
</header>
```

Logo:

```tsx
<div className="flex items-center gap-3">
  <Tooth className="h-9 w-9 text-primaryBlue" />
  <span className="text-2xl font-bold tracking-tight text-ink">
    DentaCare Clinic
  </span>
</div>
```

Navigation item:

```tsx
<a className="relative text-sm font-medium text-ink transition hover:text-primaryBlue">
  Doctors
  <span className="absolute -bottom-7 left-0 h-1 w-full rounded-full bg-primaryBlue" />
</a>
```

---

## 12.2 Hero Section

### Layout

Desktop menggunakan dua kolom:

- Kiri: badge, title, description, trust stats
- Kanan: image dokter

```tsx
<section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1fr_1.25fr] lg:py-14">
  ...
</section>
```

### Hero Badge

```tsx
<span className="inline-flex rounded-full border border-primaryBlue px-4 py-2 text-sm font-semibold text-primaryBlue">
  Our Dental Experts
</span>
```

### Hero Title

```tsx
<h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] text-ink md:text-6xl">
  Meet the Dentists Behind Your Healthy Smile
</h1>
```

### Hero Description

```tsx
<p className="mt-5 max-w-xl text-base leading-7 text-body md:text-lg">
  Choose experienced dental professionals for general care, cosmetic treatment,
  orthodontics, implants, and family dentistry.
</p>
```

### Hero Image

```tsx
<img
  src="/images/doctors/hero-doctors.jpg"
  alt="DentaCare Clinic dentists"
  className="h-[410px] w-full rounded-xl object-cover"
/>
```

---

## 12.3 Stats Row

Stats contoh:

- Certified Dentists
- 4.9 Google Rating
- 2,000+ Happy Patients

```tsx
<div className="mt-8 flex flex-wrap items-center gap-6 text-ink">
  <div className="flex items-center gap-3">
    <ShieldCheck className="h-7 w-7" />
    <div>
      <p className="text-sm font-semibold">Certified</p>
      <p className="text-sm font-semibold">Dentists</p>
    </div>
  </div>
</div>
```

---

## 12.4 Search / Filter Bar

### Purpose

Membantu pasien memfilter dokter berdasarkan:

- Specialty
- Availability
- Experience
- Language

### Style

```tsx
<div className="mx-auto max-w-6xl rounded-2xl border border-line bg-white p-5 shadow-card">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(4,1fr)_auto] md:items-center">
    ...
  </div>
</div>
```

Filter item:

```tsx
<div className="flex items-center gap-4 border-line md:border-r md:px-5">
  <Tooth className="h-7 w-7 text-ink" />
  <div className="flex-1">
    <p className="text-xs font-semibold text-ink">Specialty</p>
    <p className="mt-1 text-sm text-body">All specialties</p>
  </div>
  <ChevronDown className="h-5 w-5 text-ink" />
</div>
```

Search button:

```tsx
<Button className="h-16 w-16 rounded-full bg-primaryBlue p-0 shadow-blue hover:bg-primaryBlue-hover">
  <Search className="h-7 w-7" />
</Button>
```

---

## 12.5 Specialty Filter Chips

Default chip:

```tsx
<Button
  variant="outline"
  className="rounded-full border-line bg-white px-6 text-ink hover:border-primaryBlue-border hover:bg-primaryBlue-soft hover:text-primaryBlue"
>
  General Dentist
</Button>
```

Active chip:

```tsx
<Button className="rounded-full bg-primaryBlue px-6 text-white shadow-blue hover:bg-primaryBlue-hover">
  All Doctors
</Button>
```

Container:

```tsx
<div className="flex flex-wrap gap-3">
  ...
</div>
```

Mobile behavior:

```tsx
<div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
  ...
</div>
```

---

## 12.6 Doctor Card

### Structure

Doctor card terdiri dari:

1. Status badge
2. Favorite icon
3. Doctor image
4. Doctor name
5. Specialty
6. Experience
7. Rating
8. Service tags
9. Next available schedule
10. CTA `Book Appointment`
11. Link `View Profile`

### Card Style

```tsx
<Card className="relative rounded-lg border-line bg-white transition-all hover:border-primaryBlue-border hover:shadow-card">
  <CardContent className="p-4">
    ...
  </CardContent>
</Card>
```

### Doctor Image

```tsx
<img
  src="/images/doctors/dr-amelia.jpg"
  alt="Dr. Amelia Putri"
  className="h-56 w-32 rounded-md object-cover"
/>
```

### Doctor Name

```tsx
<h3 className="text-xl font-bold tracking-tight text-ink">
  Dr. Amelia Putri
</h3>
```

### Rating

```tsx
<div className="flex items-center gap-2">
  <span className="text-sm font-semibold text-ink">4.8</span>
  <div className="flex text-primaryBlue">
    <Star className="h-4 w-4 fill-current" />
    <Star className="h-4 w-4 fill-current" />
    <Star className="h-4 w-4 fill-current" />
    <Star className="h-4 w-4 fill-current" />
    <StarHalf className="h-4 w-4 fill-current" />
  </div>
  <span className="text-xs text-muted">(280 reviews)</span>
</div>
```

### Service Tags

```tsx
<div className="flex flex-wrap gap-2">
  <span className="rounded-sm border border-line bg-surface px-2 py-1 text-xs font-medium text-body">
    Whitening
  </span>
</div>
```

### Availability Text

```tsx
<p className="text-sm text-ink">
  Next available: <span className="font-semibold text-primaryBlue">Today, 15:00</span>
</p>
```

### Card Actions

```tsx
<div className="mt-4 flex items-center justify-between gap-3">
  <Button className="rounded-md bg-primaryBlue text-xs font-semibold text-white hover:bg-primaryBlue-hover">
    <CalendarDays className="mr-2 h-4 w-4" />
    Book Appointment
  </Button>

  <Link className="text-xs font-semibold text-primaryBlue hover:text-primaryBlue-hover hover:underline">
    View Profile →
  </Link>
</div>
```

---

## 12.7 Trust / Review Section

### Structure

Isi section:

- Trusted by Thousands
- Rating besar 4.9
- Stars
- Google
- Facebook
- WhatClinic

### Style

```tsx
<section className="rounded-lg border border-line bg-white p-8">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1.2fr_1fr_1fr_1fr] md:items-center">
    ...
  </div>
</section>
```

Large rating:

```tsx
<p className="text-6xl font-bold tracking-[-0.05em] text-ink">4.9</p>
```

Stars:

```tsx
<div className="flex text-primaryBlue">
  ...
</div>
```

---

## 12.8 Footer

### Structure

Footer desktop memiliki 5 kolom:

1. Brand info
2. Quick Links
3. Our Services
4. Information
5. Contact Us

### Style

```tsx
<footer className="border-t border-line-soft bg-white">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
    ...
  </div>
</footer>
```

Footer heading:

```tsx
<h4 className="text-sm font-bold text-ink">Quick Links</h4>
```

Footer link:

```tsx
<a className="text-sm text-body transition hover:text-primaryBlue">
  Services
</a>
```

Active footer link:

```tsx
<a className="text-sm font-semibold text-primaryBlue">
  Doctors
</a>
```

Social icon:

```tsx
<a className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-white transition hover:bg-primaryBlue">
  <Instagram className="h-4 w-4" />
</a>
```

---

## 13. Booking Flow Design

Booking flow pasien:

1. Select doctor
2. Select service
3. Select date
4. Select time slot
5. Fill patient data
6. Review booking
7. Booking success

---

## 13.1 Step Indicator

Active step:

```tsx
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryBlue text-sm font-bold text-white">
  1
</div>
```

Completed step:

```tsx
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-primaryBlue-border bg-primaryBlue-soft text-sm font-bold text-primaryBlue">
  ✓
</div>
```

Inactive step:

```tsx
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-sm font-bold text-muted">
  3
</div>
```

---

## 13.2 Service Card

Default:

```tsx
<button className="rounded-lg border border-line bg-white p-5 text-left transition hover:border-primaryBlue-border hover:bg-primaryBlue-soft">
  <h3 className="font-bold text-ink">Teeth Whitening</h3>
  <p className="mt-2 text-sm text-muted">Brighten your smile with professional whitening treatment.</p>
</button>
```

Selected:

```tsx
<button className="rounded-lg border border-primaryBlue bg-primaryBlue-soft p-5 text-left shadow-blue">
  <h3 className="font-bold text-primaryBlue">Teeth Whitening</h3>
</button>
```

---

## 13.3 Date Selection

Default:

```tsx
<button className="rounded-md border border-line bg-white p-4 text-center transition hover:border-primaryBlue-border hover:bg-primaryBlue-soft hover:text-primaryBlue">
  <span className="block text-xs text-muted">Mon</span>
  <span className="block text-xl font-bold text-ink">15</span>
</button>
```

Selected:

```tsx
<button className="rounded-md border border-primaryBlue bg-primaryBlue p-4 text-center text-white shadow-blue">
  <span className="block text-xs">Mon</span>
  <span className="block text-xl font-bold">15</span>
</button>
```

Unavailable:

```tsx
<button disabled className="cursor-not-allowed rounded-md border border-line bg-surface-soft p-4 text-center text-disabled opacity-60">
  <span className="block text-xs">Mon</span>
  <span className="block text-xl font-bold">15</span>
</button>
```

---

## 13.4 Time Slot

Available:

```tsx
<button className="rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-primaryBlue-border hover:bg-primaryBlue-soft hover:text-primaryBlue">
  09:00
</button>
```

Selected:

```tsx
<button className="rounded-md border border-primaryBlue bg-primaryBlue px-4 py-3 text-sm font-semibold text-white shadow-blue">
  09:00
</button>
```

Unavailable:

```tsx
<button disabled className="cursor-not-allowed rounded-md border border-line bg-surface-soft px-4 py-3 text-sm font-semibold text-disabled line-through opacity-60">
  09:00
</button>
```

---

## 13.5 Patient Form

Fields:

- Full name
- NIK
- WhatsApp number
- Optional note

Input:

```tsx
<Input
  className="h-12 rounded-md border-line bg-white text-ink placeholder:text-disabled focus-visible:ring-primaryBlue-ring"
  placeholder="Enter your full name"
/>
```

Textarea:

```tsx
<textarea className="min-h-28 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-disabled focus:outline-none focus:ring-4 focus:ring-blue-200" />
```

Error message:

```tsx
<p className="mt-2 text-sm font-medium text-danger">
  Full name is required.
</p>
```

---

## 13.6 Review Booking Card

Review card menampilkan:

- Doctor name
- Service name
- Date
- Time slot
- Patient name
- NIK
- WhatsApp number

Style:

```tsx
<Card className="rounded-xl border-line bg-white shadow-card">
  <CardContent className="space-y-5 p-6">
    ...
  </CardContent>
</Card>
```

Highlight row:

```tsx
<div className="rounded-lg border border-primaryBlue-border bg-primaryBlue-soft p-4">
  <p className="text-sm font-semibold text-primaryBlue">Appointment Summary</p>
</div>
```

---

## 13.7 Booking Success State

Success state harus terasa positif dan jelas.

```tsx
<div className="mx-auto max-w-xl rounded-xl border border-line bg-white p-8 text-center shadow-card">
  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-soft text-success">
    <Check className="h-8 w-8" />
  </div>

  <h1 className="mt-6 text-3xl font-bold text-ink">Booking Confirmed</h1>
  <p className="mt-3 text-body">
    Your appointment has been successfully created.
  </p>
</div>
```

---

## 14. Admin Dashboard Design

Admin dashboard menggunakan visual system yang sama, tetapi lebih fungsional.

Admin pages:

- Dashboard summary
- Manage doctors
- Manage services
- Manage schedules
- Manage leave/cuti dokter
- Manage bookings
- Reschedule/cancel booking

### 14.1 Admin Layout

Layout:

- Sidebar kiri
- Header atas
- Main content
- Card statistik
- Table data

Sidebar:

```tsx
<aside className="min-h-screen w-72 border-r border-line bg-white">
  ...
</aside>
```

Active sidebar item:

```tsx
<a className="flex items-center gap-3 rounded-md bg-primaryBlue-soft px-4 py-3 text-sm font-semibold text-primaryBlue">
  Doctors
</a>
```

Default sidebar item:

```tsx
<a className="flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium text-body hover:bg-primaryBlue-soft hover:text-primaryBlue">
  Services
</a>
```

### 14.2 Admin Stats Card

```tsx
<Card className="rounded-lg border-line bg-white shadow-none">
  <CardContent className="p-5">
    <p className="text-sm font-medium text-muted">Today Bookings</p>
    <p className="mt-2 text-3xl font-bold text-ink">24</p>
  </CardContent>
</Card>
```

### 14.3 Admin Table

```tsx
<div className="overflow-hidden rounded-lg border border-line bg-white">
  <Table>
    ...
  </Table>
</div>
```

Table header:

```tsx
<TableHead className="bg-surface text-sm font-semibold text-ink">
  Patient
</TableHead>
```

Table row hover:

```tsx
<TableRow className="hover:bg-primaryBlue-soft/50">
  ...
</TableRow>
```

---

## 15. Booking Status Badge

Confirmed:

```tsx
<Badge className="rounded-full bg-success-soft text-success hover:bg-success-soft">
  Confirmed
</Badge>
```

Pending:

```tsx
<Badge className="rounded-full bg-warning-soft text-amber-700 hover:bg-warning-soft">
  Pending
</Badge>
```

Cancelled:

```tsx
<Badge className="rounded-full bg-danger-soft text-danger hover:bg-danger-soft">
  Cancelled
</Badge>
```

Rescheduled:

```tsx
<Badge className="rounded-full bg-primaryBlue-soft text-primaryBlue hover:bg-primaryBlue-soft">
  Rescheduled
</Badge>
```

---

## 16. Icon System

Recommended library:

```bash
npm install lucide-react
```

Recommended icons:

- `Tooth`
- `CalendarDays`
- `Search`
- `Phone`
- `ShieldCheck`
- `Star`
- `Heart`
- `Users`
- `Clock`
- `MapPin`
- `Mail`
- `ChevronDown`
- `Check`
- `X`

Rules:

- Use outline icons.
- Default icon: `text-ink`
- Active icon: `text-primaryBlue`
- Muted icon: `text-muted`
- Icon size normal: `h-5 w-5`
- Icon size large: `h-7 w-7`

---

## 17. Image Style

### 17.1 Doctor Photo

Doctor photos should be:

- Professional portrait
- White coat
- Bright dental clinic background
- Friendly expression
- Consistent crop
- Clean lighting
- Realistic

Recommended card image class:

```tsx
className="h-56 w-32 rounded-md object-cover"
```

### 17.2 Hero Image

Hero image should show:

- Multiple dentists
- Modern clinic background
- Bright and clean lighting
- Friendly professional pose

Recommended class:

```tsx
className="h-[410px] w-full rounded-xl object-cover"
```

---

## 18. Interaction States

### 18.1 Hover

Hover should be subtle.

```tsx
className="transition-all duration-200 hover:-translate-y-0.5 hover:border-primaryBlue-border hover:shadow-card"
```

### 18.2 Focus

All interactive elements must show focus ring.

```tsx
className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primaryBlue-ring/40"
```

### 18.3 Disabled

```tsx
className="cursor-not-allowed opacity-50"
```

---

## 19. Responsive Rules

### 19.1 Desktop

Breakpoint: `lg` and above.

Rules:

- Full navbar visible
- Hero uses 2 columns
- Doctor grid uses 3 columns
- Footer uses 5 columns
- Search/filter bar horizontal

### 19.2 Tablet

Breakpoint: `md` to `lg`.

Rules:

- Doctor grid uses 2 columns
- Footer uses 2–3 columns
- Search bar can become 2 columns
- Hero can still use 2 columns if enough width

### 19.3 Mobile

Breakpoint: below `md`.

Rules:

- Header uses hamburger menu / Sheet
- Hero becomes 1 column
- Doctor grid becomes 1 column
- Search/filter bar becomes vertical
- Filter chips become horizontal scroll
- Footer becomes 1 column
- Main CTA should be easy to tap

Mobile hero title:

```tsx
className="text-4xl leading-tight tracking-[-0.04em]"
```

Mobile padding:

```tsx
className="px-5"
```

---

## 20. Accessibility Rules

- Text contrast must meet WCAG AA.
- Button must have clear label.
- Icon-only button must use `aria-label`.
- Form input must have label.
- Error state must show text message, not only red border.
- Focus state must be visible.
- Clickable area should be at least `44px` high.

Example:

```tsx
<Button aria-label="Search doctors" className="h-16 w-16 rounded-full">
  <Search className="h-7 w-7" />
</Button>
```

---

## 21. Content Tone

Website copy should be:

- Friendly
- Professional
- Short
- Easy to understand
- Patient-oriented

English example:

```text
Choose experienced dental professionals for general care, cosmetic treatment, orthodontics, implants, and family dentistry.
```

Indonesian example:

```text
Pilih dokter gigi berpengalaman untuk perawatan umum, kosmetik gigi, ortodonti, implan, dan perawatan keluarga.
```

---

## 22. Page Structure

### 22.1 Public Pages

Recommended public pages:

1. Home
2. Doctors
3. Doctor Detail
4. Services
5. Booking Flow
6. Booking Review
7. Booking Success
8. Cancel / Reschedule Booking
9. Contact

### 22.2 Admin Pages

Recommended admin pages:

1. Login Admin
2. Admin Dashboard
3. Manage Doctors
4. Create/Edit Doctor
5. Manage Services
6. Manage Doctor Schedule
7. Manage Doctor Leave
8. Manage Bookings
9. Booking Detail
10. Reschedule Booking

---

## 23. Page Structure — Doctors Listing Page

Doctors page order:

1. Header
2. Hero section
3. Search/filter bar
4. Specialty filter chips
5. `Browse Our Dentists` title
6. Doctor card grid
7. Trust/review section
8. Footer

---

## 24. Component Naming Recommendation

For React/Inertia project:

```txt
resources/js/
├── Components/
│   ├── ui/
│   ├── layout/
│   │   ├── PublicHeader.tsx
│   │   ├── PublicFooter.tsx
│   │   └── AdminLayout.tsx
│   ├── doctors/
│   │   ├── DoctorCard.tsx
│   │   ├── DoctorFilterBar.tsx
│   │   ├── DoctorSpecialtyChips.tsx
│   │   └── DoctorHero.tsx
│   ├── booking/
│   │   ├── BookingStepper.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── DateSelector.tsx
│   │   ├── TimeSlotGrid.tsx
│   │   └── BookingSummary.tsx
│   └── admin/
│       ├── AdminSidebar.tsx
│       ├── StatsCard.tsx
│       └── DataTable.tsx
└── Pages/
    ├── Doctors/
    │   ├── Index.tsx
    │   └── Show.tsx
    ├── Booking/
    │   ├── Create.tsx
    │   ├── Review.tsx
    │   └── Success.tsx
    └── Admin/
        ├── Dashboard.tsx
        ├── Doctors/
        ├── Services/
        ├── Schedules/
        └── Bookings/
```

---

## 25. Do and Don't

### Do

- Use white canvas dominantly.
- Use primary blue intentionally.
- Use soft blue for selected/hover states.
- Use navy text for strong readability.
- Use rounded cards and soft borders.
- Use consistent doctor photo crop.
- Use clear CTA placement.
- Keep booking flow simple.

### Don't

- Do not use red as primary color.
- Do not make the UI look like a hospital admin dashboard.
- Do not overuse gradients.
- Do not use too many accent colors.
- Do not make shadows too dark.
- Do not reduce spacing too much.
- Do not make filter/booking interactions unclear.

---

## 26. Final Visual Goal

The final website should look like a premium, modern, trustworthy dental clinic booking platform.

The design must communicate:

- Patients can book easily without login.
- Doctors are professional and trustworthy.
- The clinic is clean and modern.
- The booking flow is simple and safe.
- Blue is the main brand identity, supported by white canvas, navy typography, soft borders, and rounded components.
