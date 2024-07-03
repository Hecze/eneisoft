import AwardCard from "@/components/Common/AwardCard";

const awards = [
    {
        league: "Liga Senior",
        prize: "S/.100"
    },
    {
        league: "Liga Mid-Level",
        prize: "S/.70"
    },
    {
        league: "Liga Junior",
        prize: "S/.50"
    }
];

const AwardsSection = () => (
    <section className="mt-36">
        <div className="absolute w-screen bg-primary h-64 right-0 mt-[-2rem]" />
        <h4 className="mb-12 text-center z-10 text-white relative">Premios</h4>
        <div className="flex items-center justify-center 2xl:justify-between flex-wrap w-full gap-16 z-10">
            {awards.map((award, index) => (
                <AwardCard key={index} id={index + 1}>
                    <p>{award.league}</p>
                    <p>{award.prize}</p>
                </AwardCard>
            ))}
        </div>
    </section>
);

export default AwardsSection;
