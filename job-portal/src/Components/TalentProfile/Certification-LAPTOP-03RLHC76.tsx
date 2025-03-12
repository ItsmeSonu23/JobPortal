/**
 * Certification component displays a single certification entry with issuer logo, name, and details
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.issuer - Name of certification issuing organization
 * @param {string} props.name - Name of the certification
 * @param {string} props.issueDate - Date when certification was issued
 * @param {string} props.certificateId - Unique identifier for the certification
 * @returns {JSX.Element} Certification card with logo, name, issuer and details
 */
export const Certification = (props:any) => {
    return <div className="flex justify-between">
        <div className="flex gap-2 items-center">
            <div className="p-2 bg-[var(--color-mine-shaft-800)] rounded-md">
                <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
            </div>
            <div className="flex flex-col">
                <div className="font-semibold">{props.name}</div>
                <div className="text-sm text-[(--color-mine-shaft-300)]">{props.issuer}</div>
            </div>
        </div>
        <div className="flex items-end flex-col">
            <div className="text-sm text-[(--color-mine-shaft-300)]">{props.issueDate}</div>
            <div className="text-sm text-[(--color-mine-shaft-300)]">{props.certificateId}</div>
        </div>
    </div>
}