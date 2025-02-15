import { Divider } from "@mantine/core"
import { SearchBar } from "../FindJobs/SearchBar"

export const FindJobs = ()=>{
    return(
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins']">
            <Divider size="sm" mx="md"/>
            <SearchBar/>
        </div>
    )
}