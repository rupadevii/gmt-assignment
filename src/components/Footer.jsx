import Link from "next/link";

const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
];

const team = [
    "Jennifer Anderson",
    "Heather Williams-Baumgart",
    "Autumn Bodily",
    "Michaela Gorospe",
    "Candace Bletscher",
    "Samantha Johnson",
    "Andrea Watkins",
    "Rosa Gomez",
    "Chad Flores",
];

export default function Footer() {
    return (
        <footer className="bg-white text-text">
            <div className="mx-auto max-w-375 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
                <div className="grid gap-16 lg:grid-cols-[1.5fr_0.65fr_0.85fr_1fr] lg:gap-16 xl:gap-24">
                
                <div>
                    <p className="font-display text-[3.5rem] leading-none tracking-[-0.035em] text-text-strong sm:text-[4rem]">
                        Conejo Valley
                    </p>

                    <p className="mt-3 text-[17px] uppercase tracking-[0.38em] text-text-accent">
                        Family Counseling
                    </p>

                    <p className="mt-6 max-w-110 text-[16px] leading-loose text-text/85">
                    We want to make getting started simple. You&apos;re welcome to
                    come into our office in Newbury Park or schedule virtual
                    appointments from anywhere in CA—whatever works best for you.
                    </p>
                </div>

                <div>
                    <h3 className="text-[14px] font-medium uppercase tracking-[0.2em] text-text-strong">
                        Navigate
                    </h3>

                    <nav className="mt-5 flex flex-col gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-[16px] leading-7 text-text transition-colors hover:text-text-accent"
                            >
                            {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h3 className="text-[14px] font-medium uppercase tracking-[0.2em] text-text-strong">
                        Our Team
                    </h3>

                    <div className="mt-5 flex flex-col gap-1">
                        {team.map((member) => (
                            <Link
                                key={member}
                                href="/team"
                                className="text-[16px] leading-7 text-text transition-colors hover:text-text-accent"
                            >
                            {member}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-[14px] font-medium uppercase tracking-[0.2em] text-text-strong">
                    Contact
                    </h3>

                    <div className="mt-5 text-[16px] leading-7 text-text">
                        <address className="not-italic">
                            925 Broadbeck Dr
                            <br />
                            Suites 200 and 225
                            <br />
                            Newbury Park, CA 91320
                        </address>

                        <a
                            href="mailto:info@conejovalleycounseling.com"
                            className="mt-1 block transition-colors hover:text-text-accent"
                        >
                            info@conejovalleycounseling.com
                        </a>

                        <a
                            href="tel:8052423120"
                            className="block transition-colors hover:text-text-accent"
                        >
                            805.242.3120
                        </a>

                        <p className="mt-5 max-w-75 italic leading-7 text-text/75">
                            Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
                            &amp; Simi Valley
                        </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-text-accent px-6 py-4 sm:px-10 lg:px-16 xl:px-20">
                <div className="mx-auto max-w-375">
                    <div className="flex flex-wrap items-center gap-x-1 text-[14px] text-background">
                        <Link
                            href="/terms"
                            className="transition-opacity hover:opacity-70"
                        >
                        Terms
                        </Link>

                        <span>|</span>

                        <Link
                            href="/privacy"
                            className="transition-opacity hover:opacity-70"
                        >
                        Privacy Policy
                        </Link>

                        <span>|</span>

                        <Link
                            href="/disclaimer"
                            className="transition-opacity hover:opacity-70"
                        >
                        Disclaimer
                        </Link>

                        <span>|</span>

                        <span>Website by Walker Strategy Co.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}