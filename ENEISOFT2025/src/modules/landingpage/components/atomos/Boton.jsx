export const Boton = ({texto}) => {
    return (
        <button className="bg-blue-600 text-md text-amber-50 p-2 w-20 rounded-3xl transition-all
        duration-200 ease-in-out hover:bg-blue-500 active:scale-95 cursor-pointer shadow-md hover:shadow-xl">
            {texto}
        </button>
    )
}