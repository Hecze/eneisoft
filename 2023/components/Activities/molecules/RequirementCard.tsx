import { RequirementType } from "@/types";

type RequirementCardProps = RequirementType & { id: number };

const RequirementCard = ({ id, icon, paragraph }: RequirementCardProps) => {
  return (
    <div className="flex">
      <div className="rounded-full size-12 bg-primary text-white text-center font-bold text-2xl items-center justify-center flex">
        {id}
      </div>
    <div className="flex flex-col items-center justify-center size-60 gap-6">
      <img
        src={icon}
        alt="icon"
        width={90}
        height={90}
      />
      <p className="text-white">{paragraph}</p>
    </div>
    </div>

  );
};

export default RequirementCard;
