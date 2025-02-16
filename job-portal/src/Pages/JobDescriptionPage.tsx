import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"
import { JobDescription } from "../JobDescription/JobDescription"
import { RecommendedJob } from "../JobDescription/RecommendedJob"

export const JobDescriptionPage = ()=>{
    return <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] px-10 py-4">
    <NavLink className="my-4 inline-block " to={"/find-jobs"}>
        <Button leftSection={<IconArrowLeft size={20}/>} color="darkorchid" variant="light">Back</Button>
    </NavLink>
    
    <div className="flex gap-10  justify-around">
      <JobDescription/>
      <RecommendedJob/>
    </div>
</div>
}