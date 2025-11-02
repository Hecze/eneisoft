export const BotonHeader = ({texto}) => {


    return (
        <button className="
        relative
        bg-transparent
        text-md text-black font-bold
        p-2
        rounded-3xl
        cursor-pointer
        hover:text-blue-600
        after:content-[''] 
        after:absolute 
        after:left-0 
        after:bottom-0 
        after:w-0 
        after:h-[2px] 
        after:bg-blue-500 
        after:transition-all 
        after:duration-300 
        hover:after:w-full">
            {texto}
        </button>
    )
}