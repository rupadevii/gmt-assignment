import Image from "next/image";

export default function LegacySection() {
    return (
        <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-30">
            <div className="mx-auto max-w-[1600px]">
                <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
                    <div className="relative">
                        <div className="relative aspect-4/5 overflow-hidden">
                        <Image
                            src="/images/beautiful.avif"
                            alt="Serene image of a Girl on wood logs"
                            fill
                            className="object-cover"
                            sizes="30vw"
                        />
                        </div>
                    </div>

                    <div className="max-w-2xl flex">
                        <h2 className="font-display text-[clamp(3.5rem,3.5vw,6.5rem)] leading-[1.3] tracking-[-0.03em] text-text-strong self-start sm:text-center lg:text-left">
                        Honoring what you&apos;ve carried & gently helping you find steady ground again.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}