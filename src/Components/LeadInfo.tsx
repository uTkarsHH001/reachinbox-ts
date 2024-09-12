
export default function LeadInfo({name, value}){

    return(
        <>
            <div className="flex justify-between">
                <p>{name}</p>
                <p className="text-gray-400">{value}</p>
            </div>
        </>
    )
}