"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const specialties = [
    "Anxiety & Panic Therapy",
    "Trauma Therapy & EMDR",
    "Burnout & Perfectionism Support",
    "In-Person & Telehealth Therapy"
];

const methods = [
    "CBT",
    "Mindfulness-Based Therapy",
    "Body-Oriented Therapy",
    "EMDR"
];

function Dropdown({label, items}) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 py-3 text-sm tracking-wide text-text transition-colors hover:text-text-accent"
        >
            {label.toUpperCase()}
        </button>

        <div
            className={`absolute left-0 top-full z-50 w-64 origin-top rounded-sm bg-background py-3 shadow-lg ring-1 ring-black/5 transition-all duration-200 ${
            open
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
        >
            {items.map((item) => (
            <Link
                key={item}
                href="#"
                className="block px-5 py-2.5 text-sm text-text transition-colors hover:bg-surface/40 hover:text-text-strong/70"
            >
                {item.toUpperCase()}
            </Link>
            ))}
        </div>
        </div>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const toggleMobileDropdown = (name) => {
        setMobileDropdown((current) => (current === name ? null : name));
    };

    return (
        <header className="z-50 bg-background">
            <div className="mx-auto flex h-26 max-w-7xl items-center justify-between px-6 lg:px-2">
                <Link href="/" className="flex flex-col leading-none">
                <span className="font-display text-4xl tracking-[0.08em] text-text sm:text-2xl">
                    Dr. Maya Reynolds
                </span>
                <span className="mt-1 text-[10px] font-medium tracking-[0.25em] text-text-accent">
                    Licensed Clinical Psychologist
                </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                <Link
                    href="#contact"
                    className="text-sm tracking-wide text-text transition-colors hover:text-text-accent"
                >
                    ABOUT
                </Link>
                <Dropdown label="Specialties" items={specialties} />
                <Dropdown label="Methods" items={methods} />

                <Link
                    href="#contact"
                    className="text-sm tracking-wide text-text transition-colors hover:text-text-accent"
                >
                    FAQS
                </Link>

                <Link
                    href="#appointment"  
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-[50%] border border-text text-text text-xs tracking-[0.25em] uppercase transition-colors hover:border-text-strong hover:bg-text hover:text-background cursor-pointer"
                >
                  CONTACT
                </Link>
                </nav>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-text lg:hidden"
                    aria-label="Toggle navigation"
                >
                {mobileOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
            </div>

            <div
                className={`overflow-hidden border-t border-black/5 bg-background transition-all duration-300 lg:hidden ${
                mobileOpen ? "max-h-200" : "max-h-0"
                }`}
            >
                <nav className="space-y-1 px-6 py-5">

                <MobileDropdown
                    label="Specialties"
                    items={specialties}
                    open={mobileDropdown === "specialties"}
                    onClick={() => toggleMobileDropdown("specialties")}
                />

                <MobileDropdown
                    label="Methods"
                    items={methods}
                    open={mobileDropdown === "methods"}
                    onClick={() => toggleMobileDropdown("methods")}
                />

                <Link
                    href="#contact"
                    className="block border-b border-black/10 py-4 text-sm text-text"
                    onClick={() => setMobileOpen(false)}
                >
                    CONTACT
                </Link>

                <Link
                    href="#appointment"
                    className="mt-5 block bg-text px-5 py-4 text-center text-xs tracking-[0.12em] text-background"
                    onClick={() => setMobileOpen(false)}
                >
                    BOOK AN APPOINTMENT
                </Link>
                </nav>
            </div>
        </header>
    );
}

function MobileDropdown({
  label,
  items,
  open,
  onClick,
}) {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left text-sm text-text"
      >
        {label}

        <ChevronDown
          size={17}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] pb-3 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 border-l border-surface pl-4">
            {items.map((item) => (
              <Link
                key={item}
                href="#"
                className="block py-2 text-sm text-text/70 hover:text-text-strong/70"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}