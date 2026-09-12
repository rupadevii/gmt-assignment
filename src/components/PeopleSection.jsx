import Image from "next/image";

const people = [
    {
        title: "High-Achieving Professionals",
        description:
        "Feeling functional but internally on edge? I help thoughtful, driven adults manage constant worry, body tension, and the sense of always bracing for something to go wrong.",
        image: "/images/achiever.jpg",
        alt: "Two people sitting together by the water",
        href: "/specialties",
    },
    {
        title: "Entrepreneurs & Creatives",
        description:
        "Years of pushing through stress can leave you disconnected from yourself. We slow down, reconnect, and build more sustainable ways of living and working.",
        image: "/images/artist-s-sunlit-studio-stockcake.jpg",
        alt: "A couple embracing together outdoors",
        href: "/specialties/couples",
    },
    {
        title: "Trauma Survivors",
        description:
        "Whether from a single incident or long-standing patterns rooted in childhood or chronic stress, we work at a careful pace toward safety, stabilization, and feeling more regulated day to day.",
        image: "/images/survivors.avif",
        alt: "Children playing together on the beach",
        href: "/specialties/children-teens",
    },
];

export default function PeopleSection() {
    return (
        <section
            className="overflow-hidden bg-white py-24 sm:py-32 lg:py-30"
        >
            <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-20">
                <div className="mb-16 flex items-end justify-between gap-8 sm:mb-20 lg:mb-18">
                    <div>
                        <h2 className="font-display text-[clamp(3.5rem,3.7vw,7rem)] font-normal leading-[0.95] tracking-[-0.03em] text-text-strong">
                        Who I {" "}
                        <span className="text-text-accent italic">
                            help
                        </span>
                        </h2>
                    </div>
                </div>

                <div className="grid gap-16 lg:grid-cols-3 lg:gap-10 xl:gap-6 lg:pl-40">
                    {people.map((person, index) => (
                        <article key={person.title}>
                            <div className="relative lg:aspect-4/5 sm:aspect-3/2 overflow-hidden">
                                <Image
                                    src={person.image}
                                    alt={person.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>

                            <div className="pt-8">
                                <h3 className="mt-4 font-display text-3xl font-normal leading-none text-text-strong sm:text-2xl">
                                    {person.title}
                                </h3>

                                <p className="mt-6 max-w-md text-[16px] leading-8 text-text/80">
                                    {person.description}
                                </p>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}