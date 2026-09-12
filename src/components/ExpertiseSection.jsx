const leftColumn = [
    "Anxiety",
    "Panic",
    "Trauma",
    "Burnout",
    "Perfectionism",
];

const rightColumn = [
    "CBT",
    "Mindfulness-Based Therapy",
    "Body-Oriented Therapy",
    "EMDR",
    "...and more.",
];

export default function ExpertiseSection() {
    return (
        <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-36">
            <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-30">
                <div className="grid gap-2 lg:grid-cols-[1fr_1fr_1fr] lg:gap-x-16 xl:gap-x-20">
                    <div className="lg:pt-1">
                        <h2 className="font-display text-5xl leading-[1.05] tracking-[-0.02em] text-text-strong sm:text-6xl lg:text-[2.5rem]">
                        My areas of
                        <br />
                        <span className="text-text-accent italic">expertise</span>
                        </h2>
                    </div>

                    <div className="border-t border-text/15">
                        {leftColumn.map((item, index) => (
                            <div
                                key={item}
                                className={`flex min-h-22 items-center py-6 ${index!==4 && "border-b border-text/15"}`}
                            >
                                <span className="text-[14px] font-medium uppercase tracking-[0.18em] text-text">
                                {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-text/15">
                        {rightColumn.map((item, index) => (
                            <div
                                key={item}
                                className={`flex min-h-22 items-center py-6 ${index!==4 && "border-b border-text/15"} `}
                            >
                                <span
                                    className="text-[14px] font-medium uppercase tracking-[0.18em] text-text"
                                >
                                {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}