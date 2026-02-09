/** Icons */
import NotFoundIcon from "../../../assets/icons/not-found.svg?react";

/** Type */
export type props = {
    title: string;
    text?: string;
}

/** Main Export */
const NotFound = ({ title, text }: props) => {

    return (
        <div className="w-full flex justify-center py-15 mx-auto shadow-minimal">
            <div className="flex flex-col items-center border border-black/10 rounded-3xl p-10 bg-white text-center w-[450px]">
                <NotFoundIcon className="w-50 h-50" />
                <p className="text-xl font-semibold text-black leading-none -mt-4">{title}</p>
                <p className="text-md text-black-accent mt-2 font-medium">{text}</p>
            </div>
        </div>
    )
}

export default NotFound