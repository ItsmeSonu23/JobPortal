import { companyData } from "../../Data/Data"

export const AboutCom = () => {
    const company: { [key: string]: any } = companyData
    return (
        // Compamny profile about section page 
        <div className="flex flex-col gap-5">
            {
                // Using object manupulation on company data 
                Object.keys(company).map((key, index) => key != "Name" && <div key={index} className="">
                    <div className="text-xl mb-3 font-semibold">{key}</div>
                    {key != "Website" && <div className="text-sm text-justify text-[var(--color-mine-shaft-300)]">{key != "Specialities"?company[key]:company[key].map((item:string,index:number)=><span key={index}>  &bull; {item}</span>)}</div>}

                    {key == "Website" && <a href={company[key]} className="text-sm text-justify text-[var(--color-electric-violet-500)]" target="_blank">{company[key]}</a>}
                </div>)
            }
        </div>
    )
}