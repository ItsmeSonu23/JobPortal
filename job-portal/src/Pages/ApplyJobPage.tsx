import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { NavLink } from "react-router-dom"
import { ApplyJobCom } from "../Components/ApplyJob/ApplyJobCom"

export const ApplyJobPage = () => {
        return <div className="min-h-[100vh] bg-[var(--color-mine-shaft-950)] font=['poppins'] px-10 py-4">
                <NavLink className="my-4 inline-block " to={"/jobs"}>
                        <Button leftSection={<IconArrowLeft size={20} />} color="darkorchid" variant="light">Back</Button>
                </NavLink>
                <ApplyJobCom/>
        </div>
}