import RequirementCard from "@/components/Common/RequirementCard";

const requirements = [
    {
        icon: "/images/activities/icons/estudiando.webp",
        paragraph: "Ser estudiante universitario"
    },
    {
        icon: "/images/activities/icons/programador.webp",
        paragraph: "Tener conocimiento en lenguajes de programación"
    },
    {
        icon: "/images/activities/icons/idea.webp",
        paragraph: "Tener ganas de aprender e innovar"
    }
];

const RequirementsSection = () => (
    <section>
        <h4 className="mb-24 text-center">Requisitos</h4>
        <div className="flex items-center justify-center 2xl:justify-between flex-wrap w-full gap-16">
            {requirements.map((requirement, index) => (
                <RequirementCard
                    key={index}
                    id={index + 1}
                    icon={requirement.icon}
                    paragraph={requirement.paragraph}
                />
            ))}
        </div>
    </section>
);

export default RequirementsSection;
