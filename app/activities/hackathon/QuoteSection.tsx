import Image from "next/image";

const QuoteSection = () => (
    <section>
        <div className="flex flex-wrap justify-center align-center gap-24">
            <Image src="/images/activities/dude/dude1.webp" alt="dude paradito" width={280} height={280} />
            <div className="flex flex-col items-center justify-center gap-8 md:w-1/2 text-center">
                <Image src="/images/activities/comilla.webp" alt="comilla signo" width={70} height={70} />
                <p className="text-white">El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan competiciones</p>
                <p className="text-primary"> Michael Jordan</p>
            </div>
        </div>
    </section>
);

export default QuoteSection;
