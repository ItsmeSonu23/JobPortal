import { talents } from "../Data/Data"
import { Sort } from "../FindJobs/Sort"
import { TalentCard } from "./TalentCard"

export const Talents = () => {
    return <div className="p-7">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Talents</div>
            <Sort />
        </div>
        <div className="mt-10 mx-5 flex flex-wrap gap-10">
            {
                talents.map((talent,index)=><TalentCard key={index} {...talent}/>)
            }
        </div>
    </div>
}