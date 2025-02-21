import { Divider } from "@mantine/core"
import { profileData } from "../Data/Data"
import { Profile } from "../Components/ProfilePage/Profile"

export const ProfilePage = () => {
    return (
        <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins']">
            <Divider mx="md" />
            {
                profileData.map((data, index) => <Profile key={index} {...data} />)
            }

        </div>
    )
}