import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OfficeSection() {
    return (
        <section
            className="overflow-hidden bg-background px-5 py-20 sm:px-8 md:py-28"
        >
        <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-strong">
                    The Office
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-stone-800 sm:text-5xl lg:text-6xl">
                    A calm space to pause, reflect, and feel at ease.
                </h2>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="max-w-xl">
                    <p className="text-xl leading-9 text-text-strong sm:text-2xl">
                        Therapy should feel like a place where you can slow down,
                        breathe, and focus on yourself.
                    </p>

                    <div className="mt-7 space-y-5 leading-8 sm:text-lg text-text/70">
                    <p>
                        I offer in-person therapy from a quiet,
                        private office in Santa Monica designed to feel comfortable,
                        calm, and grounding from the moment you arrive.
                    </p>

                    <p>
                        The office is a space to step away from the pace and pressure
                        of everyday life and give yourself room to slow down.
                    </p>
                    </div>
                </div>

                <div className="w-full overflow-hidden rounded-4xl">
                    <Image
                        src="/images/office1.jpeg"
                        alt="Warm and comfortable therapy office"
                        width={1600}
                        height={1200}
                        priority
                        className="block h-auto w-full"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>

            <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="w-full overflow-hidden rounded-4xl">
                    <Image
                        src="/images/office2.jpeg"
                        alt="Private and calming therapy office"
                        width={1600}
                        height={1200}
                        className="block h-auto w-full"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                <div className="max-w-xl lg:py-8 lg:justify-self-end">
                    <p className="text-xl leading-9 text-text-strong sm:text-2xl">
                        A space designed to help you feel comfortable from the moment
                        you arrive.
                    </p>

                    <div className="mt-7 space-y-5 leading-8 sm:text-lg text-text/70">
                        <p>
                            Filled with natural light and comfortable seating, the
                            environment is quiet, private, and thoughtfully uncluttered.
                            It offers a gentle transition away from the demands of your
                            day.
                        </p>

                        <p>
                            There is no need to have everything figured out before you
                            walk through the door. This is simply a space to begin where
                            you are, with room for reflection, conversation, and growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}