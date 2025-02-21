import { Divider } from "@mantine/core"
import { SearchBar } from "../Components/FindTalent/SearchBar"
import { Talents } from "../Components/FindTalent/Talents"

export const FindTalentPage = () => {
    return <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins']">
        <SearchBar/>
        <Divider size="sm" mx="md" />
        <Talents/>
    </div>
}