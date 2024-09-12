import { useEffect, useState } from "react";
import loader from '../assets/loader.gif'
import axios from "axios";
import EmailList from "./EmailList";
import EmailContent from "./EmailContent";
import EmailLead from "./EmailLead";


export default function List(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedThread, setSelectedThread] = useState(null);
    // const [isMailListClicked, setIsMailListdClicked] = useState(false)
    // const [isLeadsClicked, setIsLeadClicked] = useState(false)

    useEffect(() => {
        const interval = setInterval(async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
                headers: {
                Authorization: token,
                },
            }
            );
            setData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        }, 30000);
    
        return () => clearInterval(interval);
    }, []);
    
    if (loading) {
        return (
        <div className="h-screen w-screen flex justify-center items-center">
            <img src={loader} width={60} alt="" />
        </div>
        );
    }


    return(

        <>
            <div className="w-full h-full flex items-start">
                    <EmailList data={data} setSelectedThread={setSelectedThread}/>
                    <EmailContent  selectedThread={selectedThread}/>
                    <EmailLead />
            </div>
        </>
    )
}