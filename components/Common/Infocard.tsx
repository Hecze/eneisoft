import Image from "next/image";
type Props = {
  icon: string,
  paragraph: string,
}

const Infocard = ({ icon, paragraph }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-primary rounded-2xl p-8 w-80 h-72 gap-4">
      <Image
        src={icon}
        alt="icon"
        width={90}
        height={90}
      />
      <p className="text-white">{paragraph}</p>
    </div>
  );
};

export default Infocard;
