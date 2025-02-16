import { jobList } from "../Data/Data"
import { JobCart } from "../FindJobs/JobCard"

export const RecommendedJob = ()=>{
    return <div className="">
           <div className="text-xl font-semibold mb-5">Recommended Talent</div>
           <div className="flex flex-col flex-wrap gap-5">
               {jobList.map((talent,index)=>index<7 && <JobCart key={index} {...talent}/>)}
           </div>
       </div>
}