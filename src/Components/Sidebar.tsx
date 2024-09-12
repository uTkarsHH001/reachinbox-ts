import logo from '../assets/logo.png'
import Avatar from "react-avatar";
import Menubar from "./Menubar";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Sidebar(){

    const {theme} = useContext(ThemeContext)

    return(
        <>
            <div className={`bg-${theme}-main text-${theme}-text p-3 w-full lg:w-16 lg:h-full absolute bottom-0 text-3xl lg:flex lg:flex-col lg:justify-between ${theme === `light` && `border-r-2`} border-slate-200`}>
                <div className='lg:h-1/6 hidden lg:block'>
                <img src={logo} alt="" />
                </div>
                <div className='lg:h-4/6'>
                <Menubar />
                </div>
                <div className='lg:h-1/6 hidden lg:block'>
                <Avatar className='rounded-full absolute bottom-2' size='35' name="Utkarsh Kataria" />
                </div>
            </div>
        </>
    )
}