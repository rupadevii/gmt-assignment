import Link from "next/link";

const specialties = [
    {
        number: "01",
        title: "Anxiety & Panic Therapy",
        description:
        "Constant worry, racing thoughts, or a body that won't relax; anxiety and panic can make you feel like you're always bracing for the next thing to go wrong. Using CBT and mindfulness-based techniques, we work to calm the nervous system and quiet the overthinking, so you can feel steady again.",
        href: "/specialties/trauma",
    },
    {
        number: "02",
        title: "Trauma Therapy & EMDR",
        description:
        "Whether trauma stems from a single event or long-standing patterns from childhood or chronic stress, healing starts with safety. I use EMDR and body-oriented approaches, paced carefully, to help you feel more regulated in daily life not just during our sessions.",
        href: "/specialties/dissociation",
    },
    {
        number: "03",
        title: "Burnout & Perfectionism Support",
        description:
        "If you're an entrepreneur, creative, or professional feeling disconnected after years of pushing through stress, therapy can be a place to slow down and rebuild sustainable habits without losing the drive that matters to you.",
        href: "/methods/emdr",
    },
    {
        number: "04",
        title: "In-Person & Telehealth Therapy",
        description: 
        "Whether you'd rather meet face-to-face or connect from anywhere in California, therapy should fit your life not the other way around. I offer in-person sessions from my calm, private Santa Monica office, along with secure telehealth appointments for clients across the state.",
        href: "/methods/inperson"
    }
];

export default function SpecialtiesSection() {
    return (
        <section className="bg-accent py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-375 px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_2fr] lg:gap-20 xl:gap-28">
                
                <div className="lg:pt-2">
                    <h2 className="font-display text-4xl leading-[1.15] text-text-strong sm:text-5xl lg:text-[52px]">
                    My{" "}
                    <span className="font-script text-text-accent">
                        specialties
                    </span>
                    <br />
                    include...
                    </h2>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:mt-0 lg:gap-x-20 lg:gap-y-28">
                    {specialties.map((specialty) => (
                    <article key={specialty.title} className="flex flex-col">
                        
                        <h3 className="font-display text-3xl leading-tight text-text-strong sm:text-[32px]">
                        {specialty.title}
                        </h3>

                        <p className="mt-8 max-w-125 text-[15px] leading-[1.9] text-text/80">
                        {specialty.description}
                        </p>

                        <Link
                        href={specialty.href}
                        className="group mt-10 inline-flex w-fit items-center border-b border-text/70 pb-2 text-[16px] font-medium uppercase tracking-[0.16em] text-text transition-colors hover:border-text-accent hover:text-text-accent"
                        >
                        Learn more
                        
                        </Link>
                    </article>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}