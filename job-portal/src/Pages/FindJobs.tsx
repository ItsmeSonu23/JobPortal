import { Divider } from "@mantine/core"
import { SearchBar } from "../FindJobs/SearchBar"
import { Jobs } from "../FindJobs/Jobs"

export const FindJobs = ()=>{
    return(
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins']">
            <SearchBar/>
            <Divider size="sm" mx="md"/>
            <Jobs/>
        </div>
    )
}