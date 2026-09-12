import Image from "next/image";

export default function HopeSection() {
    return (
        <section className="overflow-hidden bg-background py-20 sm:py-2 lg:py-32">
            <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
                <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1.8fr)_minmax(420px,1fr)] lg:items-start lg:gap-4">
                    <div className='lg:px-30 lg:pt-18'>
                        <div className="max-w-5xl">
                            <h2 className="font-display text-[clamp(3rem,3.2vw,5.5rem)] font-normal leading-[1.35] tracking-[-0.03em] text-text">
                                You keep functioning but,
                                <br className="hidden lg:block" />
                                underneath, you are exhausted.
                            </h2>
                        </div>
                        <div className="grid gap-12 sm:grid-cols-2 lg:gap-5 mt-8 lg:mt-15">
                            <div className="max-w-md">
                                <p className="text-sm font-medium uppercase leading-7 tracking-[0.13em] text-text">
                                    At my Santa Monica practice
                                    <br />
                                    I work on closing that gap.
                                </p>

                                <p className="mt-6 text-base leading-8 text-text/80 lg:text-[17px]">
                                    If you are constantly worrying, tense, sleeping poorly, or feeling like something bad is always about to happen; even while everything looks &quot;together&quot; from the outside; that exhaustion is real, and it doesn&apos;t have to be permanent.
                                </p>
                            </div>

                            <div>
                                <p className="text-base leading-8 text-text/80 lg:text-[17px]">
                                    I work with high-achieving, self-aware adults who are quietly struggling with anxiety, panic, trauma, or burnout. Using CBT, EMDR, mindfulness-based practices, and body-oriented techniques, I address both the emotional and physiological sides of what you&apos;re experiencing, not just the surface symptoms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div className="relative aspect-4/5 w-full overflow-hidden sm:aspect-4/5 lg:aspect-3/4">
                        <Image
                            src="/images/Dr.Maya-Reynolds.png"
                            alt="Dr.Maya Reynolds"
                            fill
                            className="object-cover object-[center_20%]"
                            sizes="(max-width: 1024px) 100vw, 35vw"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}