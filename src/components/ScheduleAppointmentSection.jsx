import Image from "next/image";
import Link from "next/link";

export default function ScheduleAppointmentSection() {
    return (
        <section className="overflow-hidden bg-accent py-16 sm:py-20 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                <div className="grid min-h-162.5 items-start lg:grid-cols-[195px_minmax(0,1fr)_565px]">
                
                <div className="relative hidden h-128.75 w-full self-end lg:block">
                    <Image
                        src="/book-2.webp"
                        alt="Quiet corner of a calming therapy office"
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
                        Ready to feel like
                        yourself{" "}
                        <span className="font-script text-text-accent italic">
                            again
                        </span>
                        .
                    </h2>

                    <div className="mt-10 max-w-155">
                    <p className="text-[16px] leading-[2.03] text-text/80 sm:text-base">
                        Reaching out is a courageous first step. I offer both in-person sessions at my Santa Monica office and telehealth appointments across California, so we can work together in whatever way fits your life.
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
                        src="/images/minimalist-morning-workspace-stockcake.jpg"
                        alt="Calm, sunlit workspace reflecting a fresh start"
                        fill
                        priority
                        className="object-cover"
                        sizes="565px"
                    />
                </div>
                </div>
            </div>
        </section>
    );
}