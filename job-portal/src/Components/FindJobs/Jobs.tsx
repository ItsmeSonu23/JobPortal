import { useEffect, useState } from "react"
import { JobCart } from "./JobCard"
import { Sort } from "./Sort"
import { getAllJobs } from "../../Services/JobService"

export const Jobs = () => {
    const[jobList,setJobList] = useState([{}])
    useEffect(()=>{
        getAllJobs().then((res)=>{
            setJobList(res)
        }).catch((err)=>{
            console.log(err);  
        })
    },[])
    return <div className="p-7">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort />
        </div>
        <div className="mt-10 mx-5 flex flex-wrap gap-10">
            {
                jobList.map((job, index) => <JobCart key={index} {...job} />)
            }
        </div>
    </div>
}