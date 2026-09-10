import Image from "next/image";

export default function HopeSection() {
    return (
        <section className="overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-[1600px]">
                <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1.8fr)_minmax(420px,1fr)] lg:items-start lg:gap-4">
                    <div className='px-30 pt-20'>
                        <div className="max-w-5xl">
                            <h2 className="font-display text-[clamp(3rem,3.2vw,5.5rem)] font-normal leading-[1.35] tracking-[-0.03em] text-text">
                                You&apos;re holding onto hope that life
                                <br className="hidden lg:block" />
                                can be better than it is right now.
                            </h2>
                        </div>
                        <div className="grid gap-12 sm:grid-cols-2 lg:gap-5 lg:mt-15">
                            <div className="max-w-md">
                                <p className="text-sm font-medium uppercase leading-7 tracking-[0.13em] text-text">
                                    At Conejo Valley Family Counseling
                                    <br />
                                    we want to make that hope a reality.
                                </p>

                                <p className="mt-6 text-base leading-8 text-text/80 lg:text-[17px]">
                                    Whether you&apos;re an adult seeking personal growth, looking to work
                                    through your trauma, a couple working on your relationship, or a
                                    parent looking for support for your child, we provide a
                                    compassionate and safe space to help you navigate all of life&apos;s
                                    ups and downs.
                                </p>
                            </div>

                            <div>
                                <p className="text-base leading-8 text-text/80 lg:text-[17px]">
                                    First and foremost, we believe what you&apos;re going through is
                                    real, valid, and worthy of support. Our team offers clients in
                                    the Newbury Park area and across CA an environment to discover a
                                    new life and a deeper sense of self in the midst of their
                                    struggles. As we tap into the power of connection and understanding, you
                                    can find your footing again and take a transformative path
                                    forward.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <div className="relative aspect-4/5 w-full overflow-hidden lg:aspect-3/4">
                        <Image
                            src="/HopeSection.webp"
                            alt="Peaceful ocean waves meeting the shore"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 35vw"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}