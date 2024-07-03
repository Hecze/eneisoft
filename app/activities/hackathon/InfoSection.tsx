import Infocard from "@/components/Common/Infocard";

const infoCards = [
    {
        icon: "/images/activities/icons/podio.webp",
        paragraph: "Este evento tiene como objetivo desarrollar y demostrar las capacidades de programación y creatividad a través de proyectos realizados de forma grupal."
    },
    {
        icon: "/images/activities/icons/celular.webp",
        paragraph: "Estos proyectos pueden ser el desarrollo de una aplicación web o móvil, los cuales llevarán al límite la comunicación y el trabajo en equipo."
    },
    {
        icon: "/images/activities/icons/jurado.webp",
        paragraph: "La Hackaton consta de 3 días en los cuales los equipos participantes tendrán que realizar un proyecto que será evaluado por el jurado calificador."
    },
    {
        icon: "/images/activities/icons/libros.webp",
        paragraph: "Buscamos dar a conocer buenos proyectos y a su vez descubrir a jóvenes con talento en el desarrollo de software."
    }
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
