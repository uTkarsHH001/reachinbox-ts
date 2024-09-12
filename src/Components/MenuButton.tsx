
export default function SidebarButton({name, onClick, Icon, activeButton}){

    return(
        <>
            <button
                className={`flex items-center p-2 text-3xl rounded-lg ${activeButton === name ? 'bg-[#3751d4]' : ''}`}
                onClick={onClick}
            >
                <Icon />
                {activeButton === name && <p className="mx-2 text-sm font-bold md:hidden">{name}</p>}
            </button>
        </>
    )
}