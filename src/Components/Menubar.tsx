import { useState } from 'react';
import MenuButton from './MenuButton'
import { GiProgression,GiHamburgerMenu } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";
import { FaStoreAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbUserSearch } from "react-icons/tb";
import { MdHomeFilled } from "react-icons/md"

export default function Menubar(){

    const [activeButton, setActiveButton] = useState('');

    function handleButtonClick(buttonName:string) {
        setActiveButton(buttonName);
    }

    return(
        <>
            <div className='h-full flex lg:flex-col items-center justify-around'>
                <div className="hidden lg:block">
                    <MenuButton 
                        name="Home"
                        onClick={() => handleButtonClick('Home')}
                        Icon = {MdHomeFilled}
                        activeButton = {activeButton}
                    />
                </div>
                <div className="lg:order-last">
                    <MenuButton 
                        name="Progression"
                        onClick={() => handleButtonClick('Progression')}
                        Icon = {GiProgression}
                        activeButton = {activeButton}
                    />
                </div>
                <div className="hidden lg:block">
                    <MenuButton 
                        name="Search"
                        onClick={() => handleButtonClick('Search')}
                        Icon = {TbUserSearch}
                        activeButton = {activeButton}
                    />
                </div>
                <MenuButton 
                    name="Mail"
                    onClick={() => handleButtonClick('Mail')}
                    Icon = {IoMail}
                    activeButton = {activeButton}
                />
                <MenuButton 
                    name="Telegram"
                    onClick={() => handleButtonClick('Telegram')}
                    Icon = {BiLogoTelegram}
                    activeButton = {activeButton}
                />
                <div className="hidden lg:block">
                    <MenuButton 
                        name="List"
                        onClick={() => handleButtonClick('List')}
                        Icon = {GiHamburgerMenu}
                        activeButton = {activeButton}
                    />
                </div>
                <MenuButton 
                    name="Store"
                    onClick={() => handleButtonClick('Store')}
                    Icon = {FaStoreAlt}
                    activeButton = {activeButton}
                />
                <MenuButton 
                    name="Profile"
                    onClick={() => handleButtonClick('Profile')}
                    Icon = {CgProfile}
                    activeButton = {activeButton}
                />
            </div>
        </>
    )
}