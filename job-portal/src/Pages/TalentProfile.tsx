import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"
import {  profileData } from "../Data/Data"
import { RecommendedTalemt } from "../Components/TalentProfile/RecommendedTalent"
import { Profile } from "../Components/TalentProfile/Profile"

export const TalentProfile = () => {
    return <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] px-10 py-4">
        <NavLink className="my-4 inline-block " to={"/find-talent"}>
            <Button leftSection={<IconArrowLeft size={20}/>} color="darkorchid" variant="light">Back</Button>
        </NavLink>
        <Divider size="sm" />
        <div className="flex gap-10">
            {
                profileData.map((data,index)=> <Profile key={index} {...data} />)
            }
            <RecommendedTalemt/>
        </div>
    </div>
}