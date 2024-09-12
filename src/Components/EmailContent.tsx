import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import EmailMessages from "./EmailMessages";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GoDotFill } from "react-icons/go";
import { TiArrowBackOutline } from "react-icons/ti";
import EmailReply from "./EmailReply";
import DeleteMail from "./DeleteMail";

export default function EmailContent({selectedThread}){

    const [isReplying, setIsReplying] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
          if (event.key === "d" || event.key === "D") {
                setIsDeleting(true)
          }
    
          if (event.key === "r" || event.key === "R") {
            setIsReplying(true)
          }
        };
    
        document.addEventListener("keydown", handleKeyPress);
    
        return () => {
          document.removeEventListener("keydown", handleKeyPress);
        };
      }, []);

    return(
        <>  
            <div className={`w-full md:w-3/5  h-5/6 lg:h-full border-x border-${theme}-main p-3`}> 
                <div className="p-2 text-sm flex justify-between">
                    <div>
                        <p className="font-bold">Orlando</p>
                        <p className="text-xs text-gray-600">orlando@gmailcom</p>
                    </div>
                    <div className=" gap-2 hidden sm:flex">
                        <div className={`flex items-center gap-2 ${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} py-1 px-4 lg:px-6 rounded-md`}> 
                            <span className="text-yellow-300 text-2xl drop-shadow-2xl"><GoDotFill /> </span>
                            <p>All Inbox(s)</p>
                            <IoIosArrowDown />
                        </div>
                        <div className={`flex items-center gap-2 ${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} py-1 px-6 rounded-md`}>  
                            <p>Move</p>
                            <IoIosArrowDown />
                        </div>
                        <div className={`bg-${theme}-main py-1 px-3 rounded-md flex items-center`}>
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
                <div className="h-5/6 overflow-scroll">
                    <EmailMessages selectedThread={selectedThread}/>
                </div>
                <button onClick={() => setIsReplying(true)} className="bg-[#4B63DD] px-12 py-1 my-2 rounded-lg flex items-baseline gap-2"><TiArrowBackOutline />Reply</button>
                <EmailReply selectedThread={selectedThread} onClick={() => setIsReplying(false)} isReplying={isReplying}/>
                <DeleteMail isDeleting={isDeleting} setIsDeleting={setIsDeleting}/>
            </div>
        </>
    )
}