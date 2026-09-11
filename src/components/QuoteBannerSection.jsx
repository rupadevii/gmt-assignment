export default function QuoteBannerSection() {
    return (
        <section className="relative overflow-hidden bg-surface/45 py-24 sm:py-32 lg:py-44">
            <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center"/>
            <div className="absolute inset-0 bg-black/45"/>

            <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="font-display text-[clamp(3rem,3.5vw,6.5rem)] leading-[1.3] tracking-[-0.03em] text-white">
                        You deserve a space where you don&apos;t have to perform being okay. Whatever you&apos;re carrying,
                        <span className="italic text-white">
                             we&apos;ll work through it together
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}