import { useContext } from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";


export default function Topbar(){

    const { theme } = useContext(ThemeContext)
    return(
        <>
            <div className={` ${theme === `dark` ? `bg-[#1F1F1F]` : `bg-light-bg`} pl-20 absolute top-0 w-full flex justify-between items-baseline p-2 text-${theme}-text ${theme === `light` && `border-b-2`} border-slate-200`}>
                <div>
                    <p className={`font-semibold`}>Onebox</p>
                </div>
                <div className="flex gap-8">
                    <div>
                        <ToggleThemeButton />
                    </div>
                    <div className="flex items-end gap-2 p-2">
                        <p>Tim Workspace</p> <IoIosArrowDown />
                    </div>
                </div>
            </div>
        </>
    )
}