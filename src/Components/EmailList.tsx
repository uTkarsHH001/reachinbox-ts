import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import Chat from "./Chat";
import { RxHamburgerMenu } from "react-icons/rx";

export default function EmailList({data, setSelectedThread}){

    const{theme} = useContext(ThemeContext)
    return(
        <>  
            <button className="md:hidden text-3xl p-4"><RxHamburgerMenu /></button>
            <div className="w-2/5 lg:w-1/5 hidden md:block overflow-scroll h-full p-4">
                <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-2"> 
                        <p className="text-lg text-[#4285F4] font-bold">All Inbox(s)</p>
                        <IoIosArrowDown />
                    </div>
                    <div className={`${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} p-2 rounded-lg`}>
                        <IoReload />
                    </div>
                </div>
                <p className="text-sm text-slate-400"><span className={`font-bold text-${theme}-text`}>{data.length}/25</span> Inboxes selected</p>
                <input className={`w-full mt-4 bg-${theme}-main rounded-sm border border-slate-800`} type="text" placeholder="&nbsp;&nbsp;&nbsp;Search"/>
                <div className="my-2 font-semibold flex justify-around items-baseline text-xs">
                    <div className="flex items-baseline gap-2">
                        <p className={`p-2 bg-${theme}-main rounded-full text-[#4285F4]`}>26</p>
                        <p>New Replied</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-bold">All Inbox(s)</p>
                        <IoIosArrowDown />
                    </div>
                </div>
                {data.map(user => (
                    <Chat fromEmail={user.fromEmail} sentAt={user.sentAt} body={user.subject} onClick={() => setSelectedThread(user.threadId)}/>
                ))}
            </div> 
        </>
    )
}