import Infocard from "@/components/Common/Infocard";

const infoCards = [
    {
        icon: "/images/activities/icons/podio.webp",
        paragraph: "El evento tiene como finalidad ser una competencia de programación interbase, interfacultad e interuniversitaria en la UNMSM con participantes a nivel nacional."
    },
    {
        icon: "/images/activities/icons/celular.webp",
        paragraph: "Nuestro objetivo es crear un ambiente de competencia sana usando la programación como medio para competir."
    },
    {
        icon: "/images/activities/icons/jurado.webp",
        paragraph: "También queremos integrar a las bases de la FISI y aumentar su interacción creando oportunidades de ver talentos escondidos, nuevas experiencias y, en general, un evento entretenido."
    },
];

const InfoSection = () => (
    <section>
        <h4 className="mb-24 text-center">¿En qué Consiste?</h4>
        <div className="flex items-center justify-center 2xl:justify-between flex-wrap w-full gap-y-[6vw] gap-x-16">
            {infoCards.map((infocard, index) => (
                <Infocard
                    key={index}
                    icon={infocard.icon}
                    paragraph={infocard.paragraph}
                />
            ))}
        </div>
    </section>
);

export default InfoSection;
