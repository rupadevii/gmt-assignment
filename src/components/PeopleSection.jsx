import Image from "next/image";

const people = [
    {
        title: "Adults",
        description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: "/who-we-help-1.webp",
        alt: "Two people sitting together by the water",
        href: "/specialties",
    },
    {
        title: "Couples",
        description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: "/who-we-help-2.webp",
        alt: "A couple embracing together outdoors",
        href: "/specialties/couples",
    },
    {
        title: "Children & Teens",
        description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: "/who-we-help-3.webp",
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
                        Who we {" "}
                        <span className="text-text-accent italic">
                            help
                        </span>
                        </h2>
                    </div>
                </div>

                <div className="grid gap-16 lg:grid-cols-3 lg:gap-10 xl:gap-6 lg:pl-40">
                    {people.map((person, index) => (
                        <article key={person.title}>
                            <div className="relative aspect-4/5 overflow-hidden">
                                <Image
                                    src={person.image}
                                    alt={person.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>

                            <div className="pt-8">
                                <h3 className="mt-4 font-display text-3xl font-normal leading-none text-text-strong sm:text-3xl">
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