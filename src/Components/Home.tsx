import Image from '../assets/Image.png'
export default function Home(){

    return(
        <>
            <div className='w-full h-full flex flex-col text-center justify-center items-center gap-4'>
                <img src={Image} className='w-72' alt="" />
                <p className='text-3xl font-semibold'>It’s the beginning of a legendary sales pipeline </p>
                <p className='text-xl w-4/5 md:w-1/4'>When you have inbound E-mails you’ll see them here</p>
            </div>
        </>
    )
}