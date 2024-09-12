import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type MessageProps = {
  subject: string;
  sentAt: string;
  fromEmail: string;
  toEmail: string;
  body: string;
};

export default function Message({ subject, sentAt, fromEmail, toEmail, body }: MessageProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-${theme}-main text-${theme}-text p-4 my-4 rounded border border-slate-700 text-sm`}> 
      <div className="flex justify-between">
        <p className="font-semibold">{subject}</p>
        <p className="text-gray-400 text-xs">{new Date(sentAt).toLocaleString()}</p>
      </div>
      <p className="text-gray-400 my-2">From : {fromEmail}</p>
      <p className="text-gray-500 my-2">To : {toEmail}</p>
      <div
        className={`w-4/5 text-gray-${theme === `light` ? `600` : `300`} my-3`}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
