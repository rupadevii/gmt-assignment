import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background">
            <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:max-w-none lg:px-0 lg:py-14">
                <div className="grid items-center gap-12 lg:min-h-195 lg:grid-cols-[36%_64%] lg:gap-0">
                    <div className="relative w-full self-stretch">
                        <div className="relative h-full min-h-130 overflow-hidden lg:min-h-195">
                            <Image
                                src="/images/peaceful-window-moment-stockcake.jpg"
                                alt="Family spending time together outdoors"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw,45vw"
                            />
                        </div>
                    </div>

                    <div className="relative flex min-h-140 items-center px-6 sm:px-10 lg:min-h-195 lg:pl-20 lg:pr-0 xl:pl-28">
                        <div className="relative z-10 max-w-4xl">
                            <p className="mb-12 text-[15px] font-medium uppercase tracking-[0.15em] text-text">
                                Anxiety & Trauma Therapy
                                <br />
                                in Santa Monica, CA
                            </p>

                            <h1 className="lg:mt-37.5 max-w-3xl font-display text-4xl font-normal leading-[1.3] tracking-[-0.02em] text-text sm:text-5xl lg:text-6xl xl:text-[52px]">
                                Quiet the overthinking
                                <br />
                                and finally
                                <br />
                                feel steady in your own {" "}
                                <span className="text-text-accent italic">
                                life.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-md text-[18px] leading-7 text-text">
                                Anxiety, trauma, and burnout therapy for high-achieving adults for people who look fine on the outside but feel exhausted, on edge, or stuck bracing for what&apos;s next.
                            </p>

                            <div className="mt-9">
                                <Link
                                    href="#appointment"
                                    className="group inline-flex items-center gap-3 border-b border-text pb-2 text-[12px] font-medium uppercase tracking-[0.16em] text-text transition-colors hover:border-text-accent hover:text-text-accent"
                                >
                                Book an Appointment

                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                </span>
                                </Link>
                            </div>
                        </div>

                        <div className="pointer-events-none absolute right-[-28%] top-1/2 hidden w-[46%] -translate-y-1/2 lg:block xl:right-[-22%] xl:w-[36%]
                        "
                        >
                            <div className="relative aspect-3/4 overflow-hidden">
                                <Image
                                    src="/images/serene-forest-path-stockcake.jpg"
                                    alt="Gentle ocean waves on a sandy beach"
                                    fill
                                    className="object-cover object-right brightness-75"
                                    sizes="30vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}