import { useNavigate } from 'react-router-dom';
import HeaderImage from '../assets/Pasted image.png'
import g from '../assets/g.png'
import { useEffect } from 'react';

export default function Login(){

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        if(token){
            navigate('/onebox');
        }
    },[token])

    const googleLogin = () => {
        window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/onebox"
    }

    return(
        <div className={`h-screen w-screen bg-dark-bg text-dark-text`}>
            <div className={`absolute w-full p-3 border-b-2 border-dark-main`}>
                <img className='mx-auto' src={HeaderImage} width={150} alt="" />
            </div>
            <div className={`w-full h-full flex justify-center items-center`}>
                <div className={`w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12  p-4 bg-dark-main text-sm text-center rounded-2xl`}>
                    <p className="font-semibold my-2 ">Create a new account</p>
                    <button onClick={googleLogin} className="border border-slate-500 hover:opacity-75 w-4/5 p-1 rounded-md my-2 mb-5"><img className='inline m-1 w-4' src={g} alt="" /> &nbsp;Sign Up with Google</button>
                    <button className="bg-[#2e49d0] w-2/5 p-2 rounded-lg my-2">Create an Account</button>
                    <p className="my-2 text-slate-400">Alreay have an account? <button className={`text-dark-text`}>Sign In</button></p>
                </div>
            </div>
            <div className={`absolute bottom-0 w-full bg-dark-main text-sm text-gray-600 text-center p-1`}>
                <p>© 2023 Reachinbox. All rights reserved.</p>
            </div>
        </div>
    )
}