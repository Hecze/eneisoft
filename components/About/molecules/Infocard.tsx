import { IconType } from 'react-icons';
type QuestionCardType = {
  icon: IconType;
  question: string;
  paragraph: string;
  className?: string;
};

const QuestionCard = ({ icon: Icon, question, paragraph, className }: QuestionCardType) => {
  return (
    <div className={`flex flex-col p-8 py-0 max-w-[35rem] gap-4 ${className}`}>
      <div className="bg-primary w-12 h-12 rounded flex items-center justify-center align-center text-black ">
        <Icon size={24} />
      </div>
      <div className="flex flex-center flex-col align-center xl:ml-6 ">
        <h4 className="text-primary text-center">{question}</h4>
        <p className="text-black mt-6">{paragraph}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
