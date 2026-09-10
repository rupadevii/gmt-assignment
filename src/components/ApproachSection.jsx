import Image from "next/image";

export default function ApproachSection() {
    return (
        <section className="overflow-hidden bg-strong py-16 sm:py-20 lg:py-0">
            <div className="mx-auto max-w-[1600px]">
                <div className="grid lg:min-h-195 lg:grid-cols-[1fr_1fr_0.75fr]">
                    <div className="col-span-2 px-6 py-16 sm:px-10 lg:px-16 lg:py-16 xl:px-20">
                        <p className="text-[16px] font-medium uppercase tracking-[0.22em] text-text">
                        How we work
                        </p>

                        <h2 className="mt-28 max-w-4xl font-display text-5xl leading-[1.05] tracking-[-0.03em] text-text-strong sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
                        We&apos;re here to make a difference.
                        </h2>

                        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:mt-16 lg:gap-16 xl:gap-20">
                            <div>
                                <p className="text-[14px] font-medium uppercase leading-8 tracking-[0.16em] text-text">
                                    The clients we work with are balancing so many things at
                                    once, it&apos;s often hard for them to put themselves first.
                                </p>

                                <div className="mt-5 text-[16px] leading-8 text-text">
                                <p>
                                    Here, your needs are always top priority. Our team takes
                                    the time to deeply listen to our clients in order to truly
                                    understand their story and their struggles. We recognize
                                    that no two people are the same and that personalized
                                    therapy means an intentional, tailored approach. You won&apos;t
                                    find anything “one-size-fits-all” here. If you&apos;re ready to
                                    do the work, we&apos;re ready to help.
                                </p>
                                </div>
                            </div>

                            <div className="lg:pt-0.5">
                                <p className="text-[16px] leading-8 text-text">
                                    Sometimes we may gently challenge you to look at things
                                    differently and other times we may explore your emotions, all
                                    while encouraging you to practice what you&apos;ve learned in your
                                    daily life. We take what we do seriously because we know how
                                    important it is for you to heal from what&apos;s hurting you,
                                    discover a fulfilling life, and build meaningful
                                    relationships. Our goal is to walk alongside you in this
                                    journey, offering support and guidance as you uncover your
                                    strengths and embrace what the future can hold for you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-130 lg:min-h-full">
                        <Image
                            src="/difference.webp"
                            alt="Woman and child spending time together on the beach"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 30vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}