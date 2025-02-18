import { jobList } from "../Data/Data"
import { JobCart } from "../FindJobs/JobCard"
import { Sort } from "../FindJobs/Sort"

export const CompanyJobs = () => {
    return <div className="p-7">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
            {
                jobList.map((job, index) => <JobCart key={index} {...job} />)
            }
        </div>
    </div>
}