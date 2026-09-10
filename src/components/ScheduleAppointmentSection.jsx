import Image from "next/image";
import Link from "next/link";

export default function ScheduleAppointmentSection() {
    return (
        <section className="overflow-hidden bg-surface/35 py-16 sm:py-20 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                <div className="grid min-h-162.5 items-start lg:grid-cols-[195px_minmax(0,1fr)_565px]">
                
                <div className="relative hidden h-128.75 w-full self-end lg:block">
                    <Image
                        src="/book-2.webp"
                        alt=""
                        fill
                        className="object-cover"
                        sizes="195px"
                    />
                </div>

                <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
                    <p className="text-[16px] font-medium uppercase tracking-widest text-text">
                        Schedule an appointment
                    </p>

                    <h2 className="mt-24 max-w-162.5 font-display text-[clamp(3rem,3.5vw,4.5rem)] leading-[1.35] tracking-tight text-text-strong">
                        Find a therapist who is the
                        right fit for{" "}
                        <span className="font-script text-text-accent italic">
                            you
                        </span>
                        .
                    </h2>

                    <div className="mt-10 max-w-155">
                    <p className="text-[16px] leading-[2.03] text-text/80 sm:text-base">
                        Coming to therapy is a courageous decision, and connecting with
                        the right kind of therapist makes all the difference. We
                        understand that your journey is personal, and we&apos;re here to
                        support you with care and understanding every step of the way.
                        Each member of our team brings dedicated expertise and a
                        commitment to support you in your struggles. We want you to feel
                        prioritized, understood, and empowered.
                    </p>

                    <p className="mt-6 text-[15px] leading-loose text-text/80 sm:text-base">
                        Click the button below to schedule an appointment.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-[50%] border border-text text-text text-xs tracking-[0.25em] uppercase transition-colors hover:border-text-strong hover:bg-text hover:text-background cursor-pointer mt-8"
                    >
                        Book now
                    </Link>
                    </div>
                </div>

                <div className="relative hidden h-161.25 w-full lg:block">
                    <Image
                        src="/book.webp"
                        alt="Family spending time together on the beach"
                        fill
                        priority
                        className="object-cover"
                        sizes="565px"
                    />
                </div>
                </div>
            </div>

            <div className="px-6 sm:px-10 lg:hidden">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-text">
                Schedule an appointment
                </p>

                <h2 className="mt-12 font-display text-[clamp(2.8rem,10vw,4rem)] leading-[1.15] tracking-[-0.02em] text-text-strong">
                Find a therapist who is the right fit for{" "}
                <span className="font-script text-text-accent">you</span>.
                </h2>

                <div className="mt-8">
                <p className="text-[15px] leading-loose text-text/80">
                    Coming to therapy is a courageous decision, and connecting with
                    the right kind of therapist makes all the difference. We
                    understand that your journey is personal, and we&apos;re here to
                    support you with care and understanding every step of the way.
                    Each member of our team brings dedicated expertise and a
                    commitment to support you in your struggles. We want you to feel
                    prioritized, understood, and empowered.
                </p>

                <p className="mt-6 text-[15px] leading-loose text-text/80">
                    Click the button below to schedule an appointment.
                </p>

                <Link
                    href="/contact"
                    className="mt-8 inline-flex h-12.5 min-w-33 items-center justify-center rounded-full border border-text/70 px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-text transition-all duration-300 hover:bg-text hover:text-background"
                >
                    Book now
                </Link>
                </div>

                <div className="relative mt-16 aspect-4/5 w-full">
                    <Image
                        src="/book.webp"
                        alt="Family spending time together on the beach"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
}