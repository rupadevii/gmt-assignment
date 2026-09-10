import Link from "next/link";

const specialties = [
    {
        number: "01",
        title: "Trauma",
        description:
        "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay stuck, and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
        href: "/specialties/trauma",
    },
    {
        number: "02",
        title: "Dissociation",
        description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        href: "/specialties/dissociation",
    },
    {
        number: "03",
        title: "EMDR",
        description:
        "Eye Movement Desensitization and Reprocessing is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        href: "/methods/emdr",
    },
    {
        number: "04",
        title: "Special Needs Parenting",
        description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        href: "/specialties/special-needs-parenting",
    },
];

export default function SpecialtiesSection() {
    return (
        <section className="bg-white py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-375 px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_2fr] lg:gap-20 xl:gap-28">
                
                <div className="lg:pt-2">
                    <h2 className="font-display text-4xl leading-[1.15] text-text-strong sm:text-5xl lg:text-[52px]">
                    Our{" "}
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