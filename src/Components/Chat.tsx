import { useContext } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { ThemeContext } from "../context/ThemeContext";
import moment from "moment";

export default function Chat({fromEmail, sentAt, subject, onClick}){

    const {theme} = useContext(ThemeContext)

    console.log(fromEmail, sentAt, subject)
    
    const formatDate = (dateString: string): string => {
        return moment(dateString).format('MMM DD').toUpperCase();
      }

    return(
        <>
            <div onClick={onClick} className={`p-1 border-y border-${theme}-main hover:opacity-80 cursor-pointer`}>
                <div className="my-2 flex justify-between items-baseline">
                    <p className="font-semibold text-sm">{fromEmail}</p>
                    <p className="text-slate-500 text-xs">{formatDate(sentAt)}</p>
                </div>
                <p className="my-2 text-sm text-slate-400">{subject}</p>
                <div className="my-2 flex gap-2 text-xs ">
                    <button className={`flex items-center gap-1 ${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} px-2 py-1 rounded-full text-green-300`}><GoDotFill /> Interested</button>
                    <button className={`flex items-center gap-1 ${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} px-2 py-1 rounded-full`}><BiLogoTelegram /> Capmapin Name</button>
                </div>
            </div>
        </>
    )
}