import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from "../context/ThemeContext";
import { FaCaretDown, FaEye, FaRegSmile, FaRegUser } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { MdAttachment, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GoArrowBoth } from "react-icons/go";
import axios from "axios";

export default function EmailReply({selectedThread, onClick, isReplying}){ 

    const sendMail = async () => {

        try {
            const response = await axios.post(
                `https://hiring.reachinbox.xyz/api/v1/onebox/reply/18231`,
                {
                    toName: "Mitrajit",
                    to: "chandra.rupam@gmail.com",
                    from: "mitrajit2022@gmail.com",
                    fromName: "Mitrajit",
                    subject: "Optimize Your Recruitment Efforts with Expert Support",
                    body: "<p>Hello how are you</p>",
                    references: [
                        "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
                        "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
                        "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
                        "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
                    ],
                    inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidXRrLmFyc2hoLjkuMkBnbWFpbC5jb20iLCJpZCI6NjUwLCJmaXJzdE5hbWUiOiJVdGthcnNoIiwibGFzdE5hbWUiOiJLYXRhcmlhIn0sImlhdCI6MTcyMzQxMjEzOSwiZXhwIjoxNzU0OTQ4MTM5fQ.CW40j7WhgI7X0JcMeywtvVasyF8kJAmgzyKSo4lwr94'
                    }
                }
            );
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }

    const{theme} = useContext(ThemeContext)
    return(
        <>
            <div className={`relative bottom-full w-full h-full bg-${theme}-main text-sm border border-gray-600 rounded-md m-auto ${!isReplying && `hidden`}`}>
                <div className="h-2/6">
                    <div className={`px-4 py-2 ${theme === `dark` ?  `bg-[#23272C]` : `bg-gray-300`} flex justify-between`}>
                        <p>Reply</p>
                        <button onClick={onClick} className="text-xl font-bold cursor-pointer"><RxCross2 /></button>
                    </div>
                    <p className={`border-b ${theme === `dark` ?  `border-gray-800` : `border-gray-300`} p-2`}><span className="text-gray-500 p-2">To :</span>faslkjfa@gmail.com</p>  
                    <p className={`border-b ${theme === `dark` ?  `border-gray-800` : `border-gray-300`} p-2`}><span className="text-gray-500 p-2">From :</span>faslkjfa@gmail.com</p>  
                    <p className={`border-b ${theme === `dark` ?  `border-gray-800` : `border-gray-300`} p-2`}><span className="text-gray-500 p-2">Subject :</span>faslkjfa@gmail.com</p> 
                </div> 
                <textarea className={`bg-${theme}-main h-3/6 w-full outline-none p-4`} />
                <div className={`h-1/6 p-4 text-lg flex items-center gap-3 border-t ${theme === `dark` ?  `border-gray-800` : `border-gray-300`}`}>
                    <button onClick={sendMail} className="bg-[#4B63DD] px-8 py-2 rounded-lg flex items-baseline gap-2">Send <FaCaretDown /> </button>
                    <button className="flex items-baseline gap-2"><FaBoltLightning />Variables</button>
                    <button className="flex items-baseline gap-2"><FaEye />Preview Emails</button>
                    <IoLanguage />
                    <MdAttachment />
                    <MdOutlineAddPhotoAlternate />
                    <FaRegSmile />
                    <FaRegUser />
                    <GoArrowBoth />
                </div>
            </div>
        </>
    )
}