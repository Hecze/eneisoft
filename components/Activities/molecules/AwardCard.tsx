import React from "react";
import { AwardType } from "@/types";

type AwardCardProps = AwardType & { id: number };

const AwardCard: React.FC<AwardCardProps> = ({ league, prize, id }) => {
  const color = ["bg-orange", "bg-yellow", "bg-purple"];
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-xl bg-white text-black w-64 h-52 rounded-xl z-10">
      <div className={`rounded-full size-12 ${color[id - 1]} text-white text-center font-bold text-2xl items-center justify-center flex`}>
        {id}
      </div>
      <p>{league}</p>
      <p>{prize}</p>
    </div>
  );
};

export default AwardCard;
