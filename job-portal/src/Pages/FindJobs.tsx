import { Divider } from "@mantine/core"
import { SearchBar } from "../Components/FindTalent/SearchBar"
import { Jobs } from "../Components/FindJobs/Jobs"

export const FindJobs = ()=>{
    return(
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins']">
            <SearchBar/>
            <Divider size="sm" mx="md"/>
            <Jobs/>
        </div>
    )
}