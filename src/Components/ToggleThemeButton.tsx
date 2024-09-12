import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
export default function ToggleThemeButton(){

    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <>
            <button
                className={`active:bg-slate-500 hover:bg-slate-500 active:rounded-full hover:rounded-full text-${theme}-text text-lg p-2`}
                onClick={toggleTheme}
            >
                    {theme === 'dark' ? <IoSunnyOutline/> : <FaMoon/>}
            </button>
        </>
    )
}