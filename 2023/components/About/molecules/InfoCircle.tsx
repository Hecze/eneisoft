import { IconType } from 'react-icons';
import FadeInSection from '@/components/FadeInSection';
type InfoCircleType = {
    id: number;
    icon: IconType | string;
    paragraph: string;
    variant?: "orange" | "yellow" | "lime" | "purple";
    className?: string;
};

const InfoCircle = ({ id, icon: Icon, paragraph, variant = "orange", className }: InfoCircleType) => {
    return (
        <div className={`w-full md:w-1/4 flex flex-row flex-wrap  justify-center  gap-14 text-white ${className}`}>
            <FadeInSection animationClass='fade-in-up-10' className={`size-24 rounded-full bg-${variant} flex items-center justify-center`}>
                <h3 className='font-semibold'>
                    0{id}
                </h3>
            </FadeInSection>
            <FadeInSection  className="flex flex-col  w-full justify-center items-center px-4 md:p-0 md:ml-8 gap-14">
            <p>{paragraph}</p>
            {typeof Icon === 'string' ? (
                <img src={Icon} alt="icon" width={90} height={90} className='hidden md:block' />
            ) : (
                <Icon size={72} className='hidden md:block' />
            )}
            </FadeInSection>


        </div>
    );
};

export default InfoCircle;
