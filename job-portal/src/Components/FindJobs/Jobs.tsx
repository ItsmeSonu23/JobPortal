import { useEffect, useState } from "react"
import { JobCart } from "./JobCard"
import { Sort } from "./Sort-LAPTOP-03RLHC76"
import { getAllJobs } from "../../Services/JobService"

/**
 * Jobs Component
 * 
 * This component displays a list of job listings with sorting functionality.
 * It fetches job data on mount and displays them in a responsive grid layout.
 *
 * @component
 * 
 * Features:
 * - Fetches job listings data on component mount
 * - Displays "Recommended Jobs" heading
 * - Includes Sort component for filtering options
 * - Shows job listings in a responsive flex grid
 * - Handles API errors gracefully
 *
 * State Management:
 * - Uses useState to maintain jobList state
 * - Initial state is array with empty object
 * - Updates state with API response data
 *
 * Layout:
 * - Outer padding of 28px (p-7)
 * - Flex container with space-between for header
 * - Job grid with 40px gap between cards (gap-10)
 * - 40px top margin and 20px horizontal margins (mt-10 mx-5)
 * 
 * Dependencies:
 * - JobCart component for individual job displays
 * - Sort component for filtering functionality
 * - getAllJobs service for API calls
 *
 * Error Handling:
 * - Catches and logs API errors
 * - Maintains existing job list on error
 *
 * @returns {JSX.Element} A container with job listings header and grid
 */
export const Jobs = () => {
    const [jobList, setJobList] = useState([{}])
    
    useEffect(() => {
        getAllJobs().then((res) => {
            setJobList(res)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

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