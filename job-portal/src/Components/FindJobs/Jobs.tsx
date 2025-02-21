
import { jobList } from "../../Data/Data"
import { JobCart } from "./JobCard"
import { Sort } from "./Sort"

export const Jobs = () => {
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