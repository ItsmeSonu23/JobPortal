import { useParams } from "react-router-dom"
import { jobList } from "../../Data/Data"
import { JobCart } from "../FindJobs/JobCard"
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";

export const RecommendedJob = ()=>{
    const {id} = useParams();
    const[jobList,setJobList] = useState<any>([{}])
     useEffect(()=>{
            getAllJobs().then((res)=>{
                setJobList(res)
            }).catch((err)=>{
                console.log(err);  
            })
        },[])
    return <div className="">
           <div className="text-xl font-semibold mb-5">Recommended Talent</div>
           <div className="flex flex-col flex-wrap gap-5">
               {jobList?.map((talent:any,index:number)=>index<7 && id!=talent.id && <JobCart key={index} {...talent}/>)}
           </div>
       </div>
}