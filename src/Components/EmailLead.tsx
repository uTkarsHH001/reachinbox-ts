import { useContext } from "react";
import LeadInfo from "./LeadInfo";
import { ThemeContext } from "../context/ThemeContext";
import { FaChartLine } from "react-icons/fa";

export default function EmailLead(){

    const{theme} = useContext(ThemeContext)
    return(
        <>  
            <button className="lg:hidden text-3xl p-4"><FaChartLine /></button>
            <div className="w-1/5 hidden lg:block h-full text-sm p-4">
                <p className={`my-3 font-bold ${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} py-1 px-3 rounded-lg`}>Lead Details</p>
                <div className="p-3 flex flex-col gap-3">
                    <LeadInfo name="Name" value="Orlando"/>
                    <LeadInfo name="Name" value="Orlando"/>
                    <LeadInfo name="Name" value="Orlando"/>
                    <LeadInfo name="Name" value="Orlando"/>
                </div>
                <p className={`my-3 font-bold ${theme === `dark` ? `bg-${theme}-main` : `bg-gray-100`} py-1 px-3 rounded-lg`}>Activities</p>  
            </div>
        </>
    )
}