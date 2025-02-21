import { talents } from "../../Data/Data"
import { TalentCard } from "../FindTalent/TalentCard"

export const CompanyEmpoyees = () => {
    return <div className="mt-10 mx-3 flex flex-wrap gap-10">
        {
            talents.map((talent, index) =>index<6 && <TalentCard key={index} {...talent} />)
        }
    </div>
}