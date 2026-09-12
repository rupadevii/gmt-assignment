import Image from "next/image";

export default function ApproachSection() {
    return (
        <section className="overflow-hidden bg-accent py-16 sm:py-20 lg:py-0">
            <div className="mx-auto max-w-[1600px]">
                <div className="grid lg:min-h-195 lg:grid-cols-[1fr_1fr_0.75fr]">
                    <div className="col-span-2 px-6 py-16 sm:px-10 lg:px-16 lg:py-16 xl:px-20">
                        <p className="text-[16px] font-medium uppercase tracking-[0.22em] text-text">
                        How I work
                        </p>

                        <h2 className="mt-28 max-w-4xl font-display text-5xl leading-[1.05] tracking-[-0.03em] text-text-strong sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
                        I&apos;m here to help you feel steady again.
                        </h2>

                        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:mt-16 lg:gap-16 xl:gap-20">
                            <div>
                                <p className="text-[14px] font-medium uppercase leading-8 tracking-[0.16em] text-text">
                                    Clients I work with are often holding a lot at once, and it&apos;s easy to put yourself last.
                                </p>

                                <div className="mt-5 text-[16px] leading-8 text-text">
                                <p>
                                    Sessions are structured enough to feel supportive, while still leaving room for reflection and depth. I take a warm, collaborative, grounded approach - no one-size-fits-all treatment plans. My goal isn&apos;t just symptom relief; it&apos;s helping you build real insight, resilience, and a stronger relationship with yourself over time.
                                </p>
                                </div>
                            </div>

                            <div className="lg:pt-0.5">
                                <p className="text-[16px] leading-8 text-text">
                                    I believe therapy works best when you feel respected, understood, and actively involved in the process, not talked at, but worked with. Trauma-focused work in particular is paced carefully, with an emphasis on safety and stabilization first, so healing feels manageable rather than overwhelming. Whether we&apos;re untangling anxious thought patterns or working through what&apos;s kept you on edge for years, my aim is to combine practical tools with depth-oriented work, because lasting change means both feeling better and understanding why.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-4/5 w-full lg:aspect-auto lg:min-h-full">
                        <Image
                            src="/images/woman.jpg"
                            alt="Woman"
                            fill
                            className="object-cover object-right"
                            sizes="(max-width: 1024px) 100vw, 30vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}