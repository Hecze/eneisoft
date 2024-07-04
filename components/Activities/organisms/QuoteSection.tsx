import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

type Props = {
    quote: string;
    author: string;
};

const QuoteSection = ({ quote, author }: Props) => (
    <section>
        <div className="flex flex-wrap justify-center align-center gap-24">
            <FadeInSection animationClass="fade-in-up-10">
                <Image src="/images/activities/dude/dude1.webp" alt="dude paradito" width={280} height={280} />
            </FadeInSection>
            <FadeInSection className="flex flex-col items-center justify-center gap-8 md:w-1/2 text-center">
                <Image src="/images/activities/comilla.webp" alt="comilla signo" width={70} height={70} />
                <p className="text-white">{quote}</p>
                <p className="text-primary">{author}</p>
            </FadeInSection>
        </div>
    </section>
);

export default QuoteSection;
