import { useEffect, useState } from "react"
import axios from "axios";
import Message from "./Message";
interface MailData {
    id: number;
    fromName: string;
    fromEmail: string;
    toName: string;
    toEmail: string;
    subject: string;
    body: string;
    sentAt: string;
}

interface Props {
    selectedThread: string;
}

    
    const EmailMessages: React.FC<Props> = ({ selectedThread }) => {

        const [showDelete, setShowDelete] = useState(false);
        const [selectedMail, setSelectedMail] = useState<MailData[]>([]);
      
        
      
        useEffect(() => {
          const fetchMail = async () => {
            if (selectedThread) {
              try {
                const token = localStorage.getItem("token");
                const res = await axios.get<MailData[]>(
                  `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
                  {
                    headers: {
                      Authorization: token,
                    },
                  }
                );
                // @ts-ignore
                setSelectedMail(res.data.data);
              } catch (error) {
                console.error("Error fetching mail:", error);
              }
            } else {
              setSelectedMail([
                {
                  id: 0,
                  fromName: "",
                  fromEmail: "jeanne@icloud.com",
                  toName: "",
                  toEmail: "lennon.j@mail.com",
                  subject: "New Product Launch",
                  body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
                  sentAt: "2022-01-01T00:00:00.000Z",
                },
              ]);
            }
          };
          fetchMail();
        }, [selectedThread, showDelete]);

      //   if (isLoading) {
      //     return (
      //     <div className="h-full w-full flex justify-center items-center">
      //         <img src={loader} width={60} alt="" />
      //     </div>
      //     );
      // }

    return(
        <>
            {selectedMail.map(Msg => (
                <Message subject={Msg.subject} sentAt={Msg.sentAt} fromEmail={Msg.fromEmail} toEmail={Msg.toEmail} body={Msg.body}/>
            ))}
        </>
    )
}

export default EmailMessages;



