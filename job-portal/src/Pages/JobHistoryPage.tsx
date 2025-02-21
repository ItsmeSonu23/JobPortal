import { JobHistory } from "../Components/JobHistory/JobHistory"


export const JobHistoryPage = () => {
    return (
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] px-10 py-4">
            <div className=" my-5">
                <JobHistory/>
            </div>
        </div>
    )
}