import RequirementCard from "@/components/Common/RequirementCard";

const requirements = [
    {
        icon: "/images/activities/icons/estudiando.webp",
        paragraph: "Ser estudiante de la UNMSM"
    },
    {
        icon: "/images/activities/icons/programador.webp",
        paragraph: "Conocimiento en los lenguajes de programación C, C++, Java, Python, Ruby o Lua"
    },
    {
        icon: "/images/activities/icons/idea.webp",
        paragraph: "Estar dispuesto a darlo todo"
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
